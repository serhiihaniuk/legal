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
      provisionId: "powierzanie-pracy-art-18",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("18", "Art. 18")} визначає зміни, за яких не потрібні зміна або нове zezwolenie na pracę: зміна siedziba, miejsca pobytu stałego, назви чи форми prawnej podmiot, podmiot delegujący або pracodawca użytkownik, przejście zakładu праці до іншого pracodawca та зміна назви stanowisko без зміни обсягу обов'язків. Podmiot має повідомити орган, який видав zezwolenie.`,
          sourceLocator: "Art. 18 ust. 1–2",
        },
      ],
      summary:
        "Не кожна організаційна зміна вимагає нового дозволу. Виняток діє лише для прямо названих змін і не скасовує обов'язку повідомити орган та перевірити, чи справді не змінилися фактичні обов'язки.",
      rules: [
        {
          locator: "ust. 1 pkt 1",
          explanation:
            "Зміна назви, форми prawnej або адресних даних названого podmiot, podmiot delegujący чи pracodawca użytkownik не вимагає зміни/нового zezwolenie в межах цього пункту.",
        },
        {
          locator: "ust. 1 pkt 2–3",
          explanation:
            "Перехід zakład pracy до іншого pracodawca та зміна лише назви stanowisko допускаються без нового дозволу, якщо не змінюється zakres obowiązków cudzoziemiec.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Про обставини ust. 1 podmiot повинен повідомити organ, який видав zezwolenie; виняток не означає відсутності повідомлення.",
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("18", "Art. 18")} зберігає чинність дозволу лише для визначених змін. Він не легалізує нове stanowisko, інші обов'язки або новий вид роботи за межами переліку та не вирішує legalny pobyt.`,
      foreignersCase:
        "Опишіть зміну фактично, а не лише її назвою: podmiot, адреса, pracodawca, stanowisko й обов'язки. Переконайтеся, що повідомлення надіслано, і окремо перевірте, чи документ pobyt дозволяє продовження роботи.",
    },
  ],
})
