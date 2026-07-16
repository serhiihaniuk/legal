#!/usr/bin/env node

import { createHash } from "node:crypto"
import {
  access,
  mkdir,
  mkdtemp,
  readFile,
  rename,
  rm,
  stat,
  writeFile,
} from "node:fs/promises"
import os from "node:os"
import path from "node:path"
import process from "node:process"
import { fileURLToPath } from "node:url"

import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs"

import { buildManifest, buildObservedFacts, buildStructure, projectArticles } from "./lib/artifacts.mjs"
import {
  validateConfig,
  ConfigValidationError,
} from "./lib/config.mjs"
import { CorpusValidationError } from "./lib/errors.mjs"
import { extractPages, extractProvisions } from "./lib/extraction.mjs"
import { resolveRepoRoot } from "./lib/repo-root.mjs"
import {
  assertNoFatalDiagnostics,
  diagnostic,
  makeDiagnostics,
  validateCorpusFacts,
} from "./lib/validation.mjs"

/**
 * @param {unknown} error
 * @returns {string}
 */
function errorMessage(error) {
  return error instanceof Error ? error.message : String(error)
}

/**
 * @param {unknown} error
 * @returns {string | undefined}
 */
function errorCode(error) {
  return error && typeof error === "object" && "code" in error
    ? /** @type {{ code?: string }} */ (error).code
    : undefined
}

/**
 * @param {string} filePath
 * @returns {Promise<any>}
 */
async function readJson(filePath) {
  return JSON.parse(await readFile(filePath, "utf8"))
}

/**
 * @param {string} filePath
 * @returns {Promise<any>}
 */
async function readOptionalJson(filePath) {
  try {
    return await readJson(filePath)
  } catch (error) {
    if (errorCode(error) === "ENOENT") return undefined
    throw error
  }
}

/**
 * @param {string} filePath
 * @returns {Promise<boolean>}
 */
async function pathExists(filePath) {
  try {
    await access(filePath)
    return true
  } catch {
    return false
  }
}

/**
 * @param {string} filePath
 * @param {unknown} value
 * @returns {Promise<void>}
 */
async function writeJson(filePath, value) {
  await mkdir(path.dirname(filePath), { recursive: true })
  await writeFile(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8")
}

const DEFAULT_FETCH_TIMEOUT_MS = 60_000

/**
 * Read the fetch timeout from the environment so a slow or hung official
 * endpoint can be tuned per invocation without editing source; an invalid or
 * absent value falls back to DEFAULT_FETCH_TIMEOUT_MS.
 * @returns {number}
 */
export function resolveFetchTimeoutMs(env = process.env) {
  const parsed = Number(env.LEGAL_CORPUS_FETCH_TIMEOUT_MS)
  return Number.isFinite(parsed) && parsed > 0 ? parsed : DEFAULT_FETCH_TIMEOUT_MS
}

/**
 * Fetch a URL's bytes with an abort timeout and an optional content-type
 * sanity check, so a hung official endpoint fails after a bounded wait
 * instead of stalling preparation indefinitely, and a response whose
 * content-type clearly does not match what was requested (an HTML error
 * page in place of JSON or a PDF, for example) fails with a clear message
 * instead of only surfacing later as a JSON-parse or PDF-magic-byte failure.
 * A missing content-type header is not treated as an error: some official
 * endpoints omit it even for a correct response.
 * @param {string} url
 * @param {{ timeoutMs?: number, expectedContentType?: RegExp, fetchImpl?: typeof fetch }} [options]
 * @returns {Promise<Uint8Array>}
 */
export async function fetchBytes(url, { timeoutMs = DEFAULT_FETCH_TIMEOUT_MS, expectedContentType, fetchImpl = fetch } = {}) {
  let response
  try {
    response = await fetchImpl(url, {
      headers: { "user-agent": "legalizacja-atlas-local-corpus/1.0" },
      signal: AbortSignal.timeout(timeoutMs),
    })
  } catch (error) {
    if (error instanceof Error && (error.name === "TimeoutError" || error.name === "AbortError")) {
      throw new Error(`ELI request to ${url} timed out after ${timeoutMs}ms`)
    }
    throw error
  }

  if (!response.ok) {
    throw new Error(`ELI request failed: ${response.status} ${url}`)
  }

  if (expectedContentType) {
    const contentType = response.headers.get("content-type") ?? ""
    if (contentType && !expectedContentType.test(contentType)) {
      throw new Error(
        `ELI request to ${url} returned content-type "${contentType}", expected to match ${expectedContentType}`
      )
    }
  }

  return new Uint8Array(await response.arrayBuffer())
}

/**
 * @param {Uint8Array} bytes
 * @returns {string}
 */
function sha256Bytes(bytes) {
  return createHash("sha256").update(bytes).digest("hex")
}

/**
 * @param {{ dataDirectory: string, publicDirectory: string }} options
 * @returns {Promise<{ manifests: any[], errors: import("./lib/types.mjs").Diagnostic[] }>}
 */
async function readExistingEditionState({ dataDirectory, publicDirectory }) {
  /** @type {Array<{ path: string, value: any }>} */
  const manifests = []
  /** @type {import("./lib/types.mjs").Diagnostic[]} */
  const errors = []
  const manifestPaths = [
    path.join(dataDirectory, "manifest.json"),
    path.join(publicDirectory, "manifest.json"),
  ]

  for (const manifestPath of manifestPaths) {
    const manifest = await readOptionalJson(manifestPath)
    if (manifest) manifests.push({ path: manifestPath, value: manifest })
  }

  for (const directory of [dataDirectory, publicDirectory]) {
    if (!(await pathExists(directory))) continue
    const manifestPath = path.join(directory, "manifest.json")
    if (!(await pathExists(manifestPath))) {
      errors.push(
        diagnostic(
          "fatal",
          "identity.existing-directory-without-manifest",
          `Existing edition directory ${directory} has no manifest.json`,
          manifestPath
        )
      )
    }
  }

  const sourcePath = path.join(publicDirectory, "source.pdf")
  const publicManifest = manifests.find(({ path: manifestPath }) =>
    manifestPath === path.join(publicDirectory, "manifest.json")
  )
  if (publicManifest && (await pathExists(sourcePath))) {
    const sourceBytes = new Uint8Array(await readFile(sourcePath))
    const actualChecksum = sha256Bytes(sourceBytes)
    if (publicManifest.value.pdfSha256 && publicManifest.value.pdfSha256 !== actualChecksum) {
      errors.push(
        diagnostic(
          "fatal",
          "identity.local-pdf-checksum-mismatch",
          "Existing source.pdf does not match its existing manifest checksum",
          sourcePath,
          { manifest: publicManifest.value.pdfSha256, actual: actualChecksum }
        )
      )
    }
  }

  return { manifests: manifests.map(({ value }) => value), errors }
}

/**
 * @returns {string}
 */
function nowWithoutMilliseconds() {
  return new Date().toISOString().replace(/\.\d{3}Z$/, "Z")
}

/**
 * @param {{ dataDirectory: string, publicDirectory: string, stagedDataDirectory: string, stagedPublicDirectory: string }} options
 * @returns {Promise<void>}
 */
async function publishEdition({
  dataDirectory,
  publicDirectory,
  stagedDataDirectory,
  stagedPublicDirectory,
}) {
  const token = `${process.pid}-${Date.now()}-${Math.random().toString(16).slice(2)}`
  const targets = [
    { target: dataDirectory, staged: stagedDataDirectory },
    { target: publicDirectory, staged: stagedPublicDirectory },
  ]
  /** @type {Array<{ target: string, backup: string }>} */
  const backups = []
  /** @type {string[]} */
  const installed = []

  await mkdir(path.dirname(dataDirectory), { recursive: true })
  await mkdir(path.dirname(publicDirectory), { recursive: true })

  try {
    for (const { target } of targets) {
      if (!(await pathExists(target))) continue
      const backup = `${target}.backup-${token}`
      await rename(target, backup)
      backups.push({ target, backup })
    }

    for (const { target, staged } of targets) {
      await rename(staged, target)
      installed.push(target)
    }

    await Promise.all(backups.map(({ backup }) => rm(backup, { recursive: true, force: true })))
  } catch (error) {
    for (const target of installed) {
      await rm(target, { recursive: true, force: true }).catch(() => {})
    }
    for (const { target, backup } of backups.reverse()) {
      if (await pathExists(backup)) {
        await rename(backup, target).catch(() => {})
      }
    }
    throw error
  }
}

/**
 * @param {unknown} error
 * @returns {any}
 */
function asValidationError(error) {
  if (error instanceof ConfigValidationError || error instanceof CorpusValidationError) return error
  return error
}

/**
 * @param {string[]} argv
 * @returns {{ configPath: string | undefined, forceRebuild: boolean }}
 */
export function parseArguments(argv) {
  let configPath
  let forceRebuild = false
  for (const value of argv) {
    if (value === "--force-rebuild") forceRebuild = true
    else if (configPath === undefined) configPath = value
    else throw new Error(`Unexpected argument: ${value}`)
  }
  return { configPath, forceRebuild }
}

/**
 * An edition's committed artifacts are immutable once built: rebuilding the
 * same editionId must be an explicit decision, not a side effect of rerunning
 * a build command. Without --force-rebuild, a pinned edition rebuilt months
 * later would otherwise silently replace its directories and rewrite its
 * audit metadata.
 * @param {{ editionId: string, existingManifests: Array<Record<string, unknown>>, forceRebuild: boolean }} options
 */
export function assertRebuildAllowed({ editionId, existingManifests, forceRebuild }) {
  if (existingManifests.length === 0 || forceRebuild) return
  const message = `Edition ${editionId} already has committed artifacts; rerun with --force-rebuild to intentionally rebuild it`
  throw new CorpusValidationError(message, {
    fatal: [diagnostic("fatal", "identity.edition-already-built", message, "editionId")],
  })
}

/**
 * Preserve the original manifest `builtAt` when a forced rebuild's fetched
 * PDF checksum is unchanged, so an identical source produces an identical
 * committed manifest instead of only differing by build time. A genuinely
 * different PDF checksum under the same editionId already fails earlier, in
 * validateExistingEditionIdentity, so reaching this function with a matching
 * checksum means the rebuild is truly a no-op at the content level.
 * @param {{ existingManifests: Array<Record<string, unknown>>, pdfSha256: string, now: string }} options
 * @returns {string}
 */
export function resolveBuiltAt({ existingManifests, pdfSha256, now }) {
  const unchanged = existingManifests.find((manifest) => manifest.pdfSha256 === pdfSha256)
  return typeof unchanged?.builtAt === "string" ? unchanged.builtAt : now
}

/**
 * Build and publish one corpus edition. `fetchImpl` is a test seam only;
 * callers that omit it use the normal global fetch and official URLs.
 * @param {{ projectRoot?: string, configPath: string, forceRebuild?: boolean, fetchImpl?: typeof fetch, getDocumentImpl?: typeof getDocument, emit?: boolean }} options
 * @returns {Promise<Record<string, unknown>>}
 */
export async function buildDocument({
  projectRoot = resolveRepoRoot(import.meta.url),
  configPath,
  forceRebuild = false,
  fetchImpl = fetch,
  getDocumentImpl = getDocument,
  emit = true,
}) {
  const absoluteConfigPath = path.resolve(projectRoot, configPath)
  configPath = absoluteConfigPath
  const rawConfig = await readJson(configPath)
  const config = validateConfig(rawConfig)
  const dataDirectory = path.join(
    projectRoot,
    "app/data/legal-corpus",
    config.editionId
  )
  const publicDirectory = path.join(
    projectRoot,
    "public/legal-sources",
    config.editionId
  )
  const existing = await readExistingEditionState({ dataDirectory, publicDirectory })
  if (existing.errors.length > 0) {
    throw new CorpusValidationError("Existing edition identity validation failed", {
      fatal: existing.errors,
    })
  }
  assertRebuildAllowed({
    editionId: config.editionId,
    existingManifests: existing.manifests,
    forceRebuild,
  })

  const fetchTimeoutMs = resolveFetchTimeoutMs()
  const [metadataBytes, pdfBytes] = await Promise.all([
    fetchBytes(config.source.metadataUrl, {
      timeoutMs: fetchTimeoutMs,
      expectedContentType: /application\/json/iu,
      fetchImpl,
    }),
    fetchBytes(config.source.pdfUrl, {
      timeoutMs: fetchTimeoutMs,
      expectedContentType: /application\/pdf/iu,
      fetchImpl,
    }),
  ])
  let metadata
  try {
    metadata = JSON.parse(new TextDecoder().decode(metadataBytes))
  } catch (error) {
    const message = `Official metadata is not valid JSON: ${errorMessage(error)}`
    throw new CorpusValidationError(message, {
      fatal: [diagnostic("fatal", "source.metadata-invalid-json", message, "metadata")],
    })
  }

  const pdfSha256 = sha256Bytes(pdfBytes)
  const pages = await extractPages(pdfBytes.slice(), getDocumentImpl)
  const provisions = extractProvisions(pages, {
    documentId: config.documentId,
    editionId: config.editionId,
    sourcePdfSha256: pdfSha256,
    profile: config.extraction.profile,
  })
  const observed = buildObservedFacts(pages, provisions)
  const structure = buildStructure(provisions, {
    schemaVersion: config.schemaVersion,
    documentId: config.documentId,
    editionId: config.editionId,
    profile: config.extraction.profile,
  })
  const validation = validateCorpusFacts({
    config,
    metadata,
    pdfBytes,
    pdfSha256,
    pages,
    provisions,
    structure,
    observed,
    existingManifests: existing.manifests,
  })
  assertNoFatalDiagnostics(validation)

  const diagnostics = makeDiagnostics({ config, observed, result: validation })
  const manifest = buildManifest({
    config,
    metadata,
    pdfSha256,
    observed,
    diagnostics: validation,
    builtAt: resolveBuiltAt({
      existingManifests: existing.manifests,
      pdfSha256,
      now: nowWithoutMilliseconds(),
    }),
  })
  const articles = projectArticles(provisions)
  const stageRoot = await mkdtemp(path.join(os.tmpdir(), `legal-corpus-${config.editionId}-`))
  const stagedDataDirectory = path.join(stageRoot, "data")
  const stagedPublicDirectory = path.join(stageRoot, "public")

  try {
    await Promise.all([
      mkdir(stagedDataDirectory, { recursive: true }),
      mkdir(stagedPublicDirectory, { recursive: true }),
    ])
    await Promise.all([
      writeJson(path.join(stagedDataDirectory, "manifest.json"), manifest),
      writeJson(path.join(stagedDataDirectory, "metadata.json"), metadata),
      writeJson(path.join(stagedDataDirectory, "pages.json"), pages),
      writeJson(path.join(stagedDataDirectory, "provisions.json"), provisions),
      writeJson(path.join(stagedDataDirectory, "structure.json"), structure),
      writeJson(path.join(stagedDataDirectory, "diagnostics.json"), diagnostics),
      writeJson(path.join(stagedDataDirectory, "articles.json"), articles),
      writeJson(path.join(stagedPublicDirectory, "manifest.json"), manifest),
      writeFile(path.join(stagedPublicDirectory, "source.pdf"), pdfBytes),
    ])
    await publishEdition({
      dataDirectory,
      publicDirectory,
      stagedDataDirectory,
      stagedPublicDirectory,
    })
  } finally {
    await rm(stageRoot, { recursive: true, force: true })
  }

  const result = {
    document: config.documentId,
    edition: config.editionId,
    pages: observed.pageCount,
    pagesWithText: observed.textLayerPageCount,
    provisions: observed.provisionCount,
    articles: observed.articleCount,
    pdfSha256,
  }
  if (emit) process.stdout.write(`${JSON.stringify(result)}\n`)
  return result
}

async function main() {
  const { configPath, forceRebuild } = parseArguments(process.argv.slice(2))
  if (!configPath) {
    throw new Error(
      "Usage: node scripts/legal-corpus/build-document.mjs <document-config.json> [--force-rebuild]"
    )
  }
  await buildDocument({ configPath, forceRebuild })
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    await main()
  } catch (error) {
    const normalizedError = asValidationError(error)
    if (normalizedError?.diagnostics?.fatal) {
      process.stderr.write(`${JSON.stringify(normalizedError.diagnostics, null, 2)}\n`)
    }
    process.stderr.write(`${error instanceof Error ? error.stack : error}\n`)
    process.exitCode = 1
  }
}
