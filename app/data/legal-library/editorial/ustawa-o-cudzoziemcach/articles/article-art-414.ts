import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-414",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("414", "Art. 414")} ust. 3: «Cudzoziemcowi umieszczonemu w strzeżonym ośrodku wraz z członkami jego rodziny lub z małoletnim pozostającym pod jego opieką zapewnia się wspólny pokój dla cudzoziemców».`,
          sourceLocator: "Art. 414 ust. 3",
        },
        {
          kind: "practical-inference",
          text: "Для осіб, які називають себе найближчими, спільне розміщення залежить від письмового wniosek і можливостей ośrodek.",
          sourceLocator: "Art. 414 ust. 5",
        },
      ],
      summary:
        "Стаття встановлює правила розміщення у кімнатах і камерах: розділення осіб різної статі, спільну кімнату для сім’ї, окрему частину для małoletni без опікуна та можливість спільного розміщення близьких осіб.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "У strzeżony ośrodek особу розміщують у pokoju, а в areszt — у celi mieszkalnej; cudzoziemcy різної статі розміщуються окремо.",
        },
        {
          locator: "ust. 3–4",
          explanation:
            "Члени сім’ї з особою, яка перебуває під їхньою опікою, отримують спільну кімнату; małoletni без опікуна — окрему частину ośrodek.",
        },
        {
          locator: "ust. 5",
          explanation:
            "Особи, які заявляють про близькі стосунки, можуть бути розміщені разом за письмовим wniosek, наскільки це можливо.",
        },
      ],
      legalEffect:
        "Норма визначає мінімальні правила розміщення та окрему гарантію для сім’ї й дітей. У частині близьких осіб закон прямо залишає умову «w miarę możliwości».",
      foreignersCase:
        "Подайте письмовий wniosek про спільну кімнату, якщо це відповідає фактам, і збережіть підтвердження сімейного зв’язку чи опіки.",
    },
  ],
})
