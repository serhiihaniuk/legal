import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { DocumentGuide } from "~/data/document-library/contracts"
import { documentSources, foreignersLaw, kpaLaw } from "../authoring"

const guide: DocumentGuide = {
  id: "administrative-decision",
  title: "Decyzja administracyjna",
  category: "procedure",
  aliases: ["рішення"],
  description:
    "Коли organ вирішує справу по суті або іншим способом завершує її в цій інстанції, він видає decyzję. Спочатку читають rozstrzygnięcie, потім звіряють установлені факти з доказами, правову підставу, uzasadnienie і pouczenie. Для оскарження фіксують доказ doręczenia: загальний строк на odwołanie становить 14 днів від вручення або усного оголошення рішення, а подається воно через organ, який видав decyzję; спеціальна норма може встановити інший строк. Предмет відповіді — конкретні помилки у фактах, доказах, праві або процедурі та їхній вплив на результат.",
  preparedBy:
    "Видає właściwy organ; у першій інстанції в типовій справі pobytowej — wojewoda.",
  purpose: [
    "Визначає результат справи, правову підставу, мотиви та спосіб оскарження.",
  ],
  doesNotProve: [
    "Дата рішення не є датою doręczenia, а готовність карти не замінює decyzji.",
  ],
  legalBasis: [
    kpaLaw.text`${kpaLaw.articleRange("104", "113", { start: "Art. 104", end: "113" })} KPA — форма, зміст, uzasadnienie і виправлення decyzji.`,
    kpaLaw.text`${kpaLaw.articleRange("127", "130", { start: "Art. 127", end: "130" })} KPA — odwołanie, спосіб подання, строк і виконання рішення.`,
    foreignersLaw.text`Спеціальні матеріальні норми ${foreignersLaw.document("ustawy o cudzoziemcach")} визначають умови конкретного дозволу.`,
  ],
  keyChecks: [
    "Organ, strona, podstawa prawna, rozstrzygnięcie, uzasadnienie faktyczne i prawne, pouczenie, podpis, data doręczenia.",
  ],
  sources: [documentSources.kpa, documentSources.aliens],
  verifiedAt: "2026-07-18",
}

export const administrativeDecisionTopic: KnowledgeUnit<DocumentGuide> =
  defineKnowledgeUnit({
    id: "evidence-document:administrative-decision",
    subject: {
      family: "evidence-document",
      reference: {
        kind: "evidence-document",
        documentId: "administrative-decision",
      },
    },
    summary: guide.description,
    claims: [
      {
        id: "decision-content",
        kind: "statute-text",
        text: "Decyzja вирішує справу по суті або іншим способом завершує її в інстанції та повинна містити rozstrzygnięcie, правову підставу, узагальнені фактичні й правові мотиви та pouczenie.",
        basis: [
          {
            reference: { kind: "official-source", sourceId: "eli-kpa" },
            locator: "Art. 104 i art. 107 § 1–3",
          },
        ],
      },
      {
        id: "appeal-mechanism",
        kind: "statute-text",
        text: "Загальний строк на odwołanie становить 14 днів від doręczenia або усного оголошення decyzji; odwołanie подають через organ, який видав рішення, якщо спеціальна норма не встановлює іншого строку.",
        basis: [
          {
            reference: { kind: "official-source", sourceId: "eli-kpa" },
            locator: "Art. 127 § 1–2, art. 129 § 1–3",
          },
        ],
      },
      {
        id: "decision-analysis",
        kind: "practical-inference",
        text: "Практичний аналіз decyzji зіставляє rozstrzygnięcie, факти, докази, право, процедуру та pouczenie, а заперечення прив’язує до впливу конкретної помилки на результат.",
        basis: [
          {
            reference: { kind: "official-source", sourceId: "eli-kpa" },
            locator: "Art. 107 § 1–3 i art. 128",
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

export default administrativeDecisionTopic
