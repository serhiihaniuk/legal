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
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-par-2",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: regulationLaw.text`${regulationLaw.paragraph("2", "§ 2")} прив’язує конкретні wzory до ${regulationLaw.annexRange("1", "11", { start: "załączników nr 1", end: "11" })}: ${regulationLaw.annex("1", "nr 1")} — wniosek за ${foreignersLaw.article("106", "art. 106")} ust. 1, ${regulationLaw.annexRange("2", "6", { start: "nr 2", end: "6" })} — додатки за ${foreignersLaw.article("106", "art. 106")} ust. 2 та ust. 4–7, ${regulationLaw.annex("7", "nr 7")} — wniosek за ${foreignersLaw.article("106k", "art. 106k")}, ${regulationLaw.annex("8", "nr 8")} — wniosek за ${foreignersLaw.article("106l", "art. 106l")}, ${regulationLaw.annex("9", "nr 9")} — zgoda, ${regulationLaw.annex("10", "nr 10")} — інформація про odciski, ${regulationLaw.annex("11", "nr 11")} — wzór podpisu.`,
          sourceLocator: "§ 2 ust. 1–11",
        },
      ],
      summary:
        "Положення показує, який за номером załącznik відповідає конкретному виду заяви або супровідної форми.",
      rules: [
        {
          locator: "ust. 1–6",
          explanation: regulationLaw.text`${regulationLaw.annex("1", "Załącznik nr 1")} є wzorem основного wniosku, а ${regulationLaw.annexRange("2", "6", { start: "nr 2", end: "6" })} — wzorami відповідних załączników до нього.`,
        },
        {
          locator: "ust. 7–9",
          explanation: regulationLaw.text`${regulationLaw.annex("7", "Załącznik nr 7")} стосується ${foreignersLaw.article("106k", "art. 106k")}, ${regulationLaw.annex("8", "nr 8")} — ${foreignersLaw.article("106l", "art. 106l")} ust. 1, а ${regulationLaw.annex("9", "nr 9")} — formularza zgody за ${foreignersLaw.article("106l", "art. 106l")} ust. 3.`,
        },
        {
          locator: "ust. 10–11",
          explanation: regulationLaw.text`${regulationLaw.annex("10", "Załącznik nr 10")} містить wzór інформації про pobrane odciski або їх відсутність, а ${regulationLaw.annex("11", "nr 11")} — formularz wzoru podpisu.`,
        },
      ],
      legalEffect: regulationLaw.text`${regulationLaw.paragraph("2", "§ 2")} полегшує ідентифікацію потрібного офіційного wzoru, але не замінює перевірку підстави перебування, cel pobytu чи інших вимог ustawy.`,
      foreignersCase: regulationLaw.text`Порівняйте фактичний cel pobytu і посилання на ${foreignersLaw.article("106", "art. 106")}, ${foreignersLaw.article("106k", "art. 106k")} або ${foreignersLaw.article("106l", "art. 106l")} з номером потрібного załącznik. Не робіть висновок про виконання матеріальних умов лише з правильно вибраного формуляра.`,
    },
  ],
})
