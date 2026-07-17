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
      provisionId: "ustawa-o-cudzoziemcach-art-168a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("168a", "Art. 168a")} визначає, хто подає з Польщі заяву за cudzoziemiec за кордоном для permit з ${foreignersLaw.article("160", "art. 160")} pkt 1, 3, 4 або 6, і вимагає письмової згоди цього cudzoziemiec або його przedstawiciel ustawowy.`,
          sourceLocator: "Art. 168a ust. 1–3",
        },
      ],
      summary:
        "У визначених сімейних випадках заявником є особа referencyjna, яка живе в Польщі, а не іноземець, що перебуває за кордоном.",
      rules: [
        {
          locator: "ust. 1",
          explanation: foreignersLaw.text`Заявником може бути obywatel polski, obywatel UE/EFTA/Швейцарії або визначений obywatel UK, який мешкає в Польщі і до якого cudzoziemiec приїжджає; правило охоплює лише ${foreignersLaw.article("160", "art. 160")} pkt 1, 3, 4 або 6.`,
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Подання від імені cudzoziemiec вимагає його письмової згоди або згоди його przedstawiciel ustawowy, якщо заявник не є таким представником; згода є pełnomocnictwo лише для цього postępowanie.",
        },
      ],
      legalEffect: foreignersLaw.text`Норма визначає процесуального заявника для окремих підстав ${foreignersLaw.article("160", "art. 160")}, але не замінює перевірку залежності, життя rodzinne, дат Umowa Wystąpienia чи інших матеріальних умов.`,
      foreignersCase: foreignersLaw.text`Додайте письмову згоду, підтвердження статусу й проживання особи в Польщі та документи, що показують точний pkt ${foreignersLaw.article("160", "art. 160")}; не подавайте загальну заяву «як родич».`,
    },
  ],
})
