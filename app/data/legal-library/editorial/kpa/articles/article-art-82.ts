import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "82",
      provisionId: "kpa-art-82",
      reviewStatus: "reviewed",
      summary:
        "Стаття визначає осіб, які взагалі не можуть бути świadkami через нездатність сприймати факти, охоронювану таємницю або таємницю spowiedzi.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Свідком не може бути особа, яка не здатна spostrzegać або komunikować swoich spostrzeżeń.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Особа, зобов’язана зберігати informacje niejawne, не може свідчити про охоплені ними обставини без zwolnienia за встановленими правилами.",
        },
        {
          locator: "pkt 3",
          explanation:
            "Duchowny не може бути świadkiem щодо фактів, охоплених tajemnicą spowiedzi.",
        },
      ],
      legalEffect:
        "Допит такої особи в забороненому обсязі не є допустимим способом доказування.",
      foreignersCase: kpaLaw.text`У справі іноземця треба перевірити не лише корисність показань, а й те, чи особа взагалі може бути świadkiem за ${kpaLaw.article("82", "art. 82")}.`,
    },
  ],
})
