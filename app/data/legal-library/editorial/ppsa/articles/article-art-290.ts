import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-290",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 290 визначає właściwy sąd для odtworzenie akt: у незавершеній справі — суд, у якому вона востаннє розглядалася; якщо компетентним був би NSA, він передає справу суду першої інстанції, крім відновлення лише akt NSA; у prawomocnie завершеній справі постępowanie проводить суд першої інстанції.",
          sourceLocator: "Art. 290 § 1–3",
        },
      ],
      summary:
        "Норма розподіляє компетенцію між судом останнього розгляду, NSA та судом першої інстанції залежно від стану справи й обсягу втрачених akt.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Для справи, що триває, встановіть останній sąd; правило про NSA має виняток, коли відновлюються лише його власні akta.",
        },
        {
          locator: "§ 3",
          explanation:
            "Для prawomocnie завершеної справи компетентним є sąd першої інстанції.",
        },
      ],
      legalEffect:
        "Правильний sąd є процесуальною передумовою розгляду питання про odtworzenie; сама стаття не вирішує, якою буде відновлена справа.",
      foreignersCase:
        "Якщо зникли akta судової справи іноземця про pobyt, спершу встановіть, чи вона ще триває та який sąd розглядав її останнім, замість автоматично звертатися до NSA.",
    },
  ]),
})
