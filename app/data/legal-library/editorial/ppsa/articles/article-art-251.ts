import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-251",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Право допомоги припиняється зі смертю сторони, якій його було надано.",
          sourceLocator: "Art. 251",
        },
      ],
      summary:
        "Стаття підкреслює особистий характер фінансової та професійної підтримки.",
      rules: [
        {
          locator: "Art. 251",
          explanation:
            "Не переносіть ухвалу про право допомоги (prawo pomocy) автоматично на спадкоємця або іншу особу, яка може вступити у справу.",
        },
      ],
      legalEffect:
        "Після смерті одержувача звільнення й призначення представника не продовжуються на користь іншої сторони.",
      foreignersCase:
        "Якщо результат справи іноземця стосується прав близьких, вони окремо встановлюють свій процесуальний статус і за потреби подають власну заяву.",
    },
  ],
})
