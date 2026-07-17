import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "106",
      provisionId: "kpa-art-106",
      reviewStatus: "reviewed",
      summary:
        "Коли закон вимагає позиції іншого органу, decyzja може бути видана лише після отримання цієї позиції за процедурою współdziałania.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Основний орган звертається по opinia, zgoda чи іншу позицію та повідомляє про це сторону.",
        },
        {
          locator: "§ 3–4",
          explanation:
            "Орган співдії діє невідкладно, загалом не пізніше двох тижнів, і може провести власне з’ясування.",
        },
        {
          locator: "§ 5–6",
          explanation:
            "Позиція оформлюється postanowieniem із zażaleniem; при затримці діють правила про бездіяльність і ponaglenie.",
        },
      ],
      legalEffect:
        "Обов’язкова позиція стає процесуальною передумовою decyzji й окремим оскаржуваним актом.",
      foreignersCase:
        "У справі іноземця, де спеціальний закон вимагає співдії іншого органу, заявник має бути повідомлений і може контролювати затримку або оскаржити postanowienie.",
    },
  ],
})
