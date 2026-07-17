import type { LegalNodeGuideMap } from "~/data/legal-map/node-guide-types"
import {
  appealTopic,
  complaintTopic,
  deadlinesDeliveryTopic,
  decisionAppealTopic,
  decisionReadingTopic,
  evidenceTopic,
  extraordinaryWsaTopic,
  initiationTopic,
  invalidityTopic,
  kpaPrinciplesTopic,
  organPartyTopic,
  principleLegalityTopic,
  principleParticipationTopic,
  principleTrustTopic,
  principleTwoInstanceTopic,
  reopeningTopic,
  wezwanieTopic,
  wsaTopic,
} from "~/data/legal-map/editorial/topics"
import { legalNodeGuidesKpa } from "~/data/legal-map/node-guides-kpa"
import { legalNodeGuidesPobyt } from "~/data/legal-map/node-guides-pobyt"
import { legalNodeGuidesWorkDocs } from "~/data/legal-map/node-guides-work-docs"

export const legalNodeGuides: LegalNodeGuideMap = {
  ...legalNodeGuidesKpa,
  appeal: appealTopic.body.guide,
  complaint: complaintTopic.body.guide,
  "deadlines-delivery": deadlinesDeliveryTopic.body.guide,
  "decision-appeal": decisionAppealTopic.body.guide,
  "decision-reading": decisionReadingTopic.body.guide,
  evidence: evidenceTopic.body.guide,
  "extraordinary-wsa": extraordinaryWsaTopic.body.guide,
  initiation: initiationTopic.body.guide,
  invalidity: invalidityTopic.body.guide,
  "kpa-principles": kpaPrinciplesTopic.body.guide,
  "organ-party": organPartyTopic.body.guide,
  "principle-legality": principleLegalityTopic.body.guide,
  "principle-participation": principleParticipationTopic.body.guide,
  "principle-trust": principleTrustTopic.body.guide,
  "principle-two-instance": principleTwoInstanceTopic.body.guide,
  reopening: reopeningTopic.body.guide,
  wezwanie: wezwanieTopic.body.guide,
  wsa: wsaTopic.body.guide,
  ...legalNodeGuidesPobyt,
  ...legalNodeGuidesWorkDocs,
}
