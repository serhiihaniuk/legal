import type { EvidenceDocumentId } from "./contracts"
import type { LegalProvisionReference } from "~/data/legal-library/contracts"
export type DocumentFormLink = {
  documentId: EvidenceDocumentId
  reference: LegalProvisionReference
  label: string
}
// The form number inside an application can differ from its annex number in the regulation.
export const documentFormLinks = [
  {
    documentId: "mos-application",
    reference: {
      kind: "legal-provision",
      documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-1",
    },
    label: "Основна заява на pobyt czasowy",
  },
  {
    documentId: "employment-annex-1",
    reference: {
      kind: "legal-provision",
      documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-2",
    },
    label: "Додаток роботодавця, номер 1 у заяві",
  },
  {
    documentId: "blue-card-annex",
    reference: {
      kind: "legal-provision",
      documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-3",
    },
    label: "Кваліфікації Blue Card, номер 2 у заяві",
  },
  {
    documentId: "trainee-volunteer-annex",
    reference: {
      kind: "legal-provision",
      documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-4",
    },
    label: "Staż або wolontariat, номер 3 у заяві",
  },
  {
    documentId: "research-annex",
    reference: {
      kind: "legal-provision",
      documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-5",
    },
    label: "Науковець, номер 4 у заяві",
  },
  {
    documentId: "study-annex",
    reference: {
      kind: "legal-provision",
      documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-6",
    },
    label: "Навчальний заклад, номер 5 у заяві",
  },
  {
    documentId: "ict-application",
    reference: {
      kind: "legal-provision",
      documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-7",
    },
    label: "Паперова заява ICT",
  },
  {
    documentId: "family-abroad-application",
    reference: {
      kind: "legal-provision",
      documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-8",
    },
    label: "Сімейна заява щодо особи за кордоном",
  },
  {
    documentId: "family-application-consent",
    reference: {
      kind: "legal-provision",
      documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-9",
    },
    label: "Згода на сімейне подання",
  },
  {
    documentId: "fingerprint-record",
    reference: {
      kind: "legal-provision",
      documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-10",
    },
    label: "Запис про відбитки, заповнює орган",
  },
  {
    documentId: "signature-specimen",
    reference: {
      kind: "legal-provision",
      documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-11",
    },
    label: "Взірець підпису для карти",
  },
] as const satisfies readonly DocumentFormLink[]
