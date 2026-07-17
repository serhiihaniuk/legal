import type { LegalNodeGuideMap } from "~/data/legal-map/node-guide-types"
import { principleLegalityTopic } from "~/data/legal-map/editorial/topics"
import { legalNodeGuidesKpa } from "~/data/legal-map/node-guides-kpa"
import { legalNodeGuidesPobyt } from "~/data/legal-map/node-guides-pobyt"
import { legalNodeGuidesWorkDocs } from "~/data/legal-map/node-guides-work-docs"

export const legalNodeGuides: LegalNodeGuideMap = {
  ...legalNodeGuidesKpa,
  "principle-legality": principleLegalityTopic.body.guide,
  ...legalNodeGuidesPobyt,
  ...legalNodeGuidesWorkDocs,
}
