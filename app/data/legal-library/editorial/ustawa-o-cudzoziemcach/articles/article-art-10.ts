import {
  authorLegalTextCitationsTree,
  createLegalTextAuthor,
  type LegalTextValue,
} from "../../../legal-text"

import type { LegalProvisionId } from "../../../contracts"

const kpaLaw = createLegalTextAuthor("kpa")

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
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    reviewedArticle(
      "10",
      [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Якщо cudzoziemiec — сторона провадження — перебуває за кордоном і не призначив pełnomocnik, який проживає в Польщі, не застосовуються ${kpaLaw.article("73", "art. 73 § 1")} і ${kpaLaw.article("73", "1a")}, ${kpaLaw.article("79", "art. 79")} та ${kpaLaw.article("81", "art. 81")} KPA.`,
          sourceLocator: "Art. 10 ust. 1",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`У справах розділу 1 dział IV, які веде minister właściwy do spraw zagranicznych, не застосовується перелік положень KPA, прямо наведений у ${foreignersLaw.article("10", "Art. 10")} ust. 2.`,
          sourceLocator: "Art. 10 ust. 2",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("10", "Art. 10")} містить два спеціальні обмеження KPA: для сторони за кордоном без польського pełnomocnik і для визначених візових справ MFA.`,
      [
        {
          locator: "Art. 10 ust. 1",
          explanation:
            "Підставою спеціального режиму є сукупність двох фактів: перебування сторони за кордоном і відсутність повноважного представника, який проживає в Польщі.",
        },
        {
          locator: "Art. 10 ust. 2",
          explanation:
            "У справі MFA звірте, чи це провадження розділу 1 dział IV, і застосовуйте лише перелік виключених статей KPA.",
        },
      ],
      foreignersLaw.text`${foreignersLaw.article("10", "Art. 10")} змінює процесуальні гарантії в точно визначених ситуаціях; він не є загальним скасуванням KPA для всіх справ іноземців.`,
      foreignersLaw.text`Зафіксуйте місце перебування, наявність польського pełnomocnik і орган провадження. У рішенні перевірте, чи посилання на незастосування KPA відповідає саме ${foreignersLaw.article("10", "Art. 10")}.`
    ),
  ]),
})
