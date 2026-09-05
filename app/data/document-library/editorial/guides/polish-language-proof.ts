import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
import { foreignersLaw } from "../authoring"

const guide: DocumentGuide = {
  id: "polish-language-proof",
  title: "Документ про знання польської мови",
  category: "education",
  kind: "document",
  aliases: [],
  description:
    "Для rezydenta UE має значення не лише рівень мови, а й допустимий вид документа. Назва «сертифікат B1» без перевірки видавця та правової категорії недостатня.",
  preparedBy:
    "Компетентний видавець визнаного посвідчення або заклад освіти для передбаченого законом документа.",
  purpose: [
    "Підтверджує мовну умову, якщо документ належить до допустимого переліку.",
  ],
  doesNotProve: [
    "Довідка про відвідування приватного курсу не стає визнаним посвідченням лише через напис B1.",
  ],
  keyChecks: [
    "Перевірено вид документа, видавця та рівень.",
    "Для документа про освіту встановлено вид закладу й мову навчання.",
    "Враховано дату початку провадження та перехідні правила, особливо щодо szkoły policealnej.",
  ],
  relatedDocuments: ["study-confirmation", "sworn-translation"],
  sources: [
    {
      label: "UdSC: rezydent UE",
      url: "https://www.gov.pl/web/udsc/zezwolenie-na-pobyt-rezydenta-dlugoterminowego-ue2",
      note: "Пояснення умов доходу, житла, перебування та підтвердження мови.",
    },
    {
      label: "Ustawa o cudzoziemcach",
      url: "https://eli.gov.pl/eli/DU/2025/1079/ogl",
      note: "Точну умову зіставляють із підставою дозволу та редакцією на дату справи.",
    },
  ],
  verifiedAt: "2026-09-05",
  explanation: [
    {
      id: "check-certificate",
      title: "Відрізнити курс від допустимого посвідчення",
      paragraphs: [
        "Участь у заняттях, внутрішній тест школи та документ, передбачений законом для rezydenta UE, можуть мати схожі назви. Спочатку знайдіть категорію документа в чинному переліку. Лише після цього перевіряйте його відповідність конкретній особі.",
      ],
      example: {
        title: "B1 на довідці мовної школи",
        facts: [
          "Умовний приклад. Заявник надав довідку про завершення курсу B1.",
        ],
        reasoning: [
          "Працівник перевірив, чи є це одним із допустимих посвідчень. Документ підтверджував проходження курсу, але його належність до законного переліку не підтвердилася.",
        ],
        conclusion:
          "Довідку не зараховано як доказ мовної умови. Потрібен документ допустимого виду або встановлення застосовного звільнення.",
      },
    },
  ],
  legalBasis: [
    foreignersLaw.text`${foreignersLaw.article("211")}: Визначає мовну умову, допустимі категорії документів та звільнення для дітей до 16 років на дату подання.`,
  ],
}

export const polishLanguageProofDocumentTopic = defineDocumentTopic(guide)
export default polishLanguageProofDocumentTopic
