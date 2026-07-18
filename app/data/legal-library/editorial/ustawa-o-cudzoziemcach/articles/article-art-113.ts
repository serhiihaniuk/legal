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
    reviewedArticle("113", {
      provisionId: "ustawa-o-cudzoziemcach-art-113",
      reviewStatus: "reviewed",
      statuteText:
        "Cudzoziemiec, якому надано zezwolenie na pobyt czasowy, повідомляє wojewoda, який його надав, протягом 15 dni roboczych про припинення причини надання zezwolenie. Якщо рішення у другій інстанції надав Szef Urzędu, повідомлення направляється wojewoda першої інстанції.",
      statuteLocator: "Art. 113 ust. 1–2",
      practicalText:
        "Обов’язок виникає через ustanie przyczyny, а не лише через формальну зміну назви роботи чи адреси. Збережіть доказ дати події та отримання повідомлення; невиконання може мати наслідок за Art. 100 ust. 2 або cofnięcie за Art. 101.",
      practicalLocator: "Art. 113 ust. 1–2",
      summary:
        "Art. 113 встановлює 15-денний робочий строк повідомлення wojewoda про припинення причини zezwolenie na pobyt czasowy.",
      rules: [
        {
          locator: "Art. 113 ust. 1",
          explanation:
            "Адресатом є wojewoda, який надав zezwolenie; повідомлення подає cudzoziemiec протягом 15 dni roboczych від ustanie przyczyny.",
        },
        {
          locator: "Art. 113 ust. 2",
          explanation:
            "Якщо zezwolenie надав Szef Urzędu у другій інстанції, повідомлення спрямовується wojewoda, який розглядав справу в першій інстанції.",
        },
      ],
      legalEffect:
        "Стаття створює обов’язок повідомлення, але сама не є рішенням про cofnięcie zezwolenie і не припиняє автоматично legalność pobytu чи право на працю.",
      foreignersCase:
        "Опишіть, яка саме причина zezwolenie припинилася і коли, подайте письмове повідомлення правильному wojewoda не пізніше 15-го робочого дня та збережіть підтвердження доставки.",
    }),
  ]),
})
