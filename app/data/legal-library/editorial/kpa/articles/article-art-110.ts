import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "110",
      provisionId: "kpa-art-110",
      reviewStatus: "reviewed",
      summary:
        "Орган стає пов’язаний власною decyzją з моменту її doręczenia або ogłoszenia, а при milczącym załatwieniu — з визначеного законом наступного дня.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Після вручення чи оголошення орган не може довільно змінити видану decyzję поза передбаченими режимами.",
        },
        {
          locator: "§ 2",
          explanation:
            "У разі мовчазного вирішення справи (milczące załatwienie sprawy) орган стає пов’язаним результатом наступного дня після спливу строку на видання акта або внесення sprzeciw.",
        },
      ],
      legalEffect:
        "Зміст розв’язання стабілізується для органу в законно визначений момент.",
      foreignersCase:
        "У справі іноземця дата doręczenia важлива не лише для оскарження, а й для моменту, від якого орган пов’язаний виданим результатом.",
    },
  ],
})
