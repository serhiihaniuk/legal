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
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-4",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: regulationLaw.text`${regulationLaw.annex("4", "Załącznik nr 4")} є WZÓR третього додатка до wniosku для zezwolenia dla stażysty або wolontariusza з метою участі в programie wolontariatu europejskiego; його заповнює organizator stażu або jednostka organizacyjna, на користь якої іноземець виконує świadczenia як wolontariusz.`,
          sourceLocator: "Załącznik nr 4, nagłówek, Uwaga та części I–II",
        },
      ],
      summary:
        "Формуляр фіксує дані іноземця та організації, яка організовує staż або приймає волонтера в названому режимі.",
      rules: [
        {
          locator: "nagłówek та Uwaga",
          explanation:
            "Потрібний тип заповнювача залежить від мети: organizator stażu для stażysty або відповідна jednostka organizacyjna для wolontariusza.",
        },
        {
          locator: "część I",
          explanation:
            "Форма має поля для nazwisko, imię, data urodzenia та obywatelstwo cudzoziemca.",
        },
        {
          locator: "część II",
          explanation:
            "Є вибір X між organizator stażu і jednostka organizacyjna, а також назва, адреса, правова підстава діяльності, REGON, телефон і e-mail; внизу передбачено підпис уповноваженого представника.",
        },
      ],
      legalEffect: regulationLaw.text`${regulationLaw.annex("4", "Załącznik nr 4")} стандартизує відомості від організатора або приймаючої одиниці для відповідного виду заяви. Він не є самостійним підтвердженням права на pobyt чи фактичного виконання програми.`,
      foreignersCase:
        "Попросіть заповнити форму саме того суб’єкта, який названий у pouczenie, перевірте позначений тип організації та узгодженість її реквізитів з іншими документами. Підпис форми не замінює оцінку всієї справи.",
    },
  ],
})
