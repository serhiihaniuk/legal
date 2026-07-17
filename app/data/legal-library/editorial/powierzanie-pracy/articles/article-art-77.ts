import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-77",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 77 зобов'язує органи після 10 років від дня wydanie ostateczne postanowienie або decyzja у справах zezwolenie na pracę видаляти з реєстрів визначені персональні дані.",
          sourceLocator: "Art. 77",
        },
      ],
      summary:
        "Строк видалення починається від остаточного postanowienie або decyzja про видачу, uchylenie чи залишення wniosku без розгляду. Перелік охоплює дані cudzoziemiec, podmiot, pracodawca użytkownik або podmiot delegujący.",
      rules: [
        {
          locator: "Art. 77",
          explanation:
            "Після 10 років органи, що ведуть rejestry за art. 73 ust. 3, усувають названі персональні дані з реєстрів справ про zezwolenie na pracę.",
        },
      ],
      legalEffect:
        "Це правило зберігання даних у реєстрі permit на pracę; воно не означає автоматичне видалення кожного документа з усіх інших систем.",
      foreignersCase:
        "Для запиту про стару справу встановіть дату ostateczna decyzja або postanowienie і вид реєстру. Не робіть висновок про відсутність усіх архівних документів лише з art. 77.",
    },
  ]),
})
