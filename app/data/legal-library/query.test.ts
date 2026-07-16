import { describe, expect, it } from "vitest"

import { resolveLegalReference } from "."

describe("legal-library queries", () => {
  it("resolves a KPA article reference to its provision route", () => {
    const resolution = resolveLegalReference({
      kind: "legal-provision",
      documentId: "kpa",
      provisionId: "kpa-art-64",
    })

    expect(resolution.status).toBe("resolved")
    if (resolution.status === "resolved") {
      expect(resolution.href).toBe("/law/kpa/provisions/kpa-art-64")
    }
  })
})
