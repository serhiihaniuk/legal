import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "71",
      provisionId: "kpa-art-71",
      reviewStatus: "reviewed",
      summary:
        "Стаття забороняє робити в protokole нечитабельні виправлення: закреслений текст має залишатися видимим, а зміни — бути підтверджені.",
      rules: [
        {
          locator: "całość",
          explanation:
            "Skreślenia і poprawki треба робити так, щоб первинний текст можна було прочитати, та potwierdzić їх у protokole перед підписанням.",
        },
      ],
      legalEffect:
        "Історія змін у protokole залишається прозорою й не може бути прихована переписуванням запису.",
      foreignersCase:
        "Якщо в protokole пояснень іноземця виправляють зміст, зміна має бути видимою та підтвердженою до підпису.",
    },
  ],
})
