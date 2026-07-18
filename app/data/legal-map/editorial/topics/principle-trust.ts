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

type PrincipleTrustBody = LegalMapTopicBody

export const principleTrustTopic: KnowledgeUnit<PrincipleTrustBody> =
  defineKnowledgeUnit({
    id: "map-topic:principle-trust",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "principle-trust" },
    },
    summary:
      "Organ має діяти пропорційно, послідовно й належно інформувати сторону, щоб вона не зазнала шкоди через незнання права.",
    claims: [
      {
        id: "trust-and-information",
        kind: "requires-verification",
        text: "Засади довіри та інформування оцінюють послідовність дій органу й те, чи отримала сторона істотну інформацію для захисту своїх прав.",
        basis: [{ reference: kpaSourceReference, locator: "Art. 8–9" }],
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
      title: "Довіра й інформування",
      polish: kpaLaw.text`${kpaLaw.articleRange("8", "9", { start: "art. 8", end: "9" })} KPA`,
      sources: [mapTopicSources.kpa],
      guide: {
        introduction: [
          kpaLaw.text`${kpaLaw.article("8", "Art. 8")} KPA вимагає провадження, яке формує довіру до влади, із дотриманням пропорційності, неупередженості та рівного ставлення. ${kpaLaw.article("9", "Art. 9")} KPA покладає на орган обов’язок належно інформувати сторону про істотні фактичні й правові обставини.`,
        ],
        regulated: [
          "Послідовність адміністративної практики, зрозумілість комунікації, запобігання шкоді через незнання права та заборона довільного відступу від усталеної практики при однакових фактах і праві.",
        ],
        appliesWhen: [
          "Коли organ змінює оцінку однакових фактів, формулює неоднозначне wezwanie, не пояснює наслідки процесуальної дії або застосовує різні стандарти до подібних справ.",
        ],
        conditions: [
          "Посилання на усталену практику має значення лише за порівнюваного фактичного стану та тієї самої редакції права.",
          "Інформаційний обов’язок охоплює обставини, які можуть вплинути на права й обов’язки сторони в конкретній справі.",
        ],
        exceptions: [
          "Орган може відступити від попередньої практики, якщо існує обґрунтована причина, зокрема зміна закону, істотна різниця фактів або виправлення неправильної практики; причина має бути пояснена.",
        ],
        consequences: [
          "Несподівана й необґрунтована зміна підходу або неналежне pouczenie може становити процесуальний аргумент проти рішення, особливо коли вплинуло на можливість сторони діяти вчасно.",
        ],
        procedure: [
          "Порівнюються факти, дата правового стану, попередня офіційна практика, зміст отриманої інформації та конкретний негативний наслідок для сторони.",
        ],
        foreignersContext: [
          "У провадженнях pobytowych пояснення urzędu не може приховувати різницю між brakiem formalnym, відсутністю матеріальної умови та необхідністю актуалізації доказу. Кожна з цих ситуацій має іншу правову підставу і наслідок.",
        ],
      } satisfies LegalNodeGuide,
    },
  })

export default principleTrustTopic

export const principleTrustMapNode: LegalNode = {
  id: "principle-trust",
  title: principleTrustTopic.body.title,
  polish: principleTrustTopic.body.polish,
  summary: principleTrustTopic.summary,
  sources: [...principleTrustTopic.body.sources],
}
