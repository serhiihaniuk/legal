import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-303a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 303a ust. 1 передбачає для cudzoziemca з Art. 303 ust. 1 pkt 11, крім випадку niezwłocznego przekazania, wydanie decyzji o przekazaniu до держави-члена ЄС або EFTA–EOG чи Швейцарії за відповідною міжнародною угодою; до неї відповідно застосовуються правила про decyzja o zobowiązaniu do powrotu, але не визначаються termin dobrowolnego wyjazdu і zakaz ponownego wjazdu, а витрати за примусового виконання регулюються ust. 3.",
          sourceLocator: "Art. 303a ust. 1–3",
        },
      ],
      summary:
        "Стаття регулює окреме рішення про передачу до іншої держави у визначеній Art. 303 категорії.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Рішення видається особі з Art. 303 ust. 1 pkt 11, якщо її не передають niezwłocznie до держави-члена ЄС, EFTA–EOG або Швейцарії на підставі міжнародної угоди, чинної 13 січня 2009 року.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Ust. 2 виключає termin dobrowolnego wyjazdu і zakaz ponownego wjazdu; ust. 3 передбачає визначення витрат, якщо рішення підлягає przymusowe wykonanie, із відповідним застосуванням Art. 336–338 і 340–347.",
        },
      ],
      legalEffect:
        "Це рішення має інший предмет — передачу до іншої держави, тому його не слід автоматично ототожнювати з рішенням про повернення.",
      foreignersCase:
        "Прочитайте, чи рішення посилається саме на Art. 303a, яку державу визначено для передачі та яке pouczenie щодо оскарження застосовано.",
    },
  ]),
})
