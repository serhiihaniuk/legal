# PROMINENT: Decision 1/80 citation — needs owner verification

Source: `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/part-06.ts`,
entry `ustawa-o-cudzoziemcach-art-189` (`claims[0].text` and
`rules[0].explanation`).

## What was cited

Both occurrences of **"art. 13 Decision nr 1/80"** now wrap `art. 13` with
`foreignersLaw.external("art. 13", DECISION_1_80_URL)`, matching the
established sibling convention of wrapping only the article token and
leaving the act's descriptive name ("Decision nr 1/80") as plain trailing
prose (same pattern as `part-01a.ts`'s `art. 20 ustawy o wojewodzie...` and
`part-04.ts`'s `art. 29 ust. 3 pkt 1 ustawy o rynku pracy...`).

This cites **Article 13 of Decision No 1/80 of the EEC–Turkey Association
Council (19 September 1980)** — the "standstill clause" on new restrictions
to Turkish workers' access to employment. It is an international
instrument with no act in the reference registry, so `.article()` is
unavailable; one new URL constant, `DECISION_1_80_URL`, was introduced.

## Why this needs owner verification — MORE than the usual `.external()` case

Decision No 1/80 has an unusual publication history: **it was never
published in the Official Journal of the European Union.** This was
confirmed by web search across multiple queries — EUR-Lex has no CELEX
entry for the decision's primary text itself (only for CJEU case law that
discusses or quotes it), and every source describing the decision's
provenance repeats the same note, e.g. that its text is only available "in
EEC-Turkey Association Agreement and Protocols and other basic texts,
Office for Official Publications of the European Communities, Brussels,
1992" — a print-only compilation.

Because of this, **no canonical EUR-Lex URL for the decision's text
exists** (attempts to fetch several EUR-Lex CELEX/case-law pages for
verification were blocked by EUR-Lex's own bot-detection (AWS WAF
challenge, `x-amzn-waf-action: challenge`) — those pages were not bypassed,
per the standing rule against defeating bot detection).

The URL chosen instead —
`https://www.irishimmigration.ie/wp-content/uploads/2021/06/ankara-agreement.pdf`
— is hosted by the Irish Immigration Service Delivery (an executive office
of the Irish Department of Justice) and was fetched and confirmed to be a
reproduction of "Decision No 1/80 of the Association Council of 19
September 1980." Its PDF text layer is not cleanly extractable by the
fetch tooling used here, so the exact wording of Article 13 within that
specific file could not be visually re-confirmed end-to-end; the article's
text was instead corroborated via CJEU case-law commentary quoting it
verbatim ("The Member States of the Community and Turkey may not introduce
new restrictions on the conditions of access to employment applicable to
workers and members of their families legally resident and employed in
their respective territories.").

**Owner action requested**: confirm this URL is an acceptable citation
target for Article 13 of Decision 1/80, or substitute a preferred
authoritative mirror (e.g. an official EU institution PDF, a national
transposition register, or a specific EUR-Lex case-law page reproducing
the article) if one is preferred over a national immigration authority's
hosted copy.
