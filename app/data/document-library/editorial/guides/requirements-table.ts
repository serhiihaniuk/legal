import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
const guide: DocumentGuide = {
  id: "requirements-table",
  title: "Таблиця вимог із wezwania",
  category: "evidence",
  aliases: [],
  description:
    "Таблиця вимог допомагає не пропустити жодного пункту wezwania, листа органу з вимогою надати матеріал або виконати дію. Вона відділяє те, що орган попросив, від того, що вже отримано від заявника і фактично подано до справи.",
  preparedBy: "Працівник справи складає її за отриманим листом.",
  purpose: [
    "Показує, які пункти відповіді готові, а які ще потребують матеріалу.",
  ],
  doesNotProve: [
    "Це спосіб організації роботи, а не обов’язковий державний формуляр або самостійний доказ виконання умов.",
  ],
  keyChecks: [
    "Не об’єднуйте різні вимоги в один рядок.",
    "Зберігайте текст вимоги і свою інтерпретацію окремо.",
    "Вказуйте фактично поданий додаток, а не лише запланований.",
  ],
  legalBasis: [
    {
      kind: "authored-legal-text",
      plainText: "Art. 54 KPA",
      parts: [
        {
          text: "Art. 54 KPA",
          target: {
            kind: "legal-provision",
            documentId: "kpa",
            provisionId: "kpa-art-54",
          },
        },
      ],
    },
    {
      kind: "authored-legal-text",
      plainText: "Art. 64 KPA",
      parts: [
        {
          text: "Art. 64 KPA",
          target: {
            kind: "legal-provision",
            documentId: "kpa",
            provisionId: "kpa-art-64",
          },
        },
      ],
    },
    {
      kind: "authored-legal-text",
      plainText: "Art. 77 KPA",
      parts: [
        {
          text: "Art. 77 KPA",
          target: {
            kind: "legal-provision",
            documentId: "kpa",
            provisionId: "kpa-art-77",
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
  kind: "working-record",
  relatedDocuments: ["authority-summons", "evidence-matrix", "response-letter"],
  explanation: [
    {
      id: "table-columns",
      title: "Що записувати в рядку",
      paragraphs: [
        "Один пункт листа може вимагати документ, пояснення або особисту явку. У рядку зберігають цю вимогу та окремо записують відповідь. Позначка «отримано» означає, що матеріал є у працівника. Позначка «подано» потребує відомостей про передання органу; це інша подія.",
        "Матриця умов починається з правової підстави дозволу. Таблиця вимог починається з конкретного листа органу. Вони можуть посилатися на ті самі докази, але відповідають на різні питання.",
      ],
      example: {
        title: "Як виглядає таблиця після читання листа",
        facts: [
          "Умовний приклад. У листі є дві вимоги: актуальні умови роботи й підтвердження страхування. Для обох у самому листі зазначено кінцеву дату 17.08.2026. Це задана дата прикладу, а не розрахунок універсального строку.",
        ],
        sample: {
          kind: "table",
          title: "Вимоги з одного wezwania",
          note: "Вигаданий робочий запис. Скорочений виклад вимог не замінює оригіналу листа.",
          columns: [
            "Пункт і вимога",
            "Строк та його джерело",
            "Матеріал для відповіді",
            "Фактичний стан",
          ],
          rows: [
            {
              id: "contract",
              cells: [
                "1. Актуальні умови роботи",
                "17.08.2026, пункт 1 листа",
                "Основний договір і підписаний aneks",
                "Отримано від роботодавця. До органу ще не подано.",
              ],
            },
            {
              id: "insurance",
              cells: [
                "2. Підтвердження медичного страхування",
                "17.08.2026, пункт 2 листа",
                "Актуальні дані про страхування",
                "Документ ще не отримано. Aneks не замінює цих відомостей.",
              ],
            },
          ],
        },
        reasoning: [
          "Таблиця показала, що готовий договір не закриває другу вимогу. Працівник підготував пояснення до пункту 1, а щодо пункту 2 зберіг запит про отримання документа. В обох рядках залишився окремий контроль подання до органу.",
        ],
        conclusion:
          "На цей момент відповідь ще не подано. Наявність одного готового додатка не означає виконання всього wezwania.",
      },
    },
  ],
}
export const requirementsTableDocumentTopic = defineDocumentTopic(guide)
export default requirementsTableDocumentTopic
