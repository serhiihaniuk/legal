import { defineLegalTextContent } from "../legal-text"
import type {
  ExplanationReviewStatus,
  LegalDocumentId,
  LegalEditionId,
  LegalExplanation,
  LegalProvisionId,
} from "../contracts"

export type EditorialEntry<D extends LegalDocumentId> = Omit<
  LegalExplanation<D>,
  | "id"
  | "documentId"
  | "provisionId"
  | "sourceEditionId"
  | "legalStateDate"
  | "verifiedAt"
  | "language"
> & {
  provisionId: LegalProvisionId<D>
  reviewStatus: ExplanationReviewStatus
}

export type EditorialPartInput<D extends LegalDocumentId> = {
  documentId: D
  editionId: LegalEditionId<D>
  legalStateDate: string
  verifiedAt: string
  entries: readonly EditorialEntry<D>[]
}

/** A document-scoped, lazily importable slice of reviewed editorial content. */
export type EditorialPart<D extends LegalDocumentId> = Readonly<
  Partial<Record<LegalProvisionId<D>, LegalExplanation<D>>>
>

export function defineEditorialPart<D extends LegalDocumentId>(
  input: EditorialPartInput<D>
): EditorialPart<D> {
  const table: Record<string, LegalExplanation<D>> = {}
  defineLegalTextContent(
    input.entries.filter((entry) => entry.reviewStatus === "reviewed"),
    `editorial.${input.documentId}`
  )

  for (const entry of input.entries) {
    if (Object.prototype.hasOwnProperty.call(table, entry.provisionId)) {
      throw new Error(
        `Duplicate editorial provision ID in ${input.documentId}: ${entry.provisionId}`
      )
    }

    table[entry.provisionId] = {
      ...entry,
      id: `${input.documentId}/${entry.provisionId}`,
      documentId: input.documentId,
      sourceEditionId: input.editionId,
      legalStateDate: input.legalStateDate,
      verifiedAt: input.verifiedAt,
      language: "uk",
    }
  }

  return table as EditorialPart<D>
}
