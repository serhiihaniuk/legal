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
    reviewedArticle("91", {
      provisionId: "ustawa-o-cudzoziemcach-art-91",
      reviewStatus: "reviewed",
      statuteText:
        "Wizę krajową unieważnia się, якщо вже в момент її видачі існували обставини, що обґрунтовували відмову у її видачі.",
      statuteLocator: "Art. 91",
      practicalText:
        "Ключова дата — момент видачі, а не подія, що виникла пізніше. Не змішуйте unieważnienie з cofnięcie за Art. 90; для конкретного рішення треба встановити первинний факт і відповідну підставу відмови.",
      practicalLocator: "Art. 91",
      summary:
        "Art. 91 встановлює materialну підставу unieważnienie national visa через обставини, що існували під час її видачі.",
      rules: [
        {
          locator: "Art. 91",
          explanation:
            "Норма працює тоді, коли підстава відмови існувала у момент видачі візи; вона не описує пізніше виникнення обставини, яке охоплює Art. 90.",
        },
      ],
      legalEffect:
        "Unieważnienie усуває візу як документ, виданий за наявності первинної перешкоди. Стаття не створює нового права на legal stay, pobyt або роботу.",
      foreignersCase:
        "Порівняйте дані та документи, які існували на дату видачі, з підставою, названою у decyzja. Окремо встановіть дату вручення рішення та можливий засіб оскарження за Art. 92–94.",
    }),
  ]),
})
