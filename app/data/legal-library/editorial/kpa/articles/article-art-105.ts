import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "105",
      provisionId: "kpa-art-105",
      reviewStatus: "reviewed",
      summary:
        "Стаття регулює umorzenie, коли провадження втратило предмет, а також факультативне припинення на прохання ініціатора.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "За повної або часткової безпредметності орган зобов’язаний umorzyć провадження відповідною decyzją.",
        },
        {
          locator: "§ 2",
          explanation:
            "На прохання сторони-ініціатора орган може припинити справу, якщо інші сторони не заперечують і це не суперечить суспільному інтересу.",
        },
      ],
      legalEffect:
        "Справу закінчують без матеріального вирішення в частині, яка більше не має предмета, або за допустимою відмовою ініціатора.",
      foreignersCase:
        "У справі іноземця треба відрізняти реальну безпредметність від ситуації, коли орган усе ще повинен вирішити подану вимогу по суті.",
    },
  ],
})
