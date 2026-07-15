import type {
  CaseDeadline,
  CaseDocument,
  OfficialSource,
} from "~/data/legal-types"

export type CaseGuideRouteId =
  | "cukr"
  | "work"
  | "blue-card"
  | "student"
  | "business"
  | "family"
  | "permanent"
  | "long-term-eu"
  | "other"

export type CaseGuideCaseId =
  "temporary-stay" | "permanent-stay" | "resident-eu"

export type CaseGuideCase = {
  id: CaseGuideCaseId
  label: string
  description: string
  routeIds: CaseGuideRouteId[]
  defaultRouteId: CaseGuideRouteId
}

export type CaseGuideMaterial = {
  label: string
  description: string
  href: string
}

export type CaseGuideStage = {
  id: string
  title: string
  question: string
  explanation: string[]
  actor: string
  actions: string[]
  outcome: string
  documents: CaseDocument[]
  risks: CaseGuideStageRisk[]
  materials: CaseGuideMaterial[]
}

export type CaseGuideStageRisk = {
  title: string
  explanation: string
  check: string
}

export type CaseGuideCondition = {
  condition: string
  modelFact: string
  evidence: string
  status: "confirmed" | "verify" | "conditional"
  risk: string
  law: string
}

export type CaseGuideNegativeBranch = {
  title: string
  trigger: string
  consequence: string
  response: string
  material?: CaseGuideMaterial
}

export type CaseGuideRoute = {
  id: CaseGuideRouteId
  tab: string
  eyebrow: string
  title: string
  subtitle: string
  overview: string[]
  result: string
  forWhom: string
  notFor: string
  profile: {
    name: string
    description: string
    facts: Array<{ label: string; value: string }>
    assumption: string
  }
  choice: {
    why: string
    closestAlternative: string
    gate: string
  }
  metrics: Array<{ label: string; value: string }>
  stages: CaseGuideStage[]
  conditions: CaseGuideCondition[]
  documents: CaseDocument[]
  deadlines: CaseDeadline[]
  negativeBranches: CaseGuideNegativeBranch[]
  sources: OfficialSource[]
}
