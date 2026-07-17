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
      provisionId: "ppsa-art-232",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("232", "Art. 232 § 1")} nakazuje sądowi z urzędu zwrócić cały uiszczony wpis od pisma odrzuconego lub cofniętego do dnia rozpoczęcia rozprawy oraz od zażalenia na postanowienie, jeżeli zażalenie uwzględniono; ${ppsaLaw.article("232", "§ 2")} допускає postanowienie про zwrot wpisу на posiedzeniu niejawnym.`,
          sourceLocator: "Art. 232 § 1–2",
        },
      ],
      summary:
        "У названих випадках суд повертає весь сплачений wpis з urzędu; для цього може бути винесено postanowienie без rozprawa.",
      rules: [
        {
          locator: "§ 1 pkt 1",
          explanation:
            "Перевірте, чи письмо odrzucono або cofnięto до дня початку rozprawa.",
        },
        {
          locator: "§ 1 pkt 2",
          explanation:
            "Для zażalenie підстава zwrot виникає, якщо його uwzględniono.",
        },
        {
          locator: "§ 2",
          explanation:
            "Окреме postanowienie про повернення wpis може бути видане на posiedzeniu niejawnym.",
        },
      ],
      legalEffect: ppsaLaw.text`Повернення за ${ppsaLaw.article("232", "Art. 232")} залежить від точної процесуальної події та її дати; сама сплата wpis не означає, що повернення належить у кожній справі.`,
      foreignersCase:
        "Якщо іноземець відкликав skargę або його zażalenie задоволено, зафіксуйте дату початку rozprawa та зміст orzeczenie перед очікуванням zwrot wpisу.",
    },
  ],
})
