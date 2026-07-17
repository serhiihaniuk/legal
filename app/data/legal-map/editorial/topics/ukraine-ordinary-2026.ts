import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { foreignersLaw, mapTopicSources } from "../authoring"
import type { LegalNodeGuide } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"

import type { LegalMapTopicBody } from "./principle-legality"

const ukraineReference = {
  kind: "external",
  url: "https://eli.gov.pl/eli/DU/2026/203/ogl",
} as const

const aliensSourceReference = {
  kind: "official-source",
  sourceId: "eli-ustawa-o-cudzoziemcach",
} as const

type UkraineOrdinaryBody = LegalMapTopicBody

export const ukraineOrdinaryTopic: KnowledgeUnit<UkraineOrdinaryBody> =
  defineKnowledgeUnit({
    id: "map-topic:ukraine-ordinary-2026",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "ukraine-ordinary-2026" },
    },
    summary:
      "Особа з UKR може подати цю заяву завдяки спеціальному винятку, але мусить виконати повні матеріальні умови Ustawy o cudzoziemcach. UKR триває до надання звичайного дозволу.",
    claims: [
      {
        id: "ordinary-route-is-not-exemption",
        kind: "requires-verification",
        text: "Спеціальний доступ до процедури не звільняє від повного доказування умов обраного звичайного дозволу.",
        basis: [
          { reference: ukraineReference, locator: "Art. 45" },
          { reference: aliensSourceReference, locator: "Art. 114–126" },
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
      title: "Подати звичайний pobyt czasowy i pracę",
      polish: foreignersLaw.text`${foreignersLaw.external("art. 45", "https://eli.gov.pl/eli/DU/2026/203/ogl")} Dz.U. 2026 poz. 203 + ${foreignersLaw.articleRange("114", "126", { start: "art. 114", end: "126" })}`,
      sources: [
        mapTopicSources.ukraine2026,
        mapTopicSources.aliens,
        mapTopicSources.mosWork,
        mapTopicSources.mosWorkQa,
      ],
      guide: {
        introduction: [
          foreignersLaw.text`${foreignersLaw.external("Art. 45", "https://eli.gov.pl/eli/DU/2026/203/ogl")} ustawy Dz.U. 2026 poz. 203 дозволяє визначеним beneficjentom ochrony czasowej подати окремі звичайні заяви pobytowe, незважаючи на загальне обмеження для ochrony czasowej.`,
        ],
        regulated: [
          "Виняток відкриває доступ до перелічених процедур, але їх повні матеріальні умови, відмови та наслідки залишаються в ustawie o cudzoziemcach.",
        ],
        appliesWhen: [
          foreignersLaw.text`Маршрут діє лише для категорії заяви, прямо охопленої ${foreignersLaw.external("art. 45", "https://eli.gov.pl/eli/DU/2026/203/ogl")}, зокрема відповідних трудових або бізнесових підстав.`,
        ],
        conditions: [
          foreignersLaw.text`Заява подається через MOS і доводить кожну умову обраного дозволу; для pobyt czasowy i pracę значення мають ${foreignersLaw.articleRange("114", "126", { start: "art. 114", end: "126" })} та фактичні умови праці.`,
        ],
        exceptions: [
          "Спеціальний доступ до процедури не є звільненням від materialnych przesłanek і не перетворює umowy o pracę на автоматичний дозвіл.",
        ],
        consequences: [
          "Status UKR зберігається до надання звичайного дозволу, після чого підставою стає decyzja; зміст дозволу й обов’язки залежать від конкретної процедури.",
        ],
        procedure: [
          "Обирається дозволена категорія, готується електронна заява та додатки, виконується postępowanie dowodowe, а результат виникає за правилами звичайної decyzji.",
        ],
        foreignersContext: [
          "Цей маршрут відрізняється від CUKR доказуванням мети, змістом decyzji та моментом переходу зі status UKR.",
        ],
      } satisfies LegalNodeGuide,
      checkpoints: [
        "MOS і Załącznik nr 1",
        "Умова роботи понад 3 місяці",
        "Страхування й мінімальна винагорода",
        "Три різні види wezwania",
        "Treść decyzji та exemption від zezwolenia na pracę",
      ],
    },
  })

export default ukraineOrdinaryTopic

export const ukraineOrdinaryMapNode: LegalNode = {
  id: "ukraine-ordinary-2026",
  title: ukraineOrdinaryTopic.body.title,
  polish: ukraineOrdinaryTopic.body.polish,
  summary: ukraineOrdinaryTopic.summary,
  checkpoints: [...(ukraineOrdinaryTopic.body.checkpoints ?? [])],
  sources: [...ukraineOrdinaryTopic.body.sources],
}
