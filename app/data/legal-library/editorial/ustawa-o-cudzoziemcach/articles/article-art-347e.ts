import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const SIS_2018_1860_URL = "https://eur-lex.europa.eu/eli/reg/2018/1860/oj"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-347e",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("347e", "Art. 347e")} визначає Komendant Główny Straży Granicznej компетентним отримувати інформацію за ${foreignersLaw.external("Art. 6", SIS_2018_1860_URL)} ust. 1 і ${foreignersLaw.external("Art. 8", SIS_2018_1860_URL)} rozporządzenia nr 2018/1860 та називає орган для визначення środków за ${foreignersLaw.external("Art. 7", SIS_2018_1860_URL)} ust. 2.`,
          sourceLocator: "Art. 347e ust. 1–2",
        },
      ],
      summary:
        "Стаття розподіляє польську компетенцію щодо інформації та заходів, пов’язаних із SIS за рішенням про повернення.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Komendant Główny Straży Granicznej приймає інформацію, передбачену ${foreignersLaw.external("Art. 6", SIS_2018_1860_URL)} ust. 1 і ${foreignersLaw.external("Art. 8", SIS_2018_1860_URL)} rozporządzenia nr 2018/1860.`,
        },
        {
          locator: "ust. 2",
          explanation: foreignersLaw.text`Środki за ${foreignersLaw.external("Art. 7", SIS_2018_1860_URL)} ust. 2 визначає командир oddziału або placówki, який видав decyzja, а після її підтвердження — Komendant Główny.`,
        },
      ],
      legalEffect:
        "Норма визначає компетенцію органів, а не перелік нових підстав для повернення чи заборони в’їзду.",
      foreignersCase: foreignersLaw.text`У запиті про SIS визначте, який польський орган приймав рішення і який саме захід оскаржується; не приписуйте ${foreignersLaw.article("347e", "Art. 347e")} повноважень, яких у ньому немає.`,
    },
  ],
})
