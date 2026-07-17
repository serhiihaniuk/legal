import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("powierzanie-pracy", [
    {
      provisionId: "powierzanie-pracy-art-102",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 102 встановлює: до адміністративних проваджень щодо zezwolenia na pracę або oświadczenia o powierzeniu wykonywania pracy cudzoziemcowi, розпочатих за старою ustawa o promocji zatrudnienia та не завершених остаточною decyzja до набрання чинності новою ustawy, застосовуються dotychczasowe przepisy.",
          sourceLocator: "Art. 102",
        },
        {
          kind: "practical-inference",
          text: "Для цього переходу вирішальними є дата wszczęcia провадження і те, чи була decyzja ostateczna до набрання чинності; сама назва документа не відповідає на ці питання.",
          sourceLocator: "Art. 102",
        },
      ],
      summary:
        "Стаття зберігає старі правила для незавершених адміністративних справ про zezwolenie na pracę або oświadczenie o powierzeniu wykonywania pracy cudzoziemcowi до переходу на нову ustawy.",
      rules: [
        {
          locator: "Art. 102",
          explanation:
            "Провадження має бути розпочате на підставі старої ustawa o promocji zatrudnienia i instytucjach rynku pracy.",
        },
        {
          locator: "Art. 102",
          explanation:
            "Якщо до набрання чинності новою ustawy не було decyzja ostateczna, справа продовжується за dotychczasowe przepisy. Стаття не оголошує автоматичної недійсності поданих документів.",
        },
      ],
      legalEffect:
        "Це перехідне правило про застосовне право в конкретному провадженні. Воно не продовжує строк legalnego pobytu і не створює права виконувати роботу без окремої законної підстави.",
      foreignersCase:
        "Знайдіть підтвердження дати подання та wszczęcia, предмет справи і статус decyzja на дату набрання чинності новою ustawy. Потім окремо перевірте, чи має іноземець legalny pobyt і чи охоплює його робота відповідний документ.",
    },
  ]),
})
