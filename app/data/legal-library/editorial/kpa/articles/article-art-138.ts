import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "138",
      provisionId: "kpa-art-138",
      reviewStatus: "reviewed",
      summary:
        "Стаття визначає повний каталог основних рішень organu odwoławczego: utrzymanie, зміна по суті, umorzenie або kasacyjne повернення.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Орган залишає decyzję, скасовує її і вирішує суть чи umarza відповідне провадження, або umarza саму апеляцію.",
        },
        {
          locator: "§ 2–2a",
          explanation:
            "Повернення першій інстанції допустиме при істотному процесуальному дефекті; орган дає вказівки щодо фактів і помилкового тлумачення права.",
        },
        {
          locator: "§ 2b і § 4",
          explanation:
            "За ширшого з’ясування справу не повертають; для urzędowego blankietu можливе зобов’язання видати decyzję визначеного змісту.",
        },
      ],
      legalEffect:
        "Апеляційна decyzja або остаточно вирішує контроль, або відкриває повторний розгляд із обов’язковими напрямами.",
      foreignersCase:
        "В odwołaniu іноземець має пов’язати zarzuty з очікуваним видом рішення: зміною по суті або, лише за істотного дефекту, поверненням.",
    },
  ],
})
