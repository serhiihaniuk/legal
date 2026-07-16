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
 * @property {string} sourcePdfSha256
 * @property {string} sourceTextHash
 * @property {string} text
 */
