import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { DocumentGuide } from "~/data/document-library/contracts"
import { createEvidenceDocumentTextAuthor } from "../../legal-text"
import {
  documentSources,
  foreignersLaw,
  regulationLaw,
  workLaw,
} from "../authoring"

const documents = createEvidenceDocumentTextAuthor()
const romeUrl =
  "https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX:02008R0593-20080724"
const postingUrl =
  "https://eli.gov.pl/api/acts/DU/2025/1682/text/O/D20251682.pdf"

const guide: DocumentGuide = {
  id: "employment-contract",
  title: "Umowa o pracę",
  category: "work",
  aliases: ["umowa o pracę"],
  description:
    "Umowa o pracę є трудовим договором між працівником і роботодавцем. Він фіксує погоджені умови роботи. Для конкретного періоду договір читають разом із підписаними змінами, а виконання роботи й виплати встановлюють за іншими матеріалами.",
  preparedBy:
    "Підписують працівник і роботодавець через особу, уповноважену до представництва.",
  purpose: [
    "Підтверджує погоджені сторонами умови трудових відносин.",
    regulationLaw.text`Дає погоджені умови для порівняння з ${regulationLaw.annex("2", "додатком роботодавця")}, дозволом та фактичною роботою.`,
  ],
  doesNotProve: [
    "Не доводить фактичну виплату зарплати або виконання роботи.",
    "Не встановлює сам по собі право перебувати або працювати в Польщі.",
  ],
  explanation: [
    {
      id: "foreign-contract-scope",
      title: "Закордонний договір не стає польським через направлення",
      paragraphs: [
        "Наведені нижче правила Kodeksu pracy пояснюють договір, до якого застосовується польське трудове право. У справі про направлення може бути договір із закордонним роботодавцем, за яким людина звичайно працює в іншій державі. Його умови й зміни не оцінюють автоматично за польськими правилами лише тому, що документ додано до польської заяви.",
        workLaw.text`Коли належне право визначають за регламентом Rzym I, ${workLaw.external("art. 8", romeUrl)} враховує вибір сторін, зберігаючи захист працівника, від якого не можна відступити договором за правом, яке діяло б без такого вибору. Без вибору насамперед важлива держава, у якій або з якої людина звичайно працює. Тимчасова робота в іншій державі сама не змінює цього місця. Якщо за цим правилом право визначити неможливо, застосовують право держави підприємства, через яке працівника найнято. Водночас за тіснішого зв'язку договору з іншою державою застосовують її право.`,
        workLaw.text`Це питання права договору, а не дозволу на працю. При направленні залишаються відповідні обов'язкові польські умови праці за ${workLaw.external("art. 4–5 ustawy o delegowaniu", postingUrl)}; для роботодавців із третіх держав враховують ${workLaw.external("art. 26", postingUrl)}. Іноземне право в договорі не усуває цих гарантій.`,
        documents.text`${documents.document("posting-assignment-letter", "Лист роботодавця про направлення")} може описувати існуючі відносини й майбутнє завдання. Він сам по собі не є погодженою зміною договору. Якщо змінюються договірні умови, потрібну форму та спосіб зміни визначають за застосовними правилами; лист не дає роботодавцю необмеженого права змінити їх одноосібно.`,
      ],
    },
    {
      id: "compare-versions",
      title: "Читати договір разом зі змінами",
      paragraphs: [
        "Aneks є додатком, яким сторони змінюють умови договору. Дата його підписання може відрізнятися від дати початку дії нових умов. Якщо змінено лише винагороду, інші положення основного договору потрібно читати далі.",
        "Brutto означає суму до відрахувань, netto є сумою після них. Місячна ставка, погодинна ставка та банківський переказ за розрахунковий період не є однаковими величинами. Розбіжність між ними спочатку потребує пояснення, а не виправлення всіх документів під одне число.",
      ],
      example: {
        title: "Дві суми винагороди",
        facts: [
          "Умовний приклад. Договір визначає 6 000 zł brutto щомісяця. Додаток підписано 20 серпня, але нова сума діє з 1 вересня. На банківському переказі за серпень видно іншу суму після відрахувань.",
        ],
        sample: {
          kind: "letter",
          title: "Умова договору та підписана зміна",
          note: "Вигадані фрагменти двох документів. Реквізити сторін і підписи не наведено. Суми не є законними порогами або розрахунком зарплати.",
          language: "pl",
          paragraphs: [
            "UMOWA O PRACĘ\nWynagrodzenie zasadnicze: 6 000 zł brutto miesięcznie.\nWymiar czasu pracy: pełny etat.",
            "ANEKS DO UMOWY\nData zawarcia: 20.08.2026 r.\nOd dnia 01.09.2026 r. wynagrodzenie zasadnicze wynosi 6 500 zł brutto miesięcznie. Pozostałe warunki umowy pozostają bez zmian.",
          ],
        },
        reasoning: [
          "Для серпня погоджена ставка залишається 6 000 zł brutto. Підписання додатка 20 серпня не переносить на серпень умову, яка діє з вересня. Банківський переказ зіставляють із розрахунком зарплати за серпень, а не безпосередньо з вересневою ставкою brutto.",
        ],
        conclusion:
          "Різні суми договору й додатка пояснені періодом їх дії. Правильність фактичної виплати ще потребує розрахунку за відповідний місяць.",
      },
    },
    {
      id: "form-and-language",
      title: "Підпис, мова і право працювати",
      paragraphs: [
        workLaw.text`${workLaw.article("5", "Art. 5 закону про powierzanie pracy cudzoziemcom")} передбачає письмову форму до допуску до роботи з визначеними законом винятками. Для польського договору людині, яка не володіє польською, до підписання надають письмову версію, зрозумілу їй. Для договору іноземною мовою закон окремо регулює зберігання перекладу польською, виконаного tłumaczem przysięgłym, присяжним перекладачем.`,
        "Підпис показує волевиявлення сторони, але не замінює дозволу або законного звільнення від нього. Повноваження особи, яка підписала за компанію, та підставу роботи іноземця перевіряють окремо.",
      ],
    },
  ],
  legalBasis: [
    workLaw.text`${workLaw.external("Art. 29 Kodeksu pracy", "https://eli.gov.pl/eli/DU/2025/277/ogl")}: зміст, письмова форма договору та оформлення змін.`,
    workLaw.text`${workLaw.article("5", "Art. 5 ustawy z 20.03.2025 o warunkach dopuszczalności powierzania pracy cudzoziemcom")}.`,
    foreignersLaw.text`${foreignersLaw.article("114", "Art. 114 ustawy o cudzoziemcach")}: умови дозволу на тимчасове перебування та роботу.`,
  ],
  keyChecks: [
    "Сторони, підписант, вид договору, посада, місце, час, винагорода і дата початку.",
    regulationLaw.text`Відповідність ${regulationLaw.annex("2", "Załącznikowi nr 1")} та фактичній організації праці.`,
    "Дата початку дії кожної зміни, зрозуміла працівникові мовна версія і підписи сторін.",
  ],
  relatedDocuments: [
    "posting-assignment-letter",
    "employment-annex-1",
    "income-evidence",
    "business-register-information",
    "work-organisation-evidence",
  ],
  sources: [
    {
      label: "Rzym I: право, застосовне до трудового договору",
      url: romeUrl,
      note: workLaw.text`12.09.2026 перевірено ${workLaw.external("art. 8", romeUrl)} про вибір права, звичайне місце роботи та тимчасову роботу в іншій державі. Цей припис визначає право договору, а не право працювати чи перебувати в Польщі.`,
    },
    {
      label: "Польські умови праці при направленні",
      url: postingUrl,
      note: workLaw.text`12.09.2026 перевірено ${workLaw.external("art. 4–5 і 26", postingUrl)} для відмежування права договору від обов'язкових умов при направленні. Це уточнення меж сторінки, не перевірка всього закордонного трудового права.`,
    },
    documentSources.work,
    documentSources.aliens,
    {
      label: "Kodeks pracy, Dz.U. 2025 poz. 277",
      url: "https://eli.gov.pl/eli/DU/2025/277/ogl",
      note: "Умови договору та письмове оформлення змін. Пізніші зміни доступні на сторінці акта.",
    },
  ],
  verifiedAt: "2026-09-05",
}

export const employmentContractTopic: KnowledgeUnit<DocumentGuide> =
  defineKnowledgeUnit({
    id: "evidence-document:employment-contract",
    subject: {
      family: "evidence-document",
      reference: {
        kind: "evidence-document",
        documentId: "employment-contract",
      },
    },
    summary: guide.description,
    claims: [
      {
        id: "document-purpose",
        kind: "requires-verification",
        text: guide.description,
        basis: [
          {
            reference: {
              kind: "official-source",
              sourceId: "eli-powierzanie-pracy",
            },
            locator: "document-specific requirements",
          },
        ],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-07-18",
      verifiedAt: guide.verifiedAt,
    },
    body: guide,
  })

export default employmentContractTopic
