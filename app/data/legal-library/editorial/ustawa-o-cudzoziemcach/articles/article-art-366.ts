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
      provisionId: "ustawa-o-cudzoziemcach-art-366",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("366", "Art. 366")} зобов’язує Komendant Główny Straży Granicznej передати wniosek про повітряний транзит центральному органу іншої держави щонайменше за 48 годин до початку транзиту, крім особливо термінових випадків.`,
          sourceLocator: "Art. 366 ust. 1–2",
        },
      ],
      summary:
        "Запит про транзит треба подати завчасно, щоб інша держава могла його розглянути; для особливо термінових ситуацій закон передбачає виняток.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Звичайний мінімальний строк між doręczenie wniosek іншому центральному органу та початком транзиту становить 48 годин.",
        },
        {
          locator: "ust. 2",
          explanation:
            "У szczególnie pilne przypadki правило 48 годин не застосовується.",
        },
      ],
      legalEffect:
        "Виняток із 48-годинного строку залежить від особливої терміновості; сама терміновість не означає автоматичної згоди на транзит.",
      foreignersCase:
        "Перевірте час фактичної передачі wniosek, планований початок транзиту та документовану причину терміновості.",
    },
  ],
})
