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
      provisionId: "ustawa-o-cudzoziemcach-art-334",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("334", "Art. 334")} встановлює, кому може надаватися pomoc w dobrowolnym powrocie, що вона організовується на wniosek cudzoziemca і які строки подання заяви діють.`,
          sourceLocator: "Art. 334 ust. 1–11",
        },
      ],
      summary:
        "Komendant Główny Straży Granicznej організовує допомогу для добровільного повернення визначених законом категорій іноземців, але іноземець повинен подати wniosek у передбачений строк.",
      rules: [
        {
          locator: "ust. 1–4",
          explanation: foreignersLaw.text`Допомога доступна, зокрема, особі з decyzja про повернення і termin dobrowolnego wyjazdu, деяким особам без тримання, заявникам у справах ochrony międzynarodowej та особам з ${foreignersLaw.article("170", "Art. 170")} або ${foreignersLaw.article("176", "Art. 176")}.`,
        },
        {
          locator: "ust. 5–7",
          explanation: foreignersLaw.text`Строк залежить від ситуації: до завершення dobrowolny wyjazd, за 7 днів до строку з ${foreignersLaw.article("299", "Art. 299")} ust. 6 pkt 1 lit. b або протягом 5 днів у названих процедурах ochrony. Пропущений строк веде до залишення wniosek без розгляду.`,
        },
        {
          locator: "ust. 10–11",
          explanation:
            "Повторна допомога за загальним правилом можлива не раніше ніж через 2 роки, але закон передбачає винятки для окремих категорій.",
        },
      ],
      legalEffect:
        "Подання wniosek запускає організаційну процедуру, але саме по собі не гарантує допомогу і не замінює дотримання строку повернення.",
      foreignersCase:
        "Порівняйте тип рішення, дату його doręczenie, кінцевий строк доброчільного виїзду та дату подання wniosek; збережіть підтвердження передачі заяви через належний орган.",
    },
  ],
})
