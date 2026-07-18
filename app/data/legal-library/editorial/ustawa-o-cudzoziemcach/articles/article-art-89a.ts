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
    reviewedArticle("89a", {
      provisionId: "ustawa-o-cudzoziemcach-art-89a",
      reviewStatus: "reviewed",
      statuteText:
        "Wojewoda або Szef Urzędu у другій інстанції, який видав рішення про продовження cudzoziemiec wizy Schengen, невідкладно отримує з Wizowy System Informacyjny дані з art. 19 ust. 1 rozporządzenia nr 2017/2226 і безпосередньо імпортує їх до останнього запису про в’їзд/виїзд цієї особи в EES відповідно до art. 14 rozporządzenia nr 767/2008.",
      statuteLocator: "Art. 89a",
      practicalText:
        "Стаття регулює службову синхронізацію VIS та EES після decyzja про продовження wiza Schengen. Вона не продовжує документ сама по собі, не легалізує інший pobyt і не дає права працювати.",
      practicalLocator: "Art. 89a",
      summary:
        "Art. 89a встановлює обов’язок органу оновити відповідний запис EES даними з VIS після продовження wiza Schengen.",
      rules: [
        {
          locator: "Art. 89a",
          explanation:
            "Адресат обов’язку — орган, який видав рішення про продовження: wojewoda або Szef Urzędu у другій інстанції; дія виконується невідкладно.",
        },
        {
          locator: "Art. 89a",
          explanation:
            "Дані з art. 19 ust. 1 rozporządzenia nr 2017/2226 імпортуються до останнього EES-запису за art. 14 rozporządzenia nr 767/2008.",
        },
      ],
      legalEffect:
        "Норма забезпечує актуальність міжсистемного запису про в’їзд/виїзд. Вона не замінює рішення про візу, zezwolenie na pobyt або правову підставу роботи.",
      foreignersCase:
        "У досьє зазначте орган, дату й номер decyzja про продовження, дані візи та останній запис EES. Якщо є розбіжність, сформулюйте її як питання до відповідного органу, а не як доказ права на довший pobyt.",
    }),
  ]),
})
