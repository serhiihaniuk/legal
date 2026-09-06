import type { CaseGuideDocument } from "../../types"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import { deadlineObstacleEvidence } from "../../shared-document-requirements"
import { document } from "../shared/document-reference"
import { temporaryResidenceDocuments as common } from "../shared/temporary-residence-documents"

const law = createLegalTextAuthor("ustawa-o-cudzoziemcach")
const kpa = createLegalTextAuthor("kpa")

export const residentDocuments = {
  translation: common.translation,
  matrix: common.matrix,
  assessment: common.assessment,
  index: common.index,
  delivery: common.delivery,
  requirements: common.requirements,
  dispatch: common.dispatch,
  cardFee: common.cardFee,
  passport: {
    ...common.passport,
    law: law.text`${law.article("219a")} ust. 1 i 3; ${law.article("219d")} ust. 1 pkt 2; ${law.article("219e")}. Інший документ особи допускається лише за умовами закону.`,
  },
  status: {
    item: document(
      "status-documents",
      "Рішення, візи та нинішня підстава перебування"
    ),
    level: "required",
    status: "для всієї хронології",
    owner: "Заявник; попередні рішення, документи й докази подань",
    proves:
      "Підставу кожного періоду та законність перебування в день заяви. Дата на пластиковій карті не відтворює всієї історії",
    law: law.text`${law.article("211")}, ${law.article("212")}, ${law.article("213")} і ${law.article("218a")}.`,
  },
  chronology: {
    ...common.chronology,
    proves:
      "Фактичні періоди, підстави й виїзди разом із джерелами дат. Зарахування повністю, наполовину або виключення пояснюють окремо від запису справжніх дат",
    law: law.text`${law.article("211")} ust. 1; ${law.article("212")}; ${law.article("219")} ust. 1 pkt 3 i 7.`,
  },
  income: {
    item: document(
      "income-evidence",
      "Історія доходу: PIT, нарахування й виплати"
    ),
    level: "required",
    status: "три роки в цьому прикладі",
    owner:
      "Заявник; документи від платників доходу, подані декларації та банківська історія",
    proves:
      "Джерело, регулярність і розмір доходу за потрібний період з урахуванням утриманців. Один PIT або залишок на рахунку не замінює історії",
    law: law.text`${law.article("211")} ust. 1 pkt 1 i ust. 2; ${law.article("140")} ust. 2. Два роки застосовуються лише у випадку ${law.article("212")} ust. 1 pkt 1.`,
  },
  employment: {
    item: document(
      "employment-contract",
      "Договори роботи й зміни умов оплати"
    ),
    level: "conditional",
    status: "джерело доходу в прикладі",
    owner: "Заявник; договори з кожним роботодавцем за перевірюваний період",
    proves:
      "Правову основу виплат і погоджену винагороду. Підписаний договір ще не підтверджує кожну фактичну виплату",
    law: law.text`${law.article("211")} ust. 1 pkt 1 i ust. 2. Дохід може мати інше належне джерело; umowa o pracę не є універсально обов'язковою.`,
  },
  insurance: {
    item: document("health-insurance", "Чинне медичне страхування"),
    level: "required",
    status: "окрема умова дозволу",
    owner:
      "Заявник; підтвердження права на медичні послуги або покриття витрат страховиком",
    proves:
      "Належне медичне покриття в Польщі. Старе працевлаштування саме не підтверджує чинного страхування",
    law: law.text`${law.article("211")} ust. 1 pkt 2.`,
  },
  zus: {
    item: document(
      "zus-confirmation",
      "Дані ZUS про страхування та розрахунки"
    ),
    level: "conditional",
    status: "для страхування через роботу в прикладі",
    owner:
      "Заявник і платник внесків; реєстрація, періоди та належні розрахунки",
    proves:
      "Зв'язок особи зі страховим титулом і періодами внесків. База внесків не тотожна сумі виплати на рахунок",
    law: law.text`${law.article("211")} ust. 1 pkt 1 i 2.`,
  },
  language: {
    item: document(
      "polish-language-proof",
      "Документ про знання польської мови"
    ),
    level: "conditional",
    status: "якщо на день заяви виповнилося 16 років",
    owner:
      "Заявник; допустиме посвідчення або документ про завершену освіту польською",
    proves:
      "Мовну умову в передбаченій законом формі. Довідка про курс із написом B1 не завжди належить до дозволеного переліку",
    law: law.text`${law.article("211")} ust. 3 i 4; ${law.external("перелік посвідчень", "https://eli.gov.pl/eli/DU/2023/1076/ogl")}; ${law.external("art. 30 змін від 04.04.2025", "https://eli.gov.pl/eli/DU/2025/622/ogl")}.`,
  },
  housing: {
    item: document(
      "housing-evidence",
      "Tytuł prawny do lokalu: документ про право користуватися житлом"
    ),
    level: "required",
    status: "скан до MOS, документ при явці",
    owner:
      "Заявник; наприклад, актуальний договір оренди або документ власності",
    proves:
      "Правову підставу користування житлом. Meldunek і повідомлена адреса не замінюють цього документа",
    law: law.text`${law.article("219a")} ust. 1 i 2; ${law.article("219d")} ust. 1 pkt 3; ${law.article("219e")}. Umowa użyczenia допускається лише від названих законом близьких.`,
  },
  civilStatus: {
    item: document(
      "civil-status-record",
      "Акти про родинний зв'язок або законне представництво"
    ),
    level: "conditional",
    status: "для утриманців, дитини або użyczenia від родича",
    owner:
      "Заявник чи законний представник; належний акт і переклад за потреби",
    proves:
      "Зв'язок осіб у конкретному питанні. Сам акт не встановлює дохід або право користуватися житлом",
    law: law.text`${law.article("211")} ust. 1 pkt 1; ${law.article("218a")} ust. 2; ${law.article("219a")} ust. 2.`,
  },
  application: {
    ...common.application,
    item: document(
      "resident-application",
      "Wniosek o pobyt rezydenta długoterminowego UE"
    ),
    law: law.text`${law.article("218a")}, ${law.article("219")}, ${law.article("219c")} і ${law.article("219d")} ust. 3–5.`,
  },
  photo: {
    ...common.photo,
    law: law.text`${law.article("219d")} ust. 1 pkt 1; форма за ${law.article("222")}.`,
  },
  attorney: {
    ...common.attorney,
    owner:
      "Заявник уповноважує представника для визначених дій і кореспонденції",
    law: kpa.text`${kpa.article("32", "Art. 32 KPA")} і ${kpa.article("33", "art. 33 KPA")}; особистий підпис заявника за ${law.article("219d")} ust. 3. Законне представництво за ${law.article("218a")} ust. 2 є окремим випадком.`,
  },
  fee: {
    ...common.fee,
    item: document(
      "stamp-duty-proof",
      "Opłata skarbowa 640 zł або підстава звільнення"
    ),
    proves:
      "Плату за надання дозволу резидента. Стандартна окрема плата за пластикову карту становить 100 zł",
    law: law.text`${law.external("Частина III, позиція 4 додатка до ustawy o opłacie skarbowej", "https://eli.gov.pl/eli/DU/2025/1154/ogl")}.`,
  },
  upo: { ...common.upo, law: law.text`${law.article("219d")} ust. 4–5.` },
  certificate: {
    ...common.certificate,
    law: law.text`${law.article("222a")}. Довідка про належне подання не є візою, картою чи окремим дозволом на роботу.`,
  },
  summons: {
    ...common.summons,
    law: law.text`${law.article("219e")} і ${law.article("219f")}; ${kpa.article("54", "art. 54 KPA")}.`,
  },
  response: {
    ...common.response,
    law: law.text`${law.article("219f")}; ${kpa.article("63", "art. 63 KPA")}.`,
  },
  fingerprints: {
    ...common.fingerprints,
    law: law.text`${law.article("219b")}, ${law.article("219e")}, ${law.article("219g")}, ${law.article("219h")} і ${law.article("219i")}.`,
  },
  signature: {
    ...common.signature,
    law: law.text`${law.article("219b")} ust. 3–4 і ${law.article("219e")}.`,
  },
  decision: {
    item: document(
      "administrative-decision",
      "Рішення про дозвіл резидента ЄС"
    ),
    level: "control",
    status: "після вручення",
    owner:
      "Заявник або представник; рішення, доказ вручення й дата остаточності",
    proves:
      "Результат провадження та його обґрунтування. Дозвіл безстроковий, але строк пластикової карти окремий",
    law: law.text`${law.article("211")}, ${law.article("214")} і ${law.article("218")}; ${kpa.article("107", "art. 107 KPA")}.`,
  },
  card: {
    item: document("residence-card", "П'ятирічна karta pobytu резидента ЄС"),
    level: "control",
    status: "після надання дозволу",
    owner: "Заявник; звіряє дані при отриманні та дату наступної карти",
    proves:
      "Документує статус. Закінчення строку карти не означає автоматичної втрати безстрокового дозволу",
    law: law.text`${law.article("229")} ust. 2; ${law.article("230")} ust. 2; ${law.article("243")} ust. 1 pkt 3.`,
  },
  obstacle: deadlineObstacleEvidence,
} satisfies Record<string, CaseGuideDocument>

export const residentDocumentRegister: CaseGuideDocument[] = [
  residentDocuments.passport,
  residentDocuments.status,
  residentDocuments.chronology,
  residentDocuments.income,
  residentDocuments.employment,
  residentDocuments.insurance,
  residentDocuments.zus,
  residentDocuments.language,
  residentDocuments.housing,
  residentDocuments.civilStatus,
  residentDocuments.translation,
  residentDocuments.matrix,
  residentDocuments.assessment,
  residentDocuments.application,
  residentDocuments.photo,
  residentDocuments.attorney,
  residentDocuments.fee,
  residentDocuments.cardFee,
  residentDocuments.upo,
  residentDocuments.index,
  residentDocuments.certificate,
  residentDocuments.summons,
  residentDocuments.delivery,
  residentDocuments.requirements,
  residentDocuments.response,
  residentDocuments.dispatch,
  residentDocuments.fingerprints,
  residentDocuments.signature,
  residentDocuments.obstacle,
  residentDocuments.decision,
  residentDocuments.card,
]
