import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "116",
      provisionId: "kpa-art-116",
      reviewStatus: "reviewed",
      summary:
        "За наявності умов для ugody орган відкладає decyzję і дає сторонам строк на її укладення.",
      rules: [
        {
          locator: "§ 1",
          explanation: "Орган одночасно пояснює порядок і наслідки ugody.",
        },
        {
          locator: "§ 2",
          explanation:
            "Якщо сторона відмовилася від наміру або строк пропущено, орган повертається до вирішення decyzją.",
        },
      ],
      legalEffect:
        "Справу тимчасово спрямовують до погодження, але невдала спроба не залишає її без рішення.",
      foreignersCase:
        "У справі іноземця відкладення на ugodę не означає позитивного результату; за її відсутності орган вирішить вимогу владним актом.",
    },
  ],
})
