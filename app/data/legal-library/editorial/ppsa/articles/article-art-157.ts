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
      provisionId: "ppsa-art-157",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Сторона може протягом чотирнадцяти днів від doręczenie wyroku, складеного з urzędu, або від ogłoszenie, якщо його не вручають, подати wniosek про uzupełnienie, коли суд не вирішив усю skarga або не включив належне додаткове рішення; прострочений wniosek відхиляється, а доповнення оформлюється wyrokiem, крім випадку лише витрат.",
          sourceLocator: "Art. 157 § 1–3",
        },
      ],
      summary:
        "Норма дає короткий строк для uzupełnienie wyroku при пропущеному обсязі skarga чи обов’язковому додатковому рішенні.",
      rules: [
        {
          locator: "§ 1–1a",
          explanation:
            "Відраховуйте чотирнадцять днів від події, визначеної нормою; прострочений wniosek підлягає odrzucenie.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Питання kosztów може розглядатися окремо на posiedzenie niejawnym; форма доповнення залежить від того, чи йдеться лише про витрати.",
        },
      ],
      legalEffect:
        "Uzupełnienie виправляє неповноту вирішення в межах, названих статтею, але не є загальним способом повторно оскаржити зміст wyrok.",
      foreignersCase: ppsaLaw.text`Після wyrok у справі про pobyt звірте всі вимоги skarga із sentencja. Якщо суд не вирішив частину, окремо перевірте чотирнадцятиденний wniosek; ${ppsaLaw.article("159", "art. 159")} визначає його вплив на строк оскарження.`,
    },
  ],
})
