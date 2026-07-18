import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { foreignersLaw, mapTopicSources } from "../authoring"
import type { LegalNodeGuide } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"

import type { LegalMapTopicBody } from "./principle-legality"

const aliensSourceReference = {
  kind: "official-source",
  sourceId: "eli-ustawa-o-cudzoziemcach",
} as const

const aliensChangeReference = {
  kind: "external",
  url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
} as const

type TemporaryCommonBody = LegalMapTopicBody

export const temporaryCommonTopic: KnowledgeUnit<TemporaryCommonBody> =
  defineKnowledgeUnit({
    id: "map-topic:temporary-common",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "temporary-common" },
    },
    summary:
      "Дозвіл на тимчасове перебування пов’язаний із конкретною метою понад 3 місяці й зазвичай надається максимум до 3 років. Спільні статті регулюють початок, відмову, відкликання, organ та процедуру.",
    claims: [
      {
        id: "temporary-common-frame",
        kind: "requires-verification",
        text: "Спільні правила pobyt czasowy застосовуються разом зі спеціальною главою обраної мети та актуальними перехідними положеннями.",
        basis: [
          { reference: aliensSourceReference, locator: "Art. 98–113a" },
          { reference: aliensChangeReference, locator: "current amendments" },
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
      title: "Pobyt czasowy — спільні правила",
      polish: foreignersLaw.text`${foreignersLaw.articleRange("98", "113a", { start: "art. 98", end: "113a" })} ustawy o cudzoziemcach`,
      sources: [mapTopicSources.aliens, mapTopicSources.aliensChange],
      guide: {
        introduction: [
          "Pobyt czasowy є строковим дозволом, пов’язаним із конкретною метою перебування понад три місяці. Спільні норми діють разом зі спеціальною главою обраної мети.",
        ],
        regulated: [
          foreignersLaw.text`${foreignersLaw.articleRange("98", "113a", { start: "Art. 98", end: "113a" })} ustawy o cudzoziemcach визначають загальну конструкцію, заяву, odmowę wszczęcia, odmowę, cofnięcie, właściwość та наслідки.`,
        ],
        appliesWhen: [
          "Дозвіл застосовується, коли законна мета потребує перебування довше трьох місяців і підпадає під конкретну матеріальну підставу.",
        ],
        conditions: [
          "Мета та її спеціальні умови повинні існувати на дату рішення, а строк дозволу має відповідати заявленому періоду в законних межах.",
        ],
        exceptions: [
          "Окремі короткотривалі, гуманітарні, mobilnościowe або спеціальні режими мають власні строки й відступи від загальної конструкції.",
        ],
        consequences: [
          "Дозвіл легалізує pobyt у визначеній меті; припинення підстави може створити обов’язок повідомлення, зміну або cofnięcie.",
        ],
        procedure: [
          "Від 27.04.2026 заява подається через MOS, після чого organ перевіряє formalne та materialne przesłanki і видає decyzję.",
        ],
        foreignersContext: [
          "Karta pobytu документує дозвіл, але правовий зміст звичайного pobytu випливає з decyzji та статті, на якій її засновано.",
        ],
      } satisfies LegalNodeGuide,
      checkpoints: [
        "Чи мета триває понад 3 місяці?",
        "Чи немає odmowy wszczęcia?",
        "Чи виконано загальні та спеціальні умови?",
        "Який обов’язок повідомлення після зміни підстави?",
      ],
    },
  })

export default temporaryCommonTopic

export const temporaryCommonMapNode: LegalNode = {
  id: "temporary-common",
  title: temporaryCommonTopic.body.title,
  polish: temporaryCommonTopic.body.polish,
  summary: temporaryCommonTopic.summary,
  checkpoints: [...(temporaryCommonTopic.body.checkpoints ?? [])],
  sources: [...temporaryCommonTopic.body.sources],
}
