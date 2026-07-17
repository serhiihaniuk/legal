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

type BusinessStayBody = LegalMapTopicBody

export const businessStayTopic: KnowledgeUnit<BusinessStayBody> =
  defineKnowledgeUnit({
    id: "map-topic:business-stay",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "business-stay" },
    },
    summary:
      "Сам факт реєстрації компанії не достатній. Закон перевіряє реальність і результати діяльності або здатність виконати встановлені умови.",
    claims: [
      {
        id: "real-business",
        kind: "requires-verification",
        text: "Pobyt у бізнесовій меті спирається на реальну діяльність і законні економічні показники, а не лише на реєстрацію або володіння udziałami.",
        basis: [{ reference: aliensSourceReference, locator: "Art. 142–143" }],
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
      title: "Działalność gospodarcza",
      polish: foreignersLaw.text`${foreignersLaw.articleRange("142", "143", { start: "art. 142", end: "143" })}`,
      sources: [mapTopicSources.aliens],
      guide: {
        introduction: [
          "Pobyt czasowy w celu prowadzenia działalności gospodarczej спирається на реальну господарську діяльність, а не лише на реєстрацію firmy або володіння udziałami.",
        ],
        regulated: [
          foreignersLaw.text`${foreignersLaw.articleRange("142", "143", { start: "Art. 142", end: "143" })} визначають адресатів, економічні показники, zatrudnienie або здатність виконати ці умови в майбутньому та підстави odmowy.`,
        ],
        appliesWhen: [
          "Метою pobytu є prowadzenie działalności, управління визначеною spółką, ведення її справ як komplementariusz або дія як prokurent у передбачених законом випадках.",
        ],
        conditions: [
          "Доводяться реальна діяльність, дохід або потрібне zatrudnienie, або ресурси й дії, що дозволять досягти законних показників, зокрема інвестиції, інновації чи створення місць праці.",
        ],
        exceptions: [
          "Різні форми діяльності та функції в spółce змінюють набір dokumentów і можуть вимагати додаткового załącznika щодо праці.",
        ],
        consequences: [
          "Позитивний дозвіл легалізує pobyt у бізнесовій меті; фіктивна, zawieszona або економічно непідтверджена діяльність може вести до відмови чи cofnięcia.",
        ],
        procedure: [
          foreignersLaw.text`Через MOS подаються заява, реєстрові, фінансові, податкові, трудові та планові докази, після чого organ оцінює виконання альтернативних умов ${foreignersLaw.article("142", "art. 142")}.`,
        ],
        foreignersContext: [
          foreignersLaw.text`Для beneficjenta UKR доступність звичайної бізнесової процедури у 2026 році перевіряється через ${foreignersLaw.external("art. 45", "https://eli.gov.pl/eli/DU/2026/203/ogl")} ustawy Dz.U. 2026 poz. 203.`,
        ],
      } satisfies LegalNodeGuide,
    },
  })

export default businessStayTopic

export const businessStayMapNode: LegalNode = {
  id: "business-stay",
  title: businessStayTopic.body.title,
  polish: businessStayTopic.body.polish,
  summary: businessStayTopic.summary,
  sources: [...businessStayTopic.body.sources],
}
