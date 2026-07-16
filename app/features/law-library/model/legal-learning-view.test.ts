import { describe, expect, it } from "vitest"

import {
  getExplanation,
  parseLegalProvisionReference,
} from "~/data/legal-library"

import { toLegalExplanationView } from "./legal-learning-view"

describe("legal explanation view adapter", () => {
  it("keeps the canonical explanation intact and adds only rendering context", async () => {
    const resolution = await getExplanation("kpa", "kpa-art-64")
    expect(resolution.status).toBe("reviewed")
    if (resolution.status !== "reviewed") return

    const target = parseLegalProvisionReference({
      kind: "legal-provision",
      documentId: "kpa",
      provisionId: "kpa-art-64",
    })
    const view = toLegalExplanationView({
      explanation: resolution.explanation,
      id: "article-64",
      reference: "art. 64 KPA",
      title: "Braki formalne podania",
      target,
    })

    expect(view).toMatchObject({
      id: "article-64",
      reference: "art. 64 KPA",
      title: "Braki formalne podania",
      target,
    })
    expect(view.explanation).toBe(resolution.explanation)
    expect(view).not.toHaveProperty("summary")
    expect(view).not.toHaveProperty("rules")
    expect(view).not.toHaveProperty("legalEffect")
    expect(view).not.toHaveProperty("foreignersCase")
  })
})
