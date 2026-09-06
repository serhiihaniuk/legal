import {
  legalTextPlainText,
  type LegalTextValue,
} from "~/data/legal-library/legal-text"
import type { DocumentWorkedExample } from "~/data/document-library/contracts"

export type LegacyLegalNodeGuide = {
  kind?: undefined
  introduction: LegalTextValue[]
  regulated: LegalTextValue[]
  appliesWhen: LegalTextValue[]
  conditions: LegalTextValue[]
  exceptions: LegalTextValue[]
  consequences: LegalTextValue[]
  procedure: LegalTextValue[]
  foreignersContext: LegalTextValue[]
}

export type LegalMapArticleSection = {
  id: string
  title: string
  paragraphs: LegalTextValue[]
  example?: DocumentWorkedExample
}

export type LegalMapArticle = {
  kind: "article"
  introduction: LegalTextValue[]
  sections: LegalMapArticleSection[]
}

export type LegalNodeGuide = LegacyLegalNodeGuide | LegalMapArticle

export function defineLegalMapArticle(
  article: LegalMapArticle
): LegalMapArticle {
  if (!article.introduction.length || !article.sections.length) {
    throw new Error("Map article requires an introduction and sections")
  }
  const ids = new Set<string>()
  for (const section of article.sections) {
    if (!/^[a-z][a-z0-9-]*$/.test(section.id) || ids.has(section.id)) {
      throw new Error(`Invalid or duplicate map article section: ${section.id}`)
    }
    ids.add(section.id)
    if (!section.title.trim() || !section.paragraphs.length) {
      throw new Error(`Empty map article section: ${section.id}`)
    }
    const example = section.example
    if (example) {
      if (
        !example.title.trim() ||
        !example.facts.length ||
        !example.reasoning.length ||
        [...example.facts, ...example.reasoning, example.conclusion].some(
          (text) => !legalTextPlainText(text).trim()
        )
      ) {
        throw new Error(`Incomplete map worked example: ${section.id}`)
      }
      const sample = example.sample
      if (sample) {
        if (!sample.title.trim() || !sample.note.trim()) {
          throw new Error(`Unlabelled map sample: ${section.id}`)
        }
        if (sample.kind === "table") {
          const rowIds = new Set(sample.rows.map((row) => row.id))
          if (
            !sample.columns.length ||
            !sample.rows.length ||
            rowIds.size !== sample.rows.length ||
            sample.columns.some((column) => !column.trim()) ||
            sample.rows.some(
              (row) =>
                !row.id.trim() || row.cells.length !== sample.columns.length
            )
          ) {
            throw new Error(`Invalid map sample table: ${section.id}`)
          }
        } else if (
          !sample.paragraphs.length ||
          sample.paragraphs.some((paragraph) => !paragraph.trim())
        ) {
          throw new Error(`Empty map sample letter: ${section.id}`)
        }
      }
    }
  }
  for (const paragraph of [
    ...article.introduction,
    ...article.sections.flatMap((section) => section.paragraphs),
  ]) {
    if (!legalTextPlainText(paragraph).trim()) {
      throw new Error("Map article paragraph must not be empty")
    }
  }
  return article
}

export type LegalNodeGuideMap = Record<string, LegalNodeGuide>
