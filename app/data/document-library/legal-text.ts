import type {
  AuthoredLegalText,
  LegalTextPart,
} from "~/data/legal-library/legal-text"

import { isEvidenceDocumentId } from "./query"
import type { EvidenceDocumentId, EvidenceDocumentReference } from "./contracts"

type EvidenceDocumentCitation = {
  parts: readonly LegalTextPart[]
}

function documentTarget(
  documentId: EvidenceDocumentId
): EvidenceDocumentReference {
  if (!isEvidenceDocumentId(documentId)) {
    throw new Error(`Unknown EvidenceDocumentId: ${String(documentId)}`)
  }
  return { kind: "evidence-document", documentId }
}

function authoredText(
  strings: TemplateStringsArray,
  citations: readonly EvidenceDocumentCitation[]
): AuthoredLegalText {
  const parts: LegalTextPart[] = []
  strings.forEach((text, index) => {
    if (text) parts.push({ text })
    const citation = citations[index]
    if (citation) parts.push(...citation.parts)
  })
  return {
    kind: "authored-legal-text",
    plainText: parts.map((part) => part.text).join(""),
    parts,
  }
}

/**
 * Deep authoring interface for Evidence Document prose. The target is always
 * selected by stable ID; aliases and surrounding prose are never inspected by
 * the renderer.
 */
export function createEvidenceDocumentTextAuthor() {
  return {
    text(
      strings: TemplateStringsArray,
      ...citations: readonly EvidenceDocumentCitation[]
    ) {
      return authoredText(strings, citations)
    },
    document(documentId: EvidenceDocumentId, label?: string) {
      return {
        parts: [
          {
            text: label ?? documentId,
            target: documentTarget(documentId),
          },
        ],
      } satisfies EvidenceDocumentCitation
    },
  }
}
