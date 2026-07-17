import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-57",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Skarga має відповідати вимогам pismo у судовому провадженні та додатково вказати оскаржений akt або czynność, орган і порушення prawa або interesu prawnego; кілька skargi в одному pismo розділяються, якщо оскаржено більше одного предмета.",
          sourceLocator: "Art. 57 § 1–3",
        },
      ],
      summary:
        "Добре складена skarga ідентифікує предмет, орган і конкретно сформульоване порушення.",
      rules: [
        {
          locator: "§ 1 pkt 1–3",
          explanation:
            "Вкажіть decyzja/postanowienie/інший akt або czynność, орган та naruszenie prawa або interesu prawnego; pkt 4 позначений як uchylony.",
        },
        {
          locator: "§ 2",
          explanation:
            "За art. 51 кілька skarżący можуть подати skargi одним pismo.",
        },
        {
          locator: "§ 3",
          explanation:
            "Оскарження кількох актів, czynności, bezczynność або przewlekłość в одному pismo спричиняє їх розділення.",
        },
      ],
      legalEffect:
        "Стаття формує мінімальну індивідуалізацію skarga; її виконання не доводить, що zarzut обґрунтований.",
      foreignersCase:
        "У skarga про pobyt назвіть точну decyzja та орган, сформулюйте порушення процедури або права й не змішуйте різні акти.",
    },
  ]),
})
