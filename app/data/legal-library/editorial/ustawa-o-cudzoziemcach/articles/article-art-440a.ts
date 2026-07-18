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
      provisionId: "ustawa-o-cudzoziemcach-art-440a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Точний текст ${foreignersLaw.article("440a", "Art. 440a")} ust. 1: «Decyzję o odmowie wjazdu i pobytu cudzoziemca na terytorium państw obszaru Schengen wydaje się, jeżeli» наявна безпекова або прямо названа кримінальна/обхідна підстава.`,
          sourceLocator: "Art. 440a ust. 1",
        },
        {
          kind: "practical-inference",
          text: "Це спеціальна decyzja з особливими правилами: вона є ostateczna, не вручається адресату, а KPA у цьому провадженні не застосовується.",
          sourceLocator: "Art. 440a ust. 2–10",
        },
      ],
      summary:
        "Szef Urzędu видає decyzja про відмову у в’їзді та pobyt на території держав Schengen за безпековими підставами або визначеним вироком чи обходом правил; рішення враховує особисту ситуацію, є остаточним і не вручається cudzoziemiec.",
      rules: [
        {
          locator: "ust. 1 pkt 1–2",
          explanation:
            "Підставою є оборона, безпека або порядок, або вирок у Польщі чи іншій державі Schengen на позбавлення волі понад рік, чи дії для обходу правил в’їзду або pobyt.",
        },
        {
          locator: "ust. 2–6",
          explanation: foreignersLaw.text`Рішення видає Szef Urzędu з urzędu або на wniosek органів ${foreignersLaw.article("440", "Art. 440")}; він враховує особисту ситуацію й визначає строк, а неврахований wniosek може бути переданий minister.`,
        },
        {
          locator: "ust. 7–10",
          explanation:
            "Decyzja є ostateczna, її не doręcza się cudzoziemcowi, а в цьому провадженні не застосовується KPA; ті самі правила діють для продовження wpis на наступний період.",
        },
      ],
      legalEffect:
        "Decyzja створює заборону в’їзду і pobyt у межах території держав Schengen на визначений строк та має спеціальну процедуру. Її наслідок треба відрізняти від звичайного рішення про повернення.",
      foreignersCase: foreignersLaw.text`Встановіть конкретну підставу ${foreignersLaw.article("440a", "Art. 440a")}, строк і дані SIS/wykaz; для подальшого захисту враховуйте спеціальний wniosek про uchylenie за ${foreignersLaw.article("444", "Art. 444")}, а не лише загальні правила KPA.`,
    },
  ],
})
