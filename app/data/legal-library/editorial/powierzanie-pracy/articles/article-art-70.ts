import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-70",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 70 вимагає повідомляти starosta про початок роботи протягом 7 днів, про непочаток — протягом 14 днів від визначеної дати, а також про те, що робота не почнеться або завершилася раніше.",
          sourceLocator: "Art. 70 ust. 1–5",
        },
      ],
      summary:
        "Повідомлення подаються через систему. Якщо система не працювала, допускається подання першого робочого дня після усунення несправності; повідомлення про непочаток тягне unieważnienie wpis за прямим приписом закону.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Про podjęcie pracy повідомляють у 7-денний строк, про niepodjęcie — у 14-денний від дати початку в ewidencja; окремо повідомляють про niepodjęcie або раннє zakończenie.",
        },
        {
          locator: "ust. 3–4",
          explanation:
            "Усі повідомлення подаються через teleinformatyczny system; за його несправності строк переноситься до першого робочого дня після усунення.",
        },
        {
          locator: "ust. 5",
          explanation:
            "Після повідомлення за ust. 2 wpis oświadczenie до ewidencji oświadczeń unieważniaється за прямим приписом закону.",
        },
      ],
      legalEffect:
        "Повідомлення є окремим обов'язком після wpis і впливає на чинність запису; його не слід змішувати з копією umowa чи самим початком роботи.",
      foreignersCase:
        "Ведіть календар дати фактичного podjęcie та дати в ewidencja. Якщо робота не почалася або закінчилася раніше, подайте правильне повідомлення через систему й збережіть його підтвердження.",
    },
  ]),
})
