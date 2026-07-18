import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-166",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "До ухвал відповідно застосовують правила про судові рішення (wyrok), якщо спеціальна норма не встановлює іншого.",
          sourceLocator: "Art. 166",
        },
      ],
      summary:
        "Стаття заповнює прогалини в режимі ухвал через відповідне, а не буквальне застосування правил про судове рішення (wyrok).",
      rules: [
        {
          locator: "Art. 166",
          explanation:
            "Спершу шукайте спеціальне правило для конкретної ухвали. Якщо його немає, перевірте, яку частину режиму судового рішення (wyrok) можна застосувати з урахуванням різниці між формами.",
        },
      ],
      legalEffect:
        "Норма не робить судове рішення (wyrok) й ухвалу (postanowienie) однаковими та не створює засобу оскарження без окремої підстави.",
      foreignersCase:
        "У справі іноземця не переносіть автоматично строк або наслідок судового рішення (wyrok) на кожну ухвалу; почніть зі спеціальної норми про отриманий документ.",
    },
  ],
})
