import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
import { foreignersLaw } from "../authoring"

const guide: DocumentGuide = {
  id: "civil-status-record",
  title: "Akt małżeństwa / akt urodzenia",
  category: "identity",
  kind: "document",
  aliases: [],
  description:
    "Акт цивільного стану підтверджує зареєстровану подію та зв’язки між особами. У сімейній справі важливо прочитати, кого саме він пов’язує і чи збігаються дані з іншими документами.",
  preparedBy:
    "Компетентний орган реєстрації цивільного стану; заявник отримує відповідний витяг або відпис.",
  purpose: [
    "Підтверджує зареєстроване народження, шлюб або походження в межах змісту акта.",
  ],
  doesNotProve: [
    "Не підтверджує автоматично актуальний статус sponsora, спільне проживання чи виконання всіх умов сімейного дозволу.",
  ],
  keyChecks: [
    "Особи й написання імен узгоджені з паспортами та перекладом.",
    "Вид акта відповідає зв’язку, який досліджують.",
    "Перевірено форму іноземного документа та застосовність посвідчення.",
  ],
  relatedDocuments: [
    "passport",
    "sworn-translation",
    "apostille-legalisation",
    "residence-card",
    "administrative-decision",
  ],
  sources: [
    {
      label: "Podlaski UW: поєднання з родиною",
      url: "https://www.gov.pl/web/uw-podlaski/polaczenie-z-rodzina",
      note: "Документи про сімейний зв’язок і статус особи, до якої приєднується заявник.",
    },
  ],
  verifiedAt: "2026-09-05",
  explanation: [
    {
      id: "connect-people",
      title: "Як прочитати зв’язок між особами",
      paragraphs: [
        "Якщо в різних документах прізвище відрізняється після шлюбу або зміни імені, зберіть ланцюжок документів, що пояснює зміну. Візуально схожого написання недостатньо для висновку, що це та сама особа.",
      ],
      example: {
        title: "Дошлюбне прізвище в акті",
        facts: [
          "Умовний приклад. У паспорті заявниці нове прізвище, а в акті народження дитини зазначене дошлюбне.",
        ],
        reasoning: [
          "Акт шлюбу пов’язав попереднє й поточне прізвище. Працівник звірив решту даних та долучив пояснення послідовності змін разом із відповідними актами.",
        ],
        conclusion:
          "Розбіжність пояснено документами. Самостійно виправляти прізвище у перекладі не потрібно.",
      },
    },
  ],
  legalBasis: [
    foreignersLaw.text`${foreignersLaw.article("159")}: Визначає умови поєднання з родиною; акт підтверджує сімейний зв’язок у межах свого змісту.`,
  ],
}

export const civilStatusRecordDocumentTopic = defineDocumentTopic(guide)
export default civilStatusRecordDocumentTopic
