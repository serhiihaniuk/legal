import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")

const RODO_URL = "https://eur-lex.europa.eu/eli/reg/2016/679/oj"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "236",
      provisionId: "kpa-art-236",
      reviewStatus: "reviewed",
      summary:
        "Стаття визначає компетентний орган для skarg, що перетворюються на індивідуальне або надзвичайне провадження, та регулює захист особи, яка повідомила інформацію. В окремих випадках джерело даних не розкривається стороні без згоди скаржника.",
      rules: [
        {
          locator: "§ 1",
          explanation: kpaLaw.text`Для ${kpaLaw.articleRange("233", "234", { start: "art. 233", end: "234" })} właściwy є орган, уповноважений відкрити або вже вести справу; для ${kpaLaw.article("235", "art. 235")} — орган, компетентний у відповідному режимі wznowienia, nieważności, uchylenia чи zmiany.`,
        },
        {
          locator: "§ 2",
          explanation: kpaLaw.text`Коли провадження почалося через skargę сторонньої особи, до сторони й учасника не застосовується право доступу з ${kpaLaw.external("art. 15 RODO", RODO_URL)} ust. 1 lit. g RODO щодо джерела даних у передбаченому обсязі.`,
        },
        {
          locator: "§ 3",
          explanation:
            "Скаржник може на будь-якій стадії дозволити органу розкрити його дані стороні.",
        },
      ],
      legalEffect:
        "Справу веде орган відповідного процесуального режиму, а ідентичність скаржника захищається, доки він не погодиться на розкриття.",
      foreignersCase: kpaLaw.text`Якщо справу іноземця відкрито або переглядають через інформацію третьої особи, орган може використати матеріал, не розкриваючи джерело за правилами ${kpaLaw.article("236", "§ 2")}. Це не скасовує інших прав сторони на участь у провадженні.`,
    },
  ],
})
