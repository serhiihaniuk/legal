import type { LegalNodeGuideMap } from "~/data/legal-map/node-guide-types"
import {
  kpaPrinciplesTopic,
  principleLegalityTopic,
  principleTrustTopic,
} from "~/data/legal-map/editorial/topics"
import { legalNodeGuidesKpa } from "~/data/legal-map/node-guides-kpa"
import { legalNodeGuidesPobyt } from "~/data/legal-map/node-guides-pobyt"
import { legalNodeGuidesWorkDocs } from "~/data/legal-map/node-guides-work-docs"

export const legalNodeGuides: LegalNodeGuideMap = {
  ...legalNodeGuidesKpa,
  "kpa-principles": kpaPrinciplesTopic.body.guide,
  "principle-legality": principleLegalityTopic.body.guide,
  "principle-trust": principleTrustTopic.body.guide,
  ...legalNodeGuidesPobyt,
  ...legalNodeGuidesWorkDocs,
}
