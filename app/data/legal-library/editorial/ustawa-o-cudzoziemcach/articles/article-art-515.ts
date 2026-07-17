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
      provisionId: "ustawa-o-cudzoziemcach-art-515",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("515", "Art. 515")} перетворює незавершені до wejścia w życie ustawy провадження щодо wymiana karty pobytu, виданої у зв’язку зі старою zgoda na pobyt tolerowany, на провадження про wydanie або wymiana документа «zgoda na pobyt tolerowany»; wojewoda і Szef Urzędu передають акти протягом 14 днів.`,
          sourceLocator: "Art. 515 ust. 1–2",
        },
      ],
      summary:
        "Перехідна норма про справи щодо старих kart pobytu: назва провадження змінюється, а матеріали передаються від wojewoda або Szef Urzędu до компетентного komendant Straży Granicznej.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Незакінчене провадження про wymiana karty pobytu стає провадженням про wydanie або wymiana документа, названого в статті.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Wojewoda та Szef Urzędu передають akta протягом 14 днів від дня wejścia w życie ustawy компетентному komendant за місцем pobytu cudzoziemca.",
        },
      ],
      legalEffect:
        "Стаття змінює перехідну компетенцію та предмет старої справи, але не гарантує видачі документа. Для оцінки важливі дата початку справи та конкретна стара підстава zgoda.",
      foreignersCase:
        "Попросіть підтвердження передачі akt, визначте компетентний komendant за місцем pobytu та перевірте, який саме документ просили видати або wymienić.",
    },
  ],
})
