import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-265",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 265 робить обов’язковою участь Prokurator Generalny або його заступника у засіданні повного складу NSA або Izba. У засіданні складу семи sędziów бере участь прокурор Prokuratura Krajowa або прокурор іншої jednostka organizacyjna prokuratury, делегований до виконання дій у Prokuratura Krajowa та призначений Prokurator Generalny або його заступником.",
          sourceLocator: "Art. 265",
        },
      ],
      summary:
        "Стаття встановлює обов’язкову участь визначених представників прокуратури в засіданнях NSA, де приймаються uchwały у передбачених складах.",
      rules: [
        {
          locator: "Art. 265 zdanie pierwsze",
          explanation:
            "Для повного складу NSA або Izba перевірте участь Prokurator Generalny чи його zastępca — закон називає її обов’язковою.",
        },
        {
          locator: "Art. 265 zdanie drugie",
          explanation:
            "Для складу семи sędziów встановіть статус і спосіб призначення прокурора: потрібні названі в статті делегування та призначення до участі.",
        },
      ],
      legalEffect:
        "Норма визначає склад учасників засідання для uchwała NSA, але сама участь прокурора не передбачає змісту або результату uchwała.",
      foreignersCase:
        "Якщо у справі іноземця цитують uchwała, відокремте обов’язкову участь представника прокуратури за Art. 265 від правової сили та змісту конкретного висновку. Не робіть висновку про результат pobyt лише з присутності цього учасника.",
    },
  ]),
})
