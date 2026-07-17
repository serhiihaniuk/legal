import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-272",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 272 допускає wznowienie, якщо Trybunał Konstytucyjny визнав акт normatywny, на підставі якого видано orzeczenie, несумісним із Конституцією, міжнародним договором або законом; § 2 встановлює тримісячний строк, § 2a охоплює orzeczenie Trybunału Sprawiedliwości Unii Europejskiej, що впливає на зміст orzeczenie, а § 3 — рішення міжнародного органу за ратифікованим договором.",
          sourceLocator: "Art. 272 § 1–3",
        },
      ],
      summary:
        "Стаття пов’язує окремі міжнародні та конституційні рішення з можливістю wznowienie і визначає спеціальний момент для тримісячного строку.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Для підстави, пов’язаної з orzeczenie Trybunału Konstytucyjnego, строк становить три місяці від wejścia w życie цього orzeczenia; якщо на момент його ухвалення судове orzeczenie ще не було prawomocne через wniesiony środek odwoławczy, який потім відхилено, строк рахується від doręczenia postanowienia o odrzuceniu.",
        },
        {
          locator: "§ 2a–3",
          explanation:
            "Для рішення TSUE строк рахується від публікації sentencja в Dziennik Urzędowy Unii Europejskiej, а для рішення міжнародного органу — від doręczenie стороні або її pełnomocnikowi; § 2 застосовується відповідно.",
        },
      ],
      legalEffect:
        "Стаття не робить кожне рішення TK, TSUE або міжнародного органу автоматичною підставою: треба показати його зв’язок із оскарженим orzeczenie та дотримати строк.",
      foreignersCase:
        "Якщо у справі про pobyt посилаються на рішення TK, TSUE чи міжнародного органу, зафіксуйте точний акт, його публікацію або doręczenie та тримісячний розрахунок. Не починайте строк лише від дати, коли про рішення стало відомо неформально.",
    },
  ]),
})
