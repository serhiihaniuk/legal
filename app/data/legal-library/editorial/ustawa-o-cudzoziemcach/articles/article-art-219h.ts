import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")
const kpaLaw = createLegalTextAuthor("kpa")
export default defineEditorialPart<"ustawa-o-cudzoziemcach">({
  documentId: "ustawa-o-cudzoziemcach",
  editionId: "ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18",
  legalStateDate: "2026-07-18",
  verifiedAt: "2026-07-18",
  entries: [
    {
      provisionId: "ustawa-o-cudzoziemcach-art-219h",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: "Від wezwania до особистої явки відмовляються щодо дитини, якій на день подання заяви не виповнилося 6 років, а також щодо особи, яка через підтверджені хворобу чи інвалідність не може особисто з’явитися до urzędu wojewódzkiego.",
          sourceLocator: "Art. 219h ust. 1",
        },
        {
          kind: "statute-text",
          text: "У справі дитини до 6 років wojewoda викликає особу, яка подала заяву від її імені, і дає щонайменше 7 днів від вручення wezwania на пред’явлення документа особи дитини та актуального tytułu prawnego до житла.",
          sourceLocator: "Art. 219h ust. 2–3",
        },
        {
          kind: "statute-text",
          text: "Якщо явка неможлива через хворобу або інвалідність, wojewoda дає щонайменше 7 днів на подання належно засвідчених копій документа особи й документа на житло, якщо їх уже не додано, а також зразка підпису.",
          sourceLocator: "Art. 219h ust. 4–5",
        },
      ],
      summary:
        "Стаття замінює особисту явку іншою процедурою для малих дітей і для осіб, які не можуть прибути через підтверджений стан здоров’я.",
      rules: [
        {
          locator: "ust. 1",
          explanation:
            "Медичне zaświadczenie має бути видане належним лікарем-спеціалістом не раніше ніж за 3 місяці до подання заяви та підтверджувати неможливість особистої явки.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Звільнення дитини від явки не звільняє представника від пред’явлення її документа особи й документа на житло. Wezwanie може одночасно містити вимоги щодо braków formalnych, opłaty skarbowej та доказів.",
        },
        {
          locator: "ust. 4–5",
          explanation: kpaLaw.text`Для особи, яка не може прибути, копії мають бути засвідчені відповідно до ${kpaLaw.article("76a", "art. 76a § 2 KPA")}. Обов’язок щодо зразка підпису оцінюють разом із медичним винятком із ${foreignersLaw.article("219b", "Art. 219b")} ust. 3.`,
        },
      ],
      legalEffect:
        "Виняток усуває обов’язок особистої явки, але не автоматично всі документальні вимоги: їх виконує представник або сам заявник у спеціальній формі.",
      foreignersCase:
        "Визначте підставу винятку, перевірте дату й зміст медичного документа та уважно прочитайте, хто саме отримав wezwanie. Підготуйте оригінали для представника дитини або належно засвідчені копії для медичного випадку.",
    },
  ],
})
