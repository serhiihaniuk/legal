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

const aliensChangeReference = {
  kind: "external",
  url: "https://eli.gov.pl/eli/DU/2025/1794/ogl",
} as const

const mosReference = {
  kind: "external",
  url: "https://www.gov.pl/web/udsc/info-mos",
} as const

type InitiationBody = LegalMapTopicBody

export const initiationTopic: KnowledgeUnit<InitiationBody> =
  defineKnowledgeUnit({
    id: "map-topic:initiation",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "initiation" },
    },
    summary: kpaLaw.text`Відрізняй початок провадження, мінімальний зміст заяви та wezwanie до усунення формальних недоліків за ${kpaLaw.article("64", "art. 64")} KPA.`,
    claims: [
      {
        id: "formal-entry-point",
        kind: "requires-verification",
        text: "Формальна повнота заяви та доведення матеріальних умов дозволу залишаються окремими етапами.",
        basis: [
          { reference: kpaSourceReference, locator: "Art. 61–66" },
          { reference: aliensChangeReference, locator: "current amendments" },
          { reference: mosReference, locator: "MOS procedure" },
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
      title: "Початок справи й формальні недоліки",
      polish: kpaLaw.text`wszczęcie, podanie, braki formalne · ${kpaLaw.articleRange("61", "66", { start: "art. 61", end: "66" })} KPA`,
      sources: [
        mapTopicSources.kpa,
        mapTopicSources.aliensChange,
        mapTopicSources.mos,
      ],
      guide: {
        introduction: [
          kpaLaw.text`${kpaLaw.articleRange("61", "66", { start: "Art. 61", end: "66" })} KPA регулюють початок провадження, форму podania, усунення формальних недоліків і дії неналежного органу.`,
        ],
        regulated: [
          "Провадження на żądanie strony або z urzędu, дата wszczęcia, мінімальний зміст podania, braki formalne, передача за właściwością та поділ кількох справ.",
        ],
        appliesWhen: [
          "При первинному поданні заяви, зміні або уточненні żądania, відсутності підпису чи адреси та поданні до неналежного органу.",
        ],
        conditions: [
          kpaLaw.text`${kpaLaw.article("63", "Art. 63")} KPA вимагає щонайменше дані особи, адресу, żądanie та підпис, а спеціальний закон може додати форму, додатки й спосіб подання.`,
          kpaLaw.text`За ${kpaLaw.article("64", "art. 64 § 2")} KPA інші усувні формальні недоліки доповнюються у визначений строк не коротший за сім днів під загрозою pozostawienia podania bez rozpoznania.`,
        ],
        exceptions: [
          kpaLaw.text`Відсутність адреси, яку неможливо встановити, веде до pozostawienia podania bez rozpoznania без звичайного wezwania за ${kpaLaw.article("64", "art. 64 § 1")} KPA.`,
          kpaLaw.text`Звичайний e-mail не є допустимим каналом podania за ${kpaLaw.article("63", "art. 63 § 1")} KPA, якщо окремий закон не встановлює іншого.`,
        ],
        consequences: [
          kpaLaw.text`Невиправлений brak formalny не дорівнює негативному рішенню по суті: орган залишає podanie без розгляду. Подання до неналежного органу до спливу строку зберігає строк за ${kpaLaw.article("65", "art. 65 § 2")} KPA.`,
        ],
        procedure: [
          "Орган реєструє дату подання, визначає предмет і сторону, перевіряє компетенцію та формальні вимоги, а після їх виконання переходить до матеріальних передумов і доказів.",
        ],
        foreignersContext: [
          "У справах pobytowych спеціальний закон пов’язує з датою й способом подання додаткові наслідки. Формальна повнота заяви та доведення матеріальних умов дозволу залишаються окремими етапами.",
        ],
      } satisfies LegalNodeGuide,
      why: "Brak formalny означає, що орган не може правильно надати заяві хід. Це не те саме, що недоведена матеріальна умова дозволу.",
      checkpoints: [
        "Яка дата початку справи?",
        "Чого бракує: підпису/адреси чи доказу умови?",
        "Який строк і наслідок вказані?",
        "Чи спеціальний закон вимагає електронного подання?",
      ],
      steps: [
        "Класифікуй недолік як formalny або materialny.",
        kpaLaw.text`Перевір ${kpaLaw.articleRange("63", "64", { start: "art. 63", end: "64" })} KPA і спеціальний закон.`,
        "Запиши дату doręczenia та останній день строку.",
        "Подай повну відповідь із доказом подання.",
      ],
    },
  })

export default initiationTopic

export const initiationMapNode: LegalNode = {
  id: "initiation",
  title: initiationTopic.body.title,
  polish: initiationTopic.body.polish,
  summary: initiationTopic.summary,
  why: initiationTopic.body.why,
  checkpoints: [...(initiationTopic.body.checkpoints ?? [])],
  steps: [...(initiationTopic.body.steps ?? [])],
  sources: [...initiationTopic.body.sources],
}
