import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-377",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Під час повітряного tranzyt через польський аеропорт іноземні супроводжуючі funkcjonariusze іншої держави-члена повинні мати zezwolenie або notyfikacja, legitymacja służbowa, носити цивільний одяг і бути без зброї.",
          sourceLocator: "Art. 377 pkt 1–4",
        },
        {
          kind: "practical-inference",
          text: "Наявність супроводу треба перевіряти за цими чотирма умовами; сам статус funkcjonariusz не скасовує вимог статті.",
          sourceLocator: "Art. 377 pkt 1–4",
        },
      ],
      summary:
        "Стаття встановлює формальні та зовнішні вимоги до іноземних funkcjonariusze, які супроводжують tranzyt через польський аеропорт.",
      rules: [
        {
          locator: "pkt 1–2",
          explanation:
            "Супровід має мати дозвіл або notyfikacja та службове посвідчення.",
        },
        {
          locator: "pkt 3–4",
          explanation:
            "Під час tranzyt супровід носить цивільний одяг і не має зброї.",
        },
      ],
      legalEffect:
        "Норма визначає умови присутності іноземного супроводу під час операції tranzyt. Вона не регулює загальний статус іноземця поза цією операцією.",
      foreignersCase:
        "Якщо це важливо для справи, перевірте, чи були у супроводу zezwolenie або notyfikacja, legitymacja służbowa, цивільний одяг і відсутність зброї.",
    },
  ]),
})
