import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-418",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("418", "Art. 418")}: «W celu zapewnienia bezpieczeństwa cudzoziemcom, w strzeżonym ośrodku lub areszcie dla cudzoziemców można prowadzić obserwację pomieszczeń i rejestrować z nich obraz».`,
          sourceLocator: "Art. 418",
        },
        {
          kind: "practical-inference",
          text: "Мета спостереження в нормі — безпека cudzoziemcy; стаття відсилає до окремих правил ustawa o Straży Granicznej.",
          sourceLocator: "Art. 418",
        },
      ],
      summary:
        "Для безпеки у strzeżony ośrodek або areszt можна спостерігати за приміщеннями та записувати з них зображення технічними засобами.",
      rules: [
        {
          locator: "Art. 418",
          explanation:
            "Спостереження і rejestrowanie obrazu допускаються технічними засобами для забезпечення безпеки cudzoziemców.",
        },
        {
          locator: "Art. 418",
          explanation:
            "Порядок визначається правилами ustawa z dnia 12 października 1990 r. o Straży Granicznej.",
        },
      ],
      legalEffect:
        "Стаття створює можливість технічного нагляду в межах безпекової мети та відсилає до спеціального закону; сама не описує всі межі запису.",
      foreignersCase: foreignersLaw.text`Якщо питання стосується конкретного запису чи камери, вкажіть приміщення, час і подію та перевірте правила ustawa o Straży Granicznej, а не робіть висновок лише з ${foreignersLaw.article("418", "Art. 418")}.`,
    },
  ],
})
