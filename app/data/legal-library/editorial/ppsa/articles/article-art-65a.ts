import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-65a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Art. 65a є майбутньою редакцією правил електронного doręczenie: з 1.10.2029 sąd надсилатиме pismo на adres do doręczeń elektronicznych із бази або пов’язану з kwalifikowana usługa rejestrowanego doręczenia; для фізичної особи потрібне подання або вказання адреси, крім przedsiębiorca у CEIDG.",
          sourceLocator: "Art. 65a § 1–5",
        },
      ],
      summary:
        "Art. 65a описує майбутню модель електронного doręczenie; станом на 18.07.2026 вона ще не є чинною заміною Art. 74a.",
      rules: [
        {
          locator: "§ 1–2",
          explanation:
            "Після 1.10.2029 адреса братиметься з бази або з kwalifikowana usługa rejestrowanego doręczenia; для фізичної особи перевірятиметься подання з адреси або її вказання, з винятком przedsiębiorca у CEIDG.",
        },
        {
          locator: "§ 3",
          explanation:
            "Після набрання чинності pismo органу та визначеним учасникам надсилатиметься на адресу з бази adresów elektronicznych.",
        },
        {
          locator: "§ 4–5",
          explanation:
            "Майбутній момент skuteczne doręczenie пов’язаний із dowód otrzymania; за неотримання автоматичний доказ формується після чотирнадцяти днів.",
        },
        {
          locator: "Przypisy 35",
          explanation:
            "Усі правила Art. 65a додані як зміна з wejście w życie 1.10.2029; до цієї дати для електронного doręczenie перевіряйте Art. 74a.",
        },
      ],
      legalEffect:
        "Art. 65a не дає поточної підстави для висновку про skuteczne doręczenie на 18.07.2026; її умови слід застосовувати лише після зазначеної дати, якщо перехідні правила не зміняться.",
      foreignersCase:
        "Cudzoziemiec, який подає електронну skarga у поточному стані права, має перевіряти Art. 74a; не покладайтеся на Art. 65a або майбутній dowód otrzymania до 1.10.2029.",
    },
  ]),
})
