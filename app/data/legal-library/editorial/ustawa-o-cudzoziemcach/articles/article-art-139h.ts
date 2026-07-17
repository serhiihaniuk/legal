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
      provisionId: "ustawa-o-cudzoziemcach-art-139h",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("139h", "Art. 139h")} визначає, що decyzja про ${foreignersLaw.article("139a", "art. 139a")} має містити строк чинності, jednostka przyjmująca, stanowisko, найнижчу wynagrodzenie та wymiar czasu pracy.`,
          sourceLocator: "Art. 139h pkt 1–4",
        },
      ],
      summary: "Стаття задає ключові реквізити рішення про ICT-pobyt.",
      rules: [
        {
          locator: "pkt 1–4",
          explanation: foreignersLaw.text`У decyzja зазначаються приймаюча одиниця, посада, найнижча винагорода за договором/документом ${foreignersLaw.article("139a", "art. 139a")} ust. 1 pkt 2 і розмір робочого часу.`,
        },
      ],
      legalEffect:
        "Ці дані визначають межі дозволеної роботи за decyzja; стаття не встановлює нового способу зміни цих даних.",
      foreignersCase:
        "Зіставте decyzja з договором: jednostka, stanowisko, мінімальна оплата та wymiar czasu pracy мають бути прочитані як окремі поля.",
    },
  ],
})
