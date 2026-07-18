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

type ReopeningBody = LegalMapTopicBody

export const reopeningTopic: KnowledgeUnit<ReopeningBody> = defineKnowledgeUnit(
  {
    id: "map-topic:reopening",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "reopening" },
    },
    summary:
      "Повторний розгляд остаточної справи через закритий перелік спеціальних процесуальних обставин; заява сторони зазвичай у місячний строк від дізнання про підставу.",
    claims: [
      {
        id: "reopening-catalogue",
        kind: "requires-verification",
        text: "Wznowienie postępowania застосовується лише за визначеними законом підставами, а не як вільне повторення звичайного оскарження.",
        basis: [{ reference: kpaSourceReference, locator: "Art. 145–152" }],
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
      title: "Wznowienie postępowania",
      polish: kpaLaw.text`${kpaLaw.articleRange("145", "152", { start: "art. 145", end: "152" })} KPA`,
      sources: [mapTopicSources.kpa],
      guide: {
        introduction: [
          kpaLaw.text`${kpaLaw.articleRange("145", "152", { start: "Art. 145", end: "152" })} KPA регулюють wznowienie postępowania у справі, завершеній остаточною decyzją. Режим відкриває провадження через визначені законом дефекти первинного розгляду.`,
        ],
        regulated: [
          "Закритий каталог підстав, строки подання, właściwy organ, postanowienie про відновлення або відмову, нове рішення та можливість зупинення виконання.",
        ],
        appliesWhen: [
          "Зокрема при фальшивих доказах, злочинному походженні рішення, виключеному працівнику або органі, відсутності участі сторони без її вини, нових істотних фактах чи доказах, які існували на дату рішення, але не були відомі organowi, або відсутності обов’язкової позиції іншого органу.",
        ],
        conditions: [
          "Заява подається до organu, який видав рішення першої інстанції, протягом одного місяця від дня, коли сторона дізналася про підставу; при неучасті без вини строк рахується від дізнання про decyzję.",
          kpaLaw.text`Нові факти або докази за ${kpaLaw.article("145", "art. 145 § 1")} pkt 5 KPA повинні бути істотними, існувати в день первинного рішення і бути невідомими органу, який його видав.`,
        ],
        exceptions: [
          kpaLaw.text`Скасування через підстави з ${kpaLaw.article("145", "art. 145 § 1")} pkt 1–2 не відбувається після десяти років, а через pkt 3–8 та ${kpaLaw.articleRange("145a", "145b", { start: "art. 145a", end: "145b" })} — після п’яти років; якщо можливе лише рішення по суті тотожне попередньому, його також не скасовують.`,
          kpaLaw.text`Підстава відсутності участі без вини та підстави з ${kpaLaw.articleRange("145a", "145b", { start: "art. 145a", end: "145b" })} запускаються лише на żądanie strony.`,
        ],
        consequences: [
          "Після postanowienia про wznowienie organ перевіряє підставу й суть справи, а потім відмовляє у скасуванні або скасовує попередню decyzję та видає нову; за часової перешкоди обмежується встановленням порушення права.",
        ],
        procedure: [
          "Процес має дві фази: допустимість і відкриття через postanowienie, потім перевірка підстави та повторне вирішення суті. Виконання може бути зупинене, якщо ймовірне скасування рішення.",
        ],
        foreignersContext: [
          "Документ про роботу, створений уже після decyzji, зазвичай не є новим доказом, що існував у день рішення. Натомість раніше існуючий і невідомий organowi документ може мати значення, якщо підтверджує істотний на той момент факт.",
        ],
      } satisfies LegalNodeGuide,
    },
  }
)

export default reopeningTopic

export const reopeningMapNode: LegalNode = {
  id: "reopening",
  title: reopeningTopic.body.title,
  polish: reopeningTopic.body.polish,
  summary: reopeningTopic.summary,
  sources: [...reopeningTopic.body.sources],
}
