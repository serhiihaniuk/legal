import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-234",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("234", "Art. 234 § 1–4")} передбачає opłatę kancelaryjną за stwierdzenie prawomocności та видачу документів на підставі akt; за odpis orzeczenia z uzasadnieniem, витребуваний протягом семи днів від ogłoszenia, opłatę сплачують під час wniosku, а за її відсутності przewodniczący після wezwania наказує стягнення без застосування ${ppsaLaw.article("220", "art. 220")}; відпис, який вручається з urzędu, не оплачується, а дії з ${ppsaLaw.article("234", "§ 2")} може виконувати referendarz sądowy.`,
          sourceLocator: "Art. 234 § 1–4",
        },
      ],
      summary:
        "Стаття визначає, коли за документи з akt стягується opłata kancelaryjna і як відрізняється відпис рішення, надісланий на прохання або з urzędu.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Для stwierdzenie prawomocności, odpis, zaświadczenie або інший документ перевірте, чи його видають на підставі akt.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Запит на odpis orzeczenia z uzasadnieniem у семиденний строк має окреме правило оплати, тоді як відпис, що вручається з urzędu, не оплачується.",
        },
        {
          locator: "§ 4",
          explanation: ppsaLaw.text`Дії, описані в ${ppsaLaw.article("234", "§ 2")}, може виконувати referendarz sądowy.`,
        },
      ],
      legalEffect:
        "Норма розмежовує вид документа та спосіб його вручення; право отримати відпис не означає, що кожен запит є безкоштовним.",
      foreignersCase:
        "Для оскарження рішення про pobyt перевірте дату ogłoszenia, дату запиту на uzasadnienie і те, чи відпис надіслано з urzędu, перш ніж оцінювати opłatę kancelaryjną.",
    },
  ],
})
