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
      provisionId: "ustawa-o-cudzoziemcach-art-180",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("180", "Art. 180")} вимагає cofnięcie zezwolenie для ofiary handlu ludźmi, якщо настав випадок з ${foreignersLaw.article("101", "art. 101")} pkt 1 або 2, зокрема припинилася співпраця або завершилося кримінальне провадження, або виникла обставина з ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 4 або 5.`,
          sourceLocator: "Art. 180 pkt 1–2",
        },
      ],
      summary:
        "Спеціальний zezwolenie відкликається при припиненні мети співпраці або за окремими загальними обставинами, названими законом.",
      rules: [
        {
          locator: "pkt 1",
          explanation: foreignersLaw.text`Cofnięcie відбувається у випадках ${foreignersLaw.article("101", "art. 101")} pkt 1 або 2; як приклад стаття називає припинення współpraca з organ або завершення кримінального провадження.`,
        },
        {
          locator: "pkt 2",
          explanation: foreignersLaw.text`Окремою підставою є хоча б одна обставина з ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 4 або 5; орган має встановити її фактично.`,
        },
      ],
      legalEffect:
        "Cofnięcie є обов'язковим за встановлення точної законної обставини; сама зміна життєвої ситуації без зв'язку з переліченим пунктом недостатня.",
      foreignersCase: foreignersLaw.text`Після повідомлення про cofnięcie перевірте, чи справді завершилося провадження, припинилася співпраця або виник точний пункт ${foreignersLaw.article("100", "art. 100")}; подайте процесуальні документи й пояснення до строку оскарження.`,
    },
  ],
})
