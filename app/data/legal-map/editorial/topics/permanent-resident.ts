import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { foreignersLaw, mapTopicSources } from "../authoring"
import type { LegalNodeGuide } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"
import type { LegalMapTopicBody } from "./principle-legality"

const aliensReference = {
  kind: "official-source",
  sourceId: "eli-ustawa-o-cudzoziemcach",
} as const
const changeReference = {
  kind: "external",
  url: "https://eli.gov.pl/eli/DU/2026/203/ogl",
} as const
type PermanentResidentBody = LegalMapTopicBody

export const permanentResidentTopic: KnowledgeUnit<PermanentResidentBody> =
  defineKnowledgeUnit({
    id: "map-topic:permanent-resident",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "permanent-resident" },
    },
    summary:
      "Це дві різні безстрокові підстави. Pobyt stały залежить від спеціальної категорії особи, rezydent UE — переважно від тривалості та якості попереднього pobytu.",
    claims: [
      {
        id: "permanent-or-resident-choice",
        kind: "requires-verification",
        text: "Pobyt stały та rezydent długoterminowy UE мають різні матеріальні умови, тому п’ятирічний pobyt не є загальною умовою для pobyt stały.",
        basis: [
          { reference: aliensReference, locator: "Art. 195–206, 211–222a" },
          { reference: changeReference, locator: "current amendments" },
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
      title: "Pobyt stały та rezydent UE",
      polish: foreignersLaw.text`${foreignersLaw.article("195", "art. 195")}–${foreignersLaw.external("222a", "https://eli.gov.pl/eli/DU/2026/203/ogl")} ustawy o cudzoziemcach`,
      sources: [mapTopicSources.aliens, mapTopicSources.udscResident],
      guide: {
        introduction: [
          "Pobyt stały і rezydent długoterminowy UE є двома різними безстроковими zezwoleniami. Перший залежить від спеціальної категорії особи, другий — переважно від тривалості та якості попереднього pobytu.",
        ],
        regulated: [
          foreignersLaw.text`${foreignersLaw.articleRange("195", "206", { start: "art. 195", end: "206" })} регулюють pobyt stały, а ${foreignersLaw.article("211", "art. 211")}–${foreignersLaw.external("222a", "https://eli.gov.pl/eli/DU/2026/203/ogl")} — rezydenta długoterminowego UE; спільною є електронна процедура MOS від 27.04.2026.`,
        ],
        appliesWhen: [
          foreignersLaw.text`Pobyt stały застосовується за однією з підстав ${foreignersLaw.article("195", "art. 195")}, rezydent UE — після належного періоду legalnego i nieprzerwanego pobytu та виконання додаткових умов.`,
        ],
        conditions: [
          "Обидва дозволи є безстроковими, але карти мають власний строк ważności та підлягають wymianie; матеріальні умови маршрутів не змішуються.",
        ],
        exceptions: [
          "П’ятирічний pobyt не є загальною умовою pobytu stałego, а родинне походження чи Karta Polaka не замінюють умов rezydenta UE.",
        ],
        consequences: [
          "Дозволи дають стабільну підставу pobytu та широкий доступ до праці, але можуть бути cofnięte за спеціальними підставами.",
        ],
        procedure: [
          "Спочатку обирається один із двох режимів, потім через MOS подається заява з доказами лише його przesłanek.",
        ],
        foreignersContext: [
          foreignersLaw.text`Період CUKR офіційно зараховується до періоду для rezydenta UE, тоді як сам status UKR і періоди інших режимів потребують оцінки за ${foreignersLaw.external("art. 212", "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf")}.`,
        ],
      } satisfies LegalNodeGuide,
      why: "Це дві різні безстрокові підстави. Pobyt stały залежить від конкретної категорії особи, rezydent UE — головно від п’ятирічного перебування, доходу, страхування та польської мови.",
      checkpoints: [
        "Яка точна підстава pobytu stałego?",
        "Як рахуються 5 років для rezydenta UE?",
        "Які періоди не зараховуються або рахуються частково?",
        "Чи виконано умови доходу, страхування й мови?",
      ],
    },
  })

export default permanentResidentTopic

export const permanentResidentMapNode: LegalNode = {
  id: "permanent-resident",
  title: permanentResidentTopic.body.title,
  polish: permanentResidentTopic.body.polish,
  summary: permanentResidentTopic.summary,
  checkpoints: [...(permanentResidentTopic.body.checkpoints ?? [])],
  sources: [...permanentResidentTopic.body.sources],
}
