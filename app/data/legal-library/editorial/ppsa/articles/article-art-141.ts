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
      provisionId: "ppsa-art-141",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Uzasadnienie wyroku складається з urzędu протягом чотирнадцяти днів у випадках ${ppsaLaw.article("141", "§ 1")}; коли skarga oddalono, його готують за wniosek, поданий протягом семи днів від оголошення або doręczenie odpisu sentencji, і протягом чотирнадцяти днів від wniosek. У складній справі строк можна продовжити максимум на тридцять днів; uzasadnienie має містити стан справи, zarzuty, позиції сторін, правову підставу, її пояснення та, при повторному розгляді органом, вказівки щодо подальшого провадження.`,
          sourceLocator: "Art. 141 § 1–4",
        },
      ],
      summary:
        "Стаття розрізняє uzasadnienie з urzędu та за wniosek і визначає строки та мінімальний зміст мотивів wyrok.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Спершу встановіть, чи uzasadnienie складається з urzędu, чи skarga була oddalona і потрібен wniosek у семиденний строк.",
        },
        {
          locator: "§ 2a–3",
          explanation:
            "Для складної справи можливе обмежене продовження; odmowa sporządzenia uzasadnienia оформлюється postanowieniem на posiedzenie niejawnym.",
        },
        {
          locator: "§ 4",
          explanation:
            "Читайте, чи мотиви охоплюють факти, zarzuty, stanowiska, правову підставу та вказівки для органу, якщо справа повертається.",
        },
      ],
      legalEffect:
        "Uzasadnienie пояснює rozstrzygnięcie і може містити вказівки для подальшого провадження; строки для wniosek треба відраховувати від події, названої статтею.",
      foreignersCase:
        "У спорі про pobyt, де skarga oddalono, не пропустіть семиденний wniosek про uzasadnienie. Після отримання мотивів зіставте їх із zarzuty та вказівками про подальший шлях.",
    },
  ],
})
