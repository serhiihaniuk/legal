import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-285c",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 285c встановлює, що від одного й того самого orzeczenie strona може подати лише одну skarga o stwierdzenie niezgodności z prawem prawomocnego orzeczenia.",
          sourceLocator: "Art. 285c",
        },
      ],
      summary:
        "Стаття обмежує сторону однією скаргою цього виду щодо одного й того самого orzeczenie.",
      rules: [
        {
          locator: "Art. 285c",
          explanation:
            "Порівнюйте предмет і заявника попередньої skarga: заборона стосується тієї самої strony та того самого orzeczenie.",
        },
      ],
      legalEffect:
        "Повторне подання тією самою стороною щодо того самого orzeczenie не створює другого такого засобу за текстом статті; інші питання допустимості треба перевіряти окремо.",
      foreignersCase:
        "Зберігайте копію та реквізити вже поданої skarga у справі іноземця. Не подавайте другу скаргу щодо того самого wyrok, сподіваючись виправити попередню без аналізу процесуального шляху.",
    },
  ]),
})
