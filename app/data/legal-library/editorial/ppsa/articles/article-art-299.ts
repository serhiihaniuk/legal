import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-299",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 299 регулює doręczenia учасникам без місця проживання, звичайного перебування або siedziba в Польщі чи визначених європейських державах, якщо вони не мають pełnomocnik для ведення справи в Польщі. Для особи в іншій державі § 1 вимагає рекомендованого листа з підтвердженням або рівноцінного відправлення, а § 2 — ustanowienie pełnomocnik do doręczeń у Польщі разом із wniesienie skarga; невиконання § 2 веде до wezwanie на два місяці під rygor odrzucenie skarga. § 4–6 містять відповідне правило для учасника, виняток для Art. 33 § 2, а також винятки для міжнародного договору та електронного doręczenie.",
          sourceLocator: "Art. 299 § 1–6",
        },
      ],
      summary:
        "Норма встановлює правила вручення та обов’язок призначити pełnomocnik do doręczeń для певних учасників, які перебувають за межами Польщі.",
      rules: [
        {
          locator: "§ 1–3",
          explanation:
            "Розрізніть особу в державі ЄС, Швейцарії або EFTA–EOG і особу поза цими державами; для другої разом зі skarga потрібен польський pełnomocnik do doręczeń, а на усунення braku дається два місяці.",
        },
        {
          locator: "§ 4–6",
          explanation:
            "Обов’язок може стосуватися учасника, про якого це випливає зі skarga; перевірте Art. 33 § 2, міжнародний договір та електронне doręczenie як винятки.",
        },
      ],
      legalEffect:
        "Невиконання обов’язку щодо pełnomocnik do doręczeń може призвести до odrzucenie skarga або до залишення pisma в akt зі skutkiem doręczenia; конкретний наслідок залежить від § 1–6 та фактів.",
      foreignersCase:
        "Іноземцю, який оскаржує decyzja про pobyt з-за меж Польщі, визначте державу проживання, наявність pełnomocnik у Польщі та спосіб doręczenie; не застосовуйте правило § 2 без перевірки винятків § 6.",
    },
  ]),
})
