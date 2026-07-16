import test from "node:test"
import assert from "node:assert/strict"

import {
  formatValidationResult,
  validateEditorial,
} from "../../legal-editorial/validate.mjs"

test("KPA editorial exclusion is an explicit warning and not a validation error", () => {
  const result = validateEditorial({ allowIncomplete: true })
  assert.equal(result.ok, true)
  const warning = result.warnings.find(({ code }) => code === "kpa-editorial-not-validated")
  assert.ok(warning)
  assert.equal(warning.severity, "warning")
  assert.match(formatValidationResult(result), /WARN \[kpa-editorial-not-validated\]/u)
})
