import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-77",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("77", "Art. 77")} ust. 1–1a визначає особисте подання wniosek o wydanie wizy krajowej, його дані, фотографію, документи про cel і умови pobytu, кошти, страхування, достовірність наміру виїзду та представництво неповнолітніх і недієздатних; ust. 2, 4 і 10–12 мають позначку uchylony.`,
          sourceLocator: "Art. 77 ust. 1–1a; ust. 2, 4, 10–12",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("77", "Art. 77")} ust. 5–9 і 9a встановлює критерії документа подорожі, винятки для термінових або особистих обставин, відмітку про прийняття, пріоритет для окремої роботи та науки і досліджень.`,
          sourceLocator: "Art. 77 ust. 5–9a, 13",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("77", "Art. 77")} містить повний формальний і доказовий каркас заяви на wiza krajowa. Потрібні формуляр із даними про особу, документ подорожі, мету, кошти, страхування, повернення й працю, актуальна фотографія та підтвердні документи; для окремих категорій діють правила представництва і пріоритету.`,
      rules: [
        {
          locator: "Art. 77 ust. 1 pkt 1–3",
          explanation:
            "Заява містить ідентифікаційні дані, дані документа подорожі, адресу e-mail, навчання/роботу, історію віз, cel і плановані дати; додаються фотографія та документи про cel, кошти, страховку, намір виїзду й інші заявлені обставини.",
        },
        {
          locator: "Art. 77 ust. 1a",
          explanation:
            "За małoletni діють батьки або opiekun, за повністю ubezwłasnowolniony — opiekun, за małoletni bez opieki — kurator або інший представник, призначений компетентним органом.",
        },
        {
          locator: "Art. 77 ust. 2, 4, 10–12",
          explanation:
            "Ці положення мають статус „uchylony” у corpus і не створюють чинних додаткових вимог.",
        },
        {
          locator: "Art. 77 ust. 5–8",
          explanation:
            "Документ подорожі має бути чинним щонайменше 3 місяці після строку візи, мати 2 чисті сторінки та бути виданим за останні 10 років; перший критерій можна пропустити у pilny випадок, а особисте подання — у визначених особистих обставинах.",
        },
        {
          locator: "Art. 77 ust. 9a, 13",
          explanation: foreignersLaw.text`Konsul враховує пріоритет для працівників у переліках ${workLaw.article("28", "Art. 28")}–${workLaw.article("29", "29")} закону про powierzanie pracy; заяви для szkoła doktorska або діяльності наукової також розглядаються з пріоритетом за умов ust. 13.`,
        },
      ],
      legalEffect: foreignersLaw.text`Належна заява і документи запускають оцінку wiza, але не доводять автоматично виконання ${foreignersLaw.article("65", "Art. 65")} і не гарантують видачу. Uchylony ust. не можна використовувати як чинну вимогу.`,
      foreignersCase: foreignersLaw.text`Зробіть checklist за ${foreignersLaw.article("77", "Art. 77")}: формуляр, фото, паспорт, cel, кошти, страховка, повернення, робочі документи, представництво та дати; відмічайте окремо, які вимоги прямо не застосовуються через uchylony ust.`,
    },
  ],
})
