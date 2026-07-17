import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-378",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Після завершення повітряного tranzyt через польський аеропорт Komendant Główny Straży Granicznej звертається до центрального органу іншої держави-члена про покриття вартості наданої допомоги.",
          sourceLocator: "Art. 378",
        },
        {
          kind: "practical-inference",
          text: "Стаття описує міждержавний запит про відшкодування допомоги, а не автоматичне покладення цих витрат на самого іноземця.",
          sourceLocator: "Art. 378",
        },
      ],
      summary:
        "Стаття визначає дію польського органу після завершення tranzyt: звернення до іншої держави щодо покриття витрат на допомогу.",
      rules: [
        {
          locator: "Art. 378",
          explanation:
            "Запит робиться після завершення tranzyt і стосується саме наданої допомоги.",
        },
      ],
      legalEffect:
        "Норма запускає міждержавний механізм покриття витрат. Вона не встановлює в цій статті їх остаточний розподіл у всіх можливих ситуаціях.",
      foreignersCase:
        "Відокремте витрати на допомогу під час tranzyt від інших витрат щодо повернення та збережіть документи, які показують вид і період допомоги.",
    },
  ]),
})
