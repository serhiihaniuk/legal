import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const regulationLaw = createLegalTextAuthor(
  "rozporzadzenie-wniosek-pobyt-czasowy"
)
export default defineEditorialPart<"rozporzadzenie-wniosek-pobyt-czasowy">({
  documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
  editionId: "rozporzadzenie-wniosek-pobyt-czasowy-2026-553",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-5",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: regulationLaw.text`${regulationLaw.annex("5", "Załącznik nr 5")} є WZÓR заłącznika nr 4 до wniosku для zezwolenia на pobyt у celu prowadzenia badań naukowych або mobilności długoterminowej naukowca; його заповнює cudzoziemiec і він містить дані polska jednostka naukowa та інформацію про програму або угоду мобільності.`,
          sourceLocator: "Załącznik nr 5, nagłówek, Uwaga та części I–III",
        },
      ],
      summary:
        "Форма призначена для заявника-дослідника і структурує його дані, відомості про наукову установу в Польщі та можливу програму мобільності.",
      rules: [
        {
          locator: "nagłówek та Uwaga",
          explanation:
            "Формуляр додається у двох названих дослідницьких режимах і заповнюється самим cudzoziemiec.",
        },
        {
          locator: "części I–II",
          explanation:
            "Текст містить personal data та поля про jednostka naukowa на території Польщі: назву, адресу, правову підставу діяльності й REGON.",
        },
        {
          locator: "część III",
          explanation:
            "Є вибір Tak або Nie щодо програми UE, програми багатосторонньої мобільності чи угоди між щонайменше двома закладами вищої освіти, а також назви програми або угоди та установ і їхніх адрес.",
        },
      ],
      legalEffect:
        "Заłącznik nr 5 подає структуровані відомості для дослідницької заяви, але сам заповнений wzór не доводить наявність усіх матеріальних умов zezwolenia.",
      foreignersCase:
        "Зіставте назву й реквізити польської jednostka naukowa та мобільної програми або угоди з підтвердними документами. Позначка Tak чи Nie описує заявлену обставину, але не замінює її перевірку.",
    },
  ],
})
