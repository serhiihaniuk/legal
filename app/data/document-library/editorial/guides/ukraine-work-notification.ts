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
  id: "ukraine-work-notification",
  title: "Powiadomienie o pracy obywatela Ukrainy",
  category: "work",
  aliases: ["powiadomienie pup"],
  description:
    "Електронне повідомлення роботодавця до właściwego PUP про доручення роботи громадянину України. Це окремий обов’язок щодо легальності праці.",
  preparedBy: "Подає роботодавець або його представник через praca.gov.pl.",
  purpose: [
    "Фіксує дані роботодавця, працівника і заявлені умови роботи у визначений момент.",
  ],
  doesNotProve: [
    "Не підтверджує законність перебування або фактичну відповідність роботи заявленим умовам.",
  ],
  legalBasis: [
    "Спеціальні правила праці громадян України; редакцію треба звіряти на дату початку або зміни роботи.",
  ],
  keyChecks: [
    "Фактична дата початку, строк подання, дані тотожні umowie, збережене підтвердження wysłania.",
  ],
  sources: [
    {
      label: "Praca.gov.pl — powiadomienie o pracy obywatela Ukrainy",
      url: "https://psz.praca.gov.pl/dla-bezrobotnych-i-poszukujacych-pracy/dla-cudzoziemcow/powierzenie-pracy-ukraina",
      note: "Офіційна інформація про електронне повідомлення.",
    },
  ],
  verifiedAt: "2026-07-14",
}

export const ukraineWorkNotificationTopic: KnowledgeUnit<DocumentGuide> =
  defineKnowledgeUnit({
    id: "evidence-document:ukraine-work-notification",
    subject: {
      family: "evidence-document",
      reference: {
        kind: "evidence-document",
        documentId: "ukraine-work-notification",
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
              sourceId: "eli-powierzanie-pracy",
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

export default ukraineWorkNotificationTopic
