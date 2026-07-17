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
    reviewedArticle("111", {
      provisionId: "ustawa-o-cudzoziemcach-art-111",
      reviewStatus: "reviewed",
      statuteText:
        "Якщо інша держава Schengen просить консультацію за art. 28 або 29 rozporządzenia nr 2018/1861, wojewoda, який надав temporary residence permit, або wojewoda першої інстанції, коли дозвіл надав Szef Urzędu у другій інстанції, визначає, чи є підстави його cofnięcie з урахуванням причин SIS-рішення та загроз art. 28 lit. d або art. 29 lit. d. Wojewoda передає KGP інформацію про cofnięcie або відсутність підстав у 10 днів; можливе мотивоване продовження до 12 днів, а KGP передає її іншій державі протягом 14 днів або продовженого строку.",
      statuteLocator: "Art. 111 ust. 1–4",
      practicalText:
        "Консультація не є автоматичним cofnięcie permit: organ оцінює причини та повідомляє результат. Важливо встановити, який wojewoda є компетентним, коли надійшов запит і чи було подано мотивовану заяву про продовження строку.",
      practicalLocator: "Art. 111 ust. 1–4",
      summary:
        "Art. 111 встановлює SIS-консультацію щодо можливого cofnięcie temporary residence permit і строки обміну відповіддю.",
      rules: [
        {
          locator: "Art. 111 ust. 1",
          explanation:
            "Рішення про наявність підстав cofnięcie оцінює wojewoda-видавець або wojewoda першої інстанції після рішення Szef Urzędu.",
        },
        {
          locator: "Art. 111 ust. 2",
          explanation:
            "Інформація про рішення cofnięcie або відсутність підстав передається KGP протягом 10 днів від запиту.",
        },
        {
          locator: "Art. 111 ust. 3",
          explanation:
            "До спливу строку можна через KGP просити мотивоване продовження не більш як на 12 днів; відповідь передається за 2 дні до кінця нового строку.",
        },
        {
          locator: "Art. 111 ust. 4",
          explanation:
            "KGP пересилає інформацію державі Schengen у 14-денний або продовжений строк.",
        },
      ],
      legalEffect:
        "Норма визначає консультаційний та інформаційний механізм навколо можливого cofnięcie permit. Вона сама не скасовує permit, не змінює legal stay і не вирішує право на працю.",
      foreignersCase:
        "Збережіть запит іншої держави, SIS-причини, рішення wojewoda, дату отримання, докази передачі KGP та строки 10/12/14 днів. Перевірте, чи рішення приймав wojewoda першої інстанції або орган-видавець.",
    }),
  ]),
})
