import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-77",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 77 зобов'язує органи після спливу 10 років від дня видання остаточної ухвали або рішення у визначених справах про дозвіл на роботу видалити з реєстрів перелічені персональні дані.",
          sourceLocator: "Art. 77",
        },
      ],
      summary:
        "Строк видалення починається від дня видання остаточної ухвали або рішення у справі про видачу чи скасування дозволу або залишення заяви без розгляду. Видаляють дані іноземця, суб'єкта, який доручає роботу, роботодавця-користувача або суб'єкта, до якого іноземця відрядили до Польщі.",
      rules: [
        {
          locator: "Art. 77",
          explanation:
            "Після 10 років органи, що ведуть реєстри за art. 73 ust. 3, видаляють названі персональні дані з реєстрів справ про дозволи на роботу.",
        },
      ],
      legalEffect:
        "Це правило про строк зберігання персональних даних у реєстрах справ про дозволи на роботу. Воно не означає автоматичного видалення кожного документа з усіх інших систем або архівів.",
      foreignersCase:
        "Для запиту про стару справу встановіть дату видання остаточного рішення або ухвали і вид реєстру. Не робіть висновку про відсутність усіх архівних документів лише на підставі art. 77.",
    },
  ]),
})
