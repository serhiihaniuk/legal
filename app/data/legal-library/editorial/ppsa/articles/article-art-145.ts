import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const ppsaLaw = createLegalTextAuthor("ppsa")
export default defineEditorialPart<"ppsa">({
  documentId: "ppsa",
  editionId: "ppsa-2026-143-with-2026-846",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ppsa-art-145",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Задовольняючи skarga на decyzja або postanowienie, суд може uchylić їх повністю чи частково за визначених матеріальних або процесуальних порушень, stwierdzić nieważność за підставами KPA чи інших норм або stwierdzić wydanie з порушенням prawa; у передбаченому випадку суд одночасно umarza адміністративне postępowanie.",
          sourceLocator: "Art. 145 § 1–3",
        },
      ],
      summary:
        "Стаття розкладає наслідки задоволення skarga на decyzja або postanowienie за видами порушення та окремо враховує інші procedury.",
      rules: [
        {
          locator: "§ 1 pkt 1",
          explanation:
            "Для uchylenie шукайте матеріальне порушення, що вплинуло на результат, підставу wznowienie або інше істотне процесуальне порушення.",
        },
        {
          locator: "§ 1 pkt 2–3",
          explanation:
            "Не змішуйте uchylenie, stwierdzenie nieważności та stwierdzenie wydania з naruszeniem prawa: їхні підстави в тексті різні.",
        },
        {
          locator: "§ 2–3",
          explanation: ppsaLaw.text`Для іншої процедури враховуйте її спеціальні правила; якщо є підстава для umorzenie адміністративної справи, суд робить це одночасно у випадку ${ppsaLaw.article("145", "§ 3")}.`,
        },
      ],
      legalEffect:
        "Задоволення skarga не має одного універсального наслідку: результат залежить від встановленого виду порушення та процесу, у якому видано акт.",
      foreignersCase:
        "У спорі про decyzja щодо pobyt пов’яжіть кожен zarzut із можливим наслідком: uchylenie, nieważność або stwierdzenie naruszenia prawa. Скасування не означає автоматичної видачі документа на pobyt.",
    },
  ],
})
