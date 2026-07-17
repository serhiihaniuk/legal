import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { DocumentGuide } from "~/data/document-library/contracts"
import { documentSources } from "../authoring"

const guide: DocumentGuide = {
  id: "residence-card",
  title: "Karta pobytu",
  category: "identity",
  aliases: [
    "karta pobytu",
    "карта/документ перебування",
    "карта побиту як документ дозволу",
  ],
  documentType:
    "Документ pobytowy, який видається після виникнення відповідного статусу або дозволу; не є самим адміністративним рішенням.",
  description:
    "Karta pobytu підтверджує особу та виданий документ pobytowy у межах даних, зазначених на карті. Її треба читати разом із decyzją і нормою, на підставі якої надано дозвіл, особливо коли оцінюється доступ до праці.",
  preparedBy:
    "Видає компетентний organ після виконання умов видачі документа, оплати та, коли потрібно, отримання біометричних даних.",
  howToObtain: [
    "Отримати рішення або іншу підставу для видачі документа.",
    "Виконати вимоги щодо opłaty, фото, відбитків та особистого odbioru, якщо вони застосовні.",
    "При odbiorze перевірити всі надруковані дані та негайно повідомити про помилку.",
  ],
  formAndValidity: [
    "Строк карти і строк самого дозволу треба відрізняти та перевіряти за рішенням і законом.",
    "Напис «dostęp do rynku pracy» не означає однаковий обсяг права працювати в кожному випадку.",
  ],
  purpose: [
    "Підтверджує особу та наявність указаного документа pobytowego під час його чинності.",
  ],
  doesNotProve: [
    "Не замінює decyzji при аналізі умов дозволу.",
    "Не доводить автоматично право працювати для будь-якого роботодавця і на будь-яких умовах.",
  ],
  legalBasis: [
    "Ustawa o cudzoziemcach — норми про dokumenty wydawane cudzoziemcom та спеціальна підстава конкретного дозволу.",
  ],
  keyChecks: [
    "Особа, номер, вид документа, organ wydający, дати, adnotacje та відповідність decyzji.",
  ],
  relatedDocuments: [
    "administrative-decision",
    "residence-card-fee-proof",
    "passport",
  ],
  sources: [
    documentSources.cardMos,
    documentSources.cardUdsc,
    documentSources.aliens,
  ],
  verifiedAt: "2026-07-14",
}

export const residenceCardTopic: KnowledgeUnit<DocumentGuide> =
  defineKnowledgeUnit({
    id: "evidence-document:residence-card",
    subject: {
      family: "evidence-document",
      reference: { kind: "evidence-document", documentId: "residence-card" },
    },
    summary: guide.description,
    claims: [
      {
        id: "document-purpose",
        kind: "requires-verification",
        text: guide.description,
        basis: [
          {
            reference: {
              kind: "official-source",
              sourceId: "eli-ustawa-o-cudzoziemcach",
            },
            locator: "document-specific requirements",
          },
        ],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "draft",
      language: "uk",
      legalStateDate: "2026-07-14",
      verifiedAt: guide.verifiedAt,
    },
    body: guide,
  })

export default residenceCardTopic
