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
      provisionId: "ustawa-o-cudzoziemcach-art-55b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("55b", "Art. 55b")} ust. 1 застосовує до postępowanie w sprawie wpisania zaproszenia розділ II, розділ 14 KPA, а ust. 2 виключає застосування розділу II, розділу 8a KPA до цього провадження.`,
          sourceLocator: "Art. 55b ust. 1–2",
        },
        {
          kind: "practical-inference",
          text: "Спеціальне посилання визначає процесуальні правила саме для wpis zaproszenia; його не слід автоматично поширювати на інші візові або побитові процедури.",
          sourceLocator: "Art. 55b ust. 1–2",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("55b", "Art. 55b")} визначає, які частини Kodeks postępowania administracyjnego застосовуються до провадження про wpis zaproszenia і яку частину прямо виключено.`,
      rules: [
        {
          locator: "Art. 55b ust. 1",
          explanation:
            "Процесуальні дії у справі wpis zaproszenia оцінюються з урахуванням Dział II Rozdział 14 KPA.",
        },
        {
          locator: "Art. 55b ust. 2",
          explanation:
            "Dział II Rozdział 8a KPA для цього провадження не застосовується; не замінюйте пряме виключення загальним посиланням на KPA.",
        },
      ],
      legalEffect:
        "Норма встановлює процесуальну рамку wpis zaproszenia, але не визначає, чи буде zaproszenie внесено, і не створює матеріального права на wiza або pobyt.",
      foreignersCase: foreignersLaw.text`У процесуальному календарі посилайтеся на правильні розділи KPA, перевіряйте статус zapraszający як strony за ${foreignersLaw.article("55a", "Art. 55a")} і не переносіть цю рамку на заяву cudzoziemiec.`,
    },
  ],
})
