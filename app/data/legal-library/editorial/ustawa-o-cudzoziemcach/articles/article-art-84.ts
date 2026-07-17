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
    reviewedArticle("84", {
      provisionId: "ustawa-o-cudzoziemcach-art-84",
      reviewStatus: "reviewed",
      statuteText:
        "Wojewoda, właściwy за місцем pobytu cudzoziemiec, у формі decyzja продовжує або відмовляє у продовженні wizy Schengen чи wizy krajowej. Wiza krajowa може бути продовжена лише один раз, а pobyt на її підставі не може перевищувати період, передбачений для wizy krajowej; виняток діє для cudzoziemiec у szpital, стан якого не дозволяє виїхати.",
      statuteLocator: "Art. 84 ust. 1–4",
      practicalText:
        "Подання на продовження стосується строку та чинності візи, а не udzielenie zezwolenia na pobyt. Госпітальна підстава потребує доказу, що саме стан здоров’я перешкоджає виїзду; wojewoda може призначити biegły lekarz.",
      practicalLocator: "Art. 84 ust. 3–5",
      summary:
        "Art. 84 визначає компетенцію wojewoda та межі продовження Schengen або national visa, включно зі спеціальним правилом для госпіталізованого cudzoziemiec.",
      rules: [
        {
          locator: "Art. 84 ust. 1",
          explanation:
            "Рішення про продовження або відмову приймає wojewoda за місцем pobytu cudzoziemiec.",
        },
        {
          locator: "Art. 84 ust. 2",
          explanation:
            "Wizę krajową можна продовжити один раз; pobyt за продовженою візою не може перевищити період pobytu, передбачений для wizy krajowej.",
        },
        {
          locator: "Art. 84 ust. 3–5",
          explanation:
            "Для особи в szpital, яка через стан здоров’я не може виїхати, строк ważności або pobytu за national visa продовжується до можливості виїзду. Wojewoda може залучити лікаря-експерта.",
        },
      ],
      legalEffect:
        "Результатом є decyzja про продовження або відмову у продовженні візи. Це не замінює zezwolenie na pobyt і не створює самостійного prawa do pracy.",
      foreignersCase:
        "Зберіть паспорт і візу, календар в’їздів та дозволених днів, підтвердження місця pobytu, заяву про продовження та медичні документи szpital. Перевірте окремо, чи робота має власну правову підставу.",
    }),
  ]),
})
