import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-151b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("151b", "Art. 151b")} регулює zezwolenie на pobyt czasowy для mobilność długoterminowa naukowca: частина досліджень у zatwierdzona польська jednostka, іноземний документ/віза з adnotacja «naukowiec», страхування, житло, кошти та umowa o przyjęciu.`,
          sourceLocator: "Art. 151b ust. 1",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Місячні кошти після витрат на житло мають перевищувати поріг соціальної допомоги щодо cudzoziemiec і кожного утримуваного члена сім’ї; ust. 3–4 визначають витрати на житло та виняток для держав ${foreignersLaw.article("113b", "art. 113b")}.`,
          sourceLocator: "Art. 151b ust. 2–4",
        },
      ],
      summary:
        "Довгострокова mobilność naukowca є окремим дозволом для частини досліджень у Польщі на підставі чинного документа іншої держави UE.",
      rules: [
        {
          locator: "ust. 1 pkt 1",
          explanation:
            "Cudzoziemiec має мати документ pobyt або довгострокову візу іншої держави UE з adnotacja «naukowiec», health insurance, місце проживання в Польщі та кошти на утримання й повернення до держави, що видала документ.",
        },
        {
          locator: "ust. 1 pkt 2 lit. a–e",
          explanation:
            "Umowa o przyjęciu з польською jednostka має визначати мету/предмет досліджень, обов’язки naukowiec і одиниці, строки, wynagrodzenie та інші умови праці.",
        },
        {
          locator: "ust. 2–4",
          explanation: foreignersLaw.text`Кошти після витрат на житло перевищують поріг соціальної допомоги; витрати включають сталі оплати й комунальні послуги, а для громадян держав ${foreignersLaw.article("113b", "art. 113b")} діє ust. 4.`,
        },
      ],
      legalEffect: foreignersLaw.text`Дозвіл на довгострокову mobilność залежить від чинності іноземного документа, польської угоди та всіх фінансово-страхових умов; він не дорівнює звичайному дозволу ${foreignersLaw.article("151", "art. 151")}.`,
      foreignersCase:
        "Перевірте adnotacja «naukowiec», строк іноземного документа, повну угоду, страховку, житло, кошти та дату планованої частини дослідження в Польщі.",
    },
  ],
})
