import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-266",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Polski dokument tożsamości cudzoziemca unieważnia się: при utrata або uszkodzenie — від zgłoszenia; при wymiana через wizerunek або дані — від odbioru нового документа; після громадянства — зі спливом строку zwrotu; після смерті — від отримання органом інформації; при поверненні знайденого документа — від його zwrotu.",
          sourceLocator: "Art. 266 ust. 1",
        },
        {
          kind: "statute-text",
          text: "Unieważnienie здійснює organ, який видав документ, при громадянстві або смерті, передачі знайденого чи поверненні відновленого документа або коли decyzja про stwierdzenie nieważności стала ostateczna; organ wymiany діє при zgłoszenie utraty або uszkodzenia та odbiór нового документа.",
          sourceLocator: "Art. 266 ust. 2",
        },
      ],
      summary:
        "Стаття визначає моменти та органи unieważnienia польського документа особи.",
      rules: [
        {
          locator: "ust. 1 pkt 1–5",
          explanation:
            "Дата недійсності залежить від події: zgłoszenie, odbiór нового документа, сплив строку zwrotu, інформація про смерть або zwrot знайденого документа.",
        },
        {
          locator: "ust. 2 pkt 1–2",
          explanation:
            "Розмежовуйте орган-видавець та орган, який здійснив wymianę.",
        },
      ],
      legalEffect:
        "Unieważnienie припиняє чинність цього документа як посвідчення особи; воно не створює і не припиняє окрему підставу легального pobytu.",
      foreignersCase:
        "Після zgłoszenia utraty не використовуйте знайдений старий документ без перевірки. При спорі попросіть орган пояснити дату й підставу unieważnienia.",
    },
  ],
})
