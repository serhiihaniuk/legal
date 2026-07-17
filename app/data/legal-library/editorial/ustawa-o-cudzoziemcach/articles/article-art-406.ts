import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-406",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Орган Straż Graniczna, якому підпорядкований strzeżony ośrodek або areszt, невідкладно з urzędu або на wniosek іноземця видає postanowienie про zwolnienie, якщо припинилися причини заходу, наявні обставини art. 400, інші правові або фактичні перешкоди, cudzoziemiec отримав zaświadczenie art. 170 чи щодо нього триває провадження про zezwolenie art. 176, застосовано tymczasowe aresztowanie або інший захід, що позбавляє свободи, чи виконання powrót має znikome prawdopodobieństwo.",
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
          explanation:
            "Звільнення за ust. 1 охоплює припинення причин, обставини art. 400, інші правові або фактичні перешкоди, zaświadczenie art. 170 чи провадження про zezwolenie art. 176, позбавлення свободи в іншій справі та znikome prawdopodobieństwo виконання powrót.",
        },
        {
          locator: "ust. 1a–1c",
          explanation:
            "Перед z urzędu zwolnienie у випадках ust. 1 pkt 2, 3 і 6, а також під час розгляду будь-якого wniosek про zwolnienie, орган оцінює необхідність art. 398 ust. 2. Він видає відповідне postanowienie; zażalenie протягом 7 днів подається до sąd rejonowy за місцезнаходженням органу.",
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
