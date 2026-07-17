import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { DocumentGuide } from "~/data/document-library/contracts"
import {
  FOREIGNERS_MOS_AMENDMENT_URL,
  documentSources,
  foreignersLaw,
  regulationLaw,
} from "../authoring"

const guide: DocumentGuide = {
  id: "mos-application",
  title: "Wniosek o zezwolenie na pobyt czasowy w MOS",
  category: "procedure",
  aliases: ["wniosek mos", "електронна заява mos"],
  description:
    "Електронна заява формулює żądanie, вид дозволу та дані, на яких заявник будує справу. Вона запускає процедуру, але не замінює докази матеріальних умов.",
  preparedBy:
    "Заповнює і подає заявник у MOS; додатки, призначені для іншого суб’єкта, підписує відповідний суб’єкт.",
  purpose: [
    "Ідентифікує заявника і конкретний вид дозволу.",
    "Фіксує заявлені факти та перелік доданих матеріалів.",
  ],
  doesNotProve: ["Сам факт надсилання не означає, що умови дозволу виконані."],
  legalBasis: [
    foreignersLaw.text`${foreignersLaw.articleRange("105", "107", { start: "Art. 105", end: "107" })} і ${foreignersLaw.external("art. 106c", FOREIGNERS_MOS_AMENDMENT_URL)}–${foreignersLaw.external("106l", FOREIGNERS_MOS_AMENDMENT_URL)} ustawy o cudzoziemcach.`,
    "Форма та технічні вимоги — Dz.U. 2026 poz. 553.",
  ],
  keyChecks: [
    "Правильний вид дозволу та дані, тотожні паспорту.",
    regulationLaw.text`Відповідність договору, ${regulationLaw.annex("1", "Załącznika nr 1")} та інших додатків.`,
    "Збережені PDF, XML і UPO саме надісланої версії.",
  ],
  sources: [
    documentSources.aliens,
    documentSources.regulation553,
    documentSources.mosQa,
  ],
  verifiedAt: "2026-07-14",
}

export const mosApplicationTopic: KnowledgeUnit<DocumentGuide> =
  defineKnowledgeUnit({
    id: "evidence-document:mos-application",
    subject: {
      family: "evidence-document",
      reference: { kind: "evidence-document", documentId: "mos-application" },
    },
    summary: guide.description,
    claims: [
      {
        id: "document-purpose",
        kind: "requires-verification",
        text: guide.description,
        basis: [
          {
            reference: {
              kind: "official-source",
              sourceId: "eli-ustawa-o-cudzoziemcach",
            },
            locator: "document-specific requirements",
          },
        ],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "draft",
      language: "uk",
      legalStateDate: "2026-07-14",
      verifiedAt: guide.verifiedAt,
    },
    body: guide,
  })

export default mosApplicationTopic
