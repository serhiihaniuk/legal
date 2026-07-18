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
      provisionId: "ustawa-o-cudzoziemcach-art-152",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("152", "Art. 152")} зобов’язує jednostka naukowa укласти з naukowiec umowa o przyjęciu після затвердження досліджень/праць її компетентними органами та визначає, що має бути враховано при такому затвердженні.`,
          sourceLocator: "Art. 152 ust. 1–2",
        },
        {
          kind: "statute-text",
          text: "Ust. 3 є uchylony; ust. 4 передбачає письмове зобов’язання одиниці щодо витрат повернення, а ust. 5 — припинення угоди при відмові у в’їзді або дозволі.",
          sourceLocator: "Art. 152 ust. 3–5",
        },
      ],
      summary:
        "Стаття регулює внутрішнє затвердження дослідницького проєкту, угоду з naukowiec і наслідки відсутності в’їзду або дозволу.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Органи jednostka враховують мету, строк і фінансування досліджень та документи про кваліфікацію naukowiec, перш ніж одиниця укладе umowa o przyjęciu.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Положення позначене як «(uchylony)» і не застосовується як чинна вимога.",
        },
        {
          locator: "ust. 4",
          explanation: foreignersLaw.text`Jednostka видає письмове oświadczenie про покриття витрат, пов’язаних із decyzja про zobowiązanie до повернення, у випадку ${foreignersLaw.article("337", "art. 337")} ust. 5.`,
        },
        {
          locator: "ust. 5",
          explanation:
            "Umowa o przyjęciu wygasa, якщо cudzoziemiec отримав відмову у в’їзді або в udzielenie zezwolenie на pobyt czasowy.",
        },
      ],
      legalEffect:
        "Стаття визначає обов’язки та документи jednostka, але не перетворює угоду на автоматичне право на pobyt.",
      foreignersCase:
        "Перевірте протокол/рішення внутрішнього затвердження, кваліфікації, текст угоди, письмове зобов’язання та факт в’їзду/рішення про дозвіл.",
    },
  ],
})
