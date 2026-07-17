#!/usr/bin/env node

import { mkdir, readdir, readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import process from "node:process"
import prettier from "prettier"

const repositoryRoot = process.cwd()
const checkOnly = process.argv.includes("--check")
const generatedPath = path.join(
  repositoryRoot,
  "app/data/legal-knowledge/generated/units.ts"
)
const unitDirectories = [
  "app/data/legal-map/editorial/topics",
  "app/data/case-guides/editorial/routes",
  "app/data/document-library/editorial/guides",
  "app/data/legal-library/learning/modules",
]

/**
 * @typedef {{ filePath: string, importPath: string, exportName: string }} UnitModule
 */

/**
 * @param {string} directory
 * @returns {Promise<string[]>}
 */
async function collectTypeScriptFiles(directory) {
  let entries
  try {
    entries = await readdir(directory, { withFileTypes: true })
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "ENOENT"
    ) {
      return []
    }
    throw error
  }

  const files = []
  for (const entry of entries.sort((left, right) =>
    left.name.localeCompare(right.name)
  )) {
    const filePath = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await collectTypeScriptFiles(filePath)))
      continue
    }
    if (
      !entry.isFile() ||
      !entry.name.endsWith(".ts") ||
      entry.name.endsWith(".test.ts") ||
      entry.name === "index.ts"
    ) {
      continue
    }
    files.push(filePath)
  }
  return files.sort((left, right) => left.localeCompare(right))
}

/**
 * @param {string} filePath
 * @returns {Promise<UnitModule>}
 */
async function inspectUnitModule(filePath) {
  const source = await readFile(filePath, "utf8")
  const match = source.match(/export\s+default\s+([A-Za-z_$][\w$]*)/u)
  if (!match) {
    throw new Error(
      `Knowledge registry generation failed: ${path.relative(repositoryRoot, filePath)} must export its authored unit as default`
    )
  }

  let importPath = path.relative(path.dirname(generatedPath), filePath)
  importPath = importPath.replaceAll(path.sep, "/").replace(/\.ts$/u, "")
  if (!importPath.startsWith(".")) importPath = `./${importPath}`
  return { filePath, importPath, exportName: match[1] }
}

/**
 * @param {UnitModule[]} modules
 * @returns {string}
 */
function renderRegistry(modules) {
  const imports = modules
    .map(
      (module, index) =>
        `import unit${index} from ${JSON.stringify(module.importPath)}`
    )
    .join("\n")
  const units = modules.map((_, index) => `unit${index}`).join(", ")
  return `// This file is generated. Do not edit it by hand.\n// Run npm run knowledge:generate after adding or removing an authored unit.\n\n${imports}\n\nexport const authoredKnowledgeUnits = [${units}] as const\n`
}

const files = (
  await Promise.all(
    unitDirectories.map((directory) =>
      collectTypeScriptFiles(path.join(repositoryRoot, directory))
    )
  )
).flat()
const modules = await Promise.all(
  files.map((filePath) => inspectUnitModule(filePath))
)

const duplicateExports = new Set()
for (const module of modules) {
  if (duplicateExports.has(module.exportName)) {
    throw new Error(
      `Knowledge registry generation failed: duplicate default export name ${module.exportName}`
    )
  }
  duplicateExports.add(module.exportName)
}

modules.sort((left, right) => left.importPath.localeCompare(right.importPath))
const prettierOptions = (await prettier.resolveConfig(generatedPath)) ?? {}
const rendered = await prettier.format(renderRegistry(modules), {
  ...prettierOptions,
  filepath: generatedPath,
  parser: "typescript",
})
if (checkOnly) {
  let existing
  try {
    existing = await readFile(generatedPath, "utf8")
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "ENOENT"
    ) {
      throw new Error(
        "Knowledge registry is missing; run npm run knowledge:generate before committing"
      )
    }
    throw error
  }
  if (existing !== rendered) {
    throw new Error(
      "Knowledge registry is stale; run npm run knowledge:generate before committing"
    )
  }
  console.log(
    `Knowledge registry is up to date (${modules.length} unit module(s))`
  )
} else {
  await mkdir(path.dirname(generatedPath), { recursive: true })
  await writeFile(generatedPath, rendered, "utf8")
  console.log(
    `Generated ${modules.length} knowledge unit module(s) at ${path.relative(repositoryRoot, generatedPath)}`
  )
}
