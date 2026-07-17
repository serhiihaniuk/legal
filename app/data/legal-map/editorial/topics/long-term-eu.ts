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
type LongTermEuBody = LegalMapTopicBody

export const longTermEuTopic: KnowledgeUnit<LongTermEuBody> =
  defineKnowledgeUnit({
    id: "map-topic:long-term-eu",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "long-term-eu" },
    },
    summary:
      "Потрібні належно пораховані 5 років, стабільний і регулярний дохід, страхування та підтвердження знання польської мови з урахуванням винятків.",
    claims: [
      {
        id: "long-term-residence-period",
        kind: "requires-verification",
        text: "Rezydent długoterminowy UE вимагає перевірки п’ятирічного legalnego i nieprzerwanego pobytu, доходу, страхування та мови з урахуванням правил зарахування періодів.",
        basis: [{ reference: aliensReference, locator: "Art. 211–222a" }],
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
      title: "Rezydent długoterminowy UE",
      polish: foreignersLaw.text`${foreignersLaw.article("211", "art. 211")}–${foreignersLaw.external("222a", "https://eli.gov.pl/eli/DU/2026/203/ogl")}`,
      sources: [mapTopicSources.aliens, mapTopicSources.udscResident],
      guide: {
        introduction: [
          "Zezwolenie na pobyt rezydenta długoterminowego UE є безстроковим статусом для osoby, яка накопичила належний legalny i nieprzerwany pobyt та стабільно виконує умови інтеграції й утримання.",
        ],
        regulated: [
          foreignersLaw.text`${foreignersLaw.article("211", "Art. 211")} визначає основні умови, ${foreignersLaw.article("212", "art. 212")} — спосіб зарахування періодів і допустимі перерви, а ${foreignersLaw.article("213", "art. 213")}–${foreignersLaw.external("222a", "https://eli.gov.pl/eli/DU/2026/203/ogl")} — виключення, процедуру, відмову та cofnięcie.`,
        ],
        appliesWhen: [
          "Загальне правило вимагає щонайменше п’ять років legalnego i nieprzerwanego pobytu безпосередньо перед поданням.",
        ],
        conditions: [
          foreignersLaw.text`Потрібні stabilne i regularne źródło dochodu, ubezpieczenie zdrowotne, підтверджена польська мова та tytuł prawny do lokalu як необхідний додаток; періоди рахуються за ${foreignersLaw.article("212", "art. 212")}, а не лише календарно.`,
        ],
        exceptions: [
          "Окремі періоди не зараховуються або зараховуються наполовину; загалом одноразова відсутність до 6 місяців і сумарно до 10 місяців не перериває п’ятирічний період, а для визначених posiadaczy Blue Card діють ширші межі.",
        ],
        consequences: [
          "Zezwolenie надається безстроково, тоді як karta rezydenta має строк ważności та підлягає wymianie; статус може бути втрачений за спеціальними підставами.",
        ],
        procedure: [
          "Заява подається через MOS; organ ретроспективно обчислює кожен період pobytu, доходи за потрібні роки, страхування, мову й tytuł do lokalu.",
        ],
        foreignersContext: [
          foreignersLaw.text`Період studiów зазвичай зараховується наполовину, CUKR за офіційною інформацією — повністю, а періоди ochrony або очікування оцінюються за точним текстом ${foreignersLaw.external("art. 212", "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf")}.`,
        ],
      } satisfies LegalNodeGuide,
    },
  })

export default longTermEuTopic

export const longTermEuMapNode: LegalNode = {
  id: "long-term-eu",
  title: longTermEuTopic.body.title,
  polish: longTermEuTopic.body.polish,
  summary: longTermEuTopic.summary,
  sources: [...longTermEuTopic.body.sources],
}
