import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-49a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Станом на 18.07.2026 sąd підтверджує подання pismo w formie dokumentu elektronicznego до своєї електронної скриньки подання (elektroniczna skrzynka podawcza), надсилаючи urzędowe poświadczenie odbioru на вказаний заявником adres elektroniczny. Правило про dowód otrzymania набере чинності лише 1.10.2029.",
          sourceLocator: "Art. 49a, przypisy 25–26",
        },
      ],
      summary:
        "Чинним підтвердженням електронного подання до sąd є urzędowe poświadczenie odbioru, яке суд надсилає на вказаний adres elektroniczny.",
      rules: [
        {
          locator: "Art. 49a / Przypis 25",
          explanation:
            "Після подання через електронну скриньку подання суду (elektroniczna skrzynka podawcza) збережіть urzędowe poświadczenie odbioru, надіслане судом на adres elektroniczny, який указав заявник.",
        },
        {
          locator: "Przypis 26",
          explanation:
            "Dowód otrzymania за art. 41 ustawy o doręczeniach elektronicznych належить до майбутньої редакції Art. 49a, що набере чинності 1.10.2029.",
        },
      ],
      legalEffect:
        "Норма визначає чинний спосіб підтвердження подання електронного pismo; своєчасність та інші вимоги треба оцінювати також за іншими приписами.",
      foreignersCase:
        "При електронній skarga у справі cudzoziemca збережіть pismo та urzędowe poświadczenie odbioru, надіслане на вказаний adres elektroniczny, і зафіксуйте дату підтвердження.",
    },
  ]),
})
