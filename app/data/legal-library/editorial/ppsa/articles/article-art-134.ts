import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-134",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Sąd розглядає справу в її межах, але не пов’язаний zarzutami, wnioskami skargi або зазначеною правовою підставою, із застереженням ${ppsaLaw.article("57a", "art. 57a")}; суд не може постановити на шкоду skarżący, крім виявлення порушення, що веде до stwierdzenie nieważności.`,
          sourceLocator: "Art. 134 § 1–2",
        },
      ],
      summary:
        "Суд має оцінювати справу в межах предмета skargi, а не лише за формулюванням її zarzuty, водночас діє правило заборони погіршення становища skarżący з прямо названим винятком.",
      rules: [
        {
          locator: "§ 1",
          explanation: ppsaLaw.text`Предмет справи і зміст skarga важливіші за помилково названу підставу, але треба врахувати спеціальне застереження ${ppsaLaw.article("57a", "art. 57a")}.`,
        },
        {
          locator: "§ 2",
          explanation:
            "Заборона рішення на шкоду skarżący не є абсолютною, якщо суд бачить підставу для stwierdzenie nieważności.",
        },
      ],
      legalEffect:
        "Стаття розширює юридичну оцінку суду в межах справи, але не перетворює skarga на необмежений перегляд будь-яких питань.",
      foreignersCase: ppsaLaw.text`У скарзі на decyzja щодо pobyt чітко окресліть предмет оскарження, але не покладайтеся лише на назву zarzut. Пам’ятайте про окреме правило ${ppsaLaw.article("57a", "art. 57a")} та виняток щодо nieważność.`,
    },
  ],
})
