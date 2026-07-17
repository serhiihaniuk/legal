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
      provisionId: "rozporzadzenie-wniosek-pobyt-czasowy-annex-8",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: regulationLaw.text`${regulationLaw.annex("8", "Załącznik nr 8")} є WZÓR wniosku для cudzoziemca, який перебуває поза межами Польщі, про zezwolenie на pobyt czasowy у celu połączenia się z rodziną або за ${foreignersLaw.article("160", "art. 160")} pkt 1, 3, 4 чи 6 ustawy; форма показує дані rozdzielona rodzina, її місце, podstawę pobytu, сімейні дані та додаткові питання про кошти, ubezpieczenie й окремі обставини.`,
          sourceLocator:
            "Załącznik nr 8, nagłówek, części A–C та dodatkowe informacje",
        },
      ],
      summary:
        "Це спеціальний формуляр для заяви з-за меж Польщі у названих сімейних процедурах. Він містить поля про члена розділеної сім’ї та обставини, потрібні самим formularz.",
      rules: [
        {
          locator: "nagłówek та części A–B",
          explanation: regulationLaw.text`У формі обирається cel połączenia się z rodziną або один із пунктів ${foreignersLaw.article("160", "art. 160")}, а також вносяться personal data і місце aktualnego pobytu rozdzielonego członka rodziny.`,
        },
        {
          locator: "część C I",
          explanation:
            "Поля запитують, чи перебуває особа в Польщі, дату останнього в’їзду, мету та правову підставу pobytu, включно з позначенням руху безвізового або візи та її реквізитами.",
        },
        {
          locator: "dodatkowe informacje",
          explanation:
            "Форма містить поля про членів сім’ї, місце актуального й запланованого pobytu, кошти, ubezpieczenie zdrowotne, судимість, провадження та зобов’язання, прямо перелічені у витягнутому тексті.",
        },
      ],
      legalEffect:
        "Заłącznik nr 8 структурує заяву з-за кордону, але самі позначки та поля не доводять родинний зв’язок, законність pobytu чи інші матеріальні умови zezwolenia.",
      foreignersCase: regulationLaw.text`Перевірте факт перебування заявника поза Польщею та виберіть лише відповідний cel і пункт ${foreignersLaw.article("160", "art. 160")}. Дані про родину, кошти, ubezpieczenie та podstawę pobytu підтверджуйте окремими документами.`,
    },
  ],
})
