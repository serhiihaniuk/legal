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

import {
  buildManifest,
  buildObservedFacts,
  buildStructure,
  projectArticles,
} from "./lib/artifacts.mjs"
import { validateConfig, ConfigValidationError } from "./lib/config.mjs"
import { CorpusValidationError } from "./lib/errors.mjs"
import {
  extractPages,
  extractProvisions,
  selectTemporalText,
  sha256,
} from "./lib/extraction.mjs"
import { resolveRepoRoot } from "./lib/repo-root.mjs"
import {
  assertNoFatalDiagnostics,
  diagnostic,
  makeDiagnostics,
  validateCorpusFacts,
} from "./lib/validation.mjs"

/**
 * @typedef {object} AmendmentOverlayOperation
 * @property {string} provisionId
 * @property {"replace-once"} type
 * @property {string} search
 * @property {string} replace
 * @property {string} amendmentLocator
 */

/**
 * @typedef {object} ApplyAmendmentOverlayOptions
 * @property {any} config
 * @property {any[]} provisions
 * @property {string} [amendmentPdfSha256]
 */

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
  return Number.isFinite(parsed) && parsed > 0
    ? parsed
    : DEFAULT_FETCH_TIMEOUT_MS
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
export async function fetchBytes(
  url,
  {
    timeoutMs = DEFAULT_FETCH_TIMEOUT_MS,
    expectedContentType,
    fetchImpl = fetch,
  } = {}
) {
  let response
  try {
    response = await fetchImpl(url, {
      headers: { "user-agent": "legalizacja-atlas-local-corpus/1.0" },
      signal: AbortSignal.timeout(timeoutMs),
    })
  } catch (error) {
    if (
      error instanceof Error &&
      (error.name === "TimeoutError" || error.name === "AbortError")
    ) {
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
 * @param {any} provision
 * @returns {any}
 */
function baseSourceSpan(provision) {
  return {
    sourceId: "base",
    role: "base",
    locator: provision.locator,
    startPdfPage: provision.startPdfPage,
    endPdfPage: provision.endPdfPage,
    sourcePdfSha256: provision.sourcePdfSha256,
  }
}

/**
 * @param {any} config
 * @param {string} sourcePdfSha256
 * @returns {NonNullable<Parameters<typeof extractProvisions>[1]>}
 */
function configuredExtractionOptions(config, sourcePdfSha256) {
  return {
    documentId: config.documentId,
    editionId: config.editionId,
    sourcePdfSha256,
    profile: config.extraction.profile,
    ignoredArticleOccurrences:
      config.extraction.ignoredArticleOccurrences ?? [],
    excludedArticleOccurrences:
      config.extraction.excludedArticleOccurrences ?? [],
    futureTextExclusions: config.extraction.futureTextExclusions ?? [],
    provisionStatusOverrides: config.extraction.provisionStatusOverrides ?? [],
  }
}

/**
 * @param {any} source
 * @param {Uint8Array} pdfBytes
 * @returns {string}
 */
function validateSupplementalPdf(source, pdfBytes) {
  if (
    pdfBytes.length < 5 ||
    new TextDecoder().decode(pdfBytes.slice(0, 5)) !== "%PDF-"
  ) {
    throw new CorpusValidationError(
      `Supplemental source ${source.id} did not return a readable PDF`,
      {
        fatal: [
          diagnostic(
            "fatal",
            "source.supplemental-pdf-not-pdf",
            `Supplemental source ${source.id} did not return a readable PDF`,
            `supplementalSources.${source.id}.pdfUrl`
          ),
        ],
      }
    )
  }
  const checksum = sha256Bytes(pdfBytes)
  if (checksum !== source.expectedPdfSha256) {
    throw new CorpusValidationError(
      `Supplemental source ${source.id} checksum does not match its pin`,
      {
        fatal: [
          diagnostic(
            "fatal",
            "source.supplemental-pdf-checksum-pin-mismatch",
            `Supplemental source ${source.id} checksum does not match its pin`,
            `supplementalSources.${source.id}.expectedPdfSha256`,
            { expected: source.expectedPdfSha256, actual: checksum }
          ),
        ],
      }
    )
  }
  return checksum
}

/**
 * @param {{
 *   config: any,
 *   provisions: any[],
 *   traces: any[],
 *   supplementalPdfSha256ById: Map<string, string>,
 * }} options
 * @returns {any[]}
 */
function applyTemporalProvenance({
  config,
  provisions,
  traces,
  supplementalPdfSha256ById,
}) {
  if (traces.length === 0) return provisions
  /** @type {Map<string, any[]>} */
  const spansByProvisionId = new Map()

  for (const trace of traces) {
    const sourcePdfSha256 = supplementalPdfSha256ById.get(trace.sourceId)
    if (!sourcePdfSha256) {
      throw new CorpusValidationError(
        `Temporal source ${trace.sourceId} has no fetched PDF checksum`,
        {
          fatal: [
            diagnostic(
              "fatal",
              "temporal-selection.missing-source-checksum",
              `Temporal source ${trace.sourceId} has no fetched PDF checksum`,
              `temporalTextSelection.sources.${trace.sourceId}`
            ),
          ],
        }
      )
    }
    const counterfactual = extractProvisions(trace.counterfactualPages, {
      ...configuredExtractionOptions(config, provisions[0]?.sourcePdfSha256),
    })
    const counterfactualById = new Map(
      counterfactual.map((provision) => [provision.id, provision])
    )
    const affected = provisions.filter((provision) => {
      const prior = counterfactualById.get(provision.id)
      return (
        !prior ||
        prior.text !== provision.text ||
        trace.introducedArticleLocators.has(provision.locator) ||
        trace.textMarkers.some((/** @type {string} */ marker) =>
          provision.text.includes(marker)
        )
      )
    })
    if (affected.length !== trace.expectedProvisionCount) {
      throw new CorpusValidationError(
        `Temporal source ${trace.sourceId} affected an unexpected provision inventory`,
        {
          fatal: [
            diagnostic(
              "fatal",
              "temporal-selection.provision-count-mismatch",
              `Temporal source ${trace.sourceId} expected ${trace.expectedProvisionCount} affected provisions but observed ${affected.length}`,
              `temporalTextSelection.sources.${trace.sourceId}.expectedProvisionCount`,
              {
                expected: trace.expectedProvisionCount,
                observed: affected.length,
                provisionIds: affected.map((provision) => provision.id),
              }
            ),
          ],
        }
      )
    }
    for (const provision of affected) {
      const spans = spansByProvisionId.get(provision.id) ?? []
      spans.push({
        sourceId: trace.sourceId,
        role: "effective-date",
        locator: trace.locator,
        sourcePdfSha256,
        effectiveDate: trace.effectiveDate,
      })
      spansByProvisionId.set(provision.id, spans)
    }
  }

  return provisions.map((provision) => {
    const spans = spansByProvisionId.get(provision.id)
    return spans
      ? { ...provision, sourceSpans: [baseSourceSpan(provision), ...spans] }
      : provision
  })
}

/**
 * @param {any} provision
 * @param {string} amendmentSourceId
 * @param {string} amendmentPdfSha256
 * @param {string} effectiveDate
 * @param {AmendmentOverlayOperation} operation
 * @returns {any}
 */
function applyReplaceOnceOperation(
  provision,
  amendmentSourceId,
  amendmentPdfSha256,
  effectiveDate,
  operation
) {
  if (provision.id !== operation.provisionId) return provision
  const occurrences = provision.text.split(operation.search).length - 1
  if (occurrences !== 1) {
    throw new CorpusValidationError(
      `Overlay operation for ${operation.provisionId} expected exactly one match but found ${occurrences}`,
      {
        fatal: [
          diagnostic(
            "fatal",
            "overlay.operation-match-count",
            `Overlay operation for ${operation.provisionId} expected exactly one match but found ${occurrences}`,
            `amendmentOverlay.operations.${operation.provisionId}`,
            { expected: 1, observed: occurrences }
          ),
        ],
      }
    )
  }
  const text = provision.text.replace(operation.search, operation.replace)
  return {
    ...provision,
    text,
    sourceTextHash: sha256(text),
    sourceSpans: [
      ...(provision.sourceSpans ?? [baseSourceSpan(provision)]),
      {
        sourceId: amendmentSourceId,
        role: "amendment",
        locator: operation.amendmentLocator,
        sourcePdfSha256: amendmentPdfSha256,
        effectiveDate,
      },
    ],
    amendmentOverlay: {
      kind: "replace-once",
      amendmentSourceId,
      amendmentLocator: operation.amendmentLocator,
      effectiveDate,
      baseSourceTextHash: provision.sourceTextHash,
      compiledSourceTextHash: sha256(text),
    },
  }
}

/**
 * @param {ApplyAmendmentOverlayOptions} options
 * @returns {any[]}
 */
function applyAmendmentOverlay({ config, provisions, amendmentPdfSha256 }) {
  if (!config.amendmentOverlay) return provisions
  const overlay = config.amendmentOverlay
  if (!amendmentPdfSha256) {
    throw new CorpusValidationError(
      "Amendment source PDF checksum is missing",
      {
        fatal: [
          diagnostic(
            "fatal",
            "overlay.missing-amendment-pdf-checksum",
            "An amendment overlay requires a fetched amendment source PDF checksum",
            "amendmentOverlay.amendmentSource"
          ),
        ],
      }
    )
  }
  const amendmentSourceId = overlay.amendmentSource.id
  const expectedChecksum = overlay.amendmentSource.expectedPdfSha256
  if (expectedChecksum && amendmentPdfSha256 !== expectedChecksum) {
    throw new CorpusValidationError(
      "Amendment source PDF checksum does not match its pin",
      {
        fatal: [
          diagnostic(
            "fatal",
            "overlay.amendment-pdf-checksum-pin-mismatch",
            "Fetched amendment source PDF does not match the pinned checksum",
            "amendmentOverlay.amendmentSource.expectedPdfSha256",
            { expected: expectedChecksum, actual: amendmentPdfSha256 }
          ),
        ],
      }
    )
  }
  const operations = /** @type {AmendmentOverlayOperation[]} */ (
    overlay.operations
  )
  const operationIds = new Set(
    operations.map((operation) => operation.provisionId)
  )
  const missing = [...operationIds].filter(
    (id) => !provisions.some((provision) => provision.id === id)
  )
  if (missing.length > 0) {
    throw new CorpusValidationError(
      "Overlay operation targets missing provisions",
      {
        fatal: [
          diagnostic(
            "fatal",
            "overlay.missing-provision",
            `Overlay operation targets missing provision(s): ${missing.join(", ")}`,
            "amendmentOverlay.operations"
          ),
        ],
      }
    )
  }
  const operationsById = new Map(
    operations.map((operation) => [operation.provisionId, operation])
  )
  return provisions.map((provision) => {
    const operation = operationsById.get(provision.id)
    if (!operation) {
      return provision.sourceSpans
        ? provision
        : { ...provision, sourceSpans: [baseSourceSpan(provision)] }
    }
    return applyReplaceOnceOperation(
      provision,
      amendmentSourceId,
      amendmentPdfSha256,
      overlay.effectiveDate,
      operation
    )
  })
}

/**
 * An overlay may re-extract the same official base PDF with stricter extraction
 * semantics, but it must not silently point at a different document or source
 * revision than the declared base edition.
 * @param {{ manifest: any, baseEditionId: string, documentId: string, pdfSha256: string }} options
 */
export function assertOverlayBaseSource({
  manifest,
  baseEditionId,
  documentId,
  pdfSha256,
}) {
  const mismatches = []
  if (!manifest || typeof manifest !== "object" || Array.isArray(manifest)) {
    mismatches.push("manifest")
  } else {
    if (manifest.editionId !== baseEditionId) mismatches.push("editionId")
    if (manifest.documentId !== documentId) mismatches.push("documentId")
    if (manifest.pdfSha256 !== pdfSha256) mismatches.push("pdfSha256")
  }
  if (mismatches.length > 0) {
    throw new CorpusValidationError(
      "Overlay base edition does not match the fetched base source",
      {
        fatal: [
          diagnostic(
            "fatal",
            "overlay.base-source-mismatch",
            "Overlay base edition does not match the fetched base source",
            `app/data/legal-corpus/${baseEditionId}/manifest.json`,
            {
              mismatches,
              expected: { baseEditionId, documentId, pdfSha256 },
              observed: manifest,
            }
          ),
        ],
      }
    )
  }
}

/**
 * @param {{ projectRoot: string, baseEditionId: string, documentId: string, pdfSha256: string }} options
 */
async function verifyOverlayBaseSource({
  projectRoot,
  baseEditionId,
  documentId,
  pdfSha256,
}) {
  const manifestPath = path.join(
    projectRoot,
    "app/data/legal-corpus",
    baseEditionId,
    "manifest.json"
  )
  const manifest = await readOptionalJson(manifestPath)
  assertOverlayBaseSource({
    manifest,
    baseEditionId,
    documentId,
    pdfSha256,
  })
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
  const publicManifest = manifests.find(
    ({ path: manifestPath }) =>
      manifestPath === path.join(publicDirectory, "manifest.json")
  )
  if (publicManifest && (await pathExists(sourcePath))) {
    const sourceBytes = new Uint8Array(await readFile(sourcePath))
    const actualChecksum = sha256Bytes(sourceBytes)
    if (
      publicManifest.value.pdfSha256 &&
      publicManifest.value.pdfSha256 !== actualChecksum
    ) {
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

    await Promise.all(
      backups.map(({ backup }) => rm(backup, { recursive: true, force: true }))
    )
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
  if (
    error instanceof ConfigValidationError ||
    error instanceof CorpusValidationError
  )
    return error
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
export function assertRebuildAllowed({
  editionId,
  existingManifests,
  forceRebuild,
}) {
  if (existingManifests.length === 0 || forceRebuild) return
  const message = `Edition ${editionId} already has committed artifacts; rerun with --force-rebuild to intentionally rebuild it`
  throw new CorpusValidationError(message, {
    fatal: [
      diagnostic(
        "fatal",
        "identity.edition-already-built",
        message,
        "editionId"
      ),
    ],
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
  const unchanged = existingManifests.find(
    (manifest) => manifest.pdfSha256 === pdfSha256
  )
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
  const existing = await readExistingEditionState({
    dataDirectory,
    publicDirectory,
  })
  if (existing.errors.length > 0) {
    throw new CorpusValidationError(
      "Existing edition identity validation failed",
      {
        fatal: existing.errors,
      }
    )
  }
  assertRebuildAllowed({
    editionId: config.editionId,
    existingManifests: existing.manifests,
    forceRebuild,
  })

  const fetchTimeoutMs = resolveFetchTimeoutMs()
  const amendmentSource = config.amendmentOverlay?.amendmentSource
  const supplementalSources = config.supplementalSources ?? []
  const baseFetch = Promise.all([
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
  const amendmentFetch = amendmentSource
    ? Promise.all([
        fetchBytes(amendmentSource.metadataUrl, {
          timeoutMs: fetchTimeoutMs,
          expectedContentType: /application\/json/iu,
          fetchImpl,
        }),
        fetchBytes(amendmentSource.pdfUrl, {
          timeoutMs: fetchTimeoutMs,
          expectedContentType: /application\/pdf/iu,
          fetchImpl,
        }),
      ])
    : Promise.resolve([undefined, undefined])
  const supplementalFetch = Promise.all(
    supplementalSources.map(async (/** @type {any} */ source) => ({
      source,
      pdfBytes: await fetchBytes(source.pdfUrl, {
        timeoutMs: fetchTimeoutMs,
        expectedContentType: /application\/pdf/iu,
        fetchImpl,
      }),
    }))
  )
  const [basePayload, amendmentPayload, supplementalPayload] =
    await Promise.all([baseFetch, amendmentFetch, supplementalFetch])
  const [metadataBytes, pdfBytes] = basePayload
  const [amendmentMetadataBytes, amendmentPdfBytes] = amendmentPayload
  let metadata
  try {
    metadata = JSON.parse(new TextDecoder().decode(metadataBytes))
  } catch (error) {
    const message = `Official metadata is not valid JSON: ${errorMessage(error)}`
    throw new CorpusValidationError(message, {
      fatal: [
        diagnostic(
          "fatal",
          "source.metadata-invalid-json",
          message,
          "metadata"
        ),
      ],
    })
  }

  const pdfSha256 = sha256Bytes(pdfBytes)
  const supplementalPdfSha256ById = new Map()
  for (const {
    source,
    pdfBytes: supplementalPdfBytes,
  } of supplementalPayload) {
    const checksum = validateSupplementalPdf(source, supplementalPdfBytes)
    source.pdfSha256 = checksum
    supplementalPdfSha256ById.set(source.id, checksum)
  }
  const extractedPages = await extractPages(pdfBytes.slice(), getDocumentImpl)
  const temporalSelection = selectTemporalText(
    extractedPages,
    config.temporalTextSelection
  )
  const pages = temporalSelection.pages
  if (config.amendmentOverlay?.baseEditionId) {
    await verifyOverlayBaseSource({
      projectRoot,
      baseEditionId: config.amendmentOverlay.baseEditionId,
      documentId: config.documentId,
      pdfSha256,
    })
  }
  const extractedProvisions = extractProvisions(
    pages,
    configuredExtractionOptions(config, pdfSha256)
  )
  const amendmentPdfSha256 = amendmentPdfBytes
    ? sha256Bytes(amendmentPdfBytes)
    : undefined
  if (amendmentMetadataBytes) {
    try {
      JSON.parse(new TextDecoder().decode(amendmentMetadataBytes))
    } catch (error) {
      const message = `Official amendment metadata is not valid JSON: ${errorMessage(error)}`
      throw new CorpusValidationError(message, {
        fatal: [
          diagnostic(
            "fatal",
            "source.amendment-metadata-invalid-json",
            message,
            "amendmentMetadata"
          ),
        ],
      })
    }
  }
  const temporallySelectedProvisions = applyTemporalProvenance({
    config,
    provisions: extractedProvisions,
    traces: temporalSelection.traces,
    supplementalPdfSha256ById,
  })
  const provisions = applyAmendmentOverlay({
    config,
    provisions: temporallySelectedProvisions,
    amendmentPdfSha256,
  })
  if (config.amendmentOverlay?.amendmentSource && amendmentPdfSha256) {
    config.amendmentOverlay.amendmentSource.pdfSha256 = amendmentPdfSha256
  }
  const observed = buildObservedFacts(pages, provisions)
  const structure = buildStructure(provisions, {
    schemaVersion: config.schemaVersion,
    documentId: config.documentId,
    editionId: config.editionId,
    profile: config.extraction.profile,
  })
  const builtAt = resolveBuiltAt({
    existingManifests: existing.manifests,
    pdfSha256,
    now: nowWithoutMilliseconds(),
  })
  const provenanceManifest = buildManifest({
    config,
    metadata,
    pdfSha256,
    observed,
    diagnostics: { fatal: [], warnings: [] },
    builtAt,
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
    manifest: provenanceManifest,
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
    builtAt,
  })
  const articles = projectArticles(provisions)
  const stageRoot = await mkdtemp(
    path.join(os.tmpdir(), `legal-corpus-${config.editionId}-`)
  )
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
      writeJson(
        path.join(stagedDataDirectory, "diagnostics.json"),
        diagnostics
      ),
      writeJson(path.join(stagedDataDirectory, "articles.json"), articles),
      writeJson(path.join(stagedPublicDirectory, "manifest.json"), manifest),
      writeFile(path.join(stagedPublicDirectory, "source.pdf"), pdfBytes),
      ...(amendmentPdfBytes
        ? [
            writeFile(
              path.join(stagedPublicDirectory, "amendment-source.pdf"),
              amendmentPdfBytes
            ),
          ]
        : []),
      ...supplementalPayload.map(({ source, pdfBytes: supplementalPdfBytes }) =>
        writeFile(
          path.join(stagedPublicDirectory, source.localFilename),
          supplementalPdfBytes
        )
      ),
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
    ...(amendmentPdfSha256 ? { amendmentPdfSha256 } : {}),
    ...(supplementalPdfSha256ById.size > 0
      ? { supplementalPdfSha256: Object.fromEntries(supplementalPdfSha256ById) }
      : {}),
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

if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  try {
    await main()
  } catch (error) {
    const normalizedError = asValidationError(error)
    if (normalizedError?.diagnostics?.fatal) {
      process.stderr.write(
        `${JSON.stringify(normalizedError.diagnostics, null, 2)}\n`
      )
    }
    process.stderr.write(`${error instanceof Error ? error.stack : error}\n`)
    process.exitCode = 1
  }
}
