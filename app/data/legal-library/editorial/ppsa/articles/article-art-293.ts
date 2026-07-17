import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-293",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 293 дозволяє суду накласти grzywna у розмірі, визначеному Art. 154 § 6, на кожного, хто не виконав wezwanie за попередньою статтею; якщо викликано osobę prawną або іншу jednostkę organizacyjną, покаранню підлягає її kierownik або pracownik, обов’язком якого було виконати wezwanie.",
          sourceLocator: "Art. 293 § 1–2",
        },
      ],
      summary:
        "Невиконання wezwanie про подання копій або пояснення може мати наслідком grzywna, а для організації відповідальним адресатом є визначена службова особа.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Застосування grzywna пов’язане з невиконанням саме wezwanie, зробленого за Art. 292, і розміром, на який відсилає Art. 154 § 6.",
        },
        {
          locator: "§ 2",
          explanation:
            "Для osoby prawnej або іншої jednostka організаційної встановіть kierownik чи pracownik, на якого припадав обов’язок виконати wezwanie.",
        },
      ],
      legalEffect:
        "Можливість grzywna підтримує збирання матеріалів, але не замінює відсутній документ і не означає автоматичного відновлення akt.",
      foreignersCase:
        "У справі іноземця про pobyt відрізняйте факт невиконання wezwanie організацією від питання, чи саме її kierownik або pracownik мав обов’язок відповісти.",
    },
  ]),
})
