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

type InvalidityBody = LegalMapTopicBody

export const invalidityTopic: KnowledgeUnit<InvalidityBody> =
  defineKnowledgeUnit({
    id: "map-topic:invalidity",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "invalidity" },
    },
    summary:
      "Механізм для найтяжчих, прямо перелічених вад рішення. Це не «ще одне odwołanie» і не спосіб повторити звичайну оцінку справи.",
    claims: [
      {
        id: "invalidity-is-exceptional",
        kind: "requires-verification",
        text: "Stwierdzenie nieważności стосується закритого переліку найтяжчих вад рішення, а не будь-якої помилки оцінки доказів.",
        basis: [{ reference: kpaSourceReference, locator: "Art. 156–159" }],
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
      title: "Stwierdzenie nieważności",
      polish: kpaLaw.text`${kpaLaw.articleRange("156", "159", { start: "art. 156", end: "159" })} KPA`,
      sources: [mapTopicSources.kpa],
      guide: {
        introduction: [
          kpaLaw.text`${kpaLaw.articleRange("156", "159", { start: "Art. 156", end: "159" })} KPA регулюють stwierdzenie nieważności decyzji — надзвичайний режим для найтяжчих, прямо перелічених вад остаточного або неостаточного рішення.`,
        ],
        regulated: [
          "Вади компетенції, відсутність правової підстави або rażące naruszenie prawa, повторне вирішення тієї самої справи, адресування не-стороні, тривалу невиконуваність, наслідок у вигляді караного діяння та інші законні підстави nieważności.",
        ],
        appliesWhen: [
          kpaLaw.text`Коли дефект належить до ${kpaLaw.article("156", "art. 156 § 1")} KPA і стосується самого рішення на момент його видання, а не лише незгоди з оцінкою доказів.`,
        ],
        conditions: [
          "Провадження відкривається z urzędu або na żądanie strony; właściwy зазвичай organ wyższego stopnia, а щодо decyzji міністра або SKO — цей самий орган.",
          "Rażące naruszenie prawa означає кваліфіковану ваду, а не кожну помилку тлумачення чи процесуальне порушення.",
        ],
        exceptions: [
          kpaLaw.text`За ${kpaLaw.article("156", "art. 156 § 2")} KPA nieważność не встановлюється після десяти років від doręczenia або оголошення рішення чи за незворотних правових наслідків; тоді можливе лише встановлення видання з порушенням права.`,
          kpaLaw.text`Після тридцяти років провадження у справі nieważności взагалі не відкривається за ${kpaLaw.article("158", "art. 158 § 3")} KPA.`,
        ],
        consequences: [
          "Stwierdzenie nieważności усуває рішення з правового обігу з огляду на первинну тяжку ваду. За часової або незворотної перешкоди organ лише констатує порушення і причину незастосування nieważności.",
        ],
        procedure: [
          kpaLaw.text`Organ перевіряє допустимість, конкретний пункт ${kpaLaw.article("156", "art. 156 § 1")} KPA, час, незворотні наслідки та матеріали первинної справи; за ймовірної вади може зупинити виконання за ${kpaLaw.article("159", "art. 159")} KPA.`,
        ],
        foreignersContext: [
          kpaLaw.text`Звичайна незгода з оцінкою стабільності доходу або мети pobytu не перетворюється на rażące naruszenie prawa. Натомість рішення неналежного organu або без будь-якої правової підстави потребує окремої оцінки за ${kpaLaw.article("156", "art. 156")} KPA.`,
        ],
      } satisfies LegalNodeGuide,
    },
  })

export default invalidityTopic

export const invalidityMapNode: LegalNode = {
  id: "invalidity",
  title: invalidityTopic.body.title,
  polish: invalidityTopic.body.polish,
  summary: invalidityTopic.summary,
  sources: [...invalidityTopic.body.sources],
}
