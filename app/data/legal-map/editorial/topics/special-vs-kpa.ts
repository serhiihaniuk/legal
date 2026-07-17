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

const workSourceReference = {
  kind: "official-source",
  sourceId: "eli-powierzanie-pracy",
} as const

type SpecialVsKpaBody = LegalMapTopicBody

export const specialVsKpaTopic: KnowledgeUnit<SpecialVsKpaBody> =
  defineKnowledgeUnit({
    id: "map-topic:special-vs-kpa",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "special-vs-kpa" },
    },
    summary:
      "KPA дає загальний каркас процедури. Ustawa o cudzoziemcach або закон про працю іноземців можуть додавати чи змінювати окремі правила.",
    claims: [
      {
        id: "general-and-special-rules",
        kind: "requires-verification",
        text: "Матеріальна підстава визначається спеціальним законом, а KPA доповнює її загальними процесуальними правилами, якщо lex specialis не встановлює іншого.",
        basis: [
          { reference: kpaSourceReference, locator: "general procedure" },
          { reference: aliensSourceReference, locator: "special stay rules" },
          { reference: workSourceReference, locator: "special work rules" },
        ],
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
      title: "KPA і спеціальний закон",
      polish: "lex specialis — przepisy szczególne",
      sources: [
        mapTopicSources.kpa,
        mapTopicSources.aliens,
        mapTopicSources.work,
      ],
      guide: {
        introduction: [
          "KPA є загальним процедурним каркасом, а ustawa o cudzoziemcach, specustawa ukraińska та правила праці cudzoziemców є lex specialis у своїх предметах.",
        ],
        regulated: [
          "KPA визначає засади, właściwość, doręczenia, строки, dowody, decyzje та оскарження; спеціальні акти визначають види дозволів, матеріальні умови, особливу форму заяви й спеціальні наслідки.",
        ],
        appliesWhen: [
          "Обидва рівні застосовуються паралельно, якщо спеціальний закон прямо не змінює або не виключає загального правила.",
        ],
        conditions: [
          "Спочатку встановлюється спеціальна матеріальна підстава, потім відповідна спеціальна процедура, а прогалини заповнюються KPA.",
        ],
        exceptions: [
          "Przepisy przejściowe можуть залишити старий порядок для заяв, поданих до визначеної дати; нова форма не застосовується ретроактивно без прямої норми.",
        ],
        consequences: [
          "Ігнорування lex specialis веде до неправильної форми або підстави, а ігнорування KPA — до помилок у doręczeniu, строках, доказах і засобах захисту.",
        ],
        procedure: [
          "У робочій нотатці окремо записуються матеріальна норма, спеціальна процесуальна норма, додаткові норми KPA та перехідне правило.",
        ],
        foreignersContext: [
          "Після 27.04.2026 електронна форма MOS є прикладом спеціальної процедури, тоді як оцінка доказів і зміст decyzji надалі підлягають KPA.",
        ],
      } satisfies LegalNodeGuide,
      why: "Правильна відповідь часто знаходиться не в одному акті. Наприклад, KPA пояснює wezwanie та строки, а спеціальний закон — матеріальні умови дозволу й електронний спосіб подання.",
      checkpoints: [
        "Чи регулює спеціальний закон це питання прямо?",
        "Які правила KPA застосовуються додатково?",
        "Чи є przepisy przejściowe, залежні від дати подання?",
        "Чи читаю актуальну редакцію на потрібну дату?",
      ],
      steps: [
        "Знайди матеріальну підставу у спеціальному законі.",
        "Знайди процедурний етап у KPA.",
        "Перевір зміни та норми перехідні.",
        "Зістав обидва акти в нотатці до справи.",
      ],
    },
  })

export default specialVsKpaTopic

export const specialVsKpaMapNode: LegalNode = {
  id: "special-vs-kpa",
  title: specialVsKpaTopic.body.title,
  polish: specialVsKpaTopic.body.polish,
  summary: specialVsKpaTopic.summary,
  why: specialVsKpaTopic.body.why,
  checkpoints: [...(specialVsKpaTopic.body.checkpoints ?? [])],
  steps: [...(specialVsKpaTopic.body.steps ?? [])],
  sources: [...specialVsKpaTopic.body.sources],
}
