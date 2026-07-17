import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "74",
      provisionId: "kpa-art-74",
      reviewStatus: "reviewed",
      summary:
        "Стаття обмежує доступ до матеріалів із klauzulą tajności та до матеріалів, виключених через важливий державний інтерес, і встановлює форму відмови.",
      rules: [
        {
          locator: "§ 1",
          explanation: kpaLaw.text`Правила ${kpaLaw.article("73", "art. 73")} не застосовуються до akt із klauzulą tajności „tajne” або „ściśle tajne” та до інших матеріалів, виключених ze względu na ważny interes państwowy.`,
        },
        {
          locator: "§ 2",
          explanation:
            "Відмова в доступі, sporządzaniu копій або uwierzytelnieniu оформлюється postanowieniem, на яке przysługuje zażalenie.",
        },
      ],
      legalEffect:
        "Виключення з доступу має спиратися на передбачену законом підставу, а формальна відмова може бути оскаржена.",
      foreignersCase:
        "Якщо іноземцю відмовляють у доступі до частини akt, треба отримати postanowienie і перевірити вказану підставу та можливість zażalenia.",
    },
  ],
})
