import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import { kpaLaw, mapTopicSources, workLaw } from "../authoring"
import type { LegalNodeGuide } from "~/data/legal-map/node-guide-types"
import type { LegalNode } from "~/data/shared/legal-types"
import type { LegalMapTopicBody } from "./principle-legality"

const kpaReference = { kind: "official-source", sourceId: "eli-kpa" } as const
type DocumentTypesBody = LegalMapTopicBody

export const documentTypesTopic: KnowledgeUnit<DocumentTypesBody> =
  defineKnowledgeUnit({
    id: "map-topic:document-types",
    subject: {
      family: "map-topic",
      reference: { kind: "map-node", nodeId: "document-types" },
    },
    summary:
      "Використовуй не лише додатки з checklisty. KPA допускає все законне, що допомагає встановити факт: документи, реєстри, пояснення, свідків, експерта, oględziny.",
    claims: [
      {
        id: "open-evidence-catalog",
        kind: "statute-text",
        text: kpaLaw.text`${kpaLaw.article("75", "art. 75")} KPA встановлює відкритий katalog dowodów, а сила документа оцінюється в межах ${kpaLaw.article("76", "art. 76")} та всього матеріалу за ${kpaLaw.article("80", "art. 80")}.`,
        basis: [{ reference: kpaReference, locator: "Art. 75–81" }],
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
      title: "Типи доказів у справі",
      polish: "dokument urzędowy, prywatny, oświadczenie, rejestr",
      sources: [mapTopicSources.kpa, mapTopicSources.aliens],
      guide: {
        introduction: [
          "KPA не обмежує доказування закритим checklistem документів. Dowodem може бути все, що допомагає з'ясувати справу, не суперечить праву та стосується істотного факту: dokument urzędowy, dokument prywatny, дані rejestru, zeznania, opinia biegłego, oględziny або інший носій інформації.",
          "Вид доказу визначає не його назва, а походження, спосіб створення й те, яку саме обставину він здатний підтвердити.",
        ],
        regulated: [
          workLaw.text`${kpaLaw.article("75", "Art. 75")} KPA встановлює відкритий katalog dowodów, а ${kpaLaw.article("76", "art. 76")} — спеціальну силу dokumentu urzędowego в межах офіційно засвідченого.`,
          kpaLaw.text`${kpaLaw.article("76a", "Art. 76a")} регулює odpisy та копії документів, ${kpaLaw.article("78", "art. 78")} — wnioski dowodowe сторони, ${kpaLaw.article("80", "art. 80")} — оцінку всього матеріалу.`,
          kpaLaw.text`${kpaLaw.article("81", "Art. 81")} і ${kpaLaw.article("81a", "81a")} регулюють можливість визнання факту доведеним та правило розв'язання недоведених фактичних сумнівів на користь сторони в установлених законом справах.`,
        ],
        appliesWhen: [
          "Класифікація застосовується при формуванні załączników, składaniu wniosków dowodowych, перегляді akt і перевірці, чи organ правильно визначив доказову силу матеріалу.",
          "Вона особливо важлива, коли факт не має одного стандартного документа або коли приватні матеріали суперечать даним urzędowego rejestru.",
        ],
        conditions: [
          "Dowód повинен стосуватися істотної обставини, мати встановлене походження, читабельний зміст і часовий зв'язок із періодом, який досліджується.",
          "Kopia або cyfrowe odwzorowanie повинні дозволяти встановити цілісність документа; organ може вимагати оригінал do wglądu в передбачених випадках.",
          "Dokument prywatny підтверджує насамперед походження заяви від підписанта, а достовірність описаних фактів оцінюється разом з іншими доказами.",
        ],
        exceptions: [
          "Domniemanie dokumentu urzędowego можна спростовувати, а документ не має підвищеної сили поза межами того, що organ офіційно stwierdził.",
          "Oświadczenie strony не замінює dokumentu, якщо спеціальний закон прямо вимагає визначеної форми або конкретного urzędowego potwierdzenia.",
        ],
        consequences: [
          "Правильна класифікація показує, чи документ доводить сам факт, лише твердження сторони, статус у реєстрі або перебіг процесуальної дії.",
          "Organ, який відмовляється провести релевантний dowód або вибірково оцінює матеріал, повинен пояснити це в uzasadnieniu; порушення може мати значення в odwołaniu.",
        ],
        procedure: [
          "Матеріал надходить від сторони, іншого organu, rejestru або внаслідок czynności dowodowej, після чого включається до akt.",
          "Сторона має можливість брати участь у проведенні визначених доказів і висловитися щодо зібраного матеріалу перед рішенням.",
          "У decyzji organ зазначає, які факти визнав доведеними, на яких доказах базувався й чому іншим матеріалам відмовив у переконливості.",
        ],
        foreignersContext: [
          "У sprawach cudzoziemców дані paszportu, rejestrów, umów, ZUS, banku та urzędowych decyzji мають різні доказові функції й не замінюють одне одного.",
          "Електронні UPO, historia MOS, wpisy PUP і wydruki з державних rejestrów важливі також як докази дати та змісту процесуальної дії.",
        ],
      } satisfies LegalNodeGuide,
      documents: [
        "паспорт і документи pobytowe",
        "umowy та aneksy",
        "KRS, CEIDG, CRBR",
        "ZUS і podatki",
        "bank statements і wynagrodzenie",
        "акти цивільного стану",
        "докази навчання/страхування/житла",
        "електронні poświadczenia",
      ],
    },
  })

export default documentTypesTopic

export const documentTypesMapNode: LegalNode = {
  id: "document-types",
  title: documentTypesTopic.body.title,
  polish: documentTypesTopic.body.polish,
  summary: documentTypesTopic.summary,
  documents: [...(documentTypesTopic.body.documents ?? [])],
  sources: [...documentTypesTopic.body.sources],
}
