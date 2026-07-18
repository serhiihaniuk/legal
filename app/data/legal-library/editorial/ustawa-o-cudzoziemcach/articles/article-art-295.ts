import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-295",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 295 передбачає взяття від cudzoziemca odciski linii papilarnych під час kontroli для цілей Art. 20 ust. 1 або, як можливість, Art. 19 ust. 1 rozporządzenia nr 767/2008, а також перевірку таких відбитків у Wizowym Systemie Informacyjnym та іншим способом для встановлення особи або справжності wizy Schengen.",
          sourceLocator: "Art. 295 ust. 1–3",
        },
      ],
      summary:
        "Стаття регулює взяття і перевірку відбитків пальців під час kontroli у зв’язку з Wizowym Systemem Informacyjnym.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Відбитки беруться для цілей, прямо пов’язаних із названими положеннями розпорядження nr 767/2008; у другому випадку стаття формулює можливість.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Відбитки перевіряються у Wizowym Systemie Informacyjnym і можуть перевірятися іншим способом для ідентифікації або перевірки wizy Schengen.",
        },
      ],
      legalEffect:
        "Норма дає правову рамку біометричної перевірки під час контролю; вона не встановлює самостійно висновку про законність pobytu.",
      foreignersCase:
        "Якщо під час контролю беруть відбитки, уточніть, яку з цілей Art. 295 названо, і відокремте біометричну ідентифікацію від оцінки інших умов перебування.",
    },
  ]),
})
