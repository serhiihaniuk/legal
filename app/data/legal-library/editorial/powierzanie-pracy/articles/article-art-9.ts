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
      provisionId: "powierzanie-pracy-art-9",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: workLaw.text`${workLaw.article("9", "Art. 9")} визначає зміст wniosek про zezwolenie: дані podmiot, pracodawca użytkownik або podmiot delegujący, у визначених випадках представника podmiot zagraniczny, дані cudzoziemiec та деталі роботи — дати, stanowisko або функцію, місце, правову підставу, час, найнижче wynagrodzenie й обов'язки. До wniosek додаються oświadczenie про обставини ${workLaw.article("13", "art. 13")} і підтвердні документи та opłata; oświadczenie подається під rygor odpowiedzialności karnej і підписується не раніше ніж за 30 днів до подання.`,
          sourceLocator: "Art. 9 ust. 1–6",
        },
      ],
      summary:
        "Wniosek має дати органу повну картину podmiot, cudzoziemiec і запропонованої роботи. Закон окремо вимагає підтвердних документів, правдивого oświadczenie про визначені обставини та дотримання строку його підписання.",
      rules: [
        {
          locator: "ust. 1 pkt 1–2",
          explanation: workLaw.text`Зазначаються ідентифікаційні дані podmiot та, якщо є pracodawca użytkownik або delegowanie, відповідного podmiot; для ${workLaw.article("6", "art. 6")} ust. 1 pkt 3 додаються дані уповноваженого представника в Польщі.`,
        },
        {
          locator: "ust. 1 pkt 3–4",
          explanation:
            "Дані cudzoziemiec охоплюють особу, громадянство й документ подорожі, а відомості про роботу — періоди, stanowisko/функцію, місце, правову підставу, час, мінімальну оплату та основні обов'язки.",
        },
        {
          locator: "ust. 2–3",
          explanation:
            "Для окремого громадянина EOG замість місця постійного pobyt вказують постійне місце діяльності в Польщі; при роботі менш як місяць подають загальну кількість годин і оплату за весь період.",
        },
        {
          locator: "ust. 4–6",
          explanation: workLaw.text`До wniosek додають oświadczenie щодо ${workLaw.article("13", "art. 13")} ust. 1 pkt 1 lit. c–g, документи на підтвердження обставин та доказ opłata. Oświadczenie містить обов'язкову кримінальну застережну фразу і підписується не раніше 30 днів до подання.`,
        },
      ],
      legalEffect: workLaw.text`${workLaw.article("9", "Art. 9")} робить заявлені дані та докази основою провадження про роботу, але заповнений wniosek не дає ані legalnego pobytu, ані права почати роботу до настання передбаченої законом підстави.`,
      foreignersCase:
        "Зіставте wniosek із паспортом, umowa, місцем роботи, годинами, оплатою та фактичними обов'язками. Перевірте дату підпису oświadczenie і докази; окремо встановіть документ pobyt та підставу uprawnienia do pracy.",
    },
  ],
})
