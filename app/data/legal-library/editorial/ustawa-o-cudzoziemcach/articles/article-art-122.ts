import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-122",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("122", "Art. 122")} передбачає cofnięcie zezwolenia na pobyt czasowy i pracę, якщо змінилася посада або зменшилася винагорода без зміни zezwolenia, а також коли podmiot powierzający pracę не веде передбаченої діяльності.`,
          sourceLocator: "Art. 122 pkt 1–2",
        },
      ],
      summary: foreignersLaw.text`Wojewoda cofnie zezwolenie у названих статтею ситуаціях, крім випадків, зазначених в ${foreignersLaw.article("101", "art. 101")}.`,
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Зміна stanowisko або зменшення wynagrodzenie має супроводжуватися зміною zezwolenia; інакше стаття передбачає cofnięcie.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Підставою є також відсутність господарської, сільськогосподарської чи статутної діяльності podmiotu, зокрема її призупинення, викреслення з реєстру або ліквідація.",
        },
      ],
      legalEffect:
        "За наявності названої обставини wojewoda має застосувати cofnięcie, але оцінка конкретної справи також залежить від винятку, на який посилається стаття.",
      foreignersCase:
        "Порівняйте фактичну посаду й оплату з даними zezwolenia та перевірте, чи продовжує podmiot реально вести діяльність. Не робіть висновок лише з назви роботодавця.",
    },
  ],
})
