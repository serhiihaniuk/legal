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
      provisionId: "ustawa-o-cudzoziemcach-art-107",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("107", "Art. 107")} делегує ministrowi właściwemu do spraw wewnętrznych визначити rozporządzeniem wzory wniosku, załączników, спеціальних паперових заяв і згоди, технічні вимоги до фотографій та електронних документів, а також правила відбитків, підпису й даних для karty pobytu.`,
          sourceLocator: "Art. 107 ust. 1–2",
        },
      ],
      summary:
        "Закон визначає зміст і ролі, а rozporządzenie — чинні технічні форми. Тому правильний маршрут потребує одночасної перевірки ustawy та актуального wzoru.",
      rules: [
        {
          locator: "Art. 107 ust. 1 pkt 1–5",
          explanation: foreignersLaw.text`Розпорядження встановлює загальну форму wniosku, załączniki з ${foreignersLaw.article("106", "Art. 106")}, паперові форми з ${foreignersLaw.article("106k", "Art. 106k")} і ${foreignersLaw.article("106l", "Art. 106l")} та wzór zgody для сімейної заяви особі за кордоном.`,
        },
        {
          locator: "Art. 107 ust. 1 pkt 6–9",
          explanation:
            "Окремо регулюються технічні параметри фотографії, спосіб її додавання в MOS, кількість фото у спеціальних паперових справах і вимоги до електронних документів та цифрових копій.",
        },
        {
          locator: "Art. 107 ust. 1 pkt 10–13 i ust. 2",
          explanation:
            "Також визначаються спосіб зняття відбитків, передавання даних для персоналізації karty pobytu, інформація про відбитки або їх відсутність і форму для wzoru podpisu. Усе це має підтримувати справне провадження й перевірку умов дозволу.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("107", "Art. 107")} створює технічну делегацію. Він не надає zezwolenia, не легалізує pobytu й не доводить права на роботу.`,
      foreignersCase:
        "Перед поданням звірте дату чинності rozporządzenia, потрібну форму, спосіб підпису й параметри файлів. Формальну технічну відповідність доповніть доказами кожної матеріальної умови.",
    },
  ],
})
