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

type DecisionReadingBody = LegalMapTopicBody

export const decisionReadingTopic: KnowledgeUnit<DecisionReadingBody> =
  defineKnowledgeUnit({
    id: "map-topic:decision-reading",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "decision-reading" },
    },
    summary:
      "Перевір organ, сторону, підставу правову, rozstrzygnięcie, обґрунтування фактів і права та pouczenie про оскарження.",
    claims: [
      {
        id: "decision-anatomy",
        kind: "requires-verification",
        text: "Резолютивна частина, правова підстава, фактичні висновки, оцінка доказів і pouczenie утворюють єдину логічну конструкцію рішення.",
        basis: [{ reference: kpaSourceReference, locator: "Art. 107" }],
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
      title: "Читання decyzji",
      polish: kpaLaw.text`${kpaLaw.article("107", "art. 107")} KPA`,
      sources: [mapTopicSources.kpa],
      guide: {
        introduction: [
          kpaLaw.text`${kpaLaw.article("107", "Art. 107")} KPA визначає структуру decyzji. Розділення rozstrzygnięcia, ustaleń faktycznych, oceny dowodów і podstawy prawnej показує, що саме organ установив і чому настав конкретний наслідок.`,
        ],
        regulated: [
          "Позначення organu, дата, сторони, правова підстава, rozstrzygnięcie, фактичне й правове uzasadnienie, pouczenie та підпис; за потреби — інформація про судовий засіб, wpis і prawo pomocy.",
        ],
        appliesWhen: [
          "Після вручення будь-якої decyzji та перед визначенням її виконуваності, остаточності й підстав оскарження.",
        ],
        conditions: [
          "Фактичне uzasadnienie називає доведені факти, докази та причини відмови іншим доказам у достовірності або силі; правове uzasadnienie пояснює норму з наведенням положень права.",
          "Rozstrzygnięcie має бути однозначним і придатним для виконання; мотиви не можуть замінювати те, що повинно міститися в резолютивній частині.",
        ],
        exceptions: [
          "Uzasadnienie може бути відсутнім, коли рішення повністю задовольняє żądanie, крім рішень про спірні інтереси сторін і рішень після odwołania; окремі законні обмеження можливі також через безпеку держави або порядок публічний.",
        ],
        consequences: [
          "Відсутність аналізу істотних фактів, суперечлива резолютивна частина або неправильне pouczenie можуть становити процесуальні вади; спосіб їх виправлення залежить від впливу на результат і виду дефекту.",
        ],
        procedure: [
          "Читання відбувається в порядку: rozstrzygnięcie, застосовані норми, встановлені факти, прийняті й відхилені докази, логічний зв’язок між ними, pouczenie, дата doręczenia та виконуваність.",
        ],
        foreignersContext: [
          "У негативній decyzji pobytowej кожна відсутня матеріальна передумова та кожна негативна підстава повинні мати окремий фактичний і правовий аналіз. Загального твердження про недостатні документи для цього недостатньо.",
        ],
      } satisfies LegalNodeGuide,
      checkpoints: [
        "Які факти organ визнав?",
        "Які докази відкинув і чому?",
        "Як застосував умови статті?",
        "Чи pouczenie правильне?",
      ],
    },
  })

export default decisionReadingTopic

export const decisionReadingMapNode: LegalNode = {
  id: "decision-reading",
  title: decisionReadingTopic.body.title,
  polish: decisionReadingTopic.body.polish,
  summary: decisionReadingTopic.summary,
  checkpoints: [...(decisionReadingTopic.body.checkpoints ?? [])],
  sources: [...decisionReadingTopic.body.sources],
}
