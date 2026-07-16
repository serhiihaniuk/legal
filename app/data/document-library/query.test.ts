import { describe, expect, it } from "vitest"

import { getEvidenceDocument } from "."

describe("document-library queries", () => {
  it("returns the passport evidence document by its stable ID", () => {
    expect(getEvidenceDocument("passport")).toMatchObject({
      id: "passport",
    })
  })
})
