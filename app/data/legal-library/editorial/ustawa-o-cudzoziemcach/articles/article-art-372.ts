import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-372",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Під час повітряного tranzyt funkcjonariusze іншої держави-члена, які належать до eskorty, у разі bezpośredni i bezprawny zamach на життя, здоров’я або свободу funkcjonariusza чи bezpośrednie i poważne zagrożenie втечі cudzoziemca, самоушкодження, шкоди третім особам або знищення майна, коли немає funkcjonariuszy Straż Graniczna або Policja чи для їх підтримки, можуть носити й застосовувати або використовувати лише перелічені в законі środki przymusu bezpośredniego.",
          sourceLocator: "Art. 372 pkt 1–2",
        },
        {
          kind: "practical-inference",
          text: "Повноваження прив’язані до конкретної небезпеки, відсутності або підтримки польських служб і переліку засобів; це не загальний дозвіл на примус.",
          sourceLocator:
            "Art. 372 w związku z art. 12 ust. 1 ustawy o środkach przymusu bezpośredniego i broni palnej",
        },
      ],
      summary:
        "Стаття визначає вузькі умови, за яких супровід іншої держави-члена може носити й застосовувати окремі środki przymusu bezpośredniego під час tranzyt.",
      rules: [
        {
          locator: "pkt 1–2",
          explanation:
            "Йдеться про загрозу життю, здоров’ю або свободі функціонера чи безпосередній серйозний ризик втечі, самоушкодження, шкоди іншим або майну.",
        },
        {
          locator: "Art. 12 ust. 1",
          explanation:
            "Носити можна засоби з art. 12 ust. 1 pkt 2, 7, pkt 12 lit. a i d та pkt 13, а застосовувати або використовувати — засоби з art. 12 ust. 1 pkt 1, 2, 7, pkt 12 lit. a i d та pkt 13 ustawa o środkach przymusu bezpośredniego i broni palnej, відповідно до правил для funkcjonariuszy Straż Graniczna.",
        },
      ],
      legalEffect:
        "Норма узгоджує обмежене застосування примусових засобів іноземним супроводом під час транзиту. Оцінка конкретної дії залежить від обставин і виду використаного засобу.",
      foreignersCase:
        "Якщо виникла силова ситуація, зафіксуйте час, загрозу, присутність польських служб і конкретний засіб. Не робіть висновок про правомірність лише з того, що особа була супроводжуваною.",
    },
  ]),
})
