import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { LegalNodeGuide } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"

import type { LegalMapTopicBody } from "./principle-legality"

const kpaSourceReference = {
  kind: "official-source",
  sourceId: "eli-kpa",
} as const

type StudyLoopBody = LegalMapTopicBody

export const studyLoopTopic: KnowledgeUnit<StudyLoopBody> = defineKnowledgeUnit(
  {
    id: "map-topic:study-loop",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "study-loop" },
    },
    summary:
      "Для кожної гілки пройди один і той самий цикл: структура статей, словник понять, один анонімізований документ, власна матриця умов і коротке повторення.",
    claims: [
      {
        id: "study-cycle",
        kind: "practical-inference",
        text: "Навчальний цикл пов’язує факт, поняття, норму, докази, дію, строк, наслідок і засіб контролю, але не замінює окрему правову перевірку.",
        basis: [{ reference: kpaSourceReference, locator: "learning aid" }],
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
      title: "Тижневий цикл навчання",
      polish: "przepis → przykład → dokument → powtórka",
      sources: [],
      guide: {
        introduction: [
          "Повне розуміння адміністративної справи виникає з повторюваного зв’язку між фактом, юридичним поняттям, нормою, передумовами, доказами, дією, строком, наслідком і засобом контролю.",
        ],
        regulated: [
          "Ця структура систематизує матеріальне право і процедуру, не змішуючи право на pobyt, законність перебування, право на працю та процесуальний статус заяви.",
        ],
        appliesWhen: [
          "Для аналізу статті, документа, wezwania, decyzji, хронології справи або нової фактичної зміни після подання.",
        ],
        conditions: [
          "Кожен висновок має визначену дату правового стану, офіційне джерело, конкретну норму й факти, до яких вона застосовується.",
          "Кожна матеріальна передумова має окремий доказ, період і оцінку суперечностей; кожна процесуальна дія має строк і правовий наслідок.",
        ],
        exceptions: [
          "Схема не є механічним алгоритмом результату: оціночні поняття, доказові суперечності, lex specialis і зміни фактів можуть вимагати окремого тлумачення.",
        ],
        consequences: [
          "Структурований аналіз відділяє дефект форми від дефекту матеріальної умови, показує відсутній доказ і дозволяє правильно класифікувати наступну процесуальну дію.",
        ],
        procedure: [
          "Цикл складається з фіксації фактів і дат, визначення предмета та lex specialis, читання норми по елементах, доказової матриці, хронології doręczeń, оцінки наслідку й належного засобу контролю.",
        ],
        foreignersContext: [
          "У легалізації cudzoziemców один фактичний пакет часто одночасно стосується KPA, ustawy o cudzoziemcach і правил праці. Розділення цих шарів пояснює, чому той самий документ може бути істотним для одного питання й нейтральним для іншого.",
        ],
      } satisfies LegalNodeGuide,
      steps: [
        "Обери один вузол карти.",
        "Прочитай 3–8 пов’язаних статей у ELI.",
        "Склади словник термінів власними словами.",
        "Розбери один документ або модельний кейс.",
        "Додай помилки й питання до карти.",
        "Через 7 днів повтори без підказок.",
      ],
    },
  }
)

export default studyLoopTopic

export const studyLoopMapNode: LegalNode = {
  id: "study-loop",
  title: studyLoopTopic.body.title,
  polish: studyLoopTopic.body.polish,
  summary: studyLoopTopic.summary,
  steps: [...(studyLoopTopic.body.steps ?? [])],
  sources: [...studyLoopTopic.body.sources],
}
