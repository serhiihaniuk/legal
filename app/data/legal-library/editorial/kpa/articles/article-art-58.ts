import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "58",
      provisionId: "kpa-art-58",
      reviewStatus: "reviewed",
      summary:
        "Стаття встановлює передумови przywrócenia terminu: brak winy, семиденний строк від припинення перешкоди та одночасне виконання пропущеної дії.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Termin підлягає відновленню на прохання зацікавленого, якщо він uprawdopodobni brak swojej winy у пропуску.",
        },
        {
          locator: "§ 2",
          explanation:
            "Прохання подається протягом семи днів після припинення причини пропуску, одночасно з виконанням пропущеної czynności.",
        },
        {
          locator: "§ 3",
          explanation:
            "Сам семиденний строк на подання prośby o przywrócenie не може бути відновлений.",
        },
      ],
      legalEffect:
        "За сукупного виконання умов пропущена процесуальна дія може бути визнана своєчасною; пропуск строку на саме прохання є остаточним.",
      foreignersCase:
        "Якщо іноземець пропустив termin відповіді чи оскарження, самого пояснення причини недостатньо: треба вчасно подати prośbę, uprawdopodobnić brak winy і виконати дію.",
    },
  ],
})
