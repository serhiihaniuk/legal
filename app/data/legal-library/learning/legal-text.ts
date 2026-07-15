import type {
  LegalDocumentId,
  LegalDocumentReference,
  LegalProvisionId,
  LegalProvisionReference,
} from "../contracts"

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

export type LegalLearningTextPart =
  | { text: string }
  | {
      text: string
      target: LegalDocumentReference | LegalProvisionReference
    }

export type AuthoredLegalLearningText = {
  kind: "authored-legal-learning-text"
  plainText: string
  parts: readonly LegalLearningTextPart[]
}

export type LegalLearningText = string | AuthoredLegalLearningText

type LegalCitation = {
  kind: "legal-citation"
  plainText: string
  parts: readonly LegalLearningTextPart[]
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

function citation(parts: readonly LegalLearningTextPart[]): LegalCitation {
  return {
    kind: "legal-citation",
    plainText: parts.map((part) => part.text).join(""),
    parts,
  }
}

function singleCitation(
  label: string,
  target: LegalDocumentReference | LegalProvisionReference
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
): AuthoredLegalLearningText {
  const parts: LegalLearningTextPart[] = []

  strings.forEach((text, index) => {
    if (text) parts.push({ text })
    const cited = citations[index]
    if (cited) parts.push(...cited.parts)
  })

  return {
    kind: "authored-legal-learning-text",
    plainText: parts.map((part) => part.text).join(""),
    parts,
  }
}

export function legalLearningPlainText(text: LegalLearningText): string {
  return typeof text === "string" ? text : text.plainText
}

export function concatLegalLearningText(
  ...texts: readonly LegalLearningText[]
): LegalLearningText {
  const parts = texts.flatMap<LegalLearningTextPart>((text) =>
    typeof text === "string" ? [{ text }] : [...text.parts]
  )
  return {
    kind: "authored-legal-learning-text",
    plainText: parts.map((part) => part.text).join(""),
    parts,
  }
}

export function joinLegalLearningText(
  texts: readonly LegalLearningText[],
  separator: string
): LegalLearningText {
  return concatLegalLearningText(
    ...texts.flatMap((text, index) =>
      index === 0 ? [text] : [separator, text]
    )
  )
}

export function legalLearningTextSlice(
  text: LegalLearningText,
  start: number,
  end: number
): LegalLearningText {
  if (typeof text === "string") return text.slice(start, end)

  const parts: LegalLearningTextPart[] = []
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
    kind: "authored-legal-learning-text",
    plainText: parts.map((part) => part.text).join(""),
    parts,
  }
}

export function legalLearningProvisionReferences(
  text: LegalLearningText
): LegalProvisionReference[] {
  if (typeof text === "string") return []
  return text.parts.flatMap((part) =>
    "target" in part && part.target.kind === "legal-provision"
      ? [part.target]
      : []
  )
}

/**
 * Deep authoring interface for learning prose.
 *
 * The author chooses the legal document at the call site and inserts typed
 * provision citations into a tagged template. Rendering never guesses a
 * document from page context or from surrounding prose.
 */
export function createLegalLearningTextAuthor<const D extends LegalDocumentId>(
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
    document,
    article,
    articleRange,
    paragraph,
    paragraphRange,
    annex,
    annexRange,
  }
}
