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
      provisionId: "ustawa-o-cudzoziemcach-art-166b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("166b", "Art. 166b")} встановлює 30-денний строк для decyzja про permit w celu połączenia się z rodziną члена сім'ї osoby, яка живе в Польщі на дозволі довгострокової mobility posiadacza Niebieskiej Karty UE, та 60-денний строк для postępowanie odwoławcze; обчислення відсилається до ${foreignersLaw.article("112a", "art. 112a")}.`,
          sourceLocator: "Art. 166b ust. 1–2",
        },
      ],
      summary:
        "Для Blue Card family reunification діють спеціальні строки першої та апеляційної інстанції.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Рішення у справі члена сім'ї особи з permit на mobilność długoterminowa posiadacza Niebieskiej Karty UE видається протягом 30 днів; початок перебігу встановлюється за ${foreignersLaw.article("112a", "art. 112a")} ust. 2.`,
        },
        {
          locator: "ust. 2",
          explanation: foreignersLaw.text`Postępowanie odwoławcze у справі про połączenie się z rodziną завершується протягом 60 днів, із застосуванням ${foreignersLaw.article("112a", "art. 112a")} ust. 5.`,
        },
      ],
      legalEffect: foreignersLaw.text`Строк визначає процесуальний обов'язок органу, але не перетворює його сплив на автоматичне udzielenie permit; повний розрахунок залежить від правил ${foreignersLaw.article("112a", "art. 112a")}.`,
      foreignersCase:
        "Збережіть підтвердження повного подання, wezwanie про braki та всі рішення; рахуйте строк за спеціальним правилом, а не лише календарною різницею між датами.",
    },
  ],
})
