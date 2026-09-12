import test from "node:test"
import assert from "node:assert/strict"
import fs from "node:fs"
import { extractArticles, extractProvisions } from "../lib/extraction.mjs"
import { validateConfig, ConfigValidationError } from "../lib/config.mjs"

const endMarker = "na podstawie umowy o pracę."
const tail =
  "©Kancelaria Sejmu\n2026-06-17\nRozdział 7\nIndywidualne konta oraz przetwarzanie danych"
const pages = [
  {
    pdfPage: 57,
    text: `Art. 71. 1. Pierwsza część.\n4. Zatrudnienie ${endMarker}`,
  },
  { pdfPage: 58, text: `${tail}\nArt. 72. Treść kolejnej normy.` },
]
const boundary = {
  locator: "Art. 71",
  pdfPage: 57,
  endMarker,
  expectedTrailingText: tail,
  reason: "Verified chapter boundary",
}

test("separates a verified next-page chapter from an article and its page range", () => {
  const source = structuredClone(pages)
  const result = extractProvisions(source, {
    documentId: "work",
    editionId: "work-2026",
    sourcePdfSha256: "a".repeat(64),
    articleEndBoundaries: [boundary],
  })
  assert.equal(result[0].text, pages[0].text)
  assert.equal(result[0].endPdfPage, 57)
  assert.equal(result[1].text, "Art. 72. Treść kolejnej normy.")
  assert.equal(result[1].startPdfPage, 58)
  assert.deepEqual(source, pages)
})

test("retains real continuation and quoted chapter text before a same-page boundary", () => {
  const source = [
    {
      pdfPage: 1,
      text: "Art. 1. Przepis odnosi się do rozdziału 2.\nCytat: «Rozdział 3\nTytuł cytowany»;",
    },
    {
      pdfPage: 2,
      text: "dalsza treść przepisu.\nRozdział 4\nNowy tytuł\nArt. 2. Następny przepis.",
    },
  ]
  const result = extractArticles(source, {
    articleEndBoundaries: [
      {
        locator: "Art. 1",
        pdfPage: 2,
        endMarker: "dalsza treść przepisu.",
        expectedTrailingText: "Rozdział 4\nNowy tytuł",
        reason: "Verified boundary",
      },
    ],
  })
  assert.equal(result[0].endPdfPage, 2)
  assert.equal(result[0].text, source[0].text + "\ndalsza treść przepisu.")
  assert.equal(result[1].text, "Art. 2. Następny przepis.")
  assert.match(extractArticles(source)[0].text, /Rozdział 4/)
})

test("rejects stale, missing, ambiguous and incorrectly located article endings", () => {
  for (const entry of [
    { ...boundary, expectedTrailingText: "Different tail" },
    { ...boundary, endMarker: "Missing marker" },
    { ...boundary, locator: "Art. 999" },
    { ...boundary, pdfPage: 58 },
    { ...boundary, pdfPage: 56 },
    { ...boundary, endMarker: "" },
  ])
    assert.throws(
      () => extractArticles(pages, { articleEndBoundaries: [entry] }),
      /boundary|ending|Text after/i
    )
  assert.throws(
    () =>
      extractArticles(
        [{ ...pages[0], text: pages[0].text + "\n" + endMarker }, pages[1]],
        { articleEndBoundaries: [boundary] }
      ),
    /exactly once/
  )
  assert.throws(
    () =>
      extractArticles(pages, { articleEndBoundaries: [boundary, boundary] }),
    /Duplicate/
  )
})

test("matches the ending in the target article's page fragment, not a neighbouring article", () => {
  const source = [
    {
      pdfPage: 1,
      text: "Art. 1. Same ending.\nArt. 2. Start.",
    },
    {
      pdfPage: 2,
      text: "Continuation. Same ending.\nRozdział 2\nTitle\nArt. 3. Next.",
    },
  ]
  const ending = {
    locator: "Art. 2",
    pdfPage: 1,
    endMarker: "Same ending.",
    expectedTrailingText: "Rozdział 2\nTitle",
    reason: "The target article ends on page 2, not beside article 1's phrase",
  }
  assert.throws(
    () => extractArticles(source, { articleEndBoundaries: [ending] }),
    /own fragment on the ending page/
  )
  const result = extractArticles(source, {
    articleEndBoundaries: [{ ...ending, pdfPage: 2 }],
  })
  assert.equal(result[1].text, "Art. 2. Start.\nContinuation. Same ending.")
  assert.equal(result[1].endPdfPage, 2)
  assert.equal(result[0].text, "Art. 1. Same ending.")
  assert.equal(result[2].text, "Art. 3. Next.")
})

test("article boundary configuration rejects invalid scope and incomplete evidence", () => {
  const config = JSON.parse(
    fs.readFileSync(
      new URL(
        "../../../legal-corpus/documents/powierzanie-pracy-2025-621-u-2026-07-18.json",
        import.meta.url
      ),
      "utf8"
    )
  )
  const candidate = (
    /** @type {unknown} */ value,
    profile = "polish-statute-art-v1"
  ) => ({
    ...config,
    extraction: { ...config.extraction, profile, articleEndBoundaries: value },
  })
  assert.doesNotThrow(() => validateConfig(candidate([boundary])))
  for (const value of [
    [],
    null,
    [null],
    [boundary, boundary],
    [{ ...boundary, reason: "" }],
    [{ ...boundary, pdfPage: 101 }],
    [{ ...boundary, expectedTrailingText: "" }],
    [{ ...boundary, locator: "Art 71" }],
  ]) {
    assert.throws(() => validateConfig(candidate(value)), ConfigValidationError)
  }
  assert.throws(
    () =>
      validateConfig(candidate([boundary], "polish-regulation-paragraph-v1")),
    ConfigValidationError
  )
})
