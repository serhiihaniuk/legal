import type { CaseGuideDocument } from "../../types"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import { document } from "./document-reference"

const law = createLegalTextAuthor("ustawa-o-cudzoziemcach")
const kpa = createLegalTextAuthor("kpa")

export const temporaryResidenceDocuments = {
  passport: {
    item: document("passport", "Скани всіх сторінок дійсного паспорта"),
    reviewId: "passport",
    level: "required",
    status: "до заяви",
    owner: "Заявник; скани в MOS, оригінал на особистій явці",
    proves:
      "Особу та дані документа. Штампи допомагають відновити поїздки, але відсутність штампа не доводить відсутності виїзду",
    law: law.text`${law.article("106d")} ust. 1 pkt 3; ${law.article("106e")} ust. 1 pkt 1. Виняток за відсутності можливості отримати паспорт визначає ${law.article("106a")} ust. 2.`,
  },
  chronology: {
    item: document(
      "stay-history",
      "Хронологія перебування, виїздів і попередніх справ"
    ),
    reviewId: "chronology",
    level: "control",
    status: "робочий запис",
    owner: "Працівник разом із заявником; оновлює після кожної події",
    proves:
      "Поєднує дати з їхніми джерелами. Прогалини залишаються позначеними, доки не отримано доказ",
    law: law.text`${law.article("105")}: своєчасність подання; ${law.article("108")}: перебування під час розгляду.`,
  },
  translation: {
    item: document(
      "sworn-translation",
      "Tłumaczenie przysięgłe іноземного документа"
    ),
    reviewId: "translation",
    level: "conditional",
    status: "для документа іноземною мовою",
    owner:
      "Заявник замовляє належний переклад і подає його разом із документом",
    proves:
      "Зміст документа польською. Переклад не підтверджує правдивості даних, чинності кваліфікації чи справжності оригіналу",
    law: law.text`${law.article("8")} ust. 2.`,
  },
  matrix: {
    item: document("evidence-matrix", "Матриця умов і доказів"),
    level: "control",
    status: "робочий запис",
    owner: "Працівник; до подання та після отримання нових матеріалів",
    proves:
      "Показує умову, встановлений факт, його джерело і прогалину. Запис не замінює документа, на який посилається",
    law: kpa.text`${kpa.article("77", "Art. 77 KPA")} і ${kpa.article("80", "art. 80 KPA")}: матеріал справи та його оцінка.`,
  },
  assessment: {
    item: document("case-assessment", "Нотатка про підставу і подальші дії"),
    level: "control",
    status: "робочий запис",
    owner:
      "Працівник; зазначає дату, джерела та відповідального за наступну дію",
    proves:
      "Пояснює внутрішній висновок і його межі. Окремо фіксує слова заявника та висновки з документів",
    law: "Внутрішній запис для ведення справи; не рішення органу й не самостійний доказ усіх описаних фактів.",
  },
  application: {
    item: document("mos-application", "Електронна заява MOS"),
    reviewId: "application",
    level: "required",
    status: "підписана й відправлена",
    owner:
      "Повнолітній дієздатний заявник; у цьому прикладі підписує особисто через свій обліковий запис",
    proves:
      "Про який дозвіл просить заявник і які дані заявляє. Чернетка без належного підпису й UPO не є завершеним поданням",
    law: law.text`${law.article("105")}; ${law.article("106c")}; ${law.article("106d")} ust. 3–6.`,
  },
  photo: {
    item: document("digital-photo", "Цифрове фото"),
    reviewId: "photograph",
    level: "required",
    status: "до заяви",
    owner: "Заявник; актуальний файл за вимогами форми",
    proves:
      "Зображення для ідентифікації та персоналізації документа; не замінює скану паспорта",
    law: law.text`${law.article("106d")} ust. 1 pkt 2; вимоги форми за ${law.article("107")}.`,
  },
  attorney: {
    item: document("power-of-attorney", "Pełnomocnictwo"),
    reviewId: "attorney",
    level: "conditional",
    status: "якщо є представник",
    owner:
      "Заявник уповноважує представника; повноваження підписанта роботодавця перевіряють окремо",
    proves:
      "Хто і в якому обсязі діє за заявника. Довіреність не замінює його особистий підпис у MOS або необхідну явку",
    law: kpa.text`${kpa.articleRange("32", "33", { start: "Art. 32", end: "33 KPA" })}; спеціальний підпис заяви за ${law.article("106d", "art. 106d ustawy o cudzoziemcach")}.`,
  },
  fee: {
    item: document("stamp-duty-proof", "Opłata skarbowa 440 zł"),
    reviewId: "payment",
    level: "conditional",
    status: "якщо немає звільнення",
    owner:
      "Заявник; підтвердження сплати до MOS, правильний одержувач і призначення",
    proves:
      "Сплату за надання цього дозволу. Це окрема плата від виготовлення карти; за потреби додають підставу звільнення",
    law: law.text`${law.external("Załącznik do ustawy o opłacie skarbowej, część III, poz. 2b", "https://eli.gov.pl/eli/DU/2025/1154/ogl")}.`,
  },
  cardFee: {
    item: document("residence-card-fee-proof", "Підтвердження плати за карту"),
    level: "conditional",
    status: "якщо плата належить",
    owner:
      "Заявник; додає підтвердження до MOS, при отриманні звіряє вже здійснений платіж",
    proves:
      "Сплату за видачу карти. Стандартно 100 zł; пільга або звільнення потребують окремої підстави",
    law: law.text`${law.articleRange("235", "239")}; ${law.external("§ 2 розпорядження Dz.U. 2022 poz. 1583", "https://eli.gov.pl/eli/DU/2022/1583/ogl")}.`,
  },
  upo: {
    item: document("upo", "UPO та збережена заява"),
    reviewId: "submission",
    level: "control",
    status: "після відправлення",
    owner: "Заявник; завантажує UPO, PDF/XML заяви та зберігає подані додатки",
    proves:
      "Отримання подання системою. Збережений пакет дозволяє відновити його зміст; UPO не підтверджує виконання умов дозволу",
    law: law.text`${law.article("106d")} ust. 5–6.`,
  },
  index: {
    item: document("case-file-index", "Індекс матеріалів справи та додатків"),
    level: "control",
    status: "робочий запис",
    owner: "Працівник; називає файл, версію, дату подання та пункт відповіді",
    proves:
      "Який матеріал де шукати. Допомагає звірити власну копію з akta справи, але не засвідчує отримання кожного файла органом",
    law: kpa.text`${kpa.article("73", "Art. 73 KPA")}: доступ до матеріалів справи.`,
  },
  certificate: {
    item: document("proceeding-certificate", "Zaświadczenie про подання заяви"),
    level: "control",
    status: "видає орган після перевірки",
    owner: "Wojewoda; заявник отримує через MOS або при явці",
    proves:
      "Подання заяви за зазначеними в довідці умовами. Дата видачі може бути пізнішою за дату подання",
    law: law.text`${law.article("108")}. Довідка не є початковим вкладенням, дозволом на роботу або картою для перетину кордону.`,
  },
  summons: {
    item: document("authority-summons", "Wezwanie органу"),
    reviewId: "summons",
    level: "conditional",
    status: "якщо отримано вимогу",
    owner: "Орган надсилає заявнику або належному представнику",
    proves:
      "Що вимагає орган, на якій підставі, у який строк і з яким наслідком. Дату вручення встановлює окремий доказ",
    law: kpa.text`${kpa.article("54", "Art. 54 KPA")}; ${law.article("106e", "art. 106e")} і ${law.article("106f", "106f ustawy o cudzoziemcach")}.`,
  },
  delivery: {
    item: document("delivery-proof", "Підтвердження doręczenia"),
    reviewId: "delivery",
    level: "control",
    status: "після вручення листа або рішення",
    owner: "Одержувач; електронний доказ або матеріали поштового вручення",
    proves:
      "Адресата, спосіб і дату юридично значущого вручення. Дата листа і дата його пересилання клієнту можуть бути іншими",
    law: kpa.text`${kpa.article("39", "Art. 39 KPA")}, ${kpa.article("40", "art. 40 KPA")} і правила конкретного способу вручення.`,
  },
  requirements: {
    item: document("requirements-table", "Таблиця вимог із wezwania"),
    level: "control",
    status: "робочий запис перед відповіддю",
    owner: "Працівник; окремий рядок для кожної вимоги",
    proves:
      "Зв'язок вимоги, строку, документа й пункту відповіді. Позначка в таблиці не замінює виконаної дії",
    law: "Внутрішня організація відповіді за фактичним змістом отриманого листа.",
  },
  response: {
    item: document("response-letter", "Відповідь на wezwanie"),
    level: "conditional",
    status: "коли виконуєте вимогу",
    owner: "Заявник або представник; у строк і способом, належним для цієї дії",
    proves:
      "Яку позицію викладено і які докази долучено. Пояснення, що довідку замовлено, не дорівнює самій довідці",
    law: kpa.text`${kpa.article("63", "Art. 63 KPA")}; ${law.article("106f", "art. 106f ustawy o cudzoziemcach")}.`,
  },
  dispatch: {
    item: document("dispatch-proof", "Доказ подання відповіді"),
    level: "control",
    status: "після кожного подання",
    owner:
      "Заявник або представник зберігає підтвердження сервісу, оператора чи канцелярії",
    proves:
      "Дату й канал передання. Для строку враховують передбачений законом спосіб, а для змісту зберігають копію пакета",
    law: kpa.text`${kpa.article("57", "Art. 57 § 5 KPA")}.`,
  },
  fingerprints: {
    item: document(
      "fingerprint-record",
      "Запис про відбитки або їх відсутність"
    ),
    level: "control",
    status: "оформлює орган при особистій дії",
    owner:
      "Працівник органу; заявник прибуває за належним викликом, якщо немає законного винятку",
    proves:
      "Виконання біометричної дії або причину відсутності відбитків. Заявник не створює цей запис самостійно перед MOS",
    law: law.text`${law.article("106b")}, ${law.article("106e")}, ${law.article("106g")}, ${law.article("106h")} і ${law.article("106i")}.`,
  },
  signature: {
    item: document("signature-specimen", "Взірець підпису для карти"),
    level: "conditional",
    status: "за процедурою особистої явки, з винятками закону",
    owner: "Заявник; на формулярі або пристрої органу",
    proves:
      "Зразок для персоналізації карти. Це інша дія, ніж електронний підпис заяви",
    law: law.text`${law.article("106b")} ust. 3–4 і ${law.article("106e")}.`,
  },
} satisfies Record<string, CaseGuideDocument>
