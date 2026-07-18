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
      provisionId: "ustawa-o-cudzoziemcach-art-139j",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("139j", "Art. 139j")} регулює передавання інформації про ICT-мобільність між Szef Urzędu, wojewoda та органами інших держав ЄС, включно з даними за ${foreignersLaw.article("22", "art. 22")} ust. 1 pkt 8a lit. c і f та інформацією про cofnięcie zezwolenia.`,
          sourceLocator: "Art. 139j ust. 1–3",
        },
      ],
      summary:
        "Стаття встановлює канали інформації про мобільність ICT та її відкликання.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Szef Urzędu передає wojewodzie, який надав zezwolenie, інформацію про cudzoziemca за ${foreignersLaw.article("22", "art. 22")} ust. 1 pkt 8a lit. c tiret pierwsze, zawiadomienie за lit. f tiret pierwsze та інформацію про sprzeciw до мобільності, отримані від інших держав ЄС.`,
        },
        {
          locator: "ust. 2–3",
          explanation: foreignersLaw.text`Якщо cudzoziemcowi в іншій державі ЄС cofnięto zezwolenie за ${foreignersLaw.article("139a", "art. 139a")}, wojewoda передає Szef Urzędu копію decyzja (ust. 2); Szef Urzędu без зволікання інформує держави ЄС, де особа користується мобільністю (ust. 3).`,
        },
      ],
      legalEffect:
        "Стаття регулює міжорганізаційний обмін; сама по собі не є рішенням про дозвіл або його cofnięcie.",
      foreignersCase:
        "Відокремлюйте службові повідомлення між органами від рішення щодо вашого zezwolenia та перевіряйте зміст самого рішення.",
    },
  ],
})
