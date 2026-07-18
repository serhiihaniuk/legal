import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { LegalNodeGuide } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"

import { kpaLaw, mapTopicSources } from "../authoring"
import type { LegalMapTopicBody } from "./principle-legality"

const kpaSourceReference = {
  kind: "official-source",
  sourceId: "eli-kpa",
} as const

const aliensSourceReference = {
  kind: "official-source",
  sourceId: "eli-ustawa-o-cudzoziemcach",
} as const

type WezwanieBody = LegalMapTopicBody

export const wezwanieTopic: KnowledgeUnit<WezwanieBody> = defineKnowledgeUnit({
  id: "map-topic:wezwanie",
  subject: {
    family: "map-topic",
    reference: { kind: "map-node", nodeId: "wezwanie" },
  },
  summary:
    "Wezwanie треба розкласти на: organ, sprawa, підстава, точна вимога, форма виконання, строк і наслідок невиконання.",
  claims: [
    {
      id: "read-each-demand",
      kind: "requires-verification",
      text: "Відповідь на wezwanie треба будувати окремо для кожної вимоги: норма, факт, доказ, додаток, строк і наслідок.",
      basis: [
        { reference: kpaSourceReference, locator: "Art. 50–56" },
        { reference: aliensSourceReference, locator: "special procedure" },
      ],
    },
  ],
  relationships: [],
  review: {
      reviewStatus: "reviewed",
    language: "uk",
    legalStateDate: "2026-07-14",
    verifiedAt: "2026-07-14",
  },
  body: {
    title: "Як читати wezwanie",
    polish: kpaLaw.text`${kpaLaw.articleRange("50", "56", { start: "art. 50", end: "56" })} KPA; ${kpaLaw.article("54", "art. 54")} KPA`,
    sources: [mapTopicSources.kpa, mapTopicSources.aliens],
    guide: {
      introduction: [
        kpaLaw.text`${kpaLaw.articleRange("50", "56", { start: "Art. 50", end: "56" })} KPA регулюють wezwanie як процесуальний акт, потрібний для пояснень, особистої участі, подання документа або виконання іншої дії, необхідної для вирішення справи.`,
      ],
      regulated: [
        "Необхідність і пропорційність wezwania, територіальні межі особистої явки, обов’язковий зміст, термінові форми повідомлення та відшкодування витрат явки.",
      ],
      appliesWhen: [
        "Коли без дії конкретної особи орган не може встановити істотний факт або провести процесуальну дію.",
      ],
      conditions: [
        kpaLaw.text`За ${kpaLaw.article("54", "art. 54")} KPA wezwanie містить organ і адресу, особу, справу та її роль, мету, форму виконання, строк або дату й місце, правові наслідки невиконання та підпис уповноваженої особи.`,
        kpaLaw.text`${kpaLaw.article("50", "Art. 50")} KPA вимагає, щоб wezwanie було необхідним і не створювало зайвого обтяження; за поважної перешкоди дія може бути проведена за місцем перебування особи.`,
      ],
      exceptions: [
        kpaLaw.text`Термінове wezwanie телефоном або іншим засобом за ${kpaLaw.article("55", "art. 55")} KPA є ефективним лише коли немає сумніву щодо переданого змісту та своєчасного отримання.`,
        kpaLaw.text`Особиста явка поза встановленими ${kpaLaw.articleRange("51", "53", { start: "art. 51", end: "53" })} KPA територіальними межами потребує окремої правової підстави, пов’язаної з характером справи або дії.`,
      ],
      consequences: [
        "Наслідок невиконання залежить від правової підстави вимоги: brak formalny може вести до pozostawienia podania bez rozpoznania, а недоведена матеріальна умова — до негативної decyzji; санкція можлива лише на підставі закону.",
      ],
      procedure: [
        "Зміст wezwania розкладається на кожну окрему вимогу, її норму, факт, допустимий доказ, строк, спосіб подання і прямо зазначений наслідок.",
      ],
      foreignersContext: [
        "У провадженні pobytowym одна кореспонденція може одночасно містити wezwanie до усунення braków formalnych, вимоги доказів матеріальних умов і wezwanie do osobistego stawiennictwa. Ці частини мають різні підстави й наслідки.",
      ],
    } satisfies LegalNodeGuide,
    why: "Юридична мова часто об’єднує кілька різних вимог в одному абзаці. Відповідай не «листом загалом», а таблицею: вимога → факт → доказ → додаток.",
    checkpoints: [
      "Хто викликає й у якій справі?",
      "Що саме треба зробити або довести?",
      "Чи вимога необхідна для справи?",
      "Який строк і наслідок?",
      "Чи можна просити уточнення або продовження?",
    ],
    steps: [
      "Пронумеруй кожну вимогу.",
      "Під кожною запиши юридичний термін простими словами.",
      "Знайди статтю, умову та релевантний доказ.",
      "Склади перелік додатків і перевір строк.",
      "Збережи доказ подання відповіді.",
    ],
  },
})

export default wezwanieTopic

export const wezwanieMapNode: LegalNode = {
  id: "wezwanie",
  title: wezwanieTopic.body.title,
  polish: wezwanieTopic.body.polish,
  summary: wezwanieTopic.summary,
  why: wezwanieTopic.body.why,
  checkpoints: [...(wezwanieTopic.body.checkpoints ?? [])],
  steps: [...(wezwanieTopic.body.steps ?? [])],
  sources: [...wezwanieTopic.body.sources],
}
