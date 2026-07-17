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
      provisionId: "ustawa-o-cudzoziemcach-art-134a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("134a", "Art. 134a")} вимагає від cudzoziemca з zezwoleniem за ${foreignersLaw.article("127", "art. 127")} протягом 15 dni roboczych письмово повідомити wojewodę про початок mobilność długoterminowa та назвати державу ЄС.`,
          sourceLocator: "Art. 134a ust. 1–2",
        },
      ],
      summary:
        "Стаття регулює повідомлення про початок довгострокової мобільності власника Niebieska Karta UE.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Повідомлення подають протягом 15 dni roboczych wojewodzie, який надав zezwolenie, і зазначають państwo członkowskie UE мобільності.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Для zezwolenia, наданого Szef Urzędu у другій інстанції, адресатом є wojewoda першої інстанції.",
        },
      ],
      legalEffect:
        "Стаття встановлює адміністративний обов’язок повідомлення про мобільність; вона не визначає самі умови отримання права на мобільність.",
      foreignersCase:
        "Зафіксуйте дату початку mobilność długoterminowa, державу та подання письмового повідомлення в межах 15 dni roboczych.",
    },
  ],
})
