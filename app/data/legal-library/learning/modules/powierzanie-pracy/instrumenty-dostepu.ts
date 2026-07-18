import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const workLaw = createLegalLearningTextAuthor("powierzanie-pracy")

const moduleContent: LegalLearningModule = {
  id: "instrumenty-dostepu",
  order: 3,
  title: "Дозвіл, декларація та звільнення від обов’язку",
  polish:
    "zezwolenie na pracę; oświadczenie o powierzeniu pracy; zwolnienie z obowiązku",
  provisionScope: workLaw.text`${workLaw.article("3")}, ${workLaw.article("5a")}, ${workLaw.article("6")}, ${workLaw.articleRange("13", "25", { start: "13" })}, ${workLaw.articleRange("45", "60", { start: "45" })}, ${workLaw.articleRange("62", "71", { start: "62" })}`,
  outcome:
    "Допомагає обрати правильну підставу доступу до роботи й перевірити її умови, не підміняючи один правовий механізм іншим.",
  caseQuestion:
    "Який режим відповідає громадянству, підставі перебування, моделі та фактичному місцю роботи?",
  placeInWork:
    "Центральний етап: після фактів і ролей, але до оцінки документів та строків.",
  sections: [
    {
      id: "choose-instrument",
      title: "Обрати правильний інструмент",
      paragraphs: [
        workLaw.text`${workLaw.article("6")} пов’язує вид дозволу на роботу («zezwolenie na pracę») з реальною моделлю: роботою за договором із польським суб’єктом, тимчасовою роботою через агентство, виконанням визначених корпоративних функцій, відрядженням працівника іноземним суб’єктом або сезонною роботою. Декларація про доручення роботи («oświadczenie o powierzeniu pracy») має вужчу сферу: громадянство повинно належати до чинного переліку, а робота — відповідати умовам частини 2 цієї статті.`,
        "Спочатку з’ясовують, хто укладає договір, де і для кого виконується робота та хто нею керує. Лише після цього обирають правовий механізм. Бажання роботодавця скористатися простішим документом або сама назва посади не змінюють фактичної моделі.",
      ],
      questions: [
        "Хто доручає роботу і де вона фактично виконується?",
        "Чи це робота за договором із польським суб’єктом, сезонна робота, відрядження або тимчасова робота через агентство?",
      ],
      steps: [
        workLaw.text`Встановити модель за ${workLaw.article("6")}.`,
        "Для декларації перевірити громадянство та чинний перелік держав.",
        "Зіставити обраний інструмент із підставою перебування.",
      ],
      evidence: [
        "Документ про громадянство і підставу перебування",
        "Договір із суб’єктом, який доручає роботу",
        "Опис роботи та місця її виконання",
      ],
      warning:
        "Декларація («oświadczenie») не є універсальною спрощеною версією дозволу. Вона діє лише для визначеного громадянства, суб’єкта та умов роботи, а законність перебування перевіряють окремо.",
    },
    {
      id: "exemptions",
      title: "Перевірити точну підставу звільнення",
      paragraphs: [
        workLaw.text`${workLaw.article("3")} розрізняє вільний доступ до ринку праці («swobodny dostęp do rynku pracy») та інші випадки роботи без дозволу або декларації. Підставою можуть бути, зокрема, «Karta Polaka», визначений освітній статус, міжнародний договір або чинний виконавчий припис. Кожна підстава має власні умови.`,
        workLaw.text`${workLaw.article("1")} діє інакше: частина 4 називає ситуації, до яких цей закон узагалі не застосовується. Натомість ${workLaw.article("5a")} зобов’язує польського суб’єкта повідомити про початок роботи особи, яка користується тимчасовим захистом. Це повідомлення («powiadomienie») не є декларацією і не є дозвільним рішенням органу.`,
        "Кожен виняток треба прив'язати до конкретного пункту, документа і дати. Одна ознака — наприклад, навчання в Польщі або громадянство України — без перевірки решти умов не завершує аналіз.",
      ],
      questions: [
        "Який точний пункт надає вільний доступ або звільняє від обов’язку мати дозвіл чи декларацію?",
        "Чи підтверджені всі факти, від яких залежить цей виняток?",
      ],
      steps: [
        "Знайти точну правову підставу звільнення.",
        "Перевірити документи та їхню чинність.",
        "Зафіксувати межі винятку для конкретної роботи.",
      ],
      evidence: [
        "Документ, що підтверджує відповідний статус",
        "Підстава перебування",
        "Підтвердження громадянства або освіти",
      ],
      warning:
        "Посилання на загальний статус без перевірки конкретного пункту не доводить звільнення від документа роботи.",
    },
  ],
  exercise:
    "Для трьох анонімних профілів визнач: вільний доступ, дозвіл, декларація чи потреба додатково перевірити виняток. Для кожного висновку назви норму, відомий факт і те, чого ще бракує.",
}

export const instrumentyDostepuLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:powierzanie-pracy:instrumenty-dostepu",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "powierzanie-pracy",
        moduleId: "instrumenty-dostepu",
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
              sourceId: "eli-powierzanie-pracy",
            },
            locator: "module provision scope",
          },
        ],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-07-18",
      verifiedAt: "2026-07-18",
    },
    body: moduleContent,
  })

export default instrumentyDostepuLearningModuleTopic
