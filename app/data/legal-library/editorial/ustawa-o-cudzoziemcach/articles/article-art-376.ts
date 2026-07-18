import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-376",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Komendant Główny Straży Granicznej, на wniosek centralnego organu іншої держави-члена Unii Europejskiej, може надати допомогу в strefa tranzytowa lotniska międzynarodowego, коли центральному organowi цієї держави cofnięto zezwolenie, йому не виражено zgody на tranzyt, але tranzyt розпочато на podstawie notyfikacji, cudzoziemiec під час tranzyt увійшов до Польщі без zezwolenia, przymusowe wykonanie рішення або wejście на pokład виявилися безуспішними чи tranzyt неможливий з іншої причини.",
          sourceLocator: "Art. 376 ust. 1 pkt 1–5",
        },
        {
          kind: "statute-text",
          text: "Така допомога може включати медичну опіку та харчування, zakwaterowanie, зберігання і передачу dokumenty podróży та протидію спробам втечі.",
          sourceLocator: "Art. 376 ust. 2 pkt 1–4",
        },
      ],
      summary:
        "Стаття передбачає спеціальну допомогу в зоні транзиту, коли повітряний tranzyt зірвався, почався без належного дозволу або став неможливим.",
      rules: [
        {
          locator: "ust. 1 pkt 1–5",
          explanation:
            "Потрібні wniosek centralnego organu іншої держави-члена та одна з п’яти ситуацій: cofnięcie zezwolenia; відсутність zgody за умови початку tranzyt на podstawie notyfikacji; в’їзд до Польщі без zezwolenia; безуспішне przymusowe wykonanie рішення або wejście на pokład; інша неможливість tranzyt.",
        },
        {
          locator: "ust. 2 pkt 1–4",
          explanation:
            "Можливі заходи допомоги стосуються базових потреб, документів і запобігання втечі.",
        },
      ],
      legalEffect:
        "Це операційна основа для реагування в зоні tranzyt. Надання допомоги саме по собі не означає дозволу на в’їзд або легалізації pobyt у Польщі.",
      foreignersCase:
        "Зафіксуйте, яка з підстав ust. 1 настала, де перебуває іноземець і які документи або медичні потреби передані службам. Не називайте таку допомогу новим титулом pobyt.",
    },
  ]),
})
