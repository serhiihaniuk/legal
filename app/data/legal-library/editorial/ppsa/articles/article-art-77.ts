import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-77",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Одержувач підтверджує odbiór і дату власноручним підписом; якщо він не може або не хоче підписати, doręczający зазначає дату вручення та причину відсутності підпису. Станом на 18.07.2026 отримання pismo w formie dokumentu elektronicznego підтверджують способом, визначеним у Art. 74a § 5 або § 10. Скасування § 1a набере чинності лише 1.10.2029.",
          sourceLocator: "Art. 77 § 1–2, przypisy 46–47",
        },
      ],
      summary:
        "Підтвердження doręczenie має показувати факт, дату та спосіб вручення; для електронного документа чинний § 1a прямо відсилає до Art. 74a § 5 або § 10.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Підпис або зафіксована причина його відсутності є частиною підтвердження odbiór.",
        },
        {
          locator: "§ 1a",
          explanation:
            "Для pismo w formie dokumentu elektronicznego підтвердження отримання відбувається за Art. 74a § 5 або § 10. Позначка «uchylony» у przypis 47 описує майбутню зміну з 1.10.2029.",
        },
        {
          locator: "§ 2",
          explanation:
            "Doręczający зазначає спосіб вручення на підтвердженні та день на врученому pismo і підписує запис.",
        },
      ],
      legalEffect:
        "Документ про вручення є ключовим доказом дати, але його оцінка залежить від повноти записів і способу doręczenie.",
      foreignersCase:
        "У справі pobyt отримайте копію potwierdzenie odbioru, перевірте дату й спосіб вручення та не покладайтеся на усну інформацію.",
    },
  ]),
})
