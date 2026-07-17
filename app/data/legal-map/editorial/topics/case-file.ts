import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { kpaLaw, mapTopicSources } from "../authoring"
import type { LegalNodeGuide } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"
import type { LegalMapTopicBody } from "./principle-legality"

const kpaReference = { kind: "official-source", sourceId: "eli-kpa" } as const
type CaseFileBody = LegalMapTopicBody

export const caseFileTopic: KnowledgeUnit<CaseFileBody> = defineKnowledgeUnit({
  id: "map-topic:case-file",
  subject: {
    family: "map-topic",
    reference: { kind: "map-node", nodeId: "case-file" },
  },
  summary:
    "Сторона має право переглядати akta, робити нотатки й копії також після завершення справи, з передбаченими законом обмеженнями.",
  claims: [
    {
      id: "case-file-access",
      kind: "statute-text",
      text: kpaLaw.text`${kpaLaw.articleRange("73", "74a", { start: "art. 73", end: "74a" })} KPA регулюють доступ strony до akt, копій і документів в електронній формі з передбаченими винятками.`,
      basis: [{ reference: kpaReference, locator: "Art. 73–74a" }],
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
    title: "Akta sprawy і власна хронологія",
    polish: kpaLaw.text`${kpaLaw.articleRange("73", "74a", { start: "art. 73", end: "74a" })} KPA`,
    sources: [mapTopicSources.kpa],
    guide: {
      introduction: [
        "Akta sprawy — це офіційний набір матеріалів, на підставі якого organ встановлює факти й ухвалює рішення. Право доступу дозволяє стороні бачити не лише власні załączniki, а також листування organów, dane z rejestrów, notatki та інші dowody.",
        "Власна хронологія не замінює akt, але відтворює послідовність podania, doręczeń, wezwań, odpowiedzi, zmian stanu faktycznego й czynności organu, що необхідно для оцінки строків і повноти матеріалу.",
      ],
      regulated: [
        kpaLaw.text`${kpaLaw.article("73", "Art. 73")} KPA надає стороні право wglądu do akt, sporządzania notatek, kopii й odpisów також після завершення провадження та передбачає uwierzytelnione odpisy в обґрунтованих випадках.`,
        kpaLaw.text`${kpaLaw.article("74", "Art. 74")} KPA регулює виключення документів із доступу через ochronę informacji niejawnych або ważny interes państwowy та вимагає postanowienia при відмові.`,
        kpaLaw.text`${kpaLaw.article("74a", "Art. 74a")} поширює правила доступу на документи в електронній формі, а ${kpaLaw.article("10", "art. 10")} і ${kpaLaw.article("81", "art. 81")} пов'язують akta з правом сторони висловитися щодо dowodów.`,
      ],
      appliesWhen: [
        "Право доступу діє під час провадження і після його завершення, коли особа має статус strony або іншу прямо передбачену законом підставу.",
        "Ознайомлення особливо важливе перед відповіддю на wezwanie, перед decyzją, при підготовці odwołania та після отримання інформації, що organ самостійно здобув новий dowód.",
      ],
      conditions: [
        "Wniosek про доступ повинен дозволяти ідентифікувати sprawę та особу, яка реалізує право; представник підтверджує umocowanie.",
        "Kopie й нотатки повинні зберігати numerację та походження документа, щоб їх можна було співвіднести з aktami й późniejszym uzasadnieniem decyzji.",
        "Хронологія містить дату події, дату skutecznego doręczenia, автора, вид czynności, перелік załączników і процесуальний наслідок.",
      ],
      exceptions: [
        kpaLaw.text`Документи з informacjami niejawnymi та матеріали, виключені через ważny interes państwowy, не надаються в загальному режимі ${kpaLaw.article("73", "art. 73 KPA")}.`,
        "Право wglądu не означає право змінювати або вилучати матеріали; виправлення власної позиції відбувається через нове pismo, wniosek dowodowy або зауваження до конкретної czynności.",
      ],
      consequences: [
        "Akta показують, який матеріал organ реально мав на дату рішення; документ, підготовлений стороною, але не поданий або не включений до akt, не виконує тієї самої процесуальної функції.",
        "Bezpodstawna odmowa dostępu, відсутність можливості висловитися щодо dowodów або рішення на матеріалі поза aktami може становити порушення KPA й аргумент у środku zaskarżenia.",
      ],
      procedure: [
        kpaLaw.text`Organ організовує доступ у своїй siedzibie або за допомогою електронних засобів, дозволяє sporządzenie kopii та на вимогу видає uwierzytelnione odpisy за умов ${kpaLaw.article("73", "art. 73 § 2 KPA")}.`,
        "При відмові organ видає postanowienie, на яке przysługuje zażalenie; у ньому визначаються правова підстава й обсяг виключення.",
        "Після кожного доступу власний spis akt і хронологія доповнюються новими позиціями, щоб зберегти відповідність офіційній teczce.",
      ],
      foreignersContext: [
        "У sprawach cudzoziemców частина істотних даних надходить із PUP, Straży Granicznej, Policji, ZUS, KRS або інших проваджень; лише wgląd pokazuje, які саме відомості використав wojewoda.",
        "Для оцінки legalności pobytu й pracy хронологія повинна розділяти дату подання, дату UPO, дату doręczenia, фактичний початок роботи, зміни umowy та строки obowiązkowych powiadomień.",
      ],
    } satisfies LegalNodeGuide,
    why: "Без повного матеріалу неможливо зрозуміти, що organ уже знає, яких доказів бракує та на чому може побудувати рішення.",
    steps: [
      "Замов доступ до akt.",
      "Зроби індекс документів і хронологію.",
      "Познач документи organu та strony.",
      "Порівняй akta з переліком умов і wezwania.",
    ],
  },
})

export default caseFileTopic

export const caseFileMapNode: LegalNode = {
  id: "case-file",
  title: caseFileTopic.body.title,
  polish: caseFileTopic.body.polish,
  summary: caseFileTopic.summary,
  why: caseFileTopic.body.why,
  steps: [...(caseFileTopic.body.steps ?? [])],
  sources: [...caseFileTopic.body.sources],
}
