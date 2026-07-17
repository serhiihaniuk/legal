import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-64b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "До sprzeciw od decyzji відповідно застосовуються правила про skarga; sprzeciw має вказати decyzja, вимагати її uchylenie та назвати орган, який її видав, а art. 33 у цьому провадженні не застосовується.",
          sourceLocator: "Art. 64b § 1–3",
        },
      ],
      summary:
        "Sprzeciw має обов’язкові елементи: акт, żądanie uchylenia та орган.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Правила skarga діють відповідно, якщо спеціальні приписи sprzeciw не встановлюють іншого.",
        },
        {
          locator: "§ 2",
          explanation:
            "Вкажіть оскаржену decyzja, żądanie її uchylenia і орган-видавець.",
        },
        {
          locator: "§ 3",
          explanation:
            "У postępowanie, започаткованому sprzeciw, art. 33 не застосовується.",
        },
      ],
      legalEffect:
        "Норма задає форму sprzeciw, але не визначає, що суд автоматично скасує decyzja.",
      foreignersCase:
        "Якщо рішення у справі cudzoziemca підпадає під art. 64a, перевірте, щоб sprzeciw називав акт, орган і вимогу uchylenie.",
    },
  ]),
})
