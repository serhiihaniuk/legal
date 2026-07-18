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

type PrincipleParticipationBody = LegalMapTopicBody

export const principleParticipationTopic: KnowledgeUnit<PrincipleParticipationBody> =
  defineKnowledgeUnit({
    id: "map-topic:principle-participation",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "principle-participation" },
    },
    summary:
      "Перед рішенням сторона повинна мати реальну можливість висловитися щодо доказів і вимог.",
    claims: [
      {
        id: "active-participation",
        kind: "requires-verification",
        text: "Сторона має отримати реальну, а не лише формальну можливість знати матеріал і відреагувати до вирішення справи.",
        basis: [{ reference: kpaSourceReference, locator: "Art. 10" }],
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
      title: "Активна участь сторони",
      polish: kpaLaw.text`${kpaLaw.article("10", "art. 10")} KPA`,
      sources: [mapTopicSources.kpa],
      guide: {
        introduction: [
          kpaLaw.text`${kpaLaw.article("10", "Art. 10")} KPA гарантує стороні активну участь на кожній стадії та можливість висловитися щодо зібраних доказів, матеріалів і вимог перед виданням рішення.`,
        ],
        regulated: [
          "Доступ до akt sprawy, участь у доказових діях, подання пояснень і доказів та завершальне право wypowiedzenia się перед decyzją.",
        ],
        appliesWhen: [
          "Перед негативним або частково негативним рішенням, після отримання нових доказів від інших установ і під час проведення допиту, oględzin або opinii biegłego.",
        ],
        conditions: [
          "Орган повинен створити реальну, а не лише формальну можливість ознайомитися з матеріалом і відреагувати до розв’язання справи.",
          kpaLaw.text`У справі, розпочатій на żądanie strony, ${kpaLaw.article("79a", "art. 79a")} KPA додатково вимагає вказати залежні від сторони передумови, які ще не виконані або не доведені та можуть спричинити негативне рішення.`,
        ],
        exceptions: [
          kpaLaw.text`${kpaLaw.article("10", "Art. 10 § 2")} KPA допускає відступ лише через термінову загрозу життю чи здоров’ю або невідворотну матеріальну шкоду; причини фіксуються в aktach sprawy.`,
          kpaLaw.text`У sprawach załatwianych milcząco ${kpaLaw.article("10", "art. 10")} і ${kpaLaw.article("79a", "art. 79a")} не застосовуються на підставі ${kpaLaw.article("122d", "art. 122d § 1")} KPA.`,
        ],
        consequences: [
          kpaLaw.text`Позбавлення сторони участі без її вини може бути підставою wznowienia postępowania за ${kpaLaw.article("145", "art. 145 § 1")} pkt 4 KPA; на звичайній стадії це також є підставою odwołania.`,
        ],
        procedure: [
          "Встановлюється, який новий матеріал з’явився, коли й як сторону повідомлено, який строк надано для реакції та чи враховано подані пояснення в uzasadnieniu.",
        ],
        foreignersContext: [
          "У справах cudzoziemców істотними є нові дані з реєстрів, інформація Straży Granicznej, роботодавця або інших органів. Сторона повинна мати можливість знати зміст матеріалу, на якому буде побудовано негативний висновок, якщо доступ не обмежено законом.",
        ],
      } satisfies LegalNodeGuide,
    },
  })

export default principleParticipationTopic

export const principleParticipationMapNode: LegalNode = {
  id: "principle-participation",
  title: principleParticipationTopic.body.title,
  polish: principleParticipationTopic.body.polish,
  summary: principleParticipationTopic.summary,
  sources: [...principleParticipationTopic.body.sources],
}
