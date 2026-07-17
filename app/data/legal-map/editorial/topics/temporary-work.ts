import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { mapTopicSources, workLaw } from "../authoring"
import type { LegalNodeGuide } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"
import type { LegalMapTopicBody } from "./principle-legality"

const temporaryReference = {
  kind: "external",
  url: "https://eli.gov.pl/eli/DU/2025/236/ogl",
} as const
type TemporaryWorkBody = LegalMapTopicBody

export const temporaryWorkTopic: KnowledgeUnit<TemporaryWorkBody> =
  defineKnowledgeUnit({
    id: "map-topic:temporary-work",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "temporary-work" },
    },
    summary:
      "Працівника наймає agencja pracy tymczasowej, але роботу він виконує на користь і під керівництвом pracodawcy użytkownika. Обидва суб’єкти мають визначені законом ролі.",
    claims: [
      {
        id: "temporary-work-triangle",
        kind: "requires-verification",
        text: "Praca tymczasowa має тристоронню структуру й повинна бути відображена в документах легалізації; назва outsourcing не замінює фактичну модель.",
        basis: [
          {
            reference: temporaryReference,
            locator: "Ustawa o zatrudnianiu pracowników tymczasowych",
          },
        ],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "draft",
      language: "uk",
      legalStateDate: "2026-07-14",
      verifiedAt: "2026-07-14",
    },
    body: {
      title: "Praca tymczasowa",
      polish: "agencja — pracownik tymczasowy — pracodawca użytkownik",
      sources: [
        mapTopicSources.temporaryWork,
        mapTopicSources.labourMarket,
        mapTopicSources.work,
      ],
      guide: {
        introduction: [
          "Praca tymczasowa має тристоронню структуру: agencja pracy tymczasowej zatrudnia або укладає цивільний договір із працівником, направляє його до pracodawcy użytkownika, а цей користувач визначає завдання й контролює їх виконання.",
          "Саме законне розділення ролей відрізняє pracę tymczasową від звичайної послуги результату. Agencja є podmiotem powierzającym pracę cudzoziemcowi, але щоденна праця виконується для іншого названого podmiotu.",
        ],
        regulated: [
          "Ustawa o zatrudnianiu pracowników tymczasowych визначає допустимі zadania tymczasowe, ролі agencji і pracodawcy użytkownika, письмові uzgodnienia, BHP, równe traktowanie та часові ліміти.",
          "Ustawa z 20.03.2025 вимагає, щоб при kierowaniu cudzoziemca до іншого podmiotu він мав umowę з agencją pracy tymczasowej, а pracodawca użytkownik був зазначений у zezwoleniu, sezonowym zezwoleniu або oświadczeniu.",
          "Ustawa o rynku pracy i służbach zatrudnienia регулює wpis agencji do KRAZ та законність świadczenia usługi pracy tymczasowej.",
        ],
        appliesWhen: [
          "Модель застосовується, коли podmiot потребує працівника для zadań tymczasowych і фактично організовує його щоденну роботу як pracodawca użytkownik, а формальним роботодавцем або контрагентом працівника є agencja.",
          "Для cudzoziemca модель повинна бути відображена в документі легалізації праці; не можна приховувати pracodawcę użytkownika під umową outsourcingową.",
        ],
        conditions: [
          "Agencja повинна мати чинний wpis do KRAZ і право świadczenia pracy tymczasowej, а сторони письмово узгоджують вид роботи, кваліфікації, період, час і місце.",
          "Pracodawca użytkownik виконує законні обов'язки щодо BHP, обліку часу, організації праці та рівного traktowania, тоді як agencja залишається podmiotem zatrudniającym.",
          "Загальний ліміт для одного pracodawcy użytkownika становить 18 місяців у 36 послідовних місяцях, із окремим режимом для заміни відсутнього працівника.",
        ],
        exceptions: [
          "Не кожна робота на території клієнта є pracą tymczasową: у справжній usłudze outsourcingowej виконавець сам організовує людей і відповідає перед клієнтом за процес або результат.",
          "Ustawa виключає окремі види робіт із pracy tymczasowej, зокрема особливо небезпечні та певні роботи після zwolnienia pracownika stałego; сам wpis agencji не усуває цих заборон.",
        ],
        consequences: [
          "Kierowanie людей без належного wpisu або поза ustawowym режимом може бути визнане незаконним świadczeniem pracy tymczasowej та призвести до відповідальності agencji й podmiotu користувача.",
          "Для cudzoziemca відсутність pracodawcy użytkownika в документі або фактична праця для іншого користувача означає невідповідність умов легалізації.",
        ],
        procedure: [
          "Agencja й pracodawca użytkownik письмово узгоджують параметри kierowania, після чого agencja оформлює відносини з працівником і передає йому інформацію про користувача та умови.",
          "Agencja подає właściwy wniosek або oświadczenie, додаючи документ pracodawcy użytkownika про узгодження skierowania, та отримує документ із відкрито зазначеним користувачем.",
          workLaw.text`Під час роботи обидва podmioty виконують власні обов'язки, а періоди pracy tymczasowej обліковуються для ліміту ${workLaw.article("20", "art. 20")}.`,
        ],
        foreignersContext: [
          "У dokumentach cudzoziemca повинні узгоджуватися agencja, pracodawca użytkownik, місце, stanowisko, час, wynagrodzenie і фактичний період skierowania.",
          "Якщо щоденні polecenia, графік і контроль походять від клієнта, орган може оцінювати модель як pracę tymczasową незалежно від назви umowy між компаніями.",
        ],
      } satisfies LegalNodeGuide,
      why: "Якщо інша компанія фактично щоденно керує людьми, модель може бути працею tymczasową, навіть якщо договір названо outsourcingiem.",
      checkpoints: [
        "Чи podmiot має право діяти як agencja?",
        "Хто визначає щоденні завдання й контролює їх?",
        "Хто є pracodawcą użytkownikiem?",
        "Чи він зазначений у потрібному документі?",
      ],
      related: ["outsourcing-case", "stay-work"],
    },
  })

export default temporaryWorkTopic

export const temporaryWorkMapNode: LegalNode = {
  id: "temporary-work",
  title: temporaryWorkTopic.body.title,
  polish: temporaryWorkTopic.body.polish,
  summary: temporaryWorkTopic.summary,
  why: temporaryWorkTopic.body.why,
  checkpoints: [...(temporaryWorkTopic.body.checkpoints ?? [])],
  sources: [...temporaryWorkTopic.body.sources],
  related: [...(temporaryWorkTopic.body.related ?? [])],
}
