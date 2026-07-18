import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-147",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Задовольняючи skarga на uchwała або akt з ${ppsaLaw.article("3", "art. 3 § 2")} pkt 5–6, суд stwierdza nieważność повністю чи частково або stwierdza wydanie з naruszeniem prawa, якщо спеціальний припис виключає nieważność; індивідуальні рішення, видані на їх підставі, оскаржуються в адміністративному або спеціальному порядку.`,
          sourceLocator: "Art. 147 § 1–2",
        },
      ],
      summary: ppsaLaw.text`Норма стосується uchwała та актів, названих у ${ppsaLaw.article("3", "art. 3 § 2")} pkt 5–6, і відділяє їх від індивідуальних рішень, що на них ґрунтуються.`,
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Визначте, чи діє спеціальний припис, який замість nieważność допускає лише stwierdzenie naruszenia prawa.",
        },
        {
          locator: "§ 2",
          explanation:
            "Окремо перевіряйте шлях для індивідуального rozstrzygnięcia, виданого на підставі uchwała або aktu.",
        },
      ],
      legalEffect:
        "Судовий наслідок для загального акту не замінює процедуру оскарження індивідуальної decyzja, прийнятої на його основі.",
      foreignersCase:
        "Якщо у справі іноземця посилаються на місцеву uchwała чи akt, не плутайте оскарження цього загального акту з оскарженням індивідуальної decyzja про pobyt.",
    },
  ],
})
