import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "219",
      provisionId: "kpa-art-219",
      reviewStatus: "reviewed",
      summary:
        "Норма визначає форму відмови у видачі zaświadczenia або довідки саме того змісту, якого просить заявник. Відмова оформлюється postanowieniem і підлягає заżaleniu.",
      rules: [
        {
          locator: "одне речення",
          explanation:
            "Odmowa wydania zaświadczenia або odmowa zaświadczenia o żądanej treści відбувається у формі postanowienia, на яке можна подати zażalenie.",
        },
      ],
      legalEffect:
        "Заявник отримує формальний акт і окремий засіб оскарження замість неформальної відповіді, що орган не може підтвердити потрібний зміст.",
      foreignersCase:
        "Якщо орган не підтверджує потрібний іноземцю факт у zaświadczeniu, потрібно вимагати postanowienie і користуватися zażaleniem, а не трактувати звичайний лист як остаточну відмову.",
    },
  ],
})
