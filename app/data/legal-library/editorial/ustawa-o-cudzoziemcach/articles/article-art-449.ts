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
      provisionId: "ustawa-o-cudzoziemcach-art-449",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("449", "Art. 449")} ust. 1: «Krajowy zbiór rejestrów, ewidencji i wykazu w sprawach cudzoziemców tworzy oraz prowadzi w systemie teleinformatycznym Szef Urzędu».`,
          sourceLocator: "Art. 449 ust. 1",
        },
        {
          kind: "practical-inference",
          text: "Krajowy zbiór об’єднує різні реєстри, але не стирає відмінність між видом запису, органом-розпорядником і правовою підставою справи.",
          sourceLocator: "Art. 449 ust. 1–2",
        },
      ],
      summary:
        "Szef Urzędu створює та веде в teleinformatyczny system Krajowy zbiór rejestrów, ewidencji i wykazu, який включає rejestry в’їзду, pobyt, документи, захист, громадян ЄС, репатріацію, візи та інші прямо перелічені записи.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Організатором і оператором Krajowy zbiór є Szef Urzędu.",
        },
        {
          locator: "ust. 2 pkt 1–12",
          explanation: foreignersLaw.text`До zbiór входять визначені rejestry з ${foreignersLaw.article("428", "Art. 428")}, ewidencja zaproszeń, wykaz, справи міжнародного захисту, azyl, zgoda humanitarna/tolerowana, ochrona czasowa та rejestry громадян ЄС.`,
        },
        {
          locator: "ust. 2 pkt 13–19",
          explanation: foreignersLaw.text`Також охоплюються репатріація, громадянство, zaświadczenia ${foreignersLaw.article("170", "Art. 170")}, centralny rejestr wizowy, Karta Polaka та реєстр допомоги громадянам України.`,
        },
      ],
      legalEffect:
        "Стаття створює спільну інфраструктуру обліку та визначає її склад. Вона не робить усі дані відкритими й не встановлює саму підставу рішення щодо cudzoziemiec.",
      foreignersCase:
        "У запиті до органу назвіть конкретний rejestr або тип справи всередині Krajowy zbiór, а не лише загальну назву системи.",
    },
  ],
})
