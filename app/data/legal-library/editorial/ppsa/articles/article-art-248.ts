import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-248",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 248 передбачає, що przyznanie prawa pomocy не звільняє сторону від обов’язку zwrot kosztów postępowania, якщо такий обов’язок випливає з інших przepisów.",
          sourceLocator: "Art. 248",
        },
      ],
      summary:
        "Prawo pomocy не дорівнює остаточному звільненню від кожного можливого обов’язку повернути koszty.",
      rules: [
        {
          locator: "Art. 248",
          explanation:
            "Після przyznanie права допомоги окремо перевірте інші przepisy, з яких може випливати обов’язок zwrot kosztów; не ототожнюйте допомогу з остаточним rozliczenie справи.",
        },
      ],
      legalEffect:
        "Навіть надане prawo pomocy не усуває обов’язок повернути koszty, якщо його встановлює інша норма; наслідок залежить від цього іншого правила та конкретної справи.",
      foreignersCase:
        "У справі іноземця перевірте точний zakres prawa pomocy і норму, яка може вимагати zwrot kosztów. Не пояснюйте клієнту, що pozytywne postanowienie автоматично закриває всі майбутні фінансові питання у суді.",
    },
  ]),
})
