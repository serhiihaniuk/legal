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
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    reviewedArticle("86", {
      provisionId: "ustawa-o-cudzoziemcach-art-86",
      reviewStatus: "reviewed",
      statuteText:
        "Якщо wniosek про продовження wizy Schengen або wizy krajowej подано після строку з Art. 85 ust. 1, відмовляється у wszczęciu postępowania щодо продовження цієї візи.",
      statuteLocator: "Art. 86",
      practicalText:
        "Це процесуальна відмова у початку провадження, а не оцінка матеріальних умов продовження. Пізнє подання також не дає підстави автоматично застосовувати legalność pobytu ефект Art. 87.",
      practicalLocator: "Art. 86 w związku z Art. 85 ust. 1 i Art. 87",
      summary:
        "Art. 86 визначає наслідок пропуску граничного дня для подання на продовження візи.",
      rules: [
        {
          locator: "Art. 86",
          explanation:
            "Після спливу строку Art. 85 ust. 1 орган не розпочинає провадження про продовження відповідної візи.",
        },
      ],
      legalEffect:
        "Наслідком є odmowa wszczęcia postępowania. Стаття не створює нового документа pobyt і не вирішує питання prawa do pracy.",
      foreignersCase:
        "Порівняйте дату закінчення legalność pobytu з датою фактичного надходження wniosek і збережіть підтвердження подання. Не називайте таку ситуацію odmowa udzielenia візи по суті.",
    }),
  ]),
})
