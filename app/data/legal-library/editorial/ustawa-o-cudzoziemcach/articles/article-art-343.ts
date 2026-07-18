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
      provisionId: "ustawa-o-cudzoziemcach-art-343",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("343", "Art. 343")} дозволяє potrącenie витрат із грошей іноземця в depozyt strzeżony ośrodek або areszt, встановлює ryczałt, резерв коштів і мінімум 600 zł на кожного члена сім’ї.`,
          sourceLocator: "Art. 343 ust. 1–7",
        },
      ],
      summary:
        "Якщо гроші іноземця перебувають на депозиті під час тримання, з них можуть покриватися витрати, але закон залишає визначену суму для поточних потреб сім’ї.",
      rules: [
        {
          locator: "ust. 1–3",
          explanation:
            "Potrącenie допускається, якщо самі koszty potrącenia не перевищували б суму, яку завдяки ньому буде отримано. Це порівняння вартості операції зі стягнутою сумою, а не порівняння належних витрат повернення з депозитом. Протягом 14 днів від прийняття до ośrodek або areszt орган встановлює приблизний ryczałt.",
        },
        {
          locator: "ust. 4–5",
          explanation: foreignersLaw.text`Про ryczałt або його зміну повідомляють письмово; кошти до його розміру зберігаються до decyzja про суму витрат або potrącenie за ${foreignersLaw.article("344", "Art. 344")}.`,
        },
        {
          locator: "ust. 6–7",
          explanation:
            "Залишається не менше 600 zł на кожного члена сім’ї, розміщеного в ośrodek або areszt; за продовження перебування цю суму можна збільшити на 100 zł за кожен додатковий місяць, якщо це виправдано поточними потребами.",
        },
      ],
      legalEffect:
        "Ryczałt є приблизною сумою для забезпечення вимоги, а не остаточним розрахунком витрат; остаточне potrącenie має спиратися на передбачене рішення.",
      foreignersCase:
        "Зіставте письмове повідомлення про ryczałt, склад сім’ї, строк перебування та залишок коштів; не підписуйте підтвердження без перевірки суми й перекладу.",
    },
  ],
})
