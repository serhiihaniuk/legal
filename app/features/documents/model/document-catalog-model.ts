import {
  documentCategoryLabels,
  listEvidenceDocumentCategories,
  type EvidenceDocumentCategory,
  type DocumentGuide,
} from "~/data/document-library"
import type { DocumentCatalogEntry } from "~/data/documents/catalog"

export const documentCatalogToc = [
  { href: "#documents-overview", label: "Що є в каталозі" },
  { href: "#documents-list", label: "Усі документи" },
]

export function documentDetailToc(document: DocumentCatalogEntry) {
  return [
    { href: "#document-overview", label: "Що це за документ" },
    { href: "#document-purpose", label: "Роль і межі доказу" },
    ...(document.guide.explanation ?? []).map((section) => ({
      href: `#document-${section.id}`,
      label: section.title,
    })),
    ...(document.guide.howToObtain?.length ||
    document.guide.formAndValidity?.length
      ? [{ href: "#document-obtain", label: "Підготовка і форма" }]
      : []),
    { href: "#document-elements", label: "Як перевіряти" },
    ...(document.contexts.length || document.caseContexts.length
      ? [{ href: "#document-contexts", label: "Де використовується" }]
      : []),
    { href: "#document-regulation", label: "Правове регулювання" },
    { href: "#document-sources", label: "Офіційні джерела" },
  ]
}

export function documentKindLabel(guide: DocumentGuide) {
  switch (guide.kind) {
    case "working-record":
      return "Робочий запис"
    case "evidence-set":
      return "Набір доказів"
    default:
      return "Документ"
  }
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
