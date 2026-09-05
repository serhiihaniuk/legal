import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
const guide: DocumentGuide = {
  id: "blue-card-annex",
  title: "Додаток про кваліфікації для Blue Card",
  category: "procedure",
  aliases: [],
  description:
    "Окрема форма, у якій заявник описує кваліфікації та, якщо це його маршрут, попередню мобільність власника Niebieskiej Karty UE.",
  preparedBy: "Заповнює заявник; електронний підпис і подання через MOS.",
  purpose: [
    "Поєднує заявлену кваліфікацію з видом професії та документами про освіту або досвід.",
  ],
  doesNotProve: [
    "Запис у формі не замінює диплом, доказ досвіду або визнання кваліфікацій для регульованої професії.",
  ],
  keyChecks: [
    "Зіставте опис кваліфікацій із посадою в договорі.",
    "Заповнюйте блок мобільності лише за відповідних фактів.",
    "Перевірте також окремий додаток роботодавця.",
  ],
  legalBasis: [
    {
      kind: "authored-legal-text",
      plainText: "Офіційний взірець: додаток 3 до розпорядження",
      parts: [
        {
          text: "Офіційний взірець: додаток 3 до розпорядження",
          target: {
            kind: "legal-provision",
            documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
            provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-3",
          },
        },
      ],
    },
    {
      kind: "authored-legal-text",
      plainText: "Art. 106 ustawy o cudzoziemcach",
      parts: [
        {
          text: "Art. 106 ustawy o cudzoziemcach",
          target: {
            kind: "legal-provision",
            documentId: "ustawa-o-cudzoziemcach",
            provisionId: "ustawa-o-cudzoziemcach-art-106",
          },
        },
      ],
    },
  ],
  sources: [
    {
      label: "Форми pobytu czasowego, Dz.U. 2026 poz. 553",
      url: "https://eli.gov.pl/eli/DU/2026/553/ogl",
      note: "Офіційне джерело для перевірки форми й застосування.",
    },
  ],
  verifiedAt: "2026-09-05",
  relatedDocuments: [
    "employment-annex-1",
    "qualification-evidence",
    "employment-contract",
  ],
  explanation: [
    {
      id: "read-form",
      title: "Як працювати з формою",
      paragraphs: [
        "На самій формі стоїть номер 2 як додатка до заяви. У розпорядженні її опубліковано під номером 3. Додаток роботодавця та цей додаток заявника мають різних авторів і різний зміст.",
        "Диплом показує освіту, а опис посади пояснює, чому ця освіта або досвід потрібні для конкретної роботи. У формі цей зв’язок треба сформулювати, а підтвердні матеріали подати окремо.",
      ],
    },
  ],
}
export const blueCardAnnexDocumentTopic = defineDocumentTopic(guide)
export default blueCardAnnexDocumentTopic
