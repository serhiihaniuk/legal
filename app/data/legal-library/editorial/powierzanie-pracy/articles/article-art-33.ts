import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-33",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("33", "Art. 33")} ust. 1 дозволяє polski podmiot доручити інший характер роботи або інше stanowisko загалом не більше 30 днів у календарному році, якщо інші умови zezwolenie дотримані та до зміни зроблено powiadomienie wojewoda через system. Ust. 2 звільняє від зміни або нового дозволу в окремих випадках зміни умов за Kodeks pracy чи збільшення часу до повного з пропорційним збільшенням wynagrodzenie.`,
          sourceLocator: "Art. 33 ust. 1–2 pkt 1–2",
        },
      ],
      summary:
        "Стаття допускає лише вузькі відступи від запису в zezwolenie. Тимчасова зміна stanowisko має ліміт 30 днів і потребує попереднього powiadomienie; інші винятки прямо пов'язані з трудовими правилами та часом роботи.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Інший характер або stanowisko можливі сукупно не довше 30 днів у календарному році, за умови інших вимог дозволу й попереднього електронного повідомлення wojewoda, який видав дозвіл.",
        },
        {
          locator: "ust. 2 pkt 1",
          explanation: workLaw.text`Зміна умов за ${workLaw.external("art. 9¹", "https://eli.gov.pl/eli/DU/2025/277/ogl")} або ${workLaw.external("art. 23¹a", "https://eli.gov.pl/eli/DU/2025/277/ogl")} Kodeks pracy чи ${workLaw.external("art. 4", "https://eli.gov.pl/eli/DU/2025/5/ogl")} ustawy про захист місць праці не вимагає зміни або нового zezwolenie, якщо виконано умови відповідної норми.`,
        },
        {
          locator: "ust. 2 pkt 2",
          explanation:
            "Можна збільшити wymiar часу не більше повного лише разом із пропорційним збільшенням wynagrodzenie.",
        },
      ],
      legalEffect: workLaw.text`Винятки ${workLaw.article("33", "art. 33")} не перетворюють zezwolenie на необмежений дозвіл і не змінюють legalny pobyt. Порушення ліміту або відсутність powiadomienie може залишити роботу поза умовами дозволу.`,
      foreignersCase:
        "Порахуйте всі дні зміни в календарному році, збережіть підтвердження powiadomienie та перевірте пропорційність оплати. Окремо зіставте зміну з документом pobyt і його підставою роботи.",
    },
  ],
})
