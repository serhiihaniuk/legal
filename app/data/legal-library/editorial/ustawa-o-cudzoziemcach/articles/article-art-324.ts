import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-324",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 324 зобов’язує organ, який видає decyzja o zobowiązaniu do powrotu, взяти odciski linii papilarnych, якщо їх не взяли після zatrzymanie, передати Komendantowi Głównemu Policji образ відбитків, персональні дані й відомості для реєстру Art. 428 ust. 1 pkt 4 та зробити фотографію cudzoziemca.",
          sourceLocator: "Art. 324 pkt 1–3",
        },
      ],
      summary:
        "Стаття визначає біометричні та реєстраційні дії органу при видачі рішення про повернення.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Відбитки беруться, якщо їх не було взято після затримання.",
        },
        {
          locator: "pkt 2–3",
          explanation:
            "До Komendant Główny Policji передаються передбачені дані для реєстру, а також робиться фотографія cudzoziemca.",
        },
      ],
      legalEffect:
        "Ці дії пов’язані з оформленням і реєстрацією рішення; вони не є самостійним доказом кожної матеріальної підстави повернення.",
      foreignersCase:
        "З’ясуйте, які біометричні дані було взято і в межах якого рішення; не плутайте реєстраційну процедуру з оцінкою законності pobytu.",
    },
  ]),
})
