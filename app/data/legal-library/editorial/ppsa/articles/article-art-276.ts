import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-276",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 276 встановлює, що до skarga o wznowienie застосовуються відповідно правила про postępowanie перед sąd першої інстанції, якщо Dział VII не встановлює інакше; якщо właściwy є Naczelny Sąd Administracyjny, відповідно застосовується Art. 175.",
          sourceLocator: "Art. 276",
        },
      ],
      summary:
        "Стаття дає процедурне правило за замовчуванням для wznowienie та окремо відсилає до Art. 175, коли справу розглядає NSA.",
      rules: [
        {
          locator: "Art. 276",
          explanation:
            "Порівнюйте спеціальні приписи Dział VII з правилами першої інстанції; загальна відсилка працює лише відповідно і лише там, де спеціальна норма не встановлює іншого.",
        },
        {
          locator: "Art. 276 zdanie drugie",
          explanation:
            "Для провадження у NSA перевірте окремі вимоги Art. 175, а не покладайтеся лише на правила першої інстанції.",
        },
      ],
      legalEffect:
        "Відсилка визначає спосіб заповнення процесуальних питань, але не скасовує спеціальні умови, строки чи підстави wznowienie.",
      foreignersCase:
        "При підготовці скарги іноземця зіставте вимоги Dział VII з формальними вимогами відповідного суду. Якщо компетентним може бути NSA, окремо перевірте Art. 175.",
    },
  ]),
})
