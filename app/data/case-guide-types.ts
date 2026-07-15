import type { LegalTextValue } from "~/data/legal-library/legal-text"
import type {
  CaseDeadline,
  CaseDocument,
  OfficialSource,
} from "~/data/legal-types"

export type CaseGuideDocument = Omit<
  CaseDocument,
  "item" | "owner" | "proves" | "law"
> & {
  item: LegalTextValue
  owner: LegalTextValue
  proves: LegalTextValue
  law: LegalTextValue
}

export type CaseGuideDeadline = Omit<
  CaseDeadline,
  "period" | "trigger" | "action" | "consequence" | "law"
> & {
  period: LegalTextValue
  trigger: LegalTextValue
  action: LegalTextValue
  consequence: LegalTextValue
  law: LegalTextValue
}

export type CaseGuideSource = Omit<OfficialSource, "note"> & {
  note: LegalTextValue
}

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
  description: LegalTextValue
  href: string
}

export type CaseGuideStage = {
  id: string
  title: string
  question: LegalTextValue
  explanation: LegalTextValue[]
  actor: LegalTextValue
  actions: LegalTextValue[]
  outcome: LegalTextValue
  documents: CaseGuideDocument[]
  risks: CaseGuideStageRisk[]
  materials: CaseGuideMaterial[]
}

export type CaseGuideStageRisk = {
  title: string
  explanation: LegalTextValue
  check: LegalTextValue
}

export type CaseGuideCondition = {
  condition: LegalTextValue
  modelFact: LegalTextValue
  evidence: LegalTextValue
  status: "confirmed" | "verify" | "conditional"
  risk: LegalTextValue
  law: LegalTextValue
}

export type CaseGuideNegativeBranch = {
  title: string
  trigger: LegalTextValue
  consequence: LegalTextValue
  response: LegalTextValue
  material?: CaseGuideMaterial
}

export type CaseGuideRoute = {
  id: CaseGuideRouteId
  tab: string
  eyebrow: string
  title: string
  subtitle: LegalTextValue
  overview: LegalTextValue[]
  result: LegalTextValue
  forWhom: LegalTextValue
  notFor: LegalTextValue
  profile: {
    name: string
    description: LegalTextValue
    facts: Array<{ label: string; value: LegalTextValue }>
    assumption: LegalTextValue
  }
  choice: {
    why: LegalTextValue
    closestAlternative: LegalTextValue
    gate: LegalTextValue
  }
  metrics: Array<{ label: string; value: LegalTextValue }>
  stages: CaseGuideStage[]
  conditions: CaseGuideCondition[]
  documents: CaseGuideDocument[]
  deadlines: CaseGuideDeadline[]
  negativeBranches: CaseGuideNegativeBranch[]
  sources: CaseGuideSource[]
}
