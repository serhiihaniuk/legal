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
      provisionId: "ustawa-o-cudzoziemcach-art-210",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Decyzję про udzielenie zezwolenia na pobyt stały видають протягом 6 місяців; цей строк рахується від останньої з подій: особистого подання або stawiennictwo, формально повного wniosku чи усунення braków, подання документів за ${foreignersLaw.article("203", "art. 203")} ust. 2 pkt 2 або безрезультатного спливу строку на їх подання.`,
          sourceLocator: "Art. 210 ust. 1–2",
        },
        {
          kind: "statute-text",
          text: "Postępowanie odwoławcze у справі про pobyt stały закінчується протягом 90 днів; якщо odwołanie має braki, строк рахується від їх усунення.",
          sourceLocator: "Art. 210 ust. 3–4",
        },
      ],
      summary:
        "Стаття встановлює спеціальний 6-місячний строк першої інстанції та 90-денний строк odwoławcze postępowanie.",
      rules: [
        {
          locator: "ust. 1–2",
          explanation:
            "Початковою датою є не завжди дата подання: визначте останню з прямо перелічених подій і перевірте формальну повноту матеріалів.",
        },
        {
          locator: "ust. 3–4",
          explanation:
            "Для odwołanie з braki строк не починається до їх усунення; сам строк не означає автоматичного надання zezwolenia.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("210", "Art. 210")} визначає строки розгляду, але пропуск строку не перетворює заяву автоматично на позитивне рішення; наслідки бездіяльності треба оцінювати окремо.`,
      foreignersCase:
        "Зберігайте підтвердження кожної події, що запускає строк, wezwanie про braki та дату їх усунення; окремо рахуйте першу й апеляційну інстанції.",
    },
  ],
})
