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
      provisionId: "ustawa-o-cudzoziemcach-art-428",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("428", "Art. 428")} ust. 1: «W sprawach z zakresu wjazdu cudzoziemców na terytorium Rzeczypospolitej Polskiej, pobytu na tym terytorium i wyjazdu z niego prowadzi się w systemie informatycznym» визначені rejestry та ewidencje.`,
          sourceLocator: "Art. 428 ust. 1",
        },
        {
          kind: "practical-inference",
          text: "Наявність запису в rejestr не є сама по собі поясненням правової підстави; треба відокремлювати реєстраційні дані від decyzja чи postanowienie.",
          sourceLocator: "Art. 428 ust. 1–2",
        },
      ],
      summary:
        "Стаття перелічує інформаційні rejestry, ewidencję zaproszeń та інші записи щодо в’їзду, pobyt, віз, дозволів, повернення, мобільності, відбитків пальців і довідок.",
      rules: [
        {
          locator: "ust. 1 pkt 1–2",
          explanation:
            "Ведуться rejestry осіб і справ про дозвіл на в’їзд, затримання біля кордону, візи, pobyt часowy/stały, rezydent długoterminowy UE, документи, повернення та інші названі справи.",
        },
        {
          locator: "ust. 1 pkt 3–7",
          explanation: foreignersLaw.text`Окремо реєструються відбитки пальців, ewidencja zaproszeń, pouczenia про виїзд до іншої держави Schengen та wydane zaświadczenia з ${foreignersLaw.article("170", "Art. 170")}.`,
        },
        {
          locator: "ust. 2",
          explanation:
            "Окремі rejestry можуть вестися також у картотечній системі.",
        },
      ],
      legalEffect:
        "Стаття визначає архітектуру державного обліку справ іноземців. Вона не замінює матеріальні умови дозволу або рішення в індивідуальній справі.",
      foreignersCase:
        "Коли орган посилається на запис, з’ясуйте назву rejestr, дату і пов’язану decyzja або wniosek; не ототожнюйте запис із самостійним доказом порушення.",
    },
  ],
})
