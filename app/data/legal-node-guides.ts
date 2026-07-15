import type { LegalNodeGuideMap } from "~/data/legal-node-guide-types"
import { legalNodeGuidesKpa } from "~/data/legal-node-guides-kpa"
import { legalNodeGuidesPobyt } from "~/data/legal-node-guides-pobyt"
import { legalNodeGuidesWorkDocs } from "~/data/legal-node-guides-work-docs"

export const legalNodeGuides: LegalNodeGuideMap = {
  ...legalNodeGuidesKpa,
  ...legalNodeGuidesPobyt,
  ...legalNodeGuidesWorkDocs,
}
