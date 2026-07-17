import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { DocumentGuide } from "~/data/document-library/contracts"
import {
  FOREIGNERS_MOS_AMENDMENT_URL,
  documentSources,
  foreignersLaw,
  kpaLaw,
  regulationLaw,
  workLaw,
} from "../authoring"

const guide: DocumentGuide = {
  id: "residence-card-fee-proof",
  title: "Dowód opłaty za wydanie karty pobytu",
  category: "financial",
  aliases: ["підтвердження opłaty za kartę", "оплата за карту"],
  documentType:
    "Підтвердження окремої opłaty за виготовлення або видачу документа pobytowego.",
  description:
    "Opłata за картку — інший платіж, ніж opłata skarbowa за розгляд заяви або надання дозволу. Її ставку і момент сплати перевіряють для конкретного виду документа та urzędu.",
  preparedBy:
    "Платіж здійснює особа, якій видається документ, або інший платник; підтвердження формує банк чи платіжний сервіс.",
  howToObtain: [
    "Перевірити на офіційній сторінці urzędu ставку та рахунок для потрібного документа.",
    "Виконати окремий платіж із точним призначенням і даними особи.",
    "Зберегти повне підтвердження для подання або odbioru документа.",
  ],
  formAndValidity: [
    "Сума може залежати від виду документа, ulgi або zwolnienia; її не слід виводити лише з попередньої справи.",
  ],
  purpose: [
    "Підтверджує оплату виготовлення або видачі конкретної карти pobytu.",
  ],
  doesNotProve: [
    "Не є рішенням про надання дозволу і не підтверджує право перебування до його виникнення.",
  ],
  legalBasis: [
    "Rozporządzenie w sprawie opłat pobieranych w Rzeczypospolitej Polskiej od cudzoziemców za wydanie i wymianę dokumentów.",
  ],
  keyChecks: [
    "Вид карти, ставка, можливе zwolnienie, рахунок, призначення, дані особи та дата.",
  ],
  relatedDocuments: ["residence-card", "stamp-duty-proof"],
  sources: [documentSources.cardFee, documentSources.payments],
  verifiedAt: "2026-07-14",
}

export const residenceCardFeeProofTopic: KnowledgeUnit<DocumentGuide> =
  defineKnowledgeUnit({
    id: "evidence-document:residence-card-fee-proof",
    subject: {
      family: "evidence-document",
      reference: {
        kind: "evidence-document",
        documentId: "residence-card-fee-proof",
      },
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

export default residenceCardFeeProofTopic
