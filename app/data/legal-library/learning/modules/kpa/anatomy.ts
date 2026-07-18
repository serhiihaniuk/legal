import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { KpaGuideModule } from "~/data/legal-library/learning/kpa"

const moduleContent: KpaGuideModule = {
  id: "anatomy",
  order: 2,
  title: "Як читати статтю і норму",
  polish: "Artykuł, paragraf, punkt, litera; hipoteza i dyspozycja",
  articles: "метод читання + структура KPA",
  outcome:
    "Ви перетворюєте складне речення закону на список умов, суб’єктів, дій і наслідків.",
  layers: {
    beginner: {
      focus:
        "Art. — стаття; § — параграф усередині статті; pkt — нумерований пункт; lit. — літера; zdanie — окреме речення.",
      law: "Правова норма не завжди дорівнює одному реченню. Умова може бути в одному параграфі, виняток — у наступному, а наслідок — в іншій статті.",
      practice:
        "Підкресліть п’ять речей: хто, коли, що робить, за яких умов, з яким наслідком.",
      pitfall:
        "Не зупиняйтеся після першого речення. Слова «chyba że», «z zastrzeżeniem», «nie stosuje się» можуть змінити весь висновок.",
    },
    practical: {
      focus:
        "Перепишіть статтю як логічну формулу: JEŻELI A + B, TO C; WYJĄTEK D; TERMIN E; SKUTEK F.",
      law: "Відсилання типу «stosuje się odpowiednio» означає застосування іншого правила з необхідною адаптацією, а не механічне копіювання.",
      practice:
        "Створіть таблицю: przesłanka → факт у справі → доказ → хто має його отримати → ризик, якщо доказ слабкий.",
      pitfall:
        "Номер статті без актуальної редакції та без дати факту не доводить, що саме ця редакція застосовується.",
    },
    advanced: {
      focus:
        "Перевіряйте дефініції, винятки, przepisy przejściowe, дату wejścia w życie та зв’язок із нормою компетенційною.",
      law: "При неоднозначності не починайте з бажаного результату. Порівняйте буквальне значення, місце норми в системі та мету інституту.",
      practice:
        "Зберігайте permalink ELI і дату перевірки редакції. Для справ на межі змін закону окремо аналізуйте перехідні положення.",
      pitfall:
        "Tekst jednolity — зручна консолідація, але дата його стану може бути ранішою за дату аналізу; перевірте пізніші зміни.",
    },
  },
  method: [
    "Розбийте посилання до найменшої одиниці: art. → § → pkt → lit.",
    "Знайдіть адресата норми: organ, strona, pełnomocnik чи інший учасник.",
    "Випишіть позитивні умови, негативні умови та винятки.",
    "Знайдіть процесуальний наслідок і засіб захисту.",
  ],
  checklist: [
    "Знайдено адресата норми",
    "Виписано всі «chyba że»",
    "Перевірено актуальну редакцію",
  ],
  questions: [
    {
      prompt:
        "Чому не можна пояснювати норму лише переказом першого параграфа?",
      answer:
        "Бо інший параграф може містити виняток, додаткову умову, строк або виключення застосування.",
    },
  ],
  lesson: {
    paragraphs: [
      "Стаття — це контейнер тексту, але правова норма може складатися з кількох статей. В одному місці закон називає умову, в іншому — виняток, у третьому — строк або наслідок. Тому завдання читача не переказати речення, а відтворити повну конструкцію: адресат, ситуація, обов’язкова або дозволена дія, умови, винятки й результат.",
      "Читайте складне речення шарами. Спочатку знайдіть дієслово, що створює obowiązek, uprawnienie або zakaz. Потім обведіть сполучники: jeżeli, chyba że, o ile, z zastrzeżeniem. Відсилання відкривайте одразу, а не після завершення аналізу. Наприкінці перепишіть норму простою формулою JEŻELI → TO → WYJĄTEK → TERMIN → SKUTEK і підставте факти справи окремим кроком.",
    ],
    articles: [
      {
        reference: "art. / § / pkt / lit.",
        role: "Це адреса фрагмента. Точне посилання дозволяє іншій людині перевірити саме ту умову або виняток, на якому стоїть висновок.",
      },
      {
        reference: "odesłanie ustawowe",
        role: "Фрази на кшталт «stosuje się» або «stosuje się odpowiednio» підключають інший блок правил і можуть змінювати прочитання основної статті.",
      },
    ],
    terms: [
      {
        term: "hipoteza",
        meaning:
          "Опис ситуації, за якої норма починає діяти: хто, коли і за яких фактів.",
      },
      {
        term: "dyspozycja",
        meaning: "Те, що адресат повинен, може або не може зробити.",
      },
      {
        term: "przesłanka",
        meaning:
          "Окрема умова правового результату; кожну przesłankę треба зіставити з фактом і доказом.",
      },
    ],
    caseExample: {
      title: "Фраза «w terminie 14 dni od dnia doręczenia»",
      facts:
        "Wezwanie датоване 2 липня, вручено pełnomocnikowi 8 липня, а чотирнадцятий день припадає на суботу.",
      analysis: {
        kind: "authored-legal-text",
        plainText:
          "Адресат і момент doręczenia перевіряємо за правилами вручення, спосіб обчислення — за art. 57. Дата на письмі не запускає строк, день вручення не входить, субота змінює кінець строку.",
        parts: [
          {
            text: "Адресат і момент doręczenia перевіряємо за правилами вручення, спосіб обчислення — за ",
          },
          {
            text: "art. 57",
            target: {
              kind: "legal-provision",
              documentId: "kpa",
              provisionId: "kpa-art-57",
            },
          },
          {
            text: ". Дата на письмі не запускає строк, день вручення не входить, субота змінює кінець строку.",
          },
        ],
      },
      lesson:
        "Навіть коротка фраза вимагає відкрити кілька норм і побудувати хронологію.",
    },
    findInText: [
      "Структуру Rozdziałów і Działów KPA",
      "Усі відсилання в обраній статті",
      "Кожне «chyba że» та «nie stosuje się» поруч із правилом",
    ],
  },
}

export const kpaAnatomyLearningModuleTopic: KnowledgeUnit<KpaGuideModule> =
  defineKnowledgeUnit({
    id: "learning-module:kpa:anatomy",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "kpa",
        moduleId: "anatomy",
      },
    },
    summary: moduleContent.outcome,
    claims: [
      {
        id: "module-legal-basis",
        kind: "statute-text",
        text: moduleContent.articles,
        basis: [
          {
            reference: { kind: "official-source", sourceId: "eli-kpa" },
            locator: "module articles",
          },
        ],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-07-14",
      verifiedAt: "2026-07-14",
    },
    body: moduleContent,
  })

export default kpaAnatomyLearningModuleTopic
