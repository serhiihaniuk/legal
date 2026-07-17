import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-250",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 250 встановлює, що призначений adwokat, radca prawny, doradca podatkowy або rzecznik patentowy отримує wynagrodzenie за правилами про оплати за czynności відповідної професії у сфері не оплаченої правової допомоги та zwrot необхідних і документально підтверджених wydatki; у uzasadnione przypadki суд може це wynagrodzenie зменшити.",
          sourceLocator: "Art. 250 § 1–2",
        },
      ],
      summary:
        "Стаття регулює винагороду представника, призначеного в рамках prawa pomocy, і відшкодування необхідних документованих витрат.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Для розрахунку перевірте вид професійного представника та правила про opłaty за nieopłacona pomoc prawna; окремо підтверджуйте необхідні wydatki документами.",
        },
        {
          locator: "§ 2",
          explanation:
            "Зменшення wynagrodzenie можливе в uzasadnione przypadki; стаття не робить повну заявлену суму гарантованою.",
        },
      ],
      legalEffect:
        "Art. 250 визначає рамку розрахунку wynagrodzenie і wydatki представника, але не гарантує конкретної суми та не змінює обсяг наданого стороні права допомоги.",
      foreignersCase:
        "У справі іноземця перевірте, чи представника справді ustanowiono за zasadach prawa pomocy, які czynności та wydatki заявлено і якими документами вони підтверджені. Не ототожнюйте prawo pomocy клієнта з автоматично погодженою сумою винагороди представника.",
    },
  ]),
})
