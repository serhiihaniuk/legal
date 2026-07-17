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
      provisionId: "ustawa-o-cudzoziemcach-art-204",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("204", "Art. 204")} делегує ministrowi właściwemu do spraw wewnętrznych визначення в rozporządzeniu wzoru wniosku про pobyt stały, кількості та технічних вимог до фотографій, wzoru stempla, способу зняття відбитків і способу запису та передачі даних для персоналізації karty pobytu.`,
          sourceLocator: "Art. 204 ust. 1 pkt 1–5",
        },
        {
          kind: "statute-text",
          text: "При виданні розпорядження міністр має врахувати sprawność postępowania та ефективну перевірку przesłanek udzielenia zezwolenia.",
          sourceLocator: "Art. 204 ust. 2",
        },
      ],
      summary:
        "Стаття є делегацією для технічних форм і способів обробки даних у процедурі pobyt stały.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Актуальний wzór formularza, вимоги до фото та технічні правила треба перевіряти в rozporządzenie, а не виводити лише з ${foreignersLaw.article("204", "Art. 204")}.`,
        },
        {
          locator: "ust. 2",
          explanation:
            "Підзаконні правила мають забезпечувати ефективність провадження та перевірку умов, але не можуть замінити матеріальні przesłanki закону.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("204", "Art. 204")} не встановлює нової підстави для pobyt stały і не називає кількості фотографій; він визначає межі технічного rozporządzenie.`,
      foreignersCase:
        "Перед поданням звірте чинний formularz, фото, stamp і технічні вимоги в підзаконному акті, застосовному до дати wniosku.",
    },
  ],
})
