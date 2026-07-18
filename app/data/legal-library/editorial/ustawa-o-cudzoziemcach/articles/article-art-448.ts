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
      provisionId: "ustawa-o-cudzoziemcach-art-448",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("448", "Art. 448")}: «W zakresie dotyczącym danych umieszczanych w Systemie Informacyjnym Schengen przepisy ${foreignersLaw.article("444", "art. 444")}–${foreignersLaw.article("447", "447")} stosuje się tylko do danych cudzoziemca umieszczonych przez Szefa Urzędu do celów odmowy wjazdu i pobytu».`,
          sourceLocator: "Art. 448",
        },
        {
          kind: "practical-inference",
          text: foreignersLaw.text`Не кожний SIS-запис охоплюється процедурою ${foreignersLaw.article("444", "Art. 444")}–${foreignersLaw.article("447", "447")}; спочатку треба встановити, хто і для якої мети його вніс.`,
          sourceLocator: "Art. 448",
        },
      ],
      summary: foreignersLaw.text`Для даних у SIS правила ${foreignersLaw.article("444", "Art. 444")}–${foreignersLaw.article("447", "447")} застосовуються лише до записів, які Szef Urzędu вніс для цілей відмови у в’їзді та pobyt.`,
      rules: [
        {
          locator: "Art. 448",
          explanation:
            "Перед використанням спеціального wniosek треба встановити джерело запису та його мету в SIS.",
        },
      ],
      legalEffect:
        "Стаття обмежує сферу спеціальної процедури доступу, виправлення й видалення; вона не поширює її автоматично на кожен SIS alert іншого органу чи держави.",
      foreignersCase:
        "У запиті вкажіть, що дані внесені Szef Urzędu для odmowa wjazdu i pobytu, або попросіть уточнити орган-джерело та інший доступний механізм.",
    },
  ],
})
