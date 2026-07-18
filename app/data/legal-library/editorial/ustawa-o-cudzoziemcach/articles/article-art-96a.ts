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
    reviewedArticle("96a", {
      provisionId: "ustawa-o-cudzoziemcach-art-96a",
      reviewStatus: "reviewed",
      statuteText:
        "Якщо орган іншої держави Schengen просить консультацію за art. 10 або 11 rozporządzenia nr 2018/1860, а cudzoziemiec має чинну wiza krajowa, консул, який її видав, або minister у випадку Art. 92 ust. 1a визначає, чи є підстави її cofnięcie. Інформація про рішення або відсутність підстав надсилається через Komendant Główny Policji у 10-денний строк; його можна продовжити не більше ніж на 12 днів, а KGP передає відповідь протягом 14 днів або продовженого строку.",
      statuteLocator: "Art. 96a ust. 1–4",
      practicalText:
        "Консультація виникає через запит іншої держави та стосується чинної wiza krajowa. Вона не означає автоматичне cofnięcie: спочатку компетентний консул або minister оцінює підстави, а потім надсилається інформація в установлені строки.",
      practicalLocator: "Art. 96a ust. 1–4",
      summary:
        "Art. 96a регулює SIS-консультацію щодо чинної wiza krajowa для cudzoziemiec та строки обміну інформацією між консулом, міністром, KGP і державою Schengen.",
      rules: [
        {
          locator: "Art. 96a ust. 1",
          explanation:
            "Консул-видавець або minister визначає, чи є підстави cofnięcie, коли інша держава просить консультацію за art. 10 або 11 rozporządzenia nr 2018/1860.",
        },
        {
          locator: "Art. 96a ust. 2",
          explanation:
            "Інформація про cofnięcie або відсутність підстав передається Komendant Główny Policji протягом 10 днів від отримання запиту.",
        },
        {
          locator: "Art. 96a ust. 3",
          explanation:
            "До спливу строку можна мотивовано просити через KGP продовження не більш як на 12 днів; відповідь передається за 2 дні до кінця продовженого строку.",
        },
        {
          locator: "Art. 96a ust. 4",
          explanation:
            "KGP пересилає відповідь органу іншої держави протягом 14 днів або протягом продовженого строку.",
        },
      ],
      legalEffect:
        "Стаття організує консультацію та передавання результату, але сама не є рішенням про cofnięcie, не продовжує wiza krajowa і не надає права на pobyt або працю.",
      foreignersCase:
        "Зберіть запит іншої держави, чинну wiza krajowa, орган-видавець, рішення/відсутність підстав і календар 10-, 12- та 14-денних строків. Не плутайте консультаційний обмін з остаточним статусом візи.",
    }),
  ]),
})
