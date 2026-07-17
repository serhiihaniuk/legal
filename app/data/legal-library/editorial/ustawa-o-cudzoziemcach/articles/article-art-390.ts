import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-390",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Komendant placówki Straży Granicznej невідкладно повідомляє орган państwo wydające про opuszczenie території Польщі іноземцем.",
          sourceLocator: "Art. 390",
        },
        {
          kind: "practical-inference",
          text: "Для оцінки виконання обов’язку важливо встановити момент виїзду та коли placówka отримала інформацію про нього.",
          sourceLocator: "Art. 390",
        },
      ],
      summary:
        "Стаття встановлює невідкладне повідомлення państwo wydające про виїзд іноземця з Польщі.",
      rules: [
        {
          locator: "Art. 390",
          explanation:
            "Обов’язок покладено на komendant placówki Straży Granicznej і він виникає після встановлення opuszczenie території Польщі.",
        },
      ],
      legalEffect:
        "Норма забезпечує підтвердження завершення польської частини виконання іноземного рішення через повідомлення іншої держави.",
      foreignersCase:
        "Зіставте дані про перетин кордону, протокол doprowadzenie та повідомлення państwo wydające. Не ототожнюйте саму відправку з юридичним скасуванням усіх документів.",
    },
  ]),
})
