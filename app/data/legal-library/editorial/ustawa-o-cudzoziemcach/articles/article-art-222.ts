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
      provisionId: "ustawa-o-cudzoziemcach-art-222",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("222", "Art. 222")} уповноважує ministra właściwego do spraw wewnętrznych визначити в drodze rozporządzenia wzór wniosku про zezwolenie na pobyt rezydenta długoterminowego UE, кількість і технічні вимоги до фотографій, wzór stempla про подання wniosku, спосіб pobierania odcisków та спосіб запису і передачі даних для персоналізації karty pobytu.`,
          sourceLocator: "Art. 222 ust. 1 pkt 1–5",
        },
        {
          kind: "statute-text",
          text: "У розпорядженні міністр має врахувати потребу sprawność postępowania та можливість skutecznej weryfikacji przesłanek udzielenia zezwolenia.",
          sourceLocator: "Art. 222 ust. 2",
        },
      ],
      summary:
        "Стаття делегує розпорядженню технічні правила для wniosek, фотографій, stempla, відбитків і персоналізації karty pobytu.",
      rules: [
        {
          locator: "ust. 1 pkt 1–3",
          explanation: foreignersLaw.text`Формуляр, кількість і вимоги до фотографій та wzór stempla треба перевіряти в чинному rozporządzenie, а не виводити лише з ${foreignersLaw.article("222", "Art. 222")}.`,
        },
        {
          locator: "ust. 1 pkt 4–5; ust. 2",
          explanation:
            "Підзаконний акт також визначає технічний спосіб відбитків і передачі даних, орієнтуючись на ефективність процедури та перевірку умов дозволу.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("222", "Art. 222")} створює підставу для технічного регулювання, але сам не встановлює конкретної кількості фотографій, форми чи способу дії.`,
      foreignersCase:
        "Перед поданням звірте wniosek, фотографії, stempel і процедуру odciski з чинним rozporządzenie. Не вважайте перелік делегованих питань готовими вимогами без перевірки підзаконного акта.",
    },
  ],
})
