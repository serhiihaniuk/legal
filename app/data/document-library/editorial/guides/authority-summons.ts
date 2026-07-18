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
    "Organ надсилає wezwanie, коли для розгляду справи потрібні дія, документ, пояснення або особиста явка. Після doręczenia треба зберегти доказ вручення, визначити строк і перенести кожне żądanie в окремий рядок: що вимагається, на якій підставі, який факт це має підтвердити та який доказ або обґрунтована відповідь його закриває. Відповідь подають у строк із доказом wysłania; якщо вимогу неможливо виконати, до спливу строку пояснюють перешкоду й формулюють конкретне прохання. Środek zaskarżenia визначають за видом процесуального акта, його pouczeniem і подальшим наслідком, а не лише за назвою wezwania.",
  preparedBy:
    "Видає organ, який веде справу; адресат виконує вимогу або подає обґрунтовану відповідь.",
  purpose: [
    "Повідомляє, що саме, у який спосіб і до якого строку вимагає organ.",
  ],
  doesNotProve: [
    "Не кожне wezwanie означає brak formalny і не кожна вимога автоматично є правомірною.",
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
