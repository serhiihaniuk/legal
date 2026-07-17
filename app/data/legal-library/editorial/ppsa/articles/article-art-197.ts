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
      provisionId: "ppsa-art-197",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`NSA rozpoznaje zażalenie na posiedzeniu niejawnym. Do postępowania wywołanego zażaleniem odpowiednio stosuje się przepisy o skardze kasacyjnej, z wyłączeniem ${ppsaLaw.article("185", "art. 185 § 2")}.`,
          sourceLocator: "Art. 197 § 1–2",
        },
      ],
      summary: ppsaLaw.text`${ppsaLaw.article("197", "Art. 197")} ustanawia niejawny tryb rozpoznania zażalenia i odpowiednie odesłanie do reguł skargi kasacyjnej z jednym wyłączeniem.`,
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Trybem rozpoznania zażalenia przez NSA jest posiedzenie niejawne.",
        },
        {
          locator: "§ 2",
          explanation: ppsaLaw.text`Przepisy kasacyjne stosuje się odpowiednio, a ${ppsaLaw.article("185", "art. 185 § 2")} o innym składzie przy ponownym rozpoznaniu jest wyłączony.`,
        },
      ],
      legalEffect:
        "Odesłanie wymaga dopasowania reguły kasacyjnej do charakteru zażalenia; nie oznacza automatycznego przeniesienia każdego skutku kasacji.",
      foreignersCase:
        "W zażaleniu dotyczącym postanowienia WSA w sprawie pobytowej przedstaw pisemne, konkretne argumenty, bo ustawa nie przewiduje tu obowiązkowej rozprawy.",
    },
  ],
})
