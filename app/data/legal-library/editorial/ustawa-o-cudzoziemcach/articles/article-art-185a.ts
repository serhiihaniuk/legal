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
      provisionId: "ustawa-o-cudzoziemcach-art-185a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("185a", "Art. 185a")} встановлює permit ze względu na pracę sezonową для cudzoziemiec, який прибув на визначеній візі або в рамках ruch bezwizowy, має чинне сезонне zezwolenie na pracę, достатній dochód, ubezpieczenie та zakwaterowanie, а також працює у видах діяльності, визначених підзаконними правилами.`,
          sourceLocator: "Art. 185a ust. 1 pkt 1–5",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("185a", "Art. 185a")} обмежує строк permit періодом сезонного дозволу на роботу і максимумом 9 місяців від першого відповідного в'їзду в даному році; допускає строк до 3 місяців, застосовує відповідно ${foreignersLaw.article("183", "art. 183")} та рахує dochód за ${foreignersLaw.article("140", "art. 140")} ust. 2.`,
          sourceLocator: "Art. 185a ust. 2–5",
        },
      ],
      summary:
        "Сезонний pobyt permit вимагає одночасного виконання міграційної, трудової, фінансової, страхової та житлової умов і має жорсткий річний максимум.",
      rules: [
        {
          locator: "ust. 1 вводна частина",
          explanation:
            "Мета pobyt — сезонна робота у видах діяльності, визначених правилами до ustawy o warunkach dopuszczalności powierzania pracy cudzoziemcom, у попереднього або іншого podmiot powierzający pracę; назва посади сама по собі не доводить сезонний характер.",
        },
        {
          locator: "ust. 1 pkt 1–2",
          explanation:
            "Cudzoziemiec має в'їхати за візою для сезонної роботи або безвізово у зв'язку із заявою на сезонний work permit, внесеною до відповідного реєстру, і мати сезонний дозвіл або його продовження, чинні довше за дозволений візою чи безвізом pobyt.",
        },
        {
          locator: "ust. 1 pkt 3–5",
          explanation:
            "Потрібні stabilny i regularny dochód на utrzymanie, ubezpieczenie zdrowotne або підтвердження покриття лікування та забезпечене zakwaterowanie в Польщі.",
        },
        {
          locator: "ust. 2–3",
          explanation: foreignersLaw.text`Permit надається на строк чинності сезонного work permit або продовження, але не довше 9 місяців від першого в'їзду за pkt 1 у відповідному календарному році; його можна надати, коли обставини не виправдовують pobyt понад 3 місяці.`,
        },
        {
          locator: "ust. 4–5",
          explanation: foreignersLaw.text`У провадженні відповідно застосовується механізм інформації з ${foreignersLaw.article("183", "art. 183")}, а наявність доходу перевіряється за ${foreignersLaw.article("140", "art. 140")} ust. 2.`,
        },
      ],
      legalEffect:
        "Permit не легалізує роботу поза чинним сезонним work permit і не може перевищити 9-місячну межу; кожну з умов треба довести окремо.",
      foreignersCase:
        "Зіставте дату першого в'їзду цього року, строк візи або безвізу, сезонний work permit, договір, страховку, житло й дохід; окремо перевірте, чи діяльність входить до офіційного переліку.",
    },
  ],
})
