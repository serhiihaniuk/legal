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
      provisionId: "ustawa-o-cudzoziemcach-art-281",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Dokument «zgoda na pobyt tolerowany» unieważnia się: при utrata або uszkodzenie — від zgłoszenia; при wymiana через wizerunek або дані — від odbioru нового; після громадянства — зі спливом строку zwrotu; після смерті — від інформації органу; при неповерненні за ${foreignersLaw.article("280", "Art. 280")} ust. 2 pkt 2–4 — від ostateczność або wygaśnięcia рішення; при передачі знайденого документа без попереднього zgłoszenie utraty — від передачі; при zwrot odzyskanego документа — від zwrotu.`,
          sourceLocator: "Art. 281 ust. 1 pkt 1–7",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Unieważnienie здійснює organ, який видав документ, при громадянстві або смерті, передачі знайденого чи поверненні відновленого документа, ostateczność рішення про cofnięcie zgody або nieważność документа та wygaśnięcie zgody за ${foreignersLaw.article("354", "Art. 354")}; organ wymiany діє при zgłoszenie utraty або uszkodzenia та odbiór нового документа.`,
          sourceLocator: "Art. 281 ust. 2",
        },
      ],
      summary:
        "Стаття визначає підстави, моменти й компетентні органи для unieważnienia документа tolerowany.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Не плутайте дату події, що робить документ недійсним, із датою пізнішого технічного запису органу.",
        },
        {
          locator: "ust. 2 pkt 1–2",
          explanation:
            "Перевірте, який орган видав або обміняв документ, бо стаття розподіляє між ними unieważnienie.",
        },
      ],
      legalEffect:
        "Unieważnienie стосується документа tolerowany; воно не замінює аналіз рішення про cofnięcie або wygaśnięcie zgody.",
      foreignersCase: foreignersLaw.text`При втраті негайно подайте zgłoszenie. Після рішення або wygaśnięcia поверніть документ у строк ${foreignersLaw.article("280", "Art. 280")} і зберігайте підтвердження.`,
    },
  ],
})
