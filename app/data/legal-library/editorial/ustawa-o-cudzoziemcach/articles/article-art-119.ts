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
    reviewedArticle("119", {
      provisionId: "ustawa-o-cudzoziemcach-art-119",
      reviewStatus: "reviewed",
      statuteText:
        "Зміна або нове permit i pracę не потрібні при зміні siedziba/місця проживання, назви або форми правної podmiot чи pracodawca użytkownik; переході zakład; збільшенні wymiar часу з пропорційною зарплатою; зміні назви stanowisko без зміни обов’язків; або заміні civil contract на umowa o pracę. Podmiot повідомляє письмово wojewoda протягом 15 dni roboczych; після рішення Szef Urzędu — wojewoda першої інстанції.",
      statuteLocator: "Art. 119 ust. 1–3",
      practicalText:
        "Виняток від нової/зміненої decyzja діє лише за точною відповідністю одному з pkt ust. 1. Він не скасовує письмове повідомлення і не охоплює зміну роботодавця, посади по суті, зарплати всупереч умові або іншого фактичного роботодавця.",
      practicalLocator: "Art. 119 ust. 1–3",
      summary:
        "Art. 119 називає вичерпні зміни, для яких не потрібне нове або змінене permit i pracę, але вимагає повідомлення wojewoda.",
      rules: [
        {
          locator: "Art. 119 ust. 1 pkt 1–2",
          explanation:
            "Без зміни permit допускаються організаційні зміни podmiot/user та transfer zakład або його частини до іншого роботодавця.",
        },
        {
          locator: "Art. 119 ust. 1 pkt 3–5",
          explanation:
            "Допускаються лише збільшення часу з пропорційною оплатою, зміна назви без зміни обов’язків або заміна civil contract на umowa o pracę.",
        },
        {
          locator: "Art. 119 ust. 2–3",
          explanation:
            "Podmiot надсилає письмове повідомлення протягом 15 dni roboczych правильному wojewoda; після другої інстанції адресатом є wojewoda першої інстанції.",
        },
      ],
      legalEffect:
        "За умов Art. 119 чинне permit зберігає свої параметри без нової decyzja, але повідомлення є окремим обов’язком. Стаття не робить будь-яку зміну роботи законною поза переліченими випадками.",
      foreignersCase:
        "Порівняйте старі й нові реєстраційні дані, документи transfer, години й оплату, обов’язки та тип договору. Подайте письмове повідомлення до правильного wojewoda в 15 dni roboczych і збережіть доказ.",
    }),
  ]),
})
