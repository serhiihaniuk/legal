import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "269",
      provisionId: "kpa-art-269",
      reviewStatus: "reviewed",
      summary:
        "Норма пояснює значення слова prawomocne щодо адміністративних рішень у інших законах. Зазвичай його слід розуміти як ostateczne, якщо контекст не вказує на рішення, перевірене судом або не оскаржене до суду в строк.",
      rules: [
        {
          locator: "загальне правило",
          explanation:
            "Decyzje названі в інших нормах prawomocnymi вважаються ostatecznymi.",
        },
        {
          locator: "виняток",
          explanation:
            "Інше значення діє, якщо з конкретного припису випливає, що йдеться про рішення, utrzymaną w mocy w postępowaniu sądowym, або не оскаржене до суду через сплив строку skargi.",
        },
      ],
      legalEffect:
        "Стаття уніфікує стару або неоднозначну термінологію та відрізняє адміністративну остаточність від судової правомочності, коли це випливає з контексту.",
      foreignersCase:
        "У справі іноземця слово prawomocna decyzja в іншому законі не слід автоматично трактувати як рішення після WSA. Спочатку діє значення ostateczna, якщо сам припис не вимагає судового етапу або спливу строку skargi.",
    },
  ],
})
