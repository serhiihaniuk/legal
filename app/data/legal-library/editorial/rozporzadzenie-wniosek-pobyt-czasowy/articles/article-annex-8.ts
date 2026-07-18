import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const regulationLaw = createLegalTextAuthor(
  "rozporzadzenie-wniosek-pobyt-czasowy"
)

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"rozporzadzenie-wniosek-pobyt-czasowy">({
  documentId: "rozporzadzenie-wniosek-pobyt-czasowy",
  editionId: "rozporzadzenie-wniosek-pobyt-czasowy-2026-553",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-8",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: regulationLaw.text`${regulationLaw.annex("8", "Załącznik nr 8")} є WZÓR wniosku, який członek rodziny rozdzielonej подає щодо cudzoziemca, який перебуває поза межами Польщі, про zezwolenie на pobyt czasowy у celu połączenia się z rodziną або за ${foreignersLaw.article("160", "art. 160")} pkt 1, 3, 4 чи 6 ustawy; форма окремо показує дані члена сім’ї та іноземця, а також обставини заяви.`,
          sourceLocator: "Załącznik nr 8, nagłówek та części A–K",
        },
      ],
      summary:
        "Це спеціальний формуляр, який członek rodziny rozdzielonej подає щодо іноземця, який перебуває за межами Польщі, у названих сімейних процедурах.",
      rules: [
        {
          locator: "nagłówek та wybór celu",
          explanation: regulationLaw.text`Członek rodziny rozdzielonej обирає заяву про połączenie się z rodziną або один із випадків ${foreignersLaw.article("160", "art. 160")} pkt 1, 3, 4 чи 6 щодо cudzoziemca, який перебуває поза Польщею.`,
        },
        {
          locator: "części A–D",
          explanation:
            "Ці частини містять dane osobowe і місце aktualnego pobytu członka rodziny rozdzielonej, інформацію про його podstawę pobytu та zobowiązania alimentacyjne, а також дані членів його сім’ї, які живуть або планують жити в Польщі.",
        },
        {
          locator: "części E–H",
          explanation:
            "Ці частини охоплюють dane osobowe cudzoziemca, його адреси й документ подорожі, а також актуальне та заплановане місце pobytu.",
        },
        {
          locator: "części I–K",
          explanation:
            "Наприкінці форма запитує про кошти, ubezpieczenie zdrowotne, судимість, провадження та зобов’язання cudzoziemca, а також містить uzasadnienie wniosku й oświadczenie про правдивість даних.",
        },
      ],
      legalEffect: regulationLaw.text`${regulationLaw.annex("8", "Załącznik nr 8")} структурує заяву, яку członek rodziny rozdzielonej подає щодо іноземця з-за кордону, але самі позначки та поля не доводять родинний зв’язок, законність pobytu чи інші матеріальні умови zezwolenia.`,
      foreignersCase: regulationLaw.text`Перевірте, чи cudzoziemiec справді перебуває поза Польщею, хто є członek rodziny rozdzielonej, і виберіть лише відповідний cel та пункт ${foreignersLaw.article("160", "art. 160")}. Дані про родину, кошти, ubezpieczenie та podstawę pobytu підтверджуйте окремими документами.`,
    },
  ],
})
