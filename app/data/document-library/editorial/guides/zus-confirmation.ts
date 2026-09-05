import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { DocumentGuide } from "~/data/document-library/contracts"
import { documentSources, foreignersLaw } from "../authoring"

const guide: DocumentGuide = {
  id: "zus-confirmation",
  title: "Документи ZUS про страхування та внески",
  category: "work",
  kind: "evidence-set",
  aliases: [
    "Zaświadczenie / potwierdzenie danych z ZUS",
    "підтвердження zus",
    "страхування/zus за потреби",
    "доказ виплат і zus",
  ],
  description:
    "ZUS, Zakład Ubezpieczeń Społecznych, веде облік страхування та внесків. Документи з цією назвою мають різну роль: одні повідомляють про реєстрацію, інші містять місячний звіт або засвідчують відомості з обліку. Від цього залежить, який факт вони можуть підтвердити.",
  preparedBy:
    "Реєстраційні документи та звіти подає płatnik składek, платник внесків. Застрахована особа може сформувати електронне підтвердження даних зі свого профілю ZUS.",
  howToObtain: [
    "Увійти до електронного профілю ZUS і вибрати підтвердження, яке відповідає потрібному факту.",
    "Зберегти повний електронний файл із даними перевірки, а не лише скриншот екрана.",
    "За відсутніх або помилкових даних уточнити їх у ZUS чи платника внесків. Зберегти отриману відповідь або підтвердження запиту.",
  ],
  formAndValidity: [
    "Самостійно сформоване підтвердження має кваліфіковану електронну печатку ZUS. Її перевірка стосується походження та цілісності файла.",
    "Документ показує стан даних на момент формування; для триваючої умови орган може вимагати актуальніший період.",
  ],
  purpose: [
    "Підтверджує конкретні відомості, які ZUS має щодо страхування або обліку особи.",
    "Допомагає зіставити період роботи, zgłoszenie та інші докази виконання заявлених умов.",
  ],
  doesNotProve: [
    "Не замінює umowy, доказів фактичної виплати винагороди або права перебування.",
    "Сам факт наявності профілю чи одного запису не доводить безперервність страхування за весь потрібний період.",
  ],
  explanation: [
    {
      id: "different-zus-documents",
      title: "ZUA, ZZA, RCA і підтвердження з профілю",
      paragraphs: [
        "ZUS ZUA є формою zgłoszenia do ubezpieczeń, повідомлення про реєстрацію у страхуванні. ZUS ZZA використовують, коли реєстрація стосується лише медичного страхування. Це документи, які надсилає платник внесків; збережена незаповнена форма або чернетка не встановлює, що дані прийнято в облік.",
        "ZUS RCA є іменним місячним звітом про належні внески та виплачені виплати соціального страхування. Він має свій звітний період. Його не слід називати банківським доказом виплати зарплати або переносити дані одного місяця на весь час роботи.",
        "Підтвердження з профілю eZUS відображає вибрані відомості з обліку. Зокрема, можна обрати поточну реєстрацію чи дані про базу нарахування внесків. Назва файла не показує, які саме відомості включив користувач: це видно з його змісту.",
      ],
      example: {
        title: "Поточна реєстрація не описує весь минулий рік",
        facts: [
          "Умовний приклад. Потрібно з’ясувати страховий облік за 2025 рік. Людина сформувала в серпні 2026 року документ лише про поточну реєстрацію. Історичний період у вибраних даних відсутній.",
        ],
        sample: {
          kind: "letter",
          title: "Фрагмент змісту підтвердження",
          note: "Вигаданий стислий запис для пояснення обсягу даних, не копія документа ZUS. Номер, ідентифікатор особи та печатку не відтворено.",
          language: "pl",
          paragraphs: [
            "Data utworzenia: 05.08.2026 r.",
            "Zakres danych: aktualne zgłoszenia do ubezpieczenia zdrowotnego.",
            "Informacja: osoba jest aktualnie zgłoszona do ubezpieczenia zdrowotnego.",
          ],
        },
        reasoning: [
          "Документ відповідає на питання про поточні дані, а не про кожний місяць 2025 року. Працівник відокремив обсяг підтвердження від його свіжої дати та запросив відомості за потрібний історичний період.",
        ],
        conclusion:
          "Свіжий документ збережено як підтвердження поточного запису. Висновок про безперервність за минулий рік із нього не зроблено.",
      },
    },
    {
      id: "origin-and-scope",
      title: "Печатка підтверджує походження, а зміст визначає межі",
      paragraphs: [
        "Кваліфікована електронна печатка дозволяє перевірити, що файл сформовано в системі ZUS і після цього не змінено. Вона не додає до документа відомостей, яких у ньому немає. Справжнє підтвердження лише поточної реєстрації все одно залишається підтвердженням лише поточного запису.",
        foreignersLaw.text`У справі про pobyt czasowy i pracę обсяг потрібних матеріалів пов’язаний зі страховою умовою ${foreignersLaw.article("114", "Art. 114 ust. 1 pkt 1 і ust. 4a")}. Якщо страхування виникне з роботи, яка є підставою заяви, аналіз відрізняється від підтвердження вже наявного страхування. Саме тому один файл ZUS не є універсальним обов’язковим додатком у кожній справі.`,
      ],
    },
  ],
  legalBasis: [
    foreignersLaw.text`${foreignersLaw.article("114", "Art. 114 ust. 1 pkt 1 і ust. 4a ustawy o cudzoziemcach")}: страхова умова в робочій справі.`,
    "Спосіб отримання підтвердження визначається електронною послугою ZUS.",
  ],
  keyChecks: [
    "Який саме факт і період підтверджує документ.",
    "Особа, płatnik, код zgłoszenia, дати та відсутність розбіжностей з umową і фактичною роботою.",
    "Можливість перевірити походження електронного файла.",
  ],
  relatedDocuments: [
    "health-insurance",
    "employment-contract",
    "employment-annex-1",
    "income-evidence",
  ],
  sources: [
    documentSources.zus,
    documentSources.aliens,
    {
      label: "ZUS: реєстрація застрахованої особи",
      url: "https://www.zus.pl/en/firmy/zgloszenie-platnika/firmy/zgloszenie-ubezpieczonego/czlonka-rodziny-ubezpieczonego",
      note: "Роль платника внесків та різниця між ZUA і ZZA.",
    },
    {
      label: "ZUS RCA: інструкція до місячного звіту",
      url: "https://www.zus.pl/documents/10182/167567/ZUS_RCA.pdf/7e556412-65dd-41a9-9680-ed15adf5c5fc",
      note: "Поля звіту, період та відомості про внески.",
    },
  ],
  verifiedAt: "2026-09-05",
}

export const zusConfirmationTopic: KnowledgeUnit<DocumentGuide> =
  defineKnowledgeUnit({
    id: "evidence-document:zus-confirmation",
    subject: {
      family: "evidence-document",
      reference: { kind: "evidence-document", documentId: "zus-confirmation" },
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
              sourceId: "eli-ustawa-o-cudzoziemcach",
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

export default zusConfirmationTopic
