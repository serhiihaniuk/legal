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
      provisionId: "ustawa-o-cudzoziemcach-art-350",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("350", "Art. 350")} встановлює обов’язкове cofnięcie zgody humanitarnej, коли зникає її підстава, виникає підстава відмови, виявляються істотні неправдиві дані, іноземець назавжди виїхав або повернувся до країни походження; за ${foreignersLaw.article("349", "Art. 349")} ust. 2 згода може бути відкликана.`,
          sourceLocator: "Art. 350 ust. 1–2",
        },
      ],
      summary:
        "Гуманітарна згода не є безстроковою гарантією: її можуть або повинні відкликати, якщо змінилися підстави, поведінка чи важливі відомості.",
      rules: [
        {
          locator: "ust. 1 pkt 1–2",
          explanation: foreignersLaw.text`Cofnięcie є обов’язковим, якщо обставини ${foreignersLaw.article("348", "Art. 348")} припинилися або змінилися так, що згода вже не потрібна, чи якщо після її надання виникла підстава відмови.`,
        },
        {
          locator: "ust. 1 pkt 3–5",
          explanation:
            "Підставами є приховування істотної інформації або фальшиві документи, постійний виїзд із Польщі чи повернення до країни походження.",
        },
        {
          locator: "ust. 2",
          explanation: foreignersLaw.text`Виявлення іншого вчинку з ${foreignersLaw.article("349", "Art. 349")} ust. 2 дозволяє, але не зобов’язує, відкликати згоду.`,
        },
      ],
      legalEffect:
        "Cofnięcie припиняє дію zgoda за рішенням у відповідній процедурі; оцінюються факти після надання та достовірність первісних матеріалів.",
      foreignersCase: foreignersLaw.text`Якщо отримано повідомлення про cofnięcie, визначте конкретний пункт ${foreignersLaw.article("350", "Art. 350")}, перевірте докази зміни обставин і строк odwołanie у pouczenie.`,
    },
  ],
})
