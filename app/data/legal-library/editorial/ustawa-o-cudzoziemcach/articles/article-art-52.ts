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
      provisionId: "ustawa-o-cudzoziemcach-art-52",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("52", "Art. 52")} ust. 1 передбачає відмову wojewoda у wpisanie zaproszenie до ewidencji zaproszeń у формі decyzja, а ust. 1a — unieważnienie wpisu wojewoda, який його здійснив. За ust. 2 рішення про unieważnienie приймається з urzędu або на заяву zapraszający щонайменше за 7 днів до початку чинності, а за ust. 3 zaproszenie втрачає чинність, коли рішення стає ostateczna.`,
          sourceLocator: "Art. 52 ust. 1–3",
        },
        {
          kind: "practical-inference",
          text: "Для наслідку важлива ostateczność decyzja про unieważnienie; сам намір подати заяву або неостаточне рішення ще не описує момент втрати чинності за ust. 3.",
          sourceLocator: "Art. 52 ust. 2–3",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("52", "Art. 52")} визначає компетентного wojewoda і форму рішення у справах про wpis або unieważnienie zaproszenie, а також момент, коли запрошення втрачає чинність після остаточного скасування запису.`,
      rules: [
        {
          locator: "Art. 52 ust. 1–1a",
          explanation:
            "Відмова у wpis видається wojewoda за місцем проживання або siedziba zapraszający; unieważnienie здійснює wojewoda, який зробив запис.",
        },
        {
          locator: "Art. 52 ust. 2",
          explanation:
            "Unieważnienie може бути з urzędu або за заявою zapraszający, поданою щонайменше за 7 днів до початку періоду чинності zaproszenie.",
        },
        {
          locator: "Art. 52 ust. 3",
          explanation:
            "Zaproszenie перестає бути чинним у день, коли decyzja про unieważnienie стала ostateczna.",
        },
      ],
      legalEffect:
        "Стаття визначає процесуальний шлях відмови або скасування запису і пов’язує втрату чинності з ostateczna decyzja. Вона не встановлює автоматичного рішення про відмову у візі чи поверненні.",
      foreignersCase:
        "Встановіть, який wojewoda прийняв рішення, дату його doręczenie та ostateczność; порівняйте ці дані з періодом zaproszenie і не посилайтеся на нього після втрати чинності.",
    },
  ],
})
