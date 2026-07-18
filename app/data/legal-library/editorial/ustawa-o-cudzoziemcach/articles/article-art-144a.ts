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
      provisionId: "ustawa-o-cudzoziemcach-art-144a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("144a", "Art. 144a")} дозволяє ministrowi właściwemu do spraw wewnętrznych видати decyzja про zakaz przyjmowania cudzoziemców одиницею з ${foreignersLaw.article("144", "art. 144")} ust. 5 на строк до 5 років за прямо названих обставин.`,
          sourceLocator: "Art. 144a ust. 1–5",
        },
        {
          kind: "statute-text",
          text: "До таких обставин належать, зокрема, недотримання вимог рекрутації, безпекові або суспільні підстави, ліквідація чи нереальна діяльність, сприяння незаконному pobyt, порушення повідомлень/обов’язків, борги та невнесення даних до POL-on.",
          sourceLocator: "Art. 144a ust. 1 pkt 1–5 lit. a–h",
        },
      ],
      summary:
        "Стаття дає міністру спеціальний інструмент заборонити прийом нових cudzoziemców одиницею, яка зазвичай не підлягає zatwierdzenie.",
      rules: [
        {
          locator: "ust. 1 pkt 1–5",
          explanation:
            "Підстави охоплюють вимоги рекрутації за Prawo o szkolnictwie wyższym i nauce, оборону/безпеку, interes RP, ліквідацію або відсутність реальної діяльності, сприяння незаконному в’їзду чи побиту, невиконання обов’язків, składki, podatki та POL-on.",
        },
        {
          locator: "ust. 1a–1d",
          explanation:
            "Перед decyzja minister запитує інформацію в компетентних органів; строк становить 30 днів, у особливо обґрунтованому випадку — до 60, а пропуск строку означає виконання вимоги отримати інформацію.",
        },
        {
          locator: "ust. 2–4",
          explanation:
            "Ust. 2–4 позначені як «(uchylony)»; актуальним є ust. 5 про офіційне оголошення списку одиниць із zakaz.",
        },
      ],
      legalEffect: foreignersLaw.text`Zakaz стосується прийому cudzoziemców відповідною jednostka. Він не є автоматичним скасуванням кожного вже виданого дозволу; для продовження навчання діє ${foreignersLaw.article("144b", "art. 144b")}.`,
      foreignersCase: foreignersLaw.text`Встановіть, яка саме decyzja була видана, коли вона стала ostateczna і чи одиниця входить до актуального списку. Для студента перевірте дату його дозволу та застосування ${foreignersLaw.article("144b", "art. 144b")}.`,
    },
  ],
})
