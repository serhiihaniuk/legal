import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-86",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 86 спрямовує стягнені grzywny за art. 84 до Fundusz Pracy, визначає передачу судами на рахунок powiatowy urząd pracy і встановлює розгляд за Kodeks postępowania w sprawach o wykroczenia.",
          sourceLocator: "Art. 86 ust. 1–3",
        },
      ],
      summary:
        "Стаття регулює фінансовий маршрут штрафу та процедуру розгляду справ, а не нові склади wykroczenie. Суд передає стягнену і виконану grzywna відповідному powiatowy urząd pracy.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Orzeczone і wyegzekwowane grzywny є доходом Fundusz Pracy і передаються судом безпосередньо до відповідного powiatowy urząd pracy або samorząd powiatu.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Orzekanie за діяння art. 84 відбувається за Kodeks postępowania w sprawach o wykroczenia.",
        },
      ],
      legalEffect:
        "Процедурний режим не означає, що кожне повідомлення органу є вже orzeczenie; факт і розмір grzywna встановлюються у відповідній процедурі.",
      foreignersCase:
        "Якщо отримано wezwanie у справі art. 84, перевірте стадію провадження і процесуальні строки за Kodeks. Не плутайте призначення коштів зі способом доведення порушення.",
    },
  ]),
})
