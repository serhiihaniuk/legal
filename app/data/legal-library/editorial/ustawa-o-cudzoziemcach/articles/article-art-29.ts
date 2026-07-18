import {
  authorLegalTextCitationsTree,
  createLegalTextAuthor,
  type LegalTextValue,
} from "../../../legal-text"

import type { LegalProvisionId } from "../../../contracts"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

import { defineEditorialPart } from "../../define-editorial-part"

type ForeignersActProvisionId = LegalProvisionId<"ustawa-o-cudzoziemcach">

type ReviewedClaim = {
  kind: "statute-text" | "practical-inference"
  text: LegalTextValue
  sourceLocator: string
}

type ReviewedRule = {
  locator: string
  explanation: LegalTextValue
}

type ReviewedArticleMetadata = {
  provisionId: ForeignersActProvisionId
  reviewStatus: "reviewed"
}

const reviewedArticle = (
  _article: string,
  claims: readonly ReviewedClaim[],
  summary: LegalTextValue,
  rules: readonly ReviewedRule[],
  legalEffect: LegalTextValue,
  foreignersCase: LegalTextValue,
  metadata: ReviewedArticleMetadata
) => ({
  ...metadata,
  claims,
  summary,
  rules,
  legalEffect,
  foreignersCase,
})
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    reviewedArticle(
      "29",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("29", "Art. 29")} у чинній редакції позначено як «(uchylony)».`,
          sourceLocator: "Art. 29",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("29", "Art. 29")} скасована (uchylony) і не містить чинного правила.`,
      [
        {
          locator: "Art. 29",
          explanation:
            "У джерельному тексті наведено лише позначку «(uchylony)».",
        },
      ],
      foreignersLaw.text`З поточної редакції ${foreignersLaw.article("29", "Art. 29")} не випливає самостійне чинне право, обов’язок, компетенція або підстава відмови.`,
      foreignersLaw.text`Не використовуйте ${foreignersLaw.article("29", "Art. 29")} як актуальну правову підставу; знайдіть чинну норму для конкретного питання в’їзду або pobyt.`,
      {
        provisionId: "ustawa-o-cudzoziemcach-art-29",
        reviewStatus: "reviewed",
      }
    ),
  ]),
})
