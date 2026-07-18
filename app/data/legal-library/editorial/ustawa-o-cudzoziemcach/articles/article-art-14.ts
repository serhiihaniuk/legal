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
      "14",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("14", "Art. 14")} передбачає, що odciski linii papilarnych cudzoziemca pobiera się за допомогою kart daktyloskopijnych або urządzenia do elektronicznego pobierania odcisków.`,
          sourceLocator: "Art. 14",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("14", "Art. 14")} регулює технічний спосіб зняття відбитків пальців, а не підставу в’їзду, pobyt чи wykonywanie pracy.`,
      [
        {
          locator: "Art. 14",
          explanation:
            "У матеріалах перевірте, чи спосіб pobrania відбитків відповідає одному з двох названих законом способів: kart daktyloskopijnych або електронному urządzenie.",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("14", "Art. 14")} визначає спосіб отримання біометричних даних для процедур, у яких їх збирають за ustawa. Сам факт зняття або наявність відбитків не доводить legalność pobytu чи prawo do pracy.`,
      foreignersLaw.text`Зафіксуйте, де і яким способом були pobrane odciski linii papilarnych. Не перетворюйте запис про відбитки в доказ дозволу на wjazd, pobyt або pracę без перевірки окремих матеріальних норм.`
    ),
  ]),
})
