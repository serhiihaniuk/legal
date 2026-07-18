import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const SIS_2018_1861_URL = "https://eur-lex.europa.eu/eli/reg/2018/1861/oj"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-448b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("448b", "Art. 448b")} ust. 1: «Szef Urzędu przekazuje Komendantowi Głównemu Policji informacje ... w terminie 7 dni» від отримання запиту про консультації.`,
          sourceLocator: "Art. 448b ust. 1",
        },
        {
          kind: "practical-inference",
          text: "Сім і десять днів — це різні строки для двох органів у консультаційному ланцюгу, а не загальний строк вирішення всієї справи cudzoziemiec.",
          sourceLocator: "Art. 448b ust. 1–2",
        },
      ],
      summary:
        "Коли інша держава Schengen просить консультацію про SIS alert, Szef Urzędu передає правову й фактичну підставу Komendant Główny Policji протягом 7 днів, а той передає її іншій державі протягом 10 днів; за видачі іншою державою документа дані видаляються.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Szef Urzędu має 7 днів від отримання звернення про консультації за ${foreignersLaw.external("art. 27", SIS_2018_1861_URL)} rozporządzenia nr 2018/1861.`,
        },
        {
          locator: "ust. 2",
          explanation:
            "Komendant Główny Policji передає інформацію іншій державі протягом 10 днів від її звернення про консультації.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Szef Urzędu видаляє дані з SIS, якщо через Policja отримує інформацію про виданий або продовжений іншою державою документ pobyt чи довгострокову візу.",
        },
      ],
      legalEffect:
        "Стаття встановлює міжорганізаційні строки та наслідок для SIS за конкретного результату консультацій. Вона не визначає строк розгляду заяви на pobyt в іншій державі.",
      foreignersCase:
        "Зафіксуйте дату звернення іншої держави та передачі інформації, а також підтвердження видачі іноземного документа, якщо просите видалення SIS alert.",
    },
  ],
})
