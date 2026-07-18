import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-57a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Skarga на письмову індивідуальну podatkową interpretację, opinię zabezpieczającą, визначені opinie та відмови в їх видачі, включно з документом opinia w sprawie opodatkowania wyrównawczego, може ґрунтуватися лише на закиді щодо порушення норм провадження (naruszenie przepisów postępowania), помилки в тлумаченні права (błąd wykładni) або неправильної оцінки застосування норми матеріального права; адміністративний суд розглядає справу в межах доводів скарги (zarzuty skargi) та зазначеної в ній правової підстави.",
          sourceLocator: "Art. 57a",
        },
      ],
      summary:
        "Для спеціально перелічених podatkowe interpretacje, opinie та відмов стаття обмежує підстави skarga, а суд розглядає справу в межах наведених у скарзі доводів (zarzuty skargi) та зазначеної правової підстави.",
      rules: [
        {
          locator: "Art. 57a",
          explanation:
            "Спочатку перевірте, чи предмет належить до повного переліку статті: індивідуальна interpretacja, opinia zabezpieczająca, opinia з art. 119zzl § 1 Ordynacja podatkowa, відповідні відмови та opinie щодо opodatkowania wyrównawczego; правило не поширюється автоматично на pobyt.",
        },
        {
          locator: "Art. 57a",
          explanation:
            "У межах цього предмета відокремлюйте порушення норм провадження (naruszenie przepisów postępowania), помилку в тлумаченні права (błąd wykładni) та неправильну оцінку застосування норми матеріального права; суд розглядає справу в межах доводів скарги (zarzuty skargi) та зазначеної правової підстави (powołana podstawa prawna).",
        },
      ],
      legalEffect:
        "Спеціальне обмеження визначає рамки судового контролю перелічених податкових актів, а не загальний стандарт для всіх skargi.",
      foreignersCase:
        "У типовій справі legalizacji pobytu ця стаття зазвичай не є підставою; не переносіть її податкову модель на decyzja у справах cudzoziemców.",
    },
  ]),
})
