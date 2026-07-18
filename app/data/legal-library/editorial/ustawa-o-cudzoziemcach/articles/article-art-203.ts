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
      provisionId: "ustawa-o-cudzoziemcach-art-203",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("203", "Art. 203")} визначає зміст форми wniosku для pobytu stałego: дані іноземця та його подружжя, подорожі й pobyty, обставини затримання, податкові зобов’язання, обґрунтування та oświadczenie про правдивість даних.`,
          sourceLocator: "Art. 203 ust. 1–2",
        },
      ],
      summary:
        "Форма wniosku організує факти, які потрібні для ідентифікації заявника та вибору правильної підстави pobytu stałego. Заповнені поля не замінюють доказів цих фактів.",
      rules: [
        {
          locator: "Art. 203 ust. 1",
          explanation:
            "Заява охоплює дані іноземця й małżonka, закордонні поїздки за 5 років, попередній і поточний pobyt у Польщі, затримання чи позбавлення волі, zobowiązania podatkowe, обґрунтування та підтвердження правдивості.",
        },
        {
          locator: "Art. 203 ust. 2",
          explanation:
            "Oświadczenie подається під загрозою кримінальної відповідальності та містить установлену klauzulę. Це вимагає точності: невідомі факти не варто замінювати припущеннями.",
        },
      ],
      legalEffect:
        "Стаття визначає обов’язкову інформацію у wniosku, але не встановлює самостійної матеріальної підстави дозволу й не доводить її виконання.",
      foreignersCase: foreignersLaw.text`Перед заповненням створіть хронологію поїздок і pobytu та перевірте податкові й процесуальні обставини. Після цього зіставте кожне важливе поле з документом, який можна подати за ${foreignersLaw.article("203d", "Art. 203d")} або на wezwanie за ${foreignersLaw.article("203f", "Art. 203f")}.`,
    },
  ],
})
