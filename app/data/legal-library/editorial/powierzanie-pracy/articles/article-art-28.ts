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
      provisionId: "powierzanie-pracy-art-28",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("28", "Art. 28")} зобов'язує ministra właściwego do spraw gospodarki створити в системі teleinformatycznym wykaz przedsiębiorców, що ведуть у Польщі діяльність істотного значення для gospodarka narodowa. До нього входять визначені підприємці, які користуються підтримкою інвестицій, а wykaz містить firmę, REGON, NIP за наявності, siedziba й адресу; внесення та вилучення пов'язані з рішеннями або umowy про підтримку, а wykaz публікується в BIP.`,
          sourceLocator: "Art. 28 ust. 1–9",
        },
      ],
      summary: workLaw.text`Стаття створює офіційний wykaz підтриманих інвестицій, який використовується, зокрема, для черговості wniosków за ${workLaw.article("27", "art. 27")}. Наявність у списку стосується podmiot, а не автоматичного статусу cudzoziemiec.`,
      rules: [
        {
          locator: "ust. 1–3",
          explanation:
            "Minister gospodarki веде електронний wykaz для підприємців, які отримують визначену підтримку інвестицій або стратегічних проєктів.",
        },
        {
          locator: "ust. 4–5",
          explanation:
            "У списку фіксуються ідентифікаційні дані підприємця, а дата внесення залежить від відповідного рішення, decyzja o wsparciu або umowa про pomoc.",
        },
        {
          locator: "ust. 6–9",
          explanation:
            "Вилучення настає за спливом строку чи остаточністю рішення про uchylenie, nieważność або wygaśnięcie, а також за припиненням відповідної umowy; minister udostępnia wykaz у BIP.",
        },
      ],
      legalEffect: workLaw.text`Внесення до wykaz може мати процесуальний наслідок у черговості за ${workLaw.article("27", "art. 27")}, але не є zezwolenie na pracę і не легалізує pobyt cudzoziemiec.`,
      foreignersCase:
        "Перевірте конкретний запис podmiot у BIP та його актуальність на день wniosek. Не робіть висновку про право cudzoziemiec працювати або перебувати лише з інвестиційного статусу роботодавця.",
    },
  ],
})
