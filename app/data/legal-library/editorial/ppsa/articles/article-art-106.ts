import { createLegalTextAuthor, type LegalTextValue } from "../../../legal-text"

import {
  defineEditorialPart,
  type EditorialEntry,
} from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")

type Rule = { locator: string; explanation: LegalTextValue }

type ProvisionId = EditorialEntry<"ppsa">["provisionId"]

/**
 * This part was checked against the promoted local PPSA corpus
 * `ppsa-2026-143` (Dz.U. 2026 poz. 143), whose articles 85–129 are active.
 * The claim is a compact Ukrainian rendering of the statutory rule; Polish
 * procedural terms are retained so that the learner can match the source.
 */
function reviewed(
  provisionId: ProvisionId,
  claim: LegalTextValue,
  summary: LegalTextValue,
  rules: readonly Rule[],
  legalEffect: LegalTextValue,
  foreignersCase: LegalTextValue
): EditorialEntry<"ppsa"> {
  return {
    provisionId,
    reviewStatus: "reviewed",
    claims: [
      {
        kind: "statute-text",
        text: claim,
        sourceLocator: `Art. ${provisionId.slice("ppsa-art-".length)}`,
      },
    ],
    summary,
    rules,
    legalEffect,
    foreignersCase,
  }
}
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    reviewed(
      "ppsa-art-106",
      "Rozprawa починається зі sprawozdanie sędziego; потім усно виступають спочатку skarżący, а потім organ. Sąd може провести uzupełniające dowody z dokumentów, звернутися по істотний pogląd до організації або органу та враховує факти powszechnie znane.",
      ppsaLaw.text`${ppsaLaw.article("106", "Art. 106")} описує послідовність rozprawa та вузькі умови, за яких адміністративний суд проводить додаткові документальні докази.`,
      [
        {
          locator: "§ 1–2",
          explanation:
            "Sędzia представляє стан справи за aktach із наголосом на zarzuty skargi; далі свої żądania, wnioski і wyjaśnienia подають skarżący, потім organ.",
        },
        {
          locator: "§ 3",
          explanation:
            "Dowody uzupełniające з dokumentów можливі z urzędu або на wniosek, якщо це необхідно для істотних сумнівів і не спричинить надмірного продовження.",
        },
        {
          locator: "§ 3a–5",
          explanation: ppsaLaw.text`Sąd може запросити istotny pogląd у organizacja społeczna або organ administracji publicznej; факти powszechnie znane враховуються без заяви сторони, а до доказування ${ppsaLaw.article("106", "§ 3")} застосовуються відповідно правила Kodeks postępowania cywilnego.`,
        },
      ],
      ppsaLaw.text`${ppsaLaw.article("106", "Art. 106")} не перетворює судове провадження на повне повторення адміністративного доказування: додаткові dowody мають відповідати умовам ${ppsaLaw.article("106", "§ 3")}.`,
      "У skarga на decyzja про pobyt підготуйте zarzuty, факти й документи до rozprawa. Не розраховуйте, що sąd автоматично збере всі докази замість сторони."
    ),
  ],
})
