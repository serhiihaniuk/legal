#!/usr/bin/env node

import { readdir, readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import process from "node:process"
import { fileURLToPath } from "node:url"

const ID_PATTERN = /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/u
const DEFAULT_DATA_DIRECTORY = "app/data/legal-corpus"
const DEFAULT_POINTER_PATH = "app/data/legal-library/current-editions.json"
const DEFAULT_OUTPUT_PATH = "app/data/legal-corpus/registry.generated.ts"
const DEFAULT_REFERENCE_OUTPUT_PATH =
  "app/data/legal-corpus/reference-registry.generated.ts"

async function readJson(filePath) {
  return JSON.parse(await readFile(filePath, "utf8"))
}

function fail(message) {
  throw new Error(`Registry generation failed: ${message}`)
}

function assertId(value, label) {
  if (typeof value !== "string" || !ID_PATTERN.test(value)) {
    fail(`${label} must be a URL-safe lowercase ID`)
  }
}

function assertNonEmptyString(value, label) {
  if (typeof value !== "string" || value.length === 0) fail(`${label} is required`)
}

function sortById(left, right) {
  return String(left).localeCompare(String(right))
}

/**
 * Scan only complete manifest/provisions pairs. The array order in provisions.json
 * is intentionally retained: it is the source order used by the reader.
 */
export async function scanCorpusEditions(dataDirectory) {
  let entries
  try {
    entries = (await readdir(dataDirectory, { withFileTypes: true }))
      .filter((entry) => entry.isDirectory())
      .sort((left, right) => left.name.localeCompare(right.name))
  } catch (error) {
    fail(`cannot read data directory ${dataDirectory}: ${error?.message ?? error}`)
  }

  const editions = []
  const editionIds = new Set()
  const provisionIdsByDocument = new Map()
  const provisionOwners = new Map()

  for (const entry of entries) {
    const directory = path.join(dataDirectory, entry.name)
    const manifestPath = path.join(directory, "manifest.json")
    const provisionsPath = path.join(directory, "provisions.json")
    let manifest
    let provisions
    try {
      manifest = await readJson(manifestPath)
    } catch (error) {
      if (error?.code === "ENOENT") {
        try {
          await readFile(provisionsPath)
          fail(`${directory}: provisions.json exists without manifest.json`)
        } catch (provisionsError) {
          if (provisionsError?.code === "ENOENT") continue
          throw provisionsError
        }
      }
      throw error
    }
    try {
      provisions = await readJson(provisionsPath)
    } catch (error) {
      if (error?.code === "ENOENT") fail(`${directory}: manifest.json exists without provisions.json`)
      throw error
    }

    assertId(manifest.documentId, `${manifestPath}: documentId`)
    assertId(manifest.editionId, `${manifestPath}: editionId`)
    if (manifest.editionId !== entry.name) fail(`${manifestPath}: editionId must match its directory name`)
    if (manifest.id !== manifest.editionId) {
      fail(`${manifestPath}: id must match editionId`)
    }
    assertNonEmptyString(manifest.shortName, `${manifestPath}: shortName`)
    assertNonEmptyString(manifest.title, `${manifestPath}: title`)
    assertNonEmptyString(manifest.citation, `${manifestPath}: citation`)
    if (!Array.isArray(provisions)) fail(`${provisionsPath}: expected an array`)
    if (editionIds.has(manifest.editionId)) fail(`${manifestPath}: duplicate edition ${manifest.editionId}`)
    editionIds.add(manifest.editionId)

    const ids = new Set()
    const documentProvisionIds = provisionIdsByDocument.get(manifest.documentId) ?? new Map()
    const validatedProvisions = provisions.map((provision, index) => {
      assertId(provision.id, `${provisionsPath}: provision[${index}].id`)
      if (ids.has(provision.id)) fail(`${provisionsPath}: duplicate provision ${provision.id}`)
      ids.add(provision.id)
      const owner = provisionOwners.get(provision.id)
      if (owner && owner !== manifest.documentId) {
        fail(`${provisionsPath}: provision ${provision.id} collides with document ${owner}`)
      }
      provisionOwners.set(provision.id, manifest.documentId)
      const previousEdition = documentProvisionIds.get(provision.id)
      if (previousEdition && previousEdition !== manifest.editionId) {
        // Historical editions may intentionally retain the same stable provision ID.
        // A document-level union therefore remains valid, while a cross-document
        // collision is still rejected below.
      }
      if (provision.documentId !== manifest.documentId || provision.editionId !== manifest.editionId) {
        fail(`${provisionsPath}: provision ${provision.id} has mismatched document or edition`)
      }
      assertNonEmptyString(provision.locator, `${provisionsPath}: provision ${provision.id}.locator`)
      assertNonEmptyString(provision.text, `${provisionsPath}: provision ${provision.id}.text`)
      if (!Number.isFinite(provision.order)) fail(`${provisionsPath}: provision ${provision.id}.order must be a number`)
      if (!Number.isInteger(provision.startPdfPage) || !Number.isInteger(provision.endPdfPage)) {
        fail(`${provisionsPath}: provision ${provision.id} page bounds must be integers`)
      }
      if (provision.startPdfPage < 1 || provision.endPdfPage < provision.startPdfPage) {
        fail(`${provisionsPath}: provision ${provision.id} has invalid page bounds`)
      }
      documentProvisionIds.set(provision.id, manifest.editionId)
      return provision
    })
    provisionIdsByDocument.set(manifest.documentId, documentProvisionIds)
    editions.push({ directory: entry.name, manifest, provisions: validatedProvisions })
  }

  if (editions.length === 0) fail(`no manifest.json/provisions.json edition directories found in ${dataDirectory}`)
  return editions
}

export function groupEditions(editions, currentEditions) {
  if (!currentEditions || typeof currentEditions !== "object" || Array.isArray(currentEditions)) {
    fail("current-editions pointer must be an object mapping document IDs to edition IDs")
  }

  const byDocument = new Map()
  for (const edition of editions) {
    const documentId = edition.manifest.documentId
    const list = byDocument.get(documentId) ?? []
    list.push(edition)
    byDocument.set(documentId, list)
  }

  const pointerIds = Object.keys(currentEditions)
  for (const documentId of byDocument.keys()) {
    if (!Object.prototype.hasOwnProperty.call(currentEditions, documentId)) {
      const ids = byDocument.get(documentId).map(({ manifest }) => manifest.editionId)
      const detail = ids.length > 1 ? `; ambiguous editions: ${ids.join(", ")}` : ""
      fail(`missing explicit current-edition pointer for ${documentId}${detail}`)
    }
  }
  for (const documentId of pointerIds) {
    if (!byDocument.has(documentId)) fail(`current-editions pointer names unknown document ${documentId}`)
    assertId(documentId, `current-editions key ${documentId}`)
    const editionId = currentEditions[documentId]
    assertId(editionId, `current-editions.${documentId}`)
    const matches = byDocument.get(documentId).filter(({ manifest }) => manifest.editionId === editionId)
    if (matches.length !== 1) fail(`current-editions.${documentId} must name exactly one scanned edition; received ${editionId}`)
  }

  return [...byDocument.entries()]
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([documentId, documentEditions]) => ({
      documentId,
      editions: [...documentEditions].sort((left, right) => sortById(left.manifest.editionId, right.manifest.editionId)),
      currentEditionId: currentEditions[documentId],
    }))
}

function identifier(value) {
  return value.replace(/[^a-zA-Z0-9_$]/gu, "_")
}

function quote(value) {
  return JSON.stringify(value)
}

export function renderRegistry(groups, dataDirectory, outputPath) {
  const imports = []
  const importNames = new Map()
  const usedNames = new Set()
  for (const group of groups) {
    for (const edition of group.editions) {
      const stem = identifier(`${group.documentId}_${edition.manifest.editionId}`)
      const manifestName = `${stem}Manifest`
      const provisionsName = `${stem}Provisions`
      if (usedNames.has(manifestName) || usedNames.has(provisionsName)) fail(`generated import name collision for ${edition.manifest.editionId}`)
      usedNames.add(manifestName)
      usedNames.add(provisionsName)
      importNames.set(edition.manifest.editionId, { manifestName, provisionsName })
      const relativeDirectory = `./${path.relative(path.dirname(outputPath), path.join(dataDirectory, edition.directory)).replaceAll(path.sep, "/")}`
      imports.push(`import ${manifestName} from ${quote(`${relativeDirectory}/manifest.json`)}`)
      imports.push(`import ${provisionsName} from ${quote(`${relativeDirectory}/provisions.json`)}`)
    }
  }

  const entries = groups.map((group) => {
    const editionEntries = group.editions.map((edition) => {
      const { manifestName, provisionsName } = importNames.get(edition.manifest.editionId)
      const provisionIds = edition.provisions.map(({ id }) => quote(id)).join(", ")
      return `      ${quote(edition.manifest.editionId)}: {\n        editionId: ${quote(edition.manifest.editionId)},\n        manifest: ${manifestName},\n        provisions: ${provisionsName},\n        provisionIds: [${provisionIds}],\n      }`
    }).join(",\n")
    const allProvisionIds = [...new Set(group.editions.flatMap(({ provisions }) => provisions.map(({ id }) => id)))].sort(sortById)
    const editionIds = group.editions.map(({ manifest }) => quote(manifest.editionId)).join(", ")
    const firstManifest = group.editions[0].manifest
    return `  ${quote(group.documentId)}: {\n    documentId: ${quote(group.documentId)},\n    shortName: ${quote(firstManifest.shortName)},\n    title: ${quote(firstManifest.title)},\n    citation: ${quote(firstManifest.citation)},\n    currentEditionId: ${quote(group.currentEditionId)},\n    editionIds: [${editionIds}],\n    provisionIds: [${allProvisionIds.map(quote).join(", ")}],\n    editions: {\n${editionEntries}\n    },\n  }`
  }).join(",\n")

  return `// Generated by scripts/legal-corpus/generate-registry.mjs. Do not edit by hand.\n// Every edition and provision is discovered from its manifest.json/provisions.json pair.\n${imports.join("\n")}\n\nexport const legalLibraryRegistry = {\n${entries}\n} as const\n`
}

export function renderReferenceRegistry(groups) {
  const entries = groups.map((group) => {
    const editionIds = group.editions
      .map(({ manifest }) => quote(manifest.editionId))
      .join(", ")
    const provisionIds = [
      ...new Set(
        group.editions.flatMap(({ provisions }) =>
          provisions.map(({ id }) => id)
        )
      ),
    ].sort((left, right) => left.localeCompare(right))

    return `  ${quote(group.documentId)}: {\n    currentEditionId: ${quote(group.currentEditionId)},\n    editionIds: [${editionIds}],\n    provisionIds: [${provisionIds.map(quote).join(", ")}],\n  }`
  }).join(",\n")

  return `// Generated by scripts/legal-corpus/generate-registry.mjs. Do not edit by hand.\n// Lightweight IDs only: safe for shared link rendering without loading corpus text.\nexport const legalReferenceRegistry = {\n${entries}\n} as const\n`
}

export async function generateRegistry({
  projectRoot = process.cwd(),
  dataDirectory = path.join(projectRoot, DEFAULT_DATA_DIRECTORY),
  pointerPath = path.join(projectRoot, DEFAULT_POINTER_PATH),
  outputPath = path.join(projectRoot, DEFAULT_OUTPUT_PATH),
  referenceOutputPath = path.join(
    projectRoot,
    DEFAULT_REFERENCE_OUTPUT_PATH
  ),
  currentEditions,
} = {}) {
  const editions = await scanCorpusEditions(dataDirectory)
  const pointers = currentEditions ?? await readJson(pointerPath)
  const groups = groupEditions(editions, pointers)
  const source = renderRegistry(groups, dataDirectory, outputPath)
  const referenceSource = renderReferenceRegistry(groups)
  await Promise.all([
    writeFile(outputPath, source, "utf8"),
    writeFile(referenceOutputPath, referenceSource, "utf8"),
  ])
  return {
    outputPath,
    referenceOutputPath,
    groups,
    source,
    referenceSource,
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const result = await generateRegistry()
    process.stdout.write(`Generated ${result.outputPath} for ${result.groups.length} document(s).\n`)
  } catch (error) {
    process.stderr.write(`${error?.stack ?? error}\n`)
    process.exitCode = 1
  }
}
