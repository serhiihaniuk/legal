import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "96f",
      provisionId: "kpa-art-96f",
      reviewStatus: "reviewed",
      summary:
        "Норма встановлює особисті вимоги до mediatora та суворіший критерій, коли орган є учасником mediacji.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Mediator — фізична особа з повною дієздатністю і повнотою публічних прав; закон називає типові офіційні списки.",
        },
        {
          locator: "§ 2",
          explanation:
            "Коли орган є учасником, mediator має бути внесений до одного з указаних списків або реєстрів.",
        },
        {
          locator: "§ 3",
          explanation:
            "Працівник органу, перед яким триває справа, не може бути mediatorem.",
        },
      ],
      legalEffect: "Невідповідна особа не може вести mediację у цій справі.",
      foreignersCase:
        "У справі іноземця особливо слід перевірити незалежність mediatora від органу, який веде провадження.",
    },
  ],
})
