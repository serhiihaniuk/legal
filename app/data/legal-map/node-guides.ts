import type { LegalNodeGuideMap } from "~/data/legal-map/node-guide-types"
import { legalNodeGuidesKpa } from "~/data/legal-map/node-guides-kpa"
import { legalNodeGuidesPobyt } from "~/data/legal-map/node-guides-pobyt"
import { legalNodeGuidesWorkDocs } from "~/data/legal-map/node-guides-work-docs"

export const legalNodeGuides: LegalNodeGuideMap = {
  ...legalNodeGuidesKpa,
  ...legalNodeGuidesPobyt,
  ...legalNodeGuidesWorkDocs,
}
