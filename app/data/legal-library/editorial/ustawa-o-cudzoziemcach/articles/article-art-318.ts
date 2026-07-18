import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-318",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 318 ust. 1 передбачає в decyzji o zobowiązaniu do powrotu zakaz ponownego wjazdu до Польщі та інших держав Schengen із визначенням строку; у визначених випадках із terminu dobrowolnego wyjazdu орган може відмовитися від заборони за високої ймовірності дотримання права, а ust. 2 позначений як «(uchylony)»; ust. 3 встановлює випадки заборони лише на територію Польщі.",
          sourceLocator: "Art. 318 ust. 1–3",
        },
      ],
      summary:
        "Стаття регулює заборону повторного в’їзду, можливість не накладати її за спеціальних умов та випадки обмеження заборони Польщею.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Звичайне рішення містить заборону для Польщі та інших держав Schengen і строк; в окремому рішенні можна від неї відступити за умовами статті.",
        },
        {
          locator: "ust. 1a–1d",
          explanation:
            "Для odstąpienie оцінюються обставини підстави Art. 302 ust. 1 та актуальний реальний ризик порушення права; ust. 1a не застосовується, якщо протягом двох попередніх років уже було рішення з таким odstąpienie, а ust. 1d встановлює умовний zakaz на випадок невиїзду з Schengen або незаконного перетинання кордону.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Ust. 2 є uchylony; ust. 3 називає випадки, коли заборона стосується лише території Польщі.",
        },
      ],
      legalEffect:
        "Заборона і її територіальний обсяг залежать від виду рішення та конкретних обставин; позначення uchylony не можна використовувати як чинну норму.",
      foreignersCase:
        "Перевірте, на які держави поширюється zakaz, його строк і чи мотивовано відступ або спеціальний режим; окремо врахуйте дату попереднього відступу.",
    },
  ]),
})
