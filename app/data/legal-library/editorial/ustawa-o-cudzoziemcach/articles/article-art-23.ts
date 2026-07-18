import {
  authorLegalTextCitationsTree,
  createLegalTextAuthor,
  type LegalTextValue,
} from "../../../legal-text"

import type { LegalProvisionId } from "../../../contracts"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

import { defineEditorialPart } from "../../define-editorial-part"

type ForeignersActProvisionId = LegalProvisionId<"ustawa-o-cudzoziemcach">

type EditorialEntry = {
  provisionId: ForeignersActProvisionId
  reviewStatus: "reviewed"
  claims: readonly {
    kind: "statute-text" | "practical-inference"
    text: LegalTextValue
    sourceLocator: string
  }[]
  summary: LegalTextValue
  rules: readonly { locator: string; explanation: LegalTextValue }[]
  legalEffect: LegalTextValue
  foreignersCase: LegalTextValue
}

const provisionId = (article: string) =>
  `ustawa-o-cudzoziemcach-art-${article}` as ForeignersActProvisionId

const reviewedArticle = (
  article: string,
  claims: EditorialEntry["claims"],
  summary: LegalTextValue,
  rules: EditorialEntry["rules"],
  legalEffect: LegalTextValue,
  foreignersCase: LegalTextValue
): EditorialEntry => ({
  provisionId: provisionId(article),
  reviewStatus: "reviewed",
  claims,
  summary,
  rules,
  legalEffect,
  foreignersCase,
})
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    reviewedArticle(
      "23",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Cudzoziemiec, який перетинає granicę, зобов’язаний мати ważny dokument podróży; якщо це потрібно, також ważną wizę або інший чинний документ, що дає право на wjazd і pobyt у Польщі; для tranzyt — дозвіл на wjazd до іншої держави або pobyt у ній, якщо такий дозвіл потрібен.`,
          sourceLocator: "Art. 23 pkt 1–3",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("23", "Art. 23")} встановлює базовий перелік документів, які cudzoziemiec має мати під час перетину granicę, з окремим правилом для tranzyt.`,
      [
        {
          locator: "Art. 23 pkt 1",
          explanation:
            "Перевірте чинність документа podróży на момент перетину кордону, а не лише його наявність у старих матеріалах.",
        },
        {
          locator: "Art. 23 pkt 2",
          explanation:
            "Встановіть, чи потрібні wiza або інший документ для в’їзду та pobyt, і чи саме цей документ є ważny для запланованої дії.",
        },
        {
          locator: "Art. 23 pkt 3",
          explanation:
            "Якщо маршрут є tranzyt, перевірте також дозвіл держави призначення або наступної держави, коли його вимагають її правила.",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("23", "Art. 23")} встановлює документальний обов’язок для перетину кордону. Він не гарантує фактичний wjazd, тривалість pobyt або право на wykonywanie pracy без інших умов.`,
      foreignersLaw.text`На дату перетину зіставте документ podróży, wizę або dokument pobytowy з маршрутом і метою. Для tranzyt окремо отримайте доказ дозволу наступної держави; не прирівнюйте документ для в’їзду до дозволу на працю.`
    ),
  ]),
})
