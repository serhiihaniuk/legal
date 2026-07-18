import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-61",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("61", "Art. 61")} передбачає видачу міністром закордонних справ документів, що підтверджують виконання функцій членами дипломатичних місій і консульських установ та прирівняними до них особами, а членам їхніх сімей, які ведуть спільне gospodarstwo domowe, — документів, що визначають їхній status.`,
          sourceLocator: "Art. 61",
        },
        {
          kind: "practical-inference",
          text: "Йдеться про спеціальні документи для дипломатичного або прирівняного статусу, а не про звичайну procedura видачі wiza для будь-якого cudzoziemiec.",
          sourceLocator: "Art. 61",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("61", "Art. 61")} регулює спеціальні документи для членів дипломатичних місій, консульських установ та осіб із прирівняними привілеями й імунітетами, а також для членів їхніх сімей, які проживають разом.`,
      rules: [
        {
          locator: "Art. 61",
          explanation:
            "Міністр закордонних справ видає документ про виконання функцій самій особі та документ про status члену сім’ї, який залишається з нею у wspólnota domowa.",
        },
      ],
      legalEffect: foreignersLaw.text`Документ ${foreignersLaw.article("61", "Art. 61")} є спеціальним підтвердженням функції або статусу; його дія та пов’язані привілеї не поширюються на осіб поза названими категоріями.`,
      foreignersCase:
        "Перевірте дипломатичний статус, документ MFA і сімейний зв’язок та wspólnota domowa; не замінюйте цей документ звичайною wiza або kartą pobytu.",
    },
  ],
})
