import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { kpaLaw, mapTopicSources, workLaw } from "../authoring"
import type { LegalNodeGuide } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"
import type { LegalMapTopicBody } from "./principle-legality"

const kpaReference = { kind: "official-source", sourceId: "eli-kpa" } as const
type DocumentMatrixBody = LegalMapTopicBody

export const documentMatrixTopic: KnowledgeUnit<DocumentMatrixBody> =
  defineKnowledgeUnit({
    id: "map-topic:document-matrix",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "document-matrix" },
    },
    summary:
      "Для кожної умови дозволу запиши факт, який має її виконувати, і документ або інший доказ, що цей факт підтверджує.",
    claims: [
      {
        id: "condition-fact-proof",
        kind: "practical-inference",
        text: kpaLaw.text`Матриця доказів пов’язує правову умову, факт і dowód; KPA дозволяє використовувати все, що сприяє з’ясуванню справи, за ${kpaLaw.article("75", "art. 75")} та вимагає оцінки всього матеріалу за ${kpaLaw.articleRange("77", "80", { start: "art. 77", end: "80" })}.`,
        basis: [{ reference: kpaReference, locator: "Art. 75, 77, 80" }],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "draft",
      language: "uk",
      legalStateDate: "2026-07-14",
      verifiedAt: "2026-07-14",
    },
    body: {
      title: "Матриця документів",
      polish: "warunek → fakt → dowód",
      sources: [mapTopicSources.kpa, mapTopicSources.aliens],
      guide: {
        introduction: [
          "Матриця документів показує правову функцію кожного матеріалу: яка норма створює умову, який факт реалізує цю умову і який dowód підтверджує саме цей факт. Вона перетворює перелік załączników на структуру доказування.",
          "Один документ може підтверджувати кілька фактів, а одна умова може вимагати сукупності доказів. Наприклад, umowa підтверджує погоджені умови праці, але фактичну виплату показують bank statements, lista płac і ZUS.",
        ],
        regulated: [
          workLaw.text`Матеріальна ustawa визначає przesłanki дозволу, а KPA — спосіб встановлення фактів і оцінки dowodów. ${kpaLaw.article("75", "Art. 75")} KPA допускає все, що може сприяти з'ясуванню справи й не суперечить праву.`,
          workLaw.text`${kpaLaw.article("77", "Art. 77")} і ${kpaLaw.article("80", "art. 80")} KPA зобов'язують organ зібрати та розглянути весь матеріал і оцінити, чи доведена конкретна обставина.`,
          "Вимоги до обов'язкових załączników можуть додатково випливати зі спеціального закону та rozporządzenia, але їх наявність не замінює доказу всіх матеріальних умов.",
        ],
        appliesWhen: [
          "Матриця застосовується до заяви, відповіді на wezwanie, ознайомлення з aktami, підготовки odwołania та перевірки змін фактичного стану під час провадження.",
          "Вона особливо важлива, коли organ ставить під сумнів реальність діяльності, стабільність доходу, мету pobytu, фактичну організацію праці або зв'язок між spółkami.",
        ],
        conditions: [
          "Кожен рядок матриці містить точну przesłankę, релевантний період, факт, джерело інформації та dowód із датою й автором.",
          "Документи повинні бути взаємно узгоджені щодо осіб, назв podmiotów, сум, адрес, дат, stanowisk і періодів.",
          "Для слабкого або непрямого доказу потрібне пояснення логічного зв'язку та, за можливості, друге незалежне джерело.",
        ],
        exceptions: [
          "Dokument urzędowy користується спеціальною доказовою силою лише в межах того, що орган офіційно засвідчив; він не підтверджує автоматично інші висновки.",
          "Brak одного типового документа не завжди означає відсутність факту, якщо закон не робить цей документ виключною формою доказу й факт можна встановити іншими законними засобами.",
        ],
        consequences: [
          "Матриця виявляє, чи справа є формально комплектною, але матеріально слабкою, або навпаки — має доказ умови, який не був правильно включений до akt.",
          "Незаповнений зв'язок przesłanka–fakt–dowód показує реальний ризик негативного рішення, бо organ не може визнати умову виконаною лише на підставі загального твердження сторони.",
        ],
        procedure: [
          "Спочатку з матеріальної норми виділяються окремі позитивні й негативні przesłanki та їх часові межі.",
          "Потім до кожної przesłanki прив'язуються факти й матеріали з numerem dokumentu в aktach, а суперечності фіксуються окремо.",
          "Після отримання wezwania або нового документа матриця оновлюється, щоб було видно, яка умова вже доведена, яка потребує пояснення і яка залишилася без доказу.",
        ],
        foreignersContext: [
          "У sprawach cudzoziemców той самий факт часто має різні правові функції: umowa може стосуватися celu pobytu, prawa do pracy, dochodu та ubezpieczenia, але для кожної функції оцінюються інші елементи.",
          "Документи з різних процедур — MOS, zezwolenie na pracę, PUP, ZUS і KRS — повинні описувати одну фактичну історію, а не паралельні несумісні версії.",
        ],
      } satisfies LegalNodeGuide,
      why: "Список документів без зв’язку з нормою створює видимість повноти, але може не доводити найважливішу умову.",
      checkpoints: [
        "Яка стаття створює умову?",
        "Який факт її виконує?",
        "Який документ це підтверджує?",
        "Чи документ актуальний, повний і несуперечливий?",
      ],
      steps: [
        "Розбий статтю на умови.",
        "До кожної умови додай рядок у таблиці.",
        "Познач відсутні або слабкі докази.",
        "Перевір узгодженість дат, назв, сум і ролей.",
        "Додай коротке пояснення складного зв’язку.",
      ],
      related: ["evidence", "evidence-matrix", "wezwanie-workflow"],
    },
  })

export default documentMatrixTopic

export const documentMatrixMapNode: LegalNode = {
  id: "document-matrix",
  title: documentMatrixTopic.body.title,
  polish: documentMatrixTopic.body.polish,
  summary: documentMatrixTopic.summary,
  why: documentMatrixTopic.body.why,
  checkpoints: [...(documentMatrixTopic.body.checkpoints ?? [])],
  steps: [...(documentMatrixTopic.body.steps ?? [])],
  sources: [...documentMatrixTopic.body.sources],
  related: [...(documentMatrixTopic.body.related ?? [])],
}
