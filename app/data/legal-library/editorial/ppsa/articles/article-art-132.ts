import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-132",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Sąd розглядає справу wyrokiem.",
          sourceLocator: "Art. 132",
        },
      ],
      summary: "Стаття називає wyrok формою, якою суд вирішує справу.",
      rules: [
        {
          locator: "Art. 132",
          explanation:
            "Відрізняйте рішення справи wyrokiem від окремих процесуальних питань, для яких закон передбачає postanowienie.",
        },
      ],
      legalEffect:
        "Норма визначає форму судового вирішення, але сама не каже, яким буде результат або чи можна його оскаржити.",
      foreignersCase:
        "У справі іноземця про судовий контроль decyzja не робіть висновок із самого слова wyrok про позитивний результат; читайте sentencja та подальше pouczenie.",
    },
  ],
})
