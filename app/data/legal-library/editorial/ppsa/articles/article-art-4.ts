import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-4",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 4 передбачає: «Sądy administracyjne rozstrzygają spory o właściwość między organami jednostek samorządu terytorialnego».",
          sourceLocator: "Art. 4",
        },
      ],
      summary:
        "Стаття надає sądom administracyjnym повноваження вирішувати визначені спори про właściwość та kompetencje між публічними органами.",
      rules: [
        {
          locator: "Art. 4",
          explanation:
            "Охоплено спори про właściwość між organami jednostek samorządu terytorialnego та samorządowymi kolegiami odwoławczymi, якщо окремий закон не встановлює інакше.",
        },
        {
          locator: "Art. 4",
          explanation:
            "Також охоплено spory kompetencyjne між органами samorządu та organami administracji rządowej.",
        },
      ],
      legalEffect:
        "Норма описує спеціальну функцію суду щодо конфлікту між органами; вона не перетворює звичайну справу іноземця на спір про компетенцію.",
      foreignersCase:
        "Якщо в матеріалах справи про pobyt два органи заперечують свою właściwość, відокремте саме питання компетенції від спору про законність decyzji і перевірте, чи застосовується Art. 4.",
    },
  ]),
})
