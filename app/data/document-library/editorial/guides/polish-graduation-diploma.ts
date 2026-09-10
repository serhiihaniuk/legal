import type { DocumentGuide } from "../../contracts"
import { createEvidenceDocumentTextAuthor } from "../../legal-text"
import { defineDocumentTopic } from "../define-document-topic"
import { foreignersLaw } from "../authoring"

const documents = createEvidenceDocumentTextAuthor()
const educationAct =
  "https://eli.gov.pl/api/acts/DU/2024/1571/text/U/D20241571Lj.pdf"
const studiesRegulation = "https://eli.gov.pl/eli/DU/2023/2787/ogl"
const electronicDiplomas =
  "https://eli.gov.pl/api/acts/DU/2025/1837/text/O/D20251837.pdf"
const studiesAmendment = "https://eli.gov.pl/api/acts/DU/2026/832/text.pdf"

const guide: DocumentGuide = {
  id: "polish-graduation-diploma",
  title: "Dyplom ukończenia studiów w Polsce",
  category: "education",
  kind: "document",
  aliases: [
    "диплом польського університету",
    "диплом випускника",
    "dyplom magistra",
  ],
  documentType:
    "Диплом, виданий польським закладом вищої освіти після завершення студій і здобуття відповідного tytułu zawodowego.",
  description:
    "Dyplom ukończenia studiów підтверджує вже завершену вищу освіту. У справі випускника, який шукає роботу в Польщі, він пояснює, чому людина звертається саме як випускник. Навчання на останньому семестрі, запланований захист і виданий диплом означають різні факти.",
  preparedBy:
    "Університет, у якому завершено студії. Документ оформлює уповноважений підрозділ університету на підставі його навчальної документації.",
  purpose: [
    foreignersLaw.text`Для підстави випускника ${foreignersLaw.article("188", "art. 188 ust. 2a")} прямо вимагає представити диплом про завершення вищої освіти в польському університеті.`,
  ],
  doesNotProve: [
    "Не підтверджує фактичного пошуку роботи, страхування, житла чи доступних коштів. Сам документ не є дозволом на перебування або працевлаштування.",
  ],
  explanation: [
    {
      id: "completed-degree",
      title: "Диплом засвідчує завершення, довідка студента описує навчання",
      paragraphs: [
        documents.text`${documents.document("study-confirmation", "Довідка про прийняття або продовження навчання")} стосується вступу чи навчання, яке ще триває. Вона не перетворюється на диплом через те, що вказана очікувана дата закінчення вже минула. У документі про випуск має йтися про факт завершення, а не прогноз університету.`,
        foreignersLaw.text`За ${foreignersLaw.external("art. 77 ust. 1 Prawa o szkolnictwie wyższym i nauce", educationAct)} диплом підтверджує вищу освіту й tytuł zawodowy, наприклад magister. Для підстави за ${foreignersLaw.article("186", "art. 186 ust. 1 pkt 6")} важливо, що завершено студії в польському університеті та наступною метою є пошук роботи або намір почати господарську діяльність у Польщі. У прикладі нижче обрано пошук роботи.`,
        "Диплом іноземного університету не стає дипломом польського університету після перекладу або визнання рівня освіти. Сертифікат мовного курсу та świadectwo ukończenia studiów podyplomowych також не є цим документом. Їхню роль установлюють за іншою конкретною підставою.",
      ],
    },
    {
      id: "two-dates",
      title: "Дата завершення студій і дата видачі диплома",
      paragraphs: [
        foreignersLaw.text`За ${foreignersLaw.external("art. 76 ust. 7 Prawa o szkolnictwie wyższym i nauce", educationAct)} звичайною датою завершення є дата складання egzaminu dyplomowego. Для лікарського, стоматологічного й ветеринарного напрямів закон визначає останній передбачений програмою іспит. Дата виготовлення чи отримання диплома не замінює цю подію.`,
        foreignersLaw.text`У паперовому дипломі читають окремо tytuł zawodowy і дату його здобуття, місце та дату видачі. Відомості про університет і випускника дозволяють віднести документ до конкретної особи. Це частина змісту, передбаченого ${foreignersLaw.external("§ 32 розпорядження у справі студій", studiesRegulation)}. Якщо диплом і запис університету суперечать один одному, помилку з’ясовують з його автором, а не обирають зручнішу дату.`,
        foreignersLaw.text`${foreignersLaw.article("190", "Art. 190 pkt 3")} пов’язує одноразовий дев’ятимісячний дозвіл випускника з періодом безпосередньо після завершення студій. Пізніший друк диплома не створює нової дати випуску і не є підставою відкладати звернення до закінчення попередньої карти.`,
      ],
    },
    {
      id: "july-graduate",
      title: "Випускник завершив магістратуру в червні й подав заяву в липні",
      paragraphs: [
        "Нижче показано, як прочитати дати у вже виданому документі. Скорочений фрагмент пояснює зміст; він не відтворює захисні елементи або повний університетський бланк.",
      ],
      example: {
        title: "30 червня є датою завершення, 10 липня датою видачі",
        facts: [
          "Вигаданий приклад. Громадянин Індії завершив магістратуру в польському університеті 30.06.2026. Диплом видано 10.07.2026; заяву випускника подано 13.07.2026. Він залишається в Польщі й шукає роботу, але трудового договору ще не має.",
        ],
        sample: {
          kind: "letter",
          language: "pl",
          title: "Вибрані записи з диплома магістра",
          note: "Вигаданий заповнений фрагмент. Uczelnia A та Osoba A є умовними позначеннями. Напрям, форма навчання, оцінка, номер диплома, персональні дані, підпис і печатки тут не відтворені; у справі читають повний виданий документ.",
          paragraphs: [
            "Dyplom ukończenia studiów drugiego stopnia. Wydany w Rzeczypospolitej Polskiej. Uczelnia A w Polsce. Absolwent: Osoba A.",
            "Uzyskany tytuł zawodowy: magister. Data uzyskania tytułu zawodowego: 30.06.2026.",
            "Data wydania dyplomu: 10.07.2026.",
          ],
        },
        reasoning: [
          "На 13 липня освіту вже завершено й диплом видано. Десять днів між завершенням студій та видачею документа не означають продовження навчання. У хронології справи залишаються обидві дати з різними значеннями.",
          documents.text`Диплом підтверджує завершену освіту; ${documents.document("job-search-evidence", "листування про пошук роботи")} окремо пояснює наступну мету. Відсутність трудового договору в цьому прикладі узгоджується з пошуком роботи й не змінює змісту диплома.`,
        ],
        conclusion:
          "На дату подання є конкретний документ про завершення польської магістратури. Цю умову можна оцінити за дипломом; висновок про страхування, житло, кошти та допустимість дозволу потребує інших матеріалів. Сам факт видачі диплома не означає, що дозвіл уже надано.",
      },
    },
    {
      id: "supplement-and-limits",
      title: "Suplement пояснює програму, але не підмінює диплом",
      paragraphs: [
        "Suplement do dyplomu містить докладніші відомості про освіту, програму та результати. Його зіставляють з відповідним дипломом, якщо потрібно з’ясувати конкретний зміст навчання. Обов’язок університету видати цей додаток не означає автоматичного обов’язку додавати його до кожної заяви випускника.",
        foreignersLaw.text`${foreignersLaw.article("188", "Art. 188 ust. 2a")} називає диплом. Він не встановлює універсальної вимоги подати разом із ним suplement або довідку PUP. Якщо орган просить додатковий матеріал, його роль пояснюють конкретним питанням, яке залишилось непідтвердженим.`,
        "Довідка університету про завершення може пояснити, чому диплом ще оформлюють. Її не слід називати дипломом або обіцяти, що вона автоматично замінить прямо названий законом документ. У наведеному прикладі такого питання немає: диплом уже видано перед поданням.",
      ],
    },
  ],
  howToObtain: [
    "Випускник звертається до підрозділу свого університету, який оформлює дипломи, і з’ясовує готовність документа та спосіб отримання. Це може бути dziekanat або окреме бюро дипломів. Порядок отримання через представника визначають за офіційною інструкцією саме цього університету.",
    foreignersLaw.text`За чинним у 2026 році ${foreignersLaw.external("art. 77 ust. 2 Prawa o szkolnictwie wyższym i nauce", educationAct)} університет видає диплом із suplementem та передбаченими відписами протягом 30 днів після завершення студій. Цей строк стосується видачі документів, а не нового строку перебування.`,
  ],
  formAndValidity: [
    foreignersLaw.text`Для тих, хто завершив студії з 30.06 до 31.12.2026, ${foreignersLaw.external("art. 7 ustawy z 21 listopada 2025 r., Dz.U. 2025 poz. 1837", electronicDiplomas)} зберігає видачу паперових документів і дозволяє університету додатково видати електронні. Обов’язкова основна електронна форма починає діяти 01.01.2027. Тому від випускника з липневим дипломом не вимагають електронного документа лише через запуск нового реєстру.`,
    foreignersLaw.text`За ${foreignersLaw.external("§ 2 розпорядження Dz.U. 2026 poz. 832", studiesAmendment)} до документів, виданих лише на папері випускникам до 01.01.2027, застосовують попередні правила розпорядження. Скан паперового диплома є його копією, а не окремим електронним дипломом, виданим університетом.`,
  ],
  keyChecks: [
    "Виданий документ належить заявнику й підтверджує завершення студій у польському університеті.",
    "Дата завершення й дата видачі не змішані в хронології справи.",
    "Диплом відокремлено від доказів наступної мети та інших умов перебування.",
  ],
  legalBasis: [
    foreignersLaw.text`${foreignersLaw.article("186", "Art. 186 ust. 1 pkt 6")}, ${foreignersLaw.article("188", "art. 188 ust. 1a і 2a")} та ${foreignersLaw.article("190", "art. 190 pkt 3")}: підстава випускника, роль диплома й зв’язок із завершенням студій.`,
    foreignersLaw.text`${foreignersLaw.external("Art. 76 ust. 7 та art. 77 ust. 1–3 Prawa o szkolnictwie wyższym i nauce", educationAct)}: завершення освіти, диплом і його видача.`,
  ],
  relatedDocuments: [
    "study-confirmation",
    "qualification-evidence",
    "job-search-evidence",
  ],
  sources: [
    {
      label: "Ustawa o cudzoziemcach, ELI",
      url: "https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf",
      note: foreignersLaw.text`Перевірено ${foreignersLaw.article("186", "art. 186 ust. 1 pkt 6")}, ${foreignersLaw.article("188", "art. 188 ust. 1a і 2a")} та ${foreignersLaw.article("190", "art. 190 pkt 3")}. Огляд обмежено роллю диплома у справі випускника.`,
    },
    {
      label: "Prawo o szkolnictwie wyższym i nauce, текст зі змінами",
      url: educationAct,
      note: foreignersLaw.text`Текст укладено 03.08.2026. Перевірено ${foreignersLaw.external("art. 76 ust. 7 та art. 77 ust. 1–3", educationAct)} разом із позначеними майбутніми редакціями. Нову основну електронну форму не застосовано до липня 2026 року.`,
    },
    {
      label: "Rozporządzenie w sprawie studiów, Dz.U. 2023 poz. 2787",
      url: studiesRegulation,
      note: foreignersLaw.text`Перевірено ${foreignersLaw.external("§ 32 і § 35", studiesRegulation)} щодо змісту паперового диплома та suplementu з урахуванням змін і перехідного правила нижче.`,
    },
    {
      label: "Перехід до електронних дипломів, Dz.U. 2025 poz. 1837",
      url: electronicDiplomas,
      note: foreignersLaw.text`${foreignersLaw.external("Art. 7 і art. 9", electronicDiplomas)}: період завершення студій 30.06–31.12.2026 та набрання чинності новими правилами.`,
    },
    {
      label: "Зміни розпорядження у справі студій, Dz.U. 2026 poz. 832",
      url: studiesAmendment,
      note: foreignersLaw.text`${foreignersLaw.external("§ 1 pkt 7 і 10, § 2–3", studiesAmendment)}: реквізити, suplement і перехідне правило для документів лише на папері.`,
    },
    {
      label: "Politechnika Wrocławska: отримання диплома і suplementu",
      url: "https://wefim.pwr.edu.pl/studenci/absolwenci/odbior-dyplomu-i-suplementu-ukonczenia-studiow",
      note: "Приклад офіційної університетської інструкції: диплом і suplement можуть видавати різні підрозділи, можливе отримання через належно уповноважену особу. Це не єдиний порядок для всіх університетів.",
    },
  ],
  verifiedAt: "2026-09-10",
}

export const polishGraduationDiplomaTopic = defineDocumentTopic(guide)
export default polishGraduationDiplomaTopic
