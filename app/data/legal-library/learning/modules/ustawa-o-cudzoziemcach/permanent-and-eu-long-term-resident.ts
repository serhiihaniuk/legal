import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const foreignersLaw = createLegalLearningTextAuthor("ustawa-o-cudzoziemcach")

const moduleContent: LegalLearningModule = {
  id: "permanent-and-eu-long-term-resident",
  order: 6,
  title: "Pobyt stały та rezydent długoterminowy UE",
  polish: "zezwolenie na pobyt stały, rezydent długoterminowy UE",
  provisionScope: foreignersLaw.text`${foreignersLaw.articleRange("195", "209", { start: "art. 195" })} та ${foreignersLaw.articleRange("211", "219i", { start: "art. 211" })}`,
  outcome:
    "Уміти спочатку знайти конкретну підставу pobyt stały або коректно порахувати п’ятирічний період DLR UE, а потім перевірити решту умов і процедурних бар’єрів.",
  caseQuestion: foreignersLaw.text`Чи є одна з підстав ${foreignersLaw.article("195", "Art. 195")}, або чи складається потрібний п’ятирічний legalny i nieprzerwany pobyt за правилами ${foreignersLaw.articleRange("211", "212", { start: "Art. 211" })}?`,
  placeInWork:
    "Оцінка довготривалого статусу після повної реконструкції pobytu, виїздів, доходу, страхування та спеціальної підстави.",
  sections: [
    {
      id: "permanent-grounds",
      title: "Pobyt stały починається з конкретної підстави",
      paragraphs: [
        foreignersLaw.text`${foreignersLaw.article("195", "Art. 195")} не винагороджує будь-який довгий pobyt. Він містить конкретні підстави: визначене дитинство щодо особи з pobyt stały/DLR UE або obywatel polski; polskie pochodzenie; шлюб з obywatel polski разом із тривалістю шлюбу й належного безперервного pobytu; статус ofiara handlu ludźmi; встановлені періоди status uchodźcy, ochrona uzupełniająca, zgoda humanitarna або tolerowany pobyt; чотири роки на спеціальному дозволі з ${foreignersLaw.article("114", "art. 114")} ust. 1a разом зі stabilny i regularny dochód; azyl; Karta Polaka; та спеціальна підстава Umowy Wystąpienia для визначених громадян UK.`,
        foreignersLaw.text`Для кожного пункту власний склад фактів. Наприклад, шлюбна підстава вимагає не лише akt małżeństwa, а щонайменше 3 роки шлюбу до wniosku й щонайменше 2 роки безперервного pobytu безпосередньо перед ним на названих підставах. Безперервність для релевантних підстав оцінюється за ${foreignersLaw.article("195", "art. 195")} ust. 4, включно з лімітами перерв і спеціальними винятками.`,
      ],
      questions: [
        foreignersLaw.text`Який один пункт ${foreignersLaw.article("195", "Art. 195")} ust. 1 відповідає фактам?`,
        "Які строки, статуси й винятки входять до складу саме цього пункту?",
      ],
      warning:
        "Попередня karta pobytu, багато років у Польщі або сам шлюб не замінюють повного складу конкретної підстави.",
    },
    {
      id: "dlr-calculation",
      title: "DLR UE: рахуй не календарні, а юридичні роки",
      paragraphs: [
        foreignersLaw.text`${foreignersLaw.article("211", "Art. 211")} вимагає щонайменше 5 років legalnego i nieprzerwanego pobytu безпосередньо перед wnioskiem, stabilne i regularne źródło dochodu, ubezpieczenie zdrowotne та підтверджене знання польської мови, за винятком małoletni до 16 років. Дохід оцінюється за спеціальним дво- або трирічним періодом залежно від ситуації.`,
        foreignersLaw.text`${foreignersLaw.article("212", "Art. 212")} змінює арифметику. Окремі періоди Blue Card, naukowiec, ochrony międzynarodowej та studenta в інших державах UE можуть враховуватися за спеціальними умовами; понад 18 місяців процедури ochrony międzynarodowej рахуються повністю, а деякі періоди studiów, szkolenie zawodowe чи процедури ochrony — лише наполовину. Ust. 2 прямо виключає, зокрема, певне делегування, спеціальну wiza ${foreignersLaw.article("60", "Art. 60")} ust. 1 pkt 23, nauka, dobrowolny wyjazd після powrót, період ${foreignersLaw.article("299", "Art. 299")} ust. 6, місії дипломатичні, ICT/mobile ICT, короткий pobyt ${foreignersLaw.article("181", "Art. 181")}, невдалу процедуру ochrony та mały ruch graniczny.`,
        foreignersLaw.text`За ${foreignersLaw.article("212", "art. 212")} ust. 3 звичайна безперервність у Польщі зберігається, якщо жодна перерва не перевищила 6 місяців, а всі разом — 10 місяців у п’ятирічному періоді. Для названого маршруту Niebieska Karta UE діють 12 і 18 місяців. Ust. 4 містить винятки для роботи за кордоном у польського pracodawca, супроводу такої особи, особливої особистої ситуації до 6 місяців та обов’язкової практики чи занять польських studiów.`,
      ],
      steps: [
        "Поділити всю хронологію на однорідні періоди за tytuł pobytowy.",
        "Для кожного періоду позначити: повністю, наполовину, спеціально в UE або не зараховується.",
        "Окремо перевірити кожен wyjazd, сукупність перерв, дохід, ubezpieczenie та документ językowy.",
      ],
    },
    {
      id: "worked-example",
      title: "Анонімізований приклад: два роки studiów і три роки pracy",
      paragraphs: [
        foreignersLaw.text`Особа F законно прожила 2 роки на zezwolenie за ${foreignersLaw.article("144", "art. 144")}, а потім 3 роки на робочому pobyt czasowy. Просте додавання дає 5 календарних років. Проте ${foreignersLaw.article("212", "art. 212")} ust. 1 pkt 3 зараховує відповідний період studiów наполовину: 2 роки дають 1 юридичний рік, а три наступні — за припущенням, що вони повністю зараховуються, ще 3. На цій спрощеній хронології бракує одного року до умови ${foreignersLaw.article("211", "art. 211")} ust. 1.`,
        foreignersLaw.text`Далі перевіряють не тільки час: усі wyjazdy, джерело доходу за належний період, ubezpieczenie, документ знання польської мови й бар’єри odmowa wszczęcia з ${foreignersLaw.article("213", "Art. 213")}. Якщо organ помилково не зарахував період або неправильно визначив його частку, у środku zaskarżenia подають календар, документи pobytowe та точний розрахунок за ${foreignersLaw.article("212", "Art. 212")}.`,
      ],
      warning:
        "Розрахунок прикладу зміниться, якщо робочий період належить до виключення, є незадокументовані перерви або застосовується спеціальний маршрут UE.",
    },
  ],
  exercise: foreignersLaw.text`Побудуй п’ятирічний календар DLR UE: для кожного місяця вкажи tytuł pobytowy, коефіцієнт зарахування, виїзди та доказ. Окремо перевір один можливий пункт ${foreignersLaw.article("195", "Art. 195")} і поясни, чому ці два маршрути не можна змішувати.`,
}

export const permanentAndEuLongTermResidentLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:ustawa-o-cudzoziemcach:permanent-and-eu-long-term-resident",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "ustawa-o-cudzoziemcach",
        moduleId: "permanent-and-eu-long-term-resident",
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
            locator: "permanent residence and EU long-term resident",
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
            moduleId: "application-evidence-procedure",
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
            moduleId: "family-study-research-business",
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

export default permanentAndEuLongTermResidentLearningModuleTopic
