import { cleanup, render, screen, within } from "@testing-library/react"
import { afterEach, describe, expect, it } from "vitest"
import { MemoryRouter } from "react-router"
import type { LegalExplanation } from "~/data/legal-library/contracts"
import { createLegalTextAuthor } from "~/data/legal-library/legal-text"
import { legalTextPlainText } from "~/data/legal-library/legal-text"
import article1 from "~/data/legal-library/editorial/kpa/articles/article-art-1"
import article2 from "~/data/legal-library/editorial/kpa/articles/article-art-2"
import article2a from "~/data/legal-library/editorial/kpa/articles/article-art-2a"
import article3 from "~/data/legal-library/editorial/kpa/articles/article-art-3"
import article4 from "~/data/legal-library/editorial/kpa/articles/article-art-4"
import article5 from "~/data/legal-library/editorial/kpa/articles/article-art-5"
import { buildProvisionExplanationView } from "../../model/provision-explanation"
import { ProvisionExplanation } from "./provision-explanation"

afterEach(cleanup)

const kpa = createLegalTextAuthor("kpa")
const summary = kpa.text`Пояснення ${kpa.article("2a", "положення KPA")}.`
const example = "Умовний приклад завершився виправленням робочого запису."
const explanation: LegalExplanation<"kpa"> = {
  id: "kpa/kpa-art-2a",
  documentId: "kpa",
  provisionId: "kpa-art-2a",
  sourceEditionId: "kpa-2025-1691",
  legalStateDate: "2026-09-12",
  verifiedAt: "2026-09-12",
  reviewStatus: "reviewed",
  language: "uk",
  summary,
  rules: [{ locator: "§ 1", explanation: "Зміст окремої частини." }],
  legalEffect: "Наслідок і його межа.",
  foreignersCase: example,
  claims: [
    { kind: "statute-text", text: summary, sourceLocator: "Art. 2a § 1" },
    {
      kind: "practical-inference",
      text: example,
      sourceLocator: "Art. 2a § 3",
    },
  ],
}

function show(value: LegalExplanation) {
  return render(
    <MemoryRouter>
      <ProvisionExplanation view={buildProvisionExplanationView(value)} />
    </MemoryRouter>
  )
}

describe("provision explanation source placement", () => {
  it.each([article1, article2, article2a, article3, article4, article5])(
    "preserves the complete authored opening commentary without repeating its claims",
    (part) => {
      const authored = Object.values(part)[0]
      if (!authored) throw new Error("Missing authored opening commentary")
      const { container } = show(authored)
      const paragraphs = [...container.querySelectorAll("p")].map(
        (p) => p.textContent
      )
      expect(
        paragraphs.filter(
          (text) => text === legalTextPlainText(authored.summary)
        )
      ).toHaveLength(1)
      expect(
        paragraphs.filter(
          (text) => text === legalTextPlainText(authored.foreignersCase)
        )
      ).toHaveLength(1)
      expect(paragraphs).toContain(legalTextPlainText(authored.legalEffect))
      expect(
        [...container.querySelectorAll("dd")].map((row) => row.textContent)
      ).toEqual(
        authored.rules.map((rule) => legalTextPlainText(rule.explanation))
      )
      expect(container.querySelector("#legal-provision-claims")).toBeNull()
    }
  )
  it("renders reused prose once while keeping both kinds and locators beside it", () => {
    const { container } = show(explanation)
    expect(screen.getAllByText(example)).toHaveLength(1)
    expect(screen.getAllByRole("link", { name: "положення KPA" })).toHaveLength(
      1
    )
    expect(screen.getByText("За текстом припису · Art. 2a § 1")).toBeTruthy()
    expect(screen.getByText("Практичний висновок · Art. 2a § 3")).toBeTruthy()
    expect(screen.getByText("Зміст окремої частини.")).toBeTruthy()
    expect(screen.getByText("Наслідок і його межа.")).toBeTruthy()
    expect(
      screen.getByText(
        "Стан права в поясненні: 2026-09-12 · Перевірено: 2026-09-12"
      )
    ).toBeTruthy()
    expect(container.querySelector("#legal-provision-claims")).toBeNull()
  })

  it("preserves distinct guidance and case-law claims with their sources", () => {
    const guidance = kpa.text`Інше ${kpa.external("офіційне пояснення", "https://www.gov.pl/web/udsc")}.`
    const { container } = show({
      ...explanation,
      claims: [
        ...explanation.claims,
        { kind: "official-guidance", text: guidance, sourceLocator: "UdSC" },
        {
          kind: "case-law",
          text: "Окремий висновок суду.",
          sourceLocator: "Умовний приклад",
        },
      ],
    })
    const additional = container.querySelector<HTMLElement>(
      "#legal-provision-claims"
    )
    expect(additional).not.toBeNull()
    if (!additional) throw new Error("Missing additional claims section")
    expect(
      within(additional)
        .getByRole("link", { name: "офіційне пояснення" })
        .getAttribute("href")
    ).toBe("https://www.gov.pl/web/udsc")
    expect(screen.getByText("Orzecznictwo · Умовний приклад")).toBeTruthy()
    expect(screen.getByText("Окремий висновок суду.")).toBeTruthy()
  })

  it("does not discard identical visible wording that links to a different provision", () => {
    const differentReference = kpa.text`Пояснення ${kpa.article("2", "положення KPA")}.`
    const view = buildProvisionExplanationView({
      ...explanation,
      claims: [{ kind: "statute-text", text: differentReference }],
    })
    expect(view.summaryClaims).toHaveLength(0)
    expect(view.additionalClaims).toHaveLength(1)
    show({ ...explanation, claims: view.additionalClaims })
    expect(
      screen
        .getAllByRole("link", { name: "положення KPA" })
        .map((link) => link.getAttribute("href"))
    ).toEqual([
      "/law/kpa/provisions/kpa-art-2a",
      "/law/kpa/provisions/kpa-art-2",
    ])
  })

  it("keeps different source attributions for the same paragraph", () => {
    show({
      ...explanation,
      claims: [
        ...explanation.claims,
        {
          kind: "official-guidance",
          text: summary,
          sourceLocator: "Інше джерело",
        },
      ],
    })
    expect(screen.getAllByRole("link", { name: "положення KPA" })).toHaveLength(
      1
    )
    expect(screen.getByText("Офіційне роз'яснення · Інше джерело")).toBeTruthy()
    expect(screen.getByText("За текстом припису · Art. 2a § 1")).toBeTruthy()
  })
})
