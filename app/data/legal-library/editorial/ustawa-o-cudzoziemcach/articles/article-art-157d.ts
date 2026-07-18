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
      provisionId: "ustawa-o-cudzoziemcach-art-157d",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("157d", "Art. 157d")} встановлює odmowa udzielenia дозволу dla stażysty, крім ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 1–5, 8 і 9, за незаконно орієнтованого organizator, визначені порушення організатора, ліквідацію/банкрутство та обґрунтовані сумніви щодо мети pobyt; для наступного дозволу додано використання попереднього не за метою.`,
          sourceLocator: "Art. 157d ust. 1–2",
        },
      ],
      summary:
        "Навіть документально оформлений staż може отримати відмову через статус і діяльність organizator або недостовірну мету pobyt.",
      rules: [
        {
          locator: "ust. 1 pkt 1",
          explanation:
            "Відмовляють, якщо organizator stażu головно сприяє stażysta незаконному в’їзду або pobyt.",
        },
        {
          locator: "ust. 1 pkt 2 lit. a–d",
          explanation:
            "Підставами щодо organizator є управління/контроль особою з названими вироками чи покараннями, невиконання внесків, податковий борг, а також відсутність діяльності, якщо staż безпосередньо з нею пов’язаний.",
        },
        {
          locator: "ust. 1 pkt 3–4",
          explanation:
            "Відмова можлива при оголошеному банкрутстві або ліквідації organizator, а також за обґрунтованих сумнівів, що заявлена мета pobyt не відповідає дійсній.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Для наступного дозволу, крім названих підстав, враховується використання попереднього дозволу не за метою, для якої його надали.",
        },
      ],
      legalEffect:
        "Стаття створює спеціальні матеріальні підстави відмови, але орган має встановити конкретний факт і застосувати відповідний пункт.",
      foreignersCase:
        "Перевірте реальність діяльності organizator, його реєстровий та податково-страховий статус, програму staż і фактичну мету pobyt. Розділіть первинний і наступний дозвіл.",
    },
  ],
})
