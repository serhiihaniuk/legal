import { legalData } from "~/data/legal-data"
import { documentGuides, type DocumentGuide } from "~/data/document-guides"
import { allNodes, type IndexedNode } from "~/data/legal-index"
import {
  legalTextPlainText,
  type LegalTextValue,
} from "~/data/legal-library/legal-text"
import type { CaseDocument, OfficialSource } from "~/data/legal-types"

export type DocumentContext = {
  node: IndexedNode
  regulation: LegalTextValue
}

export type DocumentCaseContext = CaseDocument & {
  routeId: string
  routeTitle: string
}

export type DocumentCatalogEntry = {
  id: string
  title: string
  normalizedTitle: string
  category: DocumentCategory
  contexts: DocumentContext[]
  caseContexts: DocumentCaseContext[]
  sources: OfficialSource[]
  guide?: DocumentGuide
}

export type DocumentCategory =
  | "identity"
  | "procedure"
  | "work"
  | "company"
  | "financial"
  | "evidence"
  | "other"

export const documentCategoryLabels: Record<DocumentCategory, string> = {
  identity: "Особа і перебування",
  procedure: "Заява і процедура",
  work: "Праця і страхування",
  company: "Компанія та модель співпраці",
  financial: "Оплати й фінанси",
  evidence: "Докази й кореспонденція",
  other: "Інші документи",
}

const canonicalAliases: Array<[RegExp, string]> = [
  [/^umowa o pracę(?:\s|—|$)/i, "Umowa o pracę"],
  [/^(?:za potrzeb[yi]\s+)?pełnomocnictwo(?:\s|,|$)/i, "Pełnomocnictwo"],
  [/^powiadomienie PUP(?:\s|$)/i, "Powiadomienie PUP"],
  [/^UPO(?:\s|\/|\+|$)/i, "UPO / urzędowe poświadczenie"],
  [/^(?:wniosek MOS|електронна заява MOS)$/i, "Wniosek MOS"],
  [/^(?:дійсний |оригінал )?(?:закордонний )?паспорт(?:\s|$)/i, "Паспорт"],
  [/^скани всіх сторінок дійсного паспорта$/i, "Паспорт"],
  [/^паспорт або документ подорожі$/i, "Паспорт"],
  [/^załącznik nr 1(?:\s|$)/i, "Załącznik nr 1"],
  [/^(?:wezwanie|можливе wezwanie)(?:\s|$)/i, "Wezwanie"],
  [/^(?:decyzja|ostateczna decyzja|рішення)(?:\s|$)/i, "Рішення"],
  [
    /^(?:підтвердження doręczenia|доказ дати doręczenia|підтвердження e-doręczenia|конверт і awizo)$/i,
    "Підтвердження doręczenia",
  ],
  [
    /^(?:страхування\/zus за потреби|доказ виплат і zus|підтвердження zus)$/i,
    "Підтвердження ZUS",
  ],
  [
    /^(?:дані krs\/ceidg роботодавця|krs\/ceidg, повноваження підписанта|інформація krs \/ ceidg)$/i,
    "Інформація KRS / CEIDG",
  ],
  [/^(?:krs\/crbr і схема powiązań|інформація з crbr)$/i, "Інформація з CRBR"],
  [
    /^(?:підтвердження |доказ сплати )?opłat(?:a|y) skarbow(?:a|ej)(?:, якщо потрібна|\s+\d+\s*zł)?$/i,
    "Підтвердження opłaty skarbowej",
  ],
  [
    /^(?:підтвердження )?opłat(?:a|y) za kartę(?:\s+\d+\s*zł)?$/i,
    "Підтвердження opłaty za kartę",
  ],
  [
    /^(?:підтвердження pesel ukr та історії статусу|активний pesel ukr та історія status ukr|паспорт і pesel ukr)$/i,
    "Підтвердження PESEL UKR",
  ],
  [
    /^(?:карта pobytu|карта\/документ перебування|карта побиту як документ дозволу)$/i,
    "Karta pobytu",
  ],
  [
    /^(?:кваліфікації \/ )?(?:зрозумілий переклад\/версія|tłumaczenie przysięgłe|tłumaczenie, apostille, legalizacja)$/i,
    "Tłumaczenie przysięgłe",
  ],
]

function canonicalTitle(title: string) {
  const trimmed = title.trim()
  return (
    canonicalAliases.find(([pattern]) => pattern.test(trimmed))?.[1] ?? trimmed
  )
}

function normalizeTitle(title: string) {
  return canonicalTitle(title).toLocaleLowerCase("pl-PL")
}

function hashTitle(value: string) {
  let hash = 2166136261
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index)
    hash = Math.imul(hash, 16777619)
  }
  return (hash >>> 0).toString(36)
}

function categoryFor(title: string): DocumentCategory {
  const value = title.toLocaleLowerCase("pl-PL")

  if (
    /paszport|паспорт|pesel|karta pobytu|dokument pobyt|wiza|віза|виїзд|перетин|foto|фото/.test(
      value
    )
  )
    return "identity"
  if (
    /wniosek|заява|upo|upp|mos|wezwanie|doręcz|awizo|akta sprawy|рішення|decyz|odciski|підпис|załącznik|pełnomoc/.test(
      value
    )
  )
    return "procedure"
  if (
    /umow|прац|zus|ubezpiec|страхув|wynagrod|виплат|powiadomienie pup|кваліфікац/.test(
      value
    )
  )
    return "work"
  if (
    /krs|ceidg|crbr|sla|kpi|protok|рахунк|regulamin|графік|компан|poleceni|jakość/.test(
      value
    )
  )
    return "company"
  if (/opłat|оплат|bank|podat|подат|skarbow/.test(value)) return "financial"
  if (
    /доказ|poświadczen|підтвердж|перелік|лист-відповідь|таблиця|переклад|tłumaczenie|акти цивільного/.test(
      value
    )
  )
    return "evidence"
  return "other"
}

function uniqueSources(sources: OfficialSource[]) {
  return [...new Map(sources.map((source) => [source.url, source])).values()]
}

function uniqueContexts(contexts: DocumentContext[]) {
  return [
    ...new Map(contexts.map((context) => [context.node.id, context])).values(),
  ]
}

function uniqueCaseContexts(contexts: DocumentCaseContext[]) {
  return [
    ...new Map(
      contexts.map((context) => [
        `${context.routeId}:${context.item}:${context.proves}`,
        context,
      ])
    ).values(),
  ]
}

const entries = new Map<string, DocumentCatalogEntry>()

function ensureEntry(rawTitle: string) {
  const title = canonicalTitle(rawTitle)
  const normalizedTitle = normalizeTitle(title)
  const existing = entries.get(normalizedTitle)
  if (existing) return existing

  const entry: DocumentCatalogEntry = {
    id: `dokument-${hashTitle(normalizedTitle)}`,
    title,
    normalizedTitle,
    category: categoryFor(title),
    contexts: [],
    caseContexts: [],
    sources: [],
  }
  entries.set(normalizedTitle, entry)
  return entry
}

for (const node of allNodes) {
  for (const title of node.documents ?? []) {
    const entry = ensureEntry(legalTextPlainText(title))
    entry.contexts.push({ node, regulation: node.polish })
    entry.sources.push(...(node.sources ?? []))
  }
}

for (const route of legalData.caseStudy.routes) {
  for (const document of route.documentRegister) {
    const entry = ensureEntry(legalTextPlainText(document.item))
    entry.caseContexts.push({
      ...document,
      routeId: route.id,
      routeTitle: route.title,
    })
    entry.sources.push(...route.sources)
  }
}

const indexedDocumentReferences = [...entries.values()]
  .map((entry) => {
    const guide = documentGuides.find((item) =>
      item.matches.some(
        (match) => normalizeTitle(match) === entry.normalizedTitle
      )
    )
    return {
      ...entry,
      title: guide?.displayTitle ?? entry.title,
      category: guide?.category ?? entry.category,
      guide,
      contexts: uniqueContexts(entry.contexts),
      caseContexts: uniqueCaseContexts(entry.caseContexts),
      // Public document pages use only editorially assigned sources. Sources
      // gathered from every map/case mention are often valid for that context,
      // but not for the document itself.
      sources: uniqueSources(guide?.sources ?? []),
    }
  })
  .sort((a, b) => a.title.localeCompare(b.title, "pl"))

// Only editorially prepared, source-backed pages appear in the public catalog.
// Broad evidence bundles remain visible in their map/case context until they
// are split into concrete documents with a verified legal guide.
export const documentCatalog = indexedDocumentReferences.filter(
  (entry) => entry.guide
)

export const documentById = new Map(
  documentCatalog.map((entry) => [entry.id, entry])
)
const documentByNormalizedTitle = new Map(
  documentCatalog.map((entry) => [entry.normalizedTitle, entry])
)

export type DocumentMentionPattern = {
  label: string
  entry: DocumentCatalogEntry
}

export const documentMentionPatterns: DocumentMentionPattern[] = [
  ...new Map(
    documentCatalog.flatMap((entry) => {
      const labels = [entry.title, ...(entry.guide?.matches ?? [])]
      return labels.map(
        (label) =>
          [`${entry.id}:${normalizeTitle(label)}`, { label, entry }] as const
      )
    })
  ).values(),
].sort((left, right) => right.label.length - left.label.length)

export function documentEntryForTitle(title: string) {
  return documentByNormalizedTitle.get(normalizeTitle(title))
}

export function documentsForCategory(category?: DocumentCategory | "all") {
  return documentCatalog.filter((entry) => {
    if (category && category !== "all" && entry.category !== category)
      return false
    return true
  })
}
