import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const regulationLaw = createLegalTextAuthor(
  "rozporzadzenie-wniosek-pobyt-czasowy"
)
export default defineEditorialPart<"rozporzadzenie-wniosek-pobyt-czasowy">({
  documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
  editionId: "rozporzadzenie-wniosek-pobyt-czasowy-2026-553",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-2",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: regulationLaw.text`${regulationLaw.annex("2", "Załącznik nr 2")} є WZÓR першого додатка до wniosku; його заповнює podmiot powierzający pracę cudzoziemcowi для названих видів pobyt czasowy, а текст форми містить частини про цей суб’єкт, pracodawca użytkownik, роботу, oświadczenia та основні обов’язки й строк роботи.`,
          sourceLocator: "Załącznik nr 2, nagłówek, Uwaga та części I–VI",
        },
      ],
      summary:
        "Це формуляр відомостей від podmiot powierzający pracę, потрібний для визначених робочих і пов’язаних із діяльністю заяв. Він не є самостійним рішенням про право на pobyt.",
      rules: [
        {
          locator: "nagłówek та Uwaga",
          explanation:
            "Формуляр додається у випадках, прямо названих у заголовку, і його заповнює podmiot powierzający pracę; для юридичної особи або організаційної одиниці це робить особа, яка діє від її імені.",
        },
        {
          locator: "części I–III",
          explanation:
            "Текст показує поля dane osobowe cudzoziemca, podmiot powierzający pracę та pracodawca użytkownik, зокрема назву, адресу, правову підставу діяльності, реєстрові і контактні дані.",
        },
        {
          locator: "części IV–VI",
          explanation:
            "Формуляр містить поля про stanowisko або rodzaj pracy, zawód, місце, правову підставу, час, винагороду, podstawowe obowiązki, період роботи, PKD та oświadczenia відповідного суб’єкта.",
        },
      ],
      legalEffect: regulationLaw.text`${regulationLaw.annex("2", "Załącznik nr 2")} фіксує заявлені суб’єктом і параметри роботи та дає органу структуровані відомості для відповідної процедури. Сам formularz не замінює оцінку умов zezwolenia або інших доказів.`,
      foreignersCase:
        "Перевірте, хто фактично доручає роботу, чи є pracodawca użytkownik і чи відповідають один одному stanowisko, місце, час, винагорода та обов’язки у формулярі й інших документах. Не сприймайте заповнення додатка як автоматичне підтвердження всіх умов.",
    },
  ],
})
