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
      provisionId: "ppsa-art-245",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("245", "Art. 245 § 1–4")} передбачає, що prawo pomocy може бути całkowite або częściowe; całkowite охоплює zwolnienie od kosztów sądowych та ustanowienie професійного представника, а częściowe — окремі або спільні opłaty, wydatki чи представника, причому zwolnienie від opłat або wydatków може бути часткою або визначеною сумою.`,
          sourceLocator: "Art. 245 § 1–4",
        },
      ],
      summary:
        "Prawo pomocy має повний або частковий обсяг: часткове рішення може стосуватися лише opłat, лише wydatków, обох або тільки ustanowienie представника.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Знайдіть у postanowienie, чи prawo pomocy є całkowite, і тоді перевірте обидва його компоненти — koszty та представника.",
        },
        {
          locator: "§ 3",
          explanation:
            "Для częściowe встановіть, що саме звільнено: opłaty, wydatki, обидва або лише ustanowienie професійного представника.",
        },
        {
          locator: "§ 4",
          explanation:
            "Часткове zwolnienie від opłat або wydatki може бути визначене часткою або конкретною kwota pieniężna; перевірте точне формулювання рішення.",
        },
      ],
      legalEffect:
        "Обсяг права допомоги визначається категорією та точним змістом postanowienie; часткове prawo pomocy не звільняє автоматично від усіх koszty.",
      foreignersCase:
        "У справі іноземця про pobyt перепишіть із postanowienie конкретний zakres prawa pomocy: загальна згадка про «pomoc» не відповідає на питання про wpis, wydatki чи pełnomocnik.",
    },
  ],
})
