import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
import { foreignersLaw } from "../authoring"

const guide: DocumentGuide = {
  id: "housing-evidence",
  title: "Житло: umowa najmu, право користування і витрати",
  category: "evidence",
  kind: "evidence-set",
  aliases: [],
  description:
    "Документи про житло можуть показувати адресу, право користування приміщенням або витрати на нього. Потрібний зміст залежить від питання у справі.",
  preparedBy:
    "Сторони договору, власник житла або інший уповноважений суб’єкт.",
  purpose: [
    "Пояснює правову підставу користування житлом і погоджені витрати в межах документа.",
  ],
  doesNotProve: [
    "Meldunek не замінює tytułu prawnego do lokalu. Одна адреса також не доводить фактичного спільного проживання.",
  ],
  keyChecks: [
    "Документ охоплює заявника і конкретне приміщення.",
    "Видно строк, оплату й повноваження особи, що надає житло.",
    "Відокремлено адресу, право користування і суму витрат.",
  ],
  relatedDocuments: ["income-evidence", "civil-status-record"],
  sources: [
    {
      label: "UdSC: rezydent UE",
      url: "https://www.gov.pl/web/udsc/zezwolenie-na-pobyt-rezydenta-dlugoterminowego-ue2",
      note: "Пояснення умов доходу, житла, перебування та підтвердження мови.",
    },
    {
      label: "Podlaski UW: навчання",
      url: "https://www.gov.pl/web/uw-podlaski/studia",
      note: "Документи щодо навчання, оплати, коштів та страхування.",
    },
  ],
  verifiedAt: "2026-09-05",
  explanation: [
    {
      id: "read-housing",
      title: "Яке саме питання закриває документ",
      paragraphs: [
        "Підтвердження адреси пояснює, де особу зареєстровано. Договір пояснює, на яких умовах вона користується житлом. Рахунки або положення договору можуть пояснити витрати. У реєстрі доказів ці ролі варто називати окремо.",
      ],
    },
  ],
  legalBasis: [
    foreignersLaw.text`${foreignersLaw.article("219a")}: Стосується документа подорожі та актуального tytułu prawnego do lokalu для rezydenta UE.`,
  ],
}

export const housingEvidenceDocumentTopic = defineDocumentTopic(guide)
export default housingEvidenceDocumentTopic
