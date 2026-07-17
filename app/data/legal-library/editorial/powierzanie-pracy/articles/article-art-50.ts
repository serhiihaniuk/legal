import { createLegalTextAuthor } from "../../../legal-text"

import { defineEditorialPart } from "../../define-editorial-part"

const foreignersLaw = createLegalTextAuthor("ustawa-o-cudzoziemcach")

const workLaw = createLegalTextAuthor("powierzanie-pracy")
export default defineEditorialPart<"powierzanie-pracy">({
  documentId: "powierzanie-pracy",
  editionId: "powierzanie-pracy-2025-621",
  legalStateDate: "2026-07-14",
  verifiedAt: "2026-07-15",
  entries: [
    {
      provisionId: "powierzanie-pracy-art-50",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("50", "Art. 50")} ust. 1–2 передбачає wpis wniosku до ewidencji wniosków і видачу zaświadczenie o wpisie, коли cudzoziemiec проситиме візу з ${foreignersLaw.article("60", "art. 60")} ust. 1 pkt 5a ustawy o cudzoziemcach для sezonowa praca або планує ruch bezwizowy, виконані умови ${workLaw.article("45", "art. 45")} ust. 1 і немає обставин ${workLaw.article("13", "art. 13")} ust. 1–3 та ${workLaw.article("14", "art. 14")}; zaświadczenie містить дані podmiot і cudzoziemiec, miejsce, підставу, час, оплату, обов'язки, періоди та дату wpis. Ust. 3–6 встановлюють строки 7 днів робочих для нескладної справи, wezwanie на усунення braków до 7 днів і 30 днів для справи, що потребує пояснень.`,
          sourceLocator: "Art. 50 ust. 1–6",
        },
      ],
      summary:
        "Стаття описує попередній wpis сезонного wniosku для майбутнього в'їзду за сезонною візою або безвізом, зміст certificate і процесуальні строки. Заświadczenie о wpis не є самою візою та не скасовує окрему перевірку побуту.",
      rules: [
        {
          locator: "ust. 1",
          explanation: workLaw.text`Starosta wpisує wniosek і видає zaświadczenie, якщо планується сезонна віза або ruch bezwizowy, виконані умови ${workLaw.article("45", "art. 45")} ust. 1 та немає названих підстав відмови.`,
        },
        {
          locator: "ust. 2",
          explanation:
            "У zaświadczenie зазначаються podmiot, pracodawca użytkownik за потреби, cudzoziemiec, місце, підстава роботи, час, найнижча оплата, обов'язки, періоди сезонної роботи й дата wpis.",
        },
        {
          locator: "ust. 3–4",
          explanation: workLaw.text`У справі без postępowanie wyjaśniającego starosta діє або відмовляє протягом 7 dni roboczych від повного wniosek. Certificate також містить інформацію про правила wjazd і pobyt, права та обов'язки доступу до ринку й pouczenie про odszkodowanie за ${workLaw.article("60", "art. 60")} ust. 3.`,
        },
        {
          locator: "ust. 5–6",
          explanation:
            "За формальних недоліків starosta викликає до їх усунення не пізніше 7 днів від подання; у справі з поясненнями строк дій за ust. 1 або відмови становить 30 днів від повного wniosek.",
        },
      ],
      legalEffect: workLaw.text`Wpis і zaświadczenie запускають передбачену для сезонної роботи процедуру, але самі не є visa, документом legalnego pobytu або остаточним zezwolenie na pracę. Право працювати до рішення залежить від окремих умов, зокрема ${workLaw.article("51", "art. 51")}.`,
      foreignersCase: workLaw.text`Перевірте повноту wniosku, умови ${workLaw.article("45", "art. 45")}, відсутність підстав ${workLaw.article("13", "art. 13")} і ${workLaw.article("14", "14")} та всі дані у zaświadczenie. Не замінюйте ним visa або інший документ pobyt; після в'їзду відстежуйте подальші кроки для сезонного дозволу.`,
    },
  ],
})
