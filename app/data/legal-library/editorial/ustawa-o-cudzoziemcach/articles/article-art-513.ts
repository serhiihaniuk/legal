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
      provisionId: "ustawa-o-cudzoziemcach-art-513",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("513", "Art. 513")} ust. 1 встановлює, що незавершені до wejścia w życie ustawy адміністративні провадження без ostateczna decyzja, розпочаті на підставі названих старих законів, продовжуються за dotychczasowe przepisy.`,
          sourceLocator: "Art. 513 ust. 1",
        },
      ],
      summary:
        "Перехідна стаття визначає право для незакінчених адміністративних проваджень та передбачає, як їхні майбутні рішення перетворюються на нові види дозволів або рішень.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Потрібні дві умови: провадження розпочато до wejścia w życie ustawy та до цієї дати його не закінчено ostateczna decyzja; тоді застосовуються dotychczasowe przepisy.",
        },
        {
          locator: "ust. 2–4",
          explanation:
            "Виданий результат може стати zezwoleniem na pobyt czasowy, pobyt stały, відповідною згодою або decyzja o zobowiązaniu do powrotu за правилами, наведеними в тексті статті.",
        },
        {
          locator: "ust. 5–6",
          explanation:
            "Для перетворених згод документи видає компетентний komendant Straży Granicznej, а decyzja про cofnięcie також належить названому в статті органу.",
        },
      ],
      legalEffect:
        "Стаття розподіляє старе та нове право в конкретному перехідному провадженні. Вона не дозволяє автоматично застосувати dotychczasowe przepisy до заяви, поданої вже після wejścia w życie ustawy.",
      foreignersCase:
        "Встановіть дату wszczęcia, наявність ostateczna decyzja на перехідну дату, законову підставу справи та фактичний результат; збережіть усі повідомлення про передачу справи між органами.",
    },
  ],
})
