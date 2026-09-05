import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
import { foreignersLaw } from "../authoring"

const guide: DocumentGuide = {
  id: "study-confirmation",
  title: "Zaświadczenie про прийняття або продовження навчання",
  category: "education",
  kind: "document",
  aliases: [],
  description:
    "Документ закладу освіти показує конкретне навчання, на якому ґрунтується заява. Його читають за програмою, формою та періодом, а не лише за словом «student».",
  preparedBy:
    "Заклад освіти, у якому заявник навчається або до якого його прийнято.",
  purpose: ["Підтверджує прийняття або продовження визначеного навчання."],
  doesNotProve: [
    "Не замінює підтверджень коштів, оплати, страхування або прогресу, якщо вони потрібні у справі.",
  ],
  keyChecks: [
    "Дані особи, назва програми та період актуальні.",
    "Форма навчання відповідає обраній підставі.",
    "Використано належну форму zaświadczenia; лист про зацікавленість не прирівняно до прийняття.",
  ],
  relatedDocuments: [
    "tuition-payment",
    "study-progress",
    "health-insurance",
    "income-evidence",
  ],
  sources: [
    {
      label: "Podlaski UW: навчання",
      url: "https://www.gov.pl/web/uw-podlaski/studia",
      note: "Документи щодо навчання, оплати, коштів та страхування.",
    },
  ],
  verifiedAt: "2026-09-05",
  explanation: [
    {
      id: "read-program",
      title: "Чому назви закладу недостатньо",
      paragraphs: [
        "У тому самому закладі можуть бути різні форми навчання. Документ має дозволити встановити, на яку програму прийнято саме цього заявника. Якщо форму або період неможливо визначити, працівник запитує уточнене zaświadczenie замість власного припущення.",
      ],
    },
  ],
  legalBasis: [
    foreignersLaw.text`${foreignersLaw.article("144")}: Визначає навчальну підставу та вимогу підтвердження навчання.`,
  ],
}

export const studyConfirmationDocumentTopic = defineDocumentTopic(guide)
export default studyConfirmationDocumentTopic
