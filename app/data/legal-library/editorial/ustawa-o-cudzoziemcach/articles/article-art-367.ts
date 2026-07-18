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
      provisionId: "ustawa-o-cudzoziemcach-art-367",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("367", "Art. 367")} встановлює узгодження допомоги та способу транзиту з іншою державою, звичайну тривалість не більш як 24 години та можливість продовження ще на 48 годин.`,
          sourceLocator: "Art. 367 ust. 1–2",
        },
      ],
      summary:
        "Під час транзиту Komendant Główny узгоджує з іншою державою, яка допомагає, конкретний порядок і часові межі супроводу.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Обсяг допомоги та спосіб транзиту узгоджуються з centralny organ іншої держави; транзит має тривати не довше 24 годин.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Якщо завершити транзит у 24 години неможливо, строк можна узгоджено продовжити ще на 48 годин.",
        },
      ],
      legalEffect:
        "Строки стосуються організації транзиту, а не строку добровільного виїзду чи легального pobyt іноземця.",
      foreignersCase:
        "Попросіть зафіксувати узгоджений маршрут, час початку та підставу продовження; не плутайте організаційне продовження з новим дозволом перебування.",
    },
  ],
})
