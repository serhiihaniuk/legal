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
      provisionId: "ustawa-o-cudzoziemcach-art-359",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("359", "Art. 359")} вимагає перед наданням гуманітарної або tolerowany згоди отримати інформацію від Policja, ABW та за потреби інших органів, встановлює строки 30 днів або до 60 робочих днів і правило про виконання вимоги за відсутності відповіді.`,
          sourceLocator: "Art. 359 ust. 1–6",
        },
      ],
      summary:
        "Перед рішенням SG перевіряє безпекові та інші обставини через компетентні служби, але затримка відповіді в межах установлених строків не повинна безмежно блокувати процедуру.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation: foreignersLaw.text`Для гуманітарної згоди запитують про підстави ${foreignersLaw.article("349", "Art. 349")}, а для tolerowany — про можливу загрозу оборонності, безпеці держави або громадському порядку.`,
        },
        {
          locator: "ust. 3–5",
          explanation:
            "Інформацію надають за 30 днів; у особливо обґрунтованих випадках строк може бути продовжений до 60 робочих днів. Якщо відповіді немає в строк, вимога отримання вважається виконаною.",
        },
        {
          locator: "ust. 5a–6",
          explanation:
            "У другій інстанції Komendant Główny може сам звернутися із запитом; для дитини до 13 років ust. 1–2 не застосовуються.",
        },
      ],
      legalEffect:
        "Відсутність відповіді служби після строку не є автоматичною позитивною відповіддю про безпеку та не визначає результат справи без іншої оцінки.",
      foreignersCase:
        "Відстежуйте дату запиту та закінчення строку, але зосередьте докази на власних обставинах; не вимагайте від іноземця доводити зміст внутрішньої перевірки служб.",
    },
  ],
})
