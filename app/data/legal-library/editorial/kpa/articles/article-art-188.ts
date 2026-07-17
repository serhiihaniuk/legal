import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "188",
      provisionId: "kpa-art-188",
      reviewStatus: "reviewed",
      summary:
        "Стаття надає прокурору, який бере участь у провадженні, процесуальні права сторони. Це забезпечує йому доступ до інструментів, необхідних для контролю законності.",
      rules: [
        {
          locator: "одне речення",
          explanation:
            "Prokuratorowi służą prawa strony, коли він бере участь у справі в передбаченому розділом порядку.",
        },
      ],
      legalEffect:
        "Прокурор може користуватися процесуальними правами сторони в межах провадження, хоча не стає носієм матеріального права іноземця.",
      foreignersCase:
        "У sprawie cudzoziemca прокурор може, зокрема, брати участь у доказовому провадженні та оскаржувати акти як сторона; це не позбавляє іноземця його власних прав.",
    },
  ],
})
