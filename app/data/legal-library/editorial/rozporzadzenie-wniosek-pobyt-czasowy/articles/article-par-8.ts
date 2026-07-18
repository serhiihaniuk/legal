import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const regulationLaw = createLegalTextAuthor(
  "rozporzadzenie-wniosek-pobyt-czasowy"
)

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"rozporzadzenie-wniosek-pobyt-czasowy">({
  documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
  editionId: "rozporzadzenie-wniosek-pobyt-czasowy-2026-553",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-par-8",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: regulationLaw.text`${regulationLaw.paragraph("8", "§ 8")} вимагає записувати дані для карти pobytu в електронній системі з ${foreignersLaw.article("449", "art. 449")} ust. 1 ustawy; якщо відбитки фізично неможливо зняти, у системі фіксуються їх відсутність і причина, після чого дані та інформація передаються системою для персоналізації карти.`,
          sourceLocator: "§ 8 ust. 1–3",
        },
      ],
      summary: regulationLaw.text`${regulationLaw.paragraph("8", "§ 8")} описує, як дані для карти pobytu зберігаються й передаються через teleinformatyczny system, включно з випадком відсутності відбитків.`,
      rules: [
        {
          locator: "ust. 1",
          explanation: regulationLaw.text`Дані, які розміщуються на karcie pobytu, фіксуються електронно у системі, згаданій в ${foreignersLaw.article("449", "art. 449")} ust. 1 ustawy.`,
        },
        {
          locator: "ust. 2",
          explanation:
            "Якщо pobranie відбитків було фізично неможливим, система повинна містити інформацію про їх відсутність і причину.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Передача даних для spersonalizowania karty pobytu відбувається через цю систему.",
        },
      ],
      legalEffect:
        "Норма організовує технічне виготовлення карти pobytu та фіксацію винятку з відбитками. Вона не є рішенням про надання zezwolenia.",
      foreignersCase:
        "Якщо відбитки не зняли через фізичну неможливість, перевірте, що причина внесена до інформації та системи. Оцінку підстави pobytu проводьте окремо від етапу персоналізації карти.",
    },
  ],
})
