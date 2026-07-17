import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const kpaLaw = createLegalTextAuthor("kpa")

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-7",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("7", "Art. 7")} передбачає, що zezwolenie na pracę видається, у його видачі відмовляють або його uchyla się у формі decyzja administracyjna; właściwość miejscowa визначається на день подання wniosek, органом вищого ступеня є minister właściwy do spraw pracy, а ${kpaLaw.article("37", "art. 37")} KPA не застосовується у справах дозволів, названих у ${workLaw.article("26", "art. 26")}, ${workLaw.article("35", "35")}, ${workLaw.article("40", "40")} і ${workLaw.article("45", "45")}.`,
          sourceLocator: "Art. 7 ust. 1–4",
        },
      ],
      summary: workLaw.text`Стаття визначає процесуальну форму рішень про zezwolenie та правило визначення місцевої компетенції. Вона також встановлює спеціальне правило щодо органу вищого ступеня й окреме обмеження застосування ${kpaLaw.article("37", "art. 37")} KPA.`,
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Видача, відмова та uchylenie zezwolenie відбуваються через decyzja administracyjna, а не просто лист або внутрішню нотатку.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Місцеву właściwość визначають за станом на день подання wniosek. Для справ про zezwolenie органом вищого ступеня за KPA є minister właściwy do spraw pracy.",
        },
        {
          locator: "ust. 4",
          explanation: workLaw.text`У справах про zezwolenie, зазначених у ${workLaw.article("26", "art. 26")}, ${workLaw.article("35", "35")}, ${workLaw.article("40", "40")} і ${workLaw.article("45", "45")}, не застосовується ${kpaLaw.article("37", "art. 37")} KPA; це спеціальне правило не поширюється автоматично на кожну справу за ustawy.`,
        },
      ],
      legalEffect: workLaw.text`Рішення за ${workLaw.article("7", "art. 7")} стосується дозволу на роботу. Воно не є окремим рішенням про legalny pobyt, тому чинність pobyt і uprawnienie do pracy треба перевіряти за відповідними документами.`,
      foreignersCase:
        "Збережіть wniosek із датою подання та отриману decyzja. У разі оскарження встановіть тип zezwolenie й відповідний organ wyższego stopnia; не ототожнюйте процесуальну decyzja з документом на pobyt.",
    },
  ],
})
