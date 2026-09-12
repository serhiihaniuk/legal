import type { LegalTextValue } from "~/data/legal-library/legal-text"
import type { OfficialSource } from "~/data/shared/legal-types"

export type EvidenceDocumentId =
  | "agency-referral-confirmation"
  | "employment-certificate"
  | "temporary-civil-work-certificate"
  | "temporary-work-period-register"
  | "pip-posting-declaration"
  | "seasonal-work-permit"
  | "seasonal-registration-certificate"
  | "seasonal-arrival-statement"
  | "registered-work-declaration"
  | "job-search-evidence"
  | "karta-polaka"
  | "corporate-work-permit"
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
  | "procedural-order"
  | "administrative-appeal"
  | "procedural-complaint"
  | "judicial-complaint"
  | "court-judgment"
  | "zus-confirmation"
  | "zus-no-arrears"
  | "zus-insurance-history"
  | "employment-income-certificate"
  | "tax-income-certificate"
  | "bank-statement"
  | "bank-funds-certificate"
  | "payroll-statement"
  | "zus-health-registration"
  | "zus-rca"
  | "business-register-information"
  | "board-appointment-resolution"
  | "shareholder-list"
  | "board-remuneration-resolution"
  | "crbr-information"
  | "stamp-duty-proof"
  | "residence-card-fee-proof"
  | "pesel-ukr-confirmation"
  | "residence-card"
  | "sworn-translation"
  | "stay-history"
  | "evidence-matrix"
  | "case-file-index"
  | "civil-status-record"
  | "health-insurance"
  | "private-health-insurance-policy"
  | "residential-lease"
  | "polish-graduation-diploma"
  | "work-location-confirmation"
  | "income-evidence"
  | "housing-evidence"
  | "study-confirmation"
  | "tuition-payment"
  | "study-progress"
  | "qualification-evidence"
  | "professional-experience-confirmation"
  | "polish-language-proof"
  | "business-evidence"
  | "settlement-intention"
  | "digital-photo"
  | "apostille-legalisation"
  | "blue-card-annex"
  | "blue-card-notification"
  | "temporary-residence-notification"
  | "trainee-volunteer-annex"
  | "research-annex"
  | "study-annex"
  | "ict-application"
  | "family-abroad-application"
  | "family-application-consent"
  | "fingerprint-record"
  | "signature-specimen"
  | "cukr-application"
  | "permanent-application"
  | "resident-application"
  | "response-letter"
  | "dispatch-proof"
  | "requirements-table"
  | "case-assessment"
  | "job-description"
  | "family-evidence"
  | "visa"
  | "deadline-obstacle"
  | "proceeding-certificate"
  | "work-organisation-evidence"
  | "status-documents"
export type EvidenceDocumentCategory =
  | "identity"
  | "procedure"
  | "work"
  | "company"
  | "financial"
  | "evidence"
  | "other"
  | "education"

export type DocumentWorkedExample = {
  title: string
  facts: LegalTextValue[]
  rows?: { label: string; evidence: LegalTextValue; meaning: LegalTextValue }[]
  reasoning: LegalTextValue[]
  conclusion: LegalTextValue
  sample?: DocumentSample
}

export type DocumentSample = {
  title: string
  note: string
} & (
  | {
      kind: "table"
      columns: string[]
      rows: { id: string; cells: LegalTextValue[] }[]
    }
  | { kind: "letter"; language: "pl" | "uk"; paragraphs: string[] }
)

export type DocumentExplanation = {
  id: string
  title: string
  paragraphs: LegalTextValue[]
  example?: DocumentWorkedExample
}

export type DocumentGuide = {
  id: EvidenceDocumentId
  title: string
  category: EvidenceDocumentCategory
  aliases: readonly string[]
  kind?: "document" | "evidence-set" | "working-record"
  explanation?: DocumentExplanation[]
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
  "agency-referral-confirmation",
  "employment-certificate",
  "temporary-civil-work-certificate",
  "temporary-work-period-register",
  "pip-posting-declaration",
  "seasonal-work-permit",
  "seasonal-registration-certificate",
  "seasonal-arrival-statement",
  "registered-work-declaration",
  "corporate-work-permit",
  "karta-polaka",
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
  "procedural-order",
  "administrative-appeal",
  "procedural-complaint",
  "judicial-complaint",
  "court-judgment",
  "zus-confirmation",
  "zus-no-arrears",
  "zus-insurance-history",
  "employment-income-certificate",
  "tax-income-certificate",
  "bank-statement",
  "bank-funds-certificate",
  "payroll-statement",
  "zus-health-registration",
  "zus-rca",
  "business-register-information",
  "board-appointment-resolution",
  "shareholder-list",
  "board-remuneration-resolution",
  "crbr-information",
  "stamp-duty-proof",
  "residence-card-fee-proof",
  "pesel-ukr-confirmation",
  "residence-card",
  "sworn-translation",
  "stay-history",
  "evidence-matrix",
  "case-file-index",
  "civil-status-record",
  "health-insurance",
  "private-health-insurance-policy",
  "residential-lease",
  "polish-graduation-diploma",
  "work-location-confirmation",
  "income-evidence",
  "housing-evidence",
  "study-confirmation",
  "tuition-payment",
  "study-progress",
  "qualification-evidence",
  "professional-experience-confirmation",
  "job-search-evidence",
  "polish-language-proof",
  "business-evidence",
  "settlement-intention",
  "digital-photo",
  "apostille-legalisation",
  "blue-card-annex",
  "blue-card-notification",
  "temporary-residence-notification",
  "trainee-volunteer-annex",
  "research-annex",
  "study-annex",
  "ict-application",
  "family-abroad-application",
  "family-application-consent",
  "fingerprint-record",
  "signature-specimen",
  "cukr-application",
  "permanent-application",
  "resident-application",
  "response-letter",
  "dispatch-proof",
  "requirements-table",
  "case-assessment",
  "job-description",
  "family-evidence",
  "visa",
  "deadline-obstacle",
  "proceeding-certificate",
  "work-organisation-evidence",
  "status-documents",
] as const satisfies readonly EvidenceDocumentId[]

export function isEvidenceDocumentId(
  value: unknown
): value is EvidenceDocumentId {
  return (
    typeof value === "string" && evidenceDocumentIds.some((id) => id === value)
  )
}
