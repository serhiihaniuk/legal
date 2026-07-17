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
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    reviewedArticle(
      "43",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("43", "Art. 43")} передбачає, що unieważnienie zezwolenia на mały ruch graniczny оформлюється decyzja; її видає відповідний komendant Policji або Straży Granicznej, який встановив підставу під час контролю legalność pobytu, а odwołanie подається до wojewoda.`,
          sourceLocator: "Art. 43 ust. 1–3",
        },
      ],
      "Стаття визначає форму рішення про unieważnienie, коло органів, що його видають після контролю, та odwołanie до wojewoda.",
      [
        {
          locator: "ust. 1–2",
          explanation:
            "Рішення приймає один із названих komendant, якщо під час контролю legalność pobytu встановлено обставини для unieważnienie.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Odwołanie спрямовується до wojewoda, właściwego за siedziba органу, який видав рішення.",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("43", "Art. 43")} регулює компетенцію та оскарження рішення, але не доводить саму матеріальну підставу unieważnienie без фактів контролю.`,
      "З’ясуйте, який саме komendant видав decyzja, що зафіксував контроль legalność pobytu, та до якого wojewoda і в який строк подається odwołanie.",
      {
        provisionId: "ustawa-o-cudzoziemcach-art-43",
        reviewStatus: "reviewed",
      }
    ),
  ]),
})
