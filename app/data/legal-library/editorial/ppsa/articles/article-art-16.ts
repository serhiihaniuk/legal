import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-16",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 16 § 1 встановлює: «Sąd administracyjny orzeka w składzie trzech sędziów, z zastrzeżeniem § 2 i 3, chyba że ustawa stanowi inaczej».",
          sourceLocator: "Art. 16 § 1",
        },
      ],
      summary:
        "Загальним складом sądu administracyjnego є три судді, але стаття передбачає окремі правила для posiedzenie niejawne та zarządzenia поза rozprawą.",
      rules: [
        {
          locator: "Art. 16 § 1",
          explanation:
            "Суд постановляє рішення у складі трьох суддів, якщо інше не випливає з винятків у тексті або іншого припису закону.",
        },
        {
          locator: "Art. 16 § 2",
          explanation:
            "На posiedzeniu niejawnym суддя діє одноособово, якщо закон не встановлює інакше.",
        },
        {
          locator: "Art. 16 § 3",
          explanation: "Zarządzenia поза rozprawą видає przewodniczący.",
        },
      ],
      legalEffect:
        "Стаття регулює склад і вид процесуальної дії, але сама по собі не визначає зміст рішення у справі.",
      foreignersCase:
        "У матеріалах справи іноземця звірте, чи йдеться про rozprawa, posiedzenie niejawne або zarządzenie, і який склад зазначений судом; не робіть висновок про законність лише за кількістю суддів.",
    },
  ]),
})
