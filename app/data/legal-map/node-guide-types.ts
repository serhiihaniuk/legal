import {
  legalTextPlainText,
  type LegalTextValue,
} from "~/data/legal-library/legal-text"

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
