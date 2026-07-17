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
      provisionId: "ustawa-o-cudzoziemcach-art-426",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("426", "Art. 426")} ust. 1: «Nadzór nad legalnością i prawidłowością pobytu cudzoziemców w strzeżonych ośrodkach i aresztach dla cudzoziemców sprawuje sędzia penitencjarny sądu okręgowego».`,
          sourceLocator: "Art. 426 ust. 1",
        },
        {
          kind: "practical-inference",
          text: "Нагляд sędzia penitencjarny охоплює умови і права перебування, але не перетворює його на орган, який автоматично замінює рішення Straży Granicznej.",
          sourceLocator: "Art. 426 ust. 2–5",
        },
      ],
      summary:
        "Sędzia penitencjarny контролює законність і правильність перебування у strzeżony ośrodek та areszt, зокрема умови, медичну опіку, права, skargi, дисциплінарні kary й безпеку.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Компетентним є sędzia penitencjarny sądu okręgowego за місцем ośrodek або areszt; він оцінює перелічені умови, права й дії адміністрації.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Sędzia має право без обмежень відвідувати місце, переглядати документи, вимагати пояснення та приватно розмовляти з cudzoziemcy.",
        },
        {
          locator: "ust. 4–7",
          explanation:
            "Якщо потрібне рішення поза компетенцією sędziego, він передає spostrzeżenia органу Straży Granicznej. Орган повідомляє про дії у 14-денний або інший визначений sędzia строк; за незадовільної відповіді чи повторних rażące uchybienia sędzia звертається до Komendant Główny Straży Granicznej, а далі за умовами норми — до minister.",
        },
      ],
      legalEffect:
        "Норма створює penitencjarny нагляд і канал реагування на недоліки функціонування. Вона не описує окремий засіб оскарження кожного адміністративного рішення.",
      foreignersCase: foreignersLaw.text`Для проблем із умовами або правами сформулюйте конкретну skarga чи wniosek і додайте дати, місце, свідків та документи; ${foreignersLaw.article("426", "Art. 426")} показує межі наглядового каналу.`,
    },
  ],
})
