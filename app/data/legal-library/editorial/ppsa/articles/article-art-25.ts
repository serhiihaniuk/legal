import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-25",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 25 § 1 встановлює: «Osoba fizyczna, osoba prawna lub organ administracji publicznej mają zdolność występowania przed sądem administracyjnym jako strona (zdolność sądowa)».",
          sourceLocator: "Art. 25 § 1",
        },
      ],
      summary:
        "Стаття визначає zdolność sądową — можливість виступати стороною перед sądem administracyjnym — для фізичних і юридичних осіб, органів administracji publicznej та інших прямо названих організацій.",
      rules: [
        {
          locator: "Art. 25 § 1–2",
          explanation:
            "Zdolność sądowa мають osoba fizyczna, osoba prawna, organ administracji publicznej та державні, самоврядні й соціальні організаційні одиниці без osobowość prawna.",
        },
        {
          locator: "Art. 25 § 3",
          explanation:
            "Інші одиниці без osobowość prawna мають zdolność sądową, якщо право допускає щодо них обов’язки, uprawnienia, nakazy, zakazy або визнання права чи обов’язку.",
        },
        {
          locator: "Art. 25 § 4",
          explanation:
            "Organizacja społeczna без osobowość prawna також має zdolność sądową у межах statutowa діяльності щодо правових інтересів інших осіб.",
        },
      ],
      legalEffect:
        "Стаття встановлює здатність бути стороною, але не доводить законність вимоги та не замінює перевірку фактичної właściwość.",
      foreignersCase:
        "Іноземець як osoba fizyczna може бути стороною за умовами цієї норми; окремо перевірте, хто підписує процесуальне pismo і чи має ця особа zdolność procesowa.",
    },
  ]),
})
