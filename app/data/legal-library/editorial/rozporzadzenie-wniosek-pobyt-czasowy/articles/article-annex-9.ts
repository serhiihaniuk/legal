import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const regulationLaw = createLegalTextAuthor(
  "rozporzadzenie-wniosek-pobyt-czasowy"
)

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"rozporzadzenie-wniosek-pobyt-czasowy">({
  documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
  editionId: "rozporzadzenie-wniosek-pobyt-czasowy-2026-553",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-9",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: regulationLaw.text`${regulationLaw.annex("9", "Załącznik nr 9")} є FORMULARZEM ZGODY на подання членом rozdzielonej rodziny від її імені wniosku про pobyt czasowy для połączenia się z rodziną або wniosku за ${foreignersLaw.article("160", "art. 160")} pkt 1, 3, 4 чи 6 ustawy; він містить дані особи, представника, вибір виду wniosku та дату і підпис cudzoziemca.`,
          sourceLocator: "Załącznik nr 9, tytuł, dane osobowe та część zgody",
        },
      ],
      summary:
        "Це форма, якою особа дає згоду на подання визначеної заяви іншою особою від її імені у названій сімейній процедурі.",
      rules: [
        {
          locator: "tytuł formularza",
          explanation: regulationLaw.text`Згода стосується або wniosku для połączenia się z rodziną, або wniosku про zezwolenie, названого через ${foreignersLaw.article("160", "art. 160")} pkt 1, 3, 4 чи 6.`,
        },
        {
          locator: "dane osobowe cudzoziemca та osoby składającej",
          explanation:
            "Форма послідовно містить персональні поля cudzoziemca, який дає згоду, і особи, яка подає wniosek від його імені, включно з даними, показаними у формулярі.",
        },
        {
          locator: "część wyboru та podpis",
          explanation:
            "Потрібно позначити відповідний вид wniosku, після чого formularz містить дату і підпис cudzoziemca.",
        },
      ],
      legalEffect: regulationLaw.text`${regulationLaw.annex("9", "Załącznik nr 9")} документує згоду на представницьке подання в межах названої процедури. Він не замінює доказ родинного зв’язку, підстави pobytu чи умов надання zezwolenia.`,
      foreignersCase:
        "Звірте особу, яка дає zgoda, з особою, від імені якої подається wniosek, і позначте правильний вид заяви. Перевірте дату та підпис, а питання родинного зв’язку доводьте окремо.",
    },
  ],
})
