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
type DelegationBody = LegalMapTopicBody

export const delegationTopic: KnowledgeUnit<DelegationBody> =
  defineKnowledgeUnit({
    id: "map-topic:delegation",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "delegation" },
    },
    summary:
      "Стосується працівника іноземного роботодавця, тимчасово направленого до Польщі в межах transgranicznego świadczenia usług.",
    claims: [
      {
        id: "delegation-real-model",
        kind: "requires-verification",
        text: workLaw.text`Delegowanie вимагає реального трудового зв’язку з podmiotem zagranicznym, тимчасового направлення та конкретної мети за ${workLaw.articleRange("40", "44", { start: "art. 40", end: "44" })}; назва договору сама по собі не визначає режим.`,
        basis: [{ reference: workReference, locator: "Art. 40–44" }],
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
      title: "Delegowanie",
      polish: workLaw.text`${workLaw.articleRange("40", "44", { start: "art. 40", end: "44" })}`,
      sources: [mapTopicSources.work],
      guide: {
        introduction: [
          "Delegowanie означає тимчасове направлення до Польщі працівника podmiotu zagranicznego, який зазвичай працює для цього podmiotu поза Польщею. Це не модель найму через польського роботодавця і не саме лише відрядження, назване так у договорі.",
          workLaw.text`${workLaw.article("40", "Art. 40")} розрізняє delegowanie до powiązanego podmiotu, виконання usługi eksportowej та іншу тимчасову мету; кожен варіант має власну właściwość wojewody й документальну основу.`,
        ],
        regulated: [
          workLaw.text`${workLaw.articleRange("40", "44", { start: "Art. 40", end: "44" })} ustawy z 20.03.2025 регулюють види delegowania, умови zezwolenia, зміст рішення та zwolnienia.`,
          "Ustawa z 10.06.2016 o delegowaniu pracowników w ramach świadczenia usług визначає мінімальні польські warunki zatrudnienia, обов'язки informacyjne та контроль PIP.",
          "Rozporządzenie Dz.U. 2025 poz. 1629 вимагає доказів statusu podmiotu zagranicznego, zatrudnienia za granicą, powiązań, umowy o usługę та інших обставин delegowania.",
        ],
        appliesWhen: [
          "Режим застосовується, коли cudzoziemiec залишається працівником podmiotu zagranicznego, реально працює для нього поза Польщею і лише тимчасово направляється до виконання праці в Польщі.",
          "Для usługi eksportowej podmiot zagraniczny тимчасово й оказійно надає послугу в Польщі без ведення тут działalności gospodarczej в розумінні Prawa przedsiębiorców.",
        ],
        conditions: [
          "Праця повинна відповідати мінімальним польським warunkom zatrudnienia, а wynagrodzenie для zezwolenia не може бути нижчим за 70% актуального przeciętnego miesięcznego wynagrodzenia у відповідному województwie.",
          "Podmiot zagraniczny вказує особу в Польщі, яка має документи й представляє його перед wojewodą та контрольними органами.",
          "Фактичний трудовий зв'язок із podmiotem zagranicznym, тимчасовість і конкретна мета delegowania повинні існувати не лише в умові, а й у реальній організації праці.",
        ],
        exceptions: [
          workLaw.text`${workLaw.article("44", "art. 44")} pkt 1 звільняє від zezwolenia працівника, законно zatrudnionego й зазвичай працюючого в іншій державі EOG, тимчасово направленого цим роботодавцем для świadczenia usług у Польщі.`,
          workLaw.text`${workLaw.article("44", "art. 44")} передбачає також короткі звільнення до 30 днів для delegowania до powiązanego podmiotu в календарному році та до 30 днів у 180-денному періоді для визначеної іншої мети.`,
        ],
        consequences: [
          "Якщо podmiot zagraniczny не є реальним роботодавцем або робота не має тимчасового характеру, орган може відмовити у zezwoleniu або контроль може встановити іншу фактичну модель.",
          "Порушення польських warunków zatrudnienia, повідомлень PIP або умов zezwolenia створює відповідальність незалежно від того, яке право обрано в закордонній umowie.",
        ],
        procedure: [
          "Podmiot zagraniczny подає електронний wniosek про zezwolenie до wojewody, визначеного за місцем podmiotu powiązanego, odbiorcy usługi або головним місцем праці.",
          workLaw.text`До заяви додаються реєстровий документ podmiotu, паспорт, докази zatrudnienia і роботи поза Польщею, документи powiązań або umowa usługi та докази умов ${workLaw.article("41", "art. 41")}.`,
          "Окремо виконуються обов'язки за ustawą o delegowaniu pracowników, включно з повідомленням PIP і наявністю документів для контролю.",
        ],
        foreignersContext: [
          "Cudzoziemiec зберігає трудовий зв'язок із закордонним роботодавцем, але під час роботи в Польщі користується визначеним ядром польських warunków zatrudnienia.",
          workLaw.text`Документи powiązania spółek підтверджують лише один можливий маршрут ${workLaw.article("40", "art. 40")} ust. 1 pkt 1; вони не замінюють доказів реального zatrudnienia за кордоном, тимчасовості та фактичної мети направлення.`,
        ],
      } satisfies LegalNodeGuide,
    },
  })

export default delegationTopic

export const delegationMapNode: LegalNode = {
  id: "delegation",
  title: delegationTopic.body.title,
  polish: delegationTopic.body.polish,
  summary: delegationTopic.summary,
  sources: [...delegationTopic.body.sources],
}
