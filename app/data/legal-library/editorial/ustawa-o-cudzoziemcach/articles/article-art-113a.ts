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
    reviewedArticle("113a", {
      provisionId: "ustawa-o-cudzoziemcach-art-113a",
      reviewStatus: "reviewed",
      statuteText:
        "У провадженні про надання або cofnięcie zezwolenie na pobyt czasowy стороною є виключно cudzoziemiec, про якого йдеться відповідно в Art. 98 ust. 1 або Art. 101.",
      statuteLocator: "Art. 113a",
      practicalText:
        "Стаття визначає процесуальний статус сторони, а не матеріальну умову zezwolenie. Роботодавець, член сім’ї чи інша особа не стає стороною лише через інтерес до результату; це не означає, що їхні документи не можуть бути доказами.",
      practicalLocator: "Art. 113a",
      summary:
        "Art. 113a обмежує коло сторін у провадженні про надання або cofnięcie zezwolenie na pobyt czasowy самим cudzoziemiec.",
      rules: [
        {
          locator: "Art. 113a",
          explanation:
            "У справах, віднесених до Art. 98 ust. 1 або Art. 101, єдиною стороною є відповідний cudzoziemiec.",
        },
      ],
      legalEffect:
        "Норма визначає, хто користується процесуальними правами сторони та кому адресують рішення. Вона сама не надає zezwolenie, legalność pobytu або права на працю.",
      foreignersCase:
        "Перевірте, що wniosek, пояснення, doręczenia та odwołanie оформлені від імені cudzoziemiec; документи роботодавця або сім’ї долучайте як докази без підміни сторони.",
    }),
  ]),
})
