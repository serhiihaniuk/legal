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
      article: "73",
      provisionId: "kpa-art-73",
      reviewStatus: "reviewed",
      summary:
        "Стаття гарантує стороні доступ до akt sprawy, право робити нотатки й копії та, за важливого інтересу, отримувати uwierzytelnione odpisy або копії.",
      rules: [
        {
          locator: "§ 1–1a",
          explanation:
            "Сторона може переглядати акти, робити нотатки, копії й odpisy також після завершення провадження; це відбувається у приміщенні organu в присутності працівника.",
        },
        {
          locator: "§ 1b",
          explanation: kpaLaw.text`У справах skarg i wniosków не розкриваються дані особи, яка подала skargę, за правилами ${kpaLaw.article("236", "art. 236 § 2")}.`,
        },
        {
          locator: "§ 2",
          explanation:
            "За важливого інтересу сторони organ може uwierzytelnić sporządzone odpisy або копії чи видати uwierzytelnione odpisy з akt.",
        },
        {
          locator: "§ 3",
          explanation:
            "Organ може забезпечити електронний доступ до akt після uwierzytelnienia сторони у своїй teleinformatycznej системі.",
        },
      ],
      legalEffect:
        "Сторона може перевіряти матеріал, на якому organ веде і вирішує її справу, з урахуванням законних обмежень доступу.",
      foreignersCase:
        "Іноземець або його pełnomocnik може ознайомитися з aktami справи про pobyt і перевірити wezwania, докази, doręczenia та службові записи.",
    },
  ],
})
