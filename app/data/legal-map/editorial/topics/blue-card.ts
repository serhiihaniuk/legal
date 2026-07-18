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

type BlueCardBody = LegalMapTopicBody

export const blueCardTopic: KnowledgeUnit<BlueCardBody> = defineKnowledgeUnit({
  id: "map-topic:blue-card",
  subject: {
    family: "map-topic",
    reference: { kind: "map-node", nodeId: "blue-card" },
  },
  summary:
    "Підстава для роботи, що вимагає високих кваліфікацій; після реформи 2025 року перевіряй актуальні умови, мобільність і treść decyzji.",
  claims: [
    {
      id: "blue-card-conditions",
      kind: "requires-verification",
      text: "Niebieska Karta UE має власні кваліфікаційні, договірні, винагородні та мобільні умови, які не зводяться до звичайного pobyt i praca.",
      basis: [{ reference: aliensSourceReference, locator: "Art. 127–138" }],
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
    title: "Niebieska Karta UE",
    polish: foreignersLaw.text`${foreignersLaw.articleRange("127", "138", { start: "art. 127", end: "138" })}`,
    sources: [mapTopicSources.aliens],
    guide: {
      introduction: [
        "Niebieska Karta UE є pobytem czasowym для роботи, що вимагає високих кваліфікацій, із спеціальними правилами строку, mobilności та зміни праці.",
      ],
      regulated: [
        foreignersLaw.text`${foreignersLaw.articleRange("127", "138", { start: "Art. 127", end: "138" })} ustawy o cudzoziemcach після змін 2025–2026 визначають кваліфікації, umowę, мінімальний строк праці, wynagrodzenie, odmowy та mobilność w UE.`,
      ],
      appliesWhen: [
        "Робота повинна належати до zawodu wymagającego wysokich kwalifikacji, а заявник має довести kwalifikacje та законну umowę або wiążącą ofertę на потрібний період.",
      ],
      conditions: [
        "Винагорода повинна досягати актуального законного порогу, а строк і характер договору — відповідати спеціальній нормі; dokuments кваліфікації оцінюються за видом професії.",
      ],
      exceptions: [
        "Окремі regulowane zawody потребують формального визнання права виконувати професію; mobilność posiadacza Blue Card з іншої держави має власну процедуру.",
      ],
      consequences: [
        "Дозвіл документується kartą з adnotacją «Niebieska Karta UE» та дає спеціальні права mobilności й полегшення, але зміна обставин підлягає правилам цієї глави.",
      ],
      procedure: [
        "Заява і спеціальні załączniki подаються електронно через MOS, organ перевіряє роботодавця, умови, kwalifikacje та treść майбутнього zezwolenia.",
      ],
      foreignersContext: [
        "Blue Card може впливати на обчислення п’ятирічного періоду rezydenta UE та допустимі перерви, але ці переваги застосовуються лише за виконання спеціальних умов.",
      ],
    } satisfies LegalNodeGuide,
  },
})

export default blueCardTopic

export const blueCardMapNode: LegalNode = {
  id: "blue-card",
  title: blueCardTopic.body.title,
  polish: blueCardTopic.body.polish,
  summary: blueCardTopic.summary,
  sources: [...blueCardTopic.body.sources],
}
