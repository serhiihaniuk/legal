import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-264",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 264 встановлює, що uchwały, передбачені Art. 15 § 1 pkt 2 і 3, Naczelny Sąd Administracyjny приймає у складі семи sędziów, усієї Izba або повного складу. Uchwały за Art. 15 § 1 pkt 2 приймаються на wniosek Prezesa NSA, Prokuratora Generalnego, Prokuratorii Generalnej Rzeczypospolitej Polskiej, Rzecznika Praw Obywatelskich, Rzecznika Małych i Średnich Przedsiębiorców або Rzecznika Praw Dziecka, а за pkt 3 — на підставі postanowienie складу, що розглядає справу. Президент NSA направляє wniosek до відповідного складу; склад семи sędziów може передати zagadnienie правове повному складу Izba, а Izba — повному NSA.",
          sourceLocator: "Art. 264 § 1–4",
        },
      ],
      summary:
        "Стаття визначає склад NSA та ініціаторів для спеціальних uchwały щодо правових питань, а також можливість передати питання до ширшого складу.",
      rules: [
        {
          locator: "§ 1",
          explanation:
            "Уточніть, чи йдеться про uchwała за Art. 15 § 1 pkt 2 або pkt 3, і перевірте склад: сім sędziów, уся Izba або повний склад NSA.",
        },
        {
          locator: "§ 2–3",
          explanation:
            "Для pkt 2 перевірте, хто саме подав wniosek; для pkt 3 — postanowienie складу, що розглядає справу. Далі Prezes NSA направляє питання до одного з передбачених складів.",
        },
        {
          locator: "§ 4",
          explanation:
            "Склад семи sędziów може postanowienieм передати zagadnienie повному складу Izba, а Izba — повному складу NSA.",
        },
      ],
      legalEffect:
        "Art. 264 регулює компетенцію та маршрут ухвалення uchwała NSA; він сам не вирішує конкретну справу іноземця і не є автоматичним способом оскарження wyrok.",
      foreignersCase:
        "У справі про pobyt перевірте, чи посилання на uchwała стосується справді процедури Art. 15 § 1 і Art. 264, а не просто загальної думки NSA. Не підміняйте wniosek або postanowienie для uchwała звичайною skarga сторони.",
    },
  ]),
})
