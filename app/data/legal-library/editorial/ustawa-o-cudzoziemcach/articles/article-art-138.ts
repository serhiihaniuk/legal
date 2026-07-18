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
      provisionId: "ustawa-o-cudzoziemcach-art-138",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("138", "Art. 138")} регулює передавання wojewoda копій рішень щодо zezwoleń за ${foreignersLaw.article("127", "art. 127")} або 137a та інформацію Szef Urzędu до держави ЄС, яка видала документ «Niebieska Karta UE».`,
          sourceLocator: "Art. 138 ust. 1–2",
        },
      ],
      summary:
        "Стаття встановлює інформаційний обмін між wojewoda, Szef Urzędu та органом іншої держави ЄС.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Wojewoda передає Szef Urzędu копію decyzja про надання, відмову або cofnięcie ${foreignersLaw.article("127", "art. 127")}/137a, а також про надання pobyt rezydenta długoterminowego UE власнику такого zezwolenia.`,
        },
        {
          locator: "ust. 2",
          explanation: foreignersLaw.text`Szef Urzędu без зволікання інформує державу ЄС, яка видала документ з adnotacją «Niebieska Karta UE», про надання або відмову у ${foreignersLaw.article("137a", "art. 137a")}.`,
        },
      ],
      legalEffect:
        "Стаття визначає службове передавання рішень та інформації; вона сама не встановлює умови надання відповідного pobyt.",
      foreignersCase:
        "У справі про мобільність врахуйте, що рішення може бути передане між органами; для висновку про ваш статус прочитайте саме decyzja та її остаточність.",
    },
  ],
})
