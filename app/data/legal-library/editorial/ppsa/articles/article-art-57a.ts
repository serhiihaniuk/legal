import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-57a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Skarga на письмову індивідуальну podatkową interpretację, opinię zabezpieczającą, визначені opinie та відмови в їх видачі, включно з opinión у справах opodatkowania wyrównawczego, може ґрунтуватися лише на порушенні postępowanie, помилці wykładnia або неправильній оцінці застосування prawa materialnego; sąd пов’язаний zarzuty skarga та її правовою підставою.",
          sourceLocator: "Art. 57a",
        },
      ],
      summary:
        "Для спеціально перелічених podatkowe interpretacje, opinie та відмов стаття обмежує підстави skarga і пов’язує суд із наведеними zarzuty.",
      rules: [
        {
          locator: "Art. 57a",
          explanation:
            "Спочатку перевірте, чи предмет належить до повного переліку статті: індивідуальна interpretacja, opinia zabezpieczająca, opinia з art. 119zzl § 1 Ordynacja podatkowa, відповідні відмови та opinie щодо opodatkowania wyrównawczego; правило не поширюється автоматично на pobyt.",
        },
        {
          locator: "Art. 57a",
          explanation:
            "У межах цього предмета відокремлюйте порушення postępowanie, помилку wykładnia та неправильну оцінку застосування матеріального права; суд пов’язаний zarzuty і powołaną podstawą prawną.",
        },
      ],
      legalEffect:
        "Спеціальне обмеження визначає рамки судового контролю перелічених податкових актів, а не загальний стандарт для всіх skargi.",
      foreignersCase:
        "У типовій справі legalizacji pobytu ця стаття зазвичай не є підставою; не переносіть її податкову модель на decyzja у справах cudzoziemców.",
    },
  ]),
})
