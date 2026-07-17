import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "145",
      provisionId: "kpa-art-145",
      reviewStatus: "reviewed",
      summary:
        "Стаття перелічує вичерпні основні дефекти, за яких поновлюється провадження, завершене остаточною decyzją.",
      rules: [
        {
          locator: "§ 1 pkt 1–4",
          explanation:
            "Підставами є фальшивий доказ, злочин, wyłączenie органу чи працівника та неучасть сторони без її вини.",
        },
        {
          locator: "§ 1 pkt 5–8",
          explanation:
            "Також діють нові істотні факти або докази, відсутня обов’язкова позиція, інше вирішення zagadnienia wstępnego чи скасована базова decyzja або судове рішення.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Для фальші чи злочину закон допускає винятки до попереднього офіційного встановлення або коли таке провадження неможливе.",
        },
      ],
      legalEffect:
        "Остаточна справа відкривається заново для перевірки підстави wznowienia і нового вирішення.",
      foreignersCase:
        "Іноземець повинен прив’язати skargę o wznowienie до конкретного pkt, наприклад неучасті без вини або нового доказу, що існував на день decyzji.",
    },
  ],
})
