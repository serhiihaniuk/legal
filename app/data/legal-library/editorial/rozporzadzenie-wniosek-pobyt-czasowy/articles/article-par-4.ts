import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const regulationLaw = createLegalTextAuthor(
  "rozporzadzenie-wniosek-pobyt-czasowy"
)

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"rozporzadzenie-wniosek-pobyt-czasowy">({
  documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
  editionId: "rozporzadzenie-wniosek-pobyt-czasowy-2026-553",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-par-4",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: regulationLaw.text`${regulationLaw.paragraph("4", "§ 4")} для wniosku, що подається способом з ${foreignersLaw.article("106c", "art. 106c")} ust. 1 ustawy, вимагає файл фотографії у форматі JPG, який відповідає ${regulationLaw.paragraph("3", "§ 3")}, має щонайменше 684 × 883 piksele, розмір не більше 2,5 MB і зберігає пропорції 35 × 45 mm.`,
          sourceLocator: "§ 4",
        },
      ],
      summary:
        "Положення переводить вимоги до фотографії в технічні параметри файла для електронного wniosku.",
      rules: [
        {
          locator: "§ 4",
          explanation: regulationLaw.text`Потрібен JPG-файл, що одночасно відповідає вимогам ${regulationLaw.paragraph("3", "§ 3")}, має мінімальну роздільність 684 × 883 piksele та не перевищує 2,5 MB.`,
        },
        {
          locator: "§ 4",
          explanation:
            "Співвідношення ширини й висоти файла має відповідати фотографії 35 × 45 mm.",
        },
      ],
      legalEffect: regulationLaw.text`${regulationLaw.paragraph("4", "§ 4")} регулює формат електронного додатка і його сумісність із поданням онлайн; він не є доказом права на pobyt і не підтверджує матеріальну підставу заяви.`,
      foreignersCase:
        "Для подання через MOS перевірте JPG, піксельні розміри, обсяг файла та пропорції. Не плутайте успішне завантаження фото з підтвердженням cel pobytu або інших умов.",
    },
  ],
})
