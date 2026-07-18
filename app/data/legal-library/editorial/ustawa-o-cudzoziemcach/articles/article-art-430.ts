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
      provisionId: "ustawa-o-cudzoziemcach-art-430",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("430", "Art. 430")} визначає, які категорії інформації зберігають у конкретних rejestry та ewidencja zaproszeń: дані про wnioski, postanowienia, decyzje administracyjne, orzeczenia sądu й особові дані, а для окремих реєстрів також відомості про документи, фотографії, odciski, виїзд, витрати повернення, mobilność, запрошення та інші прямо названі події.`,
          sourceLocator: "Art. 430 ust. 1",
        },
        {
          kind: "practical-inference",
          text: "Збереження даних у rejestr не означає, що кожна записана обставина автоматично доведена або має однакову юридичну силу з decyzja.",
          sourceLocator: "Art. 430 ust. 1–9",
        },
      ],
      summary:
        "Стаття визначає, які рішення, особові дані, відбитки, фотографії та відомості зберігаються у rejestry та ewidencja zaproszeń, зокрема щодо віз, дозволів, повернення, мобільності й довідок.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Базово зберігаються інформація про wnioski, postanowienia, decyzje, судові рішення та особові дані в межах ustawy.",
        },
        {
          locator: "ust. 2 pkt 1–7",
          explanation:
            "Для окремих rejestry додаються дані про дозволи, документи, odciski linii papilarnych, фотографії, виїзд, витрати повернення, мобільність і запрошення.",
        },
        {
          locator: "ust. 3–9",
          explanation: foreignersLaw.text`Окремі ust. визначають дані щодо дозволів на в’їзд, затримань біля кордону, відбитків, pouczenia та zaświadczenia з ${foreignersLaw.article("170", "Art. 170")}.`,
        },
      ],
      legalEffect:
        "Норма визначає обсяг інформації, яку органи зберігають у кожному конкретному rejestr. Сам запис даних є дією обліку й не замінює рішення або доказової оцінки у провадженні.",
      foreignersCase: foreignersLaw.text`Якщо потрібна інформація про власну справу, спочатку назвіть rejestr за ${foreignersLaw.article("428", "Art. 428")}, потім знайдіть у ${foreignersLaw.article("430", "Art. 430")} відповідний пункт і конкретну категорію даних. Не вимагайте від органу абстрактно «всі дані» без визначення запису та мети запиту.`,
    },
  ],
})
