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
      provisionId: "ustawa-o-cudzoziemcach-art-213",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("213", "Art. 213")} вимагає odmowy wszczęcia postępowania про pobyt rezydenta długoterminowego UE, якщо на день wniosku cudzoziemiec перебуває нелегально або на названій візі, для навчання чи szkolenie, очікує навчання, має гуманітарний, tolerowany, azyl, ochronę czasową або просить захист, користується ICT/іншим переліченим дозволом чи малим прикордонним рухом.`,
          sourceLocator: "Art. 213 ust. 1 pkt 1 lit. a–h",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Також перешкодами є статус працівника, делегованого usługodawca для транскордонного надання послуг, або самого транскордонного usługodawca; затримання, strzeżony ośrodek, areszt dla cudzoziemców чи zakaz opuszczania kraju; позбавлення волі або tymczasowe aresztowanie; перебування після рішення про powrót до завершення строку dobrowolnego wyjazdu; обов’язок виїхати за ${foreignersLaw.article("299", "art. 299")} ust. 6; а також перебування поза Польщею.`,
          sourceLocator: "Art. 213 ust. 1 pkt 2–7",
        },
      ],
      summary:
        "Стаття визначає обставини, за яких заява на статус rezydent długoterminowy UE не переходить до розгляду по суті.",
      rules: [
        {
          locator: "ust. 1 pkt 1",
          explanation:
            "Вид поточного pobyt на день wniosku має вирішальне значення; перелік навчальних, захисних, ICT та прикордонних підстав є конкретним.",
        },
        {
          locator: "ust. 1 pkt 2–7",
          explanation:
            "Процесуальні та поворотні обставини також перешкоджають wszczęcie, навіть якщо заявник накопичив певний попередній стаж.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("213", "Art. 213")} відрізняється від відмови у наданні статусу за ${foreignersLaw.article("214", "Art. 214")}: йдеться про недопустимість початку провадження за наявної обставини.`,
      foreignersCase:
        "На дату wniosku підтвердьте вид і чинність поточного pobyt, місце перебування та відсутність кожної процесуальної або поворотної перешкоди з ust. 1. У документі органу перевірте, чи йдеться саме про odmowa wszczęcia, а не про відмову по суті.",
    },
  ],
})
