import type { CaseGuideDocument } from "../../types"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import {
  deadlineObstacleEvidence,
  proceduralOrderEvidence,
  administrativeAppealEvidence,
  proceduralComplaintEvidence,
  judicialComplaintEvidence,
  courtJudgmentEvidence,
} from "../../shared-document-requirements"
import { document } from "../shared/document-reference"
import { temporaryResidenceDocuments as common } from "../shared/temporary-residence-documents"

const law = createLegalTextAuthor("ustawa-o-cudzoziemcach")
const kpa = createLegalTextAuthor("kpa")

export const familyDocuments = {
  ...common,
  passport: {
    ...common.passport,
    item: document("passport", "Дійсний паспорт заявниці"),
  },
  visa: {
    item: document(
      "visa",
      "Національна віза заявниці з перебуванням до 30.09.2026"
    ),
    level: "control",
    status: "власний нинішній статус дружини",
    owner: "Заявниця; разом із паспортом та датами поїздок",
    proves:
      "Її дозволений період перебування та можливість подати заяву. Рішення чоловіка не замінює власної візи.",
    law: law.text`${law.article("99")}, ${law.article("105")}; ${law.article("165")}.`,
  },
  husbandDecision: {
    item: document(
      "administrative-decision",
      "Рішення чоловіка про польський pobyt stały"
    ),
    level: "required",
    status: "статус члена сім’ї в Польщі",
    owner: "Чоловік надає повне рішення щодо себе",
    proves:
      "Надання постійного дозволу саме чоловікові. Дата чинності карти не підміняє виду дозволу в рішенні.",
    law: law.text`${law.article("159")} ust. 1 pkt 1 lit. a.`,
  },
  husbandCard: {
    item: document("residence-card", "Чинна karta pobytu чоловіка"),
    level: "required",
    status: "разом із його рішенням",
    owner: "Чоловік; дані звіряють із рішенням",
    proves:
      "Документує статус чоловіка та дозволяє звірити дані. Не надає дружині перебування і не доводить усіх обставин шлюбу.",
    law: law.text`${law.article("242")}, ${law.article("244")}; ${law.article("159")}.`,
  },
  marriage: {
    item: document("civil-status-record", "Odpis aktu małżeństwa"),
    level: "required",
    status: "для подружжя з прикладу",
    owner: "Подружжя отримує документ про шлюб; дані зіставляють із паспортами",
    proves:
      "Зареєстрований шлюб між цими особами. У прикладі шлюб укладено в Польщі; польський odpis не потребує перекладу з іноземної мови",
    law: law.text`${law.article("159")} ust. 3 pkt 1. Для іншого сімейного зв'язку потрібний відповідний акт і, за потреби, підтвердження батьківських прав.`,
  },
  authentication: {
    item: document(
      "apostille-legalisation",
      "Apostille або legalizacja іноземного акта"
    ),
    level: "conditional",
    status: "коли потрібне засвідчення іноземного документа",
    owner:
      "Заявник; спосіб визначають за державою, видом документа та застосовною угодою",
    proves:
      "Справжність підпису, печатки або повноважень у межах відповідного засвідчення. Не підтверджує реальності сімейного життя",
    law: "Міжнародні угоди й правила визнання конкретного документа. Польський акт із цього прикладу такого засвідчення для польського провадження не потребує.",
  },
  husbandContract: {
    item: document("employment-contract", "Чинна umowa o pracę чоловіка"),
    level: "required",
    status: "обране джерело утримання",
    owner: "Чоловік і його роботодавець; підписаний чинний договір",
    proves:
      "Правову підставу праці та погоджені умови винагороди. Це договір чоловіка, заявниця під час очікування не працює.",
    law: law.text`${law.article("159")} ust. 1 pkt 2 lit. b; ${law.article("163")}.`,
  },
  husbandIncome: {
    item: document(
      "employment-income-certificate",
      "Довідка роботодавця про зайнятість і дохід чоловіка"
    ),
    level: "required",
    status: "чинна робота та заробіток за 05–07.2026",
    owner: "Роботодавець чоловіка; за кадровими й розрахунковими даними",
    proves:
      "Джерело та продовження працевлаштування на дату заяви, суми за травень–липень. Ця довідка не є підтвердженням тимчасового місця роботи.",
    law: law.text`${law.article("163")}; ${law.article("140")} ust. 2.`,
  },
  husbandPayroll: {
    item: document(
      "payroll-statement",
      "Розрахункові листки чоловіка за травень–липень 2026 року"
    ),
    level: "required",
    status: "три місяці в цьому вигаданому прикладі",
    owner: "Роботодавець; нарахування й утримання за кожний місяць",
    proves:
      "По 6 200 zł після належних відрахувань за кожний із трьох місяців. Це розрахунок винагороди, а не сама банківська виплата. Три місяці не є універсальним законним строком доказування.",
    law: law.text`${law.article("159")} ust. 1 pkt 2 lit. b; ${law.article("163")}.`,
  },
  husbandPayments: {
    item: document(
      "bank-statement",
      "Виписка чоловіка з трьома виплатами по 6 200 zł за 05–07.2026"
    ),
    level: "required",
    status: "виплати вже відбулися до подання",
    owner:
      "Чоловік отримує у своєму банку; видно платника, призначення, дати та суми операцій",
    proves:
      "Три фактичні надходження, які зіставлено з розрахунковими листками. Виплата за місяць і дата операції можуть не збігатися; залишок на одну дату не доводить регулярність.",
    law: law.text`${law.article("163")}; ${law.article("140")} ust. 2.`,
  },
  insurance: {
    item: document(
      "private-health-insurance-policy",
      "Оплачений приватний поліс заявниці з покриттям лікування в Польщі"
    ),
    level: "required",
    status: "чинний при поданні й відповіді",
    owner:
      "Страховик видає поліс та умови; у виданому записі підтверджено оплату",
    proves:
      "Покриття лікування саме заявниці, його територію, строк та обмеження. У прикладі воно чинне 17.08 і 31.08.2026; страхування чоловіка цього не підміняє.",
    law: law.text`${law.article("159")} ust. 1 pkt 2 lit. a і ust. 2–2b.`,
  },
  housing: {
    item: document(
      "residential-lease",
      "Підписаний договір оренди сімейного житла у Вроцлаві"
    ),
    level: "required",
    status: "житло подружжя збережене",
    owner: "Подружжя та орендодавець; чинний підписаний договір",
    proves:
      "Право користуватися сімейним житлом, у тому числі заявниці. Сам договір не підтверджує оплату кожного місяця або фактичні ночівлі чоловіка біля роботи.",
    law: law.text`${law.article("159")} ust. 1 pkt 3; ${law.article("169")}.`,
  },
  rentPayments: {
    item: document(
      "bank-statement",
      "Підтвердження виконаних платежів за житло у Вроцлаві за липень і серпень"
    ),
    level: "required",
    status: "нові докази у відповіді про адреси",
    owner: "Подружжя; банківські операції з призначенням за сімейним договором",
    proves:
      "Фактичні платежі за збережене сімейне житло у вказані місяці. Це не виплати доходу чоловіку і не новий договір оренди.",
    law: law.text`${law.article("169")}; ${kpa.article("80", "art. 80 KPA")}.`,
  },
  workLocation: {
    item: document(
      "work-location-confirmation",
      "Підтвердження роботодавця від 28.08.2026 про тимчасове місце роботи чоловіка"
    ),
    level: "required",
    status: "новий документ для відповіді на wezwanie",
    owner:
      "Роботодавець чоловіка; фактичний початок і плановий кінець за його документами",
    proves:
      "Роботу в іншому польському місті з 01.07.2026 та заплановане завершення 30.09.2026. Роботодавець не засвідчує цим реальність шлюбу або збереження сімейного житла.",
    law: law.text`${law.article("169")}; ${kpa.article("75", "art. 75 KPA")} і ${kpa.article("80", "art. 80 KPA")}.`,
  },
  fee: {
    ...common.fee,
    item: document("stamp-duty-proof", "Opłata skarbowa 340 zł"),
    law: law.text`${law.external("Załącznik do ustawy o opłacie skarbowej, część III, poz. 2", "https://eli.gov.pl/eli/DU/2025/1154/ogl")}. Звільнення, зокрема для користувача тимчасового захисту, перевіряють за його умовами.`,
  },
  attorney: {
    ...common.attorney,
    owner:
      "Заявниця уповноважує представника; у прикладі він отримує кореспонденцію",
  },
  abroadApplication: {
    item: document(
      "family-abroad-application",
      "Паперова сімейна заява щодо особи за кордоном"
    ),
    level: "conditional",
    status: "альтернатива MOS для визначених підстав поза Польщею",
    owner: "Член сім'ї, який живе в Польщі та подає за особу за кордоном",
    proves: law.text`Прохання за ${law.article("159")} ust. 1 або ${law.article("160")} pkt 1, 3, 4 чи 6. Місце перебування і точна підстава визначають форму; цей документ не є другим обов'язковим формуляром у справі MOS`,
    law: law.text`${law.article("106l")}; ${law.article("168")}; ${law.article("168a")}.`,
  },
  consent: {
    item: document(
      "family-application-consent",
      "Згода на подання сімейної заяви"
    ),
    level: "conditional",
    status: "до відповідної паперової заяви, крім законного представництва",
    owner:
      "Особа за кордоном або її законний представник; підписує належний формуляр",
    proves:
      "Згоду на подання і повноваження названого члена сім'ї діяти в цьому провадженні. Окрема згода не потрібна, якщо заявник сам є законним представником",
    law: law.text`${law.article("106l")} ust. 3; ${law.article("168")} ust. 2–3; ${law.article("168a")} ust. 2–3.`,
  },
  decision: {
    item: document(
      "administrative-decision",
      "Рішення про połączenie się z rodziną"
    ),
    level: "control",
    status: "після вручення",
    owner: "Заявниця або представник; зберігає рішення й доказ вручення",
    proves:
      "Підставу, строк і результат справи. Дозвіл чоловіка не робить дозвіл дружини безстроковим",
    law: law.text`${law.article("162")} ust. 1a; ${kpa.article("107", "art. 107 KPA")}.`,
  },
  card: {
    item: document("residence-card", "Karta pobytu після сімейного дозволу"),
    level: "control",
    status: "при отриманні",
    owner: "Заявниця; звіряє дані, строк і позначки з рішенням",
    proves:
      "Документує статус. Разом із чинним паспортом має значення для подорожей; не замінює перевірки підстави роботи",
    law: law.text`${law.article("242")} і ${law.article("244")}.`,
  },
  notification: {
    item: document(
      "temporary-residence-notification",
      "Повідомлення про припинення причини дозволу"
    ),
    level: "conditional",
    status: "якщо причина наданого дозволу припинилася",
    owner: "Заявниця або належний представник; відповідному wojewodzie",
    proves:
      "Яку зміну і дату повідомлено. Саме повідомлення не надає іншого права перебування",
    law: law.text`${law.article("113")}; окремі випадки наступного дозволу за ${law.article("161")} ust. 2.`,
  },
  obstacle: deadlineObstacleEvidence,
  order: proceduralOrderEvidence,
  appeal: administrativeAppealEvidence,
  complaint: proceduralComplaintEvidence,
  judicialComplaint: judicialComplaintEvidence,
  courtJudgment: courtJudgmentEvidence,
} satisfies Record<string, CaseGuideDocument>

export const familyDocumentRegister: CaseGuideDocument[] =
  Object.values(familyDocuments)
