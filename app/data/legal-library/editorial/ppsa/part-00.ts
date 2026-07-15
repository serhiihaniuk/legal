import { createLegalTextAuthor, type LegalTextValue } from "../../legal-text"
import { defineEditorialPart } from "../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")

export const ppsaPart00 = defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-3",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: ppsaLaw.text`${ppsaLaw.article("3", "Art. 3 § 1")} встановлює контроль sądów administracyjnych над діяльністю administracji publicznej, а ${ppsaLaw.article("3", "§ 2")} перелічує основні категорії skarg.`,
          sourceLocator: "Art. 3 § 1–2",
        },
        {
          kind: "practical-inference",
          text: "Перед skargą треба визначити точний предмет контролю й перевірити окремі правила допустимості та строку в інших статтях p.p.s.a.",
          sourceLocator: "Art. 3 § 2",
        },
      ],
      summary:
        "Стаття окреслює предмет контролю sądów administracyjnych. Вона показує, на які рішення, postanowienia, інші акти, дії, бездіяльність або przewlekłość може поширюватися судовий контроль.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Sąd administracyjny контролює діяльність administracji publicznej і застосовує засоби, передбачені p.p.s.a.",
        },
        {
          locator: "§ 2",
          explanation:
            "Перелік визначає категорії предметів skargi. Для конкретного письма треба знайти відповідний пункт, а не виходити лише з назви документа.",
        },
        {
          locator: "§ 3",
          explanation:
            "Окремо охоплюються випадки, коли спеціальний закон передає sądowi administracyjnemu інші справи.",
        },
      ],
      legalEffect:
        "Норма відкриває предметну рамку судового контролю, але сама не встановлює всіх умов wniesienia skargi, строку чи способу розгляду.",
      foreignersCase:
        "Після адміністративної справи про pobyt спочатку визначте, що саме оскаржується: decyzja, postanowienie, bezczynność чи przewlekłość. Потім перевірте остаточність, належний шлях, строк і вимоги до skargi.",
    },
  ],
})
