import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-86",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 86 спрямовує призначені та стягнені штрафи за art. 84 до Fundusz Pracy. Він визначає передання коштів судами на окремий рахунок повітового управління праці або самоврядування повіту і встановлює розгляд справ за Kodeks postępowania w sprawach o wykroczenia.",
          sourceLocator: "Art. 86 ust. 1–3",
        },
      ],
      summary:
        "Стаття регулює надходження штрафів і процедуру розгляду справ, а не створює нові склади проступків. Суд передає призначені та фактично стягнені суми відповідному повітовому управлінню праці або самоврядуванню повіту.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Призначені та стягнені штрафи є надходженням Fundusz Pracy. Суд переказує їх безпосередньо на окремий банківський рахунок повітового управління праці або самоврядування повіту, визначеного за місцезнаходженням чи місцем проживання покараної особи.",
        },
        {
          locator: "ust. 3",
          explanation:
            "Справи про діяння з art. 84 розглядають за правилами Kodeks postępowania w sprawach o wykroczenia.",
        },
      ],
      legalEffect:
        "Саме повідомлення органу ще не є постановою про покарання. Факт порушення і розмір штрафу встановлюють у відповідній процедурі.",
      foreignersCase:
        "Якщо отримано виклик у справі за art. 84, перевірте стадію провадження і процесуальні строки за Kodeks postępowania w sprawach o wykroczenia. Не плутайте напрям надходження штрафу зі способом доведення порушення.",
    },
  ]),
})
