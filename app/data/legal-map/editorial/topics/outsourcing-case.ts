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
const outsourcingReference = {
  kind: "external",
  url: "https://www.senat.gov.pl/gfx/senat/userfiles/_public/k11/komisje/kp/75/2/odp._mrpips_03-04-2026.pdf",
} as const
type OutsourcingBody = LegalMapTopicBody

export const outsourcingCaseTopic: KnowledgeUnit<OutsourcingBody> =
  defineKnowledgeUnit({
    id: "map-topic:outsourcing-case",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "outsourcing-case" },
    },
    summary:
      "У законі немає однієї магічної договірної формули. Organ оцінює реальний предмет послуги, керівництво працею, відповідальність за результат, спосіб розрахунку та фактичну організацію.",
    claims: [
      {
        id: "outsourcing-follows-facts",
        kind: "requires-verification",
        text: workLaw.text`Кваліфікація outsourcing procesowy або прихованого kierowania до третьої особи залежить від фактичної організації, зокрема в контексті ${workLaw.article("13", "art. 13")} ust. 1 pkt 7.`,
        basis: [
          { reference: workReference, locator: "Art. 13 ust. 1 pkt 7" },
          {
            reference: outsourcingReference,
            locator: "stanowisko MRPiPS 03.04.2026",
          },
        ],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-07-14",
      verifiedAt: "2026-07-14",
    },
    body: {
      title: "Кейс: outsourcing procesowy чи працівники",
      polish: workLaw.text`${workLaw.article("13", "art. 13")} ust. 1 pkt 7 ustawy z 20.03.2025`,
      sources: [
        mapTopicSources.work,
        mapTopicSources.aliens,
        mapTopicSources.temporaryWork,
        mapTopicSources.outsourcing,
      ],
      guide: {
        introduction: [
          "Outsourcing procesowy є cywilnoprawną usługą, у якій зовнішній виконавець самостійно організовує переданий процес або функцію й відповідає перед замовником за узгоджений результат. Польське право не створює одного обов'язкового пункту договору, який автоматично підтверджує таку модель.",
          workLaw.text`Для легалізації праці ключовий ${workLaw.article("13", "art. 13")} ust. 1 pkt 7 ustawy z 20.03.2025: zezwolenia відмовляють, якщо роботу для третьої особи фактично доручив би podmiot, який не є законною agencją pracy tymczasowej. Тому organ порівнює договір із реальною організацією людей.`,
        ],
        regulated: [
          workLaw.text`${workLaw.article("13", "Art. 13")} ust. 1 pkt 7 регулює наслідок прихованого kierowania cudzoziemca до третьої особи поза законною pracą tymczasową.`,
          "Ustawa o zatrudnianiu pracowników tymczasowych визначає протилежну легальну модель: працівник agencji виконує zadania для й під керівництвом названого pracodawcy użytkownika.",
          "Практика PIP розрізняє outsourcing і pracę tymczasową насамперед за відсутністю прямого та сталого підпорядкування людей клієнту, самостійною організацією виконавця й оцінкою клієнтом результату, а не щоденної праці окремих осіб.",
        ],
        appliesWhen: [
          "Кваліфікація потрібна, коли працівники одного podmiotu виконують роботу на території або в процесі іншої компанії, особливо якщо клієнт надає обладнання, графіки, brygadzistów чи поточні polecenia.",
          "Вона має значення у sprawie o zezwolenie na pracę, pobyt czasowy i pracę, під час kontroli PIP та при оцінці того, хто фактично є pracodawcą użytkownikiem.",
        ],
        conditions: [
          "Ознаками procesowego outsourcingu є визначений процес або результат, власне керівництво виконавця, право виконавця добирати й замінювати персонал, його відповідальність за якість, вади, строки та повторне виконання.",
          "Rozliczenie за результат, етап, SLA або mierzalny wolumen підтримує модель послуги, якщо відповідає фактам; саме по собі формулювання faktury не вирішує кваліфікацію.",
          "Приміщення, інструменти, доступ до систем і правила BHP клієнта можуть бути необхідними для послуги, але не повинні перетворюватися на пряме й постійне kierownictwo над окремими працівниками виконавця.",
        ],
        exceptions: [
          "Координація доступу, BHP, безпеки, послідовності процесів або odbioru результату не тотожна pracodawczemu podporządkowaniu, якщо bieżące polecenia щодо способу праці надає власний координатор виконавця.",
          "Навіть детальні SLA, klauzule o samodzielności чи zakaz wydawania poleceń не захищають модель, якщо фактично клієнт розподіляє людей по змінах, оцінює їх індивідуально та керує щоденною працею.",
        ],
        consequences: [
          workLaw.text`Встановлення фактичного kierowania до третьої особи може призвести до odmowy zezwolenia за ${workLaw.article("13", "art. 13")} ust. 1 pkt 7 та до оцінки działalności як pracy tymczasowej без належного wpisu.`,
          "Суперечність між umową, fakturami, графіками, protokołami, poleceniami та свідченнями працівників зменшує доказову силу договору й може вплинути також на sprawy pobytowe cudzoziemców.",
        ],
        procedure: [
          "Organ або PIP встановлює предмет договору, реальний розподіл функцій, лінію kierownictwa, спосіб odbioru, відповідальність за вади та механізм wynagrodzenia.",
          "Документальний матеріал охоплює umowę główną, SLA, zamówienia, protokoły odbioru, reklamacje, faktury, графіки, інструкції координаторів, ewidencję czasu та реєстрові дані обох spółek.",
          "Фактична модель порівнюється з двома правовими конструкціями: самостійною usługą результату та ustawową pracą tymczasową з agencją і pracodawcą użytkownikiem.",
        ],
        foreignersContext: [
          "Для cudzoziemca вирішальне значення має podmiot, який реально доручає й організовує працю. Якщо ним є третя компанія, документ на користь формального wykonawcy може не охоплювати фактичну роботу.",
          "Доказ powiązań між spółkami пояснює корпоративний зв'язок, але не доводить procesowego outsourcingu; необхідні окремі докази самостійного керівництва виконавця та відповідальності за результат.",
        ],
      } satisfies LegalNodeGuide,
      why: "Outsourcing procesowy означає самостійну відповідальність виконавця за процес або результат. Надання «рук до праці» під керівництво іншого суб’єкта вказує на outsourcing pracowniczy/pracę tymczasową.",
      checkpoints: [
        "Предметом є результат/процес чи кількість людей?",
        "Хто добирає склад, графік і методи роботи?",
        "Хто дає щоденні polecenia та контролює дисципліну?",
        "Оплата за результат/KPI чи за headcount/godziny?",
        "Хто несе ризик wad, opóźnień і переробки?",
      ],
      steps: [
        "Прочитай предмет умови, SLA/KPI, odbiór і odpowiedzialność.",
        "Намалюй фактичну схему керівництва людьми.",
        "Порівняй umowę з графіками, invoices, protokołami й реальними poleceniami.",
        workLaw.text`Перевір ${workLaw.article("13", "art. 13")} ust. 1 pkt 7 і правила pracy tymczasowej.`,
        "Відповідай на wezwanie узгодженим пакетом доказів, а не одним пунктом договору.",
      ],
      documents: [
        "umowa між компаніями й додатки",
        "SLA/KPI та protokoły odbioru",
        "рахунки за результат",
        "регламенти й polecenia координатора виконавця",
        "графіки",
        "KRS/CRBR і схема powiązań",
        "докази фактичної відповідальності за якість",
      ],
      related: ["wezwanie", "evidence", "temporary-work"],
    },
  })

export default outsourcingCaseTopic

export const outsourcingCaseMapNode: LegalNode = {
  id: "outsourcing-case",
  title: outsourcingCaseTopic.body.title,
  polish: outsourcingCaseTopic.body.polish,
  summary: outsourcingCaseTopic.summary,
  why: outsourcingCaseTopic.body.why,
  checkpoints: [...(outsourcingCaseTopic.body.checkpoints ?? [])],
  steps: [...(outsourcingCaseTopic.body.steps ?? [])],
  documents: [...(outsourcingCaseTopic.body.documents ?? [])],
  sources: [...outsourcingCaseTopic.body.sources],
  related: [...(outsourcingCaseTopic.body.related ?? [])],
}
