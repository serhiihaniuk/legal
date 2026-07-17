import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "261",
      provisionId: "kpa-art-261",
      reviewStatus: "reviewed",
      summary:
        "Стаття регулює несплату наперед opłat і kosztów postępowania: орган дає додатковий строк від семи до чотирнадцяти днів, після чого може повернути заяву або не виконати платну дію. Водночас вона називає три випадки, коли справу треба розглянути попри несплату.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Якщо належні наперед суми не сплачені, орган установлює строк не коротший за 7 і не довший за 14 днів.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Після безрезультатного строку podanie повертають або платну дію залишають невиконаною; на postanowienie o zwrocie podania służy zażalenie.",
        },
        {
          locator: "§ 4 pkt 1–2",
          explanation:
            "Попри несплату орган розглядає подання, якщо цього вимагають суспільні міркування чи важливий інтерес сторони або якщо подання є дією з terminem zawitym.",
        },
        {
          locator: "§ 4 pkt 3",
          explanation:
            "Подання також розглядають попри несплату, коли його внесла особа, яка проживає за кордоном.",
        },
      ],
      legalEffect:
        "Несплата може припинити рух заяви чи окремої дії після додаткового строку, але не в прямо названих винятках; повернення можна оскаржити zażaleniem.",
      foreignersCase: kpaLaw.text`У sprawie pobytowej іноземець має відрізняти wezwanie do uiszczenia opłaty від вимоги подати доказ матеріальної умови. Якщо він проживає за кордоном або діє в строку zawitym, потрібно перевірити обов'язок органу за ${kpaLaw.article("261", "§ 4")}.`,
    },
  ],
})
