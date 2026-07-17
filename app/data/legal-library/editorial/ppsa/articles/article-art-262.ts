import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-262",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 262 передбачає відповідне застосування положень про przyznanie prawa pomocy щодо zastępstwo prawne на zasadach prawa pomocy до сторін, які мають ustawowe zwolnienie від обов’язку сплати kosztów sądowych.",
          sourceLocator: "Art. 262",
        },
      ],
      summary:
        "Сторона, звільнена від судових витрат без окремого рішення про prawo pomocy, може відповідно користуватися правилами про правове представництво за zasadach prawa pomocy.",
      rules: [
        {
          locator: "Art. 262",
          explanation:
            "Спочатку встановіть ustawowe zwolnienie від обов’язку сплати kosztów sądowych, а потім застосовуйте правила лише в частині zastępstwo prawne на zasadach prawa pomocy.",
        },
        {
          locator: "Art. 262",
          explanation:
            "Не розширюйте відсилання на автоматичне звільнення від усіх витрат або на будь-яку іншу форму допомоги: стаття говорить саме про zastępstwo prawne.",
        },
      ],
      legalEffect:
        "Норма координує ustawowe zwolnienie від витрат із механізмом призначення представника, але сама не встановлює, що кожна звільнена сторона автоматично отримує adwokat чи radca prawny.",
      foreignersCase:
        "У справі іноземця перевірте джерело звільнення: ustawowe zwolnienie не тотожне postanowienie про prawo pomocy. Для призначення представника застосовуйте Art. 262 лише в його вузькій частині про zastępstwo prawne.",
    },
  ]),
})
