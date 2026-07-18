import { defineEditorialPart } from "../../define-editorial-part"

import {
  authorLegalTextCitationsTree,
  createLegalTextAuthor,
} from "../../../legal-text"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-406",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`Орган Straż Graniczna, якому підпорядкований strzeżony ośrodek або areszt, невідкладно з urzędu або на wniosek іноземця видає postanowienie про zwolnienie, якщо припинилися причини заходу, наявні обставини ${foreignersLaw.article("400", "art. 400")}, інші правові або фактичні перешкоди, cudzoziemiec отримав zaświadczenie ${foreignersLaw.article("170", "art. 170")} чи щодо нього триває провадження про zezwolenie ${foreignersLaw.article("176", "art. 176")}, застосовано tymczasowe aresztowanie або інший захід, що позбавляє свободи, чи виконання powrót має znikome prawdopodobieństwo.`,
          sourceLocator: "Art. 406 ust. 1–1b",
        },
        {
          kind: "statute-text",
          text: "На odmowa uwzględnienia wniosku про zwolnienie можна подати zażalenie протягом 7 днів, але лише якщо wniosek подано не раніше ніж через місяць від попереднього postanowienie; у визначених випадках особу звільняють також після спливу строку, виконання powrót або передачі чи вручення рішень про захист.",
          sourceLocator: "Art. 406 ust. 2–6",
        },
      ],
      summary:
        "Стаття регулює звільнення зі strzeżony ośrodek або areszt, альтернативні заходи після звільнення, оскарження відмови та обов’язкове звільнення в перелічених ситуаціях.",
      rules: [
        {
          locator: "ust. 1 pkt 1–6",
          explanation: foreignersLaw.text`Звільнення за ust. 1 охоплює припинення причин, обставини ${foreignersLaw.article("400", "art. 400")}, інші правові або фактичні перешкоди, zaświadczenie ${foreignersLaw.article("170", "art. 170")} чи провадження про zezwolenie ${foreignersLaw.article("176", "art. 176")}, позбавлення свободи в іншій справі та znikome prawdopodobieństwo виконання powrót.`,
        },
        {
          locator: "ust. 1a–1c",
          explanation: foreignersLaw.text`Перед zwolnienie z urzędu зі strzeżony ośrodek або areszt у випадках ust. 1 pkt 2, 3 і 6 орган оцінює необхідність заходів ${foreignersLaw.article("398", "art. 398")} ust. 2. При розгляді wniosku такий обов’язок стосується лише wniosku o zwolnienie ze strzeżonego ośrodka, а не wniosku про звільнення з areszt. На postanowienie про альтернативні заходи є 7-денне zażalenie до właściwy sąd rejonowy.`,
        },
        {
          locator: "ust. 2–4",
          explanation:
            "На odmowa uwzględnienia wniosku подається zażalenie через орган Straż Graniczna до właściwy sąd rejonowy протягом 7 днів. Воно належить лише після спливу щонайменше місяця від postanowienie про umieszczenie, areszt, przedłużenie pobytu або попереднє zwolnienie; суд розглядає його протягом 7 днів.",
        },
        {
          locator: "ust. 5–6",
          explanation:
            "Окремо передбачено звільнення після спливу строку, виконання або передачі, спливу строків Dublin та вручення рішень про скасування повороту чи надання захисту; орган повідомляє суд.",
        },
      ],
      legalEffect:
        "Норма вимагає перевіряти, чи зберігається необхідність ізоляції, і називає ситуації, коли звільнення є обов’язковим. Вона не означає, що кожен wniosek автоматично задовольняється без перевірки строків і підстав.",
      foreignersCase:
        "Зберіть попередні postanowienie, дату останнього рішення, медичні та процесуальні зміни, докази виконання або неможливості powrót і відрахуйте 7-денні та місячний строки.",
    },
  ]),
})
