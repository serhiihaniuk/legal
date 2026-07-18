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
type OtherStayBody = LegalMapTopicBody

export const otherStayTopic: KnowledgeUnit<OtherStayBody> = defineKnowledgeUnit(
  {
    id: "map-topic:other-stay",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "other-stay" },
    },
    summary:
      "Інші обставини — це не одна залишкова підстава, а група окремих дозволів із самостійними адресатами та наслідками.",
    claims: [
      {
        id: "other-stay-specific",
        kind: "requires-verification",
        text: "Кожна інша підстава має власний фактичний склад, строк, доступ до праці та наслідки.",
        basis: [{ reference: aliensSourceReference, locator: "Art. 170–194" }],
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
      title: "Інші обставини pobytu",
      polish: foreignersLaw.text`${foreignersLaw.articleRange("170", "194", { start: "art. 170", end: "194" })}`,
      sources: [mapTopicSources.aliens],
      guide: {
        introduction: [
          "Інші обставини — це не одна залишкова підстава, а група окремих дозволів із самостійними адресатами та наслідками.",
        ],
        regulated: [
          foreignersLaw.text`${foreignersLaw.articleRange("170", "194", { start: "Art. 170", end: "194" })} охоплюють, серед іншого, ofiary handlu ludźmi, okoliczności wymagające krótkotrwałego pobytu, pracę sezonową, absolwentów та інші визначені ситуації.`,
        ],
        appliesWhen: [
          "Застосовується лише конкретна стаття, фактичний склад якої повністю відповідає ситуації особи.",
        ],
        conditions: [
          "Кожна підстава має власний документальний факт: співпрацю з organem, особисту явку, сезонну роботу, завершення studiów або іншу прямо названу обставину.",
        ],
        exceptions: [
          foreignersLaw.text`Короткотривалий pobyt за ${foreignersLaw.article("181", "art. 181")} надається на необхідний строк до шести місяців і не повинен використовуватися як загальна заміна звичайної легалізації.`,
        ],
        consequences: [
          "Строк, доступ до праці, можливість продовження та зарахування до rezydenta UE різняться залежно від конкретної статті.",
        ],
        procedure: [
          "Перед поданням визначається точний artykuł, після чого через MOS подаються докази саме його фактичного складу.",
        ],
        foreignersContext: [
          "Наявність гуманітарної або короткотривалої обставини не означає автоматичної доступності всіх інших pobytowych маршрутів.",
        ],
      } satisfies LegalNodeGuide,
    },
  }
)

export default otherStayTopic

export const otherStayMapNode: LegalNode = {
  id: "other-stay",
  title: otherStayTopic.body.title,
  polish: otherStayTopic.body.polish,
  summary: otherStayTopic.summary,
  sources: [...otherStayTopic.body.sources],
}
