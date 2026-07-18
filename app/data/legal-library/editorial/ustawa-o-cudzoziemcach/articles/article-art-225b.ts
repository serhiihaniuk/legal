import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const INFORMATYZACJA_ACT_URL = "https://eli.gov.pl/eli/DU/2005/565/ogl"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-225b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Індивідуальне konto w MOS може створити іноземець; батько або мати — для неповнолітнього іноземця; opiekun — для особи під опікою; kurator — для неповнолітнього іноземця без опіки.",
          sourceLocator: "Art. 225b ust. 1",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Створення облікового запису й доступ до нього потребують uwierzytelnienia за ${foreignersLaw.external("art. 20a ust. 1 ustawy o informatyzacji", INFORMATYZACJA_ACT_URL)}.`,
          sourceLocator: "Art. 225b ust. 2",
        },
        {
          kind: "statute-text",
          text: "Під час створення konto подають ідентифікатор, ім’я та прізвище, дату народження, стать, громадянство або громадянства, номер PESEL і адресу електронної пошти. Wojewoda забезпечує іноземцеві допомогу зі створенням облікового запису.",
          sourceLocator: "Art. 225b ust. 3–4",
        },
      ],
      summary:
        "Стаття визначає, хто може створити konto w MOS, як підтверджується доступ і які ідентифікаційні дані збираються.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Обліковий запис для іншої особи створюється лише в прямо названій ролі. Статус rodzica, opiekuna або kuratora потрібно підтвердити окремо.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Uwierzytelnienie є умовою і створення, і подальшого доступу. Дані профілю мають відповідати особі, яка створює konto у своїй законній ролі.",
        },
      ],
      legalEffect:
        "Створене й автентифіковане konto відкриває доступ до MOS, але не дорівнює поданню конкретної заяви.",
      foreignersCase:
        "Перед створенням профілю визначте, чи особа діє від власного імені, як rodzic, opiekun або kurator. Звірте PESEL, адресу електронної пошти та інші дані й за потреби скористайтеся допомогою wojewoda.",
    },
  ],
})
