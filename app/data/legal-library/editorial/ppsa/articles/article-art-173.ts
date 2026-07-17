import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ppsa-art-173",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Від wyrok WSA або postanowienie, що завершує postępowanie у справі, з названими в тексті винятками, належить skarga kasacyjna до NSA; її можуть подати сторона, prokurator, Rzecznik Praw Obywatelskich, Rzecznik Małych i Średnich Przedsiębiorców або Rzecznik Praw Dziecka після doręczenie odpisu orzeczenie з uzasadnieniem.",
          sourceLocator: "Art. 173 § 1–2",
        },
      ],
      summary:
        "Стаття відкриває skarga kasacyjna до NSA проти визначених wyrok або завершальних postanowienie WSA і називає коло уповноважених суб’єктів.",
      rules: [
        {
          locator: "§ 1",
          explanation: ppsaLaw.text`Перевірте, що документ видав WSA, завершує postępowanie або є wyrok, і зіставте справу з винятками ${ppsaLaw.article("58", "art. 58 § 1")} pkt 2–4, ${ppsaLaw.article("161", "art. 161 § 1")} та ${ppsaLaw.article("220", "art. 220 § 3")}.`,
        },
        {
          locator: "§ 2",
          explanation:
            "Для skarga kasacyjna важливі статус особи з переліку та doręczenie odpisu orzeczenie з uzasadnieniem.",
        },
      ],
      legalEffect:
        "Норма визначає види orzeczenie і суб’єктів, для яких можливий касаційний шлях; інші умови допустимості та строку треба шукати в інших приписах p.p.s.a.",
      foreignersCase:
        "Після wyrok WSA у справі про pobyt перевірте, чи це оскаржуваний вид orzeczenie, чи немає винятку, та чи отримано odpis з uzasadnieniem. Сам факт програшу не замінює перевірки підстав і строків.",
    },
  ],
})
