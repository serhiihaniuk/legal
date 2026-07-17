import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-268",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Tymczasowy polski dokument podróży може бути виданий cudzoziemcowi, який не має dokumentu podróży і не може отримати новий, якщо підлягає relokacji або przesiedleniu чи має намір залишити територію RP або зобов’язаний її залишити.",
          sourceLocator: "Art. 268 pkt 1–2",
        },
      ],
      summary:
        "Стаття охоплює окремі ситуації видачі тимчасового документа для relokacji, przesiedlenia або виїзду з Польщі.",
      rules: [
        {
          locator: "zdanie główne",
          explanation:
            "Заявник має не мати документа подорожі, не мати можливості отримати новий і відповідати одній із двох названих ситуацій.",
        },
      ],
      legalEffect:
        "Норма не встановлює автоматичної видачі: слово «może» і сукупність умов вимагають оцінки компетентного органу.",
      foreignersCase:
        "Додайте докази relokacji, przesiedlenia, наміру виїзду або рішення про обов’язок залишити територію та документи про неможливість отримати паспорт.",
    },
  ],
})
