import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-446",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("446", "Art. 446")} ust. 2: «Szef Urzędu rozpatruje wniosek ... w terminie 30 dni od dnia jego otrzymania».`,
          sourceLocator: "Art. 446 ust. 2",
        },
        {
          kind: "practical-inference",
          text: foreignersLaw.text`Тридцятиденний строк стосується розгляду wniosek за ${foreignersLaw.article("444", "Art. 444")} і не є автоматичним строком позитивного рішення або судового розгляду.`,
          sourceLocator: "Art. 446 ust. 1–2",
        },
      ],
      summary: foreignersLaw.text`Стаття визначає дані у formularz wniosku за ${foreignersLaw.article("444", "Art. 444")} та встановлює для Szef Urzędu 30-денний строк його розгляду від отримання.`,
      rules: [
        {
          locator: "ust. 1 pkt 1–6",
          explanation:
            "Formularz містить дані особи, попередні імена, серію й номер документа подорожі, адресу проживання, адресу для кореспонденції та обґрунтування для sprostowanie або usunięcie.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Szef Urzędu розглядає wniosek у строк 30 днів від дня його отримання.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Зразок formularz визначає minister właściwy do spraw wewnętrznych у rozporządzenie.",
        },
      ],
      legalEffect:
        "Стаття встановлює форму й строк для спеціального wniosek, але не визначає, які докази автоматично доводять sprostowanie чи usunięcie.",
      foreignersCase: foreignersLaw.text`Використайте чинний formularz, заповніть усі ідентифікаційні поля, обґрунтуйте pkt 2 або 3 ${foreignersLaw.article("444", "Art. 444")} і збережіть доказ дати отримання wniosku.`,
    },
  ],
})
