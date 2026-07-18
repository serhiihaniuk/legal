import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "69",
      provisionId: "kpa-art-69",
      reviewStatus: "reviewed",
      summary:
        "Стаття встановлює спеціальні правила протоколювання zeznań, зокрема негайне підписання та переклад показань іншою мовою.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Protokół przesłuchania після zeznania зачитують особі, яка дала показання, і негайно подають їй на підпис.",
        },
        {
          locator: "§ 2",
          explanation:
            "Для zeznania іноземною мовою protokół містить польський переклад, дані tłumacza та його підпис.",
        },
      ],
      legalEffect:
        "Показання набувають процесуально перевірюваної форми, а перекладач бере участь у засвідченні польського викладу.",
      foreignersCase:
        "Якщо іноземець дає zeznania не польською, у protokole мають бути переклад і дані tłumacza, а не лише узагальнення працівника organu.",
    },
  ],
})
