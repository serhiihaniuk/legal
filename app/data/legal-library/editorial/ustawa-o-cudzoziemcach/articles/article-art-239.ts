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
      provisionId: "ustawa-o-cudzoziemcach-art-239",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("239", "Art. 239")} передає міністру właściwemu do spraw wewnętrznych, за погодженням з міністром właściwym do spraw finansów publicznych, визначення в drodze rozporządzenia розміру opłat у Польщі за wydanie і wymianę karty pobytu, polskiego dokumentu podróży dla cudzoziemca, polskiego dokumentu tożsamości cudzoziemca та документа «zgoda na pobyt tolerowany», за wydanie tymczasowego polskiego dokumentu podróży dla cudzoziemca, порядку сплати цих opłat і документів для ulg за ${foreignersLaw.article("237", "Art. 237")} ust. 1.`,
          sourceLocator: "Art. 239 ust. 1 pkt 1–3",
        },
        {
          kind: "statute-text",
          text: "Для розміру opłat minister має врахувати одиничні витрати виготовлення, видачі або обміну названих документів, зокрема pobranie і przetwarzanie даних, а підвищення opłat за zawinioną utratę або zniszczenie — диференціювати залежно від кількості таких подій.",
          sourceLocator: "Art. 239 ust. 1 pkt 4, ust. 2 pkt 1–2",
        },
      ],
      summary:
        "Стаття делегує визначення розміру і порядку сплати opłat за названі документи, документів для ulg та підвищених opłat за їхню винну втрату або знищення.",
      rules: [
        {
          locator: "ust. 1 pkt 1–4",
          explanation:
            "Перевіряйте чинне rozporządzenie: воно встановлює суми за wydanie або wymianę названих документів, порядок сплати, документи для ulg і суму за zawinioną utratę чи zniszczenie; tymczasowy dokument названий у pkt 1 лише щодо wydania.",
        },
        {
          locator: "ust. 2 pkt 1–2",
          explanation:
            "У rozporządzeniu враховують unit costs, зокрема збирання і оброблення даних, та диференціюють opłaty за wymianę після винної втрати або знищення залежно від кількості подій.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("239", "Art. 239")} не встановлює конкретних сум: він є делегуючою підставою для rozporządzenie. Застосовну суму і документи для ulgi треба звірити з чинним актом та фактичним видом операції; для tymczasowy документа стаття передбачає opłata за wydanie, не за wymianę.`,
      foreignersCase:
        "Перед оплатою визначте вид документа й операцію (wydanie чи wymiana), перевірте чинне rozporządzenie, підставу для ulgi та чи є zawiniona utrata або zniszczenie. Збережіть квитанцію і документи, що підтверджують ulgę.",
    },
  ],
})
