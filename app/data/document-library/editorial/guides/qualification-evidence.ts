import type { DocumentGuide } from "../../contracts"
import { defineDocumentTopic } from "../define-document-topic"
import { documentSources, foreignersLaw } from "../authoring"

const guide: DocumentGuide = {
  id: "qualification-evidence",
  title: "Диплом, досвід і професійні кваліфікації",
  category: "education",
  kind: "evidence-set",
  aliases: ["wyższe kwalifikacje zawodowe"],
  description:
    "Диплом показує, яку освіту людина завершила. Документи попередніх роботодавців пояснюють, яку роботу вона виконувала і як довго. Для Blue Card ці відомості зіставляють із завданнями майбутньої роботи, а для регульованої професії також встановлюють право її виконувати.",
  preparedBy:
    "Навчальний заклад, попередній роботодавець або орган професійного допуску. Заявник збирає документи та пояснює їхній зв'язок із роботою.",
  purpose: [
    "Підтверджує конкретний спосіб набуття кваліфікацій, потрібних для заявленої роботи.",
  ],
  doesNotProve: [
    "Назва посади у CV не підтверджує зміст досвіду. Переклад та apostille не перетворюють диплом на дозвіл виконувати регульовану професію.",
  ],
  explanation: [
    {
      id: "education-or-experience",
      title: "Коли підходить освіта, а коли досвід",
      paragraphs: [
        "Wyższe kwalifikacje zawodowe означає вищі професійні кваліфікації. Для нерегульованої професії їх можна підтвердити освітою або відповідним досвідом. Освітній спосіб передбачає успішно завершену програму вищої освіти тривалістю щонайменше три роки. Заклад має бути визнаний установою вищої освіти в державі, де він розташований. Диплом і додаток до нього дозволяють встановити завершення, тривалість та зміст програми.",
        "Другий спосіб спирається на досвід рівня, порівнюваного з вищою освітою, потрібний для роботи за договором. Для професій з опублікованого переліку потрібно три роки такого досвіду впродовж семи років перед поданням заяви. Для професій поза переліком закон визначає п'ять років. Це вимога до відповідного досвіду, а не до загального трудового стажу.",
        "Перелік охоплює визначені професії керівників і спеціалістів інформаційно-комунікаційних технологій. Належність встановлюють за реальною роботою та її класифікацією. Слово IT у назві роботодавця не робить будь-яку його посаду професією з цього переліку.",
      ],
    },
    {
      id: "experience-record",
      title: "Що видно в підтвердженні досвіду",
      paragraphs: [
        "Свідоцтво про роботу з датами підтверджує період, але може не описувати завдання. Тоді zaświadczenie o doświadczeniu zawodowym, підтвердження професійного досвіду від роботодавця, пояснює обов'язки, відповідальність і зміни посади. Автор має бути ідентифікований, а відомості мають стосуватися саме заявника.",
        "Два одночасні місця роботи не подвоюють календарний період. Рік після зміни обов'язків також не слід зараховувати до попередньої спеціальності без пояснення. Договори та інші матеріали допомагають перевірити твердження роботодавця.",
      ],
      example: {
        title: "Три роки розробки застосунків замість слова specialist",
        facts: [
          "Умовний приклад. Заяву Blue Card подають 01.09.2026 для роботи programista aplikacji, код 251401 з офіційного переліку. Первісне підтвердження містило лише посаду specialist і дати. Попередній роботодавець надав уточнення.",
        ],
        sample: {
          kind: "letter",
          language: "pl",
          title: "Zaświadczenie o doświadczeniu zawodowym",
          note: "Вигаданий змістовий фрагмент. Ідентифікаційні дані роботодавця й працівника та підпис не відтворено. Це не офіційний бланк.",
          paragraphs: [
            "Okres zatrudnienia: od 01.08.2023 do 31.07.2026, w pełnym wymiarze czasu pracy. Stanowisko w umowie: specialist.",
            "Przez cały wskazany okres pracownik projektował i rozwijał aplikacje serwerowe w języku Java, tworzył interfejsy API oraz testy automatyczne. Samodzielnie analizował wymagania i dobierał rozwiązania techniczne. Uczestniczył w przeglądach kodu i usuwaniu błędów produkcyjnych.",
            "Nazwa specialist była wewnętrzną nazwą stanowiska. Obowiązki obejmowały programowanie aplikacji, a nie obsługę zgłoszeń użytkowników. Informacje potwierdzamy na podstawie dokumentacji zatrudnienia i zakresu obowiązków.",
          ],
        },
        reasoning: [
          "Уточнення пов'язує загальну назву посади з конкретними завданнями розробника. Період становить три роки і повністю лежить у семирічному проміжку перед поданням. Опис нової роботи також передбачає розробку застосунків, тому зв'язок між досвідом і договором став зрозумілим.",
        ],
        conclusion:
          "Документ пояснює характер і тривалість заявленого досвіду. Його достовірність та відповідність рівню вищих кваліфікацій оцінює орган; сам підрахунок років не вирішує всю справу Blue Card.",
      },
    },
    {
      id: "regulated-profession",
      title: "Освіта і професійний допуск мають різну роль",
      paragraphs: [
        "Zawód regulowany є професією, доступ до якої або її виконання закон пов'язує з визначеними кваліфікаціями чи іншими умовами. Диплом підтверджує навчання, але для професійного допуску може бути потрібне окреме визнання, дозвіл або реєстрація. Загальний спосіб підтвердження досвідом не замінює цих вимог.",
        "Tłumaczenie przysięgłe дає польський переклад документа. Apostille підтверджує його офіційне походження в межах відповідної процедури. Жоден із цих кроків сам по собі не є рішенням про визнання освіти чи допуск до професії. Не слід вимагати nostryfikacji, процедури визнання рівнозначності диплома, автоматично від кожного заявника Blue Card лише тому, що диплом іноземний.",
      ],
    },
  ],
  keyChecks: [
    "Визначено спосіб підтвердження кваліфікацій та його зв'язок із роботою.",
    "Для досвіду встановлено завдання, періоди, можливі перетини та відповідну професію.",
    "Професійний допуск, переклад і підтвердження походження документа розглянуто окремо.",
  ],
  legalBasis: [
    foreignersLaw.text`${foreignersLaw.article("3", "Art. 3 pkt 6, 6a і 25: визначення кваліфікацій")}`,
    foreignersLaw.text`${foreignersLaw.article("127", "Art. 127 pkt 1 lit. b і c: кваліфікації для конкретної роботи")}`,
    foreignersLaw.text`${foreignersLaw.article("138a", "Art. 138a: перелік професій для трирічного досвіду")}`,
  ],
  relatedDocuments: [
    "job-description",
    "blue-card-annex",
    "employment-contract",
    "sworn-translation",
    "apostille-legalisation",
  ],
  sources: [
    documentSources.aliens,
    {
      label: "NAWA: визнання дипломів і професійні кваліфікації",
      url: "https://nawa.gov.pl/uznawalnosc/faq-najczesciej-zadawane-pytania",
      note: "Різниця між інформацією про диплом, nostryfikacją та допуском до професії.",
    },
    {
      label: "Перелік професій, M.P. 2025 poz. 549",
      url: "https://eli.gov.pl/eli/MP/2025/549/ogl",
      note: "Професії для трирічного досвіду, зокрема programista aplikacji.",
    },
    {
      label: "Podlaski Urząd Wojewódzki: високі кваліфікації",
      url: "https://www.gov.pl/web/uw-podlaski/wysokie-kwalifikacje",
      note: "Офіційне пояснення освіти, досвіду і підтвердних матеріалів для Blue Card.",
    },
  ],
  verifiedAt: "2026-09-06",
}
export const qualificationEvidenceDocumentTopic = defineDocumentTopic(guide)
export default qualificationEvidenceDocumentTopic
