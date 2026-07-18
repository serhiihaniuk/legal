import {
  defineKnowledgeUnit,
  type KnowledgeUnit,
} from "~/data/legal-knowledge/contracts"
import type { DocumentGuide } from "~/data/document-library/contracts"
import { documentSources, workLaw } from "../authoring"

const UKRAINE_WORK_AMENDMENT_URL = "https://eli.gov.pl/eli/DU/2026/203/ogl"
const UKRAINE_WORK_GUIDANCE_URL =
  "https://psz.praca.gov.pl/web/8188476/powiadomienie-o-podjeciu-pracy-przez-obywatela-ukrainy"

const guide: DocumentGuide = {
  id: "ukraine-work-notification",
  title: "Powiadomienie o pracy obywatela Ukrainy",
  category: "work",
  aliases: ["powiadomienie pup"],
  description: workLaw.text`Тут є два правові шляхи, які не можна змішувати. Коли polski podmiot powierzający pracę cudzoziemcowi доручає працю іноземцю, який користується ochroną czasową, він повідомляє właściwy PUP через praca.gov.pl протягом 7 днів від початку праці. Окремо, протягом трьох років від 05.03.2026, ${workLaw.external("art. 41 ustawy z 23 stycznia 2026 r.", UKRAINE_WORK_AMENDMENT_URL)} поширює правила ${workLaw.article("3", "art. 3")} ust. 1 pkt 12 та ${workLaw.article("5a", "art. 5a")} ustawy o warunkach dopuszczalności powierzania pracy cudzoziemcom на визначених громадян України, які перебувають у Польщі легально і не користуються ochroną czasową w Rzeczypospolitej Polskiej. Компетентний PUP визначають за siedzibą роботодавця або його місцем постійного проживання. Нове powiadomienie протягом 7 днів потрібне, якщо змінюється вид договору чи посада або вид роботи, або якщо зменшується робочий час чи ставка. Перед іншою зміною умов треба окремо перевірити, чи не почалася нова праця, чи не змінився роботодавець або правова підстава.`,
  preparedBy:
    "Подає polski podmiot powierzający pracę cudzoziemcowi або його представник через praca.gov.pl.",
  purpose: [
    "Фіксує дані роботодавця, працівника і заявлені умови роботи у визначений момент.",
  ],
  doesNotProve: [
    "Не підтверджує законність перебування або фактичну відповідність роботи заявленим умовам.",
  ],
  legalBasis: [
    workLaw.text`${workLaw.article("5a", "Art. 5a ust. 1–6")} ustawy o warunkach dopuszczalności powierzania pracy cudzoziemcom — адресат, строк, канал, właściwy PUP і зміни, що вимагають нового powiadomienia.`,
    workLaw.text`${workLaw.external("Art. 41 ustawy z 23 stycznia 2026 r.", UKRAINE_WORK_AMENDMENT_URL)} — протягом трьох років від 05.03.2026 поширює ці правила на визначених громадян України, які перебувають легально і не користуються ochroną czasową w Rzeczypospolitej Polskiej.`,
  ],
  keyChecks: [
    "Фактична дата початку, właściwy PUP, строк 7 днів, дані тотожні umowie та збережене підтвердження wysłania.",
    "Кожна зміна роботодавця, підстави або умов роботи окремо перевірена за актуальною нормою.",
  ],
  sources: [
    documentSources.work,
    {
      label: "Ustawa z 23 stycznia 2026 r. — Dz.U. 2026 poz. 203",
      url: UKRAINE_WORK_AMENDMENT_URL,
      note: "Офіційний акт, який запровадив механізм powiadomienia і містить правило перехідного застосування.",
    },
    {
      label: "Praca.gov.pl — powiadomienie o podjęciu pracy",
      url: UKRAINE_WORK_GUIDANCE_URL,
      note: "Поточна офіційна інструкція щодо praca.gov.pl, właściwego PUP, строку та повторного повідомлення.",
    },
  ],
  verifiedAt: "2026-07-18",
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
        id: "notification-mechanism",
        kind: "statute-text",
        text: "Polski podmiot powierzający pracę cudzoziemcowi подає powiadomienie через praca.gov.pl до PUP, компетентного за його siedzibą або місцем постійного проживання, протягом 7 днів від початку праці.",
        basis: [
          {
            reference: {
              kind: "official-source",
              sourceId: "eli-powierzanie-pracy",
            },
            locator: "Art. 5a ust. 1–2 i 6",
          },
        ],
      },
      {
        id: "changed-work-conditions",
        kind: "statute-text",
        text: "Нове powiadomienie протягом 7 днів потрібне після зміни виду договору або посади чи виду роботи, а також після зменшення робочого часу або ставки.",
        basis: [
          {
            reference: {
              kind: "official-source",
              sourceId: "eli-powierzanie-pracy",
            },
            locator: "Art. 5a ust. 5",
          },
        ],
      },
      {
        id: "current-electronic-workflow",
        kind: "official-guidance",
        text: "Офіційна інструкція praca.gov.pl підтверджує електронний канал, właściwy PUP, семиденний строк і практичні випадки повторного повідомлення.",
        basis: [
          {
            reference: { kind: "external", url: UKRAINE_WORK_GUIDANCE_URL },
            locator:
              "sekcja „Zasady powierzenia pracy cudzoziemcowi na podstawie powiadomienia” — akapity o właściwym PUP, terminie i nowym powiadomieniu",
          },
        ],
      },
      {
        id: "transitional-scope",
        kind: "statute-text",
        text: workLaw.text`${workLaw.external("Art. 41 ustawy z 23 stycznia 2026 r.", UKRAINE_WORK_AMENDMENT_URL)} протягом трьох років від 05.03.2026 поширює правила ${workLaw.article("3", "art. 3")} ust. 1 pkt 12 та ${workLaw.article("5a", "art. 5a")} на визначених громадян України, які перебувають легально і не користуються ochroną czasową w Rzeczypospolitej Polskiej.`,
        basis: [
          {
            reference: { kind: "external", url: UKRAINE_WORK_AMENDMENT_URL },
            locator: "Art. 41",
          },
        ],
      },
      {
        id: "change-requires-fresh-check",
        kind: "practical-inference",
        text: "Перед зміною роботодавця, правової підстави або інших умов треба заново перевірити, чи достатнє чинне powiadomienie і чи не виник новий обов’язок.",
        basis: [
          {
            reference: {
              kind: "official-source",
              sourceId: "eli-powierzanie-pracy",
            },
            locator: "Art. 5a ust. 1 i 5",
          },
          {
            reference: { kind: "external", url: UKRAINE_WORK_GUIDANCE_URL },
            locator:
              "sekcja „Zasady powierzenia pracy cudzoziemcowi na podstawie powiadomienia” — akapity o zmianie pracodawcy, warunków i kolejnych umowach",
          },
        ],
      },
    ],
    relationships: [],
    review: {
      reviewStatus: "reviewed",
      language: "uk",
      legalStateDate: "2026-07-14",
      verifiedAt: guide.verifiedAt,
    },
    body: guide,
  })

export default ukraineWorkNotificationTopic
