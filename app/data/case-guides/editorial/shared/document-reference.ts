import type { EvidenceDocumentId } from "~/data/document-library/contracts"
import type { AuthoredLegalText } from "~/data/legal-library/legal-text"

export function document(
  documentId: EvidenceDocumentId,
  text: string
): AuthoredLegalText {
  return {
    kind: "authored-legal-text",
    plainText: text,
    parts: [{ text, target: { kind: "evidence-document", documentId } }],
  }
}
