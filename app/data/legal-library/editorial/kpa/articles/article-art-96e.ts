import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "96e",
      provisionId: "kpa-art-96e",
      reviewStatus: "reviewed",
      summary:
        "Стаття визначає період відкладення розгляду на час mediacji та порядок її завершення без результату.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Розгляд відкладається до двох місяців і може бути продовжений не більш як на місяць за спільною заявою або з важливих причин.",
        },
        {
          locator: "§ 3",
          explanation:
            "Якщо мети mediacji не досягнуто, орган завершує її postanowieniem і вирішує справу.",
        },
      ],
      legalEffect:
        "На визначений період звичайний розгляд поступається mediacji, але безрезультатність повертає справу до вирішення органом.",
      foreignersCase:
        "Для справи іноземця треба враховувати, що mediacja змінює календар розгляду, але не гарантує узгодженого результату.",
    },
  ],
})
