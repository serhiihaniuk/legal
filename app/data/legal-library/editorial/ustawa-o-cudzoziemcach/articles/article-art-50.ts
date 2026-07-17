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
      provisionId: "ustawa-o-cudzoziemcach-art-50",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("50", "Art. 50")} ust. 1 pkt 1–8 встановлює підстави для відмови у wpisanie zaproszenie до ewidencji zaproszeń або для unieważnienie такого wpisu; ust. 2 обмежує застосування pkt 6, якщо нова заява подана до спливу 3 років після завершення чинності попереднього запрошення.`,
          sourceLocator: "Art. 50 ust. 1–2",
        },
        {
          kind: "practical-inference",
          text: foreignersLaw.text`Рішення має бути пов’язане з конкретною przesłanka ${foreignersLaw.article("50", "Art. 50")}: сам факт проблеми з документом або припущення про мету без встановлення відповідного пункту не замінює правову підставу.`,
          sourceLocator: "Art. 50 ust. 1 pkt 1–8",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("50", "Art. 50")} перелічує матеріальні та поведінкові підстави, за яких zaproszenie не вносять до ewidencji zaproszeń або запис скасовують: невідповідність zapraszający ${foreignersLaw.article("49", "Art. 49")} ust. 2, запис cudzoziemca у wykaz, міркування безпеки чи інтересу держави, недоведені кошти або житло, невиконані попередні зобов’язання, неправдиві дані чи документи та невідповідність заявленого cel в’їзду фактичним обставинам.`,
      rules: [
        {
          locator: "Art. 50 ust. 1 pkt 1–5",
          explanation: foreignersLaw.text`Перевіряються статус zapraszający, wpis до wykaz cudzoziemców, безпека та interes RP, можливість покрити витрати ${foreignersLaw.article("53", "Art. 53")} ust. 1 pkt 2 і реальна можливість забезпечити житло.`,
        },
        {
          locator: "Art. 50 ust. 1 pkt 6–7",
          explanation:
            "Підставою є невиконання зобов’язань попереднього zaproszenie або неправдиві дані, fałszywe informacje, неправдиві свідчення, zatajenie prawdy, підроблення чи використання підробленого документа.",
        },
        {
          locator: "Art. 50 ust. 1 pkt 8; ust. 2",
          explanation:
            "Оцінюється, чи не буде фактичний cel wjazdu і pobytu іншим за заявлений; невиконання попередніх зобов’язань за pkt 6 враховується, коли нову заяву подано протягом 3 років після завершення попередньої чинності.",
        },
      ],
      legalEffect: foreignersLaw.text`За наявності встановленої підстави запис не вносять або його unieważniaють у процедурі, передбаченій ${foreignersLaw.article("52", "Art. 52")}. Наслідком є втрата доказової сили запрошення, а не автоматичне рішення щодо візи самого cudzoziemca.`,
      foreignersCase:
        "Розкладіть матеріали за pkt 1–8: статус запрошуючого, кошти, житло, попереднє zaproszenie, достовірність документів і реальний cel pobytu; окремо перевірте трирічний строк з ust. 2.",
    },
  ],
})
