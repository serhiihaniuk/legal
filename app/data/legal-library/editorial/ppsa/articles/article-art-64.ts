import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-64",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Wniosek подається безпосередньо до sąd, має містити żądanie, його підставу й обґрунтування, сторони та органи; правила про skarga застосовуються відповідно, якщо ustawa не встановлює інакше.",
          sourceLocator: "Art. 64 § 1–3",
        },
      ],
      summary:
        "Wniosek має власні мінімальні реквізити та подається прямо до sąd, але частина правил skarga може застосовуватися відповідно.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "На відміну від звичайної skarga, wniosek подається безпосередньо до sąd.",
        },
        {
          locator: "§ 2",
          explanation:
            "Опишіть żądanie, підставу, обґрунтування, сторони та органи й перевірте спеціальні вимоги.",
        },
        {
          locator: "§ 3",
          explanation:
            "Правила про skarga застосовуються відповідно, якщо ustawa не передбачає іншого.",
        },
      ],
      legalEffect:
        "Норма забезпечує форму wniosek, але не визначає, чи конкретна вимога підлягає такому розгляду.",
      foreignersCase:
        "Якщо спеціальна норма допускає wniosek у справі legalizacji pobytu, адресуйте його właściwy sąd і викладіть żądanie та правову підставу.",
    },
  ]),
})
