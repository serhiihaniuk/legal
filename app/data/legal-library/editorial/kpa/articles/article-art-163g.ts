import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "163g",
      provisionId: "kpa-art-163g",
      reviewStatus: "reviewed",
      summary:
        "Стаття обмежує самостійне оскарження postanowień у спрощеному провадженні. Більшість заперечень можна заявити лише разом з оскарженням рішення.",
      rules: [
        {
          locator: "загальне правило",
          explanation:
            "Postanowienia, видані в ході спрощеної справи, оскаржують у odwołaniu від decyzji, а не окремим zażaleniem.",
        },
        {
          locator: "винятки",
          explanation:
            "Окремий контроль зберігається для postanowień, виданих після рішення, щодо zawieszenia або odmowy podjęcia postępowania, а також коли спеціальний закон прямо допускає оскарження (zażalenie).",
        },
      ],
      legalEffect:
        "Проміжна процесуальна помилка зазвичай не запускає окреме оскарження, але може бути поставлена в odwołaniu від кінцевого рішення.",
      foreignersCase:
        "У спрощеній справі іноземця слід зберегти заперечення до проміжного postanowienia і включити їх до odwołania, якщо воно не належить до прямо названих винятків.",
    },
  ],
})
