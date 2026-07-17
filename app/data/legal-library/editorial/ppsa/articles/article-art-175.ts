import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-175",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`Skarga kasacyjna за загальним правилом має бути складена adwokat або radca prawny; ${ppsaLaw.article("175", "§ 2–3")} встановлюють винятки для окремих професій і суб’єктів, зокрема sędzia, prokurator, notariusz, radca Prokuratorii Generalnej, profesor або doktor habilitowany nauk prawnych, а також визначені справи для doradca podatkowy чи rzecznik patentowy. Corpus окремо зазначає перехід між двома редакціями ${ppsaLaw.article("175", "§ 3")} pkt 1 та дату майбутньої зміни 1.10.2029.`,
          sourceLocator: "Art. 175 § 1–3, przypisy 56–57",
        },
      ],
      summary:
        "Стаття встановлює професійне представництво при складанні skarga kasacyjna та вузькі винятки, частина яких має перехідну редакцію в corpus.",
      rules: [
        {
          locator: "§ 1–2a",
          explanation:
            "Спочатку застосовується правило про adwokat або radca prawny; далі перевірте точно названий статус сторони, представника чи органу.",
        },
        {
          locator: "§ 3 pkt 1, przypisy 56–57",
          explanation:
            "Виняток для doradca podatkowy має предметні межі, а corpus розрізняє чинне формулювання та редакцію, що набуде чинності 1.10.2029.",
        },
        {
          locator: "§ 3 pkt 2",
          explanation:
            "Rzecznik patentowy названий лише у справах власності промислової, не як загальний виняток.",
        },
      ],
      legalEffect:
        "Недодержання вимоги про професійне складання може мати процесуальне значення, але конкретний наслідок і виняток треба перевіряти за всіма приписами та статусом учасника.",
      foreignersCase: ppsaLaw.text`Для типової skarga kasacyjna у справі про pobyt не припускайте, що її може скласти будь-хто: перевірте правило про adwokat або radca prawny і чи справді застосовний виняток. Не переносіть майбутню редакцію ${ppsaLaw.article("175", "§ 3")} на дату 2026 року.`,
    },
  ],
})
