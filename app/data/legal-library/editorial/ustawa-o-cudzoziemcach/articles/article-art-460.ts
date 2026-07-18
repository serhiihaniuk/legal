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
      provisionId: "ustawa-o-cudzoziemcach-art-460",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("460", "Art. 460")} зобов’язує przewoźnik, який повітряним, морським або наземним шляхом привіз cudzoziemca до granica, на wniosek organ Straży Granicznej невідкладно відвезти його назад, якщо у wjazd до Польщі відмовлено або якщо транзитний в’їзд до держави призначення чи сусідньої держави відхилено або інший przewoźnik відмовився виконати перевезення. Якщо це неможливо, przewoźnik забезпечує власним коштом інший транспорт, а також покриває витрати pobyt до виїзду.`,
          sourceLocator: "Art. 460 ust. 1–3",
        },
      ],
      summary:
        "Стаття регулює обов’язок przewoźnik забрати назад особу, якій відмовлено у в’їзді або транзитному перевезенні, і покласти на нього витрати повернення та перебування до виїзду.",
      rules: [
        {
          locator: "ust. 1 pkt 1–2",
          explanation:
            "На wniosek organ Straży Granicznej przewoźnik невідкладно відвозить cudzoziemca до держави, з якої його привіз; якщо це неможливо — до держави, що видала travel document, або іншої держави, яка гарантує прийняття. Обов’язок виникає при odmowa wjazdu до Польщі або описаній відмові в транзиті чи перевезенні.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Якщо виконати такий обов’язок неможливо, przewoźnik за власний кошт забезпечує інший засіб транспорту, завдяки якому cudzoziemiec зможе невідкладно залишити територію Польщі.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Przewoźnik покриває витрати pobyt cudzoziemca в Польщі від моменту виникнення обставин з ust. 1 до фактичного залишення території.",
        },
      ],
      legalEffect:
        "Норма визначає обов’язки przewoźnik після конкретної відмови або неможливості транзиту; вона не є самостійним рішенням про odmowa wjazdu. Для наслідків важливі wniosek органу, причина відмови, можливість повернення та підтверджені витрати.",
      foreignersCase:
        "Зберіть рішення або відомості про odmowa wjazdu, wniosek organ Straży Granicznej, маршрут і документи перевезення, докази запропонованої держави прийняття та рахунки за транспорт і pobyt; окремо перевірте, коли особа фактично залишила Польщу.",
    },
  ],
})
