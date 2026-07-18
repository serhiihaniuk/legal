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
    reviewedArticle("118", {
      provisionId: "ustawa-o-cudzoziemcach-art-118",
      reviewStatus: "reviewed",
      statuteText:
        "У decyzja про zezwolenie na pobyt czasowy i pracę, крім строку дії, зазначають podmiot powierzający (і pracodawca użytkownik для працівника тимчасового), stanowisko або rodzaj pracy, найнижчу винагороду, wymiar czasu pracy та rodzaj umowy; рішення містить pouczenie про Art. 121 ust. 1. Для кількох podmiot умови визначаються окремо. Якщо cudzoziemiec звільнений від zezwolenie na pracę, замість цих даних зазначають право працювати на підставі відповідної норми; для неповного часу або umowa cywilnoprawna найнижчу винагороду вказують пропорційно.",
      statuteLocator: "Art. 118 ust. 1–5",
      practicalText:
        "Art. 118 перетворює умови праці на межі рішення. Тому legalność pobytu за zezwolenie і право виконувати роботу треба читати окремо: робота поза podmiot, посадою, оплатою, часом чи договором не підтверджується лише наявністю картки pobytu.",
      practicalLocator: "Art. 118 ust. 1–5",
      summary:
        "Art. 118 визначає обов’язковий зміст рішення про zezwolenie na pobyt czasowy i pracę та межі роботи за кожним podmiot.",
      rules: [
        {
          locator: "Art. 118 ust. 1 pkt 1–5; ust. 1a",
          explanation:
            "Decyzja містить суб’єкта/користувача, роботу, мінімальну зарплату, години, тип umowa і pouczenie про повідомлення втрати роботи.",
        },
        {
          locator: "Art. 118 ust. 2",
          explanation:
            "За кількох podmiot умови з ust. 1 виписуються окремо для кожного.",
        },
        {
          locator: "Art. 118 ust. 3–4",
          explanation:
            "За звільнення від zezwolenie na pracę параметри ust. 1 не вносяться; рішення зазначає право працювати на умовах норми, що є підставою звільнення.",
        },
        {
          locator: "Art. 118 ust. 5",
          explanation:
            "Для неповного часу або umowa cywilnoprawna найнижчу оплату вказують пропорційно часу або прогнозованому періоду виконання зобов’язань.",
        },
      ],
      legalEffect:
        "Decyzja визначає конкретні межі zezwolenia na pobyt czasowy i pracę та дозволеної роботи. Вона не скасовує вимог до zawód regulowany, а legalność pobytu не слід ототожнювати з необмеженим правом виконувати будь-яку працю.",
      foreignersCase:
        "Порівняйте паспорт і картку перебування (kartę pobytu) з кожним рядком decyzja: podmiot, pracodawca użytkownik, stanowisko, зарплата, години, umowa, строк і pouczenie. Перевірте документи про фактичну виплату, графік, фактичне місце та модель роботи.",
    }),
  ]),
})
