export type OfficialSource = {
  label: string
  url: string
  note: string
}

export type LegalNode = {
  id: string
  title: string
  polish: string
  summary: string
  why?: string
  checkpoints?: string[]
  steps?: string[]
  documents?: string[]
  sources?: OfficialSource[]
  related?: string[]
  children?: LegalNode[]
}

export type LegalGroup = {
  id: string
  title: string
  shortTitle: string
  color: string
  description: string
  nodes: LegalNode[]
}

export type CaseDocument = {
  item: string
  status: string
  level: string
  owner: string
  proves: string
  law: string
}

export type CaseDeadline = {
  period: string
  trigger: string
  action: string
  consequence: string
  law: string
}

export type CaseTimelineEvent = {
  when: string
  title: string
  actor: string
  action: string
  documents: string[]
  law: string
  result: string
}

export type CaseRoute = {
  id: string
  tab: string
  eyebrow: string
  title: string
  lead: string
  verdict: string
  legalBasis: string
  metrics: Array<{ label: string; value: string }>
  conditions: string[]
  warning: string
  sources: OfficialSource[]
  documentRegister: CaseDocument[]
  deadlines: CaseDeadline[]
  exclusions: string[]
  timeline: CaseTimelineEvent[]
}

export type CaseStudy = {
  profile: {
    name: string
    subtitle: string
    facts: Array<{ label: string; value: string }>
    assumption: string
    baseline: string
  }
  routes: CaseRoute[]
}

export type LegalAtlasData = {
  updatedAt: string
  learningRoute: Array<{
    target: string
    title: string
    description: string
  }>
  caseStudy: CaseStudy
  groups: LegalGroup[]
}
