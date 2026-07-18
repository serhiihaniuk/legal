import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const foreignersLaw = createLegalLearningTextAuthor("ustawa-o-cudzoziemcach")

const moduleContent: LegalLearningModule = {
  id: "family-study-research-business",
  order: 5,
  title: "Сім’я, навчання, дослідження та бізнес",
  polish: "pobyt rodzinny, studia, naukowiec, działalność gospodarcza",
  provisionScope: foreignersLaw.text`${foreignersLaw.article("142", "art. 142")}, ${foreignersLaw.articleRange("144", "157l", { start: "art. 144" })} та ${foreignersLaw.articleRange("158", "169", { start: "art. 158" })}`,
  outcome:
    "Уміти розрізнити близькі спеціальні категорії за sponsor, його статусом, видом навчання або mobilność та реальними показниками działalność gospodarcza.",
  caseQuestion:
    "Хто або що є юридичним центром справи, який статус має sponsor чи установа і які факти відрізняють цю категорію від сусідньої?",
  placeInWork:
    "Поглиблена кваліфікація після вибору загальної мети pobytu czasowego.",
  sections: [
    {
      id: "family-sponsor",
      title: "У сімейній справі спочатку визнач sponsor",
      paragraphs: [
        foreignersLaw.text`Слово «rodzina» не називає правову підставу. ${foreignersLaw.article("158", "Art. 158")} стосується визначеного члена сім’ї obywatela polskiego. ${foreignersLaw.article("159", "Art. 159")} регулює połączenie z rodziną з cudzoziemiec, але право залежить від його конкретного status: pobyt stały, rezydent długoterminowy UE, ochrona, певні pobyty czasowe, Niebieska Karta UE, ICT, badania та інші прямо перелічені підстави. ${foreignersLaw.articleRange("160", "161", { start: "Art. 160" })} охоплюють інші сімейні ситуації й окремі випадки після тривалого pobytu, розлучення, separacja, owdowienie або смерті близької особи.`,
        foreignersLaw.text`Після status sponsor перевіряють, чи заявник є «członek rodziny» у значенні конкретної норми, коли оцінюється вік дитини, чи потрібні ubezpieczenie, dochód і miejsce zamieszkania та чи діє спеціальний виняток. Наприклад, ${foreignersLaw.article("159", "art. 159")} ust. 2 звільняє від частини вимог окрему сім’ю особи зі status uchodźcy або ochrona uzupełniająca лише за своєчасного wniosku. Це не універсальне звільнення для всіх сімейних справ.`,
      ],
      questions: [
        "Хто є sponsor і на якій точній підставі він перебуває?",
        "Чи відповідає заявник визначенню członek rodziny та часовим умовам обраної статті?",
      ],
    },
    {
      id: "study-research-business",
      title: "Розділи studia, mobilność і бізнес",
      paragraphs: [
        foreignersLaw.text`Для studia за ${foreignersLaw.article("144", "art. 144")} перевіряють вид і реальність навчання, статус jednostka prowadząca studia, оплату за платне навчання, ubezpieczenie та достатні кошти. Mobilność студента в межах UE має окремий механізм у наступних статтях і не зводиться до звичайного вступу до польської uczelnia. Для badania ${foreignersLaw.article("151", "art. 151")} вимагає статус naukowiec, належну jednostka naukowa та umowa o przyjęciu; mobilność długoterminowa naukowca за ${foreignersLaw.article("151b", "art. 151b")} додатково виходить із документа або wiza з adnotacją «naukowiec», виданих іншою державою UE.`,
        foreignersLaw.text`Для działalność gospodarcza ${foreignersLaw.article("142", "art. 142")} не задовольняється самим wpis do CEIDG або володінням spółka. Особа має довести ubezpieczenie, stabilny i regularny dochód, miejsce zamieszkania та, за потреби, згоду на stanowisko чи zawód. Підприємство повинно показати встановлений дохід або зайнятість щонайменше двох відповідних працівників протягом визначеного періоду, або реальні zasoby й działania, що дозволять виконати ці критерії в майбутньому, зокрема інвестиції, transfer technologii, innowacje чи miejsca pracy.`,
      ],
      evidence: [
        "Документ родинного зв’язку, status sponsor та докази спільного життя, якщо вони юридично релевантні.",
        "Zaświadczenie або umowa з uczelnia/jednostka, програма, оплата, finansowanie й документи mobilność.",
        "Sprawozdania, декларації, зайнятість, inwestycje, umowy та фактичні операції підприємства.",
      ],
      warning:
        "Формальний шлюб, зарахування або реєстрація spółka є доказом одного факту, а не всіх умов zezwolenia.",
    },
    {
      id: "worked-example",
      title: "Анонімізований приклад: науковиця і чоловік",
      paragraphs: [
        foreignersLaw.text`Науковиця E має dokument pobytowy іншої держави UE з adnotacją «naukowiec» та планує рік досліджень у затвердженій польській jednostka. Її власну справу перевіряють за ${foreignersLaw.article("151b", "art. 151b")}: документ іншої держави, umowa o przyjęciu, тема і строк badań, wynagrodzenie, ubezpieczenie, житло та кошти. Чоловік не отримує той самий статус автоматично. Для нього окремо визначають сімейну гілку за ${foreignersLaw.article("159", "art. 159")}, status sponsor та всі застосовні умови й винятки.`,
        foreignersLaw.text`Якщо замість badań E фактично керує власною spółka, назва договору з jednostka не вирішує cel pobytu. Треба знову встановити Fakt і перевірити ${foreignersLaw.article("142", "art. 142")}: фінансові показники чи зайнятість або конкретні ресурси й дії для майбутнього виконання критеріїв. Різні факти ведуть до різних доказів, рішень і можливих підстав odmowa.`,
      ],
      warning:
        "Приклад не дозволяє переносити статус одного члена сім’ї на іншого або замінювати перевірку реальної діяльності назвою umowa.",
    },
  ],
  exercise:
    "Розбери три анонімні справи: małżonek obywatela polskiego, student у програмі mobilność та засновник spółka. Для кожної назви точну статтю, юридично значущий статус особи або установи, умови, докази, строк і можливий мотив odmowa.",
}

export const familyStudyResearchBusinessLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:ustawa-o-cudzoziemcach:family-study-research-business",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "ustawa-o-cudzoziemcach",
        moduleId: "family-study-research-business",
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
              sourceId: "eli-ustawa-o-cudzoziemcach",
            },
            locator: "business, study, research and family categories",
          },
        ],
      },
    ],
    relationships: [
      {
        kind: "prerequisite",
        target: {
          family: "learning-module",
          reference: {
            kind: "learning-module",
            documentId: "ustawa-o-cudzoziemcach",
            moduleId: "temporary-residence-purposes",
          },
        },
      },
      {
        kind: "related",
        target: {
          family: "learning-module",
          reference: {
            kind: "learning-module",
            documentId: "ustawa-o-cudzoziemcach",
            moduleId: "application-evidence-procedure",
          },
        },
      },
    ],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-07-18",
      verifiedAt: "2026-07-18",
    },
    body: moduleContent,
  })

export default familyStudyResearchBusinessLearningModuleTopic
