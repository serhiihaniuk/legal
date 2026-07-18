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
      provisionId: "ustawa-o-cudzoziemcach-art-77b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("77b", "Art. 77b")} ust. 1 передбачає opłaty за прийняття і розгляд MFA заяви на wiza krajowa або wniosku o ponowne rozpatrzenie wizy Schengen чи krajowa; ust. 2 виключає візи ${foreignersLaw.article("66", "Art. 66")} ust. 4, ust. 3 визначає розмір як відповідний opłata konsularna з можливими звільненнями, а ust. 4 — збір через konsul у випадку ${foreignersLaw.article("66", "Art. 66")} ust. 1a.`,
          sourceLocator: "Art. 77b ust. 1–4",
        },
        {
          kind: "practical-inference",
          text: "Оплата є процесуальною умовою роботи з відповідною заявою, але не купує позитивного рішення і не скасовує міжнародне або konsularne zwolnienie.",
          sourceLocator: "Art. 77b ust. 1–4",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("77b", "Art. 77b")} регулює збори за заяви, які розглядає MFA, та за ponowne rozpatrzenie візових рішень. Сума відповідає консульському збору за конкретний випадок, але дипломатичні візи і визначені міжнародними або консульськими правилами звільнення мають окремий режим.`,
      rules: [
        {
          locator: "Art. 77b ust. 1–2",
          explanation: foreignersLaw.text`Збір стягується за MFA wniosek на wiza krajowa і за wniosek o ponowne rozpatrzenie wizy Schengen або krajowa, але не за візи ${foreignersLaw.article("66", "Art. 66")} ust. 4.`,
        },
        {
          locator: "Art. 77b ust. 3",
          explanation:
            "Сума відповідає opłata konsularna для конкретного випадку, якщо міжнародне зобов’язання або Prawo konsularne не звільняє громадянина від сплати.",
        },
        {
          locator: "Art. 77b ust. 4",
          explanation: foreignersLaw.text`У випадку ${foreignersLaw.article("66", "Art. 66")} ust. 1a збір приймає konsul ${foreignersLaw.article("66", "Art. 66")} ust. 1b, а його збір і zwrot регулює Prawo konsularne.`,
        },
      ],
      legalEffect:
        "Норма визначає фінансову сторону процедури та можливий zwrot за правилами Prawo konsularne; сплата не гарантує wydanie wiza, а невраховане звільнення не повинно перетворюватися на борг.",
      foreignersCase: foreignersLaw.text`Визначте орган і вид заяви, перевірте ${foreignersLaw.article("66", "Art. 66")} ust. 4, міжнародне звільнення та чинний konsularna opłata; збережіть підтвердження сплати або підставу zwolnienie.`,
    },
  ],
})
