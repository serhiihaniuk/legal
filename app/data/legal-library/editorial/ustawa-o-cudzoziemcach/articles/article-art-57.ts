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
      provisionId: "ustawa-o-cudzoziemcach-art-57",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("57", "Art. 57")} ust. 1 делегує міністру внутрішніх справ визначити wzory zaproszenia і заяви на wpis та wysokość środków, які має мати zapraszający; ust. 2 встановлює критерії читабельності, повноти й розрахунку коштів.`,
          sourceLocator: "Art. 57 ust. 1–2",
        },
        {
          kind: "practical-inference",
          text: foreignersLaw.text`Конкретний розмір коштів треба брати з rozporządzenie, прийнятого на виконання ${foreignersLaw.article("57", "Art. 57")}, а не виводити з самої статті.`,
          sourceLocator: "Art. 57 ust. 1 pkt 2; ust. 2 pkt 3",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("57", "Art. 57")} не встановлює саму суму коштів, а доручає підзаконному акту визначити формуляри та необхідний фінансовий рівень для витрат на pobyt, житло, харчування і повернення або транзит.`,
      rules: [
        {
          locator: "Art. 57 ust. 1 pkt 1–2",
          explanation:
            "Міністр внутрішніх справ визначає зразки zaproszenie та заяви, а також kwota środków, яку повинен мати zapraszający.",
        },
        {
          locator: "Art. 57 ust. 2 pkt 1–3",
          explanation:
            "Rozporządzenie має забезпечити повноту формулярів і врахувати необхідні витрати, можливе розрізнення за місцем житла, тривалістю pobyt і родинним зв’язком.",
        },
      ],
      legalEffect: foreignersLaw.text`Стаття визначає межі нормотворчої делегації. Для оцінки фінансової умови в конкретній справі потрібні ${foreignersLaw.article("53", "Art. 53")} і чинне rozporządzenie; сама ${foreignersLaw.article("57", "Art. 57")} не підтверджує достатність коштів.`,
      foreignersCase:
        "Використовуйте актуальний формуляр і перевірте суму за чинним rozporządzenie, узгодивши її з тривалістю pobyt, місцем zakwaterowanie та родинним зв’язком.",
    },
  ],
})
