import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-197",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "NSA розглядає окреме оскарження (zażalenie) на закритому засіданні. До цього провадження відповідно застосовують правила про касаційну скаргу, крім правила про інший склад суду після повернення справи.",
          sourceLocator: "Art. 197 § 1–2",
        },
      ],
      summary:
        "Стаття задає спосіб розгляду та допоміжні правила для окремого оскарження (zażalenie).",
      rules: [
        {
          locator: "Art. 197 § 1–2",
          explanation:
            "Очікуйте письмового розгляду на закритому засіданні (posiedzenie niejawne). Касаційні правила застосовуйте лише відповідно до функції окремого оскарження (zażalenie) й з прямо названим винятком.",
        },
      ],
      legalEffect:
        "Відсутність відкритого засідання означає, що повна аргументація й документи повинні бути в письмовому поданні.",
      foreignersCase:
        "У справі про перебування не чекайте виклику на відкрите засідання (rozprawa), щоб пояснити головний аргумент окремого оскарження (zażalenie); викладіть його одразу в документі.",
    },
  ],
})
