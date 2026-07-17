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
      provisionId: "ustawa-o-cudzoziemcach-art-251",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Kartę pobytu unieważnia орган, який її видав, при набутті громадянства або смерті, остаточності рішень про cofnięcie zezwolenia чи zgody, zobowiązanie do powrotu або stwierdzenie nieważności картки, а також при переході до іншої підстави, названої в lit. e–h, чи у випадках знайденої або поверненої картки. Орган, який wymienił картку, unieważnia її після zgłoszenia utraty чи uszkodzenia або odbioru нової картки за ${foreignersLaw.article("241", "Art. 241")} pkt 1–2.`,
          sourceLocator: "Art. 251 pkt 1 lit. a–h, pkt 2",
        },
      ],
      summary:
        "Стаття розподіляє між органом-видавцем і органом wymiany повноваження unieważnić kartę pobytu у визначених юридичних та документних ситуаціях.",
      rules: [
        {
          locator: "pkt 1 lit. a–h",
          explanation:
            "Орган-видавець діє при громадянстві або смерті, остаточності рішень про cofnięcie, powrót чи nieważność, передачі знайденої картки, поверненні відновленої картки та wygaśnięciu попереднього права у зв’язку з новим статусом.",
        },
        {
          locator: "pkt 2 lit. a–b",
          explanation: foreignersLaw.text`Орган, який wymienił kartę, unieważnia її після zgłoszenia utraty або uszkodzenia до właściwego organu чи після odbioru нової картки у випадках ${foreignersLaw.article("241", "Art. 241")} pkt 1 і 2.`,
        },
      ],
      legalEffect: foreignersLaw.text`Стаття визначає компетентний орган для unieważnienie; конкретні моменти, з яких картка є недійсною, деталізовані в ${foreignersLaw.article("250", "Art. 250")}, а юридичні події — у ${foreignersLaw.article("249", "Art. 249")} та ${foreignersLaw.article("251", "Art. 251")}.`,
      foreignersCase:
        "У zgłoszenie про utratę або uszkodzenie перевірте, який орган його прийняв і хто wymieni kartę. Якщо unieważnienie пов’язане зі зміною статусу, аналізуйте остаточне рішення та його дату, а не лише технічний запис.",
    },
  ],
})
