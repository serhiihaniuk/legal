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
      provisionId: "ustawa-o-cudzoziemcach-art-58",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("58", "Art. 58")} встановлює, що cudzoziemiec може отримати wizę Schengen або wizę krajową.`,
          sourceLocator: "Art. 58",
        },
        {
          kind: "practical-inference",
          text: foreignersLaw.text`Вибір типу wiza визначає подальші спеціальні правила; сама можливість, сформульована в ${foreignersLaw.article("58", "Art. 58")}, не є безумовним правом на її видачу.`,
          sourceLocator: "Art. 58",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("58", "Art. 58")} вводить два види віз, передбачені цією частиною закону: wiza Schengen і wiza krajowa.`,
      rules: [
        {
          locator: "Art. 58",
          explanation:
            "Спочатку визначте, про яку з двох віз ідеться; умови, компетенцію, документи та відмови далі регулюють окремі статті і Wspólnotowy Kodeks Wizowy.",
        },
      ],
      legalEffect:
        "Стаття визначає види віз, але не гарантує видачу. Наявність візи також не відповідає автоматично на окреме питання про prawo do pracy.",
      foreignersCase:
        "У справі зафіксуйте тип wiza, її cel, кількість в’їздів і строк; після цього застосовуйте правила саме для wiza Schengen або wiza krajowa.",
    },
  ],
})
