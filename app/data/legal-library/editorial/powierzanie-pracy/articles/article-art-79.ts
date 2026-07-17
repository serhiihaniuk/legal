import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-79",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 79 визначає зміст оголошення konkurs ofert, мінімальний 7-денний строк подання, зміст ofert та документи з oświadczeniaми представника під rygor odpowiedzialności karnej.",
          sourceLocator: "Art. 79 ust. 1–4",
        },
      ],
      summary:
        "Оголошення має дати учасникам завдання, бюджет, строки, умови, критерії та порядок оголошення результату. Oferta описує спосіб роботи, графік і кошторис, а до неї додаються реєстрові документи та правдиві oświadczenia.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "В оголошенні вказують предмет, кошти, строки й умови, критерії, місце та строк подання (не менше 7 днів), розгляд, оголошення результатів і можливі додаткові умови.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Oferta містить опис реалізації, місце й строк, harmonogram, кошторис та додаткові положення; додаються актуальний odpis або дані про статус і повноваження, а також два oświadczenia.",
        },
        {
          locator: "ust. 4",
          explanation:
            "Oświadczenia про використання коштів і відсутність заборони або умисного злочину подаються під rygor відповідальності за false oświadczenie з обов'язковою klauzula.",
        },
      ],
      legalEffect:
        "Вимоги стосуються конкурсного фінансування програми; вони не є умовами wpis oświadczenie про роботу.",
      foreignersCase:
        "Організації, яка хоче реалізувати програму, треба звірити oferta з усіма пунктами оголошення і додати підтвердження повноважень. Не підписуйте стандартну klauzula без перевірки фактів.",
    },
  ]),
})
