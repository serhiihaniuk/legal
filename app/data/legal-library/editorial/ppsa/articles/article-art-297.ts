import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-297",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 297 встановлює, що після postępowanie за Art. 295 і 296 суд postanowieniem визначає, у який спосіб і в якому обсязі відновити зниклі akta, або встановлює, що odtworzenie akt неможливе; на це postanowienie доступне zażalenie.",
          sourceLocator: "Art. 297",
        },
      ],
      summary:
        "Після збирання відомостей суд окремим postanowienie визначає обсяг відновлення або його неможливість, із можливістю zażalenie.",
      rules: [
        {
          locator: "Art. 297 zdanie pierwsze",
          explanation:
            "Читайте в postanowienie не лише висновок про можливість, а й спосіб та обсяг, у якому akta мають бути відновлені.",
        },
        {
          locator: "Art. 297 zdanie drugie",
          explanation:
            "Перевірте pouczenie про zażalenie та строк за загальними процесуальними правилами, якщо рішення оскаржується.",
        },
      ],
      legalEffect:
        "Postanowienie визначає межі відновленого матеріалу або неможливість відновлення; воно саме не вирішує предмет первісної адміністративної справи.",
      foreignersCase:
        "У справі іноземця перевірте, чи postanowienie про odtworzenie охоплює потрібний wyrok, decyzja або доказ, і не плутайте zażalenie на нього з odwołanieм у справі про pobyt.",
    },
  ]),
})
