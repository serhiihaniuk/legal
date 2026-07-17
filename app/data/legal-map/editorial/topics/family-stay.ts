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

type FamilyStayBody = LegalMapTopicBody

export const familyStayTopic: KnowledgeUnit<FamilyStayBody> =
  defineKnowledgeUnit({
    id: "map-topic:family-stay",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "family-stay" },
    },
    summary:
      "Rodzinny pobyt ґрунтується на конкретному сімейному зв’язку та правовому статусі особи, з якою następuje połączenie. Саме проживання разом не замінює категорії, визначеної законом.",
    claims: [
      {
        id: "family-link",
        kind: "requires-verification",
        text: "Сімейна підстава вимагає визначеної законом категорії зв’язку, статусу sponsora та документального й фактичного підтвердження.",
        basis: [{ reference: aliensSourceReference, locator: "Art. 158–169" }],
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
      title: "Pobyt rodzinny",
      polish: foreignersLaw.text`${foreignersLaw.articleRange("158", "169", { start: "art. 158", end: "169" })}`,
      sources: [mapTopicSources.aliens],
      guide: {
        introduction: [
          "Rodzinny pobyt ґрунтується на конкретному сімейному зв’язку та правовому статусі особи, з якою następuje połączenie. Саме проживання разом не замінює категорії, визначеної законом.",
        ],
        regulated: [
          foreignersLaw.text`${foreignersLaw.articleRange("158", "169", { start: "Art. 158", end: "169" })} охоплюють małżonków, małoletnie dzieci, połączenie z cudzoziemcem або громадянином Польщі та інші сімейні ситуації.`,
        ],
        appliesWhen: [
          "Заявник належить до визначеної категорії, а сімейний зв’язок існує й має юридичне та фактичне підтвердження.",
        ],
        conditions: [
          "Залежно від підстави перевіряються akt stanu cywilnego, status sponsora, ubezpieczenie, dochód, mieszkanie та реальність więzi rodzinnej.",
        ],
        exceptions: [
          "Małżeństwo zawarte dla obejścia przepisów не створює права; дитина не набуває автоматично дозволу батька і часто потребує власної процедури.",
        ],
        consequences: [
          "Дозвіл легалізує pobyt у сімейній меті та може давати окремий доступ до праці; припинення зв’язку оцінюється за спеціальними нормами й фактичними обставинами.",
        ],
        procedure: [
          "Заява подається через MOS із документами стану cywilnego, статусу члена сім’ї та іншими доказами, після чого organ перевіряє достовірність і materialne przesłanki.",
        ],
        foreignersContext: [
          "Для członka rodziny obywatela UE може діяти інший правовий режим, тому спочатку визначається статус особи, з якою відбувається połączenie.",
        ],
      } satisfies LegalNodeGuide,
    },
  })

export default familyStayTopic

export const familyStayMapNode: LegalNode = {
  id: "family-stay",
  title: familyStayTopic.body.title,
  polish: familyStayTopic.body.polish,
  summary: familyStayTopic.summary,
  sources: [...familyStayTopic.body.sources],
}
