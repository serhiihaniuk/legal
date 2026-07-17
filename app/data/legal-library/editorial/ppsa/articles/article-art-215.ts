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
      provisionId: "ppsa-art-215",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "W każdym piśmie wszczynającym postępowanie sądowe w danej instancji należy podać wartość przedmiotu zaskarżenia, jeżeli od tej wartości zależy wysokość opłaty; wartość zaokrągla się w górę do pełnych złotych.",
          sourceLocator: "Art. 215 § 1–2",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("215", "Art. 215")} wymaga podania wartości przedmiotu zaskarżenia tylko wtedy, gdy od niej zależy wysokość opłaty, i nakazuje zaokrąglenie w górę.`,
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Obowiązek dotyczy pisma wszczynającego postępowanie w konkretnej instancji i zależy od sposobu wyliczenia opłaty.",
        },
        {
          locator: "§ 2",
          explanation:
            "Podaną wartość zaokrągla się w górę do pełnych złotych, a nie do najbliższej kwoty według zwykłego zaokrąglenia.",
        },
      ],
      legalEffect: ppsaLaw.text`${ppsaLaw.article("215", "Art. 215")} nie ustala sam stawki; błędne pominięcie lub oznaczenie wartości może wymagać reakcji według przepisów o brakach i opłacie.`,
      foreignersCase:
        "Przed wniesieniem pisma w sprawie pobytowej ustal, czy opłata zależy od wartości przedmiotu zaskarżenia. Nie wyliczaj jej z osobistej wagi decyzji bez podstawy ustawowej.",
    },
  ],
})
