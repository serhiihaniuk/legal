import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { LegalNodeGuide } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"

import { kpaLaw, mapTopicSources } from "../authoring"
import type { LegalMapTopicBody } from "./principle-legality"

const kpaSourceReference = {
  kind: "official-source",
  sourceId: "eli-kpa",
} as const

const edeliveryReference = {
  kind: "external",
  url: "https://www.gov.pl/web/e-doreczenia",
} as const

type DeadlinesDeliveryBody = LegalMapTopicBody

export const deadlinesDeliveryTopic: KnowledgeUnit<DeadlinesDeliveryBody> =
  defineKnowledgeUnit({
    id: "map-topic:deadlines-delivery",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "deadlines-delivery" },
    },
    summary:
      "Спочатку встанови юридичну дату вручення, а вже потім рахуй строк. Awizo, e-Doręczenia, представник і зміна адреси можуть змінити результат.",
    claims: [
      {
        id: "delivery-starts-time",
        kind: "requires-verification",
        text: "Юридична дата skutecznego doręczenia визначається до обчислення процесуального строку.",
        basis: [
          { reference: kpaSourceReference, locator: "Art. 39–60" },
          { reference: edeliveryReference, locator: "e-Doręczenia" },
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
      title: "Doręczenia і строки",
      polish: kpaLaw.text`${kpaLaw.articleRange("39", "60", { start: "art. 39", end: "60" })} KPA`,
      sources: [mapTopicSources.kpa, mapTopicSources.edelivery],
      guide: {
        introduction: [
          kpaLaw.text`${kpaLaw.articleRange("39", "49b", { start: "Art. 39", end: "49b" })} KPA визначають doręczenia, а ${kpaLaw.articleRange("57", "60", { start: "art. 57", end: "60" })} KPA — обчислення і відновлення процесуальних строків. Момент skutecznego doręczenia часто запускає строк на дію або оскарження.`,
        ],
        regulated: [
          "Електронне, гібридне й паперове вручення, вручення представнику, awizo і fikcja doręczenia, обчислення днів, тижнів, місяців і років, przywrócenie terminu.",
        ],
        appliesWhen: [
          "При wezwaniach, decyzjach, postanowieniach, odwołaniach, zażaleniach та будь-якій дії, для якої закон визначає строк від doręczenia.",
        ],
        conditions: [
          kpaLaw.text`День події, що запускає строк, не включається; кінець строку визначається за ${kpaLaw.article("57", "art. 57")} KPA з урахуванням неробочих днів.`,
          kpaLaw.text`При awizo за ${kpaLaw.article("44", "art. 44")} KPA відправлення зберігається 14 днів, а за невручення вважається доставленим в останній день цього періоду після належних повідомлень.`,
          kpaLaw.text`Przywrócenie terminu за ${kpaLaw.article("58", "art. 58")} KPA вимагає uprawdopodobnienia braku winy, заяви протягом семи днів від припинення перешкоди та одночасного виконання пропущеної дії.`,
        ],
        exceptions: [
          "Семиденний строк на саме przywrócenie terminu не підлягає відновленню.",
          "Вручення стороні замість установленого pełnomocnika може бути неефективним; точний наслідок залежить від обставин і належного повідомлення органу про представництво.",
        ],
        consequences: [
          kpaLaw.text`Ефективне doręczenie запускає строк; пропуск може зробити засіб недопустимим. Саме подання заяви про відновлення не завжди зупиняє виконання, але organ може його зупинити за ${kpaLaw.article("60", "art. 60")} KPA.`,
        ],
        procedure: [
          "Хронологія містить спосіб відправлення, адресу або skrzynkę, перше й повторне awizo, фактичне отримання чи fikcję doręczenia, перший і останній день строку та дату вчиненої дії.",
        ],
        foreignersContext: [
          "Зміна адреси, виїзд з Польщі та представник у Польщі безпосередньо впливають на skuteczność doręczeń. У справах cudzoziemców пропущене wezwanie може призвести до залишення заяви без розгляду або рішення на наявному матеріалі — залежно від виду вимоги.",
        ],
      } satisfies LegalNodeGuide,
      why: "Навіть правильна відповідь, подана після строку, може не захистити справу. З іншого боку, неправильне вручення може означати, що строк ще не почався.",
      checkpoints: [
        "Кому й коли юридично вручено лист?",
        "Чи діє фікція doręczenia?",
        "Строк у днях, тижнях чи місяцях?",
        "Чи останній день є вихідним?",
      ],
      steps: [
        "Збережи kopertę/UPO/доказ e-Doręczenia.",
        kpaLaw.text`Визнач дату вручення за ${kpaLaw.articleRange("39", "49b", { start: "art. 39", end: "49b" })}.`,
        kpaLaw.text`Порахуй строк за ${kpaLaw.article("57", "art. 57")}.`,
        kpaLaw.text`Якщо пропущено без вини — перевір ${kpaLaw.articleRange("58", "60", { start: "art. 58", end: "60" })}.`,
      ],
      documents: [
        "конверт і awizo",
        "UPO/UPP",
        "підтвердження e-Doręczenia",
        "доказ перешкоди при przywróceniu terminu",
      ],
    },
  })

export default deadlinesDeliveryTopic

export const deadlinesDeliveryMapNode: LegalNode = {
  id: "deadlines-delivery",
  title: deadlinesDeliveryTopic.body.title,
  polish: deadlinesDeliveryTopic.body.polish,
  summary: deadlinesDeliveryTopic.summary,
  why: deadlinesDeliveryTopic.body.why,
  checkpoints: [...(deadlinesDeliveryTopic.body.checkpoints ?? [])],
  steps: [...(deadlinesDeliveryTopic.body.steps ?? [])],
  documents: [...(deadlinesDeliveryTopic.body.documents ?? [])],
  sources: [...deadlinesDeliveryTopic.body.sources],
}
