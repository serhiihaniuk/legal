import test from "node:test"
import assert from "node:assert/strict"

import {
  formatValidationResult,
  validateEditorial,
} from "../../legal-editorial/validate.mjs"

test("KPA editorial coverage is included in generic validation", () => {
  const result = validateEditorial({ allowIncomplete: true })
  assert.equal(result.ok, true)
  assert.ok(result.summary.expectedCount >= 306)
  assert.ok(result.summary.coveredCount >= 306)
  assert.equal(
    result.warnings.some(({ code }) => code === "kpa-editorial-not-validated"),
    false,
  )
  assert.doesNotMatch(
    formatValidationResult(result),
    /kpa-editorial-not-validated/u,
  )
})
