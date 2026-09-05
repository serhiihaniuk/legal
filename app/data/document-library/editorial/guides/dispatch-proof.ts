import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
const guide: DocumentGuide = {
  id: "dispatch-proof",
  title: "Доказ відправлення або подання",
  category: "evidence",
  aliases: [],
  description:
    "Potwierdzenie nadania, підтвердження електронного подання або відмітка канцелярії пов’язують пакет із конкретною подією відправлення чи прийняття.",
  preparedBy:
    "Створює відповідний оператор, електронний сервіс або орган, який приймає пакет.",
  purpose: ["Допомагає встановити дату, канал і адресата подання."],
  doesNotProve: [
    "Поштова квитанція сама по собі не підтверджує зміст конверта. Звичайний e-mail не слід автоматично прирівнювати до належного подання.",
  ],
  keyChecks: [
    "Звірте адресата, дату, номер відправлення та допустимість каналу.",
    "Зберігайте копію саме відправленого пакета і перелік додатків.",
    "Відрізняйте відправлення своєї відповіді від вручення вам wezwania.",
  ],
  legalBasis: [
    {
      kind: "authored-legal-text",
      plainText: "Art. 57 KPA",
      parts: [
        {
          text: "Art. 57 KPA",
          target: {
            kind: "legal-provision",
            documentId: "kpa",
            provisionId: "kpa-art-57",
          },
        },
      ],
    },
    {
      kind: "authored-legal-text",
      plainText: "Art. 63 KPA",
      parts: [
        {
          text: "Art. 63 KPA",
          target: {
            kind: "legal-provision",
            documentId: "kpa",
            provisionId: "kpa-art-63",
          },
        },
      ],
    },
  ],
  sources: [
    {
      label: "Kodeks postępowania administracyjnego",
      url: "https://eli.gov.pl/eli/DU/2025/1691/ogl",
      note: "Офіційне джерело для перевірки форми й застосування.",
    },
  ],
  verifiedAt: "2026-09-05",
  relatedDocuments: [
    "upo",
    "delivery-proof",
    "response-letter",
    "case-file-index",
  ],
  explanation: [
    {
      id: "connect-receipt",
      title: "Як пов’язати квитанцію з пакетом",
      paragraphs: [
        "Поряд із квитанцією зберігайте підписану відповідь і фактично надіслані вкладення. Для електронного подання збережіть підтвердження сервісу та дані, що ідентифікують пакет.",
        "Дотримання строку перевіряють за правилами для конкретного каналу. Дата на власній чернетці не доводить ні відправлення, ні надходження до органу.",
      ],
    },
  ],
}
export const dispatchProofDocumentTopic = defineDocumentTopic(guide)
export default dispatchProofDocumentTopic
