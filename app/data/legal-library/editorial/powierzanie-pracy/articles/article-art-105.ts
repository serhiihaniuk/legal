import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-105",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 105 встановлює, що до проваджень про wydanie wizy для цілей з art. 60 ust. 1 pkt 5–6, розпочатих і не завершених до набрання чинності новою ustawy, застосовуються dotychczasowe przepisy.",
          sourceLocator: "Art. 105",
        },
        {
          kind: "practical-inference",
          text: "Для вибору режиму треба перевірити, коли провадження про wiza було wszczęte і чи воно залишалося незавершеним на дату набрання чинності; це перехідне правило не регулює нові заяви.",
          sourceLocator: "Art. 105",
        },
      ],
      summary:
        "Стаття залишає старі правила для незавершених на момент переходу візових проваджень щодо робочих цілей.",
      rules: [
        {
          locator: "Art. 105",
          explanation:
            "Охоплюються лише справи про wiza для цілей art. 60 ust. 1 pkt 5–6.",
        },
        {
          locator: "Art. 105",
          explanation:
            "Провадження має бути wszczęte до набрання чинності новою ustawy і не завершене до цього дня. Тоді застосовуються dotychczasowe przepisy, а не новий режим лише через подальшу дату рішення.",
        },
      ],
      legalEffect:
        "Стаття визначає перехідний режим розгляду візової справи. Вона не продовжує візу, не легалізує pobyt і не надає самостійного права на роботу.",
      foreignersCase:
        "Перевірте підтвердження дати wszczęcia, вид і cel wizy та дату завершення справи. Після цього окремо оцініть строк legalnego pobytu і підставу доступу до роботи, оскільки візове провадження саме по собі їх не створює.",
    },
  ]),
})
