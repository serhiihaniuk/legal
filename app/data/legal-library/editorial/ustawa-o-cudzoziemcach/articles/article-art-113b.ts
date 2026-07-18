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
    reviewedArticle("113b", {
      provisionId: "ustawa-o-cudzoziemcach-art-113b",
      reviewStatus: "reviewed",
      statuteText:
        "Rada Ministrów може визначити w drodze rozporządzenia держави, громадянам яких під час розрахунку місячних коштів для zezwolenie за Art. 144, Art. 151 ust. 1, Art. 151b ust. 1, Art. 157a ust. 1 та Art. 157g ust. 1 не віднімають кошти на житло; критерієм є потреби польської міграційної політики.",
      statuteLocator: "Art. 113b",
      practicalText:
        "Це facultative delegacja: сама Art. 113b не називає держави й не змінює розрахунок без відповідного чинного rozporządzenie. Спочатку встановіть громадянство, вид zezwolenie і дату застосовної підзаконної норми.",
      practicalLocator: "Art. 113b",
      summary:
        "Art. 113b дозволяє Раді Міністрів спеціально визначити держави для правила про невіднімання витрат на житло у фінансовому критерії окремих zezwolenie.",
      rules: [
        {
          locator: "Art. 113b",
          explanation:
            "Розпорядження може охоплювати лише громадян держав, які воно назве, і лише zezwolenie за переліченими статтями.",
        },
        {
          locator: "Art. 113b",
          explanation:
            "При застосуванні спеціального правила під час обчислення місячних коштів не віднімають суму, призначену на житло.",
        },
      ],
      legalEffect:
        "Art. 113b лише делегує можливе нормативне уточнення фінансового розрахунку. Вона не надає zezwolenie, не легалізує pobyt і не дає права працювати.",
      foreignersCase:
        "Для розрахунку перевірте вид zezwolenie, громадянство заявника, чинне rozporządzenie та його дату; окремо зберіть підтвердження доходів і витрат, не припускаючи автоматичне застосування винятку.",
    }),
  ]),
})
