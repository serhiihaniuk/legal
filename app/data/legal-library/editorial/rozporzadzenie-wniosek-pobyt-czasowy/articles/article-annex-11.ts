import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const regulationLaw = createLegalTextAuthor(
  "rozporzadzenie-wniosek-pobyt-czasowy"
)
export default defineEditorialPart<"rozporzadzenie-wniosek-pobyt-czasowy">({
  documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
  editionId: "rozporzadzenie-wniosek-pobyt-czasowy-2026-553",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-11",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: regulationLaw.text`${regulationLaw.annex("11", "Załącznik nr 11")} є WZÓR FORMULARZA, на якому cudzoziemiec складає wzór podpisu; pouczenie виключає його зняття для особи, молодшої 13 років на день подання, або особи з підтвердженою хворобою чи niepełnosprawnością, яка не може підписатися самостійно.`,
          sourceLocator: "Załącznik nr 11, tytuł, pouczenie та rubryki 1–4",
        },
      ],
      summary:
        "Форма призначена для зразка підпису і містить мінімальні ідентифікаційні дані та рамку, за межі якої підпис не повинен виходити.",
      rules: [
        {
          locator: "pouczenie pkt 1–2",
          explanation:
            "Wzór podpisu не береться від cudzoziemiec, який до дня подання не досяг 13 років, або через підтверджену медичною довідкою хворобу чи niepełnosprawność не може підписатися самостійно.",
        },
        {
          locator: "rubryki 1–4",
          explanation:
            "У формі вказуються imię, nazwisko, data urodzenia та obywatelstwo cudzoziemca.",
        },
        {
          locator: "WZÓR PODPISU",
          explanation:
            "Підпис складається у відведеній рамці; текст прямо зазначає, що він не може виходити за її межі.",
        },
      ],
      legalEffect:
        "Заłącznik nr 11 фіксує зразок підпису або пояснює передбачений формою виняток. Це ідентифікаційна формальність, а не доказ матеріального права на pobyt.",
      foreignersCase:
        "Перевірте вік на дату подання та, якщо застосовується виняток через стан здоров’я, окремо з’ясуйте вимогу до медичної довідки, зазначену в pouczenie. Сам зразок підпису не доводить умови zezwolenia.",
    },
  ],
})
