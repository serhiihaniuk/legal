import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-73",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 73 вимагає вести teleinformatyczne rejestry справ про zezwolenie na pracę, zezwolenie sezonowe та oświadczenie; визначає ewidencje і компетентні органи.",
          sourceLocator: "Art. 73 ust. 1–6",
        },
      ],
      summary:
        "Wojewoda веде реєстр permit на роботу, starosta — seasonal і oświadczenie, а minister — частину, пов'язану з засобами оскарження. Реєстри містять дані, документи, wpis, decyzja та судові рішення для провадження й доступу уповноважених органів.",
      rules: [
        {
          locator: "ust. 1–3",
          explanation:
            "Окремі rejestry охоплюють три види справ; у seasonal є ewidencja wniosków, в oświadczenie — ewidencja oświadczeń. Компетенція розподілена між wojewoda, starosta і minister.",
        },
        {
          locator: "ust. 4–6",
          explanation:
            "До rejestr потрапляють дані заяв, документи, postanowienia, wpis, zaświadczenia, decyzje та orzeczenia sądu відповідно до виду справи.",
        },
      ],
      legalEffect:
        "Реєстр є інфраструктурою провадження і обміну даними, а не окремим дозволом; наявність запису треба відрізняти від змісту decyzja.",
      foreignersCase:
        "Уточніть, який орган веде саме вашу ewidencja, і звіряйте номер та статус wpis або рішення. Для спору визначте, чи йдеться про реєстр wojewoda, starosta або minister.",
    },
  ]),
})
