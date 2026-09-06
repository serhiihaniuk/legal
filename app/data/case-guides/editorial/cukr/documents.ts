import type { CaseGuideDocument } from "../../types"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import { document } from "../shared/document-reference"
import { temporaryResidenceDocuments as common } from "../shared/temporary-residence-documents"
import {
  deadlineObstacleEvidence,
  workNotificationEvidence,
} from "../../shared-document-requirements"

export const cukrSource =
  "https://eli.gov.pl/api/acts/DU/2025/337/text/U/D20250337Lj.pdf"
export const law = createLegalTextAuthor("ustawa-o-cudzoziemcach")
const kpa = createLegalTextAuthor("kpa")

export const cukrDocuments = {
  passport: {
    item: document("passport", "Чинний паспорт"),
    reviewId: "passport",
    level: "required",
    status: "для реєстру й особистого отримання",
    owner: "Заявник; звіряє документ із PESEL, пред'являє при отриманні карти",
    proves:
      "Особу та реквізити чинного документа. У CUKR скани всіх сторінок не є стандартним обов'язковим додатком до заяви",
    law: law.text`${law.external("Art. 42g ust. 1", cukrSource + "#page=25")}; ${law.external("art. 42k", cukrSource + "#page=30")} і ${law.article("248")} щодо отримання карти.`,
  },
  registry: {
    item: document("pesel-ukr-confirmation", "Дані PESEL та історія UKR"),
    level: "control",
    status: "реєстрова перевірка",
    owner: "Заявник уточнює дані; MOS та орган перевіряють реєстри",
    proves:
      "Історію UKR, стан на потрібні дати й актуальні реквізити. Окрема довідка не замінює запису реєстру й не є універсальним вкладенням",
    law: law.text`${law.external("Art. 42c", cukrSource + "#page=21")} та ${law.external("art. 42g", cukrSource + "#page=25")}.`,
  },
  correction: {
    item: "Виправлення або доповнення даних у gminie",
    kind: "action",
    guidance: "pesel-ukr-confirmation",
    level: "conditional",
    status: "якщо є розбіжність",
    owner: "Заявник звертається з чинним паспортом до подання",
    proves:
      "Дає змогу усунути конкретну помилку. Оновлення номера паспорта саме не відновлює втрачений UKR",
    law: law.text`${law.external("Art. 42g", cukrSource + "#page=25")}; ${law.external("art. 25 і 26 змін 2026 року", "https://eli.gov.pl/eli/DU/2026/203/ogl")}.`,
  },
  chronology: {
    ...common.chronology,
    law: law.text`${law.external("Art. 42c", cukrSource + "#page=21")} та ${law.external("art. 42i", cukrSource + "#page=29")}: історія UKR і незавершені заяви.`,
  },
  assessment: common.assessment,
  matrix: common.matrix,
  work: workNotificationEvidence,
  application: {
    item: document("cukr-application", "Електронна заява на CUKR"),
    level: "required",
    status: "спеціальна форма MOS",
    owner:
      "Повнолітній заявник підписує власну заяву; за дитину діє належний законний представник",
    proves:
      "Прохання видати саме карту CUKR та заявлені відомості. Чернетка або попередня перевірка можливості подання не є відправленою заявою",
    law: law.text`${law.external("Art. 42f", cukrSource + "#page=23")} і ${law.external("art. 42g", cukrSource + "#page=25")}.`,
  },
  photo: {
    item: document("digital-photo", "Цифрове фото"),
    reviewId: "photograph",
    level: "required",
    status: "додаток до MOS",
    owner: "Заявник; актуальне зображення у встановленому форматі",
    proves:
      "Зображення для персоналізації карти. Прийнятий файл ще не підтверджує відповідність самого фото вимогам",
    law: law.text`${law.external("Art. 42f ust. 3 pkt 1", cukrSource + "#page=24")}; ${law.external("форма та вимоги CUKR", "https://eli.gov.pl/eli/DU/2026/530/ogl")}.`,
  },
  stampFee: {
    item: document("stamp-duty-proof", "Підтвердження opłaty skarbowej 340 zł"),
    level: "required",
    status: "сплата й доказ до подання",
    owner: "Заявник; платіж належному органу податкового збору",
    proves:
      "Сплату за надання дозволу. Цей платіж відрізняється від плати за пластикову карту",
    law: law.text`${law.external("Art. 42e", cukrSource + "#page=22")}, ${law.external("art. 42f ust. 3 pkt 3", cukrSource + "#page=24")} та ${law.external("art. 42s", cukrSource + "#page=32")}.`,
  },
  cardFee: {
    item: document(
      "residence-card-fee-proof",
      "Підтвердження плати за карту 100 zł"
    ),
    level: "required",
    status: "додаток до MOS, не повторний платіж при отриманні",
    owner: "Заявник; платіж органу, який видає карту",
    proves:
      "Сплату за виготовлення карти. Підтвердження зберігають разом із поданою заявою",
    law: law.text`${law.external("Art. 42f ust. 3 pkt 2", cukrSource + "#page=24")} та ${law.external("art. 42n", cukrSource + "#page=30")}.`,
  },
  upo: {
    ...common.upo,
    law: law.text`${law.external("Art. 42g ust. 1 і 2", cukrSource + "#page=25")}; ${law.external("UdSC: підписання та збереження подання", "https://www.gov.pl/web/udsc/cukr-QA")}.`,
  },
  fingerprints: {
    ...common.fingerprints,
    owner: "Gmina та реєстр; орган отримує вже збережені біометричні дані",
    status: "реєстрова умова з передбаченими винятками",
    proves:
      "Збережені відбитки або належний запис про неможливість їх отримати. Звичайну явку для відбитків у справі тимчасового дозволу сюди не переносять",
    law: law.text`${law.external("Art. 42g", cukrSource + "#page=25")} та ${law.external("art. 42h", cukrSource + "#page=29")}.`,
  },
  signature: {
    item: document(
      "signature-specimen",
      "Зразок власноручного підпису в реєстрі"
    ),
    level: "control",
    status: "від 12 років, крім установленої неможливості",
    owner: "Заявник та gmina; доповнення до відправлення заяви",
    proves:
      "Зразок для документа. Він не є електронним підписом, яким надсилають заяву",
    law: law.text`${law.external("Art. 42g ust. 2 pkt 2 lit. b", cukrSource + "#page=27")}.`,
  },
  summons: {
    ...common.summons,
    law: kpa.text`${kpa.article("54", "Art. 54 KPA")}: зміст конкретної вимоги. Явка за звичайною процедурою тимчасового дозволу не є стандартним етапом CUKR.`,
  },
  delivery: common.delivery,
  requirements: common.requirements,
  response: {
    ...common.response,
    law: kpa.text`${kpa.article("63", "Art. 63 KPA")}; канал і строк визначає належна для цієї дії процедура.`,
  },
  index: common.index,
  dispatch: common.dispatch,
  card: {
    item: document(
      "residence-card",
      "Карта CUKR, повідомлення про готовність і дата отримання"
    ),
    level: "control",
    status: "після виготовлення та при отриманні",
    owner:
      "Wojewoda повідомляє про готовність; повнолітній заявник отримує карту особисто",
    proves:
      "Окремо дату доступності інформації, дату отримання та строк на карті. Повідомлення саме не перетворює захист на дозвіл",
    law: law.text`${law.external("Art. 42p", cukrSource + "#page=31")} і ${law.external("art. 42r", cukrSource + "#page=31")}.`,
  },
  refusal: {
    item: document(
      "administrative-decision",
      "Decyzja про відмову у видачі карти"
    ),
    reviewId: "decision",
    level: "conditional",
    status: "якщо орган відмовив",
    owner:
      "Wojewoda; заявник або представник зберігає рішення й доказ вручення",
    proves:
      "Причину відмови, установлені факти та pouczenie про оскарження. Позитивне завершення CUKR не потребує такої самої окремої decyzji про дозвіл",
    law: law.text`${law.external("Art. 42o ust. 3 і 4", cukrSource + "#page=31")}.`,
  },
  address: {
    item: document(
      "temporary-residence-notification",
      "Повідомлення про зміну місця перебування після CUKR"
    ),
    level: "conditional",
    status: "якщо місце перебування змінилося",
    owner: "Власник карти; повідомляє wojewodę, який видав карту",
    proves:
      "Нові адресні відомості й виконання обов'язку. Копію повідомлення доповнює доказ подання",
    law: law.text`${law.external("Art. 42u", cukrSource + "#page=33")}: 15 робочих днів і наслідок неналежного повідомлення.`,
  },
  obstacle: deadlineObstacleEvidence,
} satisfies Record<string, CaseGuideDocument>

export const cukrDocumentRegister: CaseGuideDocument[] =
  Object.values(cukrDocuments)
