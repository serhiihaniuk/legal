import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "163c",
      provisionId: "kpa-art-163c",
      reviewStatus: "reviewed",
      summary:
        "Стаття дозволяє використовувати urzędowy formularz у спрощеному провадженні й обмежує подальше розширення вимог. Формуляр може одночасно збирати факти, докази та саме żądanie.",
      rules: [
        {
          locator: "§ 1–2",
          explanation: kpaLaw.text`Формуляр може містити місце для фактів, доказів і вимоги та має попереджати про обмеження з ${kpaLaw.article("163c", "§ 4")}.`,
        },
        {
          locator: "§ 3",
          explanation: "Параграф скасований і не містить чинного правила.",
        },
        {
          locator: "§ 4",
          explanation:
            "У справі, розпочатій формуляром, сторона надалі не може подавати нові вимоги.",
        },
      ],
      legalEffect:
        "Зміст первинного формуляра фіксує предмет спрощеної справи й закриває можливість пізніше додати нове żądanie.",
      foreignersCase: kpaLaw.text`Якщо спеціальна процедура для іноземця ведеться на офіційному формулярі, потрібно одразу правильно сформулювати всі вимоги. Пізніше додати інший предмет у цю саму справу не дозволить ${kpaLaw.article("163c", "§ 4")}.`,
    },
  ],
})
