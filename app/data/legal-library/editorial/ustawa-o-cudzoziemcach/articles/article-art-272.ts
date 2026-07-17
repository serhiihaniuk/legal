import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-272",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "У RP tymczasowy polski dokument podróży видає або відмовляє у видачі wojewoda за місцем pobytu, а якщо cudzoziemiec зобов’язаний залишити територію RP — komendant placówki Straży Granicznej; за межами RP це робить konsul.",
          sourceLocator: "Art. 272 ust. 1",
        },
        {
          kind: "statute-text",
          text: "Відмова у видачі є decyzją; від decyzja konsula можна подати до того самого органу wniosek o ponowne rozpatrzenie протягом 7 днів від doręczenia, а органом вищого ступеня щодо komendanta placówki є Komendant Główny Straży Granicznej.",
          sourceLocator: "Art. 272 ust. 2–5",
        },
      ],
      summary:
        "Стаття розподіляє компетенцію щодо тимчасового документа між wojewoda, Strażą Graniczną та konsulem і встановлює спеціальний шлях перегляду рішення konsula.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Місце перебування та мета виїзду визначають, чи звертатися до wojewody, SG або konsula.",
        },
        {
          locator: "ust. 2–5",
          explanation:
            "Рішення про відмову є decyzją; для відмови konsula строк wniosku o ponowne rozpatrzenie становить 7 днів.",
        },
      ],
      legalEffect:
        "Належний засіб залежить від органу, який видав рішення: wniosek o ponowne rozpatrzenie за статтею прямо названий для рішення konsula.",
      foreignersCase:
        "На відмові визначте орган-видавець, дату doręczenia та назву środka zaskarżenia. Для рішення konsula не пропустіть 7-денний строк і подайте wniosek до того самого органу.",
    },
  ],
})
