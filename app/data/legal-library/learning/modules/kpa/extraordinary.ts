import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import type { KpaGuideModule } from "~/data/legal-library/learning/kpa"

const kpaLaw = createLegalTextAuthor("kpa")

const moduleContent: KpaGuideModule = {
  id: "extraordinary",
  order: 14,
  title: "Надзвичайні режими",
  polish: "Wznowienie, nieważność, uchylenie lub zmiana decyzji",
  articles: kpaLaw.text`${kpaLaw.articleRange("145", "163", { start: "art. 145", end: "163" })} KPA`,
  outcome:
    "Ви не використовуєте tryb nadzwyczajny як запізніле odwołanie, а підбираєте його до конкретної вади.",
  layers: {
    beginner: {
      focus:
        "Після ostatecznej decyzji існують виняткові режими, але кожен має закриті або спеціальні підстави.",
      law: kpaLaw.text`Wznowienie з ${kpaLaw.article("145", "art. 145")} стосується визначених дефектів провадження; nieważność з ${kpaLaw.article("156", "art. 156")} — найтяжчих вад самої decyzji.`,
      practice:
        "Спочатку назвіть дефект одним реченням, потім шукайте режим. Не починайте з бажання «відкрити справу ще раз».",
      pitfall:
        "Незгода з оцінкою доказів сама по собі не стає rażącym naruszeniem prawa.",
    },
    practical: {
      focus: kpaLaw.text`Для wznowienia перевірте конкретний пункт ${kpaLaw.article("145", "art. 145")}, коли сторона дізналась про підставу, місячний строк ${kpaLaw.article("148", "art. 148")} і właściwy organ.`,
      law: kpaLaw.text`Нові докази за ${kpaLaw.article("145", "art. 145 § 1")} pkt 5 мають існувати в день decyzji та бути тоді невідомими organowi; це не просто документ, створений пізніше.`,
      practice:
        "Додайте до заяви таблицю: підстава → факт → дата знання → доказ → вплив на рішення.",
      pitfall: kpaLaw.text`Не змішуйте ${kpaLaw.article("154", "art. 154")}/155, які мають власні умови зміни decyzji ostatecznej, з контролем її первісної законності.`,
    },
    advanced: {
      focus:
        "Строки, незворотні наслідки та давність можуть обмежувати результат навіть за наявності вади.",
      law: kpaLaw.text`${kpaLaw.article("156", "Art. 156")} містить перелік підстав nieważności, а ${kpaLaw.article("156", "§ 2")} обмежує її встановлення після 10 років або при незворотних правових наслідках; ${kpaLaw.article("158", "art. 158 § 3")} містить 30-річну межу для wszczęcia.`,
      practice:
        "Перед вибором режиму перевірте, чи існує спеціальний механізм у ustawie o cudzoziemcach і який результат реально можливий сьогодні.",
      pitfall:
        "Tryb nadzwyczajny не повинен обходити пропущений строк odwołania, якщо заявлена вада не відповідає його законним підставам.",
    },
  },
  method: [
    "Назвіть точну ваду",
    "Зіставте з законною підставою",
    "Перевірте строк і organ",
    "Визначте можливий, а не бажаний результат",
  ],
  checklist: [
    "Є конкретний пункт підстави",
    "Строк підтверджено",
    "Режим не підміняє odwołania",
  ],
  questions: [
    {
      prompt: kpaLaw.text`Документ виник після ostatecznej decyzji. Чи це автоматично «новий доказ» для ${kpaLaw.article("145", "art. 145 § 1")} pkt 5?`,
      answer:
        "Ні. Ця підстава вимагає істотного факту або доказу, який існував у день рішення і був невідомий organowi.",
    },
  ],
}

export const kpaExtraordinaryLearningModuleTopic: KnowledgeUnit<KpaGuideModule> =
  defineKnowledgeUnit({
    id: "learning-module:kpa:extraordinary",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "kpa",
        moduleId: "extraordinary",
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

export default kpaExtraordinaryLearningModuleTopic
