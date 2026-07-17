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
      provisionId: "ustawa-o-cudzoziemcach-art-201",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Zezwolenia na pobyt stały udziela або відмовляє в ньому wojewoda за місцем перебування cudzoziemca у формі decyzji; cofnięcie також відбувається у формі decyzji.",
          sourceLocator: "Art. 201 ust. 1–2",
        },
        {
          kind: "statute-text",
          text: "Рішення про cofnięcie видає wojewoda, який надав дозвіл, або wojewoda першої інстанції, якщо дозвіл надав Szef Urzędu у другій інстанції; дія може бути z urzędu або на wniosek перелічених органів.",
          sourceLocator: "Art. 201 ust. 3 pkt 1–2",
        },
      ],
      summary:
        "Стаття визначає орган і форму рішень щодо надання та відкликання pobyt stały.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Для первинної заяви орієнтиром є місце перебування cudzoziemca та компетенція wojewoda.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "При cofnięcie важлива історія надання дозволу: перевірте, хто вирішував у першій інстанції, і чи є wniosek уповноваженого органу.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("201", "Art. 201")} розподіляє компетенцію, але сам не встановлює матеріальну підставу для надання чи cofnięcie; її треба шукати в інших статтях.`,
      foreignersCase: foreignersLaw.text`На decyzja перевірте орган, інстанцію, вид дії та підставу порівняно з ${foreignersLaw.article("195", "Art. 195")} або ${foreignersLaw.article("199", "Art. 199")}; помилковий орган є окремим процесуальним питанням.`,
    },
  ],
})
