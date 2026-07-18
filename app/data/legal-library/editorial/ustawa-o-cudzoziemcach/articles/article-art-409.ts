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
      provisionId: "ustawa-o-cudzoziemcach-art-409",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("409", "Art. 409")} ust. 1 прямо передбачає, що minister właściwy do spraw wewnętrznych у drodze rozporządzenia створює й ліквідовує strzeżone ośrodki та визначає їх підпорядкування Straży Granicznej; може також визначити час, необхідний для організації ośrodek.`,
          sourceLocator: "Art. 409 ust. 1",
        },
        {
          kind: "practical-inference",
          text: "Це організаційна норма про мережу місць утримання, а не самостійна підстава для umieszczenia конкретного cudzoziemca.",
          sourceLocator: "Art. 409 ust. 1–2",
        },
      ],
      summary:
        "Стаття визначає повноваження ministra właściwego do spraw wewnętrznych щодо створення й ліквідації strzeżone ośrodki, визначення підпорядкування та приміщень для areszt dla cudzoziemców.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Minister у drodze rozporządzenia створює та ліквідовує strzeżone ośrodki, визначає орган Straży Granicznej, якому вони підпорядковуються, і може визначити час на їх організацію.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Окремим zarządzeniem minister визначає приміщення, у яких виконується areszt dla cudzoziemców.",
        },
      ],
      legalEffect:
        "Норма встановлює адміністративну організацію strzeżone ośrodki та areszty. Вона сама не вирішує, чи можна помістити особу до такого місця.",
      foreignersCase: foreignersLaw.text`У справі про umieszczenie перевіряйте насамперед postanowienie sądu та індивідуальні підстави, а ${foreignersLaw.article("409", "Art. 409")} використовуйте лише для розуміння структури відповідного місця.`,
    },
  ],
})
