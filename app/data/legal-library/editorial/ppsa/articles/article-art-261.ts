import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-261",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "За заперечення (sprzeciw) й окреме оскарження (zażalenie) у справах права допомоги судовий збір не стягують.",
          sourceLocator: "Art. 261",
        },
      ],
      summary:
        "Стаття гарантує, що оскарження рішення про доступ до допомоги саме не створює нового платіжного бар’єра.",
      rules: [
        {
          locator: "Art. 261",
          explanation:
            "Правильно класифікуйте предмет: безоплатність стосується засобів саме у провадженні про право допомоги (prawo pomocy).",
        },
      ],
      legalEffect:
        "Відсутність збору не звільняє від строку, форми та обґрунтування засобу оскарження.",
      foreignersCase:
        "Іноземець може оскаржити відмову в допомозі без збору за подання (wpis), але повинен дотриматися семиденного або іншого належного строку.",
    },
  ],
})
