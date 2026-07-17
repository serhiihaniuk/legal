import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-291",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 291 вимагає, щоб у wniosek o odtworzenie akt було точно визначено справу, додано всі наявні у заявника urzędowo poświadczone odpisy та вказано відомі йому місця, де знаходяться документи або їх odpisy.",
          sourceLocator: "Art. 291",
        },
      ],
      summary:
        "Заява про odtworzenie akt має ідентифікувати справу, надати наявні офіційно засвідчені копії та вказати джерела інших документів.",
      rules: [
        {
          locator: "Art. 291",
          explanation:
            "До wniosek внесіть точне позначення справи та додайте всі urzędowo poświadczone odpisy, які є у вашому володінні.",
        },
        {
          locator: "Art. 291",
          explanation:
            "Не обмежуйтеся власними копіями: вкажіть відомі місця зберігання документів або їх odpisy.",
        },
      ],
      legalEffect:
        "Норма визначає зміст wniosek, але подання копій не гарантує, що суд визнає їх достатніми для повного odtworzenie.",
      foreignersCase:
        "У справі іноземця зберіть копії wyrok, postanowienie, skarga та підтвердження doręczenie, але в wniosek зазначайте лише те, що фактично є або відомо про місце зберігання.",
    },
  ]),
})
