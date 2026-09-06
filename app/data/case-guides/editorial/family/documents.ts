import type { CaseGuideDocument } from "../../types"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import {
  deadlineObstacleEvidence,
  proceduralOrderEvidence,
} from "../../shared-document-requirements"
import { document } from "../shared/document-reference"
import { temporaryResidenceDocuments as common } from "../shared/temporary-residence-documents"

const law = createLegalTextAuthor("ustawa-o-cudzoziemcach")
const kpa = createLegalTextAuthor("kpa")

export const familyDocuments = {
  ...common,
  status: {
    item: document("status-documents", "Нинішня підстава перебування заявниці"),
    level: "required",
    status: "до вибору способу подання",
    owner:
      "Заявниця; віза або рішення разом із підтвердженими датами перебування",
    proves:
      "Право перебувати та можливість подати заяву з нинішнього статусу. Дозвіл чоловіка не замінює власної підстави заявниці",
    law: law.text`${law.article("99")}, ${law.article("105")}; для окремих випадків ${law.article("165")}.`,
  },
  sponsor: {
    item: document(
      "family-evidence",
      "Статус чоловіка та докази сімейного життя"
    ),
    level: "required",
    status: "відповідно до сімейної підстави",
    owner: "Подружжя; рішення, карта та матеріали про конкретні обставини",
    proves:
      "Рішення показує pobyt stały чоловіка. Пояснення, договір житла та підтвердження тимчасової роботи пояснюють дві адреси. Це різні питання в одному наборі доказів",
    law: law.text`${law.article("159")} ust. 1 pkt 1 lit. a; ${law.article("169")}. Приватне листування не є універсальним обов'язковим додатком.`,
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
  income: {
    item: document("income-evidence", "Дохід для утримання подружжя"),
    level: "conditional",
    status: "потрібний у прикладі; є винятки для інших категорій",
    owner:
      "Чоловік, який утримує заявницю; підстава доходу, розрахунки та виплати",
    proves:
      "Стабільне й регулярне джерело утримання потрібної кількості осіб. Залишок на рахунку на одну дату не доводить регулярності",
    law: law.text`${law.article("159")} ust. 1 pkt 2 lit. b і ust. 2–2b; ${law.article("163")}; ${law.article("140")} ust. 2. Цю вимогу не переносять автоматично на подружжя громадянина Польщі.`,
  },
  insurance: {
    item: document("health-insurance", "Медичне страхування заявниці"),
    reviewId: "insurance",
    level: "conditional",
    status: "потрібне у прикладі; виняток перевіряють окремо",
    owner:
      "Заявниця; підтвердження публічного страхування або належне покриття страховиком",
    proves:
      "Покриття лікування саме заявниці в Польщі на потрібний період. Страхування чоловіка не доводить автоматичного включення дружини",
    law: law.text`${law.article("159")} ust. 1 pkt 2 lit. a і ust. 2–2a. Виняток ust. 2b для певної мобільності Blue Card страхову вимогу не скасовує.`,
  },
  housing: {
    item: document(
      "housing-evidence",
      "Документ про забезпечене сімейне житло"
    ),
    level: "conditional",
    status: "потрібний у прикладі; залежить від підстави й винятків",
    owner: "Подружжя та надавач житла; договір або інше належне підтвердження",
    proves:
      "Можливість проживати за вказаною адресою. Тимчасове житло чоловіка біля роботи пояснюють окремо; сам meldunek не доводить усіх обставин шлюбу",
    law: law.text`${law.article("159")} ust. 1 pkt 3 і ust. 2–2b.`,
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
} satisfies Record<string, CaseGuideDocument>

export const familyDocumentRegister: CaseGuideDocument[] =
  Object.values(familyDocuments)
