import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "248",
      provisionId: "kpa-art-248",
      reviewStatus: "reviewed",
      summary:
        "Норма прирівнює skargi і wnioski, передані редакціями преси, радіо чи телебачення, до звичайних звернень за правилами відповідних розділів. Редакція може також вимагати повідомлення про результат або передачу.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Звернення, передане редакцією компетентному органу, розглядається в режимі rozdziału 2 або 3 działu VIII.",
        },
        {
          locator: "§ 2",
          explanation:
            "Якщо редакція цього вимагає, орган у належний строк повідомляє її про спосіб розгляду або передачу іншому органу.",
        },
      ],
      legalEffect:
        "Медійне посередництво не змінює правову процедуру звернення, але може створити додатковий обов'язок повідомити редакцію.",
      foreignersCase:
        "Коли медіа передає skargę щодо практики обслуговування іноземців, urząd розглядає її за звичайними правилами działu VIII, а не як журналістський запит іншого типу.",
    },
  ],
})
