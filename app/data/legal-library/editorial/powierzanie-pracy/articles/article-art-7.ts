import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const kpaLaw = createLegalTextAuthor("kpa")

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-7",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("7", "Art. 7")} передбачає, що дозвіл на роботу видають, відмову в його видачі постановляють і чинний дозвіл скасовують у формі адміністративного рішення («decyzja administracyjna»). Місцеву компетенцію визначають на день подання заяви, органом вищого ступеня є міністр, відповідальний за питання праці, а ${kpaLaw.article("37", "ст. 37")} KPA не застосовується у справах про дозволи, названих у ${workLaw.article("26", "ст. 26")}, ${workLaw.article("35", "35")}, ${workLaw.article("40", "40")} і ${workLaw.article("45", "45")}.`,
          sourceLocator: "Art. 7 ust. 1–4",
        },
      ],
      summary: workLaw.text`Стаття визначає процесуальну форму актів у справі дозволу на роботу та момент, на який встановлюють місцеву компетенцію. Вона також називає орган вищого ступеня й обмежує застосування ${kpaLaw.article("37", "ст. 37")} KPA в чітко перелічених категоріях справ.`,
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Видача дозволу, відмова в його видачі та скасування відбуваються у формі адміністративного рішення, а не звичайного листа чи внутрішньої нотатки.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Місцеву компетенцію визначають за станом на день подання заяви. У справах про дозволи органом вищого ступеня за KPA є міністр, відповідальний за питання праці.",
        },
        {
          locator: "ust. 4",
          explanation: workLaw.text`У справах про дозволи, зазначених у ${workLaw.article("26", "ст. 26")}, ${workLaw.article("35", "35")}, ${workLaw.article("40", "40")} і ${workLaw.article("45", "45")}, не застосовується ${kpaLaw.article("37", "ст. 37")} KPA про скаргу на бездіяльність або затягування («ponaglenie»). Це спеціальне виключення не поширюється автоматично на кожну справу за цим законом.`,
        },
      ],
      legalEffect: workLaw.text`Рішення за ${workLaw.article("7", "ст. 7")} стосується дозволу на роботу. Воно не є рішенням про законність перебування, тому підставу перебування та право на роботу треба перевіряти за відповідними документами.`,
      foreignersCase:
        "Збережіть заяву з датою подання та отримане адміністративне рішення. У разі оскарження встановіть вид дозволу й належний орган вищого ступеня. Не ототожнюйте рішення про дозвіл на роботу з документом про перебування.",
    },
  ],
})
