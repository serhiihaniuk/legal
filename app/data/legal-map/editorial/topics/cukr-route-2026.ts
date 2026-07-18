import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { foreignersLaw, mapTopicSources } from "../authoring"
import type { LegalNodeGuide } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"

import type { LegalMapTopicBody } from "./principle-legality"

const specustawaReference = {
  kind: "external",
  url: "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf",
} as const

const cukrReference = {
  kind: "external",
  url: "https://www.gov.pl/web/udsc/CUKR-procedura",
} as const

type CukrRouteBody = LegalMapTopicBody

export const cukrRouteTopic: KnowledgeUnit<CukrRouteBody> = defineKnowledgeUnit(
  {
    id: "map-topic:cukr-route-2026",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "cukr-route-2026" },
    },
    summary:
      "Спеціальний трирічний дозвіл без доказування роботи. Подання лише MOS до 04.03.2027; дозвіл виникає в день особистого отримання карти, не з позитивної decyzji.",
    claims: [
      {
        id: "cukr-specific-route",
        kind: "requires-verification",
        text: "CUKR має власні умови, електронний спосіб подання та особливий момент виникнення дозволу при особистому отриманні карти.",
        basis: [
          { reference: specustawaReference, locator: "Art. 42c–42u" },
          { reference: cukrReference, locator: "CUKR procedure" },
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
      title: "Перейти на CUKR",
      polish: foreignersLaw.text`${foreignersLaw.external("art. 42c", "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf")}–${foreignersLaw.external("42u", "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf")} specustawy`,
      sources: [
        mapTopicSources.ukraineSpecialCurrent,
        mapTopicSources.cukr,
        mapTopicSources.cukrQa,
      ],
      guide: {
        introduction: [
          "CUKR — спеціальний трирічний pobyt czasowy для визначених осіб, які переходять із ochrony czasowej. Він не залежить від працевлаштування й виникає в момент особистого отримання карти.",
        ],
        regulated: [
          foreignersLaw.text`${foreignersLaw.external("Art. 42c", "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf")}–${foreignersLaw.external("42u", "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf")} specustawy ukraińskiej регулюють адресатів, умови, MOS, opłaty, wydanie karty, наслідки та обов’язки після видачі.`,
        ],
        appliesWhen: [
          "Заяви приймаються виключно через MOS від 04.05.2026 до 04.03.2027.",
        ],
        conditions: [
          "Для основної групи одночасно потрібні aktywny PESEL UKR при поданні, aktywny PESEL UKR 04.06.2025, щонайменше 365 днів безперервного UKR та aktywny UKR у день видачі карти.",
        ],
        exceptions: [
          "Для дитини, народженої в Польщі після 23.02.2022, діє спеціальна конструкція, пов’язана зі status UKR дитини та картою CUKR матері; її не оцінюють за загальними чотирма умовами без урахування цієї норми.",
        ],
        consequences: [
          "При odbiorze status UKR змінюється на CUKR, виникає трирічне zezwolenie й повний доступ до rynku pracy; неотримання карти протягом 60 днів від повідомлення означає, що дозвіл не виникне, а карта буде unieważniona.",
        ],
        procedure: [
          "Особа входить до MOS через login.gov.pl, додає цифрове фото та окремі підтвердження opłat 340 і 100 zł, підписує заяву, зберігає UPO і особисто отримує готову карту.",
        ],
        foreignersContext: [
          "Після CUKR зміну місця pobytu повідомляють wojewodzie протягом 15 робочих днів; виїзд із Польщі понад 6 місяців веде до втрати дозволу.",
        ],
      } satisfies LegalNodeGuide,
      checkpoints: [
        "Чотири умови status UKR",
        "Оплати 340 + 100 zł до подання",
        "Фото й повні дані в PESEL",
        "Odbiór до 60 днів",
        "Адреса — повідомлення до 15 робочих днів",
      ],
    },
  }
)

export default cukrRouteTopic

export const cukrRouteMapNode: LegalNode = {
  id: "cukr-route-2026",
  title: cukrRouteTopic.body.title,
  polish: cukrRouteTopic.body.polish,
  summary: cukrRouteTopic.summary,
  checkpoints: [...(cukrRouteTopic.body.checkpoints ?? [])],
  sources: [...cukrRouteTopic.body.sources],
}
