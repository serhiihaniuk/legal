import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { mapTopicSources, workLaw } from "../authoring"
import type { LegalNodeGuide } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"
import type { LegalMapTopicBody } from "./principle-legality"

const workReference = {
  kind: "official-source",
  sourceId: "eli-powierzanie-pracy",
} as const
type EmployerDutiesBody = LegalMapTopicBody

export const employerDutiesTopic: KnowledgeUnit<EmployerDutiesBody> =
  defineKnowledgeUnit({
    id: "map-topic:employer-duties",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "employer-duties" },
    },
    summary:
      "Podmiot powierzający pracę перевіряє документ pobytowy, укладає письмову умову, надає зрозумілу версію, зберігає документи та виконує електронні повідомлення.",
    claims: [
      {
        id: "employer-obligations",
        kind: "requires-verification",
        text: workLaw.text`Легальність праці вимагає не лише документа, а й виконання podmiotem powierzającym обов’язків за ${workLaw.articleRange("4", "5", { start: "art. 4", end: "5" })}, ${workLaw.article("17", "art. 17")} та ${workLaw.articleRange("19", "20", { start: "art. 19", end: "20" })}.`,
        basis: [{ reference: workReference, locator: "Art. 4–5, 17, 19–20" }],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-07-18",
      verifiedAt: "2026-07-18",
    },
    body: {
      title: "Обов’язки роботодавця",
      polish: workLaw.text`${workLaw.articleRange("4", "5", { start: "art. 4", end: "5" })}, ${workLaw.article("17", "17")}, ${workLaw.articleRange("19", "20", { start: "19", end: "20" })} ustawy z 20.03.2025`,
      sources: [mapTopicSources.work, mapTopicSources.workChange],
      guide: {
        introduction: [
          workLaw.text`Podmiot powierzający pracę відповідає не лише за отримання документа. ${workLaw.articleRange("4", "5", { start: "Art. 4", end: "5" })} і ${workLaw.articleRange("17", "20", { start: "art. 17", end: "20" })} ustawy z 20.03.2025 створюють постійний обов'язок перевіряти pobyt, правильно оформляти umowę, передавати її до системи, забезпечувати заявлені умови та повідомляти про визначені зміни.`,
          "Ці обов'язки супроводжують увесь період роботи: від перевірки документа перед допуском до завершення зберігання документації та виконання контрольних запитів органів.",
        ],
        regulated: [
          workLaw.text`${workLaw.article("4", "Art. 4")} регулює отримання і зберігання даних та копій dokumentów pobytowych, а ${workLaw.article("5", "art. 5")} — письмову форму договору, зрозумілу cudzoziemcowi мовну версію і переклад договору, складеного іноземною мовою.`,
          workLaw.text`${workLaw.article("17", "Art. 17")} визначає обов'язки після wydania zezwolenia: відповідність договору рішенню, передання польської umowy або її копії через відповідну систему, актуалізацію wynagrodzenia, інформування cudzoziemca та надання документів контролюючим органам.`,
          workLaw.text`${workLaw.articleRange("19", "20", { start: "Art. 19", end: "20" })} встановлюють електронні powiadomienia щодо непочатку, тривалої перерви або раннього завершення роботи; для oświadczenia окремі повідомлення регулює ${workLaw.article("70", "art. 70")}, а для ochrony czasowej — ${workLaw.article("5a", "art. 5a")}.`,
        ],
        appliesWhen: [
          "Загальні обов'язки щодо tytułu pobytowego та письмової umowy застосовуються незалежно від того, чи праця виконується на підставі zezwolenia, oświadczenia, powiadomienia або swobodnego dostępu.",
          workLaw.text`Спеціальні обов'язки ${workLaw.articleRange("17", "20", { start: "art. 17", end: "20" })} застосовуються до podmiotu, якому видано zezwolenie; ${workLaw.articleRange("68", "70", { start: "art. 68", end: "70" })} — до podmiotu, oświadczenie якого внесено до ewidencji.`,
        ],
        conditions: [
          "До початку роботи podmiot отримує дійсний документ, що дозволяє перебування, зберігає його копію в установленому періоді та укладає письмову umowę.",
          "Зміст договору повинен відповідати умовам zezwolenia або oświadczenia, а cudzoziemiec має отримати текст у зрозумілій формі; договір іноземною мовою зберігається разом із перекладом tłumacza przysięgłego.",
          "Перед допуском до роботи umowa польською мовою передається через eUmowy або її копія — через систему teleinformatyczny; вибір каналу залежить від того, в якій системі оформлено документ.",
        ],
        exceptions: [
          workLaw.text`${workLaw.article("4", "Art. 4")} ust. 5 звільняє від окремих обов'язків щодо przedstawienia і przechowywania документа pobytowego категорії з ${workLaw.article("3", "art. 3")} ust. 1 pkt 1–5, але не від інших обов'язків роботодавця.`,
          "Зміни назви або форми podmiotu, przejście zakładu pracy, зміна назви stanowiska без зміни обов'язків та деякі зміни часу праці можуть не вимагати нового zezwolenia, однак частина з них вимагає powiadomienia.",
        ],
        consequences: [
          "Порушення обов'язків передання umowy, powiadomienia або фактичної відповідності умов може становити wykroczenie і створювати підставу для контролю, штрафу або uchylenia zezwolenia.",
          workLaw.text`Невиплачене wynagrodzenie зберігається як вимога cudzoziemca; ${workLaw.article("17", "art. 17")} ust. 5 і ${workLaw.article("68", "art. 68")} ust. 3 прямо зобов'язують виплатити заборгованість за виконану роботу.`,
        ],
        procedure: [
          "Перед zatrudnieniem podmiot фіксує tytuł pobytowy, дані cudzoziemca, правову підставу доступу до праці та зміст майбутньої umowy.",
          "Після отримання zezwolenia або wpisu oświadczenia договір оформлюється відповідно до документа й передається до системи до початку роботи, а cudzoziemiec отримує рішення або wpis.",
          "Під час праці podmiot веде реєстр строків і zdarzeń, виконує powiadomienia у встановлені строки та зберігає підтвердження виплат, ZUS, часу праці й фактичного виконання умов.",
        ],
        foreignersContext: [
          "Для cudzoziemca текст umowy має бути реально зрозумілим до підписання; це окремий обов'язок, а не лише формальна вимога до документа в aktach.",
          "У справі pobytowej розбіжності між umową, Załącznikiem nr 1, zezwoleniem, повідомленнями до PUP і даними ZUS можуть показувати, що заявлені умови не виконуються фактично.",
        ],
      } satisfies LegalNodeGuide,
      why: "Легальність праці — це не лише отримання дозволу. Фактична umowa, wynagrodzenie, wymiar czasu й обов’язкові повідомлення мають відповідати заявленим умовам.",
      checkpoints: [
        "Чи є копія чинного документа pobytowego?",
        "Чи cudzoziemiec розуміє текст умови?",
        "Чи копію умови подано до системи, коли це потрібно?",
        "Чи повідомлено про початок/перерву/закінчення?",
      ],
      documents: [
        "документ pobytowy",
        "письмова umowa",
        "зрозумілий переклад/версія",
        "електронні підтвердження повідомлень",
        "доказ виплат і ZUS",
      ],
    },
  })

export default employerDutiesTopic

export const employerDutiesMapNode: LegalNode = {
  id: "employer-duties",
  title: employerDutiesTopic.body.title,
  polish: employerDutiesTopic.body.polish,
  summary: employerDutiesTopic.summary,
  why: employerDutiesTopic.body.why,
  checkpoints: [...(employerDutiesTopic.body.checkpoints ?? [])],
  documents: [...(employerDutiesTopic.body.documents ?? [])],
  sources: [...employerDutiesTopic.body.sources],
}
