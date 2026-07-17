import { defineEditorialPart } from "../../define-editorial-part"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-163",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Postanowienie, оголошене на rozprawa, суд мотивує, якщо воно підлягає оскарженню, і doręcza сторонам; postanowienie з posiedzenie niejawnym doręczaється з urzędu, а за наявності środka zaskarżenia — з uzasadnieniem та pouczeniem для сторони без професійного представника. Uzasadnienie складається протягом семи днів.",
          sourceLocator: "Art. 163 § 1–3",
        },
      ],
      summary:
        "Норма регулює мотивування, doręczenie і pouczenie щодо postanowienie залежно від способу його винесення та оскаржуваності.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Для postanowienie на rozprawa з’ясуйте, чи воно підлягає оскарженню: саме це запускає правило про uzasadnienie і doręczenie.",
        },
        {
          locator: "§ 2",
          explanation:
            "Для posiedzenie niejawne очікуйте doręczenie з urzędu; якщо є środek zaskarżenia, має бути uzasadnienie та pouczenie для особи без представника.",
        },
        {
          locator: "§ 3",
          explanation:
            "Строк складання uzasadnienie — сім днів від wydania postanowienie.",
        },
      ],
      legalEffect:
        "Стаття визначає оформлення та інформування сторони, але не встановлює сама повного режиму строку конкретного засобу оскарження.",
      foreignersCase:
        "Отримавши postanowienie у справі про pobyt, збережіть дату і спосіб doręczenie, текст uzasadnienie та pouczenie. Відсутність представника має значення лише за умов, названих статтею.",
    },
  ],
})
