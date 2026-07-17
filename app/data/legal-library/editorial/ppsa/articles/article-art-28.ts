import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-28",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 28 § 1 встановлює: «Osoby prawne oraz jednostki organizacyjne mające zdolność sądową dokonują czynności w postępowaniu przez organy albo osoby uprawnione do działania w ich imieniu».",
          sourceLocator: "Art. 28 § 1",
        },
      ],
      summary:
        "Юридичні особи та організаційні одиниці зі zdolność sądowa виконують процесуальні дії через органи або осіб, уповноважених діяти від їхнього імені; стаття окремо розподіляє представництво Skarb Państwa, визначених органів через Prokuratoria та konsul.",
      rules: [
        {
          locator: "Art. 28 § 1",
          explanation:
            "Дію від імені osoby prawnej або jednostki organizacyjnej виконує її organ чи інша уповноважена osoba.",
        },
        {
          locator: "Art. 28 § 2–3a",
          explanation:
            "За Skarb Państwa діє organ jednostki, з діяльністю якого пов’язана справа, або organ jednostki nadrzędnej. У межах окремого закону за organs administracji rządowej, державні організаційні одиниці без osobowość prawna та Skarb Państwa діє Prokuratoria; у такому випадку sąd може повідомити її про провадження, якщо предмет справи може вимагати захисту важливих прав або інтересів Rzeczypospolitej Polskiej.",
        },
        {
          locator: "Art. 28 § 4",
          explanation:
            "За konsul czynności w postępowaniu виконує міністр, відповідальний за закордонні справи.",
        },
      ],
      legalEffect:
        "Стаття визначає представницький канал для організацій і певних публічних суб’єктів; конкретне уповноваження треба підтвердити окремо.",
      foreignersCase:
        "У справі іноземця перевірте, хто саме підписав pismo від імені роботодавця, органу або іншої організації, і чи випливає його umocowanie з Art. 28 та документів.",
    },
  ]),
})
