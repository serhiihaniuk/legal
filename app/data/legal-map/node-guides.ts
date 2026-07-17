import type { LegalNodeGuideMap } from "~/data/legal-map/node-guide-types"
import {
  deadlinesDeliveryTopic,
  initiationTopic,
  kpaPrinciplesTopic,
  organPartyTopic,
  principleLegalityTopic,
  principleParticipationTopic,
  principleTrustTopic,
  principleTwoInstanceTopic,
  wezwanieTopic,
} from "~/data/legal-map/editorial/topics"
import { legalNodeGuidesKpa } from "~/data/legal-map/node-guides-kpa"
import { legalNodeGuidesPobyt } from "~/data/legal-map/node-guides-pobyt"
import { legalNodeGuidesWorkDocs } from "~/data/legal-map/node-guides-work-docs"

export const legalNodeGuides: LegalNodeGuideMap = {
  ...legalNodeGuidesKpa,
  "deadlines-delivery": deadlinesDeliveryTopic.body.guide,
  initiation: initiationTopic.body.guide,
  "kpa-principles": kpaPrinciplesTopic.body.guide,
  "organ-party": organPartyTopic.body.guide,
  "principle-legality": principleLegalityTopic.body.guide,
  "principle-participation": principleParticipationTopic.body.guide,
  "principle-trust": principleTrustTopic.body.guide,
  "principle-two-instance": principleTwoInstanceTopic.body.guide,
  wezwanie: wezwanieTopic.body.guide,
  ...legalNodeGuidesPobyt,
  ...legalNodeGuidesWorkDocs,
}
