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
      provisionId: "ustawa-o-cudzoziemcach-art-65",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("65", "Art. 65")} ust. 1 містить обов’язкові підстави odmowa wydania wizy krajowej, зокрема wykaz, SIS, кошти, страхування, безпеку, неправдиві дані, непідтверджений cel або умови pobytu та обґрунтовані сумніви щодо виїзду чи правдивості мети; pkt 6 має status uchylony.`,
          sourceLocator: "Art. 65 ust. 1 pkt 1–10",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("65", "Art. 65")} ust. 1a–1e додає спеціальні підстави для student, науковця, staż і wolontariat, ust. 1f–1g регулює строки та доповнення документів, а ust. 3–4 містять винятки для окремих підстав відмови.`,
          sourceLocator: "Art. 65 ust. 1a–1g; ust. 3–4",
        },
      ],
      summary: foreignersLaw.text`${foreignersLaw.article("65", "Art. 65")} визначає, коли wiza krajowa підлягає odmowa. Загальні підстави охоплюють записи в wykaz або SIS, кошти, страхування, безпеку, недостовірність, непідтверджену мету та сумнів щодо виїзду; для студентів, науковців, стажерів і волонтерів є додаткові інституційні та поведінкові підстави. Пункт 6 ust. 1 позначений як uchylony і не є чинною підставою.`,
      rules: [
        {
          locator: "Art. 65 ust. 1 pkt 1–5, 7–10",
          explanation:
            "Відмова є обов’язковою за наявності хоча б однієї названої підстави: wykaz, SIS, недостатні кошти, відсутність страхування, безпека/інтерес RP, неправдиві дані чи документи, непідтверджений cel або умови, сумнів у виїзді чи достовірності заявленої мети.",
        },
        {
          locator: "Art. 65 ust. 1 pkt 6",
          explanation:
            "Pkt 6 прямо має позначку „uchylony” у corpus; його не можна використовувати як чинну підставу odmowa.",
        },
        {
          locator: "Art. 65 ust. 1a–1e",
          explanation:
            "Для student, науковця, staż і wolontariat закон додає підстави, пов’язані з діяльністю установи, її керівниками, боргами, ліквідацією, попереднім використанням візи не за метою та іншими прямо названими умовами.",
        },
        {
          locator: "Art. 65 ust. 1f–1g; ust. 2–4",
          explanation:
            "Для названих освітніх і дослідницьких віз передбачено строк 30 днів (або 5 днів після інформації Szef Urzędu) та 7 днів на доповнення; SIS враховується за ust. 2, а ust. 3–4 містять спеціальні винятки.",
        },
      ],
      legalEffect:
        "За наявності чинної przesłanka орган відмовляє у wiza krajowa; це рішення не можна обґрунтовувати uchylony pkt 6. Винятки ust. 3–4 не скасовують інші підстави, яких вони не охоплюють.",
      foreignersCase: foreignersLaw.text`Перевірте кожен pkt ${foreignersLaw.article("65", "Art. 65")} за окремим доказом: wykaz/SIS, кошти, страховка, документи мети, правдивість, виїзд і статус установи; у разі uchylony pkt 6 вимагайте чинну правову підставу, а не старий шаблон.`,
    },
  ],
})
