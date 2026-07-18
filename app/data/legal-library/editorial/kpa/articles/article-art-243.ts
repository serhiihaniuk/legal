import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "243",
      provisionId: "kpa-art-243",
      reviewStatus: "reviewed",
      summary:
        "Стаття зобов'язує некомпетентний орган передати wniosek належному органу протягом семи днів і повідомити заявника. Помилка адресата не завершує звернення без розгляду.",
      rules: [
        {
          locator: "перше речення",
          explanation:
            "Орган, який не є właściwy, передає wniosek компетентному органу протягом семи днів.",
        },
        {
          locator: "друге речення",
          explanation: "Про передачу одночасно повідомляють wnioskodawcę.",
        },
      ],
      legalEffect:
        "Wniosek продовжує шлях у компетентному органі, а заявник знає, куди його передано.",
      foreignersCase:
        "Якщо системну пропозицію щодо процедур для іноземців подано не тому органові, він має передати її в семиденний строк, а не вимагати від автора подавати все заново.",
    },
  ],
})
