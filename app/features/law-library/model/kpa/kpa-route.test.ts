import { describe, expect, it } from "vitest"

import {
  loadKpaRouteData,
  resolveKpaRouteState,
  toKpaSelectionUrl,
} from "./kpa-route"

describe("KPA route state", () => {
  it("loads the complete authority provision panel in reading order", async () => {
    const data = await loadKpaRouteData({
      request: new Request("http://localhost/law/kpa/learn/authority"),
      params: { moduleId: "authority" },
    })

    expect(
      data.moduleArticleExplanations.map((entry) => entry.provisionId)
    ).toEqual([
      "kpa-art-17",
      "kpa-art-18",
      "kpa-art-19",
      "kpa-art-20",
      "kpa-art-21",
      "kpa-art-22",
      "kpa-art-23",
      "kpa-art-24",
      "kpa-art-25",
      "kpa-art-26",
      "kpa-art-27",
      "kpa-art-65",
      "kpa-art-66",
      "kpa-art-268a",
    ])
  })
  it("keeps legacy guide selections in the query-string contract", () => {
    const searchParams = new URLSearchParams("module=system")
    const state = resolveKpaRouteState({ params: {}, searchParams })

    expect(state).toMatchObject({
      canonicalLawMode: false,
      mode: "learning",
      selectedModule: "system",
      selectedArticle: "1",
    })
    expect(
      toKpaSelectionUrl({
        selection: { kind: "mode", value: "articles" },
        state,
        searchParams,
      })
    ).toBe("?view=articles&article=1")
  })

  it("keeps unrelated legacy query parameters while changing an article", () => {
    const searchParams = new URLSearchParams(
      "view=articles&article=64&from=home"
    )
    const state = resolveKpaRouteState({ params: {}, searchParams })

    expect(
      toKpaSelectionUrl({
        selection: { kind: "article", value: "65" },
        state,
        searchParams,
      })
    ).toBe("?view=articles&article=65&from=home")
  })

  it("maps compatibility route selections to canonical law-library URLs", () => {
    const searchParams = new URLSearchParams()
    const state = resolveKpaRouteState({
      params: { moduleId: "anatomy" },
      searchParams,
    })

    expect(state).toMatchObject({
      canonicalLawMode: true,
      mode: "learning",
      selectedModule: "anatomy",
    })
    expect(
      toKpaSelectionUrl({
        selection: { kind: "mode", value: "practice" },
        state,
        searchParams,
      })
    ).toBe("/law/kpa/practice/case-workflow")
    expect(
      toKpaSelectionUrl({
        selection: { kind: "article", value: "64" },
        state,
        searchParams,
      })
    ).toBe("/law/kpa/provisions/kpa-art-64")
  })

  it("falls back safely for unknown route selections", () => {
    const state = resolveKpaRouteState({
      params: { moduleId: "missing-module" },
      searchParams: new URLSearchParams("view=articles&article=missing"),
    })

    expect(state).toMatchObject({
      canonicalLawMode: true,
      mode: "learning",
      selectedModule: "system",
      selectedArticle: "1",
    })
  })
})
