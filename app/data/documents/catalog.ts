import type { CaseGuideRouteId } from "~/data/case-guides/types"
import { legalData } from "~/data/legal-map/data"
import { allNodes, type IndexedNode } from "~/data/legal-map/index"
import {
  legalTextPlainText,
  type LegalTextValue,
} from "~/data/legal-library/legal-text"
import type { CaseDocument } from "~/data/shared/legal-types"
import {
  documentCategoryLabels,
  getEvidenceDocumentByAlias,
  listEvidenceDocuments,
  type EvidenceDocument,
  type EvidenceDocumentCategory,
  type EvidenceDocumentId,
} from "~/data/document-library"

/** Context gathered from legacy map mentions; it is not document identity. */
export type DocumentContext = {
  node: IndexedNode
  regulation: LegalTextValue
}

export type DocumentCaseContext = CaseDocument & {
  routeId: CaseGuideRouteId
  routeTitle: string
}

export type DocumentCatalogEntry = EvidenceDocument & {
  contexts: DocumentContext[]
  caseContexts: DocumentCaseContext[]
}

export type DocumentCategory = EvidenceDocumentCategory

export { documentCategoryLabels }

function legacyCanonicalTitle(title: string): string {
  const trimmed = title.trim()
  const aliases: Array<[RegExp, string]> = [
    [/^umowa o pracę(?:\s|—|$)/iu, "Umowa o pracę"],
    [/^(?:za potrzeb[yi]\s+)?pełnomocnictwo(?:\s|,|$)/iu, "Pełnomocnictwo"],
    [/^powiadomienie PUP(?:\s|$)/iu, "Powiadomienie PUP"],
    [/^UPO(?:\s|\/|\+|$)/iu, "UPO / urzędowe poświadczenie"],
    [/^(?:wniosek MOS|електронна заява MOS)$/iu, "Wniosek MOS"],
    [/^(?:дійсний |оригінал )?(?:закордонний )?паспорт(?:\s|$)/iu, "Паспорт"],
    [/^скани всіх сторінок дійсного паспорта$/iu, "Паспорт"],
    [/^паспорт або документ подорожі$/iu, "Паспорт"],
    [/^załącznik nr 1(?:\s|$)/iu, "Załącznik nr 1"],
    [/^(?:wezwanie|можливе wezwanie)(?:\s|$)/iu, "Wezwanie"],
    [/^(?:decyzja|ostateczna decyzja|рішення)(?:\s|$)/iu, "Рішення"],
    [
      /^(?:підтвердження doręczenia|доказ дати doręczenia|підтвердження e-doręczenia|конверт і awizo)$/iu,
      "Підтвердження doręczenia",
    ],
    [
      /^(?:страхування\/zus за потреби|доказ виплат і zus|підтвердження zus)$/iu,
      "Підтвердження ZUS",
    ],
    [
      /^(?:дані krs\/ceidg роботодавця|krs\/ceidg, повноваження підписанта|інформація krs \/ ceidg)$/iu,
      "Інформація KRS / CEIDG",
    ],
    [
      /^(?:krs\/crbr і схема powiązań|інформація з crbr)$/iu,
      "Інформація з CRBR",
    ],
    [
      /^(?:підтвердження |доказ сплати )?opłat(?:a|y) skarbow(?:a|ej)(?:, якщо потрібна|\s+\d+\s*zł)?$/iu,
      "Підтвердження opłaty skarbowej",
    ],
    [
      /^(?:підтвердження )?opłat(?:a|y) za kartę(?:\s+\d+\s*zł)?$/iu,
      "Підтвердження opłaty za kartę",
    ],
    [
      /^(?:підтвердження pesel ukr та історії статусу|активний pesel ukr та історія status ukr|паспорт і pesel ukr)$/iu,
      "Підтвердження PESEL UKR",
    ],
    [
      /^(?:карта pobytu|карта\/документ перебування|карта побиту як документ дозволу)$/iu,
      "Karta pobytu",
    ],
    [
      /^(?:кваліфікації \/ )?(?:зрозумілий переклад\/версія|tłumaczenie przysięgłe|tłumaczenie, apostille, legalizacja)$/iu,
      "Tłumaczenie przysięgłe",
    ],
  ]
  return aliases.find(([pattern]) => pattern.test(trimmed))?.[1] ?? trimmed
}

function documentForMention(title: string): EvidenceDocument | undefined {
  return (
    getEvidenceDocumentByAlias(title) ??
    getEvidenceDocumentByAlias(legacyCanonicalTitle(title))
  )
}

function uniqueContexts(contexts: DocumentContext[]): DocumentContext[] {
  return [
    ...new Map(contexts.map((context) => [context.node.id, context])).values(),
  ]
}

function uniqueCaseContexts(
  contexts: DocumentCaseContext[]
): DocumentCaseContext[] {
  return [
    ...new Map(contexts.map((context) => [context.routeId, context])).values(),
  ]
}

const contextsByDocumentId = new Map<
  EvidenceDocumentId,
  { contexts: DocumentContext[]; caseContexts: DocumentCaseContext[] }
>()
for (const document of listEvidenceDocuments()) {
  contextsByDocumentId.set(document.id, { contexts: [], caseContexts: [] })
}

for (const node of allNodes) {
  for (const title of node.documents ?? []) {
    const document = documentForMention(legalTextPlainText(title))
    if (!document) continue
    contextsByDocumentId.get(document.id)?.contexts.push({
      node,
      regulation: node.polish,
    })
  }
}

for (const route of legalData.caseStudy.routes) {
  for (const document of route.documentRegister) {
    const canonical = documentForMention(legalTextPlainText(document.item))
    if (!canonical) continue
    contextsByDocumentId.get(canonical.id)?.caseContexts.push({
      ...document,
      routeId: route.id as CaseGuideRouteId,
      routeTitle: route.title,
    })
  }
}

/** Canonical registry records with contextual backlinks attached by the adapter. */
export const documentCatalog: DocumentCatalogEntry[] =
  listEvidenceDocuments().map((document) => {
    const contexts = contextsByDocumentId.get(document.id)
    return {
      ...document,
      contexts: uniqueContexts(contexts?.contexts ?? []),
      caseContexts: uniqueCaseContexts(contexts?.caseContexts ?? []),
    }
  })

export const documentById = new Map<EvidenceDocumentId, DocumentCatalogEntry>(
  documentCatalog.map((entry) => [entry.id, entry])
)

export function documentsForCategory(
  category?: DocumentCategory | "all"
): DocumentCatalogEntry[] {
  return documentCatalog.filter(
    (entry) => !category || category === "all" || entry.category === category
  )
}
