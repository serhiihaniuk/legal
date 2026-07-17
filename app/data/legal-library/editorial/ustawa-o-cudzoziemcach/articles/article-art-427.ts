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
      provisionId: "ustawa-o-cudzoziemcach-art-427",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("427", "Art. 427")} ust. 1: «Minister właściwy do spraw wewnętrznych określi, w drodze rozporządzenia» умови для strzeżone ośrodki, regulamin та умови харчування.`,
          sourceLocator: "Art. 427 ust. 1",
        },
        {
          kind: "practical-inference",
          text: foreignersLaw.text`Детальні побутові правила треба шукати у відповідному rozporządzenie; ${foreignersLaw.article("427", "Art. 427")} сам не містить усіх процедурних деталей.`,
          sourceLocator: "Art. 427 ust. 1–2",
        },
      ],
      summary:
        "Стаття доручає minister właściwy do spraw wewnętrznych видати rozporządzenie про умови strzeżone ośrodki й areszty, regulamin та харчування; також дозволяє визначити способи охорони.",
      rules: [
        {
          locator: "ust. 1 pkt 1–3",
          explanation:
            "Rozporządzenie має визначити умови приміщень і розміщення, regulamin організаційно-порядковий та умови й денну норму posiłki і napoje з урахуванням віку, здоров’я, релігії та культури.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Minister може визначити способи охорони та умови входу осіб, які не є функціонерами чи працівниками Straży Granicznej.",
        },
      ],
      legalEffect: foreignersLaw.text`Норма є делегуванням для виконавчого регулювання. Для конкретного побутового правила потрібно перевірити саме чинне rozporządzenie, а не приписувати його безпосередньо ${foreignersLaw.article("427", "Art. 427")}.`,
      foreignersCase:
        "Якщо спір стосується розміщення, харчування або доступу на територію, встановіть відповідне rozporządzenie і порівняйте його правило з фактичною практикою.",
    },
  ],
})
