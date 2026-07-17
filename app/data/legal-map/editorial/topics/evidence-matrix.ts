import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { kpaLaw, mapTopicSources, workLaw } from "../authoring"
import type { LegalNodeGuide } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"
import type { LegalMapTopicBody } from "./principle-legality"

const kpaReference = { kind: "official-source", sourceId: "eli-kpa" } as const
type EvidenceMatrixBody = LegalMapTopicBody

export const evidenceMatrixTopic: KnowledgeUnit<EvidenceMatrixBody> =
  defineKnowledgeUnit({
    id: "map-topic:evidence-matrix",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "evidence-matrix" },
    },
    summary:
      "Формальний недолік заважає заяві отримати правильний хід. Матеріальна нестача означає, що не доведена умова дозволу. Наслідки й спосіб відповіді різні.",
    claims: [
      {
        id: "formal-vs-material",
        kind: "practical-inference",
        text: kpaLaw.text`Brak formalny і недоведення materialnej przesłanki мають різні правові функції; форму podania та wezwanie регулюють ${kpaLaw.articleRange("63", "64", { start: "art. 63", end: "64" })}, а доказування — ${kpaLaw.articleRange("77", "81", { start: "art. 77", end: "81" })} KPA.`,
        basis: [{ reference: kpaReference, locator: "Art. 63–64, 77–81" }],
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
      title: "Формальна й матеріальна повнота",
      polish: "brak formalny ≠ brak przesłanki",
      sources: [mapTopicSources.kpa, mapTopicSources.aliens],
      guide: {
        introduction: [
          "Brak formalny стосується здатності podania отримати належний процесуальний хід, тоді як brak materialny означає, що сторона не довела przesłanki потрібного права. Це різні дефекти з різною правовою підставою й різним наслідком.",
          "Формально повна заява може завершитися відмовою, якщо факти не виконують матеріальних умов. Натомість переконливі докази не усувають браку підпису, обов'язкового formularza чи іншої вимоги, яку закон визначає як формальну.",
        ],
        regulated: [
          workLaw.text`${kpaLaw.articleRange("63", "64", { start: "Art. 63", end: "64" })} KPA регулюють форму й мінімальний зміст podania та wezwanie do usunięcia braków, якщо подання не відповідає встановленим вимогам.`,
          "Матеріальні przesłanki й обов'язкові документи визначає ustawa szczególna, наприклад ustawa o cudzoziemcach або ustawa o powierzaniu pracy cudzoziemcom.",
          workLaw.text`${kpaLaw.article("7", "Art. 7")}, ${kpaLaw.article("77", "77")}, ${kpaLaw.article("79a", "79a")}, ${kpaLaw.article("80", "80")} і ${kpaLaw.article("81", "81")} KPA регулюють встановлення істотних фактів, вказання невиконаних przesłanek та оцінку доказового матеріалу.`,
        ],
        appliesWhen: [
          "Розмежування застосовується при кожному wezwaniu, залишенні podania без розгляду, odmowie wszczęcia та перед негативним рішенням по суті.",
          "Воно визначає, чи орган вимагає елемент, без якого podanie формально дефектне, чи доказ факту, від якого залежить spełnienie materialnej przesłanki.",
        ],
        conditions: [
          "Формальний наслідок повинен мати конкретну правову основу, чітко вказаний defect, спосіб його усунення, строк і pouczenie про наслідок невиконання.",
          "Матеріальна оцінка повинна називати przesłankę, факти та докази, яких бракує, і враховувати обов'язок organu розглянути весь матеріал.",
          "Один і той самий документ може бути обов'язковим załącznikiem і водночас доказом умови, але ці дві функції не слід змішувати.",
        ],
        exceptions: [
          workLaw.text`Organ не може використовувати ${kpaLaw.article("64", "art. 64 § 2")} KPA для автоматичного залишення без розгляду лише тому, що доказ матеріальної умови є недостатнім, якщо спеціальний закон не надає йому формального характеру.`,
          "Uzupełnienie formalne не гарантує позитивного рішення: після надання відсутнього елемента organ переходить до merytorycznej oceny przesłanek.",
        ],
        consequences: [
          "Неусунення formalnego braku у встановленому режимі може призвести до pozostawienia podania bez rozpoznania, без вирішення матеріального права.",
          "Недоведення materialnej przesłanki веде до рішення по суті — зазвичай odmowy — яке повинно містити ustalenia faktyczne, ocenę dowodów і uzasadnienie prawne.",
        ],
        procedure: [
          "Wezwanie формально ідентифікується за вказаною правовою підставою, żądanym działaniem та передбаченим наслідком.",
          "При braku formalnym сторона подає відсутній елемент у визначеній формі; при braku materialnym подає dowody, wyjaśnienia або stanowisko щодо przesłanki.",
          "У aktach зберігається доказ doręczenia wezwania, treść odpowiedzi, załączniki та підтвердження своєчасного подання.",
        ],
        foreignersContext: [
          "У sprawach pobytowych wezwanie часто поєднує formalne uzupełnienie з матеріальними доказами, тому кожен пункт листа може мати іншу правову функцію й наслідок.",
          "Наприклад, відсутність підпису на належному załączniku може бути formalnym brakiem, а відсутність доказу реальної діяльності роботодавця — недоведенням materialnej przesłanki.",
        ],
      } satisfies LegalNodeGuide,
      related: ["initiation", "evidence"],
    },
  })

export default evidenceMatrixTopic

export const evidenceMatrixMapNode: LegalNode = {
  id: "evidence-matrix",
  title: evidenceMatrixTopic.body.title,
  polish: evidenceMatrixTopic.body.polish,
  summary: evidenceMatrixTopic.summary,
  sources: [...evidenceMatrixTopic.body.sources],
  related: [...(evidenceMatrixTopic.body.related ?? [])],
}
