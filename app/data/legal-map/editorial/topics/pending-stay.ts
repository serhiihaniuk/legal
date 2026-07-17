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

const workSourceReference = {
  kind: "official-source",
  sourceId: "eli-powierzanie-pracy",
} as const

const amendmentReference = {
  kind: "external",
  url: "https://eli.gov.pl/eli/DU/2026/203/ogl",
} as const

type PendingStayBody = LegalMapTopicBody

export const pendingStayTopic: KnowledgeUnit<PendingStayBody> =
  defineKnowledgeUnit({
    id: "map-topic:pending-stay",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "pending-stay" },
    },
    summary:
      "Вчасно і правильно розпочата процедура може легалізувати перебування до остаточного завершення справи, але не створює автоматично права повторного в’їзду чи нового права до праці.",
    claims: [
      {
        id: "pending-stay-is-separate",
        kind: "requires-verification",
        text: "Режим очікування на рішення, можливість повернення та право до праці — окремі питання, які залежать від конкретної норми й попереднього статусу.",
        basis: [
          { reference: aliensSourceReference, locator: "Art. 108, 206" },
          { reference: workSourceReference, locator: "work access" },
          { reference: amendmentReference, locator: "Art. 222a amendment" },
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
      title: "Перебування під час процедури",
      polish: foreignersLaw.text`${foreignersLaw.article("108", "art. 108")}, ${foreignersLaw.article("206", "206")}, ${foreignersLaw.external("222a", "https://eli.gov.pl/eli/DU/2026/203/ogl")} ustawy o cudzoziemcach`,
      sources: [mapTopicSources.aliens, mapTopicSources.work],
      guide: {
        introduction: [
          "Skutecznie rozpoczęte postępowanie може зберігати legalność pobytu в Польщі до остаточного завершення, але це окремий режим очікування, а не новий zezwolenie або karta.",
        ],
        regulated: [
          foreignersLaw.text`Для pobytu czasowego діє ${foreignersLaw.article("108", "art. 108")}, для pobytu stałego — ${foreignersLaw.article("206", "art. 206")}, для rezydenta UE — ${foreignersLaw.external("art. 222a", "https://eli.gov.pl/eli/DU/2026/203/ogl")} ustawy o cudzoziemcach.`,
        ],
        appliesWhen: [
          "Заява подана під час legalnego pobytu та не мала braków formalnych або вони усунуті в строк.",
        ],
        conditions: [
          "Легальність триває в межах, установлених відповідною статтею, до дня, коли decyzja стає ostateczna, якщо справа не закінчилася іншим передбаченим способом.",
        ],
        exceptions: [
          "Цей режим не є документом для перетину кордону й не створює автоматичного права повернення; право до праці залежить від окремої норми та попереднього статусу.",
        ],
        consequences: [
          "Виїзд може унеможливити повернення без іншого документа, а залишення заяви без розгляду або неусунення формальних недоліків може позбавити режиму очікування.",
        ],
        procedure: [
          "Перевіряються дата подання, попередня легальність, UPO, виконання formalnych wezwań, стан справи та окрема підстава pracy.",
        ],
        foreignersContext: [
          "Для osoby з UKR звичайна справа не завжди є єдиною підставою pobytu, бо до надання дозволу може діяти status UKR; CUKR має спеціальний момент виникнення при odbiorze karty.",
        ],
      } satisfies LegalNodeGuide,
      why: "Фраза «має штамп» надто спрощує ситуацію. Завжди окремо перевіряй skuteczność wniosku, pobyt, praca та możliwość powrotu.",
      checkpoints: [
        "Чи заява подана під час легального pobytu?",
        "Чи усунено braki formalne в строк?",
        "Яке право до праці діяло перед поданням?",
        "Чи особа планує виїзд?",
      ],
    },
  })

export default pendingStayTopic

export const pendingStayMapNode: LegalNode = {
  id: "pending-stay",
  title: pendingStayTopic.body.title,
  polish: pendingStayTopic.body.polish,
  summary: pendingStayTopic.summary,
  why: pendingStayTopic.body.why,
  checkpoints: [...(pendingStayTopic.body.checkpoints ?? [])],
  sources: [...pendingStayTopic.body.sources],
}
