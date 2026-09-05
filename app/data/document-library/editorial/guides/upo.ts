import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { DocumentGuide } from "~/data/document-library/contracts"
import { documentSources, foreignersLaw } from "../authoring"

const guide: DocumentGuide = {
  id: "upo",
  title: "UPO. Urzędowe Poświadczenie Odbioru",
  category: "procedure",
  aliases: ["upo / urzędowe poświadczenie", "upo та akta sprawy"],
  description:
    "Urzędowe Poświadczenie Odbioru, скорочено UPO, є офіційним електронним підтвердженням отримання документа. У MOS воно стосується конкретної надісланої заяви. Збережений на комп’ютері проєкт заяви та отримане UPO мають різне значення.",
  preparedBy: "Формує система MOS після підписання й надсилання заяви.",
  purpose: [
    "Підтверджує отримання заяви системою та дозволяє пов’язати її з подією подання.",
  ],
  doesNotProve: [
    "Не є оцінкою доказів працівником органу, довідкою про подання після перевірки або рішенням про надання дозволу.",
  ],
  explanation: [
    {
      id: "filing-and-checking",
      title: "Отримання системою і перевірка органом",
      paragraphs: [
        foreignersLaw.text`За ${foreignersLaw.article("106d", "Art. 106d ust. 5–6 ustawy o cudzoziemcach")} система автоматично формує UPO. Для визнання заяви поданою потрібні передбачені цією статтею підписи під заявою й відповідними додатками та отримання UPO. Тому підтвердження має значення для подання, хоча не вирішує справи по суті.`,
        "За поясненням UdSC, після надсилання можна зберегти заяву у форматах PDF і XML та отримати UPO. PDF зручний для читання, XML зберігає дані в електронному форматі. Вони мають стосуватися тієї самої надісланої заяви, а не попередньої чернетки.",
        "Zaświadczenie o złożeniu wniosku є окремою довідкою, доступною після перевірки й підтвердження заяви працівником органу. UPO не потрібно називати цією довідкою. Жоден із цих документів сам по собі не є позитивним рішенням про дозвіл.",
      ],
      example: {
        title: "UPO підтверджує подану версію, а не нову чернетку",
        facts: [
          "Умовний приклад. Заяву підписали та надіслали 4 серпня, а UPO зберегли разом із її даними. 6 серпня роботодавець повідомив нові умови. Працівник підготував файл із цими змінами, але ще не подав його до органу.",
        ],
        sample: {
          kind: "table",
          title: "Зіставлення матеріалів одного подання",
          note: "Вигаданий робочий запис, не форма UPO або екран MOS. Показано, до якого документа належить підтвердження.",
          columns: ["Матеріал", "Що встановлено", "Що з цього випливає"],
          rows: [
            {
              id: "filed-version",
              cells: [
                "Заява, збережена в PDF і XML",
                "Надіслана версія від 04.08.2026",
                "Це зміст первинного подання.",
              ],
            },
            {
              id: "receipt",
              cells: [
                "UPO для цієї заяви",
                "Підтвердження отримання надісланої версії",
                "Його збережено разом із первинною заявою.",
              ],
            },
            {
              id: "new-file",
              cells: [
                "Файл із новими умовами від 06.08.2026",
                "Підготовлено локально; подання не підтверджено",
                "Первинне UPO не підтверджує отримання цих нових відомостей.",
              ],
            },
          ],
        },
        reasoning: [
          "Дата й зв’язок UPO стосуються первинної заяви. Пізніший файл не стає частиною цього подання через те, що його поклали в ту саму папку. Працівник зберіг первинний комплект і окремо позначив нові відомості як ще не подані.",
        ],
        conclusion:
          "Отримання первинної заяви підтверджене. Отримання змінених відомостей органом поки не підтверджене; для них потрібні належне подання та його доказ.",
      },
    },
    {
      id: "missing-receipt",
      title: "Коли видно статус, але немає підтвердження",
      paragraphs: [
        "Статус Oczekuje na synchronizację означає, що надсилання ще триває. Для статусу przesłany UdSC рекомендує отримати UPO та очікувати подальшої перевірки. Скриншот статусу не замінює збереженого підтвердження й надісланої заяви.",
        "Якщо UPO не вдається отримати, спочатку потрібно з’ясувати стан саме цього надсилання в системі та зверненні до підтримки. Автоматичне повторне створення заяви може залишити два різні подання замість відповіді на питання, що сталося з першим. Звернення до підтримки також не є UPO.",
      ],
    },
  ],
  legalBasis: [
    foreignersLaw.text`${foreignersLaw.article("106d", "Art. 106d ust. 5–6")} ustawy o cudzoziemcach: автоматичне формування UPO та умови визнання заяви поданою.`,
  ],
  keyChecks: [
    "Збережені UPO, PDF і XML тієї самої версії.",
    "Є саме підтвердження UPO, а не лише статус przesłany або його скриншот.",
  ],
  relatedDocuments: [
    "mos-application",
    "proceeding-certificate",
    "dispatch-proof",
    "case-file-index",
  ],
  sources: [documentSources.mosQa, documentSources.aliens],
  verifiedAt: "2026-09-05",
}

export const upoTopic: KnowledgeUnit<DocumentGuide> = defineKnowledgeUnit({
  id: "evidence-document:upo",
  subject: {
    family: "evidence-document",
    reference: { kind: "evidence-document", documentId: "upo" },
  },
  summary: guide.description,
  claims: [
    {
      id: "upo-generation-and-filing",
      kind: "statute-text",
      text: "MOS автоматично формує UPO, а заява вважається поданою після наявності потрібних підписів і UPO.",
      basis: [
        {
          reference: {
            kind: "official-source",
            sourceId: "eli-ustawa-o-cudzoziemcach",
          },
          locator: "Art. 106d ust. 5–6",
        },
      ],
    },
    {
      id: "upo-technical-scope",
      kind: "official-guidance",
      text: "UPO підтверджує технічне отримання документа системою. Працівник органу окремо перевіряє дані та додатки.",
      basis: [
        {
          reference: { kind: "official-source", sourceId: "udsc-mos-qa" },
          locator: "pytania 35, 37, 39 i 61",
        },
      ],
    },
  ],
  relationships: [],
  review: {
    reviewStatus: "reviewed",
    language: "uk",
    legalStateDate: "2026-07-18",
    verifiedAt: guide.verifiedAt,
  },
  body: guide,
})

export default upoTopic
