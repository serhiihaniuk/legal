import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { DocumentGuide } from "~/data/document-library/contracts"
import { documentSources, foreignersLaw, regulationLaw } from "../authoring"

const guide: DocumentGuide = {
  id: "mos-application",
  title: "Wniosek o zezwolenie na pobyt czasowy w MOS",
  category: "procedure",
  aliases: ["wniosek mos", "електронна заява mos"],
  description: foreignersLaw.text`Для видів заяв, охоплених електронною процедурою, ${foreignersLaw.article("106c", "art. 106c ustawy o cudzoziemcach")} вимагає подання через MOS. Тригером є правильно підписана й надіслана заява; після wysłania треба зберегти PDF, XML і UPO саме цієї версії, бо ${foreignersLaw.article("106d", "art. 106d")} пов’язує належне подання з потрібними підписами та UPO. Далі organ перевіряє зміст і додатки: строк на особисті дії за ${foreignersLaw.article("106e", "art. 106e")} не може бути коротшим за 7 днів, а на подання документів за ${foreignersLaw.article("106f", "art. 106f")} — за 14 днів; невиконання окремих особистих обов’язків може призвести до umorzenia за ${foreignersLaw.article("106i", "art. 106i")}. Відповідь будують за кожною вимогою, з доказом wysłania, а środek zaskarżenia визначають за наступним актом і pouczeniem.`,
  preparedBy:
    "Заповнює і подає заявник у MOS; додатки, призначені для іншого суб’єкта, підписує відповідний суб’єкт.",
  purpose: [
    "Ідентифікує заявника і конкретний вид дозволу.",
    "Фіксує заявлені факти та перелік доданих матеріалів.",
  ],
  doesNotProve: ["Сам факт надсилання не означає, що умови дозволу виконані."],
  legalBasis: [
    foreignersLaw.text`${foreignersLaw.articleRange("106c", "106i", { start: "Art. 106c", end: "106i" })} ustawy o cudzoziemcach — електронне подання, UPO та наступні дії.`,
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
  verifiedAt: "2026-07-18",
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
        id: "electronic-filing",
        kind: "statute-text",
        text: foreignersLaw.text`Заяви, охоплені ${foreignersLaw.article("106c", "art. 106c")}, подають через MOS; UPO формується автоматично, а заява вважається поданою після наявності потрібних підписів і UPO.`,
        basis: [
          {
            reference: {
              kind: "official-source",
              sourceId: "eli-ustawa-o-cudzoziemcach",
            },
            locator: "Art. 106c i art. 106d ust. 5–6",
          },
        ],
      },
      {
        id: "post-filing-actions",
        kind: "statute-text",
        text: foreignersLaw.text`Після подання organ може вимагати особистих дій зі строком щонайменше 7 днів або документів зі строком щонайменше 14 днів; невиконання дій з ${foreignersLaw.article("106e", "art. 106e")} може спричинити umorzenie.`,
        basis: [
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
        id: "mos-receipt-guidance",
        kind: "official-guidance",
        text: "UdSC пояснює, що статус «przesłany» означає передання через систему, а UPO підтверджує технічну правильність і прийняття системою, не перевірку змісту та додатків.",
        basis: [
          {
            reference: { kind: "official-source", sourceId: "udsc-mos-qa" },
            locator: "pytania 35, 37, 39, 41 i 61",
          },
        ],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-07-14",
      verifiedAt: guide.verifiedAt,
    },
    body: guide,
  })

export default mosApplicationTopic
