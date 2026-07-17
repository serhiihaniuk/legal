import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-51",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 51 дозволяє видати zezwolenie na pracę sezonową після в'їзду cudzoziemca, якщо wniosek уже wpisano до ewidencji wniosków і polski podmiot подав właściwemu staroście oświadczenie про явку до роботи, копію документа подорожі з актуальною візою або відбиток штампа про в'їзд у ruch bezwizowy та підтвердження дати в'їзду до держав Schengen.",
          sourceLocator: "Art. 51 ust. 1–4",
        },
      ],
      summary:
        "Норма описує перехід від wpisу wniosku до фактичного zezwolenie na pracę sezonową. Для цього потрібні підтвердження в'їзду за візою для сезонної роботи або в рамках ruch bezwizowy, а також дані про zakwaterowanie і період роботи.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Oświadczenie містить дані podmiotu і cudzoziemca, відомості про pobyt, адресу zakwaterowania та період роботи сезонної.",
        },
        {
          locator: "ust. 3–4",
          explanation:
            "Робота на умовах zaświadczenia o wpisie є legalною від подання документів до doręczenia рішення. Якщо початок припав на вихідний день urzędu, документи можна подати в перший робочий день urzędu. Період zawieszenia на прохання strony не зараховується.",
        },
      ],
      legalEffect:
        "Подання документів запускає прямо передбачений законом період legalnej pracy, але не замінює рішення про zezwolenie і не подовжує його межі.",
      foreignersCase:
        "Перед початком sezonowa praca перевірте запис wniosku, документ в'їзду, дату першого в'їзду та готовність podmiotu подати oświadczenie staroście. Збережіть підтвердження подання: саме воно важливе для періоду до рішення.",
    },
  ]),
})
