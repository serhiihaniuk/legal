import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "112",
      provisionId: "kpa-art-112",
      reviewStatus: "reviewed",
      summary:
        "Помилкове роз’яснення (pouczenie) щодо права на апеляцію (odwołanie), наслідків відмови від неї (skutki zrzeczenia się odwołania), подання позову до загального суду (powództwo do sądu powszechnego) або скарги до адміністративного суду (skarga do sądu administracyjnego) не може зашкодити стороні, яка діяла відповідно до цього роз’яснення.",
      rules: [
        {
          locator: "єдиний блок",
          explanation:
            "Захист діє тоді, коли сторона фактично діяла відповідно до помилкового роз’яснення (pouczenie), наданого органом.",
        },
      ],
      legalEffect:
        "Процесуальна помилка органу в роз’ясненні (pouczenie) не повинна позбавити сторону засобу захисту.",
      foreignersCase:
        "Іноземець має зберегти рішення (decyzja) і доказ того, що діяв за його роз’ясненням (pouczenie), щоб показати причинний зв’язок із помилкою органу.",
    },
  ],
})
