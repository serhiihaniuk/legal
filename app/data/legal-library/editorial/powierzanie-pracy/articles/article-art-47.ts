import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-47",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("47", "Art. 47")} вимагає, щоб wniosek про sezonowe zezwolenie, крім даних ${workLaw.external("art. 9¹", "https://eli.gov.pl/eli/DU/2025/277/ogl")}, містив дату в'їзду до państw obszaru Schengen і дані про pobyt у Польщі, включно з правовою підставою; також подається oświadczenie про zakwaterowanie або власне забезпечення житла та відомості про передбачену оплачувану відпустку.`,
          sourceLocator: "Art. 47 pkt 1–3",
        },
      ],
      summary:
        "Сезонний wniosek вимагає більше, ніж загальний wniosek: орган має бачити історію в'їзду, актуальну підставу pobyt, житло та оплачувану відпустку.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Зазначте дату в'їзду до Schengen і стан побуту cudzoziemiec у Польщі на день wniosek разом із правовою підставою.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Polski podmiot подає oświadczenie, що забезпечує zakwaterowanie, або що, за його знанням, cudzoziemiec забезпечує його сам.",
        },
        {
          locator: "pkt 3",
          explanation:
            "Wniosek також містить інформацію про очікувану оплачувану відпустку cudzoziemiec.",
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("47", "Art. 47")} визначає зміст доказів для сезонного дозволу, але подання wniosek не створює legalny pobyt і не замінює дозвіл на роботу.`,
      foreignersCase:
        "Звірте дату перетину кордону, документ і підставу pobyt, дані про житло та відпустку з фактичними обставинами. Зберігайте підтвердження, але не вважайте wniosek самостійним документом перебування.",
    },
  ],
})
