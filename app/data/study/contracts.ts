import type { LegalTextValue } from "~/data/legal-library/legal-text"
import type { OfficialSource } from "~/data/shared/legal-types"

export type StudyModule = {
  id: string
  title: string
  summary: LegalTextValue
  sections: readonly {
    id: string
    title: string
    paragraphs: readonly LegalTextValue[]
  }[]
  example: {
    title: string
    paragraphs: readonly LegalTextValue[]
    fragment?: {
      label: string
      language: "uk" | "pl"
      lines: readonly string[]
    }
  }
  reading: readonly { label: string; description: string; href: string }[]
  sources: readonly OfficialSource[]
}
