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
      provisionId: "ustawa-o-cudzoziemcach-art-285",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Minister właściwy do spraw wewnętrznych визначає w drodze rozporządzenia wzory karty pobytu, polskiego dokumentu podróży, polskiego dokumentu tożsamości, tymczasowego polskiego dokumentu podróży, документа «zgoda na pobyt tolerowany», форм zgłoszenia utraty або uszkodzenia та zaświadczeń o utracie, zwrocie і zatrzymaniu, а також wzory wniosków про видачу або wymianę названих документів.",
          sourceLocator: "Art. 285 ust. 1 pkt 1–2",
        },
        {
          kind: "statute-text",
          text: "Те саме rozporządzenie визначає кількість і технічні вимоги до фотографій, спосіб unieważniania, pobierania odcisków та передачі даних для персоналізації документів; ураховуються читабельність, необхідні персональні дані й усунення дефектного документа.",
          sourceLocator: "Art. 285 ust. 1 pkt 3–6, ust. 2",
        },
      ],
      summary:
        "Стаття делегує міністру технічне визначення форм документів, заяв, фото, відбитків, unieważniania та персоналізації.",
      rules: [
        {
          locator: "ust. 1 pkt 1–2",
          explanation:
            "Актуальний wzór wniosku або dokumentu потрібно брати з чинного rozporządzenia, а не відтворювати за старим бланком.",
        },
        {
          locator: "ust. 1 pkt 3–6",
          explanation:
            "Технічні вимоги до фото, відбитків і передачі даних також належать до підзаконного регулювання.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Критерії розпорядження мають забезпечувати повноту, потрібний обсяг даних і можливість усунути wadliwy dokument.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("285", "Art. 285")} не встановлює всі деталі бланка безпосередньо; для подання треба перевірити актуальне розporządzenie та його перехідні правила.`,
      foreignersCase:
        "Перед заявою завантажте чинний офіційний formularz, перевірте кількість і технічні вимоги до фото та не використовуйте стару версію без перевірки.",
    },
  ],
})
