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
      provisionId: "ustawa-o-cudzoziemcach-art-193",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("193", "Art. 193")} зобов'язує wojewoda повідомляти Szef Urzędu про udzielenie, cofnięcie або odmowa kolejnego permit для cudzoziemiec з ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 3, а для pkt 4 — про cofnięcie або odmowa kolejnego permit.`,
          sourceLocator: "Art. 193 pkt 1–2",
        },
      ],
      summary:
        "Стаття встановлює повідомлення між wojewoda та Szef Urzędu про рішення у двох спеціальних категоріях long-term resident і його сім'ї.",
      rules: [
        {
          locator: "pkt 1",
          explanation: foreignersLaw.text`Щодо cudzoziemiec з ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 3 wojewoda повідомляє про udzielenie permit, його cofnięcie або odmowa udzielenia kolejnego permit.`,
        },
        {
          locator: "pkt 2",
          explanation: foreignersLaw.text`Щодо cudzoziemiec з ${foreignersLaw.article("186", "art. 186")} ust. 1 pkt 4 wojewoda повідомляє про cofnięcie permit або odmowa udzielenia kolejnego; обов'язку повідомляти про первинне udzielenie у цьому пункті текст не містить.`,
        },
      ],
      legalEffect:
        "Повідомлення має реєстраційно-координаційний характер і не змінює змісту decyzja wojewoda та не є окремою підставою legalny pobyt.",
      foreignersCase: foreignersLaw.text`Порівняйте категорію за ${foreignersLaw.article("186", "art. 186")}, вид рішення та факт повідомлення; для pkt 4 не вимагайте повідомлення про udzielenie, якщо закон вимагає його лише для cofnięcie або kolejna odmowa.`,
    },
  ],
})
