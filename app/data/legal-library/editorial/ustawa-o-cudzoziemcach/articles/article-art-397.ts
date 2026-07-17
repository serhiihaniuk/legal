import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ustawa-o-cudzoziemcach", [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-397",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Щодо неповнолітнього іноземця без опіки Policja негайно передає його Straż Graniczna, а Straż Graniczna звертається до суду за місцем zatrzymanie про розміщення в placówka opiekuńczo-wychowawcza або strzeżony ośrodek.",
          sourceLocator: "Art. 397 ust. 1",
        },
        {
          kind: "statute-text",
          text: "При вирішенні про strzeżony ośrodek суд враховує dobro дитини, її фізичний і психічний розвиток, osobowość, обставини zatrzymanie та особисті умови; у strzeżony ośrodek може бути поміщена лише така особа, яка досягла 15 років.",
          sourceLocator: "Art. 397 ust. 2–3",
        },
        {
          kind: "statute-text",
          text: "За згодою неповнолітнього або його przedstawiciel ustawowy проводиться медичне дослідження віку з позначенням межі похибки; без згоди особу, яка називає себе неповнолітньою, вважають повнолітньою.",
          sourceLocator: "Art. 397 ust. 4–5",
        },
      ],
      summary:
        "Стаття встановлює спеціальний порядок для неповнолітнього іноземця без опіки, судову оцінку найкращих інтересів дитини, віковий поріг для strzeżony ośrodek та правила медичної перевірки віку.",
      rules: [
        {
          locator: "ust. 1–3",
          explanation:
            "Спочатку дитину передають Straż Graniczna, потім питання розміщення вирішує суд. При strzeżony ośrodek суд має врахувати dobro дитини, а вік має бути щонайменше 15 років.",
        },
        {
          locator: "ust. 4–5",
          explanation:
            "Дослідження віку можливе за згодою; результат має містити межу похибки. Відмова від згоди за текстом статті має наслідок визнання повнолітнім.",
        },
        {
          locator: "ust. 6",
          explanation:
            "Витрати перебування в placówka opiekuńczo-wychowawcza покриваються з державного бюджету через визначені кошти.",
        },
      ],
      legalEffect:
        "Норма посилює судову та дитячо-орієнтовану перевірку, але допускає strzeżony ośrodek лише для неповнолітнього від 15 років за умов судової оцінки.",
      foreignersCase:
        "Зберіть докази відсутності опіки, вік, згоду на дослідження, медичний висновок і матеріали про dobro дитини. Перевірте, чи суд розглянув усі фактори art. 397.",
    },
  ]),
})
