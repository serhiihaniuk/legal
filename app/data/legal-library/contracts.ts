import { legalReferenceRegistry } from "~/data/legal-corpus/reference-registry.generated"
import type { LegalTextValue } from "~/data/legal-library/legal-text"

export type LegalDocumentId = keyof typeof legalReferenceRegistry & string
export type LegalEditionId<D extends LegalDocumentId> =
  (typeof legalReferenceRegistry)[D]["editionIds"][number]
export type LegalProvisionId<D extends LegalDocumentId> =
  (typeof legalReferenceRegistry)[D]["provisionIds"][number]

/** A distributive member keeps document, edition, and provision identities together. */
export type LegalProvisionReference = {
  [D in LegalDocumentId]: {
    kind: "legal-provision"
    documentId: D
    provisionId: LegalProvisionId<D>
    editionId?: LegalEditionId<D>
  }
}[LegalDocumentId]

export type LegalDocumentReference = {
  kind: "legal-document"
  documentId: LegalDocumentId
}

export type LegalCorpusManifest = {
  id: string
  schemaVersion: number
  documentId: string
  editionId: string
  shortName: string
  title: string
  citation: string
  source: {
    provider: string
    officialPageUrl: string
    metadataUrl: string
    pdfUrl: string
    expectedPdfSha256?: string
  }
  sourceMaterials?: readonly LegalSourceMaterial[]
  amendmentOverlay?: unknown
  officialPageUrl: string
  metadataUrl: string
  pdfUrl: string
  checkedAt: string
  legalStateDate: string
  localPdfUrl: string
  pageCount: number
  textLayerPageCount: number
  textCoverage?: number
  provisionCount?: number
  promotedProvisionCount?: number
  pdfSha256: string
  sourcePdfSha256: string
  builtAt: string
  legalStatusEvidence?: {
    status?: string | null
    inForce?: string | null
    legalStateDate?: string | null
    legalStatusDate?: string | null
    consolidatedTextIdentifier?: string | null
    checkedAt?: string
    sourceUrls?: readonly string[]
    sourceUrl?: string
    amendmentsCheckedThrough?: string | null
    entryIntoForce?: readonly LegalStatusEvidenceEntry[]
    transitionalRules?: readonly LegalStatusEvidenceEntry[]
    unresolved?: string[]
  }
  [key: string]: unknown
}

export type LegalStatusEvidenceEntry = {
  locator: string
  result: string
}

export type LegalSourceMaterial = {
  id: string
  role: "base" | "amendment" | string
  citation: string
  officialPageUrl: string
  metadataUrl: string
  pdfUrl: string
  localPdfUrl: string
  pdfSha256: string
  expectedPdfSha256?: string
  effectiveDate?: string
}

export type LegalProvisionKind =
  "article" | "paragraph" | "section" | "point" | "annex" | "other"

export type LegalProvisionStatus =
  "active" | "future" | "repealed" | "reserved" | "removed" | "unknown"

export type CorpusProvision = {
  id: string
  documentId: string
  editionId: string
  kind: LegalProvisionKind
  locator: string
  parentId: string | null
  childIds: readonly string[]
  order: number
  startPdfPage: number
  endPdfPage: number
  status: LegalProvisionStatus
  effectiveDate?: string
  sourcePdfSha256: string
  sourceTextHash: string
  text: string
  sourceSpans?: readonly LegalProvisionSourceSpan[]
  amendmentOverlay?: {
    kind: string
    amendmentSourceId: string
    amendmentLocator: string
    effectiveDate: string
    baseSourceTextHash: string
    compiledSourceTextHash: string
  }
}

export type LegalProvisionSourceSpan = {
  sourceId: string
  role: "base" | "amendment" | string
  locator: string
  startPdfPage?: number
  endPdfPage?: number
  sourcePdfSha256?: string
  effectiveDate?: string
}

export type LegalDocument<D extends LegalDocumentId = LegalDocumentId> = {
  id: D
  documentId: D
  shortName: string
  title: string
  citation: string
  editionIds: readonly LegalEditionId<D>[]
  currentEditionId: LegalEditionId<D>
  provisionIds: readonly LegalProvisionId<D>[]
}

export type LegalEdition<D extends LegalDocumentId = LegalDocumentId> = {
  documentId: D
  editionId: LegalEditionId<D>
  shortName: string
  title: string
  citation: string
  manifest: LegalCorpusManifest
  provisionIds: readonly LegalProvisionId<D>[]
}

export type LegalProvision<D extends LegalDocumentId = LegalDocumentId> =
  CorpusProvision & {
    id: LegalProvisionId<D>
    documentId: D
    editionId: LegalEditionId<D>
    canonicalPdfLocator: string
  }

export type ExplanationReviewStatus =
  "draft" | "reviewed" | "stale" | "blocked" | "superseded"

export type LegalClaimKind =
  "statute-text" | "official-guidance" | "case-law" | "practical-inference"

export type LegalExplanation<D extends LegalDocumentId = LegalDocumentId> = {
  id: string
  documentId: D
  provisionId: LegalProvisionId<D>
  sourceEditionId: LegalEditionId<D>
  legalStateDate: string
  verifiedAt: string
  reviewStatus: ExplanationReviewStatus
  language: "uk"
  claims: readonly {
    kind: LegalClaimKind
    text: LegalTextValue
    sourceLocator?: string
  }[]
  summary: LegalTextValue
  rules: readonly { locator: string; explanation: LegalTextValue }[]
  legalEffect: LegalTextValue
  foreignersCase: LegalTextValue
}

export type ExplanationResolutionStatus =
  | "reviewed"
  | "missing-explanation"
  | "source-only"
  | "stale-explanation"
  | "unknown-document"
  | "unknown-edition"
  | "unknown-provision"
  | "mismatched-provision"

export type LegalExplanationResolution =
  | {
      status: "reviewed"
      state: "reviewed"
      explanation: LegalExplanation
      sourceEditionId: string
      requestedEditionId: string
      provision: LegalProvision<LegalDocumentId>
    }
  | {
      status: Exclude<ExplanationResolutionStatus, "reviewed">
      state: Exclude<ExplanationResolutionStatus, "reviewed">
      explanation?: undefined
      sourceEditionId?: string
      requestedEditionId?: string
      provision?: LegalProvision<LegalDocumentId>
    }

export type LegalReferenceResolutionStatus =
  | "resolved"
  | "unknown-document"
  | "unknown-edition"
  | "unknown-provision"
  | "mismatched-provision"

export type LegalReferenceResolution =
  | {
      status: "resolved"
      state: "resolved"
      reference: LegalProvisionReference | LegalDocumentReference
      href: string
      document: LegalDocument
      edition?: LegalEdition<LegalDocumentId>
      provision?: LegalProvision<LegalDocumentId>
    }
  | {
      status: Exclude<LegalReferenceResolutionStatus, "resolved">
      state: Exclude<LegalReferenceResolutionStatus, "resolved">
      reference: unknown
    }

export type CanonicalPdfLocator = {
  href: string
  page: number
  endPage: number
  editionId: string
  documentId: string
  provisionId: string
  sourcePdfSha256: string
}
