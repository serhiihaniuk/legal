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
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-6",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: regulationLaw.text`${regulationLaw.annex("6", "Załącznik nr 6")} є WZÓR заłącznika nr 5 до wniosku для pobyt у celu kształcenia się na studiach; його заповнює jednostka prowadząca studia, а поля охоплюють заклад, строки й напрям навчання, рівень і оплату, мову та потрібний рівень знання, мобільність і — для продовження — виконання програми.`,
          sourceLocator:
            "Załącznik nr 6, nagłówek, Uwaga та części I–II pkt 1–11",
        },
      ],
      summary:
        "Це формуляр від навчального закладу для заяви з метою навчання. Він показує конкретні академічні та організаційні дані, які має надати заклад.",
      rules: [
        {
          locator: "nagłówek та Uwaga",
          explanation:
            "Формуляр застосовується для названого навчального cel pobytu і заповнюється jednostka prowadząca studia.",
        },
        {
          locator: "część I",
          explanation: "Вказуються personal data cudzoziemca.",
        },
        {
          locator: "część II pkt 1–9",
          explanation:
            "Форма містить назву, адресу, REGON і контакти закладу, daty початку та завершення навчання, kierunek або дисципліни, рівень і оплату, мову навчання та потрібний poziom biegłości językowej.",
        },
        {
          locator: "część II pkt 10–11",
          explanation:
            "Запитується участь у програмі або угоді мобільності та, якщо це продовження навчання, інформація про попереднє виконання програми й зарахування обов’язкових занять.",
        },
      ],
      legalEffect:
        "Заłącznik nr 6 організовує відомості про навчання для справи, але сам wzór не доводить автоматичного виконання умов zezwolenia чи фактичного зарахування.",
      foreignersCase:
        "Попросіть заклад узгодити строки, напрям, рівень, оплату, мову та інформацію про продовження навчання з документами з університету. Не вважайте цей додаток заміною іншим доказам у справі.",
    },
  ],
})
