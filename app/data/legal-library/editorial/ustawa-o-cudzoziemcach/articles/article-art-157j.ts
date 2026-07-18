import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-157j",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("157j", "Art. 157j")} встановлює odmowa udzielenia дозволу dla wolontariusza за незаконно орієнтованої jednostka, визначених порушень її керівництва/обов’язків, ліквідації або обґрунтованих сумнівів щодо мети pobyt; для наступного дозволу додано використання попереднього не за метою.`,
          sourceLocator: "Art. 157j ust. 1–2",
        },
      ],
      summary:
        "Відмова у волонтерському дозволі може стосуватися як організації, так і достовірності заявленої мети побиту.",
      rules: [
        {
          locator: "ust. 1 pkt 1",
          explanation:
            "Відмовляють, якщо jednostka переважно сприяє wolontariusz незаконному в’їзду або pobyt.",
        },
        {
          locator: "ust. 1 pkt 2",
          explanation:
            "Підставами щодо jednostka є управління/контроль особою з названими вироками чи покараннями, невиконання внесків або податковий борг.",
        },
        {
          locator: "ust. 1 pkt 3–4",
          explanation:
            "Відмова можлива, коли jednostka є в ліквідації або є обґрунтовані сумніви, що фактична мета pobyt інша за заявлену.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Для наступного дозволу додатково враховується використання попереднього дозволу не за метою, для якої його надали.",
        },
      ],
      legalEffect:
        "Орган має встановити конкретну підставу та прийняти рішення; сама зміна відносин із jednostka не доводить автоматичну відмову.",
      foreignersCase:
        "Перевірте реальну діяльність і статус jednostka, її внески та податки, umowa і фактичний характер wolontariat. Розділіть первинну та наступну заяву.",
    },
  ],
})
