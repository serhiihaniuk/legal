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
      provisionId: "ustawa-o-cudzoziemcach-art-63",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("63", "Art. 63")} делегує міністрам закордонних і внутрішніх справ визначити в rozporządzenie документи та їх wzory для осіб ${foreignersLaw.article("61", "Art. 61")}, а також позначення wiz Schengen і wiz krajowych, що видаються цим особам.`,
          sourceLocator: "Art. 63 pkt 1–3",
        },
        {
          kind: "practical-inference",
          text: foreignersLaw.text`Підзаконний акт деталізує документи і позначення з урахуванням міжнародних угод та звичаїв; ${foreignersLaw.article("63", "Art. 63")} сама не видає конкретний документ.`,
          sourceLocator: "Art. 63 pkt 1–3",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("63", "Art. 63")} встановлює делегацію для оформлення документів дипломатичного і прирівняного статусу, їхніх зразків та спеціальних позначень віз.`,
      rules: [
        {
          locator: "Art. 63 pkt 1–3",
          explanation:
            "Rozporządzenie має визначити документи для членів місій, консульств, прирівняних осіб і їхніх сімей, wzory та oznaczenie віз, з урахуванням міжнародних правил.",
        },
      ],
      legalEffect:
        "Стаття визначає межі технічного регулювання спеціального режиму. Для встановлення конкретного виду документа чи позначення потрібно відкрити відповідне rozporządzenie.",
      foreignersCase:
        "Зіставте фактичну функцію особи з документом і його wzór, перевірте міжнародну підставу та правильне oznaczenie wiza, якщо її видано.",
    },
  ],
})
