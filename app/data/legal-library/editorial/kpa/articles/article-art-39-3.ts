import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "39³",
      provisionId: "kpa-art-39-3",
      reviewStatus: "reviewed",
      summary:
        "Стаття дозволяє вручати паперовий wydruk електронно виданого і належно підписаного або опечатаного письма та визначає зміст і доказове значення такого wydruku.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Doręczenie може полягати у врученні wydruku, який відображає електронне письмо з установленим електронним підписом або pieczęcią.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Wydruk має повідомляти про електронну форму і спосіб підписання або опечатування та містити ідентифікатор; може також відтворювати підпис механічно.",
        },
        {
          locator: "§ 4",
          explanation:
            "Такий wydruk є доказом того, що встановлено в електронно виданому письмі.",
        },
      ],
      legalEffect:
        "Належний wydruk має законне доказове значення і може бути самостійно вручений адресату.",
      foreignersCase: kpaLaw.text`У справі іноземця відсутність рукописного підпису на wydruku не робить письмо автоматично недійсним, якщо виконані вимоги ${kpaLaw.article("39", "art. 39")}³.`,
    },
  ],
})
