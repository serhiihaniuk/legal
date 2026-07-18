import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { mapTopicSources, workLaw } from "../authoring"
import type { LegalNodeGuide } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"
import type { LegalMapTopicBody } from "./principle-legality"

const aliensReference = {
  kind: "official-source",
  sourceId: "eli-ustawa-o-cudzoziemcach",
} as const
type ForeignDocumentsBody = LegalMapTopicBody

export const foreignDocumentsTopic: KnowledgeUnit<ForeignDocumentsBody> =
  defineKnowledgeUnit({
    id: "map-topic:foreign-documents",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "foreign-documents" },
    },
    summary:
      "Окремо перевір форму, справжність, переклад присяжним перекладачем, apostille/legalizację та актуальність документа. Вимоги залежать від виду документа й міжнародних правил.",
    claims: [
      {
        id: "foreign-document-form",
        kind: "requires-verification",
        text: "Іноземний документ потрібно оцінювати окремо за змістом, походженням, перекладом, автентифікацією та актуальністю; жоден із цих елементів автоматично не доводить усі факти.",
        basis: [
          { reference: aliensReference, locator: "documentary requirements" },
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
      title: "Документи з-за кордону",
      polish: "tłumaczenie, apostille, legalizacja",
      sources: [mapTopicSources.aliens, mapTopicSources.work],
      guide: {
        introduction: [
          "Документ, виданий за кордоном, повинен бути придатним для використання в польській справі: organ має розуміти його зміст, встановити походження та оцінити, чи документ чинний і стосується відповідної особи або факту.",
          "Tłumaczenie, apostille і legalizacja виконують різні функції. Переклад робить зміст доступним польською мовою, а apostille або legalizacja підтверджують автентичність підпису, статус підписанта та печатку, але не істинність усіх фактів у документі.",
        ],
        regulated: [
          workLaw.text`Вимогу перекладу визначає конкретна процедура. Для zezwoleń na pracę й oświadczeń ${workLaw.external("§ 8", "https://eli.gov.pl/eli/DU/2025/1629/ogl")} ust. 8 rozporządzenia Dz.U. 2025 poz. 1629 вимагає tłumaczenia przysięgłego документів іноземною мовою, крім dokumentów podróży.`,
          "Apostille застосовується між державами-учасницями Konwencji haskiej z 1961 r., якщо документ належить до її сфери й не діє звільнення за міжнародним договором або правом ЄС.",
          "Для інших держав або документів може застосовуватися legalizacja через właściwy organ держави походження та польську placówkę konsularną.",
        ],
        appliesWhen: [
          "Режим застосовується до aktów stanu cywilnego, zaświadczeń, дипломів, rejestrów spółek, pełnomocnictw та інших urzędowych або приватних матеріалів, створених за межами Польщі.",
          "Обсяг формальностей залежить від країни, виду документа, organu, мети використання та чинних міжнародних або європейських правил.",
        ],
        conditions: [
          "Документ повинен походити від компетентного органу або особи, містити дані, що дозволяють ідентифікувати його, і бути чинним або актуальним для досліджуваного періоду.",
          "Tłumaczenie przysięgłe має охоплювати істотний зміст, печатки, adnotacje й елементи, необхідні для зіставлення з оригіналом.",
          "Apostille або legalizacja приєднуються до належного оригіналу чи urzędowego odpisu; звичайна приватна копія не набуває через це сили оригіналу.",
        ],
        exceptions: [
          "Документи з окремих держав або окремих категорій можуть бути звільнені від legalizacji чи apostille міжнародним договором, Konwencją CIEC або правилами ЄС.",
          workLaw.text`Dokument podróży у процедурах праці не перекладається за правилом ${workLaw.external("§ 8", "https://eli.gov.pl/eli/DU/2025/1629/ogl")} ust. 8 Dz.U. 2025 poz. 1629, але organ використовує його для ідентифікації та може вимагати читабельного cyfrowego odwzorowania всіх заповнених сторінок.`,
        ],
        consequences: [
          "Відсутність потрібного перекладу унеможливлює оцінку змісту, а відсутність wymaganej apostille або legalizacji може поставити під сумнів urzędowe pochodzenie документа.",
          "Розбіжності в транслітерації імен, датах, назвах spółek або нумерації документів потребують пояснення й доказу, що матеріали стосуються тієї самої особи або podmiotu.",
        ],
        procedure: [
          "Спочатку отримується оригінал або właściwy urzędowy odpis у державі походження та встановлюється, чи діє zwolnienie, apostille або legalizacja.",
          "Після виконання wymogu uwierzytelnienia документ передається tłumaczowi przysięgłemu, якщо процедура вимагає польського перекладу.",
          "До польської справи подаються пов'язані між собою оригінал або odpis, apostille чи klauzula legalizacyjna та переклад із чітким зазначенням, до якого документа він належить.",
        ],
        foreignersContext: [
          "У sprawach pobytowych іноземні акти часто підтверджують pokrewieństwo, małżeństwo, освіту, стаж або корпоративні powiązania, тому їх формальна придатність безпосередньо впливає на доказ матеріальної умови.",
          "Корпоративний dokument з-за кордону може підтверджувати реєстровий статус і представництво spółki, але фактичну діяльність, delegowanie або виконання usługi підтверджують додаткові матеріали.",
        ],
      } satisfies LegalNodeGuide,
      checkpoints: [
        "Хто видав документ?",
        "Чи потрібен apostille або legalizacja?",
        "Чи потрібен переклад przysięgły?",
        "Чи дані узгоджені з польськими реєстрами?",
      ],
    },
  })

export default foreignDocumentsTopic

export const foreignDocumentsMapNode: LegalNode = {
  id: "foreign-documents",
  title: foreignDocumentsTopic.body.title,
  polish: foreignDocumentsTopic.body.polish,
  summary: foreignDocumentsTopic.summary,
  checkpoints: [...(foreignDocumentsTopic.body.checkpoints ?? [])],
  sources: [...foreignDocumentsTopic.body.sources],
}
