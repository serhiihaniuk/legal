import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-53",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 53 дозволяє staroście на прохання польського podmiotu робити wpis wniosku на періоди до 9 місяців у календарному році протягом не більш як трьох наступних календарних років за спеціальних умов.",
          sourceLocator: "Art. 53",
        },
      ],
      summary:
        "Це спеціальний механізм для громадянина держави, визначеної у виконавчих приписах, якщо той самий podmiot уже щонайменше раз за останні п'ять років доручав йому сезонну роботу відповідно до zezwolenie.",
      rules: [
        {
          locator: "Art. 53",
          explanation:
            "Кожен період не може перевищувати 9 місяців у календарному році; періоди можуть припадати не більш як на три послідовні календарні роки.",
        },
        {
          locator: "Art. 53",
          explanation:
            "Потрібні громадянство з переліку, виданого на підставі art. 3 ust. 8 pkt 2, і попереднє законне доручення роботи цій самій особі в останні 5 років.",
        },
      ],
      legalEffect:
        "Норма лише дозволяє багаторічний wpis за визначених передумов; вона не скасовує річний ліміт і не гарантує видачу кожного наступного zezwolenie.",
      foreignersCase:
        "Для повторного сезонного працівника зберіть попередні zezwolenia та перевірте державу громадянства у чинному rozporządzenie. Окремо рахуйте 9 місяців кожного календарного року і максимум три роки.",
    },
  ]),
})
