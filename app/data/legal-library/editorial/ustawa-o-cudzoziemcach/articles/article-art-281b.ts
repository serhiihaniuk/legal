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
      provisionId: "ustawa-o-cudzoziemcach-art-281b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Europejski dokument podróży do celów powrotu unieważnia się, якщо його видано особі без права на нього, внесено неправдиві дані або документ втрачено чи знищено.",
          sourceLocator: "Art. 281b ust. 1",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Документ уневажнює орган, який його видав, шляхом внесення до реєстру з ${foreignersLaw.article("428", "Art. 428")} ust. 1 pkt 2 lit. ia дати та причини unieważnienia.`,
          sourceLocator: "Art. 281b ust. 2",
        },
        {
          kind: "statute-text",
          text: "Якщо уневажнений документ перебуває в органі, який його уневажнив, він підлягає знищенню.",
          sourceLocator: "Art. 281b ust. 3",
        },
      ],
      summary:
        "Стаття встановлює закритий перелік причин unieważnienia європейського документа для повернення та спосіб фіксації цього рішення.",
      rules: [
        {
          locator: "ust. 1 pkt 1–3",
          explanation:
            "Розрізняйте помилкову видачу неуповноваженій особі, неправдиві дані в документі та подію з самим документом — втрату або знищення.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Unieważnienie здійснює той самий орган, який видав документ, і воно має бути відображене в реєстрі разом із датою та причиною.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Фізичне знищення стосується документа, який фактично перебуває в розпорядженні органу після unieważnienia.",
        },
      ],
      legalEffect:
        "Після реєстрації unieważnienia документ більше не може виконувати функцію документа для виїзду; наявний в органі примірник знищується.",
      foreignersCase:
        "Встановіть конкретну причину, орган-видавець і запис у реєстрі. За втрати документа зафіксуйте дату повідомлення, щоб відрізнити подію від пізнішої реєстраційної дії.",
    },
  ],
})
