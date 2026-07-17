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
type PermanentBody = LegalMapTopicBody

export const permanentTopic: KnowledgeUnit<PermanentBody> = defineKnowledgeUnit(
  {
    id: "map-topic:permanent",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "permanent" },
    },
    summary:
      "Перевір конкретну категорію, odmowę wszczęcia, odmowę, cofnięcie, właściwość та електронну процедуру.",
    claims: [
      {
        id: "permanent-category",
        kind: "requires-verification",
        text: foreignersLaw.text`Zezwolenie na pobyt stały виникає лише за конкретною категорією ${foreignersLaw.article("195", "art. 195")} та її доказами; загальна тривалість pobytu не замінює цю категорію.`,
        basis: [{ reference: aliensReference, locator: "Art. 195–206" }],
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
      title: "Pobyt stały",
      polish: foreignersLaw.text`${foreignersLaw.articleRange("195", "206", { start: "art. 195", end: "206" })}`,
      sources: [mapTopicSources.aliens],
      guide: {
        introduction: [
          foreignersLaw.text`Zezwolenie na pobyt stały надається на czas nieoznaczony особі, яка належить до однієї з точно визначених категорій ${foreignersLaw.article("195", "art. 195")}.`,
        ],
        regulated: [
          foreignersLaw.text`${foreignersLaw.article("195", "Art. 195")} визначає підстави, а ${foreignersLaw.articleRange("196", "206", { start: "art. 196", end: "206" })} — odmowę wszczęcia, odmowę, cofnięcie, właściwość, заяву та перебування під час процедури.`,
        ],
        appliesWhen: [
          "Підстава може випливати, зокрема, з польського походження, Karty Polaka, сімейного зв’язку або визначеного захисного статусу — лише в законному обсязі конкретного punktu.",
        ],
        conditions: [
          "Заявник доводить усі елементи вибраної категорії, тривалість або безперервність pobytu, якщо вони потрібні, та документи rodzinne або statusowe.",
        ],
        exceptions: [
          foreignersLaw.text`Категорії ${foreignersLaw.article("195", "art. 195")} не можна поєднувати довільно; відсутність однієї умови конкретної підстави не компенсується загальною тривалістю pobytu.`,
        ],
        consequences: [
          "Позитивна decyzja створює безстроковий pobyt, а karta pobytu лише документує його протягом строку ważności документа.",
        ],
        procedure: [
          "Від 27.04.2026 заява подається через MOS; organ перевіряє formalne przesłanki, матеріальну категорію та підстави odmowy/cofnięcia.",
        ],
        foreignersContext: [
          "Для osoby польського походження або posiadacza Karty Polaka значення мають автентичні акти, deklaracje narodowości та інші докази, прямо пов’язані з відповідною підставою.",
        ],
      } satisfies LegalNodeGuide,
    },
  }
)

export default permanentTopic

export const permanentMapNode: LegalNode = {
  id: "permanent",
  title: permanentTopic.body.title,
  polish: permanentTopic.body.polish,
  summary: permanentTopic.summary,
  sources: [...permanentTopic.body.sources],
}
