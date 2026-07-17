import type {
  LegalDocumentId,
  LegalDocumentReference,
  LegalProvisionId,
  LegalProvisionReference,
} from "./contracts"
import type { EvidenceDocumentReference } from "~/data/document-library/contracts"

type ProvisionKeyFromId<
  Id,
  D extends LegalDocumentId,
  Marker extends "art" | "par" | "annex",
> = Id extends `${D}-${Marker}-${infer Key}` ? Key : never

type ProvisionKey<
  D extends LegalDocumentId,
  Marker extends "art" | "par" | "annex",
> = ProvisionKeyFromId<LegalProvisionId<D>, D, Marker>

type ArticleKey<D extends LegalDocumentId> = ProvisionKey<D, "art">
type ParagraphKey<D extends LegalDocumentId> = ProvisionKey<D, "par">
type AnnexKey<D extends LegalDocumentId> = ProvisionKey<D, "annex">

export type LegalTextPart =
  | { text: string }
  | {
      text: string
      target:
        | LegalDocumentReference
        | LegalProvisionReference
        | EvidenceDocumentReference
        | { kind: "external"; url: string }
    }

export type AuthoredLegalText = {
  kind: "authored-legal-text"
  plainText: string
  parts: readonly LegalTextPart[]
}

export type LegalTextValue = string | AuthoredLegalText

const bareLegalCitationPattern =
  /(?:\b[Aa]rt\.\s*\d|(?:^|[\s(])§{1,2}\s*\d|\bzałącznik(?:i|a|u|iem|ach|ami)?(?:\s+nr)?\s*\d)/u

function assertNoBareLegalCitations(value: unknown, path: string): void {
  if (typeof value === "string") {
    if (bareLegalCitationPattern.test(value)) {
      throw new Error(
        `Bare legal citation at ${path}: ${JSON.stringify(value)}. Use createLegalTextAuthor() and an explicit typed citation token.`
      )
    }
    return
  }
  if (!value || typeof value !== "object") return
  if (
    "kind" in value &&
    value.kind === "authored-legal-text" &&
    "parts" in value &&
    Array.isArray(value.parts)
  ) {
    value.parts.forEach((part, index) => {
      if (part && typeof part === "object" && "target" in part) return
      assertNoBareLegalCitations(
        part && typeof part === "object" && "text" in part ? part.text : part,
        `${path}.parts[${index}]`
      )
    })
    return
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) =>
      assertNoBareLegalCitations(item, `${path}[${index}]`)
    )
    return
  }
  Object.entries(value).forEach(([key, item]) => {
    if (key === "locator" || key === "sourceLocator" || key === "article") {
      return
    }
    assertNoBareLegalCitations(item, `${path}.${key}`)
  })
}

export function defineLegalTextContent<const T>(
  content: T,
  path = "legal-content"
): T {
  assertNoBareLegalCitations(content, path)
  return content
}

type LegalCitation = {
  kind: "legal-citation"
  plainText: string
  parts: readonly LegalTextPart[]
}

function provisionTarget<D extends LegalDocumentId>(
  documentId: D,
  provisionId: LegalProvisionId<D>
): LegalProvisionReference {
  return {
    kind: "legal-provision",
    documentId,
    provisionId,
  } as LegalProvisionReference
}

function citation(parts: readonly LegalTextPart[]): LegalCitation {
  return {
    kind: "legal-citation",
    plainText: parts.map((part) => part.text).join(""),
    parts,
  }
}

function singleCitation(
  label: string,
  target: Extract<LegalTextPart, { target: unknown }>["target"]
): LegalCitation {
  return citation([{ text: label, target }])
}

function rangeCitation(
  startLabel: string,
  startTarget: LegalProvisionReference,
  endLabel: string,
  endTarget: LegalProvisionReference,
  separator = "–"
): LegalCitation {
  return citation([
    { text: startLabel, target: startTarget },
    { text: separator },
    { text: endLabel, target: endTarget },
  ])
}

function authoredText(
  strings: TemplateStringsArray,
  citations: readonly LegalCitation[]
): AuthoredLegalText {
  const parts: LegalTextPart[] = []

  strings.forEach((text, index) => {
    if (text) parts.push({ text })
    const cited = citations[index]
    if (cited) parts.push(...cited.parts)
  })

  return {
    kind: "authored-legal-text",
    plainText: parts.map((part) => part.text).join(""),
    parts,
  }
}

export function externalLegalText(
  label: string,
  url: string
): AuthoredLegalText {
  if (!/^https:\/\//u.test(url)) {
    throw new Error(`External legal citation must use HTTPS: ${url}`)
  }
  return {
    kind: "authored-legal-text",
    plainText: label,
    parts: [{ text: label, target: { kind: "external", url } }],
  }
}

export function legalTextPlainText(text: LegalTextValue): string {
  return typeof text === "string" ? text : text.plainText
}

export function concatLegalText(
  ...texts: readonly LegalTextValue[]
): LegalTextValue {
  const parts = texts.flatMap<LegalTextPart>((text) =>
    typeof text === "string" ? [{ text }] : [...text.parts]
  )
  return {
    kind: "authored-legal-text",
    plainText: parts.map((part) => part.text).join(""),
    parts,
  }
}

export function joinLegalText(
  texts: readonly LegalTextValue[],
  separator: string
): LegalTextValue {
  return concatLegalText(
    ...texts.flatMap((text, index) =>
      index === 0 ? [text] : [separator, text]
    )
  )
}

export function legalTextSlice(
  text: LegalTextValue,
  start: number,
  end: number
): LegalTextValue {
  if (typeof text === "string") return text.slice(start, end)

  const parts: LegalTextPart[] = []
  let cursor = 0
  for (const part of text.parts) {
    const partStart = cursor
    const partEnd = cursor + part.text.length
    cursor = partEnd
    const overlapStart = Math.max(start, partStart)
    const overlapEnd = Math.min(end, partEnd)
    if (overlapStart >= overlapEnd) continue
    const slicedText = part.text.slice(
      overlapStart - partStart,
      overlapEnd - partStart
    )
    parts.push(
      "target" in part
        ? { text: slicedText, target: part.target }
        : { text: slicedText }
    )
  }

  return {
    kind: "authored-legal-text",
    plainText: parts.map((part) => part.text).join(""),
    parts,
  }
}

export function legalTextProvisionReferences(
  text: LegalTextValue
): LegalProvisionReference[] {
  if (typeof text === "string") return []
  return text.parts.flatMap((part) =>
    "target" in part && part.target.kind === "legal-provision"
      ? [part.target]
      : []
  )
}

const autoCitationPattern =
  /\b[Aa]rt\.\s*\d+[a-z]?|§{1,2}\s*\d+[a-z]?|\bzałącznik(?:i|a|u|iem|ach|ami)?(?:\s+nr)?\s*\d+/gu

function inferCitationDocument(
  defaultDocumentId: LegalDocumentId,
  text: string,
  end: number
): LegalDocumentId {
  const context = text.slice(end, end + 90)
  if (/\b(?:KPA|Kodeks postępowania administracyjnego)\b/u.test(context)) {
    return "kpa"
  }
  if (
    /\b(?:PPSA|p\.p\.s\.a\.|Prawo o postępowaniu przed sądami administracyjnymi)\b/u.test(
      context
    )
  ) {
    return "ppsa"
  }
  if (/\bpowierzania pracy\b/u.test(context)) {
    return "powierzanie-pracy"
  }
  if (/\bustaw(?:a|y) o cudzoziemcach\b/u.test(context)) {
    return "ustawa-o-cudzoziemcach"
  }
  return defaultDocumentId
}

/**
 * Adds explicit typed targets to plain editorial citations. This is used only
 * at the boundary for legacy authored entries that predate typed legal prose;
 * already authored text is preserved verbatim.
 */
export function authorLegalTextCitations<D extends LegalDocumentId>(
  documentId: D,
  value: LegalTextValue
): LegalTextValue {
  if (typeof value !== "string" || !autoCitationPattern.test(value)) {
    autoCitationPattern.lastIndex = 0
    return value
  }

  autoCitationPattern.lastIndex = 0
  const parts: LegalTextPart[] = []
  let cursor = 0
  for (const match of value.matchAll(autoCitationPattern)) {
    const index = match.index ?? 0
    if (index > cursor) parts.push({ text: value.slice(cursor, index) })
    const label = match[0]
    const targetDocumentId = inferCitationDocument(
      documentId,
      value,
      index + label.length
    )
    const articleMatch = label.match(/^[Aa]rt\.\s*(\d+[a-z]?)/u)
    const isPswinCitation = /\b(?:PSWiN|szkolnictwie wyższym i nauce)\b/u.test(
      value.slice(index + label.length, index + label.length + 90)
    )
    if (isPswinCitation) {
      parts.push({
        text: label,
        target: {
          kind: "external",
          url: "https://eli.gov.pl/eli/DU/2024/1571/ogl",
        },
      })
    } else if (articleMatch) {
      parts.push({
        text: label,
        target: {
          kind: "legal-provision",
          documentId: targetDocumentId,
          provisionId:
            `${targetDocumentId}-art-${articleMatch[1]}` as LegalProvisionId<LegalDocumentId>,
        } as LegalProvisionReference,
      })
    } else {
      parts.push({
        text: label,
        target: { kind: "legal-document", documentId: targetDocumentId },
      })
    }
    cursor = index + label.length
  }
  if (cursor < value.length) parts.push({ text: value.slice(cursor) })
  return {
    kind: "authored-legal-text",
    plainText: value,
    parts,
  }
}

/** Recursively applies `authorLegalTextCitations` while preserving entry shape. */
export function authorLegalTextCitationsTree<D extends LegalDocumentId, T>(
  documentId: D,
  value: T
): T {
  if (typeof value === "string") {
    return authorLegalTextCitations(documentId, value) as T
  }
  if (Array.isArray(value)) {
    return value.map((item) =>
      authorLegalTextCitationsTree(documentId, item)
    ) as T
  }
  if (!value || typeof value !== "object") return value
  if (
    "kind" in value &&
    (value as { kind?: unknown }).kind === "authored-legal-text"
  ) {
    const authored = value as unknown as AuthoredLegalText
    const parts = authored.parts.flatMap((part) => {
      if ("target" in part) return [part]
      const normalized = authorLegalTextCitations(documentId, part.text)
      return typeof normalized === "string"
        ? [{ text: normalized }]
        : normalized.parts
    })
    return {
      kind: "authored-legal-text",
      plainText: parts.map((part) => part.text).join(""),
      parts,
    } as T
  }
  const result: Record<string, unknown> = {}
  for (const [key, item] of Object.entries(value)) {
    if (
      key === "locator" ||
      key === "sourceLocator" ||
      key === "provisionId" ||
      key === "documentId" ||
      key === "editionId" ||
      key === "legalStateDate" ||
      key === "verifiedAt" ||
      key === "reviewStatus"
    ) {
      result[key] = item
    } else {
      result[key] = authorLegalTextCitationsTree(documentId, item)
    }
  }
  return result as T
}

/**
 * Deep authoring interface for learning prose.
 *
 * The author chooses the legal document at the call site and inserts typed
 * provision citations into a tagged template. Rendering never guesses a
 * document from page context or from surrounding prose.
 */
export function createLegalTextAuthor<const D extends LegalDocumentId>(
  documentId: D
) {
  function article<const A extends ArticleKey<D>>(
    articleNumber: A,
    label = `Art. ${articleNumber}`
  ) {
    const provisionId =
      `${documentId}-art-${articleNumber}` as LegalProvisionId<D>
    return singleCitation(label, provisionTarget(documentId, provisionId))
  }

  function articleRange<
    const A extends ArticleKey<D>,
    const B extends ArticleKey<D>,
  >(
    start: A,
    end: B,
    labels: { start?: string; end?: string; separator?: string } = {}
  ) {
    const startId = `${documentId}-art-${start}` as LegalProvisionId<D>
    const endId = `${documentId}-art-${end}` as LegalProvisionId<D>
    return rangeCitation(
      labels.start ?? `Art. ${start}`,
      provisionTarget(documentId, startId),
      labels.end ?? String(end),
      provisionTarget(documentId, endId),
      labels.separator
    )
  }

  function paragraph<const P extends ParagraphKey<D>>(
    paragraphNumber: P,
    label = `§ ${paragraphNumber}`
  ) {
    const provisionId =
      `${documentId}-par-${paragraphNumber}` as LegalProvisionId<D>
    return singleCitation(label, provisionTarget(documentId, provisionId))
  }

  function paragraphRange<
    const A extends ParagraphKey<D>,
    const B extends ParagraphKey<D>,
  >(
    start: A,
    end: B,
    labels: { start?: string; end?: string; separator?: string } = {}
  ) {
    const startId = `${documentId}-par-${start}` as LegalProvisionId<D>
    const endId = `${documentId}-par-${end}` as LegalProvisionId<D>
    return rangeCitation(
      labels.start ?? `§ ${start}`,
      provisionTarget(documentId, startId),
      labels.end ?? String(end),
      provisionTarget(documentId, endId),
      labels.separator
    )
  }

  function annex<const A extends AnnexKey<D>>(
    annexNumber: A,
    label = `załącznik nr ${annexNumber}`
  ) {
    const provisionId =
      `${documentId}-annex-${annexNumber}` as LegalProvisionId<D>
    return singleCitation(label, provisionTarget(documentId, provisionId))
  }

  function annexRange<const A extends AnnexKey<D>, const B extends AnnexKey<D>>(
    start: A,
    end: B,
    labels: { start?: string; end?: string; separator?: string } = {}
  ) {
    const startId = `${documentId}-annex-${start}` as LegalProvisionId<D>
    const endId = `${documentId}-annex-${end}` as LegalProvisionId<D>
    return rangeCitation(
      labels.start ?? `załączniki nr ${start}`,
      provisionTarget(documentId, startId),
      labels.end ?? String(end),
      provisionTarget(documentId, endId),
      labels.separator
    )
  }

  function external(label: string, url: string) {
    if (!/^https:\/\//u.test(url)) {
      throw new Error(`External legal citation must use HTTPS: ${url}`)
    }
    return singleCitation(label, { kind: "external", url })
  }

  function document(label: string) {
    return singleCitation(label, {
      kind: "legal-document",
      documentId,
    })
  }

  return {
    text(
      strings: TemplateStringsArray,
      ...citations: readonly LegalCitation[]
    ) {
      return authoredText(strings, citations)
    },
    external,
    document,
    article,
    articleRange,
    paragraph,
    paragraphRange,
    annex,
    annexRange,
  }
}
