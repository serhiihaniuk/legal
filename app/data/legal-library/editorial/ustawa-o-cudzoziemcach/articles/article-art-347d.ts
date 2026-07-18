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
      provisionId: "ustawa-o-cudzoziemcach-art-347d",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("347d", "Art. 347d")} визначає випадки usunięcie даних із SIS: скасування або недійсність рішення органом чи судом або виконання рішення про повернення.`,
          sourceLocator: "Art. 347d pkt 1–4",
        },
      ],
      summary:
        "Komendant Główny Straży Granicznej видаляє запис SIS, коли рішення про повернення скасовано, визнано недійсним судом або органом, чи коли його виконано.",
      rules: [
        {
          locator: "pkt 1–3",
          explanation:
            "Видалення відбувається після відповідного рішення Komendant Główny, після stwierdzenie nieważności або після скасування decyzja судом адміністративним.",
        },
        {
          locator: "pkt 4",
          explanation:
            "Виконання decyzja органу вищої інстанції або рішення SG про повернення також є підставою для usunięcie.",
        },
      ],
      legalEffect:
        "Видалення SIS за цією статтею прив’язане до переліченої події; воно не є самостійним способом оскаржити decyzja.",
      foreignersCase:
        "Підтвердіть, яка саме подія настала і чи є документ органу або суду; не ототожнюйте відсутність запису SIS з автоматичним правом на pobyt.",
    },
  ],
})
