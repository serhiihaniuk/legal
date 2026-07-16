import type { LegalTextValue } from "../../legal-text"
import type { LegalProvisionId } from "../../contracts"
import {
  defineEditorialPart,
  type EditorialEntry,
  type EditorialPart,
} from "../define-editorial-part"

export type KpaSourceEntry = {
  article: string
  provisionId: LegalProvisionId<"kpa">
  reviewStatus: "reviewed"
  summary: LegalTextValue
  rules: readonly { locator: string; explanation: LegalTextValue }[]
  legalEffect: LegalTextValue
  foreignersCase: LegalTextValue
}

/** Add only canonical identity and claim metadata to the unchanged KPA prose. */
export function defineKpaEditorialPart(input: {
  documentId: "kpa"
  editionId: "kpa-2025-1691"
  legalStateDate: string
  verifiedAt: string
  entries: readonly KpaSourceEntry[]
}): EditorialPart<"kpa"> {
  const canonicalEntries: EditorialEntry<"kpa">[] = input.entries.map(
    (entry) => ({
      provisionId: entry.provisionId,
      reviewStatus: entry.reviewStatus,
      claims: [
        {
          kind: "statute-text",
          text: entry.summary,
          sourceLocator: `Art. ${entry.article}`,
        },
        {
          kind: "practical-inference",
          text: entry.foreignersCase,
          sourceLocator: `Art. ${entry.article}`,
        },
      ],
      summary: entry.summary,
      rules: entry.rules,
      legalEffect: entry.legalEffect,
      foreignersCase: entry.foreignersCase,
    })
  )

  return defineEditorialPart<"kpa">({
    ...input,
    entries: canonicalEntries,
  })
}
