import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { LegalNodeGuide } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"

import { kpaLaw, mapTopicSources, ppsaLaw } from "../authoring"
import type { LegalMapTopicBody } from "./principle-legality"

const kpaSourceReference = {
  kind: "official-source",
  sourceId: "eli-kpa",
} as const

const ppsaSourceReference = {
  kind: "official-source",
  sourceId: "eli-ppsa",
} as const

type InactivityBody = LegalMapTopicBody

export const inactivityTopic: KnowledgeUnit<InactivityBody> =
  defineKnowledgeUnit({
    id: "map-topic:inactivity",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "inactivity" },
    },
    summary:
      "Bezczynność — справа не завершена у строк. Przewlekłość — дії тривають довше, ніж потрібно. Маршрут зазвичай веде через ponaglenie, а потім може перейти до WSA.",
    claims: [
      {
        id: "delay-remedy",
        kind: "requires-verification",
        text: "Бездіяльність і затягування відрізняються від просто довгого провадження; строк, ponaglenie та подальший судовий шлях перевіряються окремо.",
        basis: [
          { reference: kpaSourceReference, locator: "Art. 35–38" },
          { reference: ppsaSourceReference, locator: "Art. 149" },
        ],
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
      title: "Bezczynność і przewlekłość",
      polish: kpaLaw.text`${kpaLaw.articleRange("35", "38", { start: "art. 35", end: "38" })} KPA → skarga do WSA`,
      sources: [mapTopicSources.kpa, mapTopicSources.ppsa],
      guide: {
        introduction: [
          kpaLaw.text`${kpaLaw.articleRange("35", "38", { start: "Art. 35", end: "38" })} KPA розрізняють bezczynność і przewlekłość та передбачають ponaglenie. PPSA дозволяє подальшу skargę do WSA після wniesienia ponaglenia.`,
        ],
        regulated: [
          "Строки розгляду, виключені періоди, обов’язок повідомити про затримку, новий строк, ponaglenie, відповідальність працівника й судові наслідки бездіяльності.",
        ],
        appliesWhen: [
          "Bezczynność виникає, коли справу не завершено у законний або повідомлений строк; przewlekłość — коли провадження триває довше, ніж потрібно для його вирішення.",
        ],
        conditions: [
          kpaLaw.text`За ${kpaLaw.article("35", "art. 35")} KPA справи вирішуються без зайвої затримки; орієнтовні загальні строки становлять місяць, два місяці для особливо складної справи та місяць в апеляційному провадженні (postępowanie odwoławcze), з урахуванням ${kpaLaw.article("35", "art. 35 § 5")}.`,
          "Ponaglenie містить обґрунтування і подається до organu wyższego stopnia через organ, який веде справу, або до цього organu, якщо вищого немає.",
        ],
        exceptions: [
          kpaLaw.text`Сам календарний сплив загального строку не доводить бездіяльності без перевірки строків спеціального закону, zawieszenia, затримок з вини сторони та інших періодів, які ${kpaLaw.article("35", "art. 35 § 5")} виключає з обчислення.`,
        ],
        consequences: [
          kpaLaw.text`Орган, що розглядає ponaglenie, може встановити бездіяльність або затягування, визначити строк завершення, наказати з’ясувати причини й відповідальних. WSA за ${ppsaLaw.article("149", "art. 149")} PPSA може зобов’язати видати акт, встановити rażące naruszenie prawa, накласти grzywnę або присудити суму.`,
        ],
        procedure: [
          kpaLaw.text`Хронологія включає wszczęcie, кожне wezwanie й відповідь, періоди zawieszenia, ${kpaLaw.article("36", "art. 36")} zawiadomienia, нові строки, дату ponaglenia та фактичні дії organu після нього.`,
        ],
        foreignersContext: [
          "У справах pobytowych довге очікування не змінює саме по собі матеріальних умов дозволу. Актуальність роботи, доходу, адреси й сімейних обставин може потребувати оновлення незалежно від спору про bezczynność.",
        ],
      } satisfies LegalNodeGuide,
      checkpoints: [
        "Який строк застосовується?",
        "Чи organ повідомив про затримку й новий строк?",
        "Кому подається ponaglenie?",
        "Чи після ponaglenia є підстава для WSA?",
      ],
      steps: [
        kpaLaw.text`Визнач строк за ${kpaLaw.article("35", "art. 35")} або спеціальним законом.`,
        kpaLaw.text`Перевір повідомлення за ${kpaLaw.article("36", "art. 36")}.`,
        kpaLaw.text`Подай ponaglenie за ${kpaLaw.article("37", "art. 37")}.`,
        "За потреби оціни skargę do WSA через organ.",
      ],
    },
  })

export default inactivityTopic

export const inactivityMapNode: LegalNode = {
  id: "inactivity",
  title: inactivityTopic.body.title,
  polish: inactivityTopic.body.polish,
  summary: inactivityTopic.summary,
  checkpoints: [...(inactivityTopic.body.checkpoints ?? [])],
  steps: [...(inactivityTopic.body.steps ?? [])],
  sources: [...inactivityTopic.body.sources],
}
