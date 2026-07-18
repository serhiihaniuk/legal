import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-146",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Задовольняючи skarga на akt або czynność з ${ppsaLaw.article("3", "art. 3 § 2")} pkt 4–4b, суд uchyla відповідний akt, interpretację, opinię чи відмову або stwierdza bezskuteczność czynność; до цього відповідно застосовується ${ppsaLaw.article("145", "art. 145 § 1")} pkt 1, а у справах pkt 4 суд може визнати uprawnienie чи obowiązek, що випливає з prawa.`,
          sourceLocator: "Art. 146 § 1–2",
        },
      ],
      summary:
        "Стаття встановлює наслідки для спеціальної категорії aktów і czynności, а для pkt 4 допускає визнання права або обов’язку.",
      rules: [
        {
          locator: "§ 1",
          explanation: ppsaLaw.text`Спочатку перевірте, що предмет справді належить до ${ppsaLaw.article("3", "art. 3 § 2")} pkt 4–4b; далі розрізняйте uchylenie і bezskuteczność.`,
        },
        {
          locator: "§ 2",
          explanation:
            "Визнання uprawnienie або obowiązek прямо назване лише для справ за pkt 4 і залежить від розгляду skarga.",
        },
      ],
      legalEffect:
        "Наслідок залежить від виду оскарженого акту чи czynność; стаття не поширює цей режим на кожну decyzja адміністрації.",
      foreignersCase: ppsaLaw.text`У справі іноземця спершу класифікуйте оскаржений документ: звичайна decyzja про pobyt не стає справою ${ppsaLaw.article("146", "art. 146")} лише через спосіб її називання.`,
    },
  ],
})
