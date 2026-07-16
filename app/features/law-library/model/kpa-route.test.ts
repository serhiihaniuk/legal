import { describe, expect, it } from "vitest"

import { resolveKpaRouteState, toKpaSelectionUrl } from "./kpa-route"

describe("KPA route state", () => {
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
