import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
const kpaLaw = createLegalTextAuthor("kpa")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-219c",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Заяву про zezwolenie na pobyt rezydenta długoterminowego UE подають електронно через MOS на формулярі з ${foreignersLaw.article("219", "Art. 219")} ust. 1, доступному в цій системі.`,
          sourceLocator: "Art. 219c ust. 1",
        },
        {
          kind: "statute-text",
          text: kpaLaw.text`До способу подання цієї заяви не застосовуються перше і друге речення ${kpaLaw.article("63", "art. 63 § 1 KPA")}. Заяву, подану іншим способом, залишають без розгляду.`,
          sourceLocator: "Art. 219c ust. 2–3",
        },
      ],
      summary:
        "Стаття робить MOS обов’язковим каналом подання заяви про статус rezydenta długoterminowego UE.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Потрібно використати електронний формуляр саме в MOS. Паперовий примірник або інший електронний канал не відповідає встановленому способу.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Спеціальна норма відступає від загальних способів внесення podań за KPA. Наслідок неправильного каналу прямо визначений як pozostawienie bez rozpoznania.",
        },
      ],
      legalEffect:
        "Подання поза MOS не запускає змістовного розгляду заяви: орган залишає її без розгляду.",
      foreignersCase:
        "Збережіть підтвердження роботи в MOS і не покладайтеся на паперове подання, електронну пошту чи загальну електронну скриньку органу. Далі окремо перевірте підпис і UPO, бо вони визначають момент подання.",
    },
  ],
})
