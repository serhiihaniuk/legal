import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import type { KpaGuideModule } from "~/data/legal-library/learning/kpa"

const kpaLaw = createLegalTextAuthor("kpa")

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
      reviewStatus: "draft",
      language: "uk",
      legalStateDate: "2026-07-14",
      verifiedAt: "2026-07-14",
    },
    body: moduleContent,
  })

export default kpaAnatomyLearningModuleTopic
