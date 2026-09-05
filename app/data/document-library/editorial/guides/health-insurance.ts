import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
import { foreignersLaw } from "../authoring"

const guide: DocumentGuide = {
  id: "health-insurance",
  title: "Ubezpieczenie zdrowotne / медичне страхування",
  category: "work",
  kind: "evidence-set",
  aliases: [],
  description:
    "Підтвердження страхування читають як відповідь на питання, хто, у який період і на яких умовах має покриття лікування. Назва страхової компанії або сама сплата коштів цього не пояснює.",
  preparedBy:
    "ZUS, NFZ, роботодавець або страховик залежно від підстави страхування.",
  purpose: [
    "Показує підставу страхування або обсяг покриття витрат на лікування.",
  ],
  doesNotProve: [
    "Будь-яка полісна назва не гарантує відповідності умові конкретного дозволу. ZUS і приватний поліс читають за їхнім власним змістом.",
  ],
  keyChecks: [
    "Застраховано саме заявника.",
    "Видно початок, кінець і територію покриття.",
    "Перевірено умови поліса, винятки та сплату внеску, якщо від неї залежить дія.",
    "Документ відповідає страховій умові обраного маршруту.",
  ],
  relatedDocuments: [
    "zus-confirmation",
    "employment-contract",
    "study-confirmation",
  ],
  sources: [
    {
      label: "Podlaski UW: навчання",
      url: "https://www.gov.pl/web/uw-podlaski/studia",
      note: "Документи щодо навчання, оплати, коштів та страхування.",
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
      id: "read-coverage",
      title: "Зіставити період, особу та покриття",
      paragraphs: [
        "Підтвердження реєстрації, поточне підтвердження страхування і квитанція про оплату відповідають на різні питання. Тому працівник спочатку встановлює вид страхування, а потім добирає матеріали, які разом пояснюють його дію.",
      ],
      example: {
        title: "Оплата без чинного періоду",
        facts: [
          "Умовний приклад. Заявник надав квитанцію за приватний поліс. У самому полісі строк закінчився місяць тому.",
        ],
        reasoning: [
          "Квитанція підтверджує платіж за той поліс, але не його продовження. Працівник попросив актуальний документ про покриття та перевірив період його дії.",
        ],
        conclusion:
          "Питання поточного страхування залишалося відкритим до отримання нового підтвердження.",
      },
    },
  ],
  legalBasis: [
    foreignersLaw.text`${foreignersLaw.article("144")}: Містить страхову умову для навчальної підстави.`,
    foreignersLaw.text`${foreignersLaw.article("211")}: Містить страхову умову для rezydenta UE.`,
  ],
}

export const healthInsuranceDocumentTopic = defineDocumentTopic(guide)
export default healthInsuranceDocumentTopic
