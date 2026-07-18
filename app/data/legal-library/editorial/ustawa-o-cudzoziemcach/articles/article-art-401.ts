import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-401",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Після вислуховування іноземця суд видає postanowienie про umieszczenie в strzeżony ośrodek або застосування areszt dla cudzoziemców; за wniosek Straż Graniczna це робить sąd rejonowy за місцем актуального pobyt.",
          sourceLocator: "Art. 401 ust. 1–2",
        },
        {
          kind: "statute-text",
          text: "Wniosek має містити ідентифікаційні дані, громадянство, місця проживання, правову підставу, строк заходу та uzasadnienie; суд враховує dobro małoletni, який перебуває під опікою cudzoziemca, і при розгляді wniosek про strzeżony ośrodek оцінює можливість альтернатив art. 398 ust. 2. На postanowienie про альтернативи є zażalenie до sąd okręgowy протягом 7 днів.",
          sourceLocator: "Art. 401 ust. 3–7",
        },
      ],
      summary:
        "Стаття визначає судовий порядок розміщення або areszt, зміст wniosek Straż Graniczna, обов’язок вислухати іноземця та перевірку альтернативних заходів.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Рішення приймає sąd rejonowy за місцем актуального pobyt після wysłuchanie іноземця і за wniosek компетентного органу Straż Graniczna.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Wniosek має дозволяти перевірити особу, правову підставу, запропонований період і мотиви; відсутність елемента важлива для контролю повноти.",
        },
        {
          locator: "ust. 4–6",
          explanation:
            "За ust. 4 суд враховує dobro małoletni, який перебуває під опікою cudzoziemca; за ust. 5 оцінює можливість art. 398 ust. 2 саме при rozpatrywanie wniosku про strzeżony ośrodek. За ust. 6 суд може застосувати ці środki, а zażalenie подається до sąd okręgowy протягом 7 днів від doręczenie.",
        },
      ],
      legalEffect:
        "Норма забезпечує судовий, а не лише адміністративний контроль ізоляції та вимагає перевірити менш обмежувальні заходи. Окремі строки й порядок треба рахувати від doręczenie postanowienie.",
      foreignersCase:
        "Перевірте факт wysłuchanie, компетенцію суду, усі елементи wniosek, строк заходу, dobro дитини та оцінку art. 398 ust. 2. Якщо оскаржується постанова про альтернативи, зафіксуйте 7-денний строк.",
    },
  ]),
})
