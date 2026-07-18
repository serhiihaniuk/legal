import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-99",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 99 є виконаною нормою про зміну закону про участь іноземних підприємців у господарському обігу. Доданий art. 4 ust. 3a уточнює, що право вести діяльність у spółka z o.o., prosta spółka akcyjna або spółka akcyjna не охоплює повторюваних негрошових виконань і праці чи послуг в обмін на акції prosta spółka akcyjna.",
          sourceLocator:
            "Art. 99; art. 4 ust. 3a pkt 1–2 ustawy o przedsiębiorcach zagranicznych",
        },
      ],
      summary:
        "Участь у господарському товаристві сама по собі не дає права виконувати для нього будь-яку працю або послуги. Новий ust. 3a прямо виключає дві категорії дій із права вести господарську діяльність, названого в ust. 3.",
      rules: [
        {
          locator: "ust. 3a pkt 1",
          explanation:
            "Право не охоплює виконання повторюваних негрошових обов'язків (powtarzające się świadczenia niepieniężne), про які йдеться в art. 176 або 356 KSH.",
        },
        {
          locator: "ust. 3a pkt 2",
          explanation:
            "Також воно не охоплює виконання роботи або надання послуг в обмін на акції prosta spółka akcyjna.",
        },
      ],
      legalEffect:
        "Поправка розмежовує право на участь у товаристві та фактичне виконання роботи або послуг. Наслідки для доступу до ринку праці треба визначати за окремими правилами.",
      foreignersCase:
        "Якщо іноземець є учасником або акціонером, опишіть фактичну дію: внесок, повторюване негрошове виконання чи робота в обмін на акції. Не робіть висновку лише зі статусу особи в товаристві.",
    },
  ]),
})
