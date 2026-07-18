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
      provisionId: "ustawa-o-cudzoziemcach-art-139e",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("139e", "Art. 139e")} визначає випадки odmowa wszczęcia postępowania про zezwolenie за ${foreignersLaw.article("139a", "art. 139a")}: коли перший або найдовший pobyt у ЄС має бути в іншій державі-члені, або коли на день wniosku наявні перелічені zezwolenia, статус pobyt чи модель роботи.`,
          sourceLocator: "Art. 139e pkt 1–2 lit. a–g (у т. ч. lit. ba)",
        },
      ],
      summary:
        "Стаття встановлює процесуальні бар’єри для ICT-заяви залежно від маршруту мобільності, статусу cudzoziemca та способу організації роботи.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Провадження не починають, якщо перший або найдовший pobyt у ЄС в рамках przeniesienia має бути в іншій державі-члені.",
        },
        {
          locator: "pkt 2 lit. a–g",
          explanation: foreignersLaw.text`Також названо заяву або наявність zezwolenia за ${foreignersLaw.article("144", "art. 144")} (lit. a), ${foreignersLaw.article("151", "art. 151")} (lit. b) чи ${foreignersLaw.article("151b", "art. 151b")} (lit. ba), відрядження (lit. c), działalność gospodarczą (lit. d), роботу через agencję/udostępnianie або посередництво (lit. e), pobyt у Польщі поза винятком kolejnego zezwolenia на підставі ${foreignersLaw.article("139a", "art. 139a")} (lit. f) чи pobyt в іншій державі ЄС (lit. g).`,
        },
      ],
      legalEffect: foreignersLaw.text`Ці обставини стосуються wszczęcia провадження, а не є автоматичним висновком про відсутність усіх матеріальних умов ${foreignersLaw.article("139a", "art. 139a")}.`,
      foreignersCase:
        "На день подання визначте перший/найдовший pobyt, державу фактичного перебування, інші zezwolenia та реальну модель праці; саме ці факти запускають або виключають правило.",
    },
  ],
})
