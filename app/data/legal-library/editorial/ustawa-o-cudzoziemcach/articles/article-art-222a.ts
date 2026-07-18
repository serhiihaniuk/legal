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
      provisionId: "ustawa-o-cudzoziemcach-art-222a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Якщо заяву подано під час легального перебування і вона не має braków formalnych або їх усунено в строк, wojewoda видає zaświadczenie про подання, а перебування в Польщі вважається легальним від дня подання до дня, коли рішення стане остаточним.",
          sourceLocator: "Art. 222a ust. 1",
        },
        {
          kind: "statute-text",
          text: "Легалізаційний наслідок не діє під час zawieszenia postępowania на заяву сторони.",
          sourceLocator: "Art. 222a ust. 2",
        },
        {
          kind: "statute-text",
          text: "Zaświadczenie містить ідентифікаційні дані, документ особи, дату подання, інформацію про легальність і zawieszenie, дані органу, номер, підпис працівника та kod QR; воно має електронну печатку Szefa Urzędu, є безоплатним і вручається через MOS або під час особистої явки.",
          sourceLocator: "Art. 222a ust. 3–8",
        },
      ],
      summary:
        "Стаття пов’язує своєчасну формально повну заяву з офіційним zaświadczeniem і законністю перебування на час провадження.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Потрібні дві передумови: подання під час легального pobytu та відсутність braków formalnych або їх своєчасне усунення. Zawieszenie на заяву сторони перериває спеціальний наслідок щодо легальності перебування.",
        },
        {
          locator: "ust. 3–8",
          explanation:
            "Zaświadczenie не є звичайним zaświadczeniem з działu VII KPA. Закон окремо визначає його зміст, електронну печатку, безоплатність і спосіб вручення.",
        },
        {
          locator: "ust. 9",
          explanation:
            "Технічний wzór zaświadczenia встановлює minister właściwy do spraw wewnętrznych у rozporządzeniu.",
        },
      ],
      legalEffect:
        "За виконання умов перебування вважається легальним до остаточності рішення. Саме zaświadczenie підтверджує подання, але не замінює окремої перевірки права на працю або перетин кордону.",
      foreignersCase:
        "Збережіть UPO, wezwanie щодо braków formalnych, доказ їх своєчасного усунення та саме zaświadczenie з MOS. Якщо провадження зупиняли на заяву сторони, окремо позначте цей період.",
    },
  ],
})
