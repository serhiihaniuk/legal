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
      provisionId: "ustawa-o-cudzoziemcach-art-139f",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("139f", "Art. 139f")} перелічує підстави odmowa udzielenia zezwolenia за ${foreignersLaw.article("139a", "art. 139a")} та додаткові підстави для kolejnego zezwolenia, зокрема проблеми pracodawca macierzysty або jednostka przyjmująca, неправдиві дані, ліміт і завершення строку przeniesienia.`,
          sourceLocator: "Art. 139f ust. 1–2",
        },
      ],
      summary:
        "Стаття розділяє первинну та наступну ICT-заяву і називає окремі обставини odmowa udzielenia.",
      rules: [
        {
          locator: "ust. 1 pkt 1–5",
          explanation:
            "Для першого zezwolenia названі, серед іншого, створення jednostka головно для полегшення в’їзду, загроза zdrowie publiczne, неправдиві дані або документи, порушення podmiot щодо składek/podatków/діяльності та досягнення річного ліміту.",
        },
        {
          locator: "ust. 2 pkt 1–3",
          explanation:
            "Для kolejnego zezwolenia додатково значущі використання попереднього pobyt не за метою, завершення строку przeniesienia 3 роки для kadra/specjalista або 1 рік для стажера та подання під час nielegalny pobyt.",
        },
      ],
      legalEffect:
        "Норма передбачає odmowa за перелічених фактів, але їх наявність має бути встановлена у конкретному провадженні; не кожна згадка про ризик доводить його існування.",
      foreignersCase:
        "Розділіть первинну й наступну заяву, складіть докази для jednostka та документів і порахуйте весь період ICT у ЄС за відповідною роллю.",
    },
  ],
})
