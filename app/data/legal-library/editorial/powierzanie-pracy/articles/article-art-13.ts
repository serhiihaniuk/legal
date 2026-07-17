import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-13",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("13", "Art. 13")} ust. 1 вимагає відмовити у видачі zezwolenie, якщо podmiot або cudzoziemiec перебуває в перелічених обставинах: неправдиві дані чи документи, визначені покарання або вироки, невиконання страхових і податкових обов'язків, відсутність коштів чи діяльності, проблеми з кваліфікацією у регульованій професії, wpis до wykaz небажаних осіб та інші названі підстави.`,
          sourceLocator: "Art. 13 ust. 1 pkt 1–2",
        },
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("13", "Art. 13")} ust. 1 pkt 3–11 також передбачає обов'язкову відмову, зокрема за надто віддалену дату початку, перевищені ліміти, міжнародні зобов'язання, неправомірне посередництво, відсутність діяльності pracodawca użytkownik або podmiot delegujący, ймовірне pozorne powierzenie роботи, невиконання роботи без обґрунтованої причини у попередні 2 роки чи перешкоджання контролю.`,
          sourceLocator: "Art. 13 ust. 1 pkt 3–11",
        },
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("13", "Art. 13")} ust. 2–3 поширює частину підстав щодо покарань або вироків на визначених осіб, які діють від імені podmiot, ust. 4 дозволяє враховувати перелічені співвідношення та іншу інформацію для оцінки мети полегшення в'їзду, а ust. 5 і 7 дозволяють встановлювати окремі ліміти у rozporządzenia.`,
          sourceLocator: "Art. 13 ust. 2–7",
        },
      ],
      summary: workLaw.text`${workLaw.article("13", "Art. 13")} містить обов'язкові підстави відмови та механізми перевірки реальності роботи, добросовісності podmiot і дотримання лімітів. Перелік охоплює як поведінку podmiot, так і окремі обставини cudzoziemiec та самої пропозиції роботи.`,
      rules: [
        {
          locator: "ust. 1 pkt 1 lit. a–n",
          explanation:
            "Підстави щодо podmiot включають неправдиві дані, фальшиві документи, визначені правопорушення, невиконання обов'язків зі страхування і податків, відсутність фінансів або реальної діяльності та створення для полегшення в'їзду.",
        },
        {
          locator: "ust. 1 pkt 2 lit. a–c",
          explanation:
            "Щодо cudzoziemiec важливі кваліфікації для zawód regulowany, визначені вироки та чинний wpis до wykaz cudzoziemców, яких перебування в Польщі є небажаним.",
        },
        {
          locator: "ust. 1 pkt 3–11",
          explanation:
            "Окремі підстави стосуються дат і лімітів, міжнародних зобов'язань, роботи через неналежну agencja, діяльності користувача або delegującego podmiot, фіктивної роботи, попередньої бездіяльності та перешкоджання контролю.",
        },
        {
          locator: "ust. 2–7",
          explanation: workLaw.text`Частина підстав застосовується до представників і керівників у визначених випадках. ${workLaw.article("13", "Art. 13")} ust. 4 називає орієнтири для оцінки, а можливі ліміти залежать від окремих rozporządzenia; їх не можна вигадувати з самого тексту статті.`,
        },
      ],
      legalEffect: workLaw.text`Відмова за ${workLaw.article("13", "art. 13")} стосується видачі zezwolenie na pracę і не є автоматичним рішенням про незаконність pobyt. Навіть відсутність підстави для відмови не замінює перевірку legalnego pobytu та інших умов роботи.`,
      foreignersCase:
        "З'ясуйте точний пункт відмови й докази: дані podmiot, борги, діяльність, кваліфікації, wpis, дату початку, ліміти, реальність роботи та історію контролю. Для cudzoziemiec окремо перевірте документ pobyt і чинне uprawnienie do pracy.",
    },
  ],
})
