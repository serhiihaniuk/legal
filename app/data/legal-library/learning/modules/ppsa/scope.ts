import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const ppsaLaw = createLegalLearningTextAuthor("ppsa")

const moduleContent: LegalLearningModule = {
  id: "scope",
  order: 1,
  title: "Коли WSA контролює administrację",
  polish: "sprawa sądowoadministracyjna; skarga",
  provisionScope: ppsaLaw.text`${ppsaLaw.articleRange("1", "3")}`,
  outcome:
    "Ви відрізняєте адміністративну проблему від предмета контролю WSA і називаєте акт, дію або бездіяльність, які треба перевірити.",
  caseQuestion: ppsaLaw.text`Що саме зробив або не зробив organ у справі про pobyt і чи належить це до предмета skargi за ${ppsaLaw.article("3")}?`,
  placeInWork:
    "Перший фільтр перед обчисленням строку: без правильної кваліфікації документа не можна обрати судовий шлях.",
  sections: [
    {
      id: "identify-subject",
      title: "Факт → предмет контролю",
      paragraphs: [
        "Почніть із факту: у вас є decyzja, postanowienie, інший акт або czynność, чи орган не діє. Поняття sprawa sądowoadministracyjna означає справу судового контролю, а не новий розгляд заяви з нуля.",
        ppsaLaw.text`${ppsaLaw.article("3", "Art. 3 § 1–2")} окреслює контроль sądów administracyjnych над діяльністю administracji publicznej та основні категорії skarg. Назва документа сама по собі не відповідає на питання про допустимість.`,
      ],
      questions: [
        "Який орган є автором дії та який конкретний результат або пропуск ви оскаржуєте?",
        ppsaLaw.text`Чи є це рішенням, postanowienie, бездіяльністю, przewlekłość або іншою категорією з ${ppsaLaw.article("3")}?`,
      ],
      steps: [
        "Зафіксуйте факт і документ із датою doręczenie.",
        ppsaLaw.text`Назвіть правове поняття предмета skargi та звірте його з ${ppsaLaw.article("3")}.`,
        "Лише потім перевіряйте спеціальну умову, шлях подання і строк.",
      ],
      evidence: [
        "decyzja або postanowienie з повним uzasadnienie",
        "підтвердження doręczenie, подана заява та листування про bezczynność",
      ],
      warning: ppsaLaw.text`${ppsaLaw.article("3")} дає рамку контролю, але не замінює правил про допустимість, строк і форму skargi.`,
    },
    {
      id: "choose-remedy",
      title: "Норма → дія → засіб захисту",
      paragraphs: [
        "Після кваліфікації прив’яжіть кожну вимогу до норми й доказу: який недолік органу видно з akt, яку дію має виконати суд і який наслідок можливий. WSA контролює законність у межах PPSA, а не обіцяє конкретний дозвіл на pobyt.",
        ppsaLaw.text`Якщо предмет не входить до ${ppsaLaw.article("3")} або інша умова skargi не виконана, процесуальна реакція може настати ще до оцінки суті. Тому remedy треба обирати після перевірки всього ланцюга.`,
      ],
      questions: [
        "Який ефект ви просите: контроль рішення, бездіяльності чи іншої дії?",
      ],
      steps: [
        ppsaLaw.text`Складіть ланцюг: факт → поняття → ${ppsaLaw.article("3")} → доказ → процесуальна дія.`,
        "Перевірте, який результат WSA юридично може надати.",
      ],
      evidence: [
        "текст прохання (żądanie) та документи, що підтверджують порушення",
      ],
      warning:
        "Судовий контроль і право на бажаний результат у справі про pobyt — різні питання.",
    },
  ],
  exercise: ppsaLaw.text`Візьміть анонімізоване pismo organu: однією фразою назвіть факт, предмет за ${ppsaLaw.article("3")}, доказ і можливий судовий remedy.`,
}

export const scopeLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:ppsa:scope",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "ppsa",
        moduleId: "scope",
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
            reference: { kind: "official-source", sourceId: "eli-ppsa" },
            locator: "module provision scope",
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

export default scopeLearningModuleTopic
