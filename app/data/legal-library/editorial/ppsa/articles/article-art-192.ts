import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-192",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Z wyjątkiem przypadków określonych w ${ppsaLaw.article("123", "art. 123")}–${ppsaLaw.article("125", "125")} postępowanie przed NSA ulega zawieszeniu jedynie na zgodny wniosek stron.`,
          sourceLocator: "Art. 192",
        },
      ],
      summary: ppsaLaw.text`Na etapie NSA dobrowolne zawieszenie postępowania wymaga zgodnego wniosku wszystkich stron, z wyjątkiem ${ppsaLaw.article("123", "art. 123")}–${ppsaLaw.article("125", "125")}.`,
      rules: [
        {
          locator: "Art. 192",
          explanation:
            "Jednostronny wniosek nie spełnia tej ogólnej przesłanki; najpierw sprawdź, czy zachodzi jeden z ustawowych wyjątków.",
        },
      ],
      legalEffect: ppsaLaw.text`Przepis ogranicza zawieszenie na zgodny wniosek w NSA, ale nie zastępuje analizy szczególnych podstaw zawieszenia z ${ppsaLaw.article("123", "art. 123")}–${ppsaLaw.article("125", "125")}.`,
      foreignersCase:
        "Jeżeli chcesz odroczyć kasację do czasu innej sprawy pobytowej, ustal, czy wszystkie strony złożą zgodny wniosek albo czy działa wyjątek ustawowy.",
    },
  ],
})
