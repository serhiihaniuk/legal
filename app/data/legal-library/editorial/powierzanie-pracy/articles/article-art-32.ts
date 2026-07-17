import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-32",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("32", "Art. 32")} визначає, що zezwolenie для роботи на користь polski podmiot містить дані podmiot і cudzoziemiec, stanowisko або rodzaj pracy, wymiar czasu pracy, найнижче wynagrodzenie, rodzaj umowy та okres ważności. Якщо робота є tymczasowa, у дозволі також зазначається pracodawca użytkownik.`,
          sourceLocator: "Art. 32 ust. 1 pkt 1–7 і ust. 2",
        },
      ],
      summary:
        "Zezwolenie фіксує конкретні межі роботи: хто, де за роллю, скільки часу, за яку мінімальну оплату, на якій umowa і до якої дати. Для працівника tymczasowy важливий також pracodawca użytkownik.",
      rules: [
        {
          locator: "ust. 1 pkt 1–2",
          explanation: workLaw.text`У документі зазначаються ідентифікаційні дані polski podmiot та cudzoziemiec за ${workLaw.external("art. 9¹", "https://eli.gov.pl/eli/DU/2025/277/ogl")}.`,
        },
        {
          locator: "ust. 1 pkt 3–7",
          explanation:
            "Перевірте stanowisko або rodzaj pracy, wymiar часу, найнижче wynagrodzenie, rodzaj umowy та строк чинності.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Для pracy tymczasowej дозвіл має називати pracodawca użytkownik, а не лише agencja чи інший podmiot.",
        },
      ],
      legalEffect:
        "Документ визначає межі uprawnienie do pracy, але не є рішенням про legalny pobyt. Чинний pobyt сам по собі не дозволяє ігнорувати записані в zezwolenie умови.",
      foreignersCase:
        "Зіставте рішення з umowa та фактичними stanowisko, часом, оплатою й pracodawca użytkownik. Окремо перевірте строк і підставу legalnego pobytu.",
    },
  ],
})
