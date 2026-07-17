import {
  listEvidenceDocuments,
  getEvidenceDocument,
  type EvidenceDocument,
  type EvidenceDocumentReference,
} from "~/data/document-library"
import { caseGuideRouteById } from "~/data/case-guides/routes"
import { allNodes, nodeById } from "~/data/legal-map/index"
import { legalTextPlainText } from "~/data/legal-library/legal-text"
import {
  getDocument,
  getEdition,
  getProvision,
} from "~/data/legal-library/query"
import {
  resolveMapTopicPublication,
  resolveProvisionPublication,
  type ProvisionPublication,
} from "~/data/legal-knowledge"
import type {
  LegalDocument,
  LegalDocumentId,
  LegalEdition,
  LegalExplanation,
} from "~/data/legal-library/contracts"
import {
  getOfficialSource,
  officialSourceIdByLegalDocument,
  officialSourceRegistry,
  type OfficialSourceId,
} from "~/data/legal-library/references/official-sources"
import type { LegalReference } from "~/data/references/legal-references"
import { legalReferenceTarget } from "~/data/references/legal-references"
import { kpaArticleIndex } from "~/data/legal-library/learning/kpa"
import type { LegalNode } from "~/data/shared/legal-types"

export const REFERENCE_PREVIEW_MAX_SUMMARY_LENGTH = 280
export const REFERENCE_PREVIEW_MAX_TITLE_LENGTH = 180

export type LegalReferencePreviewStatus = "reviewed" | "draft" | "source-only"

export type LegalReferencePreviewKind = LegalReference["kind"]

export type LegalReferencePreview = {
  identity: string
  reference: LegalReference
  kind: LegalReferencePreviewKind
  title: string
  label?: string
  subtitle?: string
  summary: string
  status: LegalReferencePreviewStatus
  sourceOnly: boolean
  sourceUrl?: string
  sourceLabel?: string
  sourceNote?: string
  sourceTextExcerpt?: string
  locator?: string
  domain?: string
  purpose?: readonly string[]
  documentId?: string
  provisionId?: string
  citation?: string
  editionId?: string
  sourceEditionId?: string
  legalStateDate?: string
  verifiedAt?: string
  reviewStatus?: LegalExplanation["reviewStatus"]
}

type SourceMetadata = Pick<
  LegalReferencePreview,
  "sourceUrl" | "sourceLabel" | "sourceNote"
>

const previewResultCache = new Map<string, LegalReferencePreview | undefined>()
const previewPromiseCache = new Map<
  string,
  Promise<LegalReferencePreview | undefined>
>()

function trimText(value: string, maximum: number): string {
  const normalized = value.replace(/\s+/gu, " ").trim()
  if (normalized.length <= maximum) return normalized
  return `${normalized.slice(0, Math.max(0, maximum - 1)).trimEnd()}…`
}

function boundedTitle(value: string): string {
  return trimText(value, REFERENCE_PREVIEW_MAX_TITLE_LENGTH)
}

function boundedSummary(value: string): string {
  return trimText(value, REFERENCE_PREVIEW_MAX_SUMMARY_LENGTH)
}

function officialSourceForDocument(
  documentId: LegalDocumentId
): SourceMetadata {
  const sourceId = officialSourceIdByLegalDocument[documentId]
  const source = getOfficialSource(sourceId)
  return source
    ? {
        sourceUrl: source.url,
        sourceLabel: source.label,
      }
    : {}
}

function editionMetadata(
  edition: LegalEdition | undefined
): Pick<LegalReferencePreview, "editionId" | "citation" | "legalStateDate"> {
  if (!edition) return {}
  return {
    editionId: edition.editionId,
    citation: edition.citation,
    legalStateDate: edition.manifest.legalStateDate,
  }
}

function basePreview(
  identity: string,
  reference: LegalReference,
  kind: LegalReferencePreviewKind,
  title: string,
  summary: string,
  status: LegalReferencePreviewStatus,
  source: SourceMetadata = {}
): LegalReferencePreview {
  return {
    identity,
    reference,
    kind,
    title: boundedTitle(title),
    summary: boundedSummary(summary),
    status,
    sourceOnly: status === "source-only",
    ...source,
  }
}

function documentPreview(
  identity: string,
  reference: Extract<LegalReference, { kind: "legal-document" }>,
  document: LegalDocument,
  edition: LegalEdition | undefined
): LegalReferencePreview {
  const source = officialSourceForDocument(document.id)
  const metadata = editionMetadata(edition)
  return {
    ...basePreview(
      identity,
      reference,
      "legal-document",
      document.title,
      `${document.title} — ${document.citation}`,
      "source-only",
      source
    ),
    label: document.shortName,
    subtitle: document.citation,
    documentId: document.id,
    ...metadata,
  }
}

function provisionPreview(
  identity: string,
  reference: Extract<
    LegalReference,
    { kind: "legal-provision" | "legacy-kpa-article" }
  >,
  publication: ProvisionPublication
): LegalReferencePreview {
  const { document, edition, provision } = publication
  const source = officialSourceForDocument(document.id)
  const metadata = editionMetadata(edition)
  const common = {
    documentId: document.id,
    provisionId: provision.id,
    locator: provision.locator,
    ...metadata,
    ...source,
  }

  if (
    publication.previewStatus === "reviewed" &&
    publication.reviewedExplanation
  ) {
    const explanation = publication.reviewedExplanation
    return {
      ...basePreview(
        identity,
        reference,
        reference.kind,
        provision.locator,
        legalTextPlainText(explanation.summary),
        "reviewed",
        source
      ),
      ...common,
      subtitle: `${document.shortName} · ${edition.citation}`,
      sourceEditionId: explanation.sourceEditionId,
      legalStateDate: explanation.legalStateDate,
      verifiedAt: explanation.verifiedAt,
      reviewStatus: explanation.reviewStatus,
    }
  }

  if (publication.previewStatus === "draft" && publication.previewExplanation) {
    const explanation = publication.previewExplanation
    return {
      ...basePreview(
        identity,
        reference,
        reference.kind,
        provision.locator,
        legalTextPlainText(explanation.summary),
        "draft",
        source
      ),
      ...common,
      subtitle: `${document.shortName} · ${edition.citation}`,
      sourceEditionId: explanation.sourceEditionId,
      legalStateDate: explanation.legalStateDate,
      verifiedAt: explanation.verifiedAt,
      reviewStatus: explanation.reviewStatus,
    }
  }

  const excerpt = publication.sourceTextExcerpt
  return {
    ...basePreview(
      identity,
      reference,
      reference.kind,
      provision.locator,
      `${provision.locator}: ${excerpt}`,
      "source-only",
      source
    ),
    ...common,
    subtitle: `${document.shortName} · ${edition.citation}`,
    sourceTextExcerpt: excerpt,
  }
}

function evidencePreview(
  identity: string,
  reference: EvidenceDocumentReference,
  document: EvidenceDocument
): LegalReferencePreview {
  const purpose = document.guide.purpose.map(legalTextPlainText)
  const source = document.sources[0]
  return {
    ...basePreview(
      identity,
      reference,
      "evidence-document",
      document.title,
      legalTextPlainText(document.guide.description),
      "reviewed",
      source
        ? {
            sourceUrl: source.url,
            sourceLabel: source.label,
            sourceNote: legalTextPlainText(source.note),
          }
        : {}
    ),
    subtitle: purpose[0],
    purpose: Object.freeze(purpose),
    verifiedAt: document.verifiedAt,
  }
}

function mapNodePreview(
  identity: string,
  reference: Extract<LegalReference, { kind: "map-node" }>,
  node: LegalNode,
  publication = resolveMapTopicPublication(node.id)
): LegalReferencePreview {
  const source = publication?.sources[0] ?? node.sources?.[0]
  const title = publication?.title ?? node.title
  const summary = publication?.summary ?? node.summary
  const polish = publication?.polish ?? node.polish
  const status = publication?.status ?? "draft"
  return {
    ...basePreview(
      identity,
      reference,
      "map-node",
      title,
      legalTextPlainText(summary),
      status,
      source
        ? {
            sourceUrl: source.url,
            sourceLabel: source.label,
            sourceNote: legalTextPlainText(source.note),
          }
        : {}
    ),
    subtitle: legalTextPlainText(polish),
    ...(publication
      ? {
          legalStateDate: publication.unit.review.legalStateDate,
          verifiedAt: publication.unit.review.verifiedAt,
          reviewStatus: publication.unit.review.reviewStatus,
          sourceEditionId: publication.unit.review.sourceEditionId,
        }
      : {}),
  }
}

function caseRoutePreview(
  identity: string,
  reference: Extract<LegalReference, { kind: "case-route" }>,
  route: {
    title: string
    subtitle: Parameters<typeof legalTextPlainText>[0]
    tab: string
    eyebrow: string
    sources: readonly {
      label: string
      url: string
      note: Parameters<typeof legalTextPlainText>[0]
    }[]
  }
): LegalReferencePreview {
  const source = route.sources[0]
  return {
    ...basePreview(
      identity,
      reference,
      "case-route",
      route.title,
      legalTextPlainText(route.subtitle),
      "draft",
      source
        ? {
            sourceUrl: source.url,
            sourceLabel: source.label,
            sourceNote: legalTextPlainText(source.note),
          }
        : {}
    ),
    label: route.tab,
    subtitle: route.eyebrow,
  }
}

function officialSourcePreview(
  identity: string,
  reference: Extract<LegalReference, { kind: "official-source" }>,
  sourceId: OfficialSourceId
): LegalReferencePreview | undefined {
  const source = getOfficialSource(sourceId)
  if (!source) return undefined
  return {
    ...basePreview(
      identity,
      reference,
      "official-source",
      source.label,
      "Офіційне джерело для перевірки правового тексту та його статусу.",
      "source-only",
      { sourceUrl: source.url, sourceLabel: source.label }
    ),
    label: source.label,
  }
}

function canonicalSourceForUrl(url: string):
  | {
      label: string
      note?: string
    }
  | undefined {
  const registered = Object.values(officialSourceRegistry).find(
    (source) => source.url === url
  )
  if (registered) return { label: registered.label }

  const authoredSources = [
    ...allNodes.flatMap((node) => node.sources ?? []),
    ...[...caseGuideRouteById.values()].flatMap((route) => route.sources),
    ...listEvidenceDocuments().flatMap((document) => document.sources),
  ]
  const matches = authoredSources
    .filter((candidate) => candidate.url === url)
    .map((source) => ({
      label: source.label,
      note: legalTextPlainText(source.note),
    }))
  const first = matches[0]
  if (!first) return undefined
  return matches.every(
    (source) => source.label === first.label && source.note === first.note
  )
    ? first
    : undefined
}

function externalPreview(
  identity: string,
  reference: Extract<LegalReference, { kind: "external" }>
): LegalReferencePreview | undefined {
  let parsedUrl: URL
  try {
    parsedUrl = new URL(reference.url)
  } catch {
    return undefined
  }
  if (parsedUrl.protocol !== "https:" || !parsedUrl.hostname) return undefined
  const domain = parsedUrl.hostname
  const canonicalSource = canonicalSourceForUrl(reference.url)
  return {
    ...basePreview(
      identity,
      reference,
      "external",
      canonicalSource?.label ?? domain,
      canonicalSource?.note ??
        "Зовнішнє HTTPS-джерело. Перевірте матеріал на сторінці джерела.",
      "source-only",
      {
        sourceUrl: reference.url,
        sourceLabel: canonicalSource?.label ?? domain,
        sourceNote: canonicalSource?.note,
      }
    ),
    label: canonicalSource?.label ?? domain,
    domain,
  }
}

function kpaProvisionId(article: string): string | undefined {
  const normalized = article.toLocaleLowerCase("pl-PL")
  const base = normalized.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]+$/u, "")
  const suffix = normalized.slice(base.length)
  const digits: Record<string, string> = {
    "⁰": "0",
    "¹": "1",
    "²": "2",
    "³": "3",
    "⁴": "4",
    "⁵": "5",
    "⁶": "6",
    "⁷": "7",
    "⁸": "8",
    "⁹": "9",
  }
  const key = suffix
    ? `${base}-${[...suffix].map((digit) => digits[digit]).join("-")}`
    : base
  const candidate = `kpa-art-${key}`
  return getProvision("kpa", candidate) ? candidate : undefined
}

function makeIdentity(reference: LegalReference): string {
  switch (reference.kind) {
    case "legal-document":
      return `legal-document:${reference.documentId}`
    case "legal-provision":
      return `legal-provision:${reference.documentId}:${reference.provisionId}:${reference.editionId ?? "current"}`
    case "official-source":
      return `official-source:${reference.sourceId}`
    case "evidence-document":
      return `evidence-document:${reference.documentId}`
    case "legacy-kpa-article":
      return `legacy-kpa-article:${reference.article}`
    case "map-node":
      return `map-node:${reference.nodeId}`
    case "case-route":
      return `case-route:${reference.routeId}`
    case "external":
      return `external:${reference.url}`
  }
}

async function buildPreview(
  identity: string,
  reference: LegalReference
): Promise<LegalReferencePreview | undefined> {
  switch (reference.kind) {
    case "legal-document": {
      const document = getDocument(reference.documentId)
      if (!document || !legalReferenceTarget(reference)) return undefined
      return documentPreview(
        identity,
        reference,
        document,
        getEdition(document.id, document.currentEditionId)
      )
    }
    case "legal-provision": {
      if (!legalReferenceTarget(reference)) return undefined
      const publication = await resolveProvisionPublication(reference)
      return publication
        ? provisionPreview(identity, reference, publication)
        : undefined
    }
    case "evidence-document": {
      const document = getEvidenceDocument(reference.documentId)
      if (!document || !legalReferenceTarget(reference)) return undefined
      return evidencePreview(identity, reference, document)
    }
    case "map-node": {
      const node = nodeById.get(reference.nodeId)
      if (!node || !legalReferenceTarget(reference)) return undefined
      return mapNodePreview(
        identity,
        reference,
        node,
        resolveMapTopicPublication(reference.nodeId)
      )
    }
    case "case-route": {
      const route = caseGuideRouteById.get(reference.routeId)
      if (!route || !legalReferenceTarget(reference)) return undefined
      return caseRoutePreview(identity, reference, route)
    }
    case "official-source":
      return officialSourcePreview(identity, reference, reference.sourceId)
    case "external":
      return legalReferenceTarget(reference)
        ? externalPreview(identity, reference)
        : undefined
    case "legacy-kpa-article": {
      if (!kpaArticleIndex.some((entry) => entry.article === reference.article))
        return undefined
      const provisionId = kpaProvisionId(reference.article)
      if (!provisionId || !legalReferenceTarget(reference)) return undefined
      const publication = await resolveProvisionPublication({
        kind: "legal-provision",
        documentId: "kpa",
        provisionId,
      })
      return publication
        ? provisionPreview(identity, reference, publication)
        : undefined
    }
  }
}

/** Stable cache identity for an authored reference. */
export function legalReferencePreviewIdentity(
  reference: LegalReference
): string {
  return makeIdentity(reference)
}

/**
 * Resolve one preview only when a card opens. Editorial explanation imports
 * happen inside the provision branch and are memoized by reference identity.
 */
export function getLegalReferencePreview(
  reference: LegalReference
): Promise<LegalReferencePreview | undefined> {
  const identity = makeIdentity(reference)
  if (previewResultCache.has(identity)) {
    return Promise.resolve(previewResultCache.get(identity))
  }
  const pending = previewPromiseCache.get(identity)
  if (pending) return pending
  const promise = buildPreview(identity, reference).then((result) => {
    previewResultCache.set(identity, result)
    previewPromiseCache.delete(identity)
    return result
  })
  previewPromiseCache.set(identity, promise)
  return promise
}
