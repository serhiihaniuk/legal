import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "56",
      provisionId: "kpa-art-56",
      reviewStatus: "reviewed",
      summary:
        "Стаття надає викликаній особі право на відшкодування визначених витрат і встановлює момент, до якого треба заявити вимогу.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Особа, яка з’явилася за wezwaniem, отримує koszty podróży та інші належні суми; правило охоплює також названі випадки особистої явки сторони.",
        },
        {
          locator: "§ 2",
          explanation:
            "Żądanie należności подається organowi до видання decyzji, інакше право вимоги втрачається.",
        },
      ],
      legalEffect:
        "Право на витрати залежить не лише від явки, а й від своєчасного заявлення вимоги до завершення справи decyzją.",
      foreignersCase:
        "Якщо іноземець поніс витрати через особисте wezwanie, він повинен заявити їх organowi до винесення decyzji.",
    },
  ],
})
