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
      provisionId: "ustawa-o-cudzoziemcach-art-412",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("412", "Art. 412")} ust. 1 встановлює kontrola osobista під час прийняття та перебування у strzeżony ośrodek або areszt, за правилами ${foreignersLaw.external("art. 11aa", "https://eli.gov.pl/eli/DU/2025/914/ogl")} ustawy o Straży Granicznej.`,
          sourceLocator: "Art. 412 ust. 1",
        },
        {
          kind: "practical-inference",
          text: "Фраза «(uchylony)» у ust. 2 не є чинним правилом, тому її не можна використовувати як самостійну підставу.",
          sourceLocator: "Art. 412 ust. 2",
        },
      ],
      summary:
        "Стаття регулює kontrola osobista при прийнятті та під час перебування у strzeżony ośrodek або areszt, а також долю заборонених предметів, знайдених під час контролю.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Kontrola osobista проводиться за правилами ${foreignersLaw.external("art. 11aa", "https://eli.gov.pl/eli/DU/2025/914/ogl")} ustawy o Straży Granicznej.`,
        },
        {
          locator: "ust. 2",
          explanation:
            "Ust. 2 позначений як «uchylony»; чинного правила в цій частині текст не містить.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Знайдені предмети, якими cudzoziemiec не може володіти, затримуються; якщо власника встановлено, їх передають до depozyt або надсилають за його рахунок вказаній особі, instytucja чи organizacja, а в обґрунтованому випадку — за рахунок ośrodek або areszt.",
        },
      ],
      legalEffect:
        "Норма визначає контроль і поводження з певними предметами. Посилання на неї не дає відповіді на всі питання про законність самої ізоляції.",
      foreignersCase: foreignersLaw.text`Звірте опис вилученого предмета, підставу контролю та запис про передачу до depozyt; для деталей процедури перевірте ${foreignersLaw.external("art. 11aa", "https://eli.gov.pl/eli/DU/2025/914/ogl")} ustawy o Straży Granicznej.`,
    },
  ],
})
