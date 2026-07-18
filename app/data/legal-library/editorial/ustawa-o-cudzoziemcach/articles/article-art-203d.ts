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
      provisionId: "ustawa-o-cudzoziemcach-art-203d",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("203d", "Art. 203d")} вимагає додати фотографію та цифрові копії всіх сторін документа, належно підписати wniosek і отримати UPO. Лише спільне виконання вимоги про підпис та отримання UPO означає, що заява вважається поданою.`,
          sourceLocator: "Art. 203d ust. 1–6",
        },
      ],
      summary:
        "Стаття відділяє підготовку електронної заяви від моменту її юридичного подання. Для справи важливі не лише файли в MOS, а завершений підписаний процес і підтвердження прийняття системою.",
      rules: [
        {
          locator: "Art. 203d ust. 1–2",
          explanation:
            "Обов’язково додаються актуальна фотографія й цифрові копії всіх сторін чинного документа подорожі або допустимого документа тотожності. Інші докази можна подати як електронні документи чи цифрові копії паперових матеріалів.",
        },
        {
          locator: "Art. 203d ust. 3–5",
          explanation: foreignersLaw.text`Wniosek підписує заявник або, у випадках ${foreignersLaw.article("202", "Art. 202")} ust. 2, названа там особа належним електронним підписом. MOS створює UPO, а дата подання виникає лише після правильного підпису й отримання цього підтвердження.`,
        },
        {
          locator: "Art. 203d ust. 6",
          explanation:
            "Wojewoda має забезпечити заявникові допомогу при поданні; це практична гарантія доступу до обов’язкової електронної процедури.",
        },
      ],
      legalEffect:
        "Без належного підпису або UPO wniosek не вважається поданим, що може змінити оцінку строків та правових наслідків подання.",
      foreignersCase:
        "Збережіть UPO й перевірте, хто саме підписав заяву та яким видом підпису. Перегляньте кожну сторінку документа перед завантаженням; орган може пізніше вимагати оригінали інших доказів.",
    },
  ],
})
