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

type KpaPrinciplesBody = LegalMapTopicBody

export const kpaPrinciplesTopic: KnowledgeUnit<KpaPrinciplesBody> =
  defineKnowledgeUnit({
    id: "map-topic:kpa-principles",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "kpa-principles" },
    },
    summary:
      "Принципи — не вступна декларація, а правила оцінки всієї поведінки органу: законність, встановлення фактів, довіра, інформування, участь сторони та двоінстанційність.",
    claims: [
      {
        id: "principles-as-working-rules",
        kind: "requires-verification",
        text: "Принципи адміністративного провадження діють протягом усієї справи й оцінюються разом із конкретною процесуальною та матеріальною нормою.",
        basis: [{ reference: kpaSourceReference, locator: "Art. 6–16" }],
      },
      {
        id: "principles-practical-test",
        kind: "practical-inference",
        text: "Порушення засади має процесуальне значення, коли могло вплинути на фактичні висновки, участь сторони або зміст рішення.",
        basis: [{ reference: kpaSourceReference, locator: "Art. 6–16" }],
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
      title: "Загальні принципи",
      polish: kpaLaw.text`zasady ogólne · ${kpaLaw.articleRange("6", "16", { start: "art. 6", end: "16" })} KPA`,
      sources: [mapTopicSources.kpa],
      guide: {
        introduction: [
          kpaLaw.text`${kpaLaw.articleRange("6", "16", { start: "Art. 6", end: "16" })} KPA встановлюють загальні засади адміністративного провадження. Вони діють протягом усієї справи: від прийняття podania до остаточного рішення та його перегляду.`,
          "Засади не замінюють конкретної матеріальної норми, але визначають, як орган має встановлювати факти, інформувати сторону, проводити докази та обґрунтовувати розв’язання.",
        ],
        regulated: [
          "Законність, встановлення фактичного стану, довіра, пропорційність, неупередженість, рівне ставлення, інформаційний обов’язок і активна участь сторони.",
          "Переконування, швидкість і простота провадження, письмова форма, можливість полюбовного врегулювання, двоінстанційність, остаточність і правомірність рішень.",
        ],
        appliesWhen: [
          "Під час кожної процесуальної дії органу, зокрема wezwania, збору доказів, ознайомлення з aktami sprawy, винесення decyzji та розгляду odwołania.",
        ],
        conditions: [
          "Застосування конкретної засади оцінюється разом зі спеціальною нормою KPA та матеріальним законом, який створює право або обов’язок.",
          "Порушення засади має процесуальне значення, коли могло вплинути на фактичні висновки, участь сторони або зміст рішення.",
        ],
        exceptions: [
          "Відступ допускається лише тоді, коли його прямо передбачає KPA або lex specialis; практика urzędu сама по собі не створює винятку.",
          kpaLaw.text`${kpaLaw.article("10", "Art. 10 § 2")} KPA дозволяє обмежити участь сторони лише через термінову загрозу життю чи здоров’ю або невідворотну матеріальну шкоду, із фіксацією причин у матеріалах справи.`,
        ],
        consequences: [
          "Недотримання засад може обґрунтовувати odwołanie, zażalenie, ponaglenie або skargę do WSA залежно від виду дії та стадії справи.",
        ],
        procedure: [
          "Аналіз починається з конкретної дії органу, далі встановлюється спеціальна процесуальна норма, відповідна загальна засада та вплив порушення на результат справи.",
        ],
        foreignersContext: [
          "У справах cudzoziemców KPA утворює загальну процесуальну рамку, а ustawa o cudzoziemcach визначає вид дозволу, матеріальні умови, спеціальні строки й компетентний орган.",
          "Законність pobytu, доступ до rynku pracy та дозвіл на pobyt — різні правові питання; орган повинен окремо вказати норму та факти для кожного з них.",
        ],
      } satisfies LegalNodeGuide,
      why: "Коли конкретна стаття не дає повної відповіді, принципи допомагають оцінити, чи organ належно пояснив вимоги, зібрав докази й дозволив стороні висловитися.",
      checkpoints: [
        "Чи organ встановив усі істотні факти?",
        "Чи повідомив про права й обов’язки?",
        "Чи сторона могла ознайомитися з матеріалом?",
        "Чи рішення пояснює мотиви?",
      ],
    },
  })

export default kpaPrinciplesTopic

export const kpaPrinciplesMapNode: LegalNode = {
  id: "kpa-principles",
  title: kpaPrinciplesTopic.body.title,
  polish: kpaPrinciplesTopic.body.polish,
  summary: kpaPrinciplesTopic.summary,
  why: kpaPrinciplesTopic.body.why,
  checkpoints: [...(kpaPrinciplesTopic.body.checkpoints ?? [])],
  sources: [...kpaPrinciplesTopic.body.sources],
}
