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
      provisionId: "ustawa-o-cudzoziemcach-art-154",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("154", "Art. 154")} встановлює спеціальні підстави odmowa udzielenia дозволу naukowiec: діяльність jednostka переважно для незаконного в’їзду/побиту, використання попереднього дозволу не за метою або закінчення чинності іноземного документа/допустимого строку візи для mobilność długoterminowa.`,
          sourceLocator: "Art. 154 ust. 1–3",
        },
      ],
      summary:
        "Науковий договір не усуває спеціальних підстав відмови, пов’язаних із діяльністю одиниці, попереднім дозволом або іноземним документом.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Поза ${foreignersLaw.article("100", "art. 100")} ust. 1 pkt 1–5, 8 і 9 відмовляють у дозволі ${foreignersLaw.article("151", "art. 151")}, якщо jednostka головно полегшує naukowiec незаконний в’їзд або pobyt.`,
        },
        {
          locator: "ust. 2",
          explanation: foreignersLaw.text`У наступному дозволі ${foreignersLaw.article("151", "art. 151")} відмовляють, якщо обставини показують, що попередній дозвіл використано не за метою, з урахуванням названих у нормі загальних підстав.`,
        },
        {
          locator: "ust. 3",
          explanation:
            "У дозволі на mobilność długoterminowa відмовляють також, коли закінчився строк іноземного документа/візи «naukowiec» або допустимий строк перебування за візою.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("154", "Art. 154")} впливає на результат лише в межах відповідного виду дозволу; орган має назвати й обґрунтувати конкретну підставу.`,
      foreignersCase:
        "Розділіть первинний, наступний і mobilność-дозвіл; перевірте мотивування, фактичну мету попереднього pobyt та строки іноземного документа.",
    },
  ],
})
