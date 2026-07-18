import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-49",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо pismo не може отримати правильного ходу через невиконання warunków formalnych, przewodniczący закликає усунути або виправити їх протягом семи днів; вчасно виправлене pismo зберігає наслідки від дня подання, а за невиконання zarządzenie залишає його без розгляду.",
          sourceLocator: "Art. 49 § 1–4",
        },
      ],
      summary:
        "Braki formalne skargi треба усунути або виправити у семиденний строк із wezwanie; інакше przewodniczący zarządza pozostawienie pisma bez rozpoznania.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Wezwanie визначає семиденний строк і наслідок pozostawienia pisma bez rozpoznania, якщо ustawa не встановлює інакше.",
        },
        {
          locator: "§ 2",
          explanation:
            "Якщо pismo не виправлено вчасно, przewodniczący видає zarządzenie про залишення без розгляду; на нього przysługuje zażalenie.",
        },
        {
          locator: "§ 3–4",
          explanation:
            "Вчасно виправлене або доповнене pismo діє від первісної дати wniesienia; дії за § 1–2 може виконувати referendarz sądowy.",
        },
      ],
      legalEffect:
        "Норма дає процесуальний шанс виправити форму, але не замінює доказування матеріальних умов справи.",
      foreignersCase:
        "Для skarga щодо pobyt перевірте кожен пункт wezwanie і дату doręczenia; не плутайте brak formalny з відсутністю доказу права на pobyt.",
    },
  ]),
})
