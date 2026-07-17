import {
  authorLegalTextCitationsTree,
  createLegalTextAuthor,
  type LegalTextValue,
} from "../../../legal-text"

import type { LegalProvisionId } from "../../../contracts"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

import { defineEditorialPart } from "../../define-editorial-part"

type ForeignersActProvisionId = LegalProvisionId<"ustawa-o-cudzoziemcach">

type ReviewedClaim = {
  kind: "statute-text" | "practical-inference"
  text: LegalTextValue
  sourceLocator: string
}

type ReviewedRule = {
  locator: string
  explanation: LegalTextValue
}

type ReviewedArticleMetadata = {
  provisionId: ForeignersActProvisionId
  reviewStatus: "reviewed"
}

const reviewedArticle = (
  _article: string,
  claims: readonly ReviewedClaim[],
  summary: LegalTextValue,
  rules: readonly ReviewedRule[],
  legalEffect: LegalTextValue,
  foreignersCase: LegalTextValue,
  metadata: ReviewedArticleMetadata
) => ({
  ...metadata,
  claims,
  summary,
  rules,
  legalEffect,
  foreignersCase,
})
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    reviewedArticle(
      "36",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("36", "Art. 36")} делегує ministrowi właściwemu do spraw zdrowia визначити в rozporządzenie перелік choroby zakaźne, які можуть бути підставою odmowa wjazdu через загрозу zdrowie publiczne, та критерії підозри таких хвороб.`,
          sourceLocator: "Art. 36 ust. 1 pkt 1–2",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("36", "Art. 36")} ust. 2 вимагає враховувати епідемічні та особливо небезпечні інфекційні хвороби, humanitarne traktowanie cudzoziemców і запобігання загрозі здоров’ю.`,
          sourceLocator: "Art. 36 ust. 2",
        },
      ],
      "Стаття є делегацією для підзаконного переліку хвороб і критеріїв, пов’язаних із загрозою здоров’ю населення під час в’їзду.",
      [
        {
          locator: "ust. 1",
          explanation:
            "Конкретний wykaz chorób і критерії підозри визначаються в rozporządzenie ministra właściwego do spraw zdrowia.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Підзаконне регулювання має враховувати названі категорії хвороб, humanitarne traktowanie та захист zdrowie publiczne на переході й у Польщі.",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("36", "Art. 36")} сама не називає конкретний діагноз і не є автоматичною відмовою; для справи потрібні чинне rozporządzenie та факти, які підпадають під його критерії.`,
      "Перевірте медичні документи, чинний wykaz chorób і критерії підозри на дату контролю. Не робіть висновок про odmowa wjazdu лише з назви хвороби без застосовного підзаконного правила.",
      {
        provisionId: "ustawa-o-cudzoziemcach-art-36",
        reviewStatus: "reviewed",
      }
    ),
  ]),
})
