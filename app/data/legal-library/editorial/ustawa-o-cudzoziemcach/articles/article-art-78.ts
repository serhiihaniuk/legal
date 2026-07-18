import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const VISA_CODE_URL = "https://eur-lex.europa.eu/eli/reg/2009/810/oj"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-78",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("78", "Art. 78")} ust. 1–2 встановлює, що wiza krajowa розміщується як naklejka wizowa у dokument podróży, а у спеціально обґрунтованому випадку — на osobny blankiet wizowy із даними та фотографією; ust. 3–4 визначають дії konsul для віз MFA і за ${foreignersLaw.article("66", "Art. 66")} ust. 1a.`,
          sourceLocator: "Art. 78 ust. 1–4",
        },
        {
          kind: "practical-inference",
          text: "Наклейка або blankiet є способом оформлення вже виданої візи; сам формат не розширює строк, cel чи право на роботу.",
          sourceLocator: "Art. 78 ust. 1–2",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("78", "Art. 78")} регулює фізичне розміщення wiza krajowa та спеціальний blankiet, а також розподіляє технічні дії між MFA і konsul.`,
      rules: [
        {
          locator: "Art. 78 ust. 1–2",
          explanation:
            "Звичайне місце naklejka wizowa — документ подорожі; окремий blankiet можливий у особливо обґрунтованому інтересі cudzoziemiec і містить дані та актуальну фотографію.",
        },
        {
          locator: "Art. 78 ust. 3–4",
          explanation: foreignersLaw.text`Для визначених віз MFA naklejka та дані оформлює konsul ${foreignersLaw.article("66", "Art. 66")} ust. 1b; у випадку ${foreignersLaw.article("66", "Art. 66")} ust. 1a він також виконує дії за ${foreignersLaw.external("Art. 27 kodeksu wizowego", VISA_CODE_URL)} і ${foreignersLaw.external("Art. 29 kodeksu wizowego", VISA_CODE_URL)}.`,
        },
      ],
      legalEffect:
        "Стаття визначає спосіб документального підтвердження wiza та технічного виконання, але не створює нової візи і не замінює рішення органу.",
      foreignersCase:
        "Перевірте відповідність naklejka/blankiet особі, документу подорожі, строкам і типу wiza; для MFA-віз встановіть, який konsul виконав технічну дію.",
    },
  ],
})
