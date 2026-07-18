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

type StudyResearchBody = LegalMapTopicBody

export const studyResearchTopic: KnowledgeUnit<StudyResearchBody> =
  defineKnowledgeUnit({
    id: "map-topic:study-research",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "study-research" },
    },
    summary:
      "Studia, badania naukowe, staż і mobilność мають окремі підстави, бо закон оцінює не лише присутність у закладі, а статус установи, програму та реальну мету.",
    claims: [
      {
        id: "study-route-specifics",
        kind: "requires-verification",
        text: "Навчальна, наукова та стажова підстави мають власні умови установи, програми, ресурсів, страхування й доступу до праці.",
        basis: [{ reference: aliensSourceReference, locator: "Art. 144–157f" }],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-07-18",
      verifiedAt: "2026-07-18",
    },
    body: {
      title: "Studia, badania, staż",
      polish: foreignersLaw.text`${foreignersLaw.articleRange("144", "157f", { start: "art. 144", end: "157f" })}`,
      sources: [mapTopicSources.aliens],
      guide: {
        introduction: [
          "Studia, badania naukowe, staż і mobilność мають окремі підстави, бо закон оцінює не лише присутність у закладі, а статус установи, програму та реальну мету.",
        ],
        regulated: [
          foreignersLaw.text`${foreignersLaw.articleRange("144", "157f", { start: "Art. 144", end: "157f" })} охоплюють studia, mobilność studenta, badania naukowe, mobilność naukowca, staż та пов’язані процедури.`,
        ],
        appliesWhen: [
          "Підстава відповідає фактичній формі навчання, дослідження або стажу та належній установі.",
        ],
        conditions: [
          "Зазвичай потрібні прийняття або umowa з установою, оплата навчання за наявності, страхування та достатні засоби на утримання і powrót; спеціальні умови залежать від маршруту.",
        ],
        exceptions: [
          "Studia stacjonarne, інші форми навчання, badania і staż не є взаємозамінними; кожна категорія має власні правила праці та odmowy.",
        ],
        consequences: [
          "Дозвіл прив’язаний до освітньої або наукової мети; припинення навчання чи співпраці може активувати повідомлення або cofnięcie.",
        ],
        procedure: [
          "Через MOS подаються заява та документи установи, фінансування, страхування й проживання; organ перевіряє статус установи та реальність мети.",
        ],
        foreignersContext: [
          "Періоди studiów можуть зараховуватися до rezydenta UE частково, а доступ до праці визначається конкретною навчальною підставою та чинними правилами праці.",
        ],
      } satisfies LegalNodeGuide,
    },
  })

export default studyResearchTopic

export const studyResearchMapNode: LegalNode = {
  id: "study-research",
  title: studyResearchTopic.body.title,
  polish: studyResearchTopic.body.polish,
  summary: studyResearchTopic.summary,
  sources: [...studyResearchTopic.body.sources],
}
