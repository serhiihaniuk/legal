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
    reviewedArticle("120", {
      provisionId: "ustawa-o-cudzoziemcach-art-120",
      reviewStatus: "reviewed",
      statuteText:
        "Wojewoda за місцем актуального pobyt може в будь-який час на wniosek cudzoziemiec змінити permit i pracę, якщо особа хоче працювати в іншого podmiot, на умовах zwolnienie від work permit, в іншого pracodawca użytkownik або на інших умовах Art. 118 ust. 1 pkt 2–5; строк permit не змінюється. Для pkt 1 відмова є обов’язковою за відсутності insurance, умов podmiot Art. 114, Art. 117, недостатньої зарплати, коротшого періоду роботи або пропуску повідомлення Art. 121; в окремих випадках organ може відмовити через відсутність діяльності/коштів. Сторона — лише cudzoziemiec.",
      statuteLocator: "Art. 120 ust. 1–7",
      practicalText:
        "Зміна permit потрібна для нового суб’єкта, user або істотних параметрів, якщо Art. 119 не дає винятку. Нова umowa або поданий wniosek самі не змінюють стару decyzja і не створюють автоматичного права почати іншу роботу; до зміни перевірте insurance, оплату, строки та повідомлення про втрату роботи.",
      practicalLocator: "Art. 120 ust. 1–7",
      summary:
        "Art. 120 регулює зміну permit i pracę, обов’язкові та факультативні підстави відмови, незмінність строку та статус єдиної сторони.",
      rules: [
        {
          locator: "Art. 120 ust. 1–3",
          explanation:
            "Wojewoda за актуальним місцем pobyt змінює умови за заявою для нового podmiot/user або Art. 118 параметрів; до decyzja застосовують Art. 118, а строк permit не змінюють.",
        },
        {
          locator: "Art. 120 ust. 4",
          explanation:
            "За зміни podmiot обов’язково відмовляють при відсутності insurance, умов Art. 114, перешкод Art. 117, недостатній зарплаті, коротшому періоді роботи або пропущеному Art. 121 повідомленні.",
        },
        {
          locator: "Art. 120 ust. 5",
          explanation:
            "У випадку нового podmiot organ може відмовити, якщо podmiot/user не веде діяльності або не має коштів/джерел доходу для трудових зобов’язань.",
        },
        {
          locator: "Art. 120 ust. 6–7",
          explanation:
            "Для нового user або інших умов можливі відмови через insurance чи невиконання podmiot умов Art. 114 ust. 1 pkt 3–5; стороною є виключно cudzoziemiec.",
        },
      ],
      legalEffect:
        "До рішення про зміну діють параметри чинного permit; Art. 120 не продовжує строк і не легалізує нову роботу автоматично. Позитивна зміна також не скасовує окремі вимоги професії та work authorization.",
      foreignersCase:
        "Визначте, чи зміна підпадає під Art. 119 або потребує Art. 120. Додайте новий annex, umowa, дані podmiot/user, insurance, оплату, години, строк роботи, докази діяльності та підтвердження Art. 121 повідомлення; подавайте від імені cudzoziemiec.",
    }),
  ]),
})
