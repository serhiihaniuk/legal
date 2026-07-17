import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "245",
      provisionId: "kpa-art-245",
      reviewStatus: "reviewed",
      summary:
        "Стаття регулює ситуацію, коли wniosek неможливо розглянути в місячний строк. У межах цього строку орган має повідомити про вже виконані дії та передбачуваний новий термін завершення.",
      rules: [
        {
          locator: "одне речення",
          explanation: kpaLaw.text`До спливу строку з ${kpaLaw.article("244", "art. 244")} орган повідомляє wnioskodawcę про czynności podjęte w celu rozpatrzenia та про przewidywany termin załatwienia.`,
        },
      ],
      legalEffect:
        "Затримка не може залишитися без пояснення: заявник отримує інформацію про перебіг і конкретний прогноз завершення.",
      foreignersCase:
        "Якщо організаційний wniosek щодо обслуговування іноземців потребує довшої роботи, urząd має надіслати таке повідомлення до спливу місяця.",
    },
  ],
})
