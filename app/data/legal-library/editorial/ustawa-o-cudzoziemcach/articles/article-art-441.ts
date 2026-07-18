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
      provisionId: "ustawa-o-cudzoziemcach-art-441",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("441", "Art. 441")} ust. 1: «Prokurator lub organy administracji rządowej przekazują Szefowi Urzędu posiadane informacje» про обставини для wpis, рішення ${foreignersLaw.article("440a", "Art. 440a")}, usunięcie, zawieszenie або продовження.`,
          sourceLocator: "Art. 441 ust. 1",
        },
        {
          kind: "practical-inference",
          text: "Передача інформації органом є елементом обміну даними; вона сама по собі не замінює рішення або postanowienie, яке є підставою wpis.",
          sourceLocator: "Art. 441 ust. 1–2",
        },
      ],
      summary:
        "Prokurator і органи урядової адміністрації передають Szef Urzędu наявну інформацію та фото про підстави внесення, продовження, zawieszenie або видалення даних; рішення чи postanowienie передають після набрання остаточності за умовами статті.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Можуть передаватися фото, odciski linii papilarnych і копії документів разом із інформацією про релевантні обставини.",
        },
        {
          locator: "ust. 2",
          explanation: foreignersLaw.text`Орган, який видав рішення або postanowienie про wpis, zawieszenie чи usunięcie, передає його Szef Urzędu після остаточності, якщо не діє виняток негайного виконання або ${foreignersLaw.article("438", "Art. 438")} ust. 5.`,
        },
      ],
      legalEffect:
        "Норма забезпечує обмін даними між органами для ведення wykaz. Вона не встановлює самостійного рішення про заборону для cudzoziemiec.",
      foreignersCase:
        "З’ясуйте, який орган передав інформацію та який остаточний документ її підтверджує; просіть відокремити джерело даних від рішення про wpis.",
    },
  ],
})
