import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { DocumentGuide } from "~/data/document-library/contracts"
import { createEvidenceDocumentTextAuthor } from "~/data/document-library/legal-text"
import { documentSources, foreignersLaw } from "../authoring"

const documents = createEvidenceDocumentTextAuthor()
const EZUS_URL =
  "https://www.zus.pl/pl/baza-wiedzy/o-portalu-pue-/samodzielne-tworzenie-potwierdzen-z-danymi-z-zus/dla-ubezpieczonych"

const guide: DocumentGuide = {
  id: "zus-health-registration",
  title:
    "Potwierdzenie zgłoszenia do ubezpieczenia zdrowotnego: поточний запис eZUS",
  category: "work",
  kind: "document",
  aliases: [
    "potwierdzenie aktualnego zgłoszenia do ubezpieczenia zdrowotnego",
    "поточна реєстрація медичного страхування eZUS",
  ],
  description:
    "Іменний документ з eZUS про поточну реєстрацію людини в медичному страхуванні. Він допомагає встановити, що саме бачить ZUS в обліку заявника на дату створення документа. Це конкретне підтвердження реєстрації, а не історія доходів чи довідка про борги роботодавця.",
  preparedBy:
    "Застрахована особа формує документ у своєму кабінеті eZUS. Система ZUS засвідчує його походження електронною печаткою.",
  purpose: [
    "Підтверджує поточний страховий запис конкретної особи в межах обраного змісту документа.",
  ],
  doesNotProve: [
    "Не підтверджує автоматично всі попередні періоди, зарплату, сплату внесків компанією або покриття на весь майбутній строк дозволу. Печатка ZUS підтверджує походження файла, а не виконання всіх умов перебування.",
  ],
  explanation: [
    {
      id: "current-record",
      title: "Яке питання вирішує цей документ",
      paragraphs: [
        "У матеріалах уже є трудовий договір, але органу потрібно підтвердити поточну реєстрацію заявника в ubezpieczenie zdrowotne, медичному страхуванні. Договір описує відносини з роботодавцем. Документ з eZUS показує відповідний запис у системі ZUS. Значення мають особа, вид страхування і дата створення підтвердження.",
        documents.text`Для попередніх років потрібна ${documents.document("zus-insurance-history", "іменна історія страхування")}. ${documents.document("zus-no-arrears", "Довідка про відсутність боргу платника")} описує розрахунки платника і не відповідає на питання, чи зареєстрований саме заявник.`,
      ],
    },
    {
      id: "create-and-read",
      title: "Як отримати підтвердження в eZUS",
      paragraphs: [
        'Увійдіть у власний кабінет, відкрийте "Ubezpieczony", потім "Zaświadczenia – ubezpieczenia". У виборі даних зазначте актуальну реєстрацію та медичне страхування. Перегляньте сформований зміст: підтвердження баз внесків або членів сім’ї є іншим вибором даних.',
        "Документ можна зберегти у PDF чи XML, надіслати електронною поштою або роздрукувати. Для перевірки походження збережіть отриманий електронний файл, а не лише зображення екрана.",
      ],
      example: {
        title: "Поточна реєстрація після початку роботи",
        facts: [
          "Умовний приклад. Заявник почав роботу 1 вересня. 10 вересня він сформував документ з eZUS про медичне страхування. Особу у файлі звірено з матеріалами справи; попередні роки цим запитом не охоплено.",
        ],
        sample: {
          kind: "letter",
          title: "Зміст одного підтвердження",
          note: "Вигаданий скорочений фрагмент для пояснення змісту. Назви й розташування полів не відтворюють офіційний бланк. Ідентифікатори, номер документа і печатку не наведено.",
          language: "pl",
          paragraphs: [
            "Data utworzenia: 10.09.2026 r.",
            "Zakres danych: aktualne zgłoszenie do ubezpieczenia zdrowotnego.",
            "Osoba, której dotyczy dokument, jest zgłoszona do ubezpieczenia zdrowotnego.",
          ],
        },
        reasoning: [
          "У фрагменті прямо названо медичне страхування, а особу встановлено за повним файлом. Це підтверджує поточний запис на дату створення. Дата початку роботи відома з договору, але її не можна приписати цьому фрагменту: він не показує, від якого дня діє реєстрація.",
        ],
        conclusion:
          "Поточну реєстрацію заявника підтверджено. Період до 10 вересня, попередні роки внесків і майбутній строк страхування цей фрагмент не встановлює.",
      },
    },
    {
      id: "authenticity-and-discrepancy",
      title: "Походження файла та розбіжність в обліку",
      paragraphs: [
        "У властивостях кваліфікованої електронної печатки перевіряють її сертифікат, належність ZUS та відсутність змін у документі. ZUS також дає можливість перевірити автентичність за номером документа, датою створення та ідентифікатором застрахованої особи.",
        "Якщо файл стосується іншої людини, іншого виду страхування або іншого вибору даних, він не відповідає на поставлене питання. Коли поточний запис розходиться з відомостями про роботу, причину з’ясовують у платника та ZUS. Відсутній запис не замінюють припущенням, що його обов’язково подано, і не перетворюють сам по собі на висновок про незаконність роботи.",
      ],
    },
    {
      id: "residence-condition",
      title: "Запис ZUS і страхова умова дозволу",
      paragraphs: [
        documents.text`Для оцінки ${documents.document("health-insurance", "медичного страхування у справі про перебування")} значення має підстава дозволу. Цей документ доречний, коли потрібно підтвердити саме поточний облік ZUS. Він не є універсальним додатком для кожного заявника.`,
        foreignersLaw.text`Для rezydenta UE ${foreignersLaw.article("211", "Art. 211 ust. 1 pkt 2")} вимагає медичного страхування за правилами публічного фінансування або підтвердження покриття страховиком витрат на лікування в Польщі. У прикладі працівника поточне підтвердження eZUS допомагає встановити перший варіант. Обіцянка майбутнього працевлаштування сама не доводить цієї умови; спеціальне правило ${foreignersLaw.article("114", "art. 114 ust. 4a")} для тимчасового перебування та роботи сюди не переносять.`,
        foreignersLaw.text`Для pobyt czasowy i pracę ${foreignersLaw.article("114", "Art. 114 ust. 4a")} допускає виконання страхової умови через майбутнє медичне страхування у зв’язку з роботою, яка є підставою заяви. Тому відсутність теперішнього підтвердження eZUS не означає автоматичної відмови. Умови цієї роботи та майбутнього страхування мають бути встановлені.`,
      ],
    },
  ],
  howToObtain: [
    'В eZUS відкрийте "Ubezpieczony" → "Zaświadczenia – ubezpieczenia" і сформуйте документ з даними про актуальне медичне страхування.',
    "Збережіть повний файл, звірте особу й вибраний обсяг даних. Якщо потрібного запису немає або він помилковий, зверніться до платника та ZUS для пояснення чи виправлення.",
  ],
  formAndValidity: [
    "Підтвердження описує облік на дату створення. Якщо підстава страхування змінилася, попередній файл не встановлює нового стану.",
    "Для електронного документа перевіряють печатку та цілісність файла. Саме зображення печатки у скриншоті не є такою перевіркою.",
  ],
  legalBasis: [
    "Офіційна послуга ZUS дозволяє застрахованій особі сформувати підтвердження обраних даних свого обліку.",
    foreignersLaw.text`${foreignersLaw.article("211", "Art. 211 ust. 1 pkt 2")}: медичне страхування або підтвердження покриття витрат страховиком для rezydenta UE.`,
    foreignersLaw.text`${foreignersLaw.article("114", "Art. 114 ust. 1 pkt 1 і ust. 4a")}: страхова умова для тимчасового перебування та роботи, зокрема механізм майбутнього страхування.`,
  ],
  keyChecks: [
    "Файл стосується заявника і прямо містить поточну реєстрацію в медичному страхуванні?",
    "Дата документа відповідає стану, який потрібно встановити; пізнішу зміну підстави не пропущено?",
    "Походження та цілісність підтверджено, а межі відомостей не розширено до історії доходу чи розрахунків роботодавця?",
  ],
  relatedDocuments: [
    "health-insurance",
    "zus-insurance-history",
    "zus-no-arrears",
    "employment-contract",
  ],
  sources: [
    {
      label: "ZUS: самостійне створення підтвердження для застрахованої особи",
      url: EZUS_URL,
      note: "Вибір актуального запису про страхування, приклад документа, формати збереження, електронна печатка та перевірка автентичності. Інструкцію перевірено 10.09.2026.",
    },
    documentSources.aliens,
  ],
  verifiedAt: "2026-09-10",
}

export const zusHealthRegistrationTopic: KnowledgeUnit<DocumentGuide> =
  defineKnowledgeUnit({
    id: "evidence-document:zus-health-registration",
    subject: {
      family: "evidence-document",
      reference: {
        kind: "evidence-document",
        documentId: "zus-health-registration",
      },
    },
    summary: guide.description,
    claims: [
      {
        id: "current-record-and-authenticity",
        kind: "official-guidance",
        text: "Застрахована особа може сформувати в eZUS підтвердження актуальних даних про страхування. Документ має електронну печатку ZUS та дані для перевірки автентичності.",
        basis: [
          {
            reference: { kind: "external", url: EZUS_URL },
            locator:
              "Jak utworzyć zaświadczenie; Jak wygląda zaświadczenie; Jak sprawdzić pochodzenie",
          },
        ],
      },
      {
        id: "resident-health",
        kind: "statute-text",
        text: foreignersLaw.text`${foreignersLaw.article("211", "Art. 211 ust. 1 pkt 2")} визначає страхову умову rezydenta UE: медичне страхування за правилами публічного фінансування або підтвердження покриття страховиком витрат на лікування в Польщі.`,
        basis: [
          {
            reference: {
              kind: "official-source",
              sourceId: "eli-ustawa-o-cudzoziemcach",
            },
            locator: "Art. 211 ust. 1 pkt 2",
          },
        ],
      },
      {
        id: "work-route-future-health",
        kind: "statute-text",
        text: foreignersLaw.text`${foreignersLaw.article("114", "Art. 114 ust. 4a")} передбачає виконання страхової умови через майбутнє страхування у зв’язку з роботою, що є підставою заяви.`,
        basis: [
          {
            reference: {
              kind: "official-source",
              sourceId: "eli-ustawa-o-cudzoziemcach",
            },
            locator: "Art. 114 ust. 1 pkt 1 і ust. 4a",
          },
        ],
      },
      {
        id: "bounded-reading",
        kind: "practical-inference",
        text: "Поточний страховий запис показує обрані відомості на дату документа. Його не прирівнюють до історії доходу або відсутності боргу платника.",
        basis: [
          {
            reference: { kind: "external", url: EZUS_URL },
            locator:
              "Окремий вибір aktualne zgłoszenia та wysokość podstawy wymiaru składek",
          },
        ],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-09-10",
      verifiedAt: guide.verifiedAt,
    },
    body: guide,
  })

export default zusHealthRegistrationTopic
