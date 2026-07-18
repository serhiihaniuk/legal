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
      article: "66",
      provisionId: "kpa-art-66",
      reviewStatus: "reviewed",
      summary:
        "Стаття регулює podanie, у якому поєднано кілька справ, що належать різним organom, і визначає порядок окремого подання решти вимог.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Organ розглядає частину podania у своїй właściwości та повідомляє заявника, що щодо інших справ треба подати odrębne podanie до właściwego organu.",
        },
        {
          locator: "przepis o informacji RODO",
          explanation: kpaLaw.text`До такого zawiadomienia застосовується обов’язок передати актуальну інформацію про обробку персональних даних за ${kpaLaw.article("65", "art. 65 § 1a")}.`,
        },
        {
          locator: "§ 2",
          explanation:
            "Окреме podanie, внесене протягом чотирнадцяти днів від doręczenia zawiadomienia, вважається поданим у день первинного podania.",
        },
        {
          locator: "§ 3–4",
          explanation:
            "Якщо właściwego organu не можна встановити або sprawa należy do sądu powszechnego, podanie zwraca się postanowieniem з правом zażalenia; не можна послатися на właściwość sądu, якщо суд уже визнав себе niewłaściwym.",
        },
      ],
      legalEffect:
        "Норма розділяє змішане podanie між компетентними органами й за виконання чотирнадцятиденного строку зберігає первинну дату для окремої вимоги.",
      foreignersCase:
        "Це загальне правило може діяти, коли одне письмо іноземця одночасно містить різні вимоги, наприклад щодо провадження і окремої компетенції іншого organu.",
    },
  ],
})
