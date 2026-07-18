import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-317",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 317 дозволяє в decyzja з Art. 316 ust. 1–2 до добровільного виїзду зобов’язати cudzoziemca періодично з’являтися, внести zabezpieczenie pieniężne не менше подвійної мінімальної заробітної плати, передати dokument podróży або інший документ до depozyt та проживати у визначеному місці; можна застосувати один або кілька заходів, а місце не можна змінювати без зміни decyzja.",
          sourceLocator: "Art. 317 ust. 1–4",
        },
      ],
      summary:
        "Стаття перелічує контрольні заходи, які можуть супроводжувати продовження строку добровільного виїзду.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "У decyzja з Art. 316 ust. 1–2 орган може призначити один або кілька заходів: явку, грошове забезпечення, depozyt документа або проживання у визначеному місці.",
        },
        {
          locator: "ust. 2a",
          explanation:
            "До zabezpieczenie pieniężne відповідно застосовуються Art. 398 ust. 3 і 4.",
        },
        {
          locator: "ust. 3–4",
          explanation:
            "Кошти й документи зберігаються до пред’явлення квитка або іншого доказу запланованої зворотної подорожі; визначене місце проживання не можна змінити без зміни decyzja.",
        },
      ],
      legalEffect:
        "Ці заходи є умовами контролю до добровільного виїзду; їхній обсяг визначається конкретною decyzja, а не лише фактом продовження строку.",
      foreignersCase:
        "Прочитайте кожен захід у decyzja, дотримуйтеся явок і місця проживання, зберігайте підтвердження квитка та не передавайте документ поза офіційним depozyt.",
    },
  ]),
})
