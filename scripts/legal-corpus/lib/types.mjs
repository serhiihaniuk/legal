export {}

/**
 * A single fatal or warning entry produced by config, corpus-fact, or
 * work-order validation. Shared across lib/config.mjs, lib/validation.mjs,
 * lib/extraction.mjs, and lib/workflow.mjs so every validator reports in the
 * same shape.
 * @typedef {object} Diagnostic
 * @property {"fatal" | "warning"} severity
 * @property {string} code
 * @property {string} message
 * @property {string} [path]
 * @property {unknown} [details]
 */

/**
 * One normalized, one-based PDF page as produced by extractPages.
 * @typedef {object} Page
 * @property {number} pdfPage
 * @property {string} text
 * @property {number} [characterCount]
 * @property {boolean} [hasTextLayer]
 */

/**
 * A source fragment used to compile a provision. Derived text retains its base
 * PDF span plus each amendment or effective-date source that shaped the result.
 * @typedef {object} ProvisionSourceSpan
 * @property {string} sourceId
 * @property {string} role
 * @property {string} locator
 * @property {number} [startPdfPage]
 * @property {number} [endPdfPage]
 * @property {string} sourcePdfSha256
 * @property {string} [effectiveDate]
 */

/**
 * Provenance for a provision compiled with an exact amendment operation.
 * @typedef {object} ProvisionAmendmentOverlay
 * @property {string} kind
 * @property {string} amendmentSourceId
 * @property {string} amendmentLocator
 * @property {string} effectiveDate
 * @property {string} baseSourceTextHash
 * @property {string} compiledSourceTextHash
 */

/**
 * A generated provision record: extraction's output unit and validation's
 * input unit alike.
 * @typedef {object} Provision
 * @property {string} id
 * @property {string} documentId
 * @property {string} editionId
 * @property {string} kind
 * @property {string} locator
 * @property {string | null} parentId
 * @property {string[]} childIds
 * @property {number} order
 * @property {number} startPdfPage
 * @property {number} endPdfPage
 * @property {string} status
 * @property {string} [effectiveDate]
 * @property {string} sourcePdfSha256
 * @property {string} sourceTextHash
 * @property {string} text
 * @property {ProvisionSourceSpan[]} [sourceSpans]
 * @property {ProvisionAmendmentOverlay} [amendmentOverlay]
 */
