import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { LegalNodeGuide } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"

import { mapTopicSources } from "../authoring"
import type { LegalMapTopicBody } from "./principle-legality"

const kpaSourceReference = {
  kind: "official-source",
  sourceId: "eli-kpa",
} as const

const aliensSourceReference = {
  kind: "official-source",
  sourceId: "eli-ustawa-o-cudzoziemcach",
} as const

type StartCaseBody = LegalMapTopicBody

export const startCaseTopic: KnowledgeUnit<StartCaseBody> = defineKnowledgeUnit(
  {
    id: "map-topic:start-case",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "start-case" },
    },
    summary:
      "Одна справа може мати багато документів, але право застосовується до фактів: хто ця особа, що вона робить, на якій підставі перебуває, чого просить і коли відбулися події.",
    claims: [
      {
        id: "facts-before-document",
        kind: "practical-inference",
        text: "Юридична кваліфікація починається з підтверджених фактів і дат, а не з назви заяви або документа.",
        basis: [
          { reference: kpaSourceReference, locator: "fact-finding" },
          { reference: aliensSourceReference, locator: "material conditions" },
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
      title: "Почни з фактів, не з документа",
      polish: "stan faktyczny",
      sources: [mapTopicSources.kpa, mapTopicSources.aliens],
      guide: {
        introduction: [
          "Адміністративна справа починається не з назви документа, а зі stan faktyczny: особи, подій, дат, дій і документально підтверджених обставин. Лише після встановлення фактів їм надають юридичну кваліфікацію.",
        ],
        regulated: [
          "KPA регулює встановлення фактичного стану, збирання й оцінку доказів та участь сторони, а спеціальний закон визначає матеріальні умови конкретного дозволу.",
        ],
        appliesWhen: [
          "Цей підхід застосовується на початку нової справи, при зміні обставин, після отримання wezwania та перед оскарженням рішення.",
        ],
        conditions: [
          "Опис повинен відділяти підтверджені факти від слів клієнта, правових висновків і припущень; кожна істотна дата має бути пов’язана з джерелом.",
        ],
        exceptions: [
          "Факт може бути безспірним або відомим органу з urzędu, але його значення все одно оцінюється в межах конкретної правової норми.",
        ],
        consequences: [
          "Неправильний вихідний факт веде до хибної мети перебування, невідповідного набору доказів або пропуску строку; правильна хронологія показує, яка редакція закону діє.",
        ],
        procedure: [
          "Спочатку формується хронологія, потім таблиця факт → юридичне поняття → норма → умова → доказ → процесуальна дія і строк.",
        ],
        foreignersContext: [
          "У справах cudzoziemców окремо фіксуються громадянство, документ подорожі, підстава в’їзду, усі підстави перебування, виїзди, фактична мета, робота та попередні провадження.",
        ],
      } satisfies LegalNodeGuide,
      why: "Якщо одразу читати лише назву заяви або wezwania, легко прийняти формальну етикетку за реальну правову ситуацію.",
      checkpoints: [
        "Хто є заявником і який має статус?",
        "Яка дата в’їзду, подання та закінчення попередньої підстави?",
        "Яка реальна, головна ціль перебування понад 3 місяці?",
        "Які факти вже доведені, а які лише заявлені?",
      ],
      steps: [
        "Запиши хронологію без юридичних висновків.",
        "Відділи факти від припущень клієнта або роботодавця.",
        "Для кожного факту знайди юридичне поняття.",
        "Лише після цього шукай норму й докази її умов.",
      ],
    },
  }
)

export default startCaseTopic

export const startCaseMapNode: LegalNode = {
  id: "start-case",
  title: startCaseTopic.body.title,
  polish: startCaseTopic.body.polish,
  summary: startCaseTopic.summary,
  why: startCaseTopic.body.why,
  checkpoints: [...(startCaseTopic.body.checkpoints ?? [])],
  steps: [...(startCaseTopic.body.steps ?? [])],
  sources: [...startCaseTopic.body.sources],
}
