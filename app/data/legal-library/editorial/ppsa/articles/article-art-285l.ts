import { defineEditorialPart } from "../../define-editorial-part"

export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-285l",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "У питаннях, не врегульованих спеціальним розділом про скаргу щодо незаконності, відповідно застосовують правила касаційної скарги.",
          sourceLocator: "Art. 285l",
        },
      ],
      summary:
        "Стаття заповнює прогалини, не стираючи особливостей надзвичайного засобу.",
      rules: [
        {
          locator: "Art. 285l",
          explanation:
            "Спершу шукайте спеціальну норму цього розділу. Лише за її відсутності добирайте сумісне касаційне правило.",
        },
      ],
      legalEffect:
        "Відповідне застосування не перетворює цю скаргу на касацію й не скасовує вимог щодо шкоди, одноразовості та субсидіарності.",
      foreignersCase:
        "У справі іноземця представник повинен окремо перевірити, яке касаційне правило можна перенести, а яке суперечить природі цього засобу.",
    },
  ],
})
