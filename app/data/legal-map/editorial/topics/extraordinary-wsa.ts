import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { LegalNodeGuide } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"

import { mapTopicSources } from "../authoring"
import type { LegalMapTopicBody } from "./principle-legality"

const kpaSourceReference = {
  kind: "official-source",
  sourceId: "eli-kpa",
} as const

const ppsaSourceReference = {
  kind: "official-source",
  sourceId: "eli-ppsa",
} as const

const nsaReference = {
  kind: "external",
  url: "https://orzeczenia.nsa.gov.pl/cbo/query",
} as const

type ExtraordinaryWsaBody = LegalMapTopicBody

export const extraordinaryWsaTopic: KnowledgeUnit<ExtraordinaryWsaBody> =
  defineKnowledgeUnit({
    id: "map-topic:extraordinary-wsa",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "extraordinary-wsa" },
    },
    summary:
      "Не плутай odwołanie з wznowieniem, stwierdzeniem nieważności та skargą do WSA. Кожен механізм має іншу мету й підстави.",
    claims: [
      {
        id: "separate-control-modes",
        kind: "requires-verification",
        text: "Надзвичайні режими та судовий контроль не є додатковою третьою інстанцією і мають різні законні передумови.",
        basis: [
          { reference: kpaSourceReference, locator: "Art. 145–159" },
          { reference: ppsaSourceReference, locator: "PPSA" },
          { reference: nsaReference, locator: "official case-law database" },
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
      title: "Після остаточного рішення",
      polish: "tryby nadzwyczajne i kontrola WSA",
      sources: [mapTopicSources.kpa, mapTopicSources.ppsa, mapTopicSources.nsa],
      guide: {
        introduction: [
          "Після остаточної decyzji звичайна інстанційна дорога завершується. Далі можливі різні, взаємно не тотожні режими: wznowienie, stwierdzenie nieważności, інші способи зміни остаточного рішення за KPA та skarga do WSA за PPSA.",
        ],
        regulated: [
          "KPA регулює надзвичайне адміністративне усунення визначених вад остаточного рішення, а PPSA — зовнішній судовий контроль законності діяльності адміністрації.",
        ],
        appliesWhen: [
          "Коли decyzja є ostateczna, а виявлена проблема стосується закритої підстави надзвичайного режиму або законності рішення, бездіяльності чи затягування.",
        ],
        conditions: [
          "Кожен режим має окремий предмет: wznowienie стосується переважно дефектів первинного провадження, nieważność — найтяжчих вад самого рішення, WSA — законності оскарженого акту або бездіяльності.",
          "Наявність негативного результату або нового документа після справи сама по собі не створює підстави надзвичайного перегляду.",
        ],
        exceptions: [
          "Надзвичайні режими не є додатковою третьою інстанцією та не служать повторній вільній оцінці тих самих аргументів поза законними передумовами.",
        ],
        consequences: [
          "Правильно обраний режим може привести до нового адміністративного провадження, stwierdzenia nieważności, скасування акту судом або зобов’язання organu діяти; помилковий режим завершується відмовою чи недопустимістю.",
        ],
        procedure: [
          "Вада класифікується за моментом виникнення, видом акту, остаточністю, строком, компетентним органом, наслідком, якого вимагає сторона, та можливістю судового контролю.",
        ],
        foreignersContext: [
          "У справах pobytowych зміна роботи, доходу або сімейної ситуації після остаточного рішення зазвичай є новим фактичним станом, а не автоматично підставою wznowienia чи nieważności. Значення має те, чи факт або доказ існував на дату первинного рішення та чи входить до законного каталогу підстав.",
        ],
      } satisfies LegalNodeGuide,
      why: "Звичайне odwołanie контролює неостаточне рішення. Надзвичайні режими усувають лише спеціальні вади остаточних рішень, а WSA контролює законність діяльності адміністрації.",
      checkpoints: [
        "Чи рішення вже остаточне?",
        "Є нова спеціальна обставина чи тяжка юридична вада?",
        "Чи вичерпано адміністративний засіб?",
        "Який строк до WSA?",
      ],
    },
  })

export default extraordinaryWsaTopic

export const extraordinaryWsaMapNode: LegalNode = {
  id: "extraordinary-wsa",
  title: extraordinaryWsaTopic.body.title,
  polish: extraordinaryWsaTopic.body.polish,
  summary: extraordinaryWsaTopic.summary,
  why: extraordinaryWsaTopic.body.why,
  checkpoints: [...(extraordinaryWsaTopic.body.checkpoints ?? [])],
  sources: [...extraordinaryWsaTopic.body.sources],
}
