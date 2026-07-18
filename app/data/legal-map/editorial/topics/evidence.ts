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

type EvidenceBody = LegalMapTopicBody

export const evidenceTopic: KnowledgeUnit<EvidenceBody> = defineKnowledgeUnit({
  id: "map-topic:evidence",
  subject: {
    family: "map-topic",
    reference: { kind: "map-node", nodeId: "evidence" },
  },
  summary:
    "Доказом може бути все законне, що допомагає встановити факт. Organ збирає й оцінює весь матеріал, а сторона може подавати докази та висловлюватися щодо них.",
  claims: [
    {
      id: "fact-to-evidence",
      kind: "requires-verification",
      text: "Документ має значення не через назву, а тому, що підтверджує конкретну умову закону та юридично істотний факт.",
      basis: [{ reference: kpaSourceReference, locator: "Art. 75–88a" }],
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
    title: "Доказове провадження",
    polish: kpaLaw.text`postępowanie dowodowe · ${kpaLaw.articleRange("75", "88a", { start: "art. 75", end: "88a" })} KPA`,
    sources: [mapTopicSources.kpa],
    guide: {
      introduction: [
        kpaLaw.text`${kpaLaw.articleRange("75", "88a", { start: "Art. 75", end: "88a" })} KPA регулюють postępowanie dowodowe: допустимі джерела доказів, участь сторони та оцінку всього матеріалу справи.`,
      ],
      regulated: [
        "Документи, свідки, biegły, oględziny, oświadczenie strony, доказову силу dokumentu urzędowego, повідомлення про доказові дії та принцип swobodnej oceny dowodów.",
      ],
      appliesWhen: [
        "Після визначення матеріальних передумов справи та до фактичних висновків, на яких ґрунтується decyzja.",
      ],
      conditions: [
        kpaLaw.text`${kpaLaw.article("75", "Art. 75")} KPA допускає все, що може сприяти з’ясуванню справи й не суперечить праву; доказ пов’язується з конкретним юридично істотним фактом.`,
        kpaLaw.text`За ${kpaLaw.article("80", "art. 80")} KPA орган оцінює факт на підставі всього матеріалу, а ${kpaLaw.article("81", "art. 81")} KPA за загальним правилом не дозволяє визнати факт доведеним без можливості сторони висловитися.`,
        kpaLaw.text`${kpaLaw.article("79a", "Art. 79a")} KPA вимагає перед негативним рішенням у справі на żądanie strony назвати залежні від сторони недоведені передумови, якщо вони можуть спричинити негативний результат.`,
      ],
      exceptions: [
        kpaLaw.text`${kpaLaw.article("81a", "Art. 81a")} KPA вирішує недоведені фактичні сумніви на користь сторони лише у справах про накладення обов’язку, обмеження або позбавлення права та містить винятки, зокрема конфлікт інтересів, спеціальний тягар доказування і важливий публічний інтерес.`,
        "Dokument urzędowy має підвищену доказову силу в межах компетенції та форми, але його зміст може бути спростований.",
      ],
      consequences: [
        "Висновок, що ігнорує істотний доказ, не пояснює суперечності або спирається на матеріал без участі сторони, може бути скасований через порушення правил провадження.",
      ],
      procedure: [
        "Доказова матриця поєднує матеріальну передумову, точний факт, період, джерело доказу, суперечності, потребу актуалізації та висновок органу в uzasadnieniu.",
      ],
      foreignersContext: [
        "Umowa o pracę, ZUS, PIT, wyciąg bankowy, zaświadczenie pracodawcy чи meldunek не є самодостатніми назвами доказів. Їх значення залежить від того, який факт і за який період вони підтверджують у конкретному виді дозволу.",
      ],
    } satisfies LegalNodeGuide,
    why: "Документ має значення не через назву, а тому, що підтверджує конкретну умову закону. Один факт може вимагати кількох взаємно узгоджених доказів.",
    checkpoints: [
      "Яку саме умову доводить документ?",
      "Чи доказ актуальний і стосується потрібного періоду?",
      "Чи дані не суперечать іншим документам?",
      "Чи organ вказав, які умови ще не доведені?",
    ],
    steps: [
      "Створи матрицю умова → факт → доказ.",
      "Додай пояснення зв’язку, якщо він неочевидний.",
      kpaLaw.text`Перевір право доступу до akt sprawy за ${kpaLaw.article("73", "art. 73")}.`,
      kpaLaw.text`Перед рішенням перевір можливість висловитися за ${kpaLaw.article("10", "art. 10")} і ${kpaLaw.article("81", "81")}.`,
    ],
  },
})

export default evidenceTopic

export const evidenceMapNode: LegalNode = {
  id: "evidence",
  title: evidenceTopic.body.title,
  polish: evidenceTopic.body.polish,
  summary: evidenceTopic.summary,
  why: evidenceTopic.body.why,
  checkpoints: [...(evidenceTopic.body.checkpoints ?? [])],
  steps: [...(evidenceTopic.body.steps ?? [])],
  sources: [...evidenceTopic.body.sources],
}
