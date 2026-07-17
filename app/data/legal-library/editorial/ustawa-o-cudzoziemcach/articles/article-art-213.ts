import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-213",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("213", "Art. 213")} вимагає odmowy wszczęcia postępowania про pobyt rezydenta długoterminowego UE, якщо на день wniosku cudzoziemiec перебуває нелегально або на названій візі, для навчання чи szkolenie, очікує навчання, має гуманітарний, tolerowany, azyl, ochronę czasową або просить захист, користується ICT/іншим переліченим дозволом чи малим прикордонним рухом.`,
          sourceLocator: "Art. 213 ust. 1 pkt 1 lit. a–h",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Також перешкодами є транскордонний працівник або usługodawca, затримання, strzeżony ośrodek, zakaz opuszczania kraju, позбавлення волі, незавершений dobrowolny wyjazd після рішення про powrót, обов’язок виїхати за ${foreignersLaw.article("299", "art. 299")} ust. 6, перебування поза Польщею та неподання відбитків у строк ${foreignersLaw.article("219", "art. 219")} ust. 6.`,
          sourceLocator: "Art. 213 ust. 1 pkt 2–7, ust. 2",
        },
      ],
      summary:
        "Стаття визначає обставини, за яких заява на статус rezydent długoterminowy UE не переходить до розгляду по суті.",
      rules: [
        {
          locator: "ust. 1 pkt 1",
          explanation:
            "Вид поточного pobyt на день wniosku має вирішальне значення; перелік навчальних, захисних, ICT та прикордонних підстав є конкретним.",
        },
        {
          locator: "ust. 1 pkt 2–7",
          explanation:
            "Процесуальні та поворотні обставини також перешкоджають wszczęcie, навіть якщо заявник накопичив певний попередній стаж.",
        },
        {
          locator: "ust. 2",
          explanation: foreignersLaw.text`Неподання odcisków linii papilarnych під час wniosku або у строк ${foreignersLaw.article("219", "art. 219")} ust. 6 є окремою підставою odmowa wszczęcia.`,
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("213", "Art. 213")} відрізняється від відмови у наданні статусу за ${foreignersLaw.article("214", "Art. 214")}: йдеться про недопустимість початку провадження за наявної обставини.`,
      foreignersCase:
        "На дату wniosku підтвердьте вид і чинність поточного pobyt, відсутність поворотних перешкод та виконання вимоги щодо відбитків; у документі органу перевірте правильність стадії odmowa.",
    },
  ],
})
