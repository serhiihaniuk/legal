import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-54",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("54", "Art. 54")} pkt 1–11 визначає дані, які мають бути зазначені в zaproszenie: ідентифікацію zapraszający і cudzoziemiec, zobowiązanie щодо витрат, адресу житла, дати, cel pobytu, organ і номер wpis, okres ważności, спосіб забезпечення житла та інформацію про обробку даних у Wizowy System Informacyjny.`,
          sourceLocator: "Art. 54 pkt 1–11",
        },
        {
          kind: "practical-inference",
          text: "Ці реквізити окреслюють, кого, коли, навіщо і на яких фінансово-житлових умовах запрошують; розбіжність із заявою або паспортом потребує пояснення й перевірки.",
          sourceLocator: "Art. 54 pkt 1–11",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("54", "Art. 54")} — це обов’язковий зміст самого zaproszenie. У ньому фіксуються особи, родинний зв’язок, витрати, житло, період і cel pobytu, орган та номер запису, чинність і дані про VIS.`,
      rules: [
        {
          locator: "Art. 54 pkt 1–3",
          explanation: foreignersLaw.text`Документ містить ідентифікаційні дані zapraszający та zapraszany cudzoziemiec, ступінь споріднення і посилання на зобов’язання покрити витрати за ${foreignersLaw.article("51", "Art. 51")} ust. 2 pkt 3.`,
        },
        {
          locator: "Art. 54 pkt 4–6",
          explanation:
            "Вказуються адреса zakwaterowanie, дати періоду запрошення та cel pobytu на території RP.",
        },
        {
          locator: "Art. 54 pkt 7–11",
          explanation:
            "Вказуються organ і дата/номер wpis, okres ważności, чи надається власне житло, а також інформація про обробку даних zapraszający у VIS.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("54", "Art. 54")} визначає зміст документа, на який посилаються органи, але не надає запрошеному cudzoziemiec права на в’їзд, pobyt або працю поза іншими вимогами.`,
      foreignersCase:
        "Звірте кожен реквізит zaproszenie з паспортом, документом zapraszający, заявою, адресою житла, датами та заявленим cel; окремо перевірте номер wpis і okres ważności.",
    },
  ],
})
