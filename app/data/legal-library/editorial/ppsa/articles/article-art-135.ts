import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-135",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Для усунення порушення права суд застосовує передбачені законом заходи щодо aktów або czynności, виданих чи вчинених у всіх postępowaniach, що лежать у межах справи за skarga, якщо це необхідно для її остаточного вирішення.",
          sourceLocator: "Art. 135",
        },
      ],
      summary:
        "Норма дозволяє суду дивитися на пов’язані postępowania в межах конкретної справи, коли це потрібно для її кінцевого завершення.",
      rules: [
        {
          locator: "Art. 135",
          explanation:
            "Потрібно одночасно встановити межі справи за skarga і необхідність заходу для кінцевого її załatwienie.",
        },
      ],
      legalEffect:
        "Це процесуальний інструмент усунення порушення, а не автоматичне скасування кожного пов’язаного акта поза межами конкретної справи.",
      foreignersCase:
        "Якщо справа про pobyt охоплює кілька пов’язаних дій органу, покажіть їх зв’язок із предметом skarga. Самої фактичної пов’язаності без необхідності для вирішення недостатньо за текстом статті.",
    },
  ],
})
