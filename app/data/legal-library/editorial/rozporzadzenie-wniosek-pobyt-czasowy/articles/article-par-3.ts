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
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-par-3",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: regulationLaw.text`${regulationLaw.paragraph("3", "§ 3")} вимагає, щоб фотографія була неушкодженою, кольоровою та чіткою, мала 35 × 45 mm, була зроблена не раніше ніж за 6 місяців до подання wniosku і показувала обличчя на світлому однотонному тлі у фронтальному положенні з визначеними правилами видимості очей та природного вигляду.`,
          sourceLocator: "§ 3 pkt 1–5",
        },
      ],
      summary: regulationLaw.text`${regulationLaw.paragraph("3", "§ 3")} встановлює вимоги до змісту та якості фотографії, що додається до wniosku про zezwolenie на pobyt czasowy.`,
      rules: [
        {
          locator: "pkt 1–3",
          explanation:
            "Фотографія має бути якісною, кольоровою, розміром 35 × 45 mm і зробленою не раніше ніж за 6 місяців до дня подання.",
        },
        {
          locator: "pkt 4",
          explanation:
            "Обличчя показують від верхівки голови до верхньої частини плечей; воно має займати 70–80 % фото, а фон бути однотонним і світлим.",
        },
        {
          locator: "pkt 4–5",
          explanation:
            "Поза фронтальна, погляд прямо, очі відкриті та не закриті волоссям, рот закритий; очі й лінія очей мають бути чітко видимі.",
        },
      ],
      legalEffect: regulationLaw.text`Недотримання описаних характеристик може створити технічну проблему з додатком до заяви; ${regulationLaw.paragraph("3", "§ 3")} не визначає, чи виконані умови самого zezwolenia.`,
      foreignersCase:
        "Перед поданням перевірте дату фото, розмір, фон, положення обличчя та видимість очей. Окремо підготуйте документи, якими підтверджуються cel pobytu і матеріальні умови справи.",
    },
  ],
})
