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
      provisionId: "ustawa-o-cudzoziemcach-art-206",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Якщо wniosek o pobyt stały подано під час legalnego pobytu й він не має braków formalnych або їх усунуто у строк, ${foreignersLaw.article("206", "Art. 206")} зобов’язує wojewodę видати zaświadczenie та визнає pobyt легальним від дня подання до ostatecznej decyzji.`,
          sourceLocator: "Art. 206 ust. 1–9",
        },
      ],
      summary:
        "Zaświadczenie підтверджує подання й описує тимчасовий процесуальний ефект. Воно замінило stempel у паспорті, але не є дозволом на постійне проживання.",
      rules: [
        {
          locator: "Art. 206 ust. 1–2",
          explanation:
            "Потрібні одночасно legalny pobyt на момент подання та формальна повнота. Тоді pobyt вважається легальним до остаточного рішення; під час zawieszenia postępowania на заяву сторони цей ефект не діє.",
        },
        {
          locator: "Art. 206 ust. 3–7",
          explanation:
            "Zaświadczenie містить дані особи й документа, дату подання, правовий ефект, дані organu, номер, підпис і kod QR. Воно має kwalifikowaną pieczęć elektroniczną Szefa Urzędu, видається без opłaty skarbowej та вручається через MOS або під час особистої явки.",
        },
        {
          locator: "Art. 206 ust. 8–9",
          explanation:
            "До zaświadczenia не застосовують dział VII KPA, а його wzór визначає rozporządzenie.",
        },
      ],
      legalEffect:
        "Стаття тимчасово легалізує pobyt у межах названих умов. Zaświadczenie не є zezwoleniem, документом для перетину кордону чи автоматичним підтвердженням права на роботу.",
      foreignersCase:
        "Збережіть UPO, zaświadczenie з QR, докази усунення braków і рішення про можливе zawieszenie. Для подорожі та роботи перевірте окремі правові підстави.",
    },
  ],
})
