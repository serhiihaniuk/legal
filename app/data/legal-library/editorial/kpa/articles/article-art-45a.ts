import { createLegalTextAuthor } from "../../../legal-text"
import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "45a",
      provisionId: "kpa-art-45a",
      reviewStatus: "reviewed",
      summary:
        "Стаття встановлює спеціальний порядок doręczenia організації, коли її адреса не існує, викреслена або не відповідає реєстру і нову siedzibę неможливо встановити.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Письмо вручається фізичній особі, уповноваженій представляти адресата; при łącznej reprezentacji — усім таким особам, а skutkiem є найраніше вручення одній із них.",
        },
        {
          locator: "§ 3–4",
          explanation:
            "Якщо адресу представника також неможливо встановити, письмо залишається в актах зі skutkiem doręczenia в день складання відповідної adnotacji.",
        },
        {
          locator: "§ 5",
          explanation:
            "Organ повинен невідкладно скласти і зберегти в актах adnotację про неможливість встановити адресу представника.",
        },
      ],
      legalEffect: kpaLaw.text`Неналежна реєстрова адреса організації може завершитися врученням без фактичного отримання після виконання спеціальної процедури. Стаття діє з 13 липня 2025 року. За ${kpaLaw.external("art. 31 ust. 1 ustawy zmieniającej, Dz.U. 2025 poz. 769", "https://eli.gov.pl/api/acts/DU/2025/769/text/O/D20250769.pdf")} до справ, розпочатих і не завершених до цієї дати, застосовують попередню редакцію KPA.`,
      foreignersCase:
        "Якщо компанія-роботодавець є адресатом у пов’язаному провадженні, актуальність її реєстрової адреси та адрес представників впливає на skutek doręczenia.",
    },
  ],
})
