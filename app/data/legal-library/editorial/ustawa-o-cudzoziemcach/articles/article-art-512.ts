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
      provisionId: "ustawa-o-cudzoziemcach-art-512",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("512", "Art. 512")} передбачає застосування dotychczasowe przepisy до строку opuszczenia Польщі та допомоги в dobrowolny powrót, якщо до wejścia w życie ustawy вже було видано рішення про відмову в статусі uchodźcy, ochronie uzupełniającej або zgoda na pobyt tolerowany.`,
          sourceLocator: "Art. 512",
        },
      ],
      summary:
        "Перехідна норма визначає право, яке застосовується до строку виїзду та допомоги в добровільному поверненні у старих справах про міжнародний захист або pobyt tolerowany.",
      rules: [
        {
          locator: "Art. 512",
          explanation:
            "Вирішальним є те, що відповідне рішення про odmowa було видано до дня wejścia w życie ustawy; тоді застосовуються dotychczasowe przepisy до названих питань.",
        },
        {
          locator: "Art. 512",
          explanation:
            "Стаття стосується саме terminu opuszczenia та korzystania z pomocy w dobrowolnym powrocie, а не всіх елементів статусу справи.",
        },
      ],
      legalEffect: foreignersLaw.text`Наслідок залежить від дати та виду попереднього рішення. Посилання на ${foreignersLaw.article("512", "Art. 512")} саме по собі не визначає чинний строк виїзду без перевірки decyzja і правил, що діяли тоді.`,
      foreignersCase:
        "Знайдіть дату і повний зміст старого рішення, визначте вид процедури та окремо порахуйте строк opuszczenia; не змішуйте його з пізнішими правилами про powrót.",
    },
  ],
})
