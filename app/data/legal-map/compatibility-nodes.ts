import type { LegalNode } from "~/data/shared/legal-types"
import { decisionReadingMapNode } from "./editorial/topics/decision-reading"

// Retain the old node ID for existing references; its route redirects to the merged example.
export const decisionWorkflowMapNode: LegalNode = {
  ...decisionReadingMapNode,
  id: "decision-workflow",
}
