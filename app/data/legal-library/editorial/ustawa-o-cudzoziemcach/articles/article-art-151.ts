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
      provisionId: "ustawa-o-cudzoziemcach-art-151",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("151", "Art. 151")} встановлює умови zezwolenie на pobyt czasowy для naukowiec, який проводить badania naukowe або prace rozwojowe в zatwierdzona jednostka naukowa, включно зі страхуванням, коштами, письмовим зобов’язанням одиниці та umowa o przyjęciu.`,
          sourceLocator: "Art. 151 ust. 1–1c",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("151", "Art. 151")} ust. 4–8 регулює zatwierdzenie jednostka, строк 5 років, інформаційні запити, cofnięcie/відмову у продовженні та офіційний список.`,
          sourceLocator: "Art. 151 ust. 4–8",
        },
      ],
      summary:
        "Дослідницький дозвіл поєднує статус naukowiec, реальний проєкт у затвердженій jednostka, умови забезпечення та спеціальну угоду.",
      rules: [
        {
          locator: "ust. 1 pkt 1",
          explanation: foreignersLaw.text`Cudzoziemiec подає ubezpieczenie zdrowotne або покриття лікування, достатні кошти чи документи про них і письмове зобов’язання jednostka повернути витрати у визначеному ${foreignersLaw.article("151", "art. 151")} випадку.`,
        },
        {
          locator: "ust. 1 pkt 2 lit. a–f",
          explanation:
            "Umowa o przyjęciu має визначати назву/мету або предмет дослідження, обов’язки naukowiec та jednostka, строки, wynagrodzenie, інші умови праці й заплановані дослідження в інших державах UE.",
        },
        {
          locator: "ust. 1a–1c",
          explanation: foreignersLaw.text`Місячні кошти після відрахування витрат на житло мають перевищувати поріг соціальної допомоги; витрати на житло включають сталі оплати та комунальні послуги, а для громадян держав ${foreignersLaw.article("113b", "art. 113b")} діє спеціальне правило ust. 1c.`,
        },
        {
          locator: "ust. 4–5",
          explanation:
            "Jednostka затверджується на 5 років (або коротше у спеціальному випадку), якщо існує щонайменше 5 років, безперервно веде самостійну наукову діяльність і немає заперечень щодо безпеки та interes RP; продовження застосовує ті самі правила.",
        },
        {
          locator: "ust. 6–8",
          explanation: foreignersLaw.text`Minister може відмовити у продовженні або cofnięcie затвердження за припинення досліджень, невиконання ${foreignersLaw.article("152", "art. 152")} ust. 4/${foreignersLaw.article("156", "art. 156")}, неправдиву чи недбалу угоду або фальшиві дані; за окремих підстав повторна заява заборонена 5 років, а список публікується офіційно.`,
        },
      ],
      legalEffect:
        "Позитивна оцінка дослідницького договору не усуває фінансових, страхових та інституційних умов; затвердження одиниці є окремим рішенням.",
      foreignersCase:
        "Перевірте статус naukowiec, затвердження jednostka, повну umowa o przyjęciu, кошти, страхування і письмове зобов’язання. Відокремте помилку одиниці від невиконання умови cudzoziemiec.",
    },
  ],
})
