import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { createLegalLearningTextAuthor } from "~/data/legal-library/learning/legal-text"
import type { LegalLearningModule } from "~/data/legal-library/learning/types"

const foreignersLaw = createLegalLearningTextAuthor("ustawa-o-cudzoziemcach")

const moduleContent: LegalLearningModule = {
  id: "temporary-residence-purposes",
  order: 2,
  title: "Визнач мету pobyt czasowy",
  polish: "zezwolenie na pobyt czasowy, deklarowany cel pobytu",
  provisionScope: foreignersLaw.text`${foreignersLaw.articleRange("98", "109", { start: "art. 98" })} та ${foreignersLaw.articleRange("114", "189", { start: "art. 114" })}`,
  outcome:
    "Уміти перейти від фактичної мети перебування до правильної категорії pobyt czasowy, її умов, доказів і наслідків зміни обставин.",
  caseQuestion:
    "Яка конкретна обставина потребує перебування понад 3 місяці, яка стаття її регулює і чи доведено всі умови саме цієї категорії?",
  placeInWork:
    "Кваліфікація справи після встановлення поточної підстави pobytu й до збирання пакета доказів.",
  sections: [
    {
      id: "category-map",
      title: "Карта категорій, а не одна заява",
      paragraphs: [
        foreignersLaw.text`${foreignersLaw.article("98", "Art. 98")} дає загальний механізм: zezwolenie надається, а для категорій з ${foreignersLaw.article("160", "art. 160")}, ${foreignersLaw.article("181", "art. 181")} і ${foreignersLaw.article("187", "art. 187")} може бути надане, коли виконано вимоги заявленої мети, а обставини обґрунтовують pobyt понад 3 місяці. Далі закон розгалужується. Praca охоплює, зокрема, pobyt i praca (${foreignersLaw.article("114", "art. 114")}), Niebieska Karta UE (${foreignersLaw.article("127", "art. 127")}), ICT (${foreignersLaw.article("139a", "art. 139a")}) і mobile ICT (${foreignersLaw.article("139o", "art. 139o")}). Działalność gospodarcza має власні критерії в ${foreignersLaw.article("142", "art. 142")}.`,
        foreignersLaw.text`Освітньо-наукові маршрути теж різні: studia (${foreignersLaw.article("144", "art. 144")}), badania naukowe (${foreignersLaw.article("151", "art. 151")}), mobilność długoterminowa naukowca (${foreignersLaw.article("151b", "art. 151b")}), stażysta (${foreignersLaw.article("157a", "art. 157a")}) і wolontariusz (${foreignersLaw.article("157g", "art. 157g")}). Сімейні маршрути залежать від того, ким є sponsor і який має статус: członek rodziny obywatela polskiego (${foreignersLaw.article("158", "art. 158")}), połączenie z rodziną (${foreignersLaw.article("159", "art. 159")}) та інші ситуації з ${foreignersLaw.articleRange("160", "161", { start: "art. 160" })}.`,
        foreignersLaw.text`Окремими гілками є ofiara handlu ludźmi (${foreignersLaw.article("176", "art. 176")}), короткотривалі необхідні обставини (${foreignersLaw.article("181", "art. 181")}), praca sezonowa (${foreignersLaw.article("185a", "art. 185a")}) та inne okoliczności з ${foreignersLaw.articleRange("186", "187", { start: "art. 186" })}. Це карта для вибору норми, а не твердження, що один набір фактів автоматично відповідає будь-якій сусідній категорії.`,
      ],
      questions: [
        "Який факт є головною причиною pobytu понад 3 місяці?",
        "Чи передбачає обрана норма обов’язкове «udziela się» або дискреційне «można udzielić»?",
      ],
    },
    {
      id: "qualification-mechanism",
      title: "Від факту до наслідку",
      paragraphs: [
        "Fakt формулюють без юридичної назви: «працює за конкретним договором», «навчається на денній програмі», «живе з чоловіком, який має визначений статус». Pojęcie prawne з’являється після цього: praca, studia, połączenie z rodziną. Далі читають Przepis і всі його warunki, до кожної умови добирають Dowód, визначають Czynność і termin, а наприкінці фіксують Skutek та можливий Środek zaskarżenia.",
        foreignersLaw.text`Загальні підстави odmowa з ${foreignersLaw.article("100", "art. 100")} не замінюють спеціальних умов категорії, а спеціальні норми можуть додавати власні відмови, cofnięcie чи obowiązki informacyjne. Зміна фактичної мети після рішення може вести до cofnięcie за ${foreignersLaw.article("101", "art. 101")} або до іншого спеціального наслідку. Тому «чинна karta» не закриває аналіз, якщо головна обставина вже припинилася.`,
      ],
      steps: [
        "Сформулювати одну головну фактичну мету й окремо записати другорядні обставини.",
        "Знайти спеціальну статтю та виписати кожну кумулятивну умову.",
        "Прив’язати доказ до умови, перевірити строки й передбачити наслідок зміни мети.",
      ],
      warning:
        "Назва бланка, порада pracodawca або один договір не визначають категорію без перевірки реальної мети й повного складу умов.",
    },
    {
      id: "worked-example",
      title: "Анонімізований приклад: контракт і навчання",
      paragraphs: [
        foreignersLaw.text`Особа B навчається заочно й одночасно має річний контракт на повний робочий час. Fakt навчання підтверджує zaświadczenie uczelni, але фактична причина залишатися понад 3 місяці, за її поясненням і бюджетом, — робота. Кваліфікацію починають з ${foreignersLaw.article("114", "art. 114")}, а ${foreignersLaw.article("144", "art. 144")} перевіряють як окрему альтернативу лише якщо вид studiów і решта умов справді відповідають цій нормі. Не можна скласти половину умов двох статей в одну «змішану» підставу.`,
        "До робочої гілки додають ubezpieczenie, договір, wynagrodzenie та дані pracodawca, а також окремо перевіряють законність доступу до цієї роботи. Якщо organ відмовляє через невиконану спеціальну умову, відповідь має спростовувати саме цей мотив доказом, а не повторювати загальну фразу про бажання залишитися в Польщі.",
      ],
      warning:
        "Приклад не вирішує справу без повного договору, виду навчання, історії pobytu та актуального права на pracę.",
    },
  ],
  exercise:
    "Для чотирьох анонімних фактів обери окремі гілки: praca, rodzina, studia/badania та działalność gospodarcza. Для кожної запиши спеціальну статтю, три ключові умови, докази, строк дії й наслідок припинення головної обставини.",
}

export const temporaryResidencePurposesLearningModuleTopic: KnowledgeUnit<LegalLearningModule> =
  defineKnowledgeUnit({
    id: "learning-module:ustawa-o-cudzoziemcach:temporary-residence-purposes",
    subject: {
      family: "learning-module",
      reference: {
        kind: "learning-module",
        documentId: "ustawa-o-cudzoziemcach",
        moduleId: "temporary-residence-purposes",
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
            locator: "module provision scope",
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
            moduleId: "entry-and-current-basis",
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

export default temporaryResidencePurposesLearningModuleTopic
