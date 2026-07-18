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
      provisionId: "ustawa-o-cudzoziemcach-art-66",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("66", "Art. 66")} ust. 1 визначає konsul органом видачі або odmowa wizy krajowa, ust. 1a–1c допускає визначений шлях через ministra właściwego do spraw zagranicznych за поданням через konsul, а ust. 2 віддає видачу або odmowa wizy Schengen на кордоні komendant placówki Straży Granicznej.`,
          sourceLocator: "Art. 66 ust. 1–3",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("66", "Art. 66")} ust. 4–5 регулює візи для членів місій та сімей, ust. 6–7 позначені як uchylony, а ust. 8–9 дозволяють MFA визначати держави і додаткові умови для подання через нього.`,
          sourceLocator: "Art. 66 ust. 4–9",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("66", "Art. 66")} розподіляє компетенцію у візових справах: wiza krajowa зазвичай належить konsul, у визначених державою випадках — міністру закордонних справ через konsul, а wiza Schengen на кордоні — komendant placówki Straży Granicznej. Для дипломатичних категорій діє окремий порядок.`,
      rules: [
        {
          locator: "Art. 66 ust. 1–1c",
          explanation:
            "MFA може діяти лише коли виконані умови, визначені розпорядженням за ust. 8; заяву в цьому випадку подають через konsul, а пряме подання міністру повертається з інформацією про właściwy tryb.",
        },
        {
          locator: "Art. 66 ust. 2–3a",
          explanation: foreignersLaw.text`Wiza Schengen на кордоні належить komendant placówki Straży Granicznej; wiza krajowa видається за заявою на формулярі, а візи за ${foreignersLaw.article("60", "Art. 60")} ust. 1 pkt 24 і 24a — niezwłocznie з урахуванням ${foreignersLaw.article("67", "Art. 67")}.`,
        },
        {
          locator: "Art. 66 ust. 4–5",
          explanation:
            "Візи членам дипломатичних місій, консульств, прирівняним особам і сім’ям видає або відмовляє MFA чи konsul; для MFA потрібна nota, для konsul додатково wniosek.",
        },
        {
          locator: "Art. 66 ust. 6–9",
          explanation:
            "Ust. 6 і 7 мають status uchylony; MFA може розпорядженням визначити держави та додаткові умови подання заяв через нього.",
        },
      ],
      legalEffect:
        "Стаття визначає компетентний орган і канал подання, але не вирішує матеріальне питання видачі. Помилкове пряме подання або звернення не до того органу може мати процесуальний наслідок, передбачений текстом.",
      foreignersCase:
        "Спочатку класифікуйте wiza Schengen/krajowa, місце подання, cel і статус заявника; перевірте, чи діє спеціальний шлях MFA і чи подано заяву через właściwy konsul.",
    },
  ],
})
