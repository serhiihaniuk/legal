import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-383",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо іноземне рішення про повернення стосується особи з zezwolenie na pobyt czasowy, stały або rezydenta długoterminowego UE, Komendant Główny Straży Granicznej звертається до wojewoda за місцем pobyt з проханням встановити, чи є підстави для cofnięcie цього zezwolenie.",
          sourceLocator: "Art. 383",
        },
        {
          kind: "practical-inference",
          text: "Сам wniosek Komendant Główny Straży Granicznej запускає перевірку wojewoda, але не є автоматичним cofnięcie дозволу на pobyt.",
          sourceLocator: "Art. 383",
        },
      ],
      summary:
        "Стаття з’єднує виконання іноземного рішення про повернення з окремою перевіркою можливого відкликання польського дозволу на pobyt.",
      rules: [
        {
          locator: "Art. 383",
          explanation:
            "Перевірка охоплює три види zezwolenie: pobyt czasowy, pobyt stały та pobyt rezydenta długoterminowego UE. Компетентність wojewoda визначається місцем pobyt іноземця.",
        },
      ],
      legalEffect:
        "Норма передбачає міжорганізаційний запит про підстави cofnięcie zezwolenie. Рішення про відкликання має бути предметом окремої правової оцінки.",
      foreignersCase:
        "Перевірте, який саме дозвіл має іноземець, куди направлено wniosek і чи було окреме провадження wojewoda. Не називайте сам факт запиту втратою дозволу.",
    },
  ]),
})
