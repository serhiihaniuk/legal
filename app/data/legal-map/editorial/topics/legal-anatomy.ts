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

type LegalAnatomyBody = LegalMapTopicBody

export const legalAnatomyTopic: KnowledgeUnit<LegalAnatomyBody> =
  defineKnowledgeUnit({
    id: "map-topic:legal-anatomy",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "legal-anatomy" },
    },
    summary:
      "Читай статтю як конструкцію: до кого вона звернена, за яких умов діє, що дозволяє або наказує та який наслідок настає.",
    claims: [
      {
        id: "norm-elements",
        kind: "practical-inference",
        text: "Номер статті треба перетворити на адресата, умови, диспозицію та наслідок, які можна перевірити фактами й доказами.",
        basis: [{ reference: kpaSourceReference, locator: "norm-reading" }],
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
      title: "Анатомія правової норми",
      polish: "hipoteza — dyspozycja — sankcja / skutek",
      sources: [mapTopicSources.kpa],
      guide: {
        introduction: [
          "Правова норма читається як конструкція: адресат, фактичні передумови, правовий обов’язок або повноваження та наслідок. Один artykuł може містити кілька норм, а повна норма може бути розподілена між кількома статтями.",
        ],
        regulated: [
          "Hipoteza визначає, коли правило діє; dyspozycja — що належить або можна зробити; skutek prawny — що виникає при виконанні чи невиконанні умов.",
        ],
        appliesWhen: [
          "Метод застосовується до матеріальних умов дозволу, підстав odmowy, строків, kompetencji organu та процесуальних вимог.",
        ],
        conditions: [
          "Кожен spójnik має значення: «i» зазвичай поєднує обов’язкові умови, «lub» створює альтернативу, а відсилання переносить частину правила до іншої норми.",
        ],
        exceptions: [
          "Формулювання «udziela się» не усуває окремих підстав odmowy, а «może udzielić» залишає organowi оцінювальне повноваження лише в законних межах.",
        ],
        consequences: [
          "Розкладена норма перетворюється на доказову матрицю; нерозкладена стаття часто породжує список документів без зв’язку з умовами.",
        ],
        procedure: [
          "Текст читається разом із definicjami, винятками, нормами про odmowę wszczęcia, odmowę, cofnięcie, строк дії та оскарження.",
        ],
        foreignersContext: [
          "В ustawie o cudzoziemcach матеріальна підстава дозволу майже завжди доповнюється спільними нормами про заяву, MOS, відмову, dokument pobytowy та KPA.",
        ],
      } satisfies LegalNodeGuide,
      why: "Номер статті сам по собі нічого не пояснює. Практична робота починається з перетворення речення закону на перелік умов, які можна перевірити доказами.",
      checkpoints: [
        "Хто є адресатом: cudzoziemiec, pracodawca чи organ?",
        "Умови поєднані словом „i” чи альтернативою „lub” ?",
        "Орган „udziela”, „może udzielić” чи „odmawia” ?",
        "Чи є відсилання до іншої статті, винятку або спеціального закону?",
      ],
      steps: [
        "Підкресли адресата.",
        "Випиши кожну позитивну умову окремим рядком.",
        "Знайди винятки та підстави відмови.",
        "До кожної умови допиши можливий доказ.",
        "Перевір процедуру, строк і засіб оскарження.",
      ],
    },
  })

export default legalAnatomyTopic

export const legalAnatomyMapNode: LegalNode = {
  id: "legal-anatomy",
  title: legalAnatomyTopic.body.title,
  polish: legalAnatomyTopic.body.polish,
  summary: legalAnatomyTopic.summary,
  why: legalAnatomyTopic.body.why,
  checkpoints: [...(legalAnatomyTopic.body.checkpoints ?? [])],
  steps: [...(legalAnatomyTopic.body.steps ?? [])],
  sources: [...legalAnatomyTopic.body.sources],
}
