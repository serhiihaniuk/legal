import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-40",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 40 встановлює: «Zakres, czas trwania i skutki umocowania szerszego niż pełnomocnictwo, o którym mowa w art. 36, ocenia się według treści pełnomocnictwa oraz przepisów prawa cywilnego».",
          sourceLocator: "Art. 40",
        },
      ],
      summary:
        "Обсяг, тривалість і наслідки umocowanie, ширшого за види pełnomocnictwo, визначаються змістом доручення та нормами prawa cywilnego.",
      rules: [
        {
          locator: "Art. 40",
          explanation:
            "Оцінка ширшого umocowanie спирається на два джерела, прямо названі статтею: treść pełnomocnictwa та przepisy prawa cywilnego.",
        },
      ],
      legalEffect:
        "Норма не дозволяє розширити повноваження лише припущенням про роль представника; вирішальними є текст доручення та застосовні цивільні правила.",
      foreignersCase:
        "Якщо представник іноземця посилається на широке umocowanie, прочитайте точний текст pełnomocnictwo і перевірте його обсяг, тривалість та наслідки за Art. 40.",
    },
  ]),
})
