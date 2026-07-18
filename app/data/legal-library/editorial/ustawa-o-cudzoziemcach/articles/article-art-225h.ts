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
      provisionId: "ustawa-o-cudzoziemcach-art-225h",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Якщо іноземець або особа, яка подає заяву від його імені, не підписала заяву про pobyt czasowy, stały або rezydenta długoterminowego UE кваліфікованим, особистим чи довіреним електронним підписом, дані заяви з ${foreignersLaw.article("225d", "Art. 225d")} pkt 2–4 видаляються з MOS через 45 днів від останньої операції над цією заявою.`,
          sourceLocator: "Art. 225h",
        },
      ],
      summary:
        "Стаття встановлює строк життя непідписаної електронної заяви в MOS.",
      rules: [
        {
          locator: "Art. 225h",
          explanation:
            "Сорок п’ять днів рахують від останньої teleinformatycznej operacji саме над заявою, а не від створення konto чи першого заповнення формуляра.",
        },
      ],
      legalEffect:
        "Без належного електронного підпису дані чернетки не зберігаються безстроково й підлягають видаленню після 45 днів без нової операції.",
      foreignersCase:
        "Не сприймайте заповнену, але непідписану форму як подану заяву. Перед спливом 45 днів перевірте підпис, відправлення та UPO; за потреби збережіть власну копію введених даних.",
    },
  ],
})
