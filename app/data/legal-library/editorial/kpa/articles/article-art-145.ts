import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "145",
      provisionId: "kpa-art-145",
      reviewStatus: "reviewed",
      summary:
        "Стаття містить вичерпний перелік основних підстав для поновлення провадження (wznowienie postępowania), завершеного остаточним рішенням (decyzja ostateczna).",
      rules: [
        {
          locator: "§ 1 pkt 1–4",
          explanation:
            "Підставами є фальшивий доказ, злочин, порушення правил відводу (wyłączenie pracownika lub organu) та неучасть сторони без її вини.",
        },
        {
          locator: "§ 1 pkt 5–8",
          explanation:
            "Також підставами є нові істотні факти або докази, відсутність обов’язкової позиції іншого органу, інше вирішення попереднього питання (zagadnienie wstępne) чи подальше скасування або зміна адміністративного або судового акта, на якому ґрунтувалося рішення (decyzja).",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Для фальші чи злочину закон допускає винятки до попереднього офіційного встановлення або коли таке провадження неможливе.",
        },
      ],
      legalEffect:
        "Остаточно завершена справа відкривається заново для перевірки підстави поновлення (wznowienie postępowania) і нового вирішення.",
      foreignersCase:
        "Іноземець повинен пов’язати заяву про поновлення (podanie o wznowienie postępowania) з конкретним пунктом, наприклад неучастю без вини або новим доказом, який існував на день видання рішення (decyzja).",
    },
  ],
})
