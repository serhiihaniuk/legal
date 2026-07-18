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
      provisionId: "ustawa-o-cudzoziemcach-art-168a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("168a", "Art. 168a")} дозволяє названій особі, яка проживає в Польщі, подати wniosek за ${foreignersLaw.article("160", "Art. 160")} pkt 1, 3, 4 або 6 для іноземця за кордоном. Його згода або згода przedstawiciela ustawowego має бути виражена на встановленій формі, визначеній за ${foreignersLaw.article("107", "Art. 107")} ust. 1.`,
          sourceLocator: "Art. 168a ust. 1–3",
        },
      ],
      summary:
        "У цих окремих сімейних підставах заяву веде особа в Польщі, до якої приїжджає іноземець. Закон точно визначає і категорії такої особи, і форму згоди.",
      rules: [
        {
          locator: "Art. 168a ust. 1",
          explanation: foreignersLaw.text`Заявником може бути названий obywatel Polski, UE, EFTA, Szwajcarii або охоплений Umową Wystąpienia obywatel Zjednoczonego Królestwa, який проживає в Польщі. Маршрут діє лише для прямо перелічених пунктів ${foreignersLaw.article("160", "Art. 160")}.`,
        },
        {
          locator: "Art. 168a ust. 2–3",
          explanation:
            "Згода подається на встановленій формі, якщо заявник не є przedstawicielem ustawowym. Вона одночасно надає pełnomocnictwo лише у цьому провадженні.",
        },
      ],
      legalEffect: foreignersLaw.text`Стаття визначає процесуального заявника й представництво, але не замінює перевірки конкретної підстави ${foreignersLaw.article("160", "Art. 160")} та сімейних фактів.`,
      foreignersCase: foreignersLaw.text`Спочатку виберіть точний пункт ${foreignersLaw.article("160", "Art. 160")}, потім підтвердьте статус і проживання заявника в Польщі та додайте чинну форму zgody. Загальної згоди або довільного pełnomocnictwa може бути недостатньо.`,
    },
  ],
})
