import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { LegalNodeGuide } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"

import { mapTopicSources } from "../authoring"
import type { LegalMapTopicBody } from "./principle-legality"

const kpaSourceReference = {
  kind: "official-source",
  sourceId: "eli-kpa",
} as const

const aliensSourceReference = {
  kind: "official-source",
  sourceId: "eli-ustawa-o-cudzoziemcach",
} as const

const workSourceReference = {
  kind: "official-source",
  sourceId: "eli-powierzanie-pracy",
} as const

const nsaReference = {
  kind: "external",
  url: "https://orzeczenia.nsa.gov.pl/cbo/query",
} as const

type SourceCheckBody = LegalMapTopicBody

export const sourceCheckTopic: KnowledgeUnit<SourceCheckBody> =
  defineKnowledgeUnit({
    id: "map-topic:source-check",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "source-check" },
    },
    summary:
      "Починай із oficjalnego ELI, перевір статус акта, текст jednolity, зміни, дати набрання чинності та норми перехідні. Інструкція urzędu допомагає, але не замінює закон.",
    claims: [
      {
        id: "current-law-check",
        kind: "requires-verification",
        text: "Застосовний текст визначається юридично релевантною датою, статусом акта, новелами та правилами переходу між редакціями.",
        basis: [
          { reference: kpaSourceReference, locator: "official ELI record" },
          { reference: aliensSourceReference, locator: "official ELI record" },
          { reference: workSourceReference, locator: "official ELI record" },
          { reference: nsaReference, locator: "official case-law database" },
        ],
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
      title: "Як перевіряти актуальність права",
      polish: "ELI / Dziennik Ustaw / przepisy przejściowe",
      sources: [
        mapTopicSources.kpa,
        mapTopicSources.aliens,
        mapTopicSources.work,
        mapTopicSources.nsa,
      ],
      guide: {
        introduction: [
          "Правова норма читається в офіційному тексті з урахуванням статусу акту, дати факту, новел, дат набрання чинності та przepisów przejściowych. Номер статті без редакції на відповідну дату не визначає застосовного права.",
        ],
        regulated: [
          "ELI, Dziennik Ustaw і офіційні тексти jednolite показують реквізити акту, status obowiązywania, ogłoszenie, пов’язані зміни та офіційний текст.",
        ],
        appliesWhen: [
          "Перед формулюванням правової підстави, оцінкою wezwania або decyzji, визначенням строку та використанням адміністративної інструкції.",
        ],
        conditions: [
          "Застосовний текст визначається датою подання, датою процесуальної дії або іншою юридично релевантною датою та правилами переходу між редакціями.",
          "Матеріальна норма, KPA, PPSA, rozporządzenie і офіційне роз’яснення мають різну юридичну силу й функцію.",
        ],
        exceptions: [
          "Tekst jednolity полегшує читання, але не замінює перевірки пізніших змін і їх wejścia w życie. Майбутня опублікована зміна не застосовується до поточного факту до набрання чинності, якщо перехідна норма не встановлює іншого.",
        ],
        consequences: [
          "Використання нечинної або майбутньої редакції змінює перелік передумов, орган, строк чи наслідок і може зробити весь правовий висновок хибним.",
        ],
        procedure: [
          "Перевірка охоплює офіційний запис ELI, статус акта, tekst jednolity, перелік новел, daty wejścia w życie, przepisy przejściowe, а після цього — точний artykuł, ustęp, punkt і відсилання.",
        ],
        foreignersContext: [
          "Право cudzoziemców часто змінюється й містить спеціальні та перехідні режими. Офіційна сторінка urzędu пояснює практичний канал, але не замінює ustawy o cudzoziemcach, закону про працю cudzoziemców і KPA.",
        ],
      } satisfies LegalNodeGuide,
      checkpoints: [
        "Яка дата стану фактичного і подання?",
        "Чи норма вже набула чинності?",
        "Чи є текст jednolity новіший за нотатку?",
        "Чи przepis przejściowy залишає старі правила для цієї справи?",
      ],
      steps: [
        "Відкрий ELI.",
        "Перевір статус акта та akty zmieniające.",
        "Прочитай дату wejścia w życie.",
        "Знайди przepisy przejściowe.",
        "Лише потім дивись urzędowe FAQ та orzecznictwo.",
      ],
    },
  })

export default sourceCheckTopic

export const sourceCheckMapNode: LegalNode = {
  id: "source-check",
  title: sourceCheckTopic.body.title,
  polish: sourceCheckTopic.body.polish,
  summary: sourceCheckTopic.summary,
  checkpoints: [...(sourceCheckTopic.body.checkpoints ?? [])],
  steps: [...(sourceCheckTopic.body.steps ?? [])],
  sources: [...sourceCheckTopic.body.sources],
}
