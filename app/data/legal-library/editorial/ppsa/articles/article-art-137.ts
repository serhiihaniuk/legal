import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-137",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Wyrok ухвалюється після таємної narada sędziów; рішення приймається більшістю, суддя може під час підписання sentencji подати zdanie odrębne та має письмово його обґрунтувати, а sentencja підписується всім складом суду. Narada і голосування є таємними, а повідомлення про zdanie odrębne та ім’я судді відбуваються за правилами ${ppsaLaw.article("137", "§ 3")}.`,
          sourceLocator: "Art. 137 § 1–5",
        },
      ],
      summary:
        "Стаття описує таємну нараду, порядок голосування, можливість окремої думки та підписання sentencja.",
      rules: [
        {
          locator: "§ 1–3",
          explanation:
            "До narada входять обговорення, голосування та spisanie sentencji і zasadniczych powodów; суддя, який не погодився з більшістю, подає zdanie odrębne під час підписання sentencji та письмово його обґрунтовує, і воно може стосуватися також uzasadnienie. Про подання zdanie odrębne повідомляють, а ім’я судді — лише за його згодою.",
        },
        {
          locator: "§ 4–5",
          explanation:
            "Sentencja підписує весь склад; за умов тексту wyrok може бути зафіксований у системі суду з kwalifikowany podpis elektroniczny.",
        },
      ],
      legalEffect:
        "Норма регулює внутрішнє ухвалення й оформлення wyrok, не відкриваючи сторонам зміст таємної narada.",
      foreignersCase:
        "У справі про pobyt орієнтуйтеся на doręczona sentencja та uzasadnienie, а не на припущення про внутрішнє голосування суду.",
    },
  ],
})
