import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-102",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 102 встановлює, що до адміністративних проваджень про дозволи на роботу або заяви про доручення роботи іноземцеві, розпочатих за попереднім законом «ustawa o promocji zatrudnienia i instytucjach rynku pracy» та не завершених остаточним рішенням до 1 червня 2025 року, застосовуються попередні норми.",
          sourceLocator: "Art. 102",
        },
        {
          kind: "practical-inference",
          text: "Для цього переходу вирішальними є дата відкриття провадження (wszczęcie postępowania) і те, чи було остаточне рішення до 1 червня 2025 року. Сама назва документа не відповідає на ці питання.",
          sourceLocator: "Art. 102",
        },
      ],
      summary:
        "Стаття зберігає попередні правила для адміністративних справ про дозволи на роботу або заяви про доручення роботи, які були розпочаті за старим законом і не завершилися остаточним рішенням до переходу на новий режим.",
      rules: [
        {
          locator: "Art. 102",
          explanation:
            "Провадження має бути розпочате на підставі попереднього закону «ustawa o promocji zatrudnienia i instytucjach rynku pracy».",
        },
        {
          locator: "Art. 102",
          explanation:
            "Якщо до 1 червня 2025 року не було остаточного рішення, справу продовжують за попередніми нормами (dotychczasowe przepisy). Стаття не оголошує автоматичної недійсності поданих документів.",
        },
      ],
      legalEffect:
        "Це перехідне правило про застосовне право в конкретному провадженні. Воно не продовжує строку законного перебування і не створює права виконувати роботу без окремої законної підстави.",
      foreignersCase:
        "Знайдіть підтвердження дати подання і відкриття провадження, визначте предмет справи та статус рішення на 1 червня 2025 року. Потім окремо перевірте законність перебування іноземця і те, чи охоплює відповідний документ фактичну роботу.",
    },
  ]),
})
