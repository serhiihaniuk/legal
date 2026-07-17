import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-271",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 271 допускає wznowienie з підстави nieważność, коли у складі суду була osoba nieuprawniona або судив sędzia wyłączony z mocy ustawy, хоча сторона до uprawomocnienie не могла вимагати його wyłączenie; також коли сторона не мала zdolności sądowej або procesowej, не була należycie reprezentowana чи через порушення права була позбавлена możność działania, з прямо передбаченими винятками.",
          sourceLocator: "Art. 271 pkt 1–2",
        },
      ],
      summary:
        "Стаття перелічує окремі тяжкі дефекти складу суду або участі сторони, які можуть бути підставою для skarga o wznowienie postępowania.",
      rules: [
        {
          locator: "pkt 1",
          explanation:
            "Перевіряйте, чи у складі суду брала участь osoba nieuprawniona, чи sędzia був wyłączony z mocy ustawy, і чи сторона до uprawomocnienia orzeczenia не могла вимагати його wyłączenie.",
        },
        {
          locator: "pkt 2",
          explanation:
            "Для strony важливі zdolność sądowa, zdolność procesowa, należyta reprezentacja та możność działania; wznowienie не можна вимагати, якщо до uprawomocnienia niemożność działania уstała, brak reprezentacji був піднятий у zarzut або strona підтвердила dokonane czynności procesowe.",
        },
      ],
      legalEffect:
        "Норма відкриває спеціальний шлях wznowienie лише за описаних умов nieważność; сама наявність процесуальної помилки не доводить автоматично, що skarga буде прийнята або задоволена.",
      foreignersCase:
        "У справі іноземця перевірте, чи брала участь osoba nieuprawniona або sędzia wyłączony z mocy ustawy, а також zdolność sądowa, zdolność procesowa, należyta reprezentacja та конкретну możność działania. Не припускайте, що будь-яка процесуальна помилка автоматично дає підставу Art. 271.",
    },
  ]),
})
