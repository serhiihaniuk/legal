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
      provisionId: "ustawa-o-cudzoziemcach-art-108",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Якщо wniosek подано вчасно й він не має braków formalnych або їх усунуто у строк, ${foreignersLaw.article("108", "Art. 108")} зобов’язує wojewodę видати zaświadczenie про подання та визнає pobyt легальним від дня подання до дня, коли decyzja стане ostateczna.`,
          sourceLocator: "Art. 108 ust. 1–10",
        },
      ],
      summary:
        "Zaświadczenie підтверджує процесуальний факт подання й пояснює тимчасовий ефект для pobytu. Воно замінило попередній stempel у паспорті, але не є рішенням про дозвіл.",
      rules: [
        {
          locator: "Art. 108 ust. 1–2",
          explanation:
            "Потрібні разом своєчасність і формальна повнота. Тоді pobyt вважається легальним до остаточного рішення; під час zawieszenia postępowania на заяву сторони цей ефект не діє.",
        },
        {
          locator: "Art. 108 ust. 3–7",
          explanation:
            "Zaświadczenie містить дані особи й документа, дату подання, пояснення правового ефекту, дані organu, номер, підпис і kod QR. Воно має kwalifikowaną pieczęć elektroniczną Szefa Urzędu, видається без opłaty skarbowej та вручається через MOS або під час особистої явки.",
        },
        {
          locator: "Art. 108 ust. 8–10",
          explanation: foreignersLaw.text`Zaświadczenia не видають у випадках ${foreignersLaw.article("168", "Art. 168")} ust. 1 і ${foreignersLaw.article("168a", "Art. 168a")} ust. 1; до нього не застосовують dział VII KPA, а його wzór визначає rozporządzenie.`,
        },
      ],
      legalEffect:
        "Стаття легалізує лише pobyt у межах прямо названого періоду й умов. Zaświadczenie не є zezwoleniem, документом для перетину кордону чи самостійною підставою роботи.",
      foreignersCase:
        "Збережіть UPO, zaświadczenie з QR, докази усунення braków і всі рішення про zawieszenie. Для роботи та повторного в’їзду завжди перевіряйте окрему правову підставу.",
    },
  ],
})
