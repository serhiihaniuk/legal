import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { DocumentGuide } from "~/data/document-library/contracts"
import { documentSources, kpaLaw } from "../authoring"

const guide: DocumentGuide = {
  id: "delivery-proof",
  title: "Dowód doręczenia",
  category: "procedure",
  aliases: [
    "підтвердження doręczenia",
    "конверт і awizo",
    "підтвердження e-doręczenia",
  ],
  description: kpaLaw.text`Dowód doręczenia пов’язує конкретне письмо, адресата, канал і юридичну дату вручення. Від цієї дати визначають тригер строку, обчислюють його за ${kpaLaw.article("57", "art. 57 KPA")} і планують відповідь або środek zaskarżenia; копію самого письма та доказ своєчасного wysłania відповіді зберігають разом. Якщо строк пропущено без вини сторони, ${kpaLaw.article("58", "art. 58 KPA")} вимагає протягом 7 днів після припинення перешкоди подати prośbę o przywrócenie terminu, uprawdopodobnić відсутність вини та одночасно виконати пропущену дію. Можливість оскаржити відмову перевіряють за ${kpaLaw.article("59", "art. 59 KPA")} і видом пропущеного строку.`,
  preparedBy:
    "Залежно від каналу це UPO/UPD, dowód e-Doręczenia, zwrotne potwierdzenie odbioru, koperta або awizo.",
  purpose: [
    "Підтверджує спосіб і дату doręczenia конкретного письма конкретному адресату.",
  ],
  doesNotProve: ["Не підтверджує правильність змісту wezwania або decyzji."],
  legalBasis: [
    kpaLaw.text`${kpaLaw.articleRange("39", "49b", { start: "Art. 39", end: "49b" })} KPA.`,
    kpaLaw.text`${kpaLaw.articleRange("57", "59", { start: "Art. 57", end: "59" })} KPA — обчислення і поновлення строку.`,
  ],
  keyChecks: [
    "Правильний адресат або pełnomocnik, канал, фактична й юридична дата, умови fikcji doręczenia.",
  ],
  sources: [
    documentSources.kpa,
    {
      label: "gov.pl — e-Doręczenia",
      url: "https://www.gov.pl/web/e-doreczenia",
      note: "Офіційний портал електронного вручення.",
    },
  ],
  verifiedAt: "2026-07-18",
}

export const deliveryProofTopic: KnowledgeUnit<DocumentGuide> =
  defineKnowledgeUnit({
    id: "evidence-document:delivery-proof",
    subject: {
      family: "evidence-document",
      reference: { kind: "evidence-document", documentId: "delivery-proof" },
    },
    summary: guide.description,
    claims: [
      {
        id: "delivery-and-deadline",
        kind: "statute-text",
        text: "Правила KPA визначають допустимі канали doręczenia, а процесуальний строк обчислюють від установленої законом події; своєчасність можна підтвердити передбаченим способом подання.",
        basis: [
          {
            reference: { kind: "official-source", sourceId: "eli-kpa" },
            locator: "Art. 39–49b i art. 57",
          },
        ],
      },
      {
        id: "deadline-restoration",
        kind: "statute-text",
        text: "При пропуску строку без вини prośbę o przywrócenie terminu подають протягом 7 днів після припинення перешкоди, обґрунтовують відсутність вини й одночасно виконують пропущену дію.",
        basis: [
          {
            reference: { kind: "official-source", sourceId: "eli-kpa" },
            locator: "Art. 58 § 1–3",
          },
        ],
      },
      {
        id: "delivery-file-practice",
        kind: "practical-inference",
        text: "Для контролю строку варто зберігати разом письмо, dowód doręczenia, розрахунок строку, відповідь і доказ її wysłania.",
        basis: [
          {
            reference: { kind: "official-source", sourceId: "eli-kpa" },
            locator: "Art. 39–49b i art. 57–59",
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

export default deliveryProofTopic
