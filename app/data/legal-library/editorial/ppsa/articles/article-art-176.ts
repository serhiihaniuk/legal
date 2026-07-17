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
      provisionId: "ppsa-art-176",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Skarga kasacyjna повинна вказати оскаржене orzeczenie і обсяг оскарження, навести та обґрунтувати підстави касації та містити wniosek про uchylenie або зміну з позначенням бажаного обсягу; крім того, вона має відповідати вимогам pismo strony та містити wniosek про розгляд на rozprawa або заяву про відмову від неї.",
          sourceLocator: "Art. 176 § 1–2",
        },
      ],
      summary:
        "Стаття дає мінімальний зміст skarga kasacyjna: ідентифікація orzeczenie, підстави з обґрунтуванням, конкретний wniosek і позиція щодо rozprawa.",
      rules: [
        {
          locator: "§ 1 pkt 1",
          explanation:
            "Назвіть оскаржене orzeczenie і чітко вкажіть, чи оскаржується воно повністю або частково.",
        },
        {
          locator: "§ 1 pkt 2–3",
          explanation:
            "Кожну підставу треба навести й обґрунтувати, а wniosek про uchylenie або зміну має показувати бажаний обсяг.",
        },
        {
          locator: "§ 2",
          explanation:
            "Додайте вимоги pismo strony і wniosek про rozprawa або oświadczenie про відмову від неї.",
        },
      ],
      legalEffect:
        "Стаття визначає змістовий каркас skarga kasacyjna; вона не замінює професійну оцінку підстав, строку та інших вимог допустимості.",
      foreignersCase: ppsaLaw.text`У касації після справи про pobyt складіть окрему перевірку: яке orzeczenie, весь чи частковий обсяг, яка з ${ppsaLaw.article("174", "art. 174")} підстава, який wniosek і чи потрібна rozprawa. Не підміняйте ці елементи загальною незгодою з рішенням.`,
    },
  ],
})
