import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-275",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 275 визначає, що для wznowienie з причини nieważność właściwy є суд, який видав оскаржене orzeczenie, а якщо оскаржено orzeczenia обох інстанцій — Naczelny Sąd Administracyjny; за іншою підставою właściwy є суд, який останнім вирішував справу.",
          sourceLocator: "Art. 275",
        },
      ],
      summary:
        "Стаття розподіляє właściwość суду для skarga o wznowienie залежно від підстави та кількості оскаржених інстанцій.",
      rules: [
        {
          locator: "Art. 275",
          explanation:
            "Спершу визначте, чи йдеться про nieważność, і чи оскаржуються рішення обох інстанцій; в інших випадках орієнтиром є суд, який останнім розглядав справу.",
        },
      ],
      legalEffect:
        "Норма спрямовує скаргу до компетентного суду, але сама не оцінює наявність підстави wznowienie або дотримання строку.",
      foreignersCase:
        "У справі про pobyt не надсилайте skarga o wznowienie автоматично до NSA: спочатку класифікуйте підставу і визначте, який суд видав останнє orzeczenie.",
    },
  ]),
})
