import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-294",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 294 передбачає, що якщо urzędowo poświadczone odpisy подано, przewodniczący розпоряджається долучити їх до akt; odpis zarządzenie вручається сторонам.",
          sourceLocator: "Art. 294",
        },
      ],
      summary:
        "Подані офіційно засвідчені копії включаються до akt за розпорядженням przewodniczący, а сторони отримують копію цього zarządzenie.",
      rules: [
        {
          locator: "Art. 294 zdanie pierwsze",
          explanation:
            "Перевірте, що подана копія є urzędowo poświadczona і що існує zarządzenie про її долучення до akt.",
        },
        {
          locator: "Art. 294 zdanie drugie",
          explanation:
            "Сторонам має бути doręczony odpis zarządzenie, а не обов’язково сам оригінал документа.",
        },
      ],
      legalEffect:
        "Норма регулює долучення копій і повідомлення сторін; вона не встановлює, що долучений документ повністю відновлює зміст утрачених akt.",
      foreignersCase:
        "У справі іноземця перевірте в матеріалах odtworzenie, чи копію документа про pobyt долучено zarządzenieм і чи його odpis вручено сторонам.",
    },
  ]),
})
