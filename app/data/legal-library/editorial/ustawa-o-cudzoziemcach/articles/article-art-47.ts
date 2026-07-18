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
      provisionId: "ustawa-o-cudzoziemcach-art-47",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("47", "Art. 47")} ust. 1 зобов’язує komendant placówki Straży Granicznej zatrzymać zezwolenie na przekraczanie granicy w ramach małego ruchu granicznego, якщо під час kontroli granicznej встановлено, що його cofnięto або unieważniono, і видати zaświadczenie o zatrzymaniu zezwolenia.`,
          sourceLocator: "Art. 47 ust. 1",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("47", "Art. 47")} ust. 2–3 делегує міністрам визначення процедури після zatrzymanie та wzór zaświadczenia, включно з інформацією про підставу затримання.`,
          sourceLocator: "Art. 47 ust. 2–3",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("47", "Art. 47")} регулює zatrzymanie дозволу на перетин кордону в рамках mały ruch graniczny, коли на кордоні виявлено його cofnięcie або unieważnienie, і встановлює документальне підтвердження цієї дії.`,
      rules: [
        {
          locator: "Art. 47 ust. 1",
          explanation:
            "Komendant placówki Straży Granicznej не оцінює тут нову заяву: він затримує вже cofnięte або unieważnione zezwolenie і видає cudzoziemiec zaświadczenie.",
        },
        {
          locator: "Art. 47 ust. 2–3",
          explanation:
            "Окреме rozporządzenie визначає порядок після zatrzymanie, необхідну кількість примірників і спосіб передавання zaświadczenie właściwemu organowi.",
        },
      ],
      legalEffect: foreignersLaw.text`Затримання вилучає документ з обігу під час контролю, але ${foreignersLaw.article("47", "Art. 47")} не є самостійною підставою cofnięcie чи unieważnienie дозволу: він передбачає дію після того, як такий статус уже встановлено.`,
      foreignersCase:
        "Зіставте запис про cofnięcie або unieważnienie з моментом прикордонного контролю, попросіть zaświadczenie o zatrzymaniu zezwolenia і перевірте, який organ та яке рішення є первинними.",
    },
  ],
})
