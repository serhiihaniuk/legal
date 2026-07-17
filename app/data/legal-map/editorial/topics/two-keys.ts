import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { LegalNodeGuide } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"

import { mapTopicSources } from "../authoring"
import type { LegalMapTopicBody } from "./principle-legality"

const aliensSourceReference = {
  kind: "official-source",
  sourceId: "eli-ustawa-o-cudzoziemcach",
} as const

const workSourceReference = {
  kind: "official-source",
  sourceId: "eli-powierzanie-pracy",
} as const

type TwoKeysBody = LegalMapTopicBody

export const twoKeysTopic: KnowledgeUnit<TwoKeysBody> = defineKnowledgeUnit({
  id: "map-topic:two-keys",
  subject: {
    family: "map-topic",
    reference: { kind: "map-node", nodeId: "two-keys" },
  },
  summary:
    "Легальна праця зазвичай потребує одночасно законної підстави перебування та права виконувати конкретну роботу.",
  claims: [
    {
      id: "stay-and-work-keys",
      kind: "requires-verification",
      text: "Законний pobyt і право до конкретної праці — окремі питання, які потрібно перевіряти разом у часі та за фактичними умовами.",
      basis: [
        { reference: aliensSourceReference, locator: "legal stay" },
        { reference: workSourceReference, locator: "access to work" },
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
    title: "Два ключі: pobyt + praca",
    polish: "legalny pobyt oraz legalna praca",
    sources: [mapTopicSources.aliens, mapTopicSources.work],
    guide: {
      introduction: [
        "Legalny pobyt і legalna praca — два окремі правові ключі. Особа повинна мати чинну підставу перебування та окрему підставу виконувати саме цю роботу на заявлених умовах.",
      ],
      regulated: [
        "Ustawa o cudzoziemcach регулює pobyt, а ustawa o warunkach dopuszczalności powierzania pracy cudzoziemcom і спеціальні акти — доступ до праці та обов’язки роботодавця.",
      ],
      appliesWhen: [
        "Подвійна перевірка потрібна перед початком роботи, після зміни роботодавця або умов, у період очікування на рішення та після втрати статусу.",
      ],
      conditions: [
        "Підстава праці має охоплювати особу, podmiot, вид роботи, період та інші істотні умови або прямо звільняти від дозволу.",
      ],
      exceptions: [
        "Вільний доступ до rynku pracy усуває потребу в zezwoleniu na pracę, але не усуває потребу в законному pobycie; zezwolenie na pracę не легалізує pobytu.",
      ],
      consequences: [
        "Відсутність будь-якого ключа створює ризик нелегального перебування або нелегального доручення/виконання праці та відповідні наслідки для сторін.",
      ],
      procedure: [
        "Для кожного дня роботи фіксуються підстава pobytu, підстава pracy, фактичні умови та документальне підтвердження.",
      ],
      foreignersContext: [
        "Status UKR може одночасно бути підставою pobytu і, разом із належним powiadomieniem, доступу до праці; очікування на звичайний pobyt не завжди створює нове право працювати.",
      ],
    } satisfies LegalNodeGuide,
    why: "Штамп або легальне очікування на рішення не завжди автоматично дає нове право до праці. І навпаки, дозвіл на роботу не легалізує перебування.",
    checkpoints: [
      "На якій підставі особа перебуває сьогодні?",
      "Чи ця підстава дозволяє працювати?",
      "Чи потрібен дозвіл/oświadczenie?",
      "Чи умови роботи відповідають документу?",
    ],
  },
})

export default twoKeysTopic

export const twoKeysMapNode: LegalNode = {
  id: "two-keys",
  title: twoKeysTopic.body.title,
  polish: twoKeysTopic.body.polish,
  summary: twoKeysTopic.summary,
  why: twoKeysTopic.body.why,
  checkpoints: [...(twoKeysTopic.body.checkpoints ?? [])],
  sources: [...twoKeysTopic.body.sources],
}
