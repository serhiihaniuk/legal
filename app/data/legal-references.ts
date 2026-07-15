import { caseGuideRouteById } from "~/data/case-guide-routes"
import type { CaseGuideRouteId } from "~/data/case-guide-types"
import {
  documentById,
  documentCatalog,
  documentMentionPatterns,
} from "~/data/document-index"
import { documentGuides } from "~/data/document-guides"
import { kpaArticleIndex } from "~/data/kpa-article-index"
import type {
  LegalDocumentReference,
  LegalProvisionReference,
} from "~/data/legal-library/contracts"
import {
  getOfficialSource,
  type OfficialSourceReference,
} from "~/data/legal-library/official-sources"
import {
  isRegisteredLegalProvisionId,
  resolveRegisteredLegalHref,
} from "~/data/legal-library/reference-registry"
import { nodeById } from "~/data/legal-index"

export type LegalReference =
  | LegalDocumentReference
  | LegalProvisionReference
  | OfficialSourceReference
  | { kind: "legacy-kpa-article"; article: string }
  | { kind: "document"; documentId: string }
  | { kind: "map-node"; nodeId: string }
  | { kind: "case-route"; routeId: CaseGuideRouteId }
  | { kind: "external"; url: string }

export type LegalReferenceTarget = {
  reference: LegalReference
  href: string
  external?: boolean
}

const superscriptDigits: Record<string, string> = {
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

type MaintainedDocumentId =
  | "kpa"
  | "ppsa"
  | "ustawa-o-cudzoziemcach"
  | "powierzanie-pracy"
  | "rozporzadzenie-wniosek-pobyt-czasowy"
type MaintainedActDocumentId = Exclude<
  MaintainedDocumentId,
  "rozporzadzenie-wniosek-pobyt-czasowy"
>

type MaintainedReferenceDefinition = {
  documentId: MaintainedDocumentId
  aliases: readonly string[]
}

const maintainedReferenceDefinitions: readonly MaintainedReferenceDefinition[] = [
  {
    documentId: "kpa",
    aliases: [
      "KPA",
      "Kodeks postępowania administracyjnego",
      "Kodeksu postępowania administracyjnego",
      "Kodeksie postępowania administracyjnego",
    ],
  },
  {
    documentId: "ppsa",
    aliases: [
      "PPSA",
      "p.p.s.a.",
      "Prawo o postępowaniu przed sądami administracyjnymi",
      "Prawa o postępowaniu przed sądami administracyjnymi",
      "Prawie o postępowaniu przed sądami administracyjnymi",
    ],
  },
  {
    documentId: "ustawa-o-cudzoziemcach",
    aliases: [
      "ustawa o cudzoziemcach",
      "ustawy o cudzoziemcach",
      "ustawie o cudzoziemcach",
      "ustawą o cudzoziemcach",
      "ustawę o cudzoziemcach",
    ],
  },
  {
    documentId: "powierzanie-pracy",
    aliases: [
      "ustawa o warunkach dopuszczalności powierzania pracy cudzoziemcom",
      "ustawy o warunkach dopuszczalności powierzania pracy cudzoziemcom",
      "ustawie o warunkach dopuszczalności powierzania pracy cudzoziemcom",
      "ustawą o warunkach dopuszczalności powierzania pracy cudzoziemcom",
      "ustawę o warunkach dopuszczalności powierzania pracy cudzoziemcom",
      "ustawa z 20 marca 2025 r. o warunkach dopuszczalności powierzania pracy cudzoziemcom",
      "ustawy z 20 marca 2025 r. o warunkach dopuszczalności powierzania pracy cudzoziemcom",
      "ustawie z 20 marca 2025 r. o warunkach dopuszczalności powierzania pracy cudzoziemcom",
      "ustawa z dnia 20 marca 2025 r. o warunkach dopuszczalności powierzania pracy cudzoziemcom",
      "ustawy z dnia 20 marca 2025 r. o warunkach dopuszczalności powierzania pracy cudzoziemcom",
      "ustawa z 20.03.2025 r. o warunkach dopuszczalności powierzania pracy cudzoziemcom",
    ],
  },
  {
    documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
    aliases: [
      "rozporządzenie w sprawie wniosku o udzielenie cudzoziemcowi zezwolenia na pobyt czasowy",
      "rozporządzenia w sprawie wniosku o udzielenie cudzoziemcowi zezwolenia na pobyt czasowy",
      "rozporządzeniu w sprawie wniosku o udzielenie cudzoziemcowi zezwolenia na pobyt czasowy",
      "rozporządzenie w sprawie wniosku o pobyt czasowy",
      "rozporządzenia w sprawie wniosku o pobyt czasowy",
      "rozporządzeniu w sprawie wniosku o pobyt czasowy",
    ],
  },
]

function kpaProvisionId(article: string) {
  const normalized = article.toLocaleLowerCase("pl-PL")
  const base = normalized.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]+$/u, "")
  const suffix = normalized.slice(base.length)
  const key = suffix
    ? `${base}-${[...suffix].map((digit) => superscriptDigits[digit]).join("-")}`
    : base
  const candidate = `kpa-art-${key}`
  return isRegisteredLegalProvisionId("kpa", candidate)
    ? candidate
    : undefined
}

const kpaProvisionIdByArticle = new Map(
  kpaArticleIndex.flatMap((entry) => {
    const provisionId = kpaProvisionId(entry.article)
    return provisionId
      ? [[entry.article.toLocaleLowerCase("pl-PL"), provisionId] as const]
      : []
  })
)

export function articleHref(article: string) {
  const provisionId = kpaProvisionIdByArticle.get(
    article.toLocaleLowerCase("pl-PL")
  )
  return provisionId
    ? `/law/kpa/provisions/${encodeURIComponent(provisionId)}`
    : "/law/kpa"
}

export function legalReferenceTarget(
  reference: LegalReference
): LegalReferenceTarget | undefined {
  switch (reference.kind) {
    case "legal-document":
    case "legal-provision": {
      const href = resolveRegisteredLegalHref(reference)
      return href ? { reference, href } : undefined
    }
    case "official-source": {
      const source = getOfficialSource(reference.sourceId)
      return source
        ? { reference, href: source.url, external: true }
        : undefined
    }
    case "legacy-kpa-article":
      return kpaArticleIndex.some(
        (entry) => entry.article === reference.article
      )
        ? { reference, href: articleHref(reference.article) }
        : undefined
    case "document":
      return documentById.has(reference.documentId)
        ? { reference, href: `/documents/${reference.documentId}` }
        : undefined
    case "map-node":
      return nodeById.has(reference.nodeId)
        ? { reference, href: `/map/${reference.nodeId}` }
        : undefined
    case "case-route":
      return caseGuideRouteById.has(reference.routeId)
        ? { reference, href: `/cases/${reference.routeId}` }
        : undefined
    case "external":
      return /^https:\/\//u.test(reference.url)
        ? { reference, href: reference.url, external: true }
        : undefined
  }
}

type LegalReferenceMatch = LegalReferenceTarget & {
  start: number
  end: number
  label: string
}

const articlePattern =
  /\b(?:Art\.|art\.)\s*(\d+[a-z]?)(?:\s*[\u2013-]\s*(\d+[a-z]?))?/gu
const paragraphPattern = /(?<![\p{L}\p{N}])§\s*(\d+[a-z]?)/gu

function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function maintainedDocumentIdInContext(
  text: string,
  start: number,
  end: number
): MaintainedDocumentId | undefined {
  const contextStart = Math.max(0, start - 80)
  const context = text.slice(
    contextStart,
    Math.min(text.length, end + 120)
  )
  const referenceStart = start - contextStart
  const referenceEnd = end - contextStart
  const candidates: Array<{
    documentId: MaintainedDocumentId
    distance: number
    aliasLength: number
  }> = []

  for (const definition of maintainedReferenceDefinitions) {
    for (const alias of definition.aliases) {
      const pattern = new RegExp(
        `(?<![\\p{L}\\p{N}])${escapeRegex(alias)}(?=$|[^\\p{L}\\p{N}])`,
        "giu"
      )
      for (const match of context.matchAll(pattern)) {
        const aliasStart = match.index ?? 0
        const aliasEnd = aliasStart + match[0].length
        const distance =
          aliasEnd < referenceStart
            ? referenceStart - aliasEnd
            : aliasStart > referenceEnd
              ? aliasStart - referenceEnd
              : 0
        candidates.push({
          documentId: definition.documentId,
          distance,
          aliasLength: match[0].length,
        })
      }
    }
  }

  candidates.sort(
    (left, right) =>
      left.distance - right.distance || right.aliasLength - left.aliasLength
  )
  return candidates[0]?.documentId
}

function articleExists(article: string) {
  return kpaArticleIndex.some(
    (entry) => entry.article === article.toLowerCase()
  )
}

function isKpaContext(text: string, start: number, end: number) {
  const context = text.slice(
    Math.max(0, start - 40),
    Math.min(text.length, end + 120)
  )
  const normalized = context.toLocaleLowerCase("pl-PL")

  if (/\bkpa\b|kodeks postępowania administracyjnego/.test(normalized)) {
    return true
  }

  return !/\bustaw\p{L}*|kodeksu pracy|rozporządzen|p\.p\.s\.a\.|prawo o postępowaniu|dz\.u\./u.test(
    normalized
  )
}

const cukrArticleReferences = new Map<string, LegalReference>(
  Array.from({ length: 19 }, (_, index) => {
    const article = `42${String.fromCharCode("c".charCodeAt(0) + index)}`
    return [article, { kind: "case-route", routeId: "cukr" }]
  })
)

function registeredProvisionTarget(
  documentId: MaintainedDocumentId,
  provisionId: string
): LegalReferenceTarget | undefined {
  if (!isRegisteredLegalProvisionId(documentId, provisionId)) return undefined

  return legalReferenceTarget({
    kind: "legal-provision",
    documentId,
    provisionId,
  } as LegalProvisionReference)
}

function articleProvisionTarget(
  documentId: MaintainedActDocumentId,
  article: string
) {
  const normalizedArticle = article.toLocaleLowerCase("pl-PL")
  const provisionId =
    documentId === "kpa"
      ? kpaProvisionId(normalizedArticle)
      : `${documentId}-art-${normalizedArticle}`
  return provisionId
    ? registeredProvisionTarget(documentId, provisionId)
    : undefined
}

function articleReference(
  article: string,
  text: string,
  start: number,
  end: number
) {
  const normalizedArticle = article.toLocaleLowerCase("pl-PL")
  const contextDocumentId = maintainedDocumentIdInContext(text, start, end)

  if (contextDocumentId && contextDocumentId !== "rozporzadzenie-wniosek-pobyt-czasowy") {
    const target = articleProvisionTarget(contextDocumentId, normalizedArticle)
    if (target) return target
  } else if (!contextDocumentId && isKpaContext(text, start, end)) {
    const target = articleProvisionTarget("kpa", normalizedArticle)
    if (target) return target
  }

  const specialActReference = cukrArticleReferences.get(normalizedArticle)
  return specialActReference
    ? legalReferenceTarget(specialActReference)
    : undefined
}

function paragraphReference(
  paragraph: string,
  text: string,
  start: number,
  end: number
) {
  if (
    maintainedDocumentIdInContext(text, start, end) !==
    "rozporzadzenie-wniosek-pobyt-czasowy"
  ) {
    return undefined
  }

  return registeredProvisionTarget(
    "rozporzadzenie-wniosek-pobyt-czasowy",
    `rozporzadzenie-wniosek-pobyt-czasowy-par-${paragraph.toLocaleLowerCase("pl-PL")}`
  )
}

function paragraphMatches(text: string): LegalReferenceMatch[] {
  const matches: LegalReferenceMatch[] = []

  for (const match of text.matchAll(paragraphPattern)) {
    const fullLabel = match[0]
    const start = match.index ?? 0
    const paragraph = match[1].toLocaleLowerCase("pl-PL")
    const paragraphStart = start + fullLabel.indexOf(match[1])
    const paragraphEnd = paragraphStart + match[1].length
    const target = paragraphReference(
      paragraph,
      text,
      start,
      start + fullLabel.length
    )
    if (target) {
      matches.push({
        ...target,
        start: paragraphStart,
        end: paragraphEnd,
        label: text.slice(paragraphStart, paragraphEnd),
      })
    }
  }

  return matches
}

function articleMatches(text: string): LegalReferenceMatch[] {
  const matches: LegalReferenceMatch[] = []

  for (const match of text.matchAll(articlePattern)) {
    const fullLabel = match[0]
    const start = match.index ?? 0
    const firstArticle = match[1].toLowerCase()
    const firstArticleStart = start + fullLabel.indexOf(match[1])
    const firstEnd = firstArticleStart + match[1].length

    const firstTarget = articleReference(
      firstArticle,
      text,
      start,
      start + fullLabel.length
    )
    if (firstTarget) {
      matches.push({
        ...firstTarget,
        start,
        end: firstEnd,
        label: text.slice(start, firstEnd),
      })
    }

    if (match[2]) {
      const secondArticle = match[2].toLowerCase()
      const secondStart = start + fullLabel.lastIndexOf(match[2])
      const secondEnd = secondStart + match[2].length
      const secondTarget = articleReference(
        secondArticle,
        text,
        start,
        start + fullLabel.length
      )
      if (secondTarget) {
        matches.push({
          ...secondTarget,
          start: secondStart,
          end: secondEnd,
          label: text.slice(secondStart, secondEnd),
        })
      }
    }

    let listCursor = start + fullLabel.length
    while (listCursor < text.length) {
      const continuation = text
        .slice(listCursor)
        .match(/^\s*(?:,|i|і)\s*(\d+[a-z]?)/iu)
      if (!continuation) break

      const label = continuation[1]
      const tokenStart = listCursor + continuation[0].lastIndexOf(label)
      const tokenEnd = tokenStart + label.length
      const article = label.toLowerCase()
      const target = articleReference(article, text, start, tokenEnd)
      if (!target) break
      if (target) {
        matches.push({ ...target, start: tokenStart, end: tokenEnd, label })
      }
      listCursor = tokenEnd
    }
  }

  return matches
}

const mosDocument = documentCatalog.find((entry) => {
  const title = entry.title.toLocaleLowerCase("pl-PL")
  return title.includes("wniosek") && /\bmos\b/u.test(title)
})
const peselDocument = documentCatalog.find((entry) =>
  /\bpesel\b/u.test(entry.title.toLocaleLowerCase("pl-PL"))
)
const cukrFaqUrl = documentGuides
  .flatMap((guide) => guide.sources)
  .find((source) => /CUKR pytania i odpowiedzi/u.test(source.label))?.url

function namedReferencePattern(label: string, reference: LegalReference) {
  return { label, reference }
}

const namedReferencePatterns = [
  namedReferencePattern("FAQ CUKR", {
    kind: "external",
    url: cukrFaqUrl ?? "https://www.gov.pl/web/udsc/cukr-QA",
  }),
  namedReferencePattern("CUKR", { kind: "case-route", routeId: "cukr" }),
  ...maintainedReferenceDefinitions.flatMap(({ documentId, aliases }) =>
    aliases.map((label) =>
      namedReferencePattern(label, {
        kind: "legal-document",
        documentId,
      } as LegalDocumentReference)
    )
  ),
  ...(mosDocument
    ? [
        namedReferencePattern("MOS", {
          kind: "document",
          documentId: mosDocument.id,
        }),
      ]
    : []),
  ...(peselDocument
    ? [
        namedReferencePattern("PESEL", {
          kind: "document",
          documentId: peselDocument.id,
        }),
      ]
    : []),
].sort((left, right) => right.label.length - left.label.length)

function namedReferenceMatches(text: string): LegalReferenceMatch[] {
  return namedReferencePatterns.flatMap(({ label, reference }) => {
    const pattern = new RegExp(
      `(?<![\\p{L}\\p{N}])${escapeRegex(label)}(?=$|[^\\p{L}\\p{N}])`,
      "giu"
    )
    const target = legalReferenceTarget(reference)
    if (!target) return []

    return [...text.matchAll(pattern)].map((match) => {
      const start = match.index ?? 0
      return { ...target, start, end: start + match[0].length, label: match[0] }
    })
  })
}

function documentMatches(text: string): LegalReferenceMatch[] {
  return documentMentionPatterns.flatMap(({ label, entry }) => {
    const pattern = new RegExp(
      `(?<![\\p{L}\\p{N}])${escapeRegex(label)}(?=$|[^\\p{L}\\p{N}])`,
      "giu"
    )
    const reference: LegalReference = { kind: "document", documentId: entry.id }
    const target = legalReferenceTarget(reference)
    if (!target) return []

    return [...text.matchAll(pattern)].map((match) => {
      const start = match.index ?? 0
      return { ...target, start, end: start + match[0].length, label: match[0] }
    })
  })
}

function nonOverlappingMatches(text: string) {
  const namedMatches = namedReferenceMatches(text)
  const maintainedActMatches = namedMatches.filter(
    ({ reference }) => reference.kind === "legal-document"
  )
  const candidates = [
    ...articleMatches(text),
    ...paragraphMatches(text),
    ...namedMatches,
    ...documentMatches(text).filter(
      (candidate) =>
        !maintainedActMatches.some(
          (maintainedActMatch) =>
            candidate.start < maintainedActMatch.end &&
            candidate.end > maintainedActMatch.start
        )
    ),
  ].sort((left, right) => {
    if (left.start !== right.start) return left.start - right.start
    const leftIsMaintainedAct = left.reference.kind === "legal-document"
    const rightIsMaintainedAct = right.reference.kind === "legal-document"
    if (leftIsMaintainedAct !== rightIsMaintainedAct) {
      return rightIsMaintainedAct ? 1 : -1
    }
    return right.end - right.start - (left.end - left.start)
  })
  const selected: LegalReferenceMatch[] = []

  for (const candidate of candidates) {
    if (
      selected.some(
        (item) => candidate.start < item.end && candidate.end > item.start
      )
    ) {
      continue
    }
    selected.push(candidate)
  }

  return selected.sort((left, right) => left.start - right.start)
}

export function legalReferenceMatches(text: string) {
  return nonOverlappingMatches(text)
}
