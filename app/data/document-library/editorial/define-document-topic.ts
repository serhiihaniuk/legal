import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { DocumentGuide } from "../contracts"

/** Publish one authored explanation without duplicating its review metadata. */
export function defineDocumentTopic(
  guide: DocumentGuide
): KnowledgeUnit<DocumentGuide> {
  return defineKnowledgeUnit({
    id: `evidence-document:${guide.id}`,
    subject: {
      family: "evidence-document",
      reference: { kind: "evidence-document", documentId: guide.id },
    },
    summary: guide.description,
    claims: [
      {
        id: "evidence-reading",
        kind: "practical-inference",
        text: guide.description,
        basis: guide.sources.map((source) => ({
          reference: { kind: "external" as const, url: source.url },
          locator: source.label,
        })),
      },
    ],
    // Reading companions remain in body.relatedDocuments; they are not prerequisites.
    relationships: [],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: guide.verifiedAt,
      verifiedAt: guide.verifiedAt,
    },
    body: guide,
  })
}
