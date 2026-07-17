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
      provisionId: "ustawa-o-cudzoziemcach-art-461c",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("461c", "Art. 461c")} зобов’язує cudzoziemca у pomieszczenie дотримуватися regulamin pobytu, виконувати polecenia funkcjonariusz Straży Granicznej, дотримуватися cisza nocna з 22.00 до 7.00 та користуватися обладнанням за призначенням.`,
          sourceLocator: "Art. 461c pkt 1–4",
        },
        {
          kind: "statute-text",
          text: "Також потрібно негайно повідомляти функціонера про симптоми хвороби та groźne w skutkach zdarzenie, а також не віддалятися самовільно за межі pomieszczenie і не перебувати у заборонених місцях.",
          sourceLocator: "Art. 461c pkt 5–7",
        },
      ],
      summary:
        "Стаття визначає обов’язки cudzoziemca під час перебування у pomieszczenie: правила поведінки, виконання законних організаційних вимог, нічну тишу, повідомлення про хворобу чи небезпечну подію та заборону самовільного віддалення.",
      rules: [
        {
          locator: "pkt 1–4",
          explanation:
            "Потрібно дотримуватися regulamin, виконувати polecenia службовця Straż Graniczna, зберігати тишу з 22.00 до 7.00 і використовувати обладнання відповідно до його призначення.",
        },
        {
          locator: "pkt 5",
          explanation:
            "При симптомах хвороби cudzoziemiec має без зволікання повідомити funkcjonariusz Straży Granicznej, який служить у pomieszczenie.",
        },
        {
          locator: "pkt 6–7",
          explanation:
            "Заборонено самовільно залишати територію pomieszczenie або входити до місць, куди немає доступу; про небезпечну подію з можливими серйозними наслідками треба негайно повідомити службовця.",
        },
      ],
      legalEffect: foreignersLaw.text`${foreignersLaw.article("461c", "Art. 461c")} встановлює правила поведінки для осіб у конкретному pomieszczenie. Сам текст цієї статті не визначає окрему санкцію за кожне порушення, тому наслідок потрібно встановлювати за іншими застосовними нормами та фактами.`,
      foreignersCase: foreignersLaw.text`Зіставте вимогу або подію з конкретним pkt ${foreignersLaw.article("461c", "Art. 461c")}, часом, місцем і доказами; для повідомлення про хворобу чи небезпеку збережіть запис звернення та реакцію функціонера.`,
    },
  ],
})
