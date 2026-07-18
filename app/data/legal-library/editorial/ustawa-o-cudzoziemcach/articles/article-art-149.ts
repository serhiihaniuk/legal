import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-149",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("149", "Art. 149")} вимагає вести навчальне провадження з урахуванням дати початку навчання, повідомляє rektor або kierownik про наданий дозвіл і покладає на заклад обов’язок повідомити про skreślenie.`,
          sourceLocator: "Art. 149 ust. 1–3",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Wojewoda щороку перевіряє дані осіб із дозволами ${foreignersLaw.article("144", "art. 144")} ust. 1 або 3 у відповідних wykaz у період безпосередньо після 1 березня та 1 жовтня.`,
          sourceLocator: "Art. 149 ust. 4–5",
        },
      ],
      summary:
        "Стаття поєднує своєчасність навчального провадження, повідомлення закладу та періодичну перевірку студентських реєстрів.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "При розгляді заяви враховується передбачена програмою дата початку навчання.",
        },
        {
          locator: "ust. 1a–1b",
          explanation:
            "Ці положення позначені як «(uchylony)» і не створюють чинних обов’язків.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Wojewoda повідомляє rektor або kierownik про udzielenie дозволу, а заклад невідкладно письмово повідомляє про skreślenie cudzoziemiec.",
        },
        {
          locator: "ust. 4–5",
          explanation:
            "Wojewoda перевіряє дані в wykaz щороку після 1 березня і 1 жовтня; якщо дозвіл надав Szef Urzędu у другій інстанції, перевірку проводить wojewoda першої інстанції.",
        },
      ],
      legalEffect:
        "Обов’язки повідомлення і перевірки дають органу актуальні дані про навчальний статус, але самі по собі не є рішенням про cofnięcie дозволу.",
      foreignersCase:
        "Зафіксуйте дату початку навчання, повідомлення про udzielenie або skreślenie і результат перевірки wykaz. Відокремлюйте обов’язок закладу від процесуального рішення органу.",
    },
  ],
})
