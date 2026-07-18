import { defineEditorialPart } from "../../define-editorial-part"

import { authorLegalTextCitationsTree } from "../../../legal-text"
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: authorLegalTextCitationsTree("ppsa", [
    {
      provisionId: "ppsa-art-54",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Skargę подають за посередництвом органу, дії, бездіяльність або przewlekłe prowadzenie postępowania якого оскаржуються; у чинній на 18.07.2026 редакції електронну skarga подають до elektroniczna skrzynka podawcza органу, а орган передає матеріали в установлені строки й за умовами § 3 може повністю її врахувати. Перехід на adres do doręczeń elektronicznych є майбутньою зміною з 1.10.2029.",
          sourceLocator: "Art. 54 § 1–6",
        },
      ],
      summary:
        "Орган є каналом подання skarga до sąd і має передати повні akta та відповідь; у визначених межах він може сам скасувати decyzja і видати нову.",
      rules: [
        {
          locator: "§ 1–1a",
          explanation:
            "Skarga подається через оскаржений орган. Станом на 18.07.2026 електронна skarga у formie dokumentu elektronicznego надсилається до elektroniczna skrzynka podawcza цього органу; варіант подання на adres do doręczeń elektronicznych набирає чинності 1.10.2029, а art. 49a застосовується відповідно.",
        },
        {
          locator: "§ 2–2a",
          explanation:
            "Орган передає skarga, kompletnymi i uporządkowanymi aktami та відповіддю протягом тридцяти днів; для skarga через konsul або на рішення MSZ у справах за ustawa o cudzoziemcach — шістдесяти днів. Перед передачею орган також готує uzasadnienie рішення, якщо раніше від нього відмовився через повне врахування вимоги сторони.",
        },
        {
          locator: "§ 3",
          explanation:
            "Орган може в межах właściwość повністю врахувати skarga протягом тридцяти днів; щодо decyzja він uchyla її та видає нову, одночасно зазначаючи, чи дія або бездіяльність були без правової підстави чи з rażące naruszenie prawa.",
        },
        {
          locator: "§ 4–6",
          explanation:
            "Для випадку з art. 33 § 1a передбачено публічне повідомлення; Президент RP визначає технічний порядок передачі skarga, akt і відповіді та враховує їх форму, безпеку й єдиний стандарт.",
        },
      ],
      legalEffect:
        "Подання через орган запускає обмін матеріалами із sąd, але не гарантує, що орган визнає skarga або що sąd прийме її до розгляду; повне врахування § 3 має передбачені статтею умови й наслідки.",
      foreignersCase:
        "Для skarga на decyzja воєводи про pobyt перевірте правильний орган-посередник, підтвердження подання та повноту копій.",
    },
  ]),
})
