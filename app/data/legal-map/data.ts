import { defineLegalTextContent } from "~/data/legal-library/legal-text"
import type { LegalAtlasData } from "~/data/shared/legal-types"

import { LEGAL_STATE_DATE } from "~/data/shared/legal-meta"
import { decisionWorkflowMapNode } from "./compatibility-nodes"
import {
  appealMapNode,
  blueCardMapNode,
  businessStayMapNode,
  caseFileMapNode,
  complaintMapNode,
  cukrRouteMapNode,
  deadlinesDeliveryMapNode,
  decisionAppealMapNode,
  decisionReadingMapNode,
  documentMatrixMapNode,
  documentTypesMapNode,
  employerDutiesMapNode,
  entryCurrentBasisMapNode,
  evidenceMapNode,
  evidenceMatrixMapNode,
  extraordinaryWsaMapNode,
  familyStayMapNode,
  foreignDocumentsMapNode,
  inactivityMapNode,
  goalOfStayMapNode,
  initiationMapNode,
  invalidityMapNode,
  longTermEuMapNode,
  kpaPrinciplesMapNode,
  legalAnatomyMapNode,
  mosProcedureMapNode,
  organPartyMapNode,
  otherStayMapNode,
  outsourcingCaseMapNode,
  pendingStayMapNode,
  permanentMapNode,
  permanentResidentMapNode,
  principleLegalityMapNode,
  principleParticipationMapNode,
  personStatusMapNode,
  principleTrustMapNode,
  principleTwoInstanceMapNode,
  reopeningMapNode,
  seasonalMapNode,
  sourceCheckMapNode,
  specialVsKpaMapNode,
  stayWorkMapNode,
  startCaseMapNode,
  studyResearchMapNode,
  temporaryCommonMapNode,
  temporaryGoalsMapNode,
  temporaryWorkMapNode,
  twoKeysMapNode,
  ukrBaselineMapNode,
  ukraineOrdinaryMapNode,
  ukraineRoutesMapNode,
  visaFreeMapNode,
  visaMapNode,
  workEntryMapNode,
  workInstrumentsMapNode,
  workPermitMapNode,
  declarationMapNode,
  delegationMapNode,
  wezwanieMapNode,
  wezwanieWorkflowMapNode,
  wsaMapNode,
} from "./editorial/topics"

export const legalData = {
  updatedAt: LEGAL_STATE_DATE,
  learningRoute: [
    {
      target: "fundament",
      title: "Навчись бачити норму",
      description: "Факт, поняття, умова, доказ і наслідок.",
    },
    {
      target: "kpa",
      title: "Освой хід процедури",
      description: "Від заяви та wezwania до decyzji й odwołania.",
    },
    {
      target: "pobyt",
      title: "Розклади цілі перебування",
      description: "Хто, на якій підставі, з якою реальною метою.",
    },
    {
      target: "praca",
      title: "Додай другий ключ — працю",
      description: "Окремо перевір право перебувати й право працювати.",
    },
    {
      target: "praktyka",
      title: "Тренуйся на документах",
      description: "Wezwania, decyzje, строки, докази й кейси.",
    },
  ],
  groups: defineLegalTextContent(
    [
      {
        id: "fundament",
        title: "Основа правового мислення",
        shortTitle: "Основа",
        color: "#587267",
        description:
          "Спочатку класифікуй факти. Лише потім відкривай закон і шукай статтю.",
        nodes: [
          {
            ...startCaseMapNode,
            related: ["legal-anatomy", "person-status", "evidence-matrix"],
          },
          {
            ...legalAnatomyMapNode,
            related: ["special-vs-kpa", "evidence-matrix", "decision-reading"],
          },
          {
            ...specialVsKpaMapNode,
            related: ["kpa-principles", "temporary-common", "work-entry"],
          },
          {
            ...personStatusMapNode,
            related: ["entry-current-basis", "goal-of-stay", "two-keys"],
          },
          {
            ...goalOfStayMapNode,
            related: ["temporary-common", "temporary-goals", "two-keys"],
          },
          {
            ...twoKeysMapNode,
            related: ["entry-current-basis", "work-entry", "pending-stay"],
          },
        ],
      },
      {
        id: "kpa",
        title: "KPA — хід адміністративної справи",
        shortTitle: "KPA",
        color: "#385e72",
        description:
          "Процедурний хребет: organ, strona, doręczenie, termin, dowód, decyzja та контроль.",
        nodes: [
          {
            ...kpaPrinciplesMapNode,
            related: ["evidence", "decision-reading", "inactivity"],
            children: [
              principleLegalityMapNode,
              principleTrustMapNode,
              principleParticipationMapNode,
              principleTwoInstanceMapNode,
            ],
          },
          organPartyMapNode,
          {
            ...initiationMapNode,
            related: ["deadlines-delivery", "wezwanie", "mos-procedure"],
          },
          {
            ...deadlinesDeliveryMapNode,
          },
          {
            ...wezwanieMapNode,
          },
          {
            ...evidenceMapNode,
            related: [
              "evidence-matrix",
              "decision-reading",
              "outsourcing-case",
            ],
          },
          {
            ...decisionAppealMapNode,
            children: [decisionReadingMapNode, appealMapNode, complaintMapNode],
          },
          {
            ...extraordinaryWsaMapNode,
            children: [reopeningMapNode, invalidityMapNode, wsaMapNode],
          },
        ],
      },
      {
        id: "pobyt",
        title: "Перебування і його цілі",
        shortTitle: "Pobyt",
        color: "#9e6739",
        description:
          "В’їзд, поточна підстава, ціль понад 3 місяці та наслідки зміни життєвої ситуації.",
        nodes: [
          {
            ...entryCurrentBasisMapNode,
            children: [visaMapNode, visaFreeMapNode],
          },
          {
            ...mosProcedureMapNode,
            related: ["initiation", "pending-stay", "document-matrix"],
          },
          {
            ...pendingStayMapNode,
            related: ["two-keys", "mos-procedure", "deadlines-delivery"],
          },
          {
            ...ukraineRoutesMapNode,
            related: ["stay-work", "mos-procedure", "two-keys"],
            children: [
              ukrBaselineMapNode,
              {
                ...cukrRouteMapNode,
                related: ["ukraine-routes-2026"],
              },
              {
                ...ukraineOrdinaryMapNode,
                related: ["stay-work", "ukraine-routes-2026"],
              },
            ],
          },
          temporaryCommonMapNode,
          {
            ...temporaryGoalsMapNode,
            children: [
              {
                ...stayWorkMapNode,
                related: [
                  "outsourcing-case",
                  "work-entry",
                  "ukraine-ordinary-2026",
                  "mos-procedure",
                ],
              },
              blueCardMapNode,
              businessStayMapNode,
              studyResearchMapNode,
              familyStayMapNode,
              otherStayMapNode,
            ],
          },
          {
            ...permanentResidentMapNode,
            children: [permanentMapNode, longTermEuMapNode],
          },
        ],
      },
      {
        id: "praca",
        title: "Право до праці",
        shortTitle: "Praca",
        color: "#7f4c42",
        description:
          "Хто може працювати, на яких умовах і хто фактично відповідає за організацію праці.",
        nodes: [
          {
            ...workEntryMapNode,
            related: ["two-keys", "stay-work", "employer-duties"],
          },
          employerDutiesMapNode,
          {
            ...workInstrumentsMapNode,
            children: [
              workPermitMapNode,
              declarationMapNode,
              seasonalMapNode,
              delegationMapNode,
            ],
          },
          {
            ...temporaryWorkMapNode,
            related: ["outsourcing-case", "stay-work"],
          },
          outsourcingCaseMapNode,
        ],
      },
      {
        id: "dokumenty",
        title: "Документи й докази",
        shortTitle: "Dokumenty",
        color: "#756b47",
        description:
          "Документ не є метою. Він повинен переконливо доводити конкретну умову закону.",
        nodes: [
          documentMatrixMapNode,
          evidenceMatrixMapNode,
          documentTypesMapNode,
          foreignDocumentsMapNode,
          caseFileMapNode,
        ],
      },
      {
        id: "praktyka",
        title: "Практичний робочий алгоритм",
        shortTitle: "Практика",
        color: "#6d526d",
        description:
          "Однакова дисципліна аналізу для wezwania, decyzji, строку або нового кейсу.",
        nodes: [
          {
            ...wezwanieWorkflowMapNode,
          },
          {
            ...decisionWorkflowMapNode,
          },
          {
            ...inactivityMapNode,
            related: ["deadlines-delivery", "wsa"],
          },
          sourceCheckMapNode,
        ],
      },
    ],
    "legalData.groups"
  ),
} satisfies LegalAtlasData
