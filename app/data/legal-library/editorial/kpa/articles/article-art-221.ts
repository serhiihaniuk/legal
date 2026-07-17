import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "221",
      provisionId: "kpa-art-221",
      reviewStatus: "reviewed",
      summary:
        "Стаття вводить правила реалізації конституційного права подавати skargi і wnioski. Вона визначає допустимий інтерес заявника та межі звернень до суспільних організацій і установ.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Право звертатися зі skargami і wnioskami до державних, самоврядних та визначених суспільних органів реалізується за правилами цього розділу KPA.",
        },
        {
          locator: "§ 2",
          explanation:
            "До organizacji i instytucji społecznych такі звернення подаються у зв'язку з виконанням ними доручених завдань публічної адміністрації.",
        },
        {
          locator: "§ 3",
          explanation:
            "Звернення може захищати публічний, власний або чужий інтерес; для чужого інтересу потрібна згода цієї особи.",
        },
      ],
      legalEffect:
        "Звернення, що відповідає цим межам, підлягає розгляду в режимі działu VIII KPA, а не автоматично як odwołanie чи інша процесуальна заява.",
      foreignersCase:
        "Іноземець може поскаржитися на орган у власному інтересі, а представник чи інша особа — в його інтересі за згодою. Така skarga не замінює засобу оскарження конкретної decyzji.",
    },
  ],
})
