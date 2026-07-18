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
      provisionId: "ustawa-o-cudzoziemcach-art-435",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("435", "Art. 435")} ust. 1: «W wykazie umieszcza się i przechowuje dane cudzoziemca, jeżeli zachodzi co najmniej jedna z następujących przesłanek».`,
          sourceLocator: "Art. 435 ust. 1",
        },
        {
          kind: "practical-inference",
          text: "Wpis вимагає щонайменше однієї законної przesłanka, але не кожна згадана обставина автоматично доводиться самим записом.",
          sourceLocator: "Art. 435 ust. 1–2",
        },
      ],
      summary:
        "Стаття перелічує підстави внесення даних cudzoziemca до wykaz: заборона в’їзду, окремі вироки, безпека й інтерес Польщі, передача до іншої держави, санкційні списки та інші прямо названі обставини; wpis може бути без відома й згоди особи.",
      rules: [
        {
          locator: "ust. 1 pkt 1–2",
          explanation: foreignersLaw.text`Підставою може бути decyzja o zobowiązaniu do powrotu із zakaz wjazdu, postanowienie з ${foreignersLaw.article("303b", "Art. 303b")} ust. 1 або prawomocne skazanie у Польщі за przestępstwo umyślne чи przestępstwo skarbowe на karę grzywny або pozbawienia wolności; lit. b і c позначені як «uchylona».`,
        },
        {
          locator: "ust. 1 pkt 3–8",
          explanation: foreignersLaw.text`Також названі міжнародні зобов’язання, оборона й безпека, рішення ${foreignersLaw.article("440a", "Art. 440a")}, передача до третьої держави чи держави ЄС/EFTA/Швейцарії, санкційний список та рішення Ради ЄС.`,
        },
        {
          locator: "ust. 2",
          explanation: "Дані можна внести без знання та згоди cudzoziemiec.",
        },
      ],
      legalEffect:
        "Внесення до wykaz може бути наслідком окремого рішення, вироку, передачі або безпекової підстави й впливати на в’їзд та pobyt. Для висновку потрібна конкретна przesłanka і строк за наступними статтями.",
      foreignersCase: foreignersLaw.text`Встановіть точний pkt, документ або вирок, на якому ґрунтується wpis, і перевірте винятки, строк та можливість отримати або виправити дані за ${foreignersLaw.article("444", "Art. 444")}–${foreignersLaw.article("447", "447")}.`,
    },
  ],
})
