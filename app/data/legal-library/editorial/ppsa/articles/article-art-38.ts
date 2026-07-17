import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-38",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 38 передбачає: «Za stronę, która nie może się podpisać, podpisuje pełnomocnictwo osoba przez nią upoważniona, z wymienieniem przyczyny, dla której strona sama się nie podpisała».",
          sourceLocator: "Art. 38",
        },
      ],
      summary:
        "Якщо сторона не може підписати pełnomocnictwo, за неї підписує уповноважена особа, зазначивши причину, чому сторона не підписала його сама.",
      rules: [
        {
          locator: "Art. 38",
          explanation:
            "Потрібні одночасно уповноважена особа-підписант і вказання причини, через яку сторона не підписала документ самостійно.",
        },
      ],
      legalEffect:
        "Норма дає спеціальний спосіб підписання доручення, але не скасовує вимоги довести повноваження особи, яка підписала документ.",
      foreignersCase:
        "Якщо іноземець фізично не може підписати pełnomocnictwo, вкажіть уповноважену особу та конкретну причину відсутності власного підпису в документі.",
    },
  ]),
})
