import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-77",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Одержувач підтверджує odbiór і дату підписом; якщо не може або не хоче підписати, doręczający зазначає дату й причину. Doręczający також фіксує спосіб вручення та дату на pismo.",
          sourceLocator: "Art. 77 § 1–2",
        },
      ],
      summary:
        "Доказ doręczenie має показувати факт, дату та спосіб вручення; електронний § 1a у corpus містить редакційні позначки про зміну та uchylony варіант.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Підпис або зафіксована причина його відсутності є частиною підтвердження odbiór.",
        },
        {
          locator: "§ 1a",
          explanation:
            "Для електронної форми перевіряйте відповідний чинний режим підтвердження; текст corpus містить редакційні примітки.",
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
