import { defineKpaEditorialPart } from "../define-kpa-part"
export default defineKpaEditorialPart({
  documentId: "kpa",
  editionId: "kpa-2025-1691",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      article: "83",
      provisionId: "kpa-art-83",
      reviewStatus: "reviewed",
      summary:
        "Стаття встановлює загальний обов’язок свідчити, право близьких осіб відмовитися від zeznań та право не відповідати на окреме питання через визначені ризики або таємницю.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Ніхто не може відмовитися від zeznań без законної підстави; право повної відмови мають małżonek, wstępni, zstępni, rodzeństwo, powinowaci першого ступеня та особи у відносинах przysposobienia, opieki або kurateli, також після припинення цих відносин.",
        },
        {
          locator: "§ 2",
          explanation:
            "Świadek може не відповідати на конкретне питання, якщо відповідь загрожує йому або близьким odpowiedzialnością karną, hańbą, bezpośrednią szkodą majątkową або порушенням chronionej tajemnicy zawodowej.",
        },
        {
          locator: "§ 3",
          explanation:
            "Перед допитом organ попереджає про право відмови та про odpowiedzialność za fałszywe zeznania.",
        },
        {
          locator: "§ 4",
          explanation:
            "Mediator не може свідчити про факти, які дізнався під час mediacji, якщо її учасники не звільнили його від tajemnicy mediacji.",
        },
      ],
      legalEffect:
        "Право відмови захищає конкретні сімейні й таємнісні інтереси, тоді як поза цими межами діє обов’язок давати правдиві zeznania.",
      foreignersCase:
        "У справі pobytowej członek rodziny або інша особа може бути свідком, але organ повинен роз’яснити їй належні права до допиту.",
    },
  ],
})
