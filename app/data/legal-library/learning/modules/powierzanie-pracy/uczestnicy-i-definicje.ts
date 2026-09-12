import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createEvidenceDocumentTextAuthor } from "~/data/document-library/legal-text"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const workLaw = createLegalLearningTextAuthor("powierzanie-pracy")
const documents = createEvidenceDocumentTextAuthor()
const workUrl = "https://eli.gov.pl/api/acts/DU/2025/621/text/U/D20250621Lj.pdf"
const temporaryUrl =
  "https://eli.gov.pl/api/acts/DU/2025/236/text/O/D20250236.pdf"

const moduleContent: LegalLearningModule = {
  id: "uczestnicy-i-definicje",
  order: 2,
  title: "Учасники та законодавчі визначення",
  polish:
    "Cudzoziemiec; podmiot powierzający pracę; polski podmiot; podmiot zagraniczny; pracodawca użytkownik",
  provisionScope: workLaw.text`${workLaw.article("2", "Art. 2")}; ${workLaw.article("3", "art. 3 ust. 1 pkt 6")}; ${workLaw.article("4", "art. 4 ust. 2–6")}; ${workLaw.article("5", "art. 5 ust. 1–3")}; ${workLaw.article("6", "art. 6 ust. 1")}; визначення, до яких відсилає закон про працю іноземців`,
  outcome:
    "Договір з працівником, щоденне керівництво його роботою та володіння часткою в компанії створюють різні зв'язки. Закон дає їм окремі назви. Від правильного визначення ролей залежить, чий обов'язок і яку підставу роботи потрібно перевіряти.",
  caseQuestion:
    "Агенція уклала договір, клієнт керує роботою, а часткою агенції володіє іноземна компанія. Хто з них доручає роботу іноземцеві?",
  placeInWork:
    "Встановлення учасників перед вибором процедури доступу до праці та перевіркою виконання їхніх обов'язків.",
  sections: [
    {
      id: "legal-relationship",
      title: "Суб'єкта визначає правовий зв'язок з іноземцем",
      paragraphs: [
        workLaw.text`Cudzoziemiec за ${workLaw.article("2", "art. 2 pkt 1")} означає особу, яка не має польського громадянства. Місце народження або мова самі цього не визначають. Водночас визначення іноземця ще не означає, що весь закон застосовується до кожної такої особи: наприклад, ${workLaw.article("1", "art. 1 ust. 4 pkt 6")} виключає зі своєї сфери громадян держав Європейського Союзу та держав Європейської асоціації вільної торгівлі (EFTA), які є сторонами угоди про Європейський економічний простір.`,
        workLaw.text`Podmiot powierzający pracę cudzoziemcowi за ${workLaw.article("2", "art. 2 pkt 4")} є організаційною одиницею, навіть якщо вона не має статусу юридичної особи, або фізичною особою, яка на підставі договору чи іншого правового відношення доручає або має намір доручити роботу іноземцеві. Отже, визначення охоплює і підготовлене майбутнє залучення. Воно потребує встановлення відповідного правового зв'язку, а не лише економічної вигоди від роботи.`,
        documents.text`Для найманого працівника ${documents.document("employment-contract", "umowa o pracę")} допомагає встановити сторону трудового відношення. Однак клієнт цієї сторони може отримувати результат послуги, а її власник може володіти часткою в компанії. Ці факти самі не роблять клієнта чи власника стороною договору з працівником. Фактичні вказівки потрібні для окремого питання: хто і в якій моделі керує роботою.`,
      ],
    },
    {
      id: "polish-and-foreign-entity",
      title:
        "Польський та іноземний суб'єкти: місце діяльності, а не походження капіталу",
      paragraphs: [
        workLaw.text`${workLaw.article("2", "Art. 2 pkt 6")} визначає polski podmiot powierzający pracę через місцезнаходження або місце постійного перебування в Польщі. Припис прямо охоплює oddział та przedstawicielstwo іноземного суб'єкта. Окремий варіант стосується громадянина держави Європейського економічного простору, який має в Польщі постійне місце ведення господарської діяльності. Тому слово «польський» тут не означає, що всі власники повинні бути громадянами Польщі.`,
        workLaw.text`Для podmiot zagraniczny ${workLaw.article("2", "art. 2 pkt 5")} поєднує кілька умов. Це суб'єкт, який доручає роботу і не має в Польщі ані місцезнаходження, ані місця постійного перебування, ані постійного місця ведення господарської діяльності. Водночас він має місцезнаходження або місце постійного перебування в іншій державі та веде там господарську діяльність. Самої іноземної адреси чи назви недостатньо для всього визначення.`,
        documents.text`${documents.document("business-register-information", "Відомості польського реєстру про компанію")} дозволяють зіставити її ідентичність і місцезнаходження з договором. Запис про іноземного учасника пояснює власність. Він сам не доводить, що цей учасник наймає конкретного працівника або направляє його до Польщі. Компанію та її учасника оцінюють окремо.`,
      ],
    },
    {
      id: "agency-and-user",
      title: "Агенція є роботодавцем, користувач визначає завдання",
      paragraphs: [
        workLaw.text`${workLaw.article("2", "Art. 2 pkt 7–8")} відсилає до ${workLaw.external("art. 2 pkt 1–2 ustawy o zatrudnianiu pracowników tymczasowych", temporaryUrl)}. Pracodawca użytkownik є роботодавцем або іншим суб'єктом, який визначає завдання працівнику, направленому агенцією тимчасової праці, та контролює їх виконання. Pracownik tymczasowy є працівником, якого агенція найняла виключно для тимчасової праці на користь і під керівництвом такого користувача. Керівництво користувача в цій моделі не усуває трудового відношення з агенцією.`,
        workLaw.text`Praca tymczasowa також має власне визначення у ${workLaw.external("art. 2 pkt 3 закону про тимчасових працівників", temporaryUrl)}. Це виконання протягом дозволеного законом періоду завдань сезонного, періодичного чи разового характеру; завдань, які власні працівники користувача не змогли б виконати вчасно; або обов'язків його відсутнього працівника. Сама коротка тривалість договору не замінює цієї кваліфікації.`,
        documents.text`${documents.document("agency-user-arrangements", "Письмові узгодження між агенцією та користувачем")} стосуються майбутньої роботи. У поєднанні з договором працівника й записами про фактичні завдання вони допомагають встановити, чи відповідає опис організації роботи її виконанню. Перебування на території клієнта саме по собі ще не доводить, що клієнт є pracodawca użytkownik.`,
        workLaw.text`${workLaw.external("Art. 7 ust. 1–2 закону про тимчасових працівників", temporaryUrl)} розрізняє найм працівника агенцією за строковою umowa o pracę та направлення особи, яка не є її працівником, за цивільно-правовим договором. Тому кожну особу на umowa zlecenia не можна автоматично назвати pracownik tymczasowy у вузькому законодавчому значенні. ${workLaw.external("Art. 25a ust. 1 цього закону", temporaryUrl)} поширює на цивільне направлення лише перелічені в ньому правила з відповідним застосуванням, а не перетворює цивільний договір на трудовий.`,
      ],
    },
    {
      id: "activity-and-work-basis",
      title: "Вид роботи та право її виконувати є різними питаннями",
      paragraphs: [
        workLaw.text`Powierzanie pracy за ${workLaw.article("2", "art. 2 pkt 9 lit. a–b")} охоплює роботу в Польщі у трудовому або службовому відношенні, надомну працю, роботу чи послуги за цивільними договорами, а також названі випадки праці членів сільськогосподарських кооперативів. ${workLaw.article("2", "Art. 2 pkt 9 lit. f")} додає роботу в Польщі в межах delegowanie, до якого відсилає закон. Назва «послуга» сама не виводить діяльність за межі цього поняття.`,
        workLaw.text`Корпоративні випадки у ${workLaw.article("2", "art. 2 pkt 9 lit. c–e")} стосуються особи, яка перебуває в Польщі: виконання функції в zarząd юридичної особи, внесеної до реєстру підприємців KRS, або spółka kapitałowa w organizacji; представництва чи ведення справ внесеної до цього реєстру spółka komandytowa або komandytowo-akcyjna; виконання функції prokurent підприємця, внесеного до того самого реєстру. Саме володіння часткою без такої функції не є одним із цих корпоративних випадків.`,
        workLaw.text`${workLaw.article("6", "Art. 6 ust. 1")} розділяє випадки дозволів за моделлю роботи, зокрема договір з польським суб'єктом, корпоративну функцію та направлення іноземним роботодавцем. Проте спочатку має значення власна підстава доступу іноземця до праці. Наприклад, польське zezwolenie na pobyt stały дає swobodny dostęp do rynku pracy за ${workLaw.article("3", "art. 3 ust. 1 pkt 6")}. Для такої особи не потрібен дозвіл на працю лише через те, що вона працює через агенцію.`,
        workLaw.text`Ця підстава не скасовує решти застосовних обов'язків. Виняток у ${workLaw.article("4", "art. 4 ust. 5")} стосується тільки категорій, названих у ${workLaw.article("3", "art. 3 ust. 1 pkt 1–5")}, тому не звільняє власника польського pobyt stały з наступного пункту від правил ${workLaw.article("4", "art. 4 ust. 2–4")}: пред'явлення документа про перебування перед роботою, можливості вимагати його під час роботи та зберігання копій. Період зберігання пов'язаний також із ${workLaw.article("4", "art. 4 ust. 6")}.`,
        workLaw.text`${workLaw.article("5", "Art. 5 ust. 1")} вимагає письмового договору до допуску до роботи, крім корпоративних випадків, зазначених у ${workLaw.article("6", "art. 6 ust. 1 pkt 2")}. За ${workLaw.article("5", "art. 5 ust. 2–3")} перед підписанням польського договору іноземцеві, який не послуговується польською, представляють його зміст письмово у зрозумілій для нього версії. Якщо договір складено іноземною мовою, суб'єкт зберігає його польський переклад, виконаний присяжним перекладачем зі списку Міністра юстиції. Це різні обов'язки. Звільнення від дозволу на працю саме по собі не звільняє від цих вимог.`,
      ],
    },
    {
      id: "two-illegal-work-definitions",
      title:
        "Незаконне доручення і незаконне виконання роботи мають різні визначення",
      paragraphs: [
        workLaw.text`${workLaw.article("2", "Art. 2 pkt 2")} описує nielegalne powierzenie pracy з боку суб'єкта, а ${workLaw.article("2", "pkt 3")} окремо визначає nielegalne wykonywanie pracy іноземцем. Обидва визначення охоплюють незаконне перебування, підставу перебування, яка не дає права працювати, та відсутність потрібного дозволу або oświadczenie. Застереження «якщо вони потрібні» не дозволяє прирівняти кожну відсутність дозволу до порушення.`,
        workLaw.text`Визначення для суб'єкта додатково охоплює інші умови або посаду, ніж у дозволі на працю чи зареєстрованому oświadczenie. ${workLaw.article("2", "Art. 2 pkt 2 lit. d")} при цьому зберігає випадки, коли закон дозволяє зміну або іноземець має іншу підставу виконувати роботу. ${workLaw.article("2", "Lit. e")} окремо називає відхилення від умов визначених дозволів на тимчасове перебування, із застереженням щодо ${workLaw.external("art. 119 ustawy o cudzoziemcach", "https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf")} та такими самими винятками щодо дозволених змін чи іншої підстави праці. Згаданий припис закону про іноземців дозволяє визначені зміни без зміни або нового дозволу на тимчасове перебування і працю, зокрема зміну назви посади без зміни обов'язків. Це не твердження про будь-який вид дозволу на перебування.`,
        workLaw.text`${workLaw.article("2", "Art. 2 pkt 2 lit. f")} включає відсутність письмового договору, зберігаючи виняток для ${workLaw.article("6", "art. 6 ust. 1 pkt 2")}. У визначенні для самого іноземця немає автоматичного повторення всіх цих додаткових підстав. Тому встановлений недолік у діях суб'єкта не можна без окремого аналізу переписати як тотожне порушення працівника. Ці визначення встановлюють поняття; відповідальність конкретної особи та санкцію визначають за відповідними нормами і встановленими обставинами.`,
      ],
    },
  ],
  caseExample: {
    title: "Агенція A, користувач B та іноземний учасник H",
    facts:
      "Вигаданий приклад завершеного внутрішнього зіставлення. Повнолітній громадянин Індії X має польське zezwolenie na pobyt stały протягом усього описаного періоду. Агенція A є sp. z o.o. з місцезнаходженням у Польщі. Німецька компанія H володіє часткою в A, але не наймає X і не направляє його до Польщі. 13.08.2026 A і B письмово узгодили роботу. 14.08.2026 A уклала з X строкову umowa o pracę на 17–28.08.2026 із зазначенням B як користувача. Робота стосувалася завдань, які власні працівники B не могли виконати вчасно, а не заміщення відсутньої особи. У цей період B фактично визначав щоденні завдання X та контролював їх виконання. 31.08.2026 працівник, який веде документацію, зіставив договір, узгодження, реєстрові відомості й записи виконаних завдань та виправив опис ролей.",
    sample: {
      kind: "table",
      title: "Porównanie dokumentów i ról z 31.08.2026",
      note: "Вигаданий робочий запис польською. Вибрані відомості пояснюють висновок; таблиця не є офіційним формуляром, заявою чи актом перевірки.",
      columns: ["Ustalony zapis lub dokument", "Wniosek z porównania"],
      rows: [
        {
          id: "incorrect-description",
          cells: [
            "Poprzedni opis roboczy: Pracodawca: B; podmiot zagraniczny: H.",
            "Opis pomijał umowę A z X i utożsamiał własność udziału z zatrudnieniem pracownika. Został poprawiony 31.08.2026.",
          ],
        },
        {
          id: "agency-contract",
          cells: [
            "Umowa o pracę podpisana 14.08.2026: pracodawca A; pracownik X; okres 17–28.08.2026; pracodawca użytkownik B.",
            "A jest pracodawcą X i podmiotem powierzającym mu pracę na podstawie tej umowy.",
          ],
        },
        {
          id: "polish-entity",
          cells: [
            "Dane polskiego rejestru: A, spółka z ograniczoną odpowiedzialnością, siedziba w Polsce. H jest wspólnikiem A.",
            "A jest polskim podmiotem powierzającym pracę. Sam udział H nie czyni H podmiotem powierzającym pracę X.",
          ],
        },
        {
          id: "actual-user",
          cells: [
            "Uzgodnienia A i B z 13.08.2026 oraz zapisy z 17–28.08.2026: B wyznaczał X zadania i kontrolował wykonanie. Własny personel B nie mógł wykonać tych zadań w terminie.",
            "B pełnił rolę pracodawcy użytkownika. X wykonywał pracę na rzecz i pod kierownictwem B jako pracownik zatrudniony przez A.",
          ],
        },
        {
          id: "independent-work-basis",
          cells: [
            "Decyzja o udzieleniu X zezwolenia na pobyt stały w Polsce oraz aktualna karta pobytu. Zezwolenie przysługiwało X w całym okresie pracy.",
            "Podstawą swobodnego dostępu X do rynku pracy było polskie zezwolenie na pobyt stały. Nie wywodzono tego uprawnienia z niemieckiego udziałowca ani z nazwy agencji.",
          ],
        },
      ],
    },
    analysis: documents.text`Сторону трудового відношення встановлено за ${documents.document("employment-contract", "umowa o pracę")}, а роль B підтвердили ${documents.document("agency-user-arrangements", "письмові узгодження A і B")} разом із записами реальних завдань. ${documents.document("business-register-information", "Польські реєстрові відомості A")} пояснили її місцезнаходження та відокремили її від учасника H. Право X на працю визначено окремо за ${workLaw.article("3", "art. 3 ust. 1 pkt 6")}, зіставивши ${documents.document("administrative-decision", "рішення про надання польського pobyt stały")} та ${documents.document("residence-card", "karta pobytu")}. Картка не стала дозволом агенції, а участь H не стала доказом направлення іноземним роботодавцем.`,
    lesson:
      "31 серпня робочий опис виправлено: A є роботодавцем і польським суб'єктом, який доручає роботу; B є pracodawca użytkownik; H у цих відносинах є лише учасником A. Для X встановлено окрему підставу доступу до праці. Це завершений висновок про ролі та цю підставу, а не підтвердження всіх вимог до діяльності агенції, допустимих періодів тимчасової праці чи всіх умов фактичного працевлаштування.",
  },
}

export const uczestnicyIDefinicjeLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:powierzanie-pracy:uczestnicy-i-definicje",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "powierzanie-pracy",
        moduleId: "uczestnicy-i-definicje",
      },
    },
    summary: moduleContent.outcome,
    claims: [
      {
        id: "module-legal-basis",
        kind: "statute-text",
        text: workLaw.text`Визначення учасників і роботи за ${workLaw.external("чинним офіційним текстом Dz.U. 2025 poz. 621", workUrl)} та відсилання до ${workLaw.external("закону про тимчасових працівників, Dz.U. 2025 poz. 236", temporaryUrl)}; перевірено 12.09.2026 у зазначеному обсязі.`,
        basis: [
          {
            reference: {
              kind: "official-source",
              sourceId: "eli-powierzanie-pracy",
            },
            locator:
              "Art. 1 ust. 4 pkt 6; art. 2; art. 3 ust. 1 pkt 6; art. 4 ust. 2–6; art. 5 ust. 1–3; art. 6 ust. 1. Imported definitions: ustawa o zatrudnianiu pracowników tymczasowych, art. 2, art. 7, art. 25a ust. 1.",
          },
        ],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-09-12",
      verifiedAt: "2026-09-12",
    },
    body: moduleContent,
  })

export default uczestnicyIDefinicjeLearningModuleTopic
