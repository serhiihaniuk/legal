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
      provisionId: "ustawa-o-cudzoziemcach-art-430",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("430", "Art. 430")} ust. 1: «W rejestrach ... przechowuje się informacje o wnioskach, postanowieniach, decyzjach administracyjnych, orzeczeniach sądu oraz dane osobowe przetwarzane zgodnie z niniejszą ustawą».`,
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
        "Норма визначає обсяг інформації, яку органи зберігають у конкретних реєстрах. Редакційні odnośniki 182–186 показують зміни тексту, тому часовий режим не можна виводити без перевірки дати.",
      foreignersCase:
        "Якщо потрібна інформація про власну справу, назвіть rejestr і тип даних; для старих подій окремо перевірте редакційні odnośniki 182–186 та дату зміни.",
    },
  ],
})
