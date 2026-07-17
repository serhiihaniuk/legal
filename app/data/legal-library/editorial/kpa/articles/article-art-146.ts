import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "146",
      provisionId: "kpa-art-146",
      reviewStatus: "reviewed",
      summary:
        "Стаття обмежує можливість uchylenia після wznowienia давністю та забороняє скасування, якщо нове рішення було б по суті таким самим.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Для фальші й злочину межа становить десять років, для інших названих підстав — п’ять років від doręczenia або ogłoszenia decyzji.",
        },
        {
          locator: "§ 2",
          explanation:
            "Decyzji не скасовують, коли після wznowienia можливий лише тотожний по суті результат.",
        },
      ],
      legalEffect:
        "Навіть доведена підстава wznowienia не завжди дозволяє усунути стару decyzję.",
      foreignersCase:
        "У старій справі іноземця треба окремо перевірити і підставу wznowienia, і часову межу реального uchylenia.",
    },
  ],
})
