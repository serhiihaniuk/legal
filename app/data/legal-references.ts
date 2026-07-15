import { caseGuideRouteById } from "~/data/case-guide-routes"
import type { CaseGuideRouteId } from "~/data/case-guide-types"
import {
  documentById,
  documentCatalog,
  documentMentionPatterns,
} from "~/data/document-index"
import { documentGuides } from "~/data/document-guides"
import { kpaArticleIndex } from "~/data/kpa-article-index"
import {
  getOfficialSource,
  resolveLegalReference,
  type LegalDocumentReference,
  type LegalProvisionReference,
  type OfficialSourceReference,
} from "~/data/legal-library"
import { nodeById } from "~/data/legal-index"

export type LegalReference =
  | LegalDocumentReference
  | LegalProvisionReference
  | OfficialSourceReference
  | { kind: "article"; article: string }
  | { kind: "document"; documentId: string }
  | { kind: "map-node"; nodeId: string }
  | { kind: "case-route"; routeId: CaseGuideRouteId }
  | { kind: "external"; url: string }

export type LegalReferenceTarget = {
  reference: LegalReference
  href: string
  external?: boolean
}

export function articleHref(article: string) {
  return `/guide/kpa?view=articles&article=${encodeURIComponent(article)}`
}

export function legalReferenceTarget(
  reference: LegalReference
): LegalReferenceTarget | undefined {
  switch (reference.kind) {
    case "legal-document":
    case "legal-provision": {
      const resolution = resolveLegalReference(reference)
      return resolution.status === "resolved"
        ? { reference, href: resolution.href }
        : undefined
    }
    case "official-source": {
      const source = getOfficialSource(reference.sourceId)
      return source
        ? { reference, href: source.url, external: true }
        : undefined
    }
    case "article":
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

function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
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

  return !/ustaw(?:y|ie|ą)|kodeksu pracy|rozporządzen|p\.p\.s\.a\.|prawo o postępowaniu|dz\.u\./.test(
    normalized
  )
}

const cukrArticleReferences = new Map<string, LegalReference>(
  Array.from({ length: 19 }, (_, index) => {
    const article = `42${String.fromCharCode("c".charCodeAt(0) + index)}`
    return [article, { kind: "case-route", routeId: "cukr" }]
  })
)

function articleReference(
  article: string,
  text: string,
  start: number,
  end: number
) {
  const normalizedArticle = article.toLowerCase()
  if (articleExists(normalizedArticle) && isKpaContext(text, start, end)) {
    return legalReferenceTarget({
      kind: "article",
      article: normalizedArticle,
    })
  }

  const specialActReference = cukrArticleReferences.get(normalizedArticle)
  return specialActReference
    ? legalReferenceTarget(specialActReference)
    : undefined
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
  const candidates = [
    ...articleMatches(text),
    ...documentMatches(text),
    ...namedReferenceMatches(text),
  ].sort((left, right) => left.start - right.start || right.end - right.start)
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
