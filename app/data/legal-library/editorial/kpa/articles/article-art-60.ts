import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "60",
      provisionId: "kpa-art-60",
      reviewStatus: "reviewed",
      summary:
        "Стаття дозволяє на вимогу сторони призупинити виконання decyzji або postanowienia до розгляду прохання про відновлення строку на odwołanie чи zażalenie.",
      rules: [
        {
          locator: "całość",
          explanation:
            "Wstrzymanie можливе до вирішення prośby, стосується лише строку на odwołanie або zażalenie і потребує żądania strony.",
        },
      ],
      legalEffect:
        "Подання prośby саме не зупиняє виконання; окреме żądanie може привести до тимчасового wstrzymania.",
      foreignersCase:
        "Якщо іноземець просить відновити строк оскарження, треба окремо оцінити żądanie wstrzymania виконання негативної decyzji.",
    },
  ],
})
