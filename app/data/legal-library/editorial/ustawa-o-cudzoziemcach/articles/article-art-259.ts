import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-259",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Polski dokument podróży unieważnia się: при utrata або uszkodzenie — від zgłoszenia; при wymiana через wizerunek або дані — від odbioru нового документа; після громадянства — зі спливом строку zwrotu; після рішень про cofnięcie, pozbawienie ochrony або nieważność — зі спливом строку zwrotu; при смерті — від інформації органу; при поверненні знайденого документа — від zwrotu; а при неповерненні після отримання власного документа — niezwłocznie після отримання інформації про це.",
          sourceLocator: "Art. 259 ust. 1 pkt 1–6",
        },
        {
          kind: "statute-text",
          text: "Unieważnienie здійснює organ, який видав документ, у випадках громадянства, смерті, ostateczność відповідних рішень, передачі знайденого або повернення відновленого документа чи отримання власного dokumentu podróży; organ, який wymienił документ, діє при zgłoszenie utraty або uszkodzenia та odbiór нового документа.",
          sourceLocator: "Art. 259 ust. 2 pkt 1–2",
        },
      ],
      summary:
        "Стаття розрізняє підстави й точні моменти unieważnienia polskiego dokumentu podróży та розподіляє дію між органом-видавцем і органом wymiany.",
      rules: [
        {
          locator: "ust. 1 pkt 1–6",
          explanation:
            "Не змішуйте подію і момент: закон окремо називає zgłoszenie, odbiór нового, сплив строку zwrotu, отримання інформації про смерть, zwrot знайденого документа та момент після інформації про власний документ.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Розрізняйте орган, який видав документ, і орган, який його обміняв: стаття розподіляє їхні дії.",
        },
      ],
      legalEffect:
        "Unieważnienie припиняє чинність polskiego dokumentu podróży як документа; це не є самостійним рішенням про право на pobyt або ochronę.",
      foreignersCase:
        "Після втрати негайно подайте zgłoszenie й використовуйте лише новий документ, якщо його видано. Якщо старий знайдено, не вважайте його автоматично чинним.",
    },
  ],
})
