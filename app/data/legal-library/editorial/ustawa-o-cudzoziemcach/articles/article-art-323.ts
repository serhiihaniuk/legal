import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-323",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 323 зобов’язує орган Straży Granicznej внести до dokument podróży інформацію про wydanie decyzji o zobowiązaniu do powrotu і повідомити орган-заявник; за передачі рішення способом Art. 322 запис робить орган, який його виконує, а орган, що видав рішення, додає визначені дані до запису в EES.",
          sourceLocator: "Art. 323 ust. 1–3",
        },
      ],
      summary:
        "Стаття регулює відмітку про рішення повернення в документі подорожі та внесення пов’язаних даних до EES.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Відмітку в документі подорожі робить визначений орган Straży Granicznej, з окремим правилом для doręczenie за Art. 322.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Орган, який видав рішення, додає до останнього запису в EES дані, передбачені Art. 19 ust. 1 і 4 rozporządzenia nr 2017/2226.",
        },
      ],
      legalEffect:
        "Запис є наслідком видання рішення і способом його фіксації; відсутність або наявність відмітки не замінює перевірку чинності самого рішення.",
      foreignersCase:
        "Перевірте паспортну відмітку, дані рішення та відповідність дат; якщо рішення вручено електронно або факсом, уточніть, який орган відповідав за запис.",
    },
  ]),
})
