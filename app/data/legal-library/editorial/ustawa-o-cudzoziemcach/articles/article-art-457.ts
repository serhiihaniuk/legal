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
      provisionId: "ustawa-o-cudzoziemcach-art-457",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("457", "Art. 457")} зобов’язує ministra właściwego do spraw wewnętrznych визначити в drodze rozporządzenia спосіб і tryb kontroli доступу до даних через urządzenia telekomunikacyjne або systemy teleinformatyczne, wzór upoważnienia з ${foreignersLaw.article("455", "Art. 455")} ust. 3 та wzór protokołu з ${foreignersLaw.article("455", "Art. 455")} ust. 5 pkt 2; у розпорядженні мають бути враховані захист danych osobowych і безпека даних.`,
          sourceLocator: "Art. 457 ust. 1–2",
        },
      ],
      summary:
        "Стаття делегує міністру деталізацію процедури контролю доступу та форм документів, пов’язаних із контролем.",
      rules: [
        {
          locator: "ust. 1 pkt 1–3",
          explanation:
            "Rozporządzenie має визначити спосіб і tryb kontroli, wzór imienne upoważnienie працівника та wzór protokołu після kontroli.",
        },
        {
          locator: "ust. 2",
          explanation:
            "При підготовці rozporządzenie minister враховує необхідність захисту danych osobowych і вимоги безпеки даних, що обробляються в системі.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("457", "Art. 457")} є нормою про делегування до rozporządzenie і форми контрольних документів. Він сам не встановлює конкретну процедуру перевірки поза межами делегованих питань і не доводить наявність порушення.`,
      foreignersCase: foreignersLaw.text`У справі про kontrola звірте фактичні дії з чинним rozporządzenie, wzór upoważnienie та protokół, на які посилається ${foreignersLaw.article("455", "Art. 455")}; окремо перевірте, як враховано безпеку обробки даних.`,
    },
  ],
})
