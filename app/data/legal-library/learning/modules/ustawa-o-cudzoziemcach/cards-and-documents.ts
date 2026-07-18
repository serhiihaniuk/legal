import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const foreignersLaw = createLegalLearningTextAuthor("ustawa-o-cudzoziemcach")

const moduleContent: LegalLearningModule = {
  id: "cards-and-documents",
  order: 7,
  title: "Karta pobytu та інші документи іноземця",
  polish:
    "karta pobytu, polski dokument podróży, dokument tożsamości, dokument powrotowy",
  provisionScope: foreignersLaw.text`${foreignersLaw.article("219c", "art. 219c")}, ${foreignersLaw.article("222", "art. 222")} та ${foreignersLaw.articleRange("226", "285", { start: "art. 226" })}`,
  outcome:
    "Уміти визначити функцію кожного документа, спосіб його видачі, правила біометрії й отримання та обов’язки після втрати, заміни або припинення статусу.",
  caseQuestion:
    "Який саме документ потрібен для цієї дії, що він юридично підтверджує і чи дає право перетнути кордон?",
  placeInWork:
    "Після встановлення статусу й рішення: під час оформлення документа, перевірки подорожі, втрати паспорта або повернення документа organowi.",
  sections: [
    {
      id: "catalog-and-function",
      title: "Почни з каталогу й функції документа",
      paragraphs: [
        foreignersLaw.text`${foreignersLaw.article("226", "Art. 226")} містить шість різних документів: karta pobytu, polski dokument podróży dla cudzoziemca, polski dokument tożsamości cudzoziemca, tymczasowy polski dokument podróży, документ „zgoda na pobyt tolerowany” та europejski dokument podróży do celów powrotu. Спільне слово dokument не робить їх взаємозамінними. Спочатку назви документ, потім знайди норму про його функцію, адресата й строк дії.`,
        foreignersLaw.text`За ${foreignersLaw.article("229", "art. 229")} документи з ${foreignersLaw.article("226", "art. 226")} pkt 1–5 загалом видають і замінюють на wniosek, але першу kartę pobytu та europejski dokument podróży do celów powrotu видають z urzędu; закон містить і подальші спеціальні винятки. Це правило про спосіб започаткування видачі, а не доказ права на pobyt, pracę чи wjazd. Karta відображає наслідок відповідного статусу або дозволу, але її не можна читати замість decyzji й окремої норми про доступ до праці.`,
      ],
      questions: [
        foreignersLaw.text`Який пункт ${foreignersLaw.article("226", "Art. 226")} називає документ і яка наступна норма визначає його функцію?`,
        "Документ видається на wniosek чи z urzędu, і який organ є właściwy?",
      ],
      warning:
        "Не називай kartę pobytu паспортом, рішенням про дозвіл або самостійною підставою праці: це різні юридичні функції.",
    },
    {
      id: "issuance-biometrics-pickup",
      title: "Від заяви до отримання: форма, біометрія, особиста присутність",
      paragraphs: [
        foreignersLaw.text`${foreignersLaw.article("219c", "Art. 219c")} встановлює вузьке правило: wniosek o zezwolenie na pobyt rezydenta długoterminowego UE подають електронно через MOS, а поданий іншим способом залишають bez rozpoznania. ${foreignersLaw.article("222", "Art. 222")} не є загальною нормою про wniosek o wydanie або wymianę karty pobytu. Він уповноважує міністра визначити форму й технічні вимоги саме для заяви про цей дозвіл, а також окремі технічні елементи, потрібні для виготовлення картки: fotografię, odciski linii papilarnych, personalizację, інформацію про відбитки та wzór podpisu. Тому електронний маршрут із ${foreignersLaw.article("219c", "art. 219c")} не можна переносити на кожен документ із ${foreignersLaw.article("226", "art. 226")}.`,
        foreignersLaw.text`Для wydania або wymiany karty pobytu спочатку визнач конкретний режим за ${foreignersLaw.article("229", "art. 229")} і właściwy organ за ${foreignersLaw.article("245", "art. 245")}; відбитки перевіряй окремо за ${foreignersLaw.article("246", "art. 246")}, а odbiór — за ${foreignersLaw.article("248", "art. 248")}. За ${foreignersLaw.article("228", "art. 228")} підпис не розміщують у документах з ${foreignersLaw.article("226", "art. 226")} pkt 1–5 для дитини до 13 років у визначений нормою момент або особи, яка не може підписатися через choroba чи niepełnosprawność, підтверджену довідкою właściwego lekarza specjalisty не старшою за три місяці.`,
        foreignersLaw.text`У біометричному ланцюгу кожна норма відповідає на інше питання. ${foreignersLaw.article("244", "Art. 244")} ust. 3 визначає, коли відбитки не поміщають у kartę pobytu, зокрема для дитини, яка не досягла 6 років на релевантний день, або коли від особистої присутності відступили на названій законом підставі. ${foreignersLaw.article("246", "Art. 246")} регулює pobranie odcisków для окремих заяв про картку та фізичну неможливість їх зняття. ${foreignersLaw.article("248", "Art. 248")} встановлює правила odbioru, включно з відступом від особистої присутності, особою повністю ubezwłasnowolnioną, обов’язковою присутністю у випадках ust. 2a та перевіркою tożsamości. За ${foreignersLaw.article("282", "art. 282")} правила ${foreignersLaw.article("248", "Art. 248")} ust. 1–2a застосовують також до отримання трьох названих документів з наступних розділів.`,
      ],
      steps: [
        "Визначити конкретний документ і актуальну форму дії: wydanie, wymiana або odbiór.",
        "Окремо перевірити підпис, фотографію, відбитки, особисту присутність і доказ tożsamości.",
        "Зберегти urzędowe poświadczenie подання та документ, що підтверджує виняток.",
      ],
      evidence: [
        "Decyzja або інший документ, з якого випливає статус.",
        foreignersLaw.text`Wniosek у формі, передбаченій для конкретної процедури, і підтвердження його подання; для ${foreignersLaw.article("219c", "art. 219c")} — електронний wniosek через MOS.`,
        "Zaświadczenie lekarza specjalisty чи документи представництва, якщо застосовується виняток.",
      ],
    },
    {
      id: "post-card-documents",
      title: "Не змішуй повернення картки з travel document",
      paragraphs: [
        foreignersLaw.text`${foreignersLaw.article("249", "Art. 249")} встановлює випадки повернення karty pobytu й, як правило, строк не пізніше 14 днів від названої події; на wniosek organ безоплатно видає 30-денне zaświadczenie про повернення. ${foreignersLaw.article("250", "Art. 250")} регулює unieważnienie картки. Це lifecycle самої картки, а не автоматичне вирішення питання, чи особа має інший status або документ для подорожі.`,
        foreignersLaw.text`Polski dokument podróży за ${foreignersLaw.article("252", "art. 252")} вимагає втрати, знищення або закінчення власного документа, неможливості отримати новий і одного з перелічених статусів. ${foreignersLaw.article("252a", "Art. 252a")} встановлює обов’язкове wydanie в окремому маршруті для громадянств і періоду, визначених розпорядженням, якщо всі умови виконано. Документ за ${foreignersLaw.article("253", "art. 253")} дозволяє багаторазово перетинати кордон і діє один рік; загальний обов’язок намагатися отримати документ держави громадянства з ${foreignersLaw.article("254", "art. 254")} не поширюється на випадок ${foreignersLaw.article("252a", "Art. 252a")}.`,
        foreignersLaw.text`Polski dokument tożsamości з ${foreignersLaw.article("260", "art. 260")} доступний лише названим категоріям без документа podróży, коли іншого документа tożsamości отримати неможливо. За ${foreignersLaw.article("261", "art. 261")} він підтверджує особу під час pobytu в Польщі, не підтверджує obywatelstwa, не дозволяє перетнути кордон і не звільняє від потреби у wiza або zezwolenie. Tymczasowy polski dokument podróży має окремі маршрути, зокрема повернення до Польщі після втрати документа за кордоном у ${foreignersLaw.article("267", "art. 267")} та одноразовий wjazd або wyjazd за ${foreignersLaw.articleRange("268", "270", { start: "art. 268" })}. Europejski dokument podróży з ${foreignersLaw.article("281a", "art. 281a")} служить wyjazd після zobowiązanie do powrotu або передачі до третьої держави, якщо немає власного документа; це не документ для повернення до Польщі.`,
      ],
      warning:
        "Назва „dokument tożsamości” або „dokument podróży” не відповідає на питання про напрям, кількість перетинів і статус; прочитай спеціальну норму до конкретного документа.",
    },
    {
      id: "worked-example",
      title: "Анонімізований приклад: втрачений паспорт і планована поїздка",
      paragraphs: [
        foreignersLaw.text`Особа G має pobyt czasowy й polski dokument tożsamości cudzoziemca, але втратила національний паспорт та хоче поїхати за межі Польщі. Fakt: документ tożsamości чинний, паспорт втрачено. Pojęcie prawne: підтвердження особи в Польщі не дорівнює dokument podróży. За ${foreignersLaw.article("261", "art. 261")} цей документ прямо не дає права перетнути кордон.`,
        foreignersLaw.text`Наступний крок — не купувати квиток на підставі самої пластикової картки, а перевірити, чи особа відповідає умовам ${foreignersLaw.article("252", "art. 252")} або спеціального ${foreignersLaw.article("252a", "art. 252a")}, чи йдеться про інший тимчасовий документ і який доказ неможливості отримати паспорт потрібен. Dowód: повідомлення про втрату, чинна decyzja/status, звернення до компетентних органів і документи щодо винятку. Негативну decyzję аналізують разом із pouczenie; europejski dokument podróży do celów powrotu тут не підходить, бо його функція за ${foreignersLaw.article("281a", "art. 281a")} — виїзд у процедурі powrót або передачі.`,
      ],
      warning:
        "Приклад не гарантує видачі документа: вирішальними є точний статус, громадянство, чинне розпорядження та доведена можливість або неможливість отримати національний документ.",
    },
  ],
  exercise: foreignersLaw.text`Для анонімної ситуації склади таблицю Fakt → документ з ${foreignersLaw.article("226", "Art. 226")} → функція → умови → доказ → organ і czynność → termin → skutek → środek zaskarżenia. Окремо напиши, чи дозволяє документ wjazd, wyjazd, обидва або жодне.`,
}

export const cardsAndDocumentsLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:ustawa-o-cudzoziemcach:cards-and-documents",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "ustawa-o-cudzoziemcach",
        moduleId: "cards-and-documents",
      },
    },
    summary: moduleContent.outcome,
    claims: [
      {
        id: "module-legal-basis",
        kind: "statute-text",
        text: moduleContent.provisionScope,
        basis: [
          {
            reference: {
              kind: "official-source",
              sourceId: "eli-ustawa-o-cudzoziemcach",
            },
            locator: "documents for foreigners and their lifecycle",
          },
        ],
      },
    ],
    relationships: [
      {
        kind: "prerequisite",
        target: {
          family: "learning-module",
          reference: {
            kind: "learning-module",
            documentId: "ustawa-o-cudzoziemcach",
            moduleId: "permanent-and-eu-long-term-resident",
          },
        },
      },
      {
        kind: "related",
        target: {
          family: "learning-module",
          reference: {
            kind: "learning-module",
            documentId: "ustawa-o-cudzoziemcach",
            moduleId: "entry-and-current-basis",
          },
        },
      },
    ],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-07-18",
      verifiedAt: "2026-07-18",
    },
    body: moduleContent,
  })

export default cardsAndDocumentsLearningModuleTopic
