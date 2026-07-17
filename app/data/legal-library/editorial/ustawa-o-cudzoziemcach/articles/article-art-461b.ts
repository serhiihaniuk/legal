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
      provisionId: "ustawa-o-cudzoziemcach-art-461b",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("461b", "Art. 461b")} надає cudzoziemcowi у pomieszczenie право контактувати з дипломатичним представництвом або консульством, користуватися необхідною за станом здоров’я медичною допомогою, санітарними пристроями та засобами гігієни, купувати за власні кошти особисті гігієнічні речі й користуватися власними засобами зв’язку.`,
          sourceLocator: "Art. 461b ust. 1 pkt 1–5",
        },
        {
          kind: "statute-text",
          text: "Особа, яка перебуває у такому pomieszczenie, отримує posiłki та napoje, а małoletni може користуватися іграми świetlicowe.",
          sourceLocator: "Art. 461b ust. 2–3",
        },
      ],
      summary:
        "Стаття перелічує базові права та забезпечення cudzoziemca у pomieszczenie для осіб, яким odmówiono wjazdu, включно з контактами, гігієною, медичною допомогою, харчуванням і окремою можливістю для małoletni користуватися іграми.",
      rules: [
        {
          locator: "ust. 1 pkt 1–2",
          explanation:
            "Cudzoziemiec може контактувати з представництвом або консульством своєї держави та користуватися opieka medyczna, якщо цього потребує стан здоров’я.",
        },
        {
          locator: "ust. 1 pkt 3–5",
          explanation:
            "Гарантовано доступ до санітарних пристроїв і необхідних засобів для особистої гігієни, можливість купувати особисті гігієнічні речі за власні кошти та користуватися власними засобами зв’язку.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Особа отримує їжу та напої; małoletni може користуватися іграми świetlicowe.",
        },
      ],
      legalEffect:
        "Стаття формулює конкретні права й забезпечення під час перебування у цьому pomieszczenie. Вона не встановлює сама по собі строк утримання, порядок звільнення або висновок щодо законності odmowa wjazdu.",
      foreignersCase:
        "Зафіксуйте, яке право не було забезпечене, коли саме та яким доказом це підтверджується; для медичної допомоги додайте опис стану здоров’я і звернення, а для małoletni — обставини, що стосуються доступу до ігор.",
    },
  ],
})
