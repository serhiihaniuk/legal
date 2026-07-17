import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-203",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("203", "Art. 203")} визначає зміст formularz wniosku про pobyt stały: дані cudzoziemca і małżonka, дані документа подорожі, подорожі та pobyty zagraniczne за 5 років, попередній і поточний pobyt, zatrzymanie, перебування в strzeżony ośrodek або areszt dla cudzoziemców, zakaz opuszczania kraju, позбавлення волі чи tymczasowe aresztowanie, podatki та wzór podpisu.`,
          sourceLocator: "Art. 203 ust. 1 pkt 1–7",
        },
        {
          kind: "statute-text",
          text: "До wniosku додають, зокрема, чинний dokument podróży, фотографію та документи, що підтверджують дані й обставини заяви; відсутні документи орган може вимагати строком не менше 14 днів, а відбитки пальців є обов’язковими.",
          sourceLocator: "Art. 203 ust. 2–5",
        },
      ],
      summary:
        "Стаття описує formularz, заяви та документи для pobyt stały, wezwanie про braki й зняття відбитків.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Формуляр містить не лише особисті дані, а й історію pobytu, виїздів та податкових зобов’язань; письмова заява про правдивість має бути під rygor odpowiedzialności karnej.",
        },
        {
          locator: "ust. 2a–2b",
          explanation:
            "Строк для відсутніх документів — не менше 14 днів і має враховувати час їх отримання; при кількох wezwanie застосовується найдовший строк.",
        },
        {
          locator: "ust. 3–5",
          explanation:
            "Інший документ особи допускається лише у szczególnie uzasadniony przypadek; якщо відбитки не зняті з вини wojewoda, новий строк не може бути коротшим за 7 днів.",
        },
      ],
      legalEffect:
        "Неповний wniosek запускає процедуру uzupełnienia, але наслідки залежать від того, який саме brak і чи виконано wezwanie; сама стаття не гарантує позитивного рішення.",
      foreignersCase:
        "Підготуйте повну історію виїздів, документ подорожі, фото та докази підстави, а всі wezwanie щодо документів і відбитків виконуйте окремо та вчасно.",
    },
  ],
})
