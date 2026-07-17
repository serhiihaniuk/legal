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
      provisionId: "ustawa-o-cudzoziemcach-art-156d",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("156d", "Art. 156d")} зобов’язує wojewoda передати Szef Urzędu копію рішення про udzielenie або cofnięcie дозволу ${foreignersLaw.article("151b", "art. 151b")}, а Szef Urzędu — інформацію за ${foreignersLaw.article("22", "art. 22")} ust. 1 pkt 8a lit. d tiret trzecie.`,
          sourceLocator: "Art. 156d ust. 1–2",
        },
      ],
      summary:
        "Стаття встановлює обмін рішенням і даними щодо дозволу на mobilność długoterminowa naukowca.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Wojewoda передає Szef Urzędu копію рішення про udzielenie або cofnięcie zezwolenie ${foreignersLaw.article("151b", "art. 151b")}.`,
        },
        {
          locator: "ust. 2",
          explanation: foreignersLaw.text`Szef Urzędu передає wojewoda, який надав дозвіл, інформацію про cudzoziemiec у межах ${foreignersLaw.article("22", "art. 22")} ust. 1 pkt 8a lit. d tiret trzecie.`,
        },
      ],
      legalEffect: foreignersLaw.text`Це правило обліку між органами; воно не розширює строк або предмет дозволу ${foreignersLaw.article("151b", "art. 151b")}.`,
      foreignersCase:
        "Перевірте відповідність копії рішення, даних Szef Urzędu та строку іноземного документа, який був підставою mobilność.",
    },
  ],
})
