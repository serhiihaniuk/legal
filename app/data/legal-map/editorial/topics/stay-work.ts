import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { foreignersLaw, mapTopicSources, residenceLaw } from "../authoring"
import type { LegalNodeGuide } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"

import type { LegalMapTopicBody } from "./principle-legality"

const aliensSourceReference = {
  kind: "official-source",
  sourceId: "eli-ustawa-o-cudzoziemcach",
} as const

type StayWorkBody = LegalMapTopicBody

export const stayWorkTopic: KnowledgeUnit<StayWorkBody> = defineKnowledgeUnit({
  id: "map-topic:stay-work",
  subject: {
    family: "map-topic",
    reference: { kind: "map-node", nodeId: "stay-work" },
  },
  summary: foreignersLaw.text`Єдиний дозвіл, у якому мета перебування випливає з роботи. Аналіз складається з позитивних умов ${foreignersLaw.article("114", "art. 114")}, odmowy wszczęcia ${foreignersLaw.article("116", "art. 116")}, відмов по суті ${foreignersLaw.articleRange("117", "117a", { start: "art. 117", end: "117a" })}, treści decyzji ${foreignersLaw.article("118", "art. 118")} та правил зміни/втрати роботи ${foreignersLaw.articleRange("119", "123", { start: "art. 119", end: "123" })}.`,
  claims: [
    {
      id: "work-stay-conditions",
      kind: "requires-verification",
      text: "Pobyt czasowy i praca поєднує мету перебування з фактичною працею, але межі рішення та звільнення від zezwolenia на працю потрібно читати окремо.",
      basis: [{ reference: aliensSourceReference, locator: "Art. 114–126" }],
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
    title: "Pobyt czasowy i praca",
    polish: foreignersLaw.text`${foreignersLaw.articleRange("114", "126", { start: "art. 114", end: "126" })}`,
    sources: [mapTopicSources.aliens, mapTopicSources.work],
    guide: {
      introduction: [
        "Pobyt czasowy i praca поєднує мету перебування з виконанням праці, але залишається zezwoleniem pobytowym, за яким заявником і стороною є cudzoziemiec.",
      ],
      regulated: [
        foreignersLaw.text`${foreignersLaw.articleRange("114", "126", { start: "Art. 114", end: "126" })} регулюють позитивні умови, odmowę wszczęcia, odmowę, treść zezwolenia, зміну, втрату роботи та обов’язки.`,
      ],
      appliesWhen: [
        "Праця має бути реальною метою pobytu понад три місяці, а ситуація не повинна належати до іншої спеціальної процедури або виключення.",
      ],
      conditions: [
        foreignersLaw.text`Organ перевіряє, зокрема, umowę/${residenceLaw.annex("1", "Załącznik nr 1")}, винагороду, страхування за ${foreignersLaw.article("114", "art. 114")} ust. 1 pkt 1, реальність podmiotu та відповідність фактичної організації праці заявленій моделі.`,
      ],
      exceptions: [
        foreignersLaw.text`Для osoby zwolnionej z obowiązku posiadania zezwolenia na pracę treść decyzji за ${foreignersLaw.article("118", "art. 118")} може не містити всіх умов прив’язки; вирішальним є конкретне rozstrzygnięcie.`,
      ],
      consequences: [
        "Позитивна decyzja надає pobyt на визначений строк і встановлює межі праці; втрата або зміна роботи може активувати повідомлення, зміну дозволу або нову заяву.",
      ],
      procedure: [
        "Заявник подає MOS, роботодавець електронно підписує właściwy załącznik, organ проводить formalne і dowodowe postępowanie та формулює decyzję.",
      ],
      foreignersContext: [
        foreignersLaw.text`Для osoby з UKR у 2026 році доступ до цієї процедури може випливати з ${foreignersLaw.external("art. 45", "https://eli.gov.pl/eli/DU/2026/203/ogl")} ustawy Dz.U. 2026 poz. 203, але status UKR і powiadomienie pozostają окремими питаннями до надання дозволу.`,
      ],
    } satisfies LegalNodeGuide,
    why: foreignersLaw.text`Назва процедури не означає, що кожна decyzja однаково прив’язана до роботодавця. Для особи, звільненої від zezwolenia na pracę, ${foreignersLaw.article("118", "art. 118")} може не вписувати конкретних умов — вирішальне rozstrzygnięcie, а не шаблон.`,
    checkpoints: [
      "Чи мета роботи обґрунтовує pobyt понад 3 місяці?",
      "Чи є страхування та мінімальна місячна винагорода?",
      "Хто реальний роботодавець і хто фактично керує працею?",
      "Чи podmiot веде реальну діяльність і має засоби виконувати обов’язки?",
      "Чи діє exemption від zezwolenia na pracę?",
      "Що саме записано в rozstrzygnięciu decyzji?",
    ],
    steps: [
      foreignersLaw.text`Розклади ${foreignersLaw.article("114", "art. 114")} на окремі умови й докази.`,
      "Перевір odmowę wszczęcia до аналізу merits.",
      "Зістав umowę, Załącznik nr 1 і фактичну організацію праці.",
      foreignersLaw.text`Оціни ризики ${foreignersLaw.articleRange("117", "117a", { start: "art. 117", end: "117a" })}, зокрема роботу на користь третьої особи.`,
      "Після decyzji окремо випиши її межі, obowiązki і тригери зміни.",
    ],
    documents: [
      "wniosek MOS",
      "Załącznik nr 1",
      "umowa o pracę",
      "паспорт і фото",
      "страхування/ZUS за потреби",
      "оплати",
      "докази реальної діяльності або представництва — якщо це спірна умова",
      "UPO та akta sprawy",
    ],
  },
})

export default stayWorkTopic

export const stayWorkMapNode: LegalNode = {
  id: "stay-work",
  title: stayWorkTopic.body.title,
  polish: stayWorkTopic.body.polish,
  summary: stayWorkTopic.summary,
  why: stayWorkTopic.body.why,
  checkpoints: [...(stayWorkTopic.body.checkpoints ?? [])],
  steps: [...(stayWorkTopic.body.steps ?? [])],
  documents: [...(stayWorkTopic.body.documents ?? [])],
  sources: [...stayWorkTopic.body.sources],
}
