import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-285b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "У випадках, передбачених для скарги про незаконність остаточного рішення, її можуть подати також Генеральний прокурор (Prokurator Generalny) або Омбудсман (Rzecznik Praw Obywatelskich).",
          sourceLocator: "Art. 285b",
        },
      ],
      summary: "Стаття додає двох публічних ініціаторів до права сторони.",
      rules: [
        {
          locator: "Art. 285b",
          explanation:
            "Звернення до цих органів не дорівнює поданню скарги: вони самостійно оцінюють, чи використати своє повноваження.",
        },
      ],
      legalEffect:
        "Публічний суб’єкт може ініціювати контроль, але закон не зобов’язує його діяти в кожній справі.",
      foreignersCase:
        "У справі іноземця підготуйте для RPO чітку хронологію незаконності й шкоди; загальне прохання «оскаржити рішення» не показує умов статті.",
    },
  ],
})
