import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import type { KpaGuideModule } from "~/data/legal-library/learning/kpa"

const kpaLaw = createLegalTextAuthor("kpa")
const ppsaLaw = createLegalTextAuthor("ppsa")

const moduleContent: KpaGuideModule = {
  id: "court",
  order: 15,
  title: "Наступний рівень: WSA",
  polish: "Skarga do wojewódzkiego sądu administracyjnego",
  articles: kpaLaw.text`${ppsaLaw.article("3", "art. 3")}, ${ppsaLaw.articleRange("52", "54", { start: "52", end: "54" })} p.p.s.a.`,
  outcome:
    "Ви розумієте, коли справа переходить з адміністративної інстанції до контролю судом.",
  layers: {
    beginner: {
      focus:
        "WSA контролює законність діяльності адміністрації. Це не третя адміністративна інстанція, яка просто веде справу замість organu.",
      law: "P.p.s.a. визначає предмет судового контролю; за загальним правилом перед skargą треба вичерпати доступні środki zaskarżenia.",
      practice:
        "Після decyzji другої інстанції окремо відкрийте p.p.s.a. і pouczenie; не рахуйте судовий строк за звичкою з KPA.",
      pitfall:
        "Odwołanie і skarga do WSA — різні засоби, різні адресати та різні ролі.",
    },
    practical: {
      focus:
        "За загальним правилом skargę на decyzję вносять протягом 30 днів від doręczenia розstrzygnięcia через organ, дії якого оскаржуються.",
      law: kpaLaw.text`Цей маршрут випливає з ${ppsaLaw.article("53", "art. 53 § 1")} і ${ppsaLaw.article("54", "art. 54 § 1")} p.p.s.a.; допустимість треба перевірити для конкретного акта.`,
      practice:
        "Зберіть: обидві decyzje, odwołanie, докази doręczeń, повний індекс актів і список процесуальних порушень із впливом.",
      pitfall:
        "Подання skargi не завжди автоматично зупиняє виконання; питання wstrzymania має окремі правила.",
    },
    advanced: {
      focus:
        "Skarga на decyzję, skarga na bezczynność/przewlekłość і sprzeciw від decyzji kasacyjnej — різні судові доріжки.",
      law: kpaLaw.text`${ppsaLaw.article("3", "Art. 3")} p.p.s.a. окреслює форми контролю; ${ppsaLaw.articleRange("52", "54", { start: "art. 52", end: "54" })} — передумови, строки та маршрут. Спеціальні правила можуть змінювати модель.`,
      practice:
        "Сформулюйте, яку норму materialną або procesową порушено, як саме і чому це могло вплинути на wynik sprawy.",
      pitfall:
        "Судова скарга не повинна бути копією odwołania без адаптації до контролю законності остаточного акта.",
    },
  },
  method: [
    "Встановіть предмет skargi",
    "Перевірте вичерпання засобів",
    "Порахуйте судовий строк",
    "Подайте через належний organ і сформулюйте порушення",
  ],
  checklist: [
    "Адміністративний шлях перевірено",
    "Строк WSA окремо пораховано",
    "Є доказ doręczenia",
  ],
  questions: [
    {
      prompt: "Чи WSA є просто третьою інстанцією після organu II instancji?",
      answer:
        "Ні. WSA здійснює судовий контроль законності у межах p.p.s.a.; його роль і можливі розstrzygnięcia відрізняються від адміністративного odwołania.",
    },
  ],
}

export const kpaCourtLearningModuleTopic: KnowledgeUnit<KpaGuideModule> =
  defineKnowledgeUnit({
    id: "learning-module:kpa:court",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "kpa",
        moduleId: "court",
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

export default kpaCourtLearningModuleTopic
