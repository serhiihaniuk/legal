import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-224",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("224", "Art. 224")} przewiduje, że jeżeli sąd nie orzekł o obowiązku ponoszenia kosztów sądowych albo nie objął orzeczeniem całej należnej kwoty, postanowienie w tym przedmiocie wydaje na posiedzeniu niejawnym wojewódzki sąd administracyjny.`,
          sourceLocator: "Art. 224",
        },
      ],
      summary:
        "Коли суд не вирішив питання про обов’язок нести koszty sądowe або не охопив усю суму, WSA видає окреме postanowienie на posiedzeniu niejawnym.",
      rules: [
        {
          locator: "Art. 224",
          explanation:
            "Порівняйте кінцеве orzeczenie з питанням koszty sądowe: норма охоплює і повну відсутність рішення, і неохоплену частину належної суми.",
        },
      ],
      legalEffect:
        "Стаття дає WSA процесуальну форму для додаткового вирішення koszty sądowe, але не встановлює сама розмір або розподіл конкретних витрат.",
      foreignersCase:
        "У справі про pobyt перевірте не лише wyrok, а й окреме postanowienie WSA про koszty sądowe, якщо в основному рішенні це питання пропущено або вирішено не повністю.",
    },
  ],
})
