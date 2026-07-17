import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-238",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("238", "Art. 238 § 1–4")} регулює випадок невнесення zaliczka: бюджет суду тимчасово покриває потрібні wydatki, сума стає należnością budżetu państwa, а сторона має повернути її; для особи за кордоном строк wezwanie не може бути коротшим за два місяці, а безрезультатний сплив веде до postanowienie про стягнення без wstrzymania postępowania.`,
          sourceLocator: "Art. 238 § 1–4",
        },
      ],
      summary:
        "Несплачений аванс може бути тимчасово покритий бюджетом суду, але сума стає боргом сторони; для особи за кордоном діє мінімальний двомісячний строк wezwanie.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Перевірте, чи сторона була зобов’язана внести zaliczka, чи бюджет її авансував, і який строк надано після wezwanie; для проживання за кордоном — не менше двох місяців.",
        },
        {
          locator: "§ 3",
          explanation:
            "Після безрезультатного спливу строку суд може на posiedzeniu niejawnym видати postanowienie про стягнення, не зупиняючи перебіг справи.",
        },
        {
          locator: "§ 4",
          explanation: ppsaLaw.text`Правила ${ppsaLaw.article("238", "§ 1–3")} не застосовуються, якщо невиконання czynność з ${ppsaLaw.article("237", "Art. 237 § 1")} є підставою для zawieszenie postępowania.`,
        },
      ],
      legalEffect: ppsaLaw.text`${ppsaLaw.article("238", "Art. 238")} описує механізм повернення бюджетної суми, але не усуває необхідності перевірити належність первісного обов’язку сплатити zaliczka та виняток із ${ppsaLaw.article("238", "§ 4")}.`,
      foreignersCase:
        "Якщо іноземець проживає за кордоном і не сплатив zaliczka, перевірте doręczenie wezwanie, мінімум двох місяців і те, чи справа не підпадає під виняток для zawieszenie.",
    },
  ],
})
