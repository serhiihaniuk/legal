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
      provisionId: "ustawa-o-cudzoziemcach-art-442",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("442", "Art. 442")} ust. 1: «Sąd, który skazał cudzoziemca ... przekazuje Szefowi Urzędu odpis prawomocnego wyroku».`,
          sourceLocator: "Art. 442 ust. 1",
        },
        {
          kind: "practical-inference",
          text: "Передача вироку до Szef Urzędu не є новим вироком і не доводить без додаткової перевірки, що дані вже внесені до wykaz.",
          sourceLocator: "Art. 442 ust. 1–5",
        },
      ],
      summary:
        "Sąd передає Szef Urzędu копії prawomocne wyroki та змін, рішення про warunkowe przedterminowe zwolnienie, інформацію про сплату штрафу й доступні документи особи.",
      rules: [
        {
          locator: "ust. 1–3",
          explanation:
            "Суд передає prawomocny wyrok за przestępstwo umyślne або przestępstwo skarbowe, його зміну, а також wyrok із warunkowe zawieszenie wykonania та рішення про warunkowe przedterminowe zwolnienie.",
        },
        {
          locator: "ust. 4",
          explanation:
            "Суд повідомляє про сплату grzywna, якщо таке покарання призначено.",
        },
        {
          locator: "ust. 5",
          explanation:
            "За наявності суд передає копії документів особи, а може також фото та відбитки пальців.",
        },
      ],
      legalEffect:
        "Стаття забезпечує надходження судової інформації до Szef Urzędu для завдань ustawy. Вона не визначає сама строк або необхідність wpis.",
      foreignersCase:
        "Якщо кримінальний вирок впливає на справу pobyt або wykaz, звірте його остаточність, вид покарання, оплату grzywna та ідентифікаційні дані.",
    },
  ],
})
