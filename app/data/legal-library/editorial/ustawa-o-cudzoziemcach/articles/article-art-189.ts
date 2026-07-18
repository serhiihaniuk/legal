import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const DECISION_1_80_URL =
  "https://www.irishimmigration.ie/wp-content/uploads/2021/06/ankara-agreement.pdf"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-189",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("189", "Art. 189")} встановлює два відсилання у провадженнях про pobyt ze względu na inne okoliczności: для особи з ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 5 застосовується ${foreignersLaw.external("art. 13", DECISION_1_80_URL)} Decyzja nr 1/80, а для члена сім'ї з ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 4 — спеціальна перевірка за ${foreignersLaw.article("169", "art. 169")}.`,
          sourceLocator: "Art. 189 ust. 1–2",
        },
      ],
      summary:
        "Стаття не встановлює нові умови zezwolenie, а підключає зовнішній режим захисту прав працівників та польську перевірку сімейного зв'язку.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Для заявника за ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 5 треба застосувати ${foreignersLaw.external("art. 13", DECISION_1_80_URL)} Decyzja nr 1/80 у провадженні; точний зміст цього зовнішнього правила не можна замінити загальним посиланням на право праці.`,
        },
        {
          locator: "ust. 2",
          explanation: foreignersLaw.text`У справі члена сім'ї за ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 4 застосовуються правила ${foreignersLaw.article("169", "art. 169")}; це включає спеціальну оцінку реальності сімейного зв'язку, коли вона релевантна.`,
        },
      ],
      legalEffect: foreignersLaw.text`Результат залежить від змісту підключеного режиму; ${foreignersLaw.article("189", "Art. 189")} не скасовує інших умов zezwolenie і не створює автоматичного права.`,
      foreignersCase: foreignersLaw.text`У правовому висновку окремо відкрийте зовнішній Decyzja nr 1/80 або ${foreignersLaw.article("169", "art. 169")}, а потім прив'яжіть його вимогу до факту й документа; не обмежуйтеся номером ${foreignersLaw.article("189", "art. 189")}.`,
    },
  ],
})
