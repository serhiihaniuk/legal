import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const regulationLaw = createLegalTextAuthor(
  "rozporzadzenie-wniosek-pobyt-czasowy"
)
export default defineEditorialPart<"rozporzadzenie-wniosek-pobyt-czasowy">({
  documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
  editionId: "rozporzadzenie-wniosek-pobyt-czasowy-2026-553",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-3",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: regulationLaw.text`${regulationLaw.annex("3", "Załącznik nr 3")} є WZÓR другого додатка до wniosku для osoby, яка просить zezwolenie у зв’язку з роботою, що потребує високих кваліфікацій, або довгостроковою мобільністю posiadacza Niebieskiej Karty UE; він містить dane osobowe, поля про wyższe kwalifikacje, formalne kwalifikacje та умови, а також секції про проживання в іншій державі UE протягом 12 або 6 місяців.`,
          sourceLocator: "Załącznik nr 3, nagłówek, Uwaga та części I–V",
        },
      ],
      summary:
        "Це wzór додатка для двох названих робочих режимів. Його поля призначені для опису кваліфікацій та окремих обставин мобільності іноземця.",
      rules: [
        {
          locator: "nagłówek та Uwaga",
          explanation:
            "За текстом формуляр заповнює сам cudzoziemiec, який просить один із двох названих видів zezwolenia.",
        },
        {
          locator: "części I–III",
          explanation:
            "Є dane osobowe та поля для wyższe kwalifikacje zawodowe в нерегульованій професії, а також formalne kwalifikacje й інші умови для регульованої професії.",
        },
        {
          locator: "części IV–V",
          explanation:
            "Форма запитує дані про проживання в іншій державі-члені UE щонайменше 12 або 6 місяців на підставі виданого документа, з датами та реквізитами, показаними в полях.",
        },
      ],
      legalEffect: regulationLaw.text`${regulationLaw.annex("3", "Załącznik nr 3")} упорядковує відомості про кваліфікації та мобільність, але запис у ньому сам по собі не доводить відповідність матеріальним умовам роботи чи pobyt.`,
      foreignersCase:
        "Визначте, чи описуєте нерегульовану чи регульовану професію, і заповнюйте саме відповідні поля разом із реквізитами документів. Перевірте періоди проживання та не підміняйте formularz оригінальними доказами.",
    },
  ],
})
