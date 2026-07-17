import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-14",
  entries: [
    {
      article: "16",
      provisionId: "kpa-art-16",
      reviewStatus: "reviewed",
      summary:
        "Стаття визначає остаточність і prawomocność decyzji та вказує, що остаточні рішення можна змінювати або усувати лише у передбачених законом режимах.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Decyzja є ostateczna, якщо в адміністративному ході не належить odwołanie або wniosek o ponowne rozpatrzenie; її зміна, uchylenie, nieważność чи wznowienie можливі лише за законом.",
        },
        {
          locator: "§ 2",
          explanation:
            "Decyzje можуть оскаржуватися до адміністративного суду через їхню незаконність за правилами окремих законів.",
        },
        {
          locator: "§ 3",
          explanation:
            "Остаточна decyzja, яку вже не можна оскаржити до суду, є prawomocna.",
        },
      ],
      legalEffect:
        "Після остаточності звичайний адміністративний шлях завершується, а втручання можливе лише через судовий або надзвичайний законний режим.",
      foreignersCase:
        "У справі іноземця потрібно відрізняти отримання decyzji, її ostateczność і prawomocność, бо кожен стан має інші можливості подальшого захисту.",
    },
  ],
})
