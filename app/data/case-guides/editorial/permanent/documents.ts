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

// Select shared evidence records explicitly. Filing rules below belong to permanent residence.
export const permanentDocuments = {
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
    item: document("passport", "Дійсний паспорт заявника"),
    law: law.text`${law.article("203a")}; ${law.article("203d")} ust. 1 pkt 2; ${law.article("203e")}. Альтернативний документ допускається лише за умовами ${law.article("203a")} ust. 2.`,
  },
  chronology: {
    ...common.chronology,
    law: law.text`${law.article("202")}, ${law.article("203")} ust. 1 pkt 3 і ${law.article("206")}; період для конкретної підстави за ${law.article("195")}.`,
  },
  visa: {
    item: document(
      "visa",
      "Національна віза з дозволеним перебуванням до 30.09.2026"
    ),
    level: "required",
    status: "до подання",
    owner:
      "Заявник; обрана чинна національна віза та фактичні дати перебування",
    proves:
      "Право перебувати й останній день для заяви. Karta Polaka не замінює візу або іншу підставу перебування",
    law: law.text`${law.article("196")}, ${law.article("202")} і ${law.article("206")}.`,
  },
  polaka: {
    item: document("karta-polaka", "Дійсна Karta Polaka"),
    level: "conditional",
    status: "обов'язкова для підстави з прикладу",
    owner:
      "Заявник; обрана чинна карта відповідає паспорту, не анульована і не замінена. Додаткове рішення потрібне лише за конкретної зміни чи розбіжності",
    proves:
      "Належність документа цій особі та його чинність. Намір оселитися й законність нинішнього перебування встановлюють окремо",
    law: law.text`${law.article("195")} ust. 1 pkt 9; ${law.external("art. 3, 7, 17 і 20 ustawy o Karcie Polaka", "https://eli.gov.pl/eli/DU/2026/76/ogl")}.`,
  },
  intention: {
    kind: "action",
    guidance: "settlement-intention",
    item: "Пояснити намір постійного оселення в заяві та відповіді",
    level: "conditional",
    status: "для Karty Polaka або польського походження",
    owner:
      "Заявник пояснює план у заяві 17.08 та відповіді 31.08; окремої обов’язкової заяви про намір не вигадують",
    proves:
      "Намір постійно жити в Польщі. Строк оренди не є строком цього наміру; суперечності потребують пояснення",
    law: law.text`${law.article("195")} ust. 1 pkt 3 або 9. Робота, власне житло й родина не є універсальним обов'язковим набором.`,
  },
  housing: {
    item: document(
      "residential-lease",
      "Підписана оренда житла у Вроцлаві на 01.08.2026–31.07.2027"
    ),
    level: "conditional",
    status: "матеріал із прикладу",
    owner:
      "Заявник; цифрову копію підписаного договору подано 17.08, його оригінал надано 31.08 на вимогу органу",
    proves:
      "Забезпечене місце життя на зазначений період. Річна оренда сама не доводить і не спростовує постійного наміру",
    law: law.text`${law.article("195")} ust. 1 pkt 9; ${kpa.article("80", "art. 80 KPA")}.`,
  },
  employment: {
    item: document(
      "employment-contract",
      "Чинна umowa o pracę заявника в Польщі"
    ),
    level: "conditional",
    status: "один із доказів обставин у прикладі",
    owner:
      "Заявник; чинна umowa o pracę щодо вже розпочатої роботи, вперше подана 31.08",
    proves:
      "Професійний зв'язок із Польщею. Договір не є самостійною умовою для кожного власника Karty Polaka",
    law: law.text`${law.article("195")} ust. 1 pkt 9. Право виконувати роботу перевіряють за окремим законом.`,
  },
  civilStatus: {
    item: document(
      "civil-status-record",
      "Акти стану цивільного для іншої категорії"
    ),
    level: "conditional",
    status: "дитина, подружжя або документований родинний зв'язок",
    owner:
      "Заявник або законний представник; належний акт і документи про батьківські права",
    proves:
      "Народження, шлюб чи споріднення, яких потребує конкретна категорія. Для подружжя потрібні також належні періоди шлюбу й перебування",
    law: law.text`${law.article("195")} ust. 1 pkt 1–4. Для походження pkt 3 акт про споріднення є лише частиною перевірки за ust. 2.`,
  },
  application: {
    ...common.application,
    item: document(
      "permanent-application",
      "Wniosek o udzielenie zezwolenia na pobyt stały"
    ),
    law: law.text`${law.article("202")}, ${law.article("203c")} і ${law.article("203d")} ust. 3–5.`,
  },
  photo: {
    ...common.photo,
    law: law.text`${law.article("203d")} ust. 1 pkt 1; форма за ${law.article("204")}.`,
  },
  attorney: {
    ...common.attorney,
    owner:
      "Заявник уповноважує представника для визначених дій та кореспонденції",
    law: kpa.text`${kpa.articleRange("32", "33", { start: "Art. 32", end: "33 KPA" })}; особистий електронний підпис за ${law.article("203d", "art. 203d ustawy o cudzoziemcach")} ust. 3. Законне представництво за ${law.article("202")} ust. 2 є окремим випадком.`,
  },
  fee: {
    kind: "action",
    guidance: "stamp-duty-proof",
    item: "Перевірити звільнення від плати за дозвіл за Kartą Polaka",
    level: "control",
    status: "640 zł у цьому прикладі не сплачують",
    owner:
      "Заявник або представник зіставляє чинну Kartę Polaka й підставу заяви",
    proves:
      "Застосування звільнення до власника Karty Polaka з наміром постійного оселення. Це перевірка, не квитанція про неіснуючий платіж. Плата за карту має інше призначення.",
    law: law.text`${law.external("Załącznik do ustawy o opłacie skarbowej, część III, poz. 3", "https://eli.gov.pl/eli/DU/2025/1154/ogl")}.`,
  },
  upo: { ...common.upo, law: law.text`${law.article("203d")} ust. 4–5.` },
  certificate: {
    ...common.certificate,
    item: document(
      "proceeding-certificate",
      "Zaświadczenie про подання заяви на pobyt stały"
    ),
    law: law.text`${law.article("206")}. Це результат перевірки умов подання; не вкладення до початкової заяви й не документ для перетину кордону.`,
  },
  summons: {
    ...common.summons,
    law: law.text`${law.article("203e")} і ${law.article("203f")}; ${kpa.article("54", "art. 54 KPA")}.`,
  },
  response: {
    ...common.response,
    law: law.text`${law.article("203f")}; ${kpa.article("63", "art. 63 KPA")}.`,
  },
  fingerprints: {
    ...common.fingerprints,
    law: law.text`${law.article("203b")}, ${law.article("203e")}, ${law.article("203g")}, ${law.article("203h")} і ${law.article("203i")}.`,
  },
  signature: {
    ...common.signature,
    law: law.text`${law.article("203b")} ust. 3–4 і ${law.article("203e")}.`,
  },
  decision: {
    item: document("administrative-decision", "Рішення про pobyt stały"),
    level: "control",
    status: "після вручення",
    owner:
      "Орган видає повне рішення; заявник або представник читає його. Доказ вручення зберігають окремо, остаточність установлюють за матеріалами справи",
    proves:
      "Підставу та результат справи. Безстроковість дозволу відрізняється від десятирічного строку пластикової карти",
    law: law.text`${law.article("195")}, ${law.article("201")}; ${kpa.article("107", "art. 107 KPA")}.`,
  },
  card: {
    item: document(
      "residence-card",
      "Karta pobytu після надання pobytu stałego"
    ),
    level: "control",
    status: "перша видача й подальша заміна",
    owner:
      "Заявник; при отриманні перевіряє дані карти й відповідність наданому дозволу. Повернення Karty Polaka є окремою попередньою дією",
    proves:
      "Документує наданий статус. Наступну карту отримують окремо, без нової заяви про надання того самого постійного дозволу",
    law: law.text`${law.article("229")} ust. 2 і 7; ${law.article("230")} ust. 2; ${law.article("243")} ust. 1 pkt 2.`,
  },
  obstacle: deadlineObstacleEvidence,
  order: proceduralOrderEvidence,
  appeal: administrativeAppealEvidence,
  complaint: proceduralComplaintEvidence,
  judicialComplaint: judicialComplaintEvidence,
  courtJudgment: courtJudgmentEvidence,
} satisfies Record<string, CaseGuideDocument>

export const permanentDocumentRegister: CaseGuideDocument[] = [
  permanentDocuments.passport,
  permanentDocuments.visa,
  permanentDocuments.polaka,
  permanentDocuments.chronology,
  permanentDocuments.intention,
  permanentDocuments.housing,
  permanentDocuments.employment,
  permanentDocuments.civilStatus,
  permanentDocuments.translation,
  permanentDocuments.matrix,
  permanentDocuments.assessment,
  permanentDocuments.application,
  permanentDocuments.photo,
  permanentDocuments.attorney,
  permanentDocuments.fee,
  permanentDocuments.cardFee,
  permanentDocuments.upo,
  permanentDocuments.index,
  permanentDocuments.summons,
  permanentDocuments.order,
  permanentDocuments.appeal,
  permanentDocuments.complaint,
  permanentDocuments.judicialComplaint,
  permanentDocuments.courtJudgment,
  permanentDocuments.delivery,
  permanentDocuments.requirements,
  permanentDocuments.response,
  permanentDocuments.dispatch,
  permanentDocuments.certificate,
  permanentDocuments.fingerprints,
  permanentDocuments.signature,
  permanentDocuments.obstacle,
  permanentDocuments.decision,
  permanentDocuments.card,
]
