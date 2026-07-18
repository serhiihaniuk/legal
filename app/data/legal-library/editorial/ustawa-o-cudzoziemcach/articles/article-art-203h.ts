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
      provisionId: "ustawa-o-cudzoziemcach-art-203h",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("203h", "Art. 203h")} виключає особисту явку дитини, якій на день подання не виповнилося 6 років, і заявника, який через належно підтверджену хворобу чи інвалідність не може прибути до urzędu wojewódzkiego.`,
          sourceLocator: "Art. 203h ust. 1–4",
        },
      ],
      summary:
        "Виняток змінює спосіб перевірки особи, але не звільняє справу від потрібних документів. Закон передбачає, хто і що подає замість особистої явки.",
      rules: [
        {
          locator: "Art. 203h ust. 1",
          explanation:
            "Медична підстава має бути підтверджена zaświadczeniem належного лікаря-спеціаліста, виданим не раніше ніж за 3 місяці до подання wniosku, і пояснювати неможливість особистої явки.",
        },
        {
          locator: "Art. 203h ust. 2",
          explanation:
            "Для дитини до 6 років organ дає особі, яка подала заяву від її імені, щонайменше 7 днів для пред’явлення чинного документа дитини.",
        },
        {
          locator: "Art. 203h ust. 3–4",
          explanation:
            "У медичному випадку заявник отримує щонайменше 7 днів для належно засвідченої копії документа та wzoru podpisu. Wezwanie може бути поєднане з формальними, платіжними й доказовими вимогами.",
        },
      ],
      legalEffect:
        "За наявності винятку organ переходить до передбачених замінних дій і не може робити звичайну особисту явку умовою продовження справи.",
      foreignersCase:
        "Перевірте вік на день подання або зміст і дату медичної довідки. Потім звірте, чи wezwanie адресоване правильній особі й вимагає саме той документ, який передбачає стаття.",
    },
  ],
})
