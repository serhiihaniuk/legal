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
      provisionId: "ustawa-o-cudzoziemcach-art-106h",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("106h", "Art. 106h")} скасовує wezwanie do osobistego stawiennictwa для дитини, якій на день подання ще не виповнилося 6 років, а також для особи, яка через підтверджену хворобу чи інвалідність не може прибути до urzędu wojewódzkiego.`,
          sourceLocator: "Art. 106h ust. 1–4",
        },
      ],
      summary:
        "Виняток стосується способу виконання дій, а не всієї процедури. Документ тотожності, а в медичному випадку також зразок підпису, подають за спеціальним порядком після wezwania.",
      rules: [
        {
          locator: "Art. 106h ust. 1",
          explanation:
            "Для медичного винятку потрібне zaświadczenie від належного лікаря-спеціаліста, видане не раніше ніж за 3 місяці до подання wniosku. Саме ускладнення подорожі або загальна довідка не дорівнює доказу неможливості особистої явки.",
        },
        {
          locator: "Art. 106h ust. 2",
          explanation:
            "Щодо дитини до 6 років organ викликає особу, яка подала заяву від її імені, і дає щонайменше 7 днів для пред’явлення документа дитини.",
        },
        {
          locator: "Art. 106h ust. 3–4",
          explanation:
            "У медичному випадку заявник отримує щонайменше 7 днів для подання належно засвідченої копії документа тотожності та wzoru podpisu. Це wezwanie може бути поєднане з іншими вимогами провадження.",
        },
      ],
      legalEffect:
        "За наявності законного винятку organ не може вимагати особистої явки як звичайної умови, але може вимагати передбачені статтею замінні документи й дії.",
      foreignersCase:
        "Спочатку встановіть вік саме на день подання або перевірте дату й зміст медичної довідки. Потім прочитайте wezwanie: воно має бути спрямоване належній особі й містити відповідну замінну дію.",
    },
  ],
})
