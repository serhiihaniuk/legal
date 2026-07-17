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
      provisionId: "ustawa-o-cudzoziemcach-art-148b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("148b", "Art. 148b")} зобов’язує орган у справі udzielenie або cofnięcie дозволу для studia перевірити дані cudzoziemiec у відповідному wykaz за ${foreignersLaw.external("art. 343a", "https://eli.gov.pl/eli/DU/2025/622/ogl")}, ${foreignersLaw.external("344", "https://eli.gov.pl/eli/DU/2024/1571/ogl")} або ${foreignersLaw.external("345", "https://eli.gov.pl/eli/DU/2024/1571/ogl")} Prawo o szkolnictwie wyższym i nauce.`,
          sourceLocator: "Art. 148b ust. 1",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Дані в цих wykaz вважаються правдивими, але презумпцію можна спростувати лише документом urzędowy, зокрема zaświadczenie з ${foreignersLaw.article("144", "art. 144")} ust. 1 pkt 1 lit. a.`,
          sourceLocator: "Art. 148b ust. 2",
        },
      ],
      summary:
        "Для навчальної справи офіційні реєстри мають доказову презумпцію, яку не можна спростувати простим листом або усним поясненням.",
      rules: [
        {
          locator: "ust. 1 pkt 1–3",
          explanation:
            "Орган перевіряє відповідний wykaz прийнятих, студентів або осіб, які здобувають ступінь доктора.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Для спростування презумпції потрібен документ urzędowy; закон прямо називає zaświadczenie як приклад.",
        },
      ],
      legalEffect:
        "Запис у wykaz є вихідною доказовою підставою органу, а спростування має відповідати підвищеній вимозі статті.",
      foreignersCase:
        "Попросіть організувати перевірку конкретного wykaz і подайте документ urzędowy, якщо запис помилковий; не покладайтеся лише на приватний лист.",
    },
  ],
})
