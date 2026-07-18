import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-310",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 310 визначає, що decyzja o zobowiązaniu cudzoziemca do powrotu видається z urzędu komendant oddziału або placówki Straży Granicznej, який встановив підставу; на wniosek wojewody, Ministra Obrony Narodowej, Szefa ABW, Szefa AW, органу Krajowej Administracji Skarbowej або komendanta Policji — компетентним komendant за siedziba органу-заявника або місцем pobytu cudzoziemca. Орган, який встановив підставу, може postanowienie передати подальше ведення справи компетентному komendant за місцем pobytu.",
          sourceLocator: "Art. 310 ust. 1–2",
        },
      ],
      summary:
        "Стаття встановлює компетентний орган для рішення про повернення та можливість передачі подальшого ведення справи.",
      rules: [
        {
          locator: "ust. 1 pkt 1",
          explanation:
            "Z urzędu рішення видає komendant, який встановив підставу.",
        },
        {
          locator: "ust. 1 pkt 2",
          explanation:
            "На wniosek wojewody, Ministra Obrony Narodowej, Szefa ABW, Szefa AW, органу Krajowej Administracji Skarbowej або komendanta wojewódzkiego чи powiatowego (miejskiego) Policji компетентність визначається за siedziba органу-заявника або місцем pobytu cudzoziemca.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Подальше ведення може бути передане z urzędu або на wniosek cudzoziemca через postanowienie компетентному органу за місцем pobytu.",
        },
      ],
      legalEffect:
        "Норма розподіляє територіальну й функціональну компетентність; вона не вирішує, чи існує матеріальна підстава Art. 302.",
      foreignersCase:
        "Перевірте назву органу, спосіб початку справи та місце, на якому ґрунтується компетентність; за зміни місця pobytu оцініть можливість передачі справи.",
    },
  ]),
})
