import type { LegalTextValue } from "~/data/legal-library/legal-text"
import type { OfficialSource } from "~/data/shared/legal-types"

export type EvidenceDocumentId =
  | "employment-annex-1"
  | "employment-contract"
  | "mos-application"
  | "passport"
  | "upo"
  | "ukraine-work-notification"
  | "authority-summons"
  | "delivery-proof"
  | "power-of-attorney"
  | "administrative-decision"
  | "zus-confirmation"
  | "business-register-information"
  | "crbr-information"
  | "stamp-duty-proof"
  | "residence-card-fee-proof"
  | "pesel-ukr-confirmation"
  | "residence-card"
  | "sworn-translation"

export type EvidenceDocumentCategory =
  | "identity"
  | "procedure"
  | "work"
  | "company"
  | "financial"
  | "evidence"
  | "other"

export type DocumentGuide = {
  id: EvidenceDocumentId
  title: string
  category: EvidenceDocumentCategory
  aliases: readonly string[]
  documentType?: LegalTextValue
  description: LegalTextValue
  preparedBy: LegalTextValue
  howToObtain?: LegalTextValue[]
  formAndValidity?: LegalTextValue[]
  purpose: LegalTextValue[]
  doesNotProve: LegalTextValue[]
  legalBasis: LegalTextValue[]
  keyChecks: LegalTextValue[]
  relatedDocuments?: readonly EvidenceDocumentId[]
  sources: OfficialSource[]
  verifiedAt: string
}

export type EvidenceDocumentReference = {
  kind: "evidence-document"
  documentId: EvidenceDocumentId
}

export type EvidenceDocument = {
  id: EvidenceDocumentId
  title: string
  category: EvidenceDocumentCategory
  aliases: readonly string[]
  guide: DocumentGuide
  relatedDocuments: readonly EvidenceDocumentId[]
  sources: readonly OfficialSource[]
  verifiedAt: string
}

export type EvidenceDocumentReferenceResolution =
  | {
      status: "resolved"
      state: "resolved"
      reference: EvidenceDocumentReference
      href: string
      document: EvidenceDocument
    }
  | {
      status: "unknown-document"
      state: "unknown-document"
      reference: unknown
    }

export const evidenceDocumentIds = [
  "employment-annex-1",
  "employment-contract",
  "mos-application",
  "passport",
  "upo",
  "ukraine-work-notification",
  "authority-summons",
  "delivery-proof",
  "power-of-attorney",
  "administrative-decision",
  "zus-confirmation",
  "business-register-information",
  "crbr-information",
  "stamp-duty-proof",
  "residence-card-fee-proof",
  "pesel-ukr-confirmation",
  "residence-card",
  "sworn-translation",
] as const satisfies readonly EvidenceDocumentId[]
