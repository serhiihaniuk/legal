import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-285i",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "NSA розглядає скаргу про незаконність складом трьох суддів. Суддя, який брав участь у виданні оскарженого рішення, виключений із цього розгляду.",
          sourceLocator: "Art. 285i § 1–2",
        },
      ],
      summary:
        "Стаття визначає склад і запобігає перевірці суддею власного рішення.",
      rules: [
        {
          locator: "Art. 285i § 1–2",
          explanation:
            "Зіставте прізвища в оскарженому рішенні зі складом NSA у новому провадженні.",
        },
      ],
      legalEffect:
        "Незалежність контролю забезпечує новий трьохсуддівський склад без автора оскарженого рішення.",
      foreignersCase:
        "У справі іноземця перевірте склад після отримання повідомлення суду й своєчасно заявіть конкретну проблему, якщо бачите збіг.",
    },
  ],
})
