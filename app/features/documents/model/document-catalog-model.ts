import {
  documentCategoryLabels,
  listEvidenceDocumentCategories,
  type EvidenceDocumentCategory,
} from "~/data/document-library"
import type { DocumentCatalogEntry } from "~/data/documents/catalog"

export const documentCatalogToc = [
  { href: "#documents-overview", label: "Що є в каталозі" },
  { href: "#documents-list", label: "Усі документи" },
]

export function documentDetailToc(document: DocumentCatalogEntry) {
  return [
    { href: "#document-overview", label: "Що це за документ" },
    ...(document.guide?.howToObtain?.length
      ? [{ href: "#document-obtain", label: "Як отримати або підготувати" }]
      : []),
    { href: "#document-purpose", label: "Роль і межі доказу" },
    { href: "#document-elements", label: "Як перевіряти" },
    ...(document.contexts.length || document.caseContexts.length
      ? [{ href: "#document-contexts", label: "Де використовується" }]
      : []),
    { href: "#document-regulation", label: "Правове регулювання" },
    { href: "#document-sources", label: "Офіційні джерела" },
  ]
}

export const categories = listEvidenceDocumentCategories().map(
  (id) => [id, documentCategoryLabels[id]] as [EvidenceDocumentCategory, string]
)

export const categoryNavigationOptions: readonly {
  value: EvidenceDocumentCategory | "all"
  label: string
}[] = [
  { value: "all", label: "Усі документи" },
  ...categories.map(([value, label]) => ({ value, label })),
]

export function pluralizeUkrainian(
  count: number,
  forms: [one: string, few: string, many: string]
) {
  const lastTwo = count % 100
  const last = count % 10

  if (last === 1 && lastTwo !== 11) return `${count} ${forms[0]}`
  if (last >= 2 && last <= 4 && (lastTwo < 12 || lastTwo > 14)) {
    return `${count} ${forms[1]}`
  }
  return `${count} ${forms[2]}`
}
