import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-87",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 87 є виконаною нормою про зміну закону «ustawa o Straży Granicznej». Вона замінила посилання на попередній закон про сприяння зайнятості посиланням на закон від 20 березня 2025 року та уточнила інше відсилання — до art. 14a закону «ustawa o skutkach powierzania wykonywania pracy cudzoziemcom przebywającym wbrew przepisom».",
          sourceLocator: "Art. 87 pkt 1–2",
        },
      ],
      summary:
        "Це норма про внесення змін (przepis zmieniający), яка узгодила відсилання в законі про Прикордонну службу після набрання чинності новим законом. Вона не є самостійним дозволом або підставою для роботи.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "В art. 1 ust. 2 pkt 4 lit. i закону про Прикордонну службу попереднє посилання замінено посиланням на закон від 20 березня 2025 року про умови допустимості доручення роботи іноземцям.",
        },
        {
          locator: "pkt 2",
          explanation:
            "В art. 10d ust. 23a посилання на art. 4 ust. 7 попереднього закону замінено посиланням на art. 14a pkt 1 закону про наслідки доручення роботи іноземцям, які перебувають усупереч приписам.",
        },
      ],
      legalEffect:
        "Зміна підтримує узгодженість посилань між актами. Актуальні повноваження Прикордонної служби (Straż Graniczna) треба перевіряти в чинному консолідованому тексті закону «ustawa o Straży Granicznej».",
      foreignersCase:
        "Якщо старий документ посилається на попередню назву закону, не робіть із цього висновку про відсутність повноваження. Перевірте актуальне формулювання закону про Прикордонну службу й конкретну норму, чинну на дату події.",
    },
  ]),
})
