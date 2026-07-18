import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "163",
      provisionId: "kpa-art-163",
      reviewStatus: "reviewed",
      summary:
        "Стаття відсилає до спеціальних законів, які можуть передбачити інші випадки та правила зміни або скасування рішення, що створює право. Сама вона не називає окремої матеріальної підстави.",
      rules: [
        {
          locator: "одне речення",
          explanation:
            "Інші випадки uchylenia або zmiany decyzji, на підставі якої сторона набула право, можуть бути встановлені лише спеціальними нормами.",
        },
      ],
      legalEffect: kpaLaw.text`Орган може застосувати спеціальний режим лише разом із конкретною нормою lex specialis; одного ${kpaLaw.article("163", "art. 163")} недостатньо.`,
      foreignersCase: kpaLaw.text`У sprawie cudzoziemca потрібно знайти конкретний припис ustawy o cudzoziemcach, який дозволяє cofnięcie, zmianę або uchylenie дозволу. ${kpaLaw.article("163", "Art. 163")} лише визнає можливість такого спеціального регулювання.`,
    },
  ],
})
