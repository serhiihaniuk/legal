import assert from "node:assert/strict"
import fs from "node:fs"
import os from "node:os"
import path from "node:path"
import { test } from "node:test"

import {
  DEFAULT_REPOSITORY_ROOT,
  detectTextIntegrityDefects,
  foreignersProvisionLane,
  generateInventory,
  generateLedgers,
  markReview,
  markReviews,
  provisionLaneMidpoint,
  validateLedgers,
} from "../ledger.mjs"

/**
 * @typedef {import("../ledger.mjs").LedgerEntry} LedgerEntry
 * @typedef {import("../ledger.mjs").LedgerFile} LedgerFile
 */

test("text integrity gate rejects corruption and mixed-script word forms", () => {
  const defects = detectTextIntegrityDefects(
    [
      "????????",
      "bad replacement: �",
      "mojibake: â€œtekstâ€",
      "hybrid: заświadczenie",
    ].join("\n")
  )

  assert.deepEqual(
    defects.map((defect) => defect.code),
    [
      "placeholder-question-marks",
      "unicode-replacement-character",
      "mojibake-sequence",
      "mixed-script-word",
    ]
  )
  assert.deepEqual(
    defects.map(({ line, column }) => ({ line, column })),
    [
      { line: 1, column: 1 },
      { line: 2, column: 18 },
      { line: 3, column: 11 },
      { line: 4, column: 10 },
    ]
  )
})

test("text integrity gate accepts Polish terms separated from Ukrainian prose", () => {
  assert.deepEqual(
    detectTextIntegrityDefects(
      "Термін zaświadczenie означає довідку; перевірте właściwy organ."
    ),
    []
  )
})

test("text integrity gate catches mojibake in Polish and Ukrainian text", () => {
  assert.deepEqual(
    detectTextIntegrityDefects("zaÅ›wiadczenie oraz Ð¿Ñ€Ð°Ð²Ð¾").map(
      (defect) => defect.code
    ),
    ["mojibake-sequence"]
  )
})

/**
 * @template T
 * @param {(reviewDir: string) => T} callback
 * @returns {T}
 */
function withTempReviewDir(callback) {
  const reviewDir = fs.mkdtempSync(path.join(os.tmpdir(), "content-review-"))
  try {
    return callback(reviewDir)
  } finally {
    fs.rmSync(reviewDir, { recursive: true, force: true })
  }
}

/**
 * @param {string} reviewDir
 * @param {string} lane
 * @returns {LedgerFile}
 */
function readLane(reviewDir, lane) {
  return JSON.parse(
    fs.readFileSync(path.join(reviewDir, "lanes", `${lane}.json`), "utf8")
  )
}

/**
 * @param {string} reviewDir
 * @param {string} lane
 * @param {LedgerFile} ledger
 */
function writeLane(reviewDir, lane, ledger) {
  fs.writeFileSync(
    path.join(reviewDir, "lanes", `${lane}.json`),
    `${JSON.stringify(ledger, null, 2)}\n`
  )
}

test("generates deterministic inventory counts and lane assignment", () => {
  withTempReviewDir((reviewDir) => {
    const first = generateLedgers({ reviewDir })
    const second = generateLedgers({ reviewDir })

    assert.deepEqual(first.summary, second.summary)
    assert.equal(first.summary.byFamily.provision, 1478)
    assert.equal(first.summary.byFamily["learning-module"], 43)
    assert.equal(first.summary.byFamily["map-topic"], 63)
    assert.equal(first.summary.byFamily["evidence-document"], 18)
    assert.equal(first.summary.byFamily["case-guide"], 9)
    assert.ok(first.summary.byFamily["shared-renderer"] >= 28)

    const foreignersA = readLane(reviewDir, "foreigners-a").entries.filter(
      (entry) => entry.family === "provision"
    )
    const foreignersB = readLane(reviewDir, "foreigners-b").entries.filter(
      (entry) => entry.family === "provision"
    )
    assert.equal(
      first.summary.laneBoundaries["ustawa-o-cudzoziemcach"].midpoint,
      347
    )
    assert.equal(foreignersA.length, 347)
    assert.equal(foreignersB.length, 346)

    const entries = generateInventory()
    const court = entries.find(
      (entry) =>
        entry.path === "app/data/legal-library/learning/modules/kpa/court.ts"
    )
    assert.ok(court)
    assert.equal(court.documentId, "kpa")
    assert.equal(court.lane, "kpa")

    for (const requiredPath of [
      "app/features/legal-map/ui/legal-map-overview.tsx",
      "app/features/legal-map/ui/legal-map-navigation.tsx",
      "app/features/documents/ui/document-catalog-navigation.tsx",
      "app/features/law-library/ui/kpa/kpa-route-navigation.tsx",
      "app/data/documents/catalog.ts",
    ]) {
      assert.ok(
        entries.some((entry) => entry.path === requiredPath),
        requiredPath
      )
    }
  })
})

test("foreigners provision lane split uses the active edition midpoint", () => {
  assert.equal(provisionLaneMidpoint(637), 319)
  assert.equal(foreignersProvisionLane(319, 637), "foreigners-a")
  assert.equal(foreignersProvisionLane(320, 637), "foreigners-b")

  assert.equal(provisionLaneMidpoint(682), 341)
  assert.equal(foreignersProvisionLane(341, 682), "foreigners-a")
  assert.equal(foreignersProvisionLane(342, 682), "foreigners-b")

  assert.equal(provisionLaneMidpoint(693), 347)
  assert.equal(foreignersProvisionLane(347, 693), "foreigners-a")
  assert.equal(foreignersProvisionLane(348, 693), "foreigners-b")
})

test("baseline validation allows pending review state while strict mode fails it", () => {
  withTempReviewDir((reviewDir) => {
    generateLedgers({ reviewDir })

    const baseline = validateLedgers({ reviewDir })
    assert.equal(baseline.ok, true)
    assert.equal(baseline.strict, false)

    const strict = validateLedgers({ reviewDir, strict: true })
    assert.equal(strict.ok, false)
    assert.ok(
      strict.issues.some((issue) => issue.code === "pending-authorReview")
    )
    assert.ok(
      strict.issues.some((issue) => issue.code === "pending-crossReview")
    )
    assert.equal(
      strict.issues.some((issue) => issue.code === "draft-knowledge-unit"),
      false
    )
  })
})

test("if-complete validation stays baseline-safe until the ledger declares completion", () => {
  withTempReviewDir((reviewDir) => {
    generateLedgers({ reviewDir })

    const incomplete = validateLedgers({ reviewDir, ifComplete: true })
    assert.equal(incomplete.ok, true)
    assert.equal(incomplete.strict, false)

    const indexPath = path.join(reviewDir, "index.json")
    const index = JSON.parse(fs.readFileSync(indexPath, "utf8"))
    fs.writeFileSync(
      indexPath,
      `${JSON.stringify({ ...index, declaredComplete: true }, null, 2)}\n`
    )

    const complete = validateLedgers({ reviewDir, ifComplete: true })
    assert.equal(complete.ok, false)
    assert.equal(complete.strict, true)
  })
})

test("validation detects duplicate entries, stale content hashes, and stale source hashes", () => {
  withTempReviewDir((reviewDir) => {
    generateLedgers({ reviewDir })
    const ledger = readLane(reviewDir, "kpa")
    ledger.entries.push({ ...ledger.entries[0] })
    ledger.entries[1] = { ...ledger.entries[1], contentHash: "0".repeat(64) }
    ledger.entries[2] = { ...ledger.entries[2], sourceTextHash: "1".repeat(64) }
    writeLane(reviewDir, "kpa", ledger)

    const result = validateLedgers({ reviewDir })
    assert.equal(result.ok, false)
    assert.ok(result.issues.some((issue) => issue.code === "duplicate-entry"))
    assert.ok(result.issues.some((issue) => issue.code === "duplicate-path"))
    assert.ok(
      result.issues.some((issue) => issue.code === "stale-content-hash")
    )
    assert.ok(
      result.issues.some((issue) => issue.code === "stale-source-text-hash")
    )
  })
})

test("validation detects missing, unassigned, and wrong-lane entries", () => {
  withTempReviewDir((reviewDir) => {
    generateLedgers({ reviewDir })
    const kpa = readLane(reviewDir, "kpa")
    const removed = kpa.entries.shift()
    assert.ok(removed)
    writeLane(reviewDir, "kpa", kpa)

    const teaching = readLane(reviewDir, "teaching-pages")
    teaching.entries.push({
      ...removed,
      id: "shared-renderer:unassigned-test",
      path: "app/not-a-real-review-target.tsx",
      family: "shared-renderer",
      lane: "teaching-pages",
    })
    teaching.entries[0] = { ...teaching.entries[0], lane: "kpa" }
    writeLane(reviewDir, "teaching-pages", teaching)

    const result = validateLedgers({ reviewDir })
    assert.equal(result.ok, false)
    assert.ok(result.issues.some((issue) => issue.code === "missing-entry"))
    assert.ok(result.issues.some((issue) => issue.code === "unassigned-entry"))
    assert.ok(result.issues.some((issue) => issue.code === "wrong-lane"))
  })
})

test("strict validation requires distinct accepted reviewer attestations without blockers", () => {
  withTempReviewDir((reviewDir) => {
    generateLedgers({ reviewDir })
    const ledger = readLane(reviewDir, "kpa")
    const entry = ledger.entries[0]
    ledger.entries[0] = {
      ...entry,
      authorReview: {
        reviewer: "same-person",
        reviewedAt: "2026-07-18T10:00:00.000Z",
        status: "accepted",
        blockers: [],
        hashAttestation: {
          contentHash: entry.contentHash,
          sourceTextHash: entry.sourceTextHash,
        },
      },
      crossReview: {
        reviewer: "same-person",
        reviewedAt: "2026-07-18T11:00:00.000Z",
        status: "accepted",
        blockers: ["not actually clear"],
        hashAttestation: {
          contentHash: "0".repeat(64),
          sourceTextHash: entry.sourceTextHash,
        },
      },
    }
    writeLane(reviewDir, "kpa", ledger)

    const result = validateLedgers({ reviewDir, strict: true })
    assert.equal(result.ok, false)
    assert.ok(result.issues.some((issue) => issue.code === "same-reviewer"))
    assert.ok(
      result.issues.some((issue) => issue.code === "crossReview-blockers")
    )
    assert.ok(
      result.issues.some(
        (issue) => issue.code === "crossReview-hash-attestation-mismatch"
      )
    )
  })
})

test("markReview records reviewer identity, timestamp, status, and hash attestation", () => {
  withTempReviewDir((reviewDir) => {
    generateLedgers({ reviewDir })
    const entry = readLane(reviewDir, "kpa").entries[0]
    const marked = markReview({
      reviewDir,
      id: entry.id,
      phase: "authorReview",
      reviewer: "author-a",
      status: "accepted",
    })

    assert.equal(marked.authorReview.reviewer, "author-a")
    assert.equal(marked.authorReview.status, "accepted")
    assert.ok(marked.authorReview.reviewedAt)
    assert.ok(marked.authorReview.hashAttestation)
    assert.match(marked.authorReview.reviewedAt, /^\d{4}-\d{2}-\d{2}T/u)
    assert.equal(
      marked.authorReview.hashAttestation.contentHash,
      entry.contentHash
    )
    assert.equal(
      marked.authorReview.hashAttestation.sourceTextHash,
      entry.sourceTextHash
    )
  })
})

test("markReview refuses stale ledger content or source hashes", () => {
  withTempReviewDir((reviewDir) => {
    generateLedgers({ reviewDir })
    const ledger = readLane(reviewDir, "kpa")
    const entry = ledger.entries[0]
    ledger.entries[0] = { ...entry, sourceTextHash: "9".repeat(64) }
    writeLane(reviewDir, "kpa", ledger)

    assert.throws(
      () =>
        markReview({
          reviewDir,
          id: entry.id,
          phase: "authorReview",
          reviewer: "author-a",
          status: "accepted",
        }),
      /ledger entry is stale/u
    )
  })
})

test("markReviews records one hash-bound batch without touching unselected entries", () => {
  withTempReviewDir((reviewDir) => {
    generateLedgers({ reviewDir })
    const marked = markReviews({
      reviewDir,
      lane: "kpa",
      family: "learning-module",
      phase: "authorReview",
      reviewer: "author-kpa",
      status: "accepted",
    })

    assert.equal(marked.length, 15)
    assert.ok(
      marked.every((entry) => {
        assert.ok(entry.authorReview.hashAttestation)
        return (
          entry.authorReview.reviewer === "author-kpa" &&
          entry.authorReview.hashAttestation.contentHash ===
            entry.contentHash &&
          entry.authorReview.hashAttestation.sourceTextHash ===
            entry.sourceTextHash
        )
      })
    )
    const ledger = readLane(reviewDir, "kpa")
    assert.ok(
      ledger.entries
        .filter((entry) => entry.family === "provision")
        .every((entry) => entry.authorReview.status === "pending")
    )
  })
})

test("markReviews requires an explicit bounded selector and fails before stale batch writes", () => {
  withTempReviewDir((reviewDir) => {
    generateLedgers({ reviewDir })
    assert.throws(
      () =>
        markReviews({
          reviewDir,
          lane: "kpa",
          phase: "authorReview",
          reviewer: "author-kpa",
          status: "accepted",
        }),
      /requires --all/u
    )

    const ledger = readLane(reviewDir, "kpa")
    const moduleEntry = ledger.entries.find(
      (entry) => entry.family === "learning-module"
    )
    assert.ok(moduleEntry)
    moduleEntry.contentHash = "9".repeat(64)
    writeLane(reviewDir, "kpa", ledger)

    assert.throws(
      () =>
        markReviews({
          reviewDir,
          lane: "kpa",
          family: "learning-module",
          phase: "authorReview",
          reviewer: "author-kpa",
          status: "accepted",
        }),
      /ledger entry is stale/u
    )
    assert.ok(
      readLane(reviewDir, "kpa")
        .entries.filter((entry) => entry.family === "learning-module")
        .every((entry) => entry.authorReview.status === "pending")
    )
  })
})

test("all generated ledger paths exist in the repository", () => {
  withTempReviewDir((reviewDir) => {
    const { entries } = generateLedgers({ reviewDir })
    for (const entry of entries) {
      assert.equal(
        fs.existsSync(path.join(DEFAULT_REPOSITORY_ROOT, entry.path)),
        true,
        entry.path
      )
    }
  })
})
