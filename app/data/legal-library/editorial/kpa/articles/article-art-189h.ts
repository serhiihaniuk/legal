import { createLegalTextAuthor } from "../../../legal-text"

import { defineKpaEditorialPart } from "../define-kpa-part"

const kpaLaw = createLegalTextAuthor("kpa")
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "189h",
      provisionId: "kpa-art-189h",
      reviewStatus: "reviewed",
      summary:
        "Стаття регулює переривання та зупинення строку давності накладення адміністративної грошової санкції. Вона прив'язує новий перебіг або продовження строку до завершення банкрутства, судового контролю, спору про правовідношення, забезпечення чи zawieszenia postępowania.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Ogłoszenie upadłości перериває строк; після prawomocnego завершення або umorzenia postępowania upadłościowego він починається заново, а якщо банкрутство настало до початку строку — стартує після цього моменту.",
        },
        {
          locator: "§ 3 pkt 1–2",
          explanation:
            "Строк не біжить під час судового оскарження санкційного рішення або розгляду sąd powszechny питання про правовідношення, від якого залежить справа.",
        },
        {
          locator: "§ 3 pkt 3–4",
          explanation: kpaLaw.text`Зупинення також пов'язане з wydaniem postanowienia o zabezpieczeniu та з zawieszeniem postępowania z urzędu за ${kpaLaw.article("97", "art. 97 § 1")} pkt 4.`,
        },
        {
          locator: "§ 4",
          explanation:
            "Після визначених законом завершальних подій строк продовжує бігти з наступного дня.",
        },
      ],
      legalEffect:
        "Час окремих проваджень не зараховується до давності або запускає її заново; тому арифметичного відліку від дати порушення може бути недостатньо.",
      foreignersCase:
        "Якщо санкційне рішення щодо суб'єкта, який залучав іноземців, оскаржене до суду або залежить від іншого спору, потрібно врахувати періоди, коли строк не біг, перш ніж робити висновок про przedawnienie.",
    },
  ],
})
