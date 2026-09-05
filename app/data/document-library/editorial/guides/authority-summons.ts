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
    "Wezwanie пояснює, яку дію, документ або відомості орган очікує у справі. Його треба прочитати за окремими вимогами, строками та наслідками.",
  preparedBy:
    "Видає organ, який веде справу; адресат виконує вимогу або подає обґрунтовану відповідь.",
  purpose: [
    "Повідомляє, що саме, у який спосіб і до якого строку вимагає organ.",
  ],
  doesNotProve: [
    "Не кожне wezwanie означає brak formalny і не кожна вимога автоматично є правомірною.",
  ],
  explanation: [
    {
      id: "read-demands",
      title: "Одна вимога, одна зрозуміла відповідь",
      paragraphs: [
        "Після отримання листа відокремте його дату від дати doręczenia. Прочитайте кожну вимогу разом із правовою підставою, способом виконання і наслідком. Вимога пояснити факт та вимога виконати особисту дію потребують різних відповідей.",
        "У відповіді повторіть суть кожного питання та вкажіть, який додаток його пояснює. Якщо матеріалу ще немає, назвіть перешкоду й конкретне прохання. Саме прохання не означає, що орган змінив строк.",
      ],
      example: {
        title: "Два питання, один додаток",
        facts: [
          "Умовний приклад. Organ просить актуальне підтвердження навчання та пояснення перерви. Заявник приносить тільки zaświadczenie про продовження навчання.",
        ],
        reasoning: [
          "Zaświadczenie відповідає на питання про поточне навчання. Воно не пояснює перерву. У відповіді працівник розділив ці питання: додав довідку до першого, а до другого виклав обставини перерви та відповідні підтвердження.",
        ],
        conclusion:
          "Відповідь охоплює обидва питання. Велика кількість копій одного документа не замінила пояснення відсутнього факту.",
      },
    },
  ],
  legalBasis: [
    kpaLaw.text`${kpaLaw.articleRange("50", "56", { start: "Art. 50", end: "56" })} KPA — підстави, зміст і спосіб wezwania.`,
    kpaLaw.text`${kpaLaw.article("64", "Art. 64 § 2 KPA")} — усунення формальних недоліків.`,
    foreignersLaw.text`У справах pobytowych також спеціальні ${foreignersLaw.article("106e", "art. 106e")}, ${foreignersLaw.article("106f", "art. 106f")} і ${foreignersLaw.article("106i", "art. 106i")} ustawy o cudzoziemcach.`,
  ],
  keyChecks: [
    "Organ, адресат, номер справи, кожне żądanie, правова підстава, строк, спосіб виконання, наслідок і підпис.",
  ],
  sources: [documentSources.kpa, documentSources.aliens],
  verifiedAt: "2026-07-18",
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
        text: "Organ може вимагати участі, пояснень або показань, якщо це необхідно для вирішення справи, а wezwanie має назвати справу, мету, спосіб виконання, строк або дату й правові наслідки невиконання.",
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
        text: kpaLaw.text`Наслідок залежить від виду вимоги: ${kpaLaw.article("64", "art. 64 § 2 KPA")} стосується формальних недоліків, а в електронних справах pobytowych ${foreignersLaw.article("106e", "art. 106e")}, ${foreignersLaw.article("106f", "106f")} і ${foreignersLaw.article("106i", "106i")} передбачають окремі строки та наслідки особистих дій і документів.`,
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
        text: "Найбезпечніше розкласти wezwanie на окремі żądania, до кожного додати відповідь або доказ і зберегти підтвердження своєчасного wysłania; доступний środek zaskarżenia перевіряють за актом і pouczeniem.",
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
