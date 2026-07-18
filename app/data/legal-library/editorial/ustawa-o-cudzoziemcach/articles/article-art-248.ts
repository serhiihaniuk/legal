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
      provisionId: "ustawa-o-cudzoziemcach-art-248",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Kartę pobytu іноземець отримує особисто, крім випадку, коли орган odstąpił від wezwania do osobistego stawiennictwa за ${foreignersLaw.article("106h", "art. 106h")} ust. 1, ${foreignersLaw.article("203h", "art. 203h")} ust. 1 або ${foreignersLaw.article("219h", "art. 219h")} ust. 1. Картку дитини до 13 років на день odbioru або особи, повністю ubezwłasnowolniona, отримує відповідно rodzic, opiekun чи kurator після пред’явлення чинного документа особи.`,
          sourceLocator: "Art. 248 ust. 1–2",
        },
        {
          kind: "statute-text",
          text: "Якщо дитині виповнилося 6 років до визначеної законом дати заяви або особа є повністю ubezwłasnowolniona, її присутність під час odbioru обов’язкова. Під час odbioru орган надає електронний czytnik для перевірки даних; іноземець показує чинний dokument podróży, а у szczególnie uzasadniony przypadek без можливості його отримати — інший dokument potwierdzający tożsamość.",
          sourceLocator: "Art. 248 ust. 2a–5",
        },
      ],
      summary:
        "Стаття визначає спосіб отримання karty pobytu та перевірку даних під час odbioru.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Заздалегідь з’ясуйте, чи діє виняток від особистого odbioru, і хто отримує документ за дитину до 13 років або повністю ubezwłasnowolniona особу. Представник має підтвердити власну особу чинним документом.",
        },
        {
          locator: "ust. 2a–5",
          explanation:
            "Присутність дитини від 6 років і повністю ubezwłasnowolniona особи є обов’язковою. Порівняйте електронні дані картки та підготуйте dokument podróży; інший документ особи допускається лише у szczególnie uzasadniony przypadek.",
        },
      ],
      legalEffect:
        "Стаття визначає належного отримувача, обов’язкову присутність окремих осіб, перевірку даних і документи для підтвердження особи під час odbioru.",
      foreignersCase:
        "До odbioru перевірте вік дитини на належну дату, необхідність її присутності та повноваження rodzic, opiekun або kurator. Візьміть dokument podróży і одразу звірте дані, фото, adnotacje та дати.",
    },
  ],
})
