import type { LegalTextValue } from "~/data/legal-library/legal-text"

export type OfficialSource = {
  label: string
  url: string
  note: LegalTextValue
}

export type LegalNode = {
  id: string
  title: string
  polish: LegalTextValue
  summary: LegalTextValue
  why?: LegalTextValue
  checkpoints?: LegalTextValue[]
  steps?: LegalTextValue[]
  documents?: LegalTextValue[]
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

export type LegalAtlasData = {
  updatedAt: string
  learningRoute: Array<{
    target: string
    title: string
    description: string
  }>
  groups: LegalGroup[]
}
