import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-35",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 35 § 1 передбачає: «Pełnomocnikiem strony może być adwokat lub radca prawny, a ponadto inny skarżący lub uczestnik postępowania».",
          sourceLocator: "Art. 35 § 1",
        },
      ],
      summary:
        "Стаття визначає, хто може бути pełnomocnik: зокрема adwokat, radca prawny, інший skarżący або uczestnik, близькі родичі сторони та інші особи, якщо це передбачено спеціальним законом; для організацій названі додаткові представники.",
      rules: [
        {
          locator: "Art. 35 § 1",
          explanation:
            "Фізичну сторону можуть представляти перелічені в § 1 особи, але відповідність конкретної особи треба перевірити за її статусом і, де потрібно, спеціальним приписом.",
        },
        {
          locator: "Art. 35 § 2–4",
          explanation:
            "Особа правна або підприємець можуть мати pełnomocnik у вигляді свого працівника; для органу, чия діяльність оскаржується, стаття також називає функціонера або працівника відповідної jednostki.",
        },
        {
          locator: "Art. 35 § 5–6",
          explanation:
            "У спеціально названих справах повноваження органу можуть здійснювати працівники jednostki nadrzędny або urzędu фінансового міністра для вказаних у тексті органів.",
        },
      ],
      legalEffect:
        "Стаття встановлює перелік допустимих представників, але не скасовує обов’язку підтвердити umocowanie та не робить будь-яку пораду юридичним представництвом.",
      foreignersCase:
        "Перед дорученням справи про pobyt перевірте, чи особа є adwokat, radca prawny, дозволеним родичем або іншою особою з прямо підтвердженою підставою за Art. 35.",
    },
  ]),
})
