import path from "node:path"
import { fileURLToPath } from "node:url"

/**
 * Resolve the repository root from a module's own `import.meta.url`, so path
 * resolution does not depend on the directory a script happens to be invoked
 * from. Every caller of this helper lives exactly two directories below the
 * repository root, at scripts/legal-corpus/<file>.mjs.
 * @param {string} moduleUrl
 * @returns {string}
 */
export function resolveRepoRoot(moduleUrl) {
  return path.resolve(path.dirname(fileURLToPath(moduleUrl)), "../..")
}
