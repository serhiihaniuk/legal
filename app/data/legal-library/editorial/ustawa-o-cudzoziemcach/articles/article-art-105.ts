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
      provisionId: "ustawa-o-cudzoziemcach-art-105",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("105", "Art. 105")} вимагає подати wniosek o zezwolenie na pobyt czasowy не пізніше останнього дня legalnego pobytu в Польщі. За малолітню особу заяву подають батьки чи опікуни або один із них, за повністю недієздатну — opiekun, а за малолітню без опіки — kurator.`,
          sourceLocator: "Art. 105 ust. 1–2",
        },
      ],
      summary:
        "Стаття відповідає на два питання: до якого дня треба подати заяву і хто робить це від імені особи, яка не може діяти самостійно. Вона більше не встановлює особисте паперове подання як загальне правило.",
      rules: [
        {
          locator: "Art. 105 ust. 1",
          explanation: foreignersLaw.text`Граничний день визначають за фактичною підставою legalnego pobytu, а не за строком дії роботи, договору чи паспорта. Далі треба встановити юридичний момент електронного подання за ${foreignersLaw.article("106d", "Art. 106d")}.`,
        },
        {
          locator: "Art. 105 ust. 2",
          explanation:
            "Статус заявника підтверджують окремо: батьківство або опіку над дитиною, opiekę над повністю недієздатною особою чи ustanowienie kuratora для малолітньої особи без опіки.",
        },
      ],
      legalEffect:
        "Своєчасність заяви залежить від того, чи вона юридично подана до кінця останнього дня legalnego pobytu. Для представницьких випадків так само важливо, щоб діяв належний заявник.",
      foreignersCase:
        "Побудуйте календар усіх підстав pobytu до дня подання, а потім перевірте UPO та належний електронний підпис. Для дитини або недієздатної особи додайте документ, що підтверджує роль заявника.",
    },
  ],
})
