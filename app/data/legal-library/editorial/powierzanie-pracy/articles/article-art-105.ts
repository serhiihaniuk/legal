import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-105",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 105 встановлює, що до проваджень про видачу візи для цілей з art. 60 ust. 1 pkt 5–6, розпочатих і не завершених до 1 червня 2025 року, застосовуються попередні норми.",
          sourceLocator: "Art. 105",
        },
        {
          kind: "practical-inference",
          text: "Для вибору режиму треба перевірити, коли було відкрито візове провадження і чи залишалося воно незавершеним на 1 червня 2025 року. Це перехідне правило не регулює нові заяви.",
          sourceLocator: "Art. 105",
        },
      ],
      summary:
        "Стаття залишає старі правила для незавершених на момент переходу візових проваджень щодо робочих цілей.",
      rules: [
        {
          locator: "Art. 105",
          explanation:
            "Охоплюються лише справи про видачу візи для цілей, названих у art. 60 ust. 1 pkt 5–6 закону «ustawa o cudzoziemcach».",
        },
        {
          locator: "Art. 105",
          explanation:
            "Провадження має бути відкрито до 1 червня 2025 року і не завершено до цього дня. Тоді застосовуються попередні норми, навіть якщо рішення буде видано вже після переходу.",
        },
      ],
      legalEffect:
        "Стаття визначає перехідний режим розгляду візової справи. Вона не продовжує візи, не легалізує перебування і не надає самостійного права на роботу.",
      foreignersCase:
        "Перевірте підтвердження дати відкриття провадження, вид і мету візи та дату завершення справи. Після цього окремо оцініть строк законного перебування і підставу доступу до роботи, оскільки візове провадження саме по собі їх не створює.",
    },
  ]),
})
