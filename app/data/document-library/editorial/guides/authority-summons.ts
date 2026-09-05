import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { DocumentGuide } from "~/data/document-library/contracts"
import { documentSources, foreignersLaw, kpaLaw } from "../authoring"

const guide: DocumentGuide = {
  id: "authority-summons",
  title: "Wezwanie organu",
  category: "procedure",
  aliases: ["wezwanie"],
  description:
    "Wezwanie є вимогою органу виконати дію у справі: надати документ, пояснити факт або з’явитися особисто. Воно показує, чого органу бракує для наступного кроку. Саме отримання такого листа не означає відмови в дозволі.",
  preparedBy:
    "Лист видає орган, який веде справу. З нього має бути зрозуміло, від кого очікують дію та в якому порядку.",
  purpose: [
    "Повідомляє вимогу, спосіб її виконання, строк або дату явки та правовий наслідок невиконання.",
  ],
  doesNotProve: [
    "Назва листа не визначає виду недоліку. Посилання на норму також не звільняє від перевірки, чи стосується ця норма конкретної вимоги.",
  ],
  explanation: [
    {
      id: "read-demands",
      title: "Одна вимога, одна зрозуміла відповідь",
      paragraphs: [
        "Doręczenie означає вручення листа за правилами процедури. Дата, надрукована у верхній частині wezwania, є датою самого листа. Коли строк починається від вручення, для його обчислення потрібне підтвердження цієї окремої події.",
        kpaLaw.text`За ${kpaLaw.article("54", "Art. 54 § 1 KPA")} у листі мають бути зазначені орган, адресат, справа й мета виклику, спосіб виконання, строк або дата явки та наслідки. Для кожного пункту важливо встановити, якої саме відповіді він потребує. Надсилання копії документа не замінює особистої явки, якщо вимагається саме вона.`,
        "Відповідь пов’язують із пунктами листа та відповідними додатками. Якщо документа ще немає, пояснення перешкоди й прохання про інший строк є окремим зверненням. Саме його надсилання не означає, що орган змінив попередній строк.",
      ],
      example: {
        title: "Два питання, один додаток",
        facts: [
          "Умовний приклад. У справі про навчання орган просить довідку про поточне навчання та пояснення перерви. Надана довідка підтверджує повернення до занять, але не містить відомостей про попередній семестр.",
        ],
        sample: {
          kind: "letter",
          title: "Фрагмент вимог із wezwania",
          note: "Вигаданий навчальний уривок. Тут показано дві вимоги; реквізити, правову підставу, строк, спосіб подання та pouczenie повного листа не відтворено.",
          language: "pl",
          paragraphs: [
            "Wzywa się do przedłożenia:",
            "1. Aktualnego zaświadczenia uczelni potwierdzającego kontynuację studiów.",
            "2. Wyjaśnienia przerwy w kształceniu w poprzednim semestrze wraz z dokumentami potwierdzającymi wskazane okoliczności.",
          ],
        },
        reasoning: [
          "Перший пункт стосується теперішнього стану, другий попереднього періоду. У матеріалах знайшли рішення закладу про навчальну відпустку. До відповіді додали довідку за пунктом 1, а за пунктом 2 пояснили період відпустки й долучили рішення закладу.",
        ],
        conclusion:
          "Обидві вимоги отримали окрему відповідь із джерелом відомостей. Чи виконано умови дозволу на навчання, орган оцінює за всіма матеріалами справи.",
      },
    },
    {
      id: "kind-of-demand",
      title: "Формальний недолік, доказ і особиста дія",
      paragraphs: [
        kpaLaw.text`Brak formalny є недотриманням вимог до самої заяви, установлених законом. Для недоліків, про які йдеться в ${kpaLaw.article("64", "Art. 64 § 2 KPA")}, орган визначає строк не коротший ніж сім днів і попереджає про залишення заяви без розгляду. Цей наслідок не слід автоматично приписувати кожному запиту документів.`,
        foreignersLaw.text`У процедурах тимчасового перебування, до яких застосовується ${foreignersLaw.article("106f", "Art. 106f ustawy o cudzoziemcach")}, запит документів для підтвердження даних і підстави заяви має строк не коротший ніж 14 днів від вручення. Документ може бути належно поданий, але не доводити потрібного факту. Це питання змісту доказу.`,
        foreignersLaw.text`Особиста явка, показ паспорта, відбитки та зразок підпису врегульовані окремо в ${foreignersLaw.article("106e", "Art. 106e")}. Невиконання дій може мати наслідки за ${foreignersLaw.article("106i", "Art. 106i")}, з передбаченими там винятками. Тому кожний пункт комбінованого листа читають зі своєю підставою й наслідком.`,
      ],
    },
  ],
  legalBasis: [
    kpaLaw.text`${kpaLaw.articleRange("50", "56", { start: "Art. 50", end: "56" })} KPA: підстави, зміст і спосіб виклику.`,
    kpaLaw.text`${kpaLaw.article("64", "Art. 64 § 2 KPA")}: усунення формальних недоліків.`,
    foreignersLaw.text`У справах pobytowych також спеціальні ${foreignersLaw.article("106e", "art. 106e")}, ${foreignersLaw.article("106f", "art. 106f")} і ${foreignersLaw.article("106i", "art. 106i")} ustawy o cudzoziemcach.`,
  ],
  keyChecks: [
    "Орган, адресат, номер справи та підпис у повному листі.",
    "Окрема дія, правова підстава, строк, спосіб виконання й наслідок для кожної вимоги.",
    "Зв’язок підтвердження вручення з цим листом, а відповіді з його пунктами.",
  ],
  relatedDocuments: [
    "delivery-proof",
    "requirements-table",
    "response-letter",
    "dispatch-proof",
    "deadline-obstacle",
  ],
  sources: [documentSources.kpa, documentSources.aliens, documentSources.mosQa],
  verifiedAt: "2026-09-05",
}

export const authoritySummonsTopic: KnowledgeUnit<DocumentGuide> =
  defineKnowledgeUnit({
    id: "evidence-document:authority-summons",
    subject: {
      family: "evidence-document",
      reference: { kind: "evidence-document", documentId: "authority-summons" },
    },
    summary: guide.description,
    claims: [
      {
        id: "summons-content",
        kind: "statute-text",
        text: "Орган може вимагати участі, пояснень або показань, якщо це необхідно для вирішення справи. Wezwanie має назвати справу, мету, спосіб виконання, строк або дату й правові наслідки невиконання.",
        basis: [
          {
            reference: { kind: "official-source", sourceId: "eli-kpa" },
            locator: "Art. 50 i art. 54 § 1",
          },
        ],
      },
      {
        id: "summons-consequences",
        kind: "statute-text",
        text: kpaLaw.text`Наслідок залежить від виду вимоги. ${kpaLaw.article("64", "Art. 64 § 2 KPA")} стосується формальних недоліків, а у відповідних процедурах тимчасового перебування ${foreignersLaw.article("106e", "Art. 106e")}, ${foreignersLaw.article("106f", "106f")} і ${foreignersLaw.article("106i", "106i")} передбачають окремі строки та наслідки особистих дій і документів.`,
        basis: [
          {
            reference: { kind: "official-source", sourceId: "eli-kpa" },
            locator: "Art. 64 § 2",
          },
          {
            reference: {
              kind: "official-source",
              sourceId: "eli-ustawa-o-cudzoziemcach",
            },
            locator: "Art. 106e, art. 106f i art. 106i",
          },
        ],
      },
      {
        id: "response-workflow",
        kind: "practical-inference",
        text: "Відповідь за пунктами wezwania показує, яке питання пояснює кожний додаток. Підтвердження подання зберігають разом із відправленим пакетом; доступний засіб оскарження визначають за видом акта й нормою, що його регулює.",
        basis: [
          {
            reference: { kind: "official-source", sourceId: "eli-kpa" },
            locator: "Art. 54 § 1 pkt 3–6 i art. 57 § 5",
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

export default authoritySummonsTopic
