import { isCompleteLegalStatusEvidence } from "./config.mjs"

export function buildStructure(provisions, { schemaVersion, documentId, editionId, profile } = {}) {
  const ordered = [...provisions].sort((left, right) => {
    const orderDifference = left.order - right.order
    return orderDifference || left.id.localeCompare(right.id)
  })
  const provisionIds = ordered.map((provision) => provision.id)
  const rootIds = ordered
    .filter((provision) => provision.parentId === null)
    .map((provision) => provision.id)
  const previousById = Object.fromEntries(
    provisionIds.map((id, index) => [id, provisionIds[index - 1] ?? null])
  )
  const nextById = Object.fromEntries(
    provisionIds.map((id, index) => [id, provisionIds[index + 1] ?? null])
  )
  const parentById = Object.fromEntries(
    ordered.map((provision) => [provision.id, provision.parentId])
  )
  const childrenById = Object.fromEntries(
    ordered.map((provision) => [provision.id, [...provision.childIds]])
  )
  const nodes = ordered.map((provision) => ({
    id: provision.id,
    kind: provision.kind,
    locator: provision.locator,
    parentId: provision.parentId,
    childIds: [...provision.childIds],
    order: provision.order,
    startPdfPage: provision.startPdfPage,
    endPdfPage: provision.endPdfPage,
    status: provision.status,
  }))

  return {
    schemaVersion,
    documentId,
    editionId,
    profile,
    rootIds,
    provisionIds,
    order: [...provisionIds],
    parentById,
    childrenById,
    previousById,
    nextById,
    nodes,
  }
}

export function projectArticles(provisions) {
  return provisions
    .filter((provision) => provision.kind === "article")
    .map((provision) => ({
      article: provision.locator.replace(/^Art\.\s+/, ""),
      pdfPage: provision.startPdfPage,
      endPdfPage: provision.endPdfPage,
      status: provision.status,
      text: provision.text,
    }))
}

export function buildObservedFacts(pages, provisions) {
  const pageCount = pages.length
  const textLayerPageCount = pages.filter((page) => page.hasTextLayer).length
  const textCoverage = pageCount === 0 ? 0 : textLayerPageCount / pageCount
  const coveredPdfPages = new Set(
    provisions.flatMap((provision) => {
      const pagesInRange = []
      for (let page = provision.startPdfPage; page <= provision.endPdfPage; page += 1) {
        pagesInRange.push(page)
      }
      return pagesInRange
    })
  )

  return {
    pageCount,
    textLayerPageCount,
    textCoverage: Number(textCoverage.toFixed(6)),
    provisionCount: provisions.length,
    articleCount: provisions.filter((provision) => provision.kind === "article").length,
    promotedProvisionCount: provisions.length,
    promotedPageCount: coveredPdfPages.size,
  }
}

export function buildManifest({
  config,
  metadata,
  pdfSha256,
  observed,
  diagnostics,
  builtAt,
}) {
  const source = { ...config.source }
  const manualEvidence = config.legalStatusEvidence ?? {}
  const completeManualEvidence = isCompleteLegalStatusEvidence(manualEvidence)
  const eli = {
    identifier: metadata.ELI,
    status: metadata.status,
    inForce: metadata.inForce,
    legalStatusDate: metadata.legalStatusDate ?? null,
    textHTML: Boolean(metadata.textHTML),
    textPDF: Boolean(metadata.textPDF),
  }
  const unresolved = new Set(manualEvidence.unresolved ?? [])
  if (!completeManualEvidence && !metadata.legalStatusDate) {
    unresolved.add("metadata.legalStatusDate")
  }
  const legalStatusEvidence = {
    ...manualEvidence,
    // ELI status facts always win; validation separately rejects contradictions.
    status: metadata.status ?? manualEvidence.status ?? null,
    inForce: metadata.inForce ?? manualEvidence.inForce ?? null,
    legalStatusDate: metadata.legalStatusDate ?? manualEvidence.legalStatusDate ?? null,
    legalStateDate: manualEvidence.legalStateDate ?? config.legalStateDate ?? null,
    consolidatedTextIdentifier:
      manualEvidence.consolidatedTextIdentifier ?? metadata.ELI ?? null,
    checkedAt: manualEvidence.checkedAt ?? config.checkedAt,
    sourceUrls:
      manualEvidence.sourceUrls ??
      (manualEvidence.sourceUrl ? [manualEvidence.sourceUrl] : [source.officialPageUrl]),
    sourceUrl:
      manualEvidence.sourceUrl ??
      manualEvidence.sourceUrls?.[0] ??
      source.officialPageUrl,
    amendmentsCheckedThrough: manualEvidence.amendmentsCheckedThrough ?? null,
    entryIntoForce: manualEvidence.entryIntoForce ?? [],
    transitionalRules: manualEvidence.transitionalRules ?? [],
    unresolved: completeManualEvidence ? [] : [...unresolved].sort(),
  }
  const extraction = {
    ...config.extraction,
    observedProvisionCount: observed.provisionCount,
    observedPageCount: observed.pageCount,
    observedTextCoverage: observed.textCoverage,
    textLayerPageCount: observed.textLayerPageCount,
  }

  return {
    // `id` is retained for app/data/legal-corpus.ts and the old reader.
    id: config.editionId,
    schemaVersion: config.schemaVersion,
    documentId: config.documentId,
    editionId: config.editionId,
    shortName: config.shortName,
    title: config.title,
    citation: config.citation,
    ...(config.publisher ? { publisher: config.publisher } : {}),
    ...(config.year ? { year: config.year } : {}),
    ...(config.position ? { position: config.position } : {}),
    source,
    officialPageUrl: source.officialPageUrl,
    metadataUrl: source.metadataUrl,
    pdfUrl: source.pdfUrl,
    checkedAt: config.checkedAt,
    legalStateDate: config.legalStateDate,
    extraction,
    extractionProfile: config.extraction.profile,
    localPdfUrl: `/legal-sources/${config.editionId}/source.pdf`,
    pageCount: observed.pageCount,
    textLayerPageCount: observed.textLayerPageCount,
    textCoverage: observed.textCoverage,
    detectedArticleCount: observed.articleCount,
    detectedProvisionCount: observed.provisionCount,
    provisionCount: observed.provisionCount,
    promotedProvisionCount: observed.promotedProvisionCount,
    pdfSha256,
    sourcePdfSha256: pdfSha256,
    builtAt,
    legalStatusEvidence,
    diagnostics: {
      fatalCount: diagnostics.fatal.length,
      warningCount: diagnostics.warnings.length,
    },
    eli,
  }
}
