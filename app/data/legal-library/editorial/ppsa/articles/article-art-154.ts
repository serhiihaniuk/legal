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
      provisionId: "ppsa-art-154",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "У разі невиконання wyrok, що задовольнив skarga на bezczynność або przewlekłość, після попереднього письмового wezwanie органу сторона може подати skarga з вимогою grzywna; суд може вирішити право або обов’язок, встановлює rażące naruszenie, а наступне виконання після подання цієї skarga не є підставою для її umorzenie чи oddalenie.",
          sourceLocator: "Art. 154 § 1–7",
        },
      ],
      summary:
        "Стаття дає окремий шлях реагування на невиконання судового рішення щодо бездіяльності або протяглості та передбачає grzywna, суму і можливе odszkodowanie.",
      rules: [
        {
          locator: "§ 1–3",
          explanation: ppsaLaw.text`Перед новою skarga потрібне письмове wezwanie органу; подальше виконання після її подання саме по собі не припиняє справу за ${ppsaLaw.article("154", "§ 3")}.`,
        },
        {
          locator: "§ 4–5",
          explanation:
            "Особа зі шкодою може мати roszczenie про odszkodowanie; за невиплату органом протягом трьох місяців передбачено повództwo до sąd powszechny.",
        },
        {
          locator: "§ 6–7",
          explanation: ppsaLaw.text`Grzywna та сума на користь skarżący мають межі, прямо прив’язані до середньої зарплати або ${ppsaLaw.article("154", "art. 154 § 6")}.`,
        },
      ],
      legalEffect:
        "Захист за цією статтею виникає після невиконання відповідного wyrok і попереднього письмового wezwanie; фінансовий наслідок не замінює автоматично адміністративне рішення.",
      foreignersCase:
        "Після wyrok про bezczynność у справі про pobyt збережіть його, письмове wezwanie та докази невиконання. Нова skarga спрямована на виконання рішення, а не гарантує позитивного змісту decyzja.",
    },
  ],
})
