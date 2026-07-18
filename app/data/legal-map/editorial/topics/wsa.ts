import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { LegalNodeGuide } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"

import { kpaLaw, mapTopicSources, ppsaLaw } from "../authoring"
import type { LegalMapTopicBody } from "./principle-legality"

const ppsaSourceReference = {
  kind: "official-source",
  sourceId: "eli-ppsa",
} as const

const nsaReference = {
  kind: "external",
  url: "https://orzeczenia.nsa.gov.pl/cbo/query",
} as const

type WsaBody = LegalMapTopicBody

export const wsaTopic: KnowledgeUnit<WsaBody> = defineKnowledgeUnit({
  id: "map-topic:wsa",
  subject: {
    family: "map-topic",
    reference: { kind: "map-node", nodeId: "wsa" },
  },
  summary:
    "Суд перевіряє законність адміністративного акта або бездіяльності. Загальний строк скарги на рішення — 30 днів; подання відбувається через organ.",
  claims: [
    {
      id: "wsa-legal-control",
      kind: "requires-verification",
      text: "WSA контролює законність адміністрації, але не є третьою адміністративною інстанцією та не замінює organ у вирішенні справи по суті.",
      basis: [
        { reference: ppsaSourceReference, locator: "Art. 3, 50–61, 145–153" },
        { reference: nsaReference, locator: "official case-law database" },
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
    title: "Skarga do WSA",
    polish: ppsaLaw.text`${ppsaLaw.article("3", "art. 3")}, ${ppsaLaw.articleRange("50", "61", { start: "50", end: "61" })}, ${ppsaLaw.articleRange("145", "153", { start: "145", end: "153" })} p.p.s.a.`,
    sources: [mapTopicSources.ppsa, mapTopicSources.nsa],
    guide: {
      introduction: [
        "PPSA регулює skargę do Wojewódzkiego Sądu Administracyjnego. WSA контролює законність адміністрації, але не є третьою адміністративною інстанцією і за загальним правилом не замінює organ у вирішенні справи по суті.",
      ],
      regulated: [
        kpaLaw.text`${ppsaLaw.article("3", "Art. 3")} PPSA визначає предмет судового контролю; ${ppsaLaw.articleRange("50", "54", { start: "art. 50", end: "54" })} — право і шлях skargi; ${ppsaLaw.article("61", "art. 61")} — виконання акту; ${ppsaLaw.articleRange("145", "153", { start: "art. 145", end: "153" })} — види судових розв’язань і їх наслідки.`,
      ],
      appliesWhen: [
        "Щодо ostatecznej decyzji, визначених postanowień, інших оскаржуваних актів і дій, bezczynności або przewlekłości після виконання передумов PPSA.",
      ],
      conditions: [
        kpaLaw.text`За ${ppsaLaw.article("52", "art. 52")} PPSA skarga зазвичай допустима після вичерпання odwołania, zażalenia або ponaglenia, якщо такий засіб існував.`,
        "Skarga на rozstrzygnięcie подається у 30-денний строк від doręczenia через organ, дія або бездіяльність якого оскаржується.",
        "Суд перевіряє порушення матеріального права, процесуальні порушення, що могли істотно вплинути на результат, і підстави nieważności.",
      ],
      exceptions: [
        kpaLaw.text`Skarga сама по собі не зупиняє виконання акту. Зупинення можливе за умов ${ppsaLaw.article("61", "art. 61")} PPSA органом або судом.`,
        kpaLaw.text`Коли доступний wniosek o ponowne rozpatrzenie sprawy, PPSA інколи дозволяє skargę без нього, але ${ppsaLaw.article("52", "art. 52 § 3")} містить спеціальний виняток для справ cudzoziemców у компетенції ministra właściwego do spraw zagranicznych та для konsula.`,
      ],
      consequences: [
        kpaLaw.text`WSA може скасувати decyzję або postanowienie, встановити nieważność чи видання з порушенням права, відхилити skargę або у справах бездіяльності зобов’язати organ діяти. Правова оцінка й вказівки суду зв’язують organ за ${ppsaLaw.article("153", "art. 153")} PPSA.`,
      ],
      procedure: [
        "Після подання skargi через organ він передає її разом з aktami й відповіддю до суду; суд перевіряє допустимість, межі законності та видає wyrok або postanowienie. Подальша skarga kasacyjna до NSA має окремі умови.",
      ],
      foreignersContext: [
        "У справі про pobyt WSA оцінює, чи Szef UdSC і wojewoda правильно застосували право, встановили факти та забезпечили процедуру. Навіть після скасування негативної decyzji дозвіл не завжди виникає автоматично — справа часто повертається organowi.",
      ],
    } satisfies LegalNodeGuide,
  },
})

export default wsaTopic

export const wsaMapNode: LegalNode = {
  id: "wsa",
  title: wsaTopic.body.title,
  polish: wsaTopic.body.polish,
  summary: wsaTopic.summary,
  sources: [...wsaTopic.body.sources],
}
