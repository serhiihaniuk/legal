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
      provisionId: "ppsa-art-218",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Przewodniczący może sprawdzić wartość przedmiotu zaskarżenia oznaczoną w piśmie i zarządzić w tym celu dochodzenie.",
          sourceLocator: "Art. 218",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("218", "Art. 218")} pozwala przewodniczącemu zweryfikować oznaczoną w piśmie wartość przedmiotu zaskarżenia.`,
      rules: [
        {
          locator: "Art. 218",
          explanation:
            "Podana przez stronę wartość nie wiąże sądu bez kontroli; przewodniczący może zarządzić dochodzenie dla jej sprawdzenia.",
        },
      ],
      legalEffect:
        "Przepis daje narzędzie weryfikacji wartości, ale sam nie ustala jej prawidłowej kwoty ani automatycznego skutku błędnego oznaczenia.",
      foreignersCase:
        "Jeżeli w piśmie dotyczącym pobytu podano wartość przedmiotu zaskarżenia, zachowaj dokumenty uzasadniające wyliczenie i reaguj na zarządzenie przewodniczącego.",
    },
  ],
})
