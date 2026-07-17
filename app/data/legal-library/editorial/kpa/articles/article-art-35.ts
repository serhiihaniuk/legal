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
      article: "35",
      provisionId: "kpa-art-35",
      reviewStatus: "reviewed",
      summary:
        "Стаття встановлює загальний обов’язок вирішувати справи без зайвої затримки, кодексні строки для різних видів справ і періоди, які не враховуються до цих строків.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Орган вирішує справу без зайвої затримки, а niezwłocznie — коли достатньо матеріалу сторони, загальновідомих чи відомих organowi фактів або даних, якими він уже володіє.",
        },
        {
          locator: "§ 3–3a",
          explanation:
            "Справа з postępowaniem wyjaśniającym має бути вирішена протягом місяця, особливо складна — двох місяців від wszczęcia, odwoławcza — місяця від отримання odwołania, а uproszczona — niezwłocznie, не пізніше місяця.",
        },
        {
          locator: "§ 4–5",
          explanation:
            "Спеціальні приписи можуть встановити інші строки; до строку не входять названі законом періоди, зокрема строки на окремі дії, zawieszenie, mediacja та затримки з вини сторони або незалежні від органу.",
        },
      ],
      legalEffect:
        "Після врахування спеціального строку й законних виключень можна встановити, чи organ допустив bezczynność.",
      foreignersCase: kpaLaw.text`У справі про pobyt ${kpaLaw.article("35", "art. 35")} є загальною точкою відліку, але перед висновком про прострочення потрібно перевірити спеціальний строк і всі періоди, які закон не зараховує.`,
    },
  ],
})
