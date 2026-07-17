import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-282",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 282 § 1 вимагає розгляду справи наново в межах підстави wznowienia; § 2 передбачає oddalenie або uwzględnienie skargi із відповідним застосуванням правил провадження перед судом, який wznowił postępowanie, або uchylenie оскарженого orzeczenia з odrzuceniem skargi чи umorzeniem postępowania. Для випадку Art. 273 § 3 передбачені спеціальні варіанти щодо prawomocne orzeczenia тієї самої справи.",
          sourceLocator: "Art. 282 § 1–3",
        },
      ],
      summary:
        "Стаття визначає межі повторного розгляду і можливі результати skarga o wznowienie, включно зі спеціальним правилом для кількох рішень в одній справі.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Обсяг нового розгляду визначає не загальна незгода сторони, а конкретна podstawa wznowienia.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Після повторного розгляду суд може oddalić або uwzględnić skargę, або uchylić оскаржене orzeczenie і odrzucić skargę чи umorzyć postępowanie; § 3 окремо регулює prawomocne orzeczenia тієї самої справи.",
        },
      ],
      legalEffect:
        "Результат залежить від підстави wznowienia та Art. 282 § 2–3: суд може oddalić або uwzględnić skargę, uchylić orzeczenie з odrzuceniem skargi чи umorzeniem postępowania, а в ситуації Art. 273 § 3 — вирішити щодо одного чи кількох prawomocne orzeczenia. Це не означає автоматичного надання іноземцю pobyt або автоматичної зміни адміністративної decyzja.",
      foreignersCase:
        "Після wznowienie у справі іноземця визначте, яку саме podstawa обмежила повторний розгляд і який результат зазначено в sentencja. Не припускайте, що сама skarga відновлює дозвіл на pobyt.",
    },
  ]),
})
