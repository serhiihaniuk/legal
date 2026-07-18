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
      provisionId: "ustawa-o-cudzoziemcach-art-204",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("204", "Art. 204")} делегує ministrowi właściwemu do spraw wewnętrznych визначити розпорядженням форму wniosku для pobytu stałego, технічні вимоги до фотографії й електронних документів у MOS, а також правила відбитків, підпису та даних для karty pobytu.`,
          sourceLocator: "Art. 204 ust. 1–2",
        },
      ],
      summary:
        "Ustawa задає юридичний зміст електронної процедури, а rozporządzenie — актуальні технічні параметри. Старий wzór stempla більше не є предметом цієї делегації.",
      rules: [
        {
          locator: "Art. 204 ust. 1 pkt 1–4",
          explanation:
            "Розпорядження визначає wzór wniosku, параметри фотографії, спосіб її додавання до wniosku через MOS та вимоги до електронних документів і цифрових копій.",
        },
        {
          locator: "Art. 204 ust. 1 pkt 5–8",
          explanation:
            "Окремо встановлюються спосіб зняття відбитків, передавання даних для персоналізації karty pobytu, wzór informacji про відбитки або їх відсутність і форму для wzoru podpisu.",
        },
        {
          locator: "Art. 204 ust. 2",
          explanation:
            "Технічні правила мають підтримувати справне провадження й ефективну перевірку умов zezwolenia na pobyt stały.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("204", "Art. 204")} не створює підстави pobytu stałego й не визначає результат справи; він уповноважує врегулювати технічну реалізацію процедури.`,
      foreignersCase:
        "Перед поданням перевірте чинну форму, параметри файлів і спосіб підпису за rozporządzeniem, застосовним на дату подання. Окремо підготуйте докази матеріальної підстави.",
    },
  ],
})
