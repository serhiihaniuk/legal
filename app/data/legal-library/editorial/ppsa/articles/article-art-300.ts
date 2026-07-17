import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-300",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 300 встановлює, що в питаннях, не врегульованих PPSA, до postępowania у сфері obrotu zagranicznego відповідно застосовуються положення про ustrój sądów powszechnych та положення Kodeks postępowania cywilnego про międzynarodowe postępowanie cywilne.",
          sourceLocator: "Art. 300",
        },
      ],
      summary:
        "Для неврегульованих питань міжнародного судового обігу PPSA відсилає до двох названих груп цивільно-процесуальних правил.",
      rules: [
        {
          locator: "Art. 300",
          explanation:
            "Спершу встановіть, що питання не врегульоване PPSA, і лише потім визначайте відповідне правило про ustrój sądów powszechnych або międzynarodowe postępowanie cywilne.",
        },
      ],
      legalEffect:
        "Відсилання є відповідним, а не необмеженим: Art. 300 не скасовує спеціальні правила PPSA і не дає готової відповіді для кожної міжнародної ситуації.",
      foreignersCase:
        "У міжнародній справі іноземця про pobyt спочатку перевірте спеціальні правила PPSA про doręczenia та участь сторін; Art. 300 застосовуйте лише до неврегульованого питання.",
    },
  ]),
})
