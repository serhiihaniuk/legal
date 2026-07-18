import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-178a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо сторона ефективно відкликала касаційну скаргу до передання її разом із матеріалами до NSA, WSA припиняє касаційне провадження на закритому засіданні. На цю ухвалу можна подати окреме оскарження (zażalenie).",
          sourceLocator: "Art. 178a",
        },
      ],
      summary:
        "Стаття визначає момент, до якого наслідок відкликання оформлює WSA.",
      rules: [
        {
          locator: "Art. 178a",
          explanation:
            "Перевірте ефективність відкликання та чи матеріали ще не передано до NSA. Саме ця межа визначає компетентний суд.",
        },
      ],
      legalEffect:
        "Припинення завершує касаційне провадження без перевірки рішення WSA по суті, але сама ухвала підлягає окремому оскарженню.",
      foreignersCase:
        "Перед відкликанням касації у справі про перебування письмово оцініть, яке рішення стане остаточним і чи залишиться інший процесуальний шлях.",
    },
  ],
})
