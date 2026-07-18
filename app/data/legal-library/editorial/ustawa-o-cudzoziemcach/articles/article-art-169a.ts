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
      provisionId: "ustawa-o-cudzoziemcach-art-169a",
      reviewStatus: "reviewed",
      claims: [
        {
          kind: "statute-text",
          text: foreignersLaw.text`${foreignersLaw.article("169a", "Art. 169a")} детально регулює dopuszczalność mobilności krótkoterminowa члена сім'ї naukowiec у Польщі: потрібні мета спільного перебування, сімейний документ іншої держави UE, повне zawiadomienie jednostka naukowa та відсутність рішення Szef Urzędu o sprzeciwie протягом 30 днів.`,
          sourceLocator: "Art. 169a ust. 1–13",
        },
        {
          kind: "statute-text",
          text: foreignersLaw.text`Стаття визначає форму і зміст zawiadomienie, обов'язкові додатки та переклад, підстави sprzeciw, адресатів перевірки, строки 20 днів для інформації органів і 5 робочих днів для видалення даних з EES, якщо sprzeciw не видано.`,
          sourceLocator: "Art. 169a ust. 2–13",
        },
      ],
      summary:
        "mobilność krótkoterminowa члена сім’ї naukowca дозволена лише після повного повідомлення та перевірки документів; мовчання Szef Urzędu протягом 30 днів має значення тільки за виконання всіх умов.",
      rules: [
        {
          locator: "ust. 1 pkt 1–3",
          explanation:
            "Член сім'ї має їхати для проживання разом із naukowiec, який користується або планує mobilność krótkoterminowa; мати сімейний pobyt і пов'язаний документ, видані іншою державою UE, що видала документ або візу naukowiec; а Szef Urzędu має отримати повідомлення від затвердженої польської jednostka naukowa і не видати sprzeciw протягом 30 днів.",
        },
        {
          locator: "ust. 2",
          explanation:
            "Zawiadomienie складається польською мовою, подається письмово на папері або електронно на адресу doręczenia електронного, і містить ідентифікаційні дані, паспорт, періоди досліджень, державу та строки документів naukowiec і члена сім'ї, страховку, кошти, дані обох наукових установ та підпис уповноваженої особи.",
        },
        {
          locator: "ust. 3–5",
          explanation: foreignersLaw.text`Jednostka naukowa додає доказ ubezpieczenie, достатніх коштів на utrzymanie і повернення в сумі за ${foreignersLaw.article("151", "art. 151")} ust. 1a та правилами на підставі ${foreignersLaw.article("157", "art. 157")}, а також сімейного дозволу й документа. Іноземні документи подаються з присяжним перекладом польською; 30-денний строк починається лише після doręczenie повного пакета і належного перекладу.`,
        },
        {
          locator: "ust. 6",
          explanation:
            "Szef Urzędu видає decyzja o sprzeciw, якщо сімейний документ не охоплює планований період, немає страховки або достатніх коштів, подані неправдиві чи фальшиві дані або документи, є запис у wykazie pobyt niepożądany чи SIS для відмови у в'їзді й pobyt, або цього вимагають оборона, безпека держави чи porządek publiczny.",
        },
        {
          locator: "ust. 7–10",
          explanation:
            "Для перевірки безпеки Szef Urzędu запитує Komendant Główny Straży Granicznej, Policji, Szef ABW та за потреби інші органи; інформацію передають протягом 20 днів. Непередання в строк вважається виконанням вимоги, а обмін може бути електронним.",
        },
        {
          locator: "ust. 11–13",
          explanation:
            "Decyzja o sprzeciw є ostateczna, про неї інформують державу, що видала сімейний документ, а за відсутності sprzeciw Szef Urzędu видаляє дані мобільного члена сім'ї з EES протягом 5 робочих днів.",
        },
      ],
      legalEffect:
        "Мобільність виникає з поєднання матеріальних умов, повного повідомлення та відсутності sprzeciw; сама передача повідомлення ще не дозволяє ігнорувати страховку, кошти або безпекові перешкоди.",
      foreignersCase:
        "Jednostka naukowa має зберегти доказ doręczenie повного повідомлення, присяжні переклади, страховку, кошти й строки обох документів; окремо відстежуйте 30-денний строк та остаточність можливого sprzeciw.",
    },
  ],
})
