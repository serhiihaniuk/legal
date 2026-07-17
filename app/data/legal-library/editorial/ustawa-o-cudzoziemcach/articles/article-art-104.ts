import type { LegalProvisionId } from "../../../contracts"

import { authorLegalTextCitationsTree } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

type ForeignersActProvisionId = LegalProvisionId<"ustawa-o-cudzoziemcach">

type ReviewedArticleData = {
  provisionId: ForeignersActProvisionId
  reviewStatus: "reviewed"
  statuteText: string
  statuteLocator: string
  practicalText: string
  practicalLocator: string
  summary: string
  rules: readonly { locator: string; explanation: string }[]
  legalEffect: string
  foreignersCase: string
}

const provisionId = (article: string) =>
  `ustawa-o-cudzoziemcach-art-${article}` as ForeignersActProvisionId

const reviewedArticle = (article: string, data: ReviewedArticleData) => ({
  provisionId: data.provisionId ?? provisionId(article),
  reviewStatus: data.reviewStatus,
  claims: [
    {
      kind: "statute-text" as const,
      text: data.statuteText,
      sourceLocator: data.statuteLocator,
    },
    {
      kind: "practical-inference" as const,
      text: data.practicalText,
      sourceLocator: data.practicalLocator,
    },
  ],
  summary: data.summary,
  rules: data.rules,
  legalEffect: data.legalEffect,
  foreignersCase: data.foreignersCase,
})
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    reviewedArticle("104", {
      provisionId: "ustawa-o-cudzoziemcach-art-104",
      reviewStatus: "reviewed",
      statuteText:
        "Temporary residence permit, крім дозволів Art. 139a ust. 1 та Art. 139o ust. 1, надає або відмовляє у його наданні wojewoda за місцем pobytu cudzoziemiec у формі decyzja. Cofає permit wojewoda, який його надав; якщо permit надав Szef Urzędu у другій інстанції, cofає wojewoda, який вирішував справу в першій інстанції.",
      statuteLocator: "Art. 104 ust. 1–3",
      practicalText:
        "Спочатку визначте właściwość органу за місцем pobytu та історією інстанцій. Art. 104 розподіляє компетенцію, але не доводить виконання матеріальних умов permit або права працювати.",
      practicalLocator: "Art. 104 ust. 1–3",
      summary:
        "Art. 104 встановлює, який organ видає, відмовляє або cofає temporary residence permit.",
      rules: [
        {
          locator: "Art. 104 ust. 1",
          explanation:
            "Wojewoda за місцем pobytu приймає рішення про надання або відмову, крім двох спеціальних видів дозволів Art. 139a та Art. 139o.",
        },
        {
          locator: "Art. 104 ust. 2–3",
          explanation:
            "Cofає permit wojewoda, який його надав; після надання Szef Urzędu у другій інстанції це робить wojewoda першої інстанції.",
        },
      ],
      legalEffect:
        "Норма визначає належного decision-maker та форму рішення. Вона сама не надає permit, legal stay або work authorization.",
      foreignersCase:
        "Підтвердьте актуальне місце pobytu, компетентного wojewoda, орган першої та другої інстанції, а також хто видав попередній permit. Усі матеріальні умови перевіряйте окремо.",
    }),
  ]),
})
