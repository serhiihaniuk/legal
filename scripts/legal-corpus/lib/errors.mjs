/** @typedef {import("./types.mjs").Diagnostic} Diagnostic */

/**
 * Thrown when generated corpus facts (fetched metadata/PDF, extraction
 * output, provisions, structure) fail validation. Carries the same
 * `{ fatal, warnings?, entries? }` shape every caller already reads off
 * `.diagnostics` -- typed here once instead of assigned ad hoc onto a plain
 * Error at each throw site.
 */
export class CorpusValidationError extends Error {
  /**
   * @param {string} message
   * @param {{ fatal: Diagnostic[], warnings?: Diagnostic[], entries?: Diagnostic[] }} diagnostics
   */
  constructor(message, diagnostics) {
    super(message)
    this.name = "CorpusValidationError"
    this.diagnostics = diagnostics
  }
}
