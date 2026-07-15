export type LegalNodeGuide = {
  introduction: string[]
  regulated: string[]
  appliesWhen: string[]
  conditions: string[]
  exceptions: string[]
  consequences: string[]
  procedure: string[]
  foreignersContext: string[]
}

export type LegalNodeGuideMap = Record<string, LegalNodeGuide>
