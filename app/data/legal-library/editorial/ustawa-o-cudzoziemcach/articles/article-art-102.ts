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
    reviewedArticle("102", {
      provisionId: "ustawa-o-cudzoziemcach-art-102",
      reviewStatus: "reviewed",
      statuteText:
        "Zezwolenie na pobyt czasowy wygasa z mocy prawa в день отримання cudzoziemiec наступного zezwolenie na pobyt czasowy, zezwolenie na pobyt stały, zezwolenie na pobyt rezydenta długoterminowego UE або польського громадянства.",
      statuteLocator: "Art. 102",
      practicalText:
        "Це автоматичне припинення попереднього дозволу через набуття нового статусу; не треба описувати його як cofnięcie за рішенням органу. Для legalność pobytu і права працювати вирішальними стають новий документ і його власні умови.",
      practicalLocator: "Art. 102",
      summary:
        "Art. 102 визначає випадки, коли попередній zezwolenie na pobyt czasowy втрачає чинність з mocy prawa.",
      rules: [
        {
          locator: "Art. 102",
          explanation:
            "Підставами є отримання наступного zezwolenie na pobyt czasowy, zezwolenie na pobyt stały, zezwolenie rezydenta długoterminowego UE або obywatelstwo polskie.",
        },
      ],
      legalEffect:
        "Попередній zezwolenie припиняється за законом у визначений день. Art. 102 не визначає зміст нового статусу і не означає автоматичного дозволу на будь-яку працю.",
      foreignersCase:
        "Збережіть рішення та дату набуття нового дозволу або громадянства, перевірте, який документ є чинним після цієї дати, і не використовуйте стару картку перебування (kartę pobytu) як єдине підтвердження.",
    }),
  ]),
})
