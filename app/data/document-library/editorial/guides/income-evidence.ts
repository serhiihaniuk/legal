import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
import { foreignersLaw } from "../authoring"

const guide: DocumentGuide = {
  id: "income-evidence",
  title: "Доходи й кошти: PIT, виплати та банківські документи",
  category: "financial",
  kind: "evidence-set",
  aliases: [],
  description:
    "Договір, PIT і банківська виписка показують різні частини фінансової ситуації. Їх зіставляють за особою, джерелом коштів і періодом, який має значення для дозволу.",
  preparedBy:
    "Роботодавець, банк, платник податку та інші установи залежно від джерела коштів.",
  purpose: [
    "Допомагає встановити джерело, фактичне надходження та розмір коштів у потрібному періоді.",
  ],
  doesNotProve: [
    "Річна сума не показує розподілу виплат за місяцями. Залишок на рахунку не є сам по собі доказом регулярного доходу.",
  ],
  keyChecks: [
    "Обрано правильне питання: винагорода, регулярний дохід чи достатні кошти.",
    "Суми brutto і netto не змішані.",
    "Періоди в договорі, PIT і банківській історії узгоджені.",
    "Зрозуміле походження переказів та враховані особи на утриманні, якщо це потрібно для умови.",
  ],
  relatedDocuments: [
    "employment-contract",
    "zus-confirmation",
    "evidence-matrix",
    "housing-evidence",
  ],
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
      id: "read-period",
      title: "Побачити період за річною сумою",
      paragraphs: [
        "Спочатку визначте, що саме перевіряється у справі. Кошти студента, винагорода для робочої підстави і стабільність доходу для rezydenta UE не є одним тестом. Потім розкладіть матеріали за відповідними періодами.",
      ],
      example: {
        title: "Однакова сума, різна картина",
        facts: [
          "Умовний приклад. У двох умовних наборах виплат річний підсумок однаковий. У першому виплати надходили щомісяця, у другому майже все надійшло разовим переказом.",
        ],
        reasoning: [
          "PIT показує підсумок. Банківська історія та документи про джерело пояснюють різницю між регулярними виплатами й одноразовим надходженням. Сам підсумок не дозволяє прирівняти ці ситуації.",
        ],
        conclusion:
          "Для висновку про регулярність працівник використовує послідовність виплат і їхню підставу, а не лише річну суму.",
      },
    },
  ],
  legalBasis: [
    foreignersLaw.text`${foreignersLaw.article("211")}: Визначає стабільний і регулярний дохід для rezydenta UE.`,
    foreignersLaw.text`${foreignersLaw.article("144")}: Визначає фінансову умову для навчальної підстави.`,
  ],
}

export const incomeEvidenceDocumentTopic = defineDocumentTopic(guide)
export default incomeEvidenceDocumentTopic
