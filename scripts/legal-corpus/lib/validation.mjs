import { URL } from "node:url"

import { createProvisionId, sha256 } from "./extraction.mjs"

const ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const STATUS_VALUES = new Set([
  "active",
  "repealed",
  "reserved",
  "removed",
  "unknown",
])
const KIND_VALUES = new Set([
  "article",
  "paragraph",
  "section",
  "point",
  "annex",
])

export function diagnostic(severity, code, message, path = undefined, details = undefined) {
  const entry = { severity, code, message }
  if (path !== undefined) entry.path = path
  if (details !== undefined) entry.details = details
  return entry
}

export function validateExistingEditionIdentity(manifest, config, pdfSha256 = undefined) {
  if (!manifest) return []
  const diagnostics = []
  const source = manifest.source ?? {}
  const existingEditionId = manifest.editionId ?? manifest.id

  if (existingEditionId && existingEditionId !== config.editionId) {
    diagnostics.push(
      diagnostic(
        "fatal",
        "identity.edition-id-mismatch",
        `Existing edition manifest names ${existingEditionId}, expected ${config.editionId}`,
        "editionId"
      )
    )
  }
  if (manifest.documentId && manifest.documentId !== config.documentId) {
    diagnostics.push(
      diagnostic(
        "fatal",
        "identity.document-id-mismatch",
        `Existing edition manifest names document ${manifest.documentId}, expected ${config.documentId}`,
        "documentId"
      )
    )
  }

  const sourceFields = ["provider", "officialPageUrl", "metadataUrl", "pdfUrl"]
  for (const field of sourceFields) {
    const existingValue = source[field] ?? manifest[field]
    const expectedValue = config.source[field]
    if (existingValue && expectedValue && existingValue !== expectedValue) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "identity.official-source-mismatch",
          `Existing edition ${field} differs from the configured official source`,
          `source.${field}`,
          { existing: existingValue, expected: expectedValue }
        )
      )
    }
  }

  if (pdfSha256 && manifest.pdfSha256 && manifest.pdfSha256 !== pdfSha256) {
    diagnostics.push(
      diagnostic(
        "fatal",
        "identity.pdf-checksum-mismatch",
        "Existing edition PDF checksum differs from fetched official bytes",
        "pdfSha256",
        { existing: manifest.pdfSha256, fetched: pdfSha256 }
      )
    )
  }

  return diagnostics
}

function expectedEliIdentifier(metadataUrl) {
  try {
    const pathname = new URL(metadataUrl).pathname
    const match = pathname.match(/\/acts\/([^/]+\/\d+\/\d+)\/?$/i)
    return match?.[1] ?? undefined
  } catch {
    return undefined
  }
}

export function validateOfficialIdentity(config, metadata, pdfBytes) {
  const diagnostics = []
  const expectedIdentifier = expectedEliIdentifier(config.source.metadataUrl)

  if (!metadata || typeof metadata !== "object" || Array.isArray(metadata)) {
    diagnostics.push(
      diagnostic(
        "fatal",
        "source.metadata-not-object",
        "Official metadata response must be a JSON object",
        "metadata"
      )
    )
  } else {
    if (typeof metadata.ELI !== "string" || metadata.ELI.trim() === "") {
      diagnostics.push(
        diagnostic(
          "fatal",
          "source.missing-eli",
          "Official metadata does not contain an ELI identifier",
          "metadata.ELI"
        )
      )
    } else if (expectedIdentifier && metadata.ELI !== expectedIdentifier) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "source.eli-mismatch",
          "Official metadata ELI does not match the configured metadata URL",
          "metadata.ELI",
          { expected: expectedIdentifier, observed: metadata.ELI }
        )
      )
    }

    if (metadata.displayAddress && metadata.displayAddress !== config.citation) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "source.citation-mismatch",
          "Official metadata citation does not match the configured citation",
          "metadata.displayAddress",
          { expected: config.citation, observed: metadata.displayAddress }
        )
      )
    }

    for (const field of ["status", "inForce", "legalStatusDate"]) {
      if (typeof metadata[field] !== "string" || metadata[field].trim() === "") {
        diagnostics.push(
          diagnostic(
            "fatal",
            "source.missing-legal-fact",
            `Official metadata is missing ${field}`,
            `metadata.${field}`
          )
        )
      }
    }
  }

  if (!(pdfBytes instanceof Uint8Array) || pdfBytes.length < 5) {
    diagnostics.push(
      diagnostic("fatal", "source.pdf-unreadable", "Official PDF response is empty or not binary", "source.pdf")
    )
  } else if (new TextDecoder().decode(pdfBytes.slice(0, 5)) !== "%PDF-") {
    diagnostics.push(
      diagnostic("fatal", "source.pdf-not-pdf", "Official PDF response does not begin with %PDF-", "source.pdf")
    )
  }

  return diagnostics
}

export function validateExtractionExpectations(config, observed) {
  const diagnostics = []
  const expected = config.extraction

  if (observed.pageCount !== expected.expectedPageCount) {
    diagnostics.push(
      diagnostic(
        "fatal",
        "extraction.page-count-mismatch",
        `Expected ${expected.expectedPageCount} PDF pages but observed ${observed.pageCount}`,
        "extraction.expectedPageCount",
        { expected: expected.expectedPageCount, observed: observed.pageCount }
      )
    )
  }
  if (observed.provisionCount !== expected.expectedProvisionCount) {
    diagnostics.push(
      diagnostic(
        "fatal",
        "extraction.provision-count-mismatch",
        `Expected ${expected.expectedProvisionCount} provisions but observed ${observed.provisionCount}`,
        "extraction.expectedProvisionCount",
        { expected: expected.expectedProvisionCount, observed: observed.provisionCount }
      )
    )
  }
  if (observed.textCoverage < expected.expectedTextCoverage) {
    diagnostics.push(
      diagnostic(
        "fatal",
        "extraction.text-coverage-below-expectation",
        `Expected text coverage of at least ${expected.expectedTextCoverage} but observed ${observed.textCoverage}`,
        "extraction.expectedTextCoverage",
        { expected: expected.expectedTextCoverage, observed: observed.textCoverage }
      )
    )
  }

  return diagnostics
}

function isOneBasedPage(value) {
  return Number.isInteger(value) && value >= 1
}

export function validateProvisionFacts({
  provisions,
  documentId,
  editionId,
  pageCount,
  pdfSha256,
}) {
  const diagnostics = []
  if (!/^[0-9a-f]{64}$/u.test(String(pdfSha256))) {
    diagnostics.push(
      diagnostic(
        "fatal",
        "provisions.invalid-edition-pdf-checksum",
        "Edition PDF checksum must be a SHA-256 hex digest",
        "pdfSha256"
      )
    )
  }
  if (!Array.isArray(provisions)) {
    return [
      diagnostic(
        "fatal",
        "provisions.not-array",
        "provisions.json must contain an array",
        "provisions"
      ),
    ]
  }

  const ids = new Set()
  const locators = new Set()
  const orders = new Set()

  provisions.forEach((provision, index) => {
    const path = `provisions[${index}]`
    if (!provision || typeof provision !== "object" || Array.isArray(provision)) {
      diagnostics.push(diagnostic("fatal", "provisions.invalid-record", "Provision must be an object", path))
      return
    }

    if (typeof provision.id !== "string" || !ID_PATTERN.test(provision.id)) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "provisions.invalid-id",
          "Provision ID must be URL-safe",
          `${path}.id`
        )
      )
    } else if (ids.has(provision.id)) {
      diagnostics.push(
        diagnostic("fatal", "provisions.duplicate-id", `Duplicate provision ID ${provision.id}`, `${path}.id`)
      )
    } else {
      ids.add(provision.id)
    }

    if (typeof provision.locator !== "string" || provision.locator.trim() === "") {
      diagnostics.push(
        diagnostic("fatal", "provisions.invalid-locator", "Provision locator must be non-empty", `${path}.locator`)
      )
    } else if (locators.has(provision.locator)) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "provisions.duplicate-locator",
          `Duplicate provision locator ${provision.locator}`,
          `${path}.locator`
        )
      )
    } else {
      locators.add(provision.locator)
    }

    if (provision.documentId !== documentId) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "provisions.document-id-mismatch",
          `Provision must belong to document ${documentId}`,
          `${path}.documentId`
        )
      )
    }
    if (provision.editionId !== editionId) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "provisions.edition-id-mismatch",
          `Provision must belong to edition ${editionId}`,
          `${path}.editionId`
        )
      )
    }
    if (!KIND_VALUES.has(provision.kind)) {
      diagnostics.push(
        diagnostic("fatal", "provisions.invalid-kind", `Unsupported provision kind ${provision.kind}`, `${path}.kind`)
      )
    } else if (provision.kind === "article" && typeof provision.locator === "string") {
      try {
        const expectedId = createProvisionId(documentId, provision.locator, "article")
        if (provision.id !== expectedId) {
          diagnostics.push(
            diagnostic(
              "fatal",
              "provisions.id-locator-mismatch",
              `Article ID must be the deterministic ID for ${provision.locator}`,
              `${path}.id`,
              { expected: expectedId, observed: provision.id }
            )
          )
        }
      } catch (error) {
        diagnostics.push(
          diagnostic("fatal", "provisions.invalid-locator", error.message, `${path}.locator`)
        )
      }
    }
    if (!Number.isFinite(provision.order) || orders.has(provision.order)) {
      diagnostics.push(
        diagnostic("fatal", "provisions.invalid-order", "Provision order must be unique and finite", `${path}.order`)
      )
    } else {
      if (index > 0 && provision.order <= provisions[index - 1]?.order) {
        diagnostics.push(
          diagnostic(
            "fatal",
            "provisions.non-deterministic-order",
            "Provision order must increase in output order",
            `${path}.order`
          )
        )
      }
      orders.add(provision.order)
    }
    if (!isOneBasedPage(provision.startPdfPage) || !isOneBasedPage(provision.endPdfPage)) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "provisions.invalid-page-range",
          "Provision PDF pages must be positive integers",
          path
        )
      )
    } else if (
      provision.startPdfPage > provision.endPdfPage ||
      provision.endPdfPage > pageCount
    ) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "provisions.page-range-out-of-bounds",
          `Provision page range must satisfy 1 <= start <= end <= ${pageCount}`,
          path,
          {
            startPdfPage: provision.startPdfPage,
            endPdfPage: provision.endPdfPage,
            pageCount,
          }
        )
      )
    }
    if (!/^[0-9a-f]{64}$/u.test(String(provision.sourcePdfSha256))) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "provisions.invalid-pdf-checksum",
          "Provision sourcePdfSha256 must be a SHA-256 hex digest",
          `${path}.sourcePdfSha256`
        )
      )
    } else if (provision.sourcePdfSha256 !== pdfSha256) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "provisions.pdf-checksum-mismatch",
          "Provision sourcePdfSha256 must equal the edition PDF checksum",
          `${path}.sourcePdfSha256`,
          { expected: pdfSha256, observed: provision.sourcePdfSha256 }
        )
      )
    }
    if (typeof provision.text !== "string" || provision.text.trim() === "") {
      diagnostics.push(
        diagnostic("fatal", "provisions.missing-text", "Provision text must be non-empty", `${path}.text`)
      )
    } else if (!/^[0-9a-f]{64}$/u.test(String(provision.sourceTextHash))) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "provisions.invalid-source-text-checksum",
          "Provision sourceTextHash must be a SHA-256 hex digest",
          `${path}.sourceTextHash`
        )
      )
    } else if (provision.sourceTextHash !== sha256(provision.text)) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "provisions.source-text-checksum-mismatch",
          "Provision sourceTextHash must match normalized provision text",
          `${path}.sourceTextHash`
        )
      )
    }
    if (!STATUS_VALUES.has(provision.status)) {
      diagnostics.push(
        diagnostic("fatal", "provisions.invalid-status", `Unsupported provision status ${provision.status}`, `${path}.status`)
      )
    }
    if (provision.parentId !== null && typeof provision.parentId !== "string") {
      diagnostics.push(
        diagnostic("fatal", "hierarchy.invalid-parent", "parentId must be null or a provision ID", `${path}.parentId`)
      )
    }
    if (!Array.isArray(provision.childIds) || provision.childIds.some((id) => typeof id !== "string")) {
      diagnostics.push(
        diagnostic("fatal", "hierarchy.invalid-children", "childIds must be an array of provision IDs", `${path}.childIds`)
      )
    } else if (new Set(provision.childIds).size !== provision.childIds.length) {
      diagnostics.push(
        diagnostic("fatal", "hierarchy.duplicate-child", "childIds must not repeat a provision ID", `${path}.childIds`)
      )
    }
  })

  for (const provision of provisions) {
    if (!provision || typeof provision !== "object") continue
    if (provision.parentId && !ids.has(provision.parentId)) {
      diagnostics.push(
        diagnostic(
          "fatal",
          "hierarchy.missing-parent",
          `Parent ${provision.parentId} does not exist in this edition`,
          `provisions.${provision.id}.parentId`
        )
      )
    }
    for (const childId of Array.isArray(provision.childIds) ? provision.childIds : []) {
      if (!ids.has(childId)) {
        diagnostics.push(
          diagnostic(
            "fatal",
            "hierarchy.missing-child",
            `Child ${childId} does not exist in this edition`,
            `provisions.${provision.id}.childIds`
          )
        )
      }
    }
  }

  const provisionById = new Map(
    provisions.filter((provision) => provision && typeof provision === "object").map((provision) => [provision.id, provision])
  )
  for (const provision of provisions) {
    if (!provision || typeof provision !== "object") continue
    for (const childId of Array.isArray(provision.childIds) ? provision.childIds : []) {
      const child = provisionById.get(childId)
      if (child && child.parentId !== provision.id) {
        diagnostics.push(
          diagnostic(
            "fatal",
            "hierarchy.parent-child-mismatch",
            `Child ${childId} does not point back to parent ${provision.id}`,
            `provisions.${provision.id}.childIds`
          )
        )
      }
    }
    if (provision.parentId) {
      const parent = provisionById.get(provision.parentId)
      if (parent && !parent.childIds.includes(provision.id)) {
        diagnostics.push(
          diagnostic(
            "fatal",
            "hierarchy.parent-child-mismatch",
            `Parent ${provision.parentId} does not list child ${provision.id}`,
            `provisions.${provision.id}.parentId`
          )
        )
      }
    }
  }

  const visiting = new Set()
  const visited = new Set()
  const visit = (id) => {
    if (visiting.has(id)) {
      diagnostics.push(
        diagnostic("fatal", "hierarchy.cycle", `Provision hierarchy contains a cycle at ${id}`, "provisions")
      )
      return
    }
    if (visited.has(id)) return
    visiting.add(id)
    const provision = provisionById.get(id)
    for (const childId of provision?.childIds ?? []) {
      if (provisionById.has(childId)) visit(childId)
    }
    visiting.delete(id)
    visited.add(id)
  }
  for (const id of provisionById.keys()) visit(id)

  return diagnostics
}

export function validateStructure({ structure, provisions }) {
  const diagnostics = []
  if (!structure || typeof structure !== "object" || Array.isArray(structure)) {
    return [diagnostic("fatal", "structure.invalid", "structure.json must contain an object", "structure")]
  }
  if (!Array.isArray(provisions)) return diagnostics

  const ids = provisions.map((provision) => provision.id)
  const roots = provisions.filter((provision) => provision.parentId === null).map((provision) => provision.id)
  const expectedPrevious = Object.fromEntries(ids.map((id, index) => [id, ids[index - 1] ?? null]))
  const expectedNext = Object.fromEntries(ids.map((id, index) => [id, ids[index + 1] ?? null]))
  const expectedChildren = Object.fromEntries(ids.map((id) => [id, provisions.find((p) => p.id === id).childIds]))

  if (JSON.stringify(structure.provisionIds) !== JSON.stringify(ids)) {
    diagnostics.push(
      diagnostic("fatal", "structure.order-mismatch", "structure.provisionIds must match provision order", "structure.provisionIds")
    )
  }
  if (JSON.stringify(structure.order) !== JSON.stringify(ids)) {
    diagnostics.push(
      diagnostic("fatal", "structure.order-mismatch", "structure.order must match provision order", "structure.order")
    )
  }
  if (JSON.stringify(structure.rootIds) !== JSON.stringify(roots)) {
    diagnostics.push(
      diagnostic("fatal", "structure.roots-mismatch", "structure.rootIds must match hierarchy roots", "structure.rootIds")
    )
  }
  if (JSON.stringify(structure.previousById) !== JSON.stringify(expectedPrevious)) {
    diagnostics.push(
      diagnostic("fatal", "structure.previous-mismatch", "structure.previousById is not deterministic", "structure.previousById")
    )
  }
  if (JSON.stringify(structure.nextById) !== JSON.stringify(expectedNext)) {
    diagnostics.push(
      diagnostic("fatal", "structure.next-mismatch", "structure.nextById is not deterministic", "structure.nextById")
    )
  }
  if (JSON.stringify(structure.childrenById) !== JSON.stringify(expectedChildren)) {
    diagnostics.push(
      diagnostic("fatal", "structure.children-mismatch", "structure.childrenById does not match provisions", "structure.childrenById")
    )
  }
  if (!Array.isArray(structure.nodes) || structure.nodes.length !== provisions.length) {
    diagnostics.push(
      diagnostic("fatal", "structure.nodes-mismatch", "structure.nodes must contain one node per provision", "structure.nodes")
    )
  } else {
    structure.nodes.forEach((node, index) => {
      const expected = provisions[index]
      if (
        node?.id !== expected.id ||
        node?.kind !== expected.kind ||
        node?.locator !== expected.locator ||
        node?.parentId !== expected.parentId ||
        JSON.stringify(node?.childIds) !== JSON.stringify(expected.childIds) ||
        node?.order !== expected.order ||
        node?.startPdfPage !== expected.startPdfPage ||
        node?.endPdfPage !== expected.endPdfPage ||
        node?.status !== expected.status
      ) {
        diagnostics.push(
          diagnostic(
            "fatal",
            "structure.nodes-mismatch",
            `structure.nodes[${index}] does not match its provision`,
            `structure.nodes[${index}]`
          )
        )
      }
    })
  }

  return diagnostics
}

export function validateCorpusFacts({
  config,
  metadata,
  pdfBytes,
  pdfSha256,
  pages,
  provisions,
  structure,
  observed,
  existingManifests = [],
}) {
  const entries = [
    ...validateOfficialIdentity(config, metadata, pdfBytes),
    ...validateExtractionExpectations(config, observed),
    ...validateProvisionFacts({
      provisions,
      documentId: config.documentId,
      editionId: config.editionId,
      pageCount: observed.pageCount,
      pdfSha256,
    }),
    ...validateStructure({ structure, provisions }),
  ]
  for (const manifest of existingManifests) {
    entries.push(...validateExistingEditionIdentity(manifest, config, pdfSha256))
  }

  return {
    entries,
    fatal: entries.filter((entry) => entry.severity === "fatal"),
    warnings: entries.filter((entry) => entry.severity === "warning"),
  }
}

export function makeDiagnostics({ config, observed, result }) {
  return {
    schemaVersion: config.schemaVersion,
    documentId: config.documentId,
    editionId: config.editionId,
    profile: config.extraction.profile,
    expected: {
      provisionCount: config.extraction.expectedProvisionCount,
      pageCount: config.extraction.expectedPageCount,
      textCoverage: config.extraction.expectedTextCoverage,
    },
    observed,
    entries: result.entries,
    fatal: result.fatal,
    warnings: result.warnings,
  }
}

export function assertNoFatalDiagnostics(result) {
  if (result.fatal.length === 0) return result
  const error = new Error(
    `Corpus validation failed with ${result.fatal.length} fatal diagnostic(s)`
  )
  error.name = "CorpusValidationError"
  error.diagnostics = result
  throw error
}
