import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-161",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Sąd видає postanowienie про umorzenie postępowania, якщо skarżący ефективно відкликав skarga, після смерті сторони за умов, коли предмет стосується лише особисто пов’язаних прав та обов’язків, або коли справа з інших причин стала bezprzedmiotowa; postanowienie може бути на posiedzenie niejawnym.",
          sourceLocator: "Art. 161 § 1–2",
        },
      ],
      summary:
        "Норма перелічує підстави umorzenie судового провадження, зокрема skuteczne cofnięcie skargi і bezprzedmiotowość.",
      rules: [
        {
          locator: "§ 1 pkt 1",
          explanation:
            "Cofnięcie skargi має бути skuteczne; сама заява про відкликання не замінює перевірки цієї умови.",
        },
        {
          locator: "§ 1 pkt 2–3",
          explanation:
            "Після смерті сторони перевірте особистий характер прав і можливість участі особи з interes prawny; окремо встановіть, чи справа стала bezprzedmiotowa.",
        },
        {
          locator: "§ 2",
          explanation:
            "Про umorzenie суд може постановити на posiedzenie niejawnym.",
        },
      ],
      legalEffect:
        "Umorzenie завершує судове postępowanie з процесуальної підстави, названої в нормі, і не є вирішенням законності рішення по суті.",
      foreignersCase:
        "У справі про pobyt обережно оцініть наслідки cofnięcie skargi або втрати предмета спору: umorzenie не означає, що decyzja стала законною по суті на користь іноземця.",
    },
  ],
})
