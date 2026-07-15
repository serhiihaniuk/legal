import type { LegalTextValue } from "~/data/legal-library/legal-text"

export type LegalNodeGuide = {
  introduction: LegalTextValue[]
  regulated: LegalTextValue[]
  appliesWhen: LegalTextValue[]
  conditions: LegalTextValue[]
  exceptions: LegalTextValue[]
  consequences: LegalTextValue[]
  procedure: LegalTextValue[]
  foreignersContext: LegalTextValue[]
}

export type LegalNodeGuideMap = Record<string, LegalNodeGuide>
