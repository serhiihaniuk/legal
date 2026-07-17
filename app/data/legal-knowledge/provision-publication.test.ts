import { describe, expect, it } from "vitest"

import { resolveProvisionPublication } from "./provision-publication"

describe("provision publication resolution", () => {
  it("joins the current generated provision with its reviewed explanation", async () => {
    const publication = await resolveProvisionPublication({
      kind: "legal-provision",
      documentId: "kpa",
      provisionId: "kpa-art-6",
    })

    expect(publication?.previewStatus).toBe("reviewed")
    expect(publication?.document.id).toBe("kpa")
    expect(publication?.edition.editionId).toBe("kpa-2025-1691")
    expect(publication?.provision.id).toBe("kpa-art-6")
    expect(publication?.reviewedExplanation?.sourceEditionId).toBe(
      "kpa-2025-1691"
    )
    expect(publication?.sourceTextExcerpt).toBeTruthy()
  })

  it("fails closed for an unknown or malformed provision reference", async () => {
    await expect(
      resolveProvisionPublication({
        kind: "legal-provision",
        documentId: "kpa",
        provisionId: "unknown-provision",
      })
    ).resolves.toBeUndefined()

    await expect(
      resolveProvisionPublication({ kind: "map-node" })
    ).resolves.toBeUndefined()
  })
})
