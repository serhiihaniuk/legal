# KPA scope and different requests

Completed on 12.09.2026. The [preparation](100-kpa-system-preparation.md) and [source notes](100-kpa-system-source-notes.md) record the exact reader question and statutory scope.

## Reader-facing change

The system module now explains KPA's several procedures, individual decisions and legally enabled silence, ordinary certificates, complaints and organizational proposals, and the code's exclusions and definitions. Five authored sections replace the short repeated orientation. A completed example compares four fictional Polish draft requests. It identifies their distinct subjects without pretending that a permit, certificate, complaint outcome or organizational change has already been obtained.

The certificate request is not linked to the special residence/MOS certificate. A Dział VIII complaint is not linked to a zażalenie or WSA guide as though they were the same document. Supporting rules have typed provision references. Stable module identity, routes and navigation are preserved.

The KPA adapter no longer injects a system-only course map. The ordinary module index and previous/next controls remain. Regression tests cover the authored sections appearing once, the complete example and specimen surviving both projections, and absence of the injected course block.

## Independent review and sources

Ohm authored the module. Copernicus independently read all fields, all five sections and all sixteen Polish specimen cells. Root read the complete draft, final changes and live page. Three final refinements specify a referral in any legal provision, include a terminating postanowienie in the silence explanation, and name wznowienie postępowania. Accepted module SHA256: `D11A4633749EB0E0EF6E6B9273576D9CE07AC4B292B96FA021E99A83E88D872D`.

Official checks cover current KPA 1691, articles 1–5, 104, 122a, 217–219, 222/227 and 233–241, plus ELI amendment metadata and amendment 769's transition. The module's source check is dated 12.09.2026; the atlas baseline is unchanged. Root reread the relevant official compiled passages. The example concludes a comparison of requests, not their formal validity or entitlement to success.

Copernicus also reviewed the adapter and rendering-test delta. Acceptance applies to this module and bounded presentation change. The unchanged opening provision commentary was read but is not accepted by this batch. Its remaining writing issues include the duplicate RODO label in article 2a, overbroad wording about RODO requests, imprecise article 3 qualifications and the article 5 interpretation caveat. These belong to the provision-commentary review; no whole-page or whole-act renewal is claimed.

## Verification

`npm run verify` passed: both typechecks, generated checks, lint, formatting, 275 application tests, 70 corpus tests with one skipped, 15 review tests, editorial validation and production build. The log is `.reference/batch100-verify.log`. Reference previews passed for 106 documents, 62 map nodes, nine cases and 2,573 provisions. Baseline review-ledger validation passed for 1,753 entries; this is not strict legal acceptance.

The actual system route was inspected at 1440×1000 and 360×800. All authored headings and the Polish specimen were present. No dead on-page anchors or viewport overflow were found. The table's mobile region was 310 px wide with 512 px of content; ArrowRight moved it by 40 px without widening the page. Keyboard activation of the example's article 217 reference opened `/law/kpa/provisions/kpa-art-217`. Browser error output was empty; console output contained only Vite and React DevTools messages. The isolated batch100 browser session was closed.

Inspected screenshots: `C:/Users/Serge/.agent-browser/tmp/screenshots/screenshot-1789240235829.png` and `C:/Users/Serge/.agent-browser/tmp/screenshots/screenshot-1789240296488.png`. The mobile capture shows the certificate row within the separately scrollable table.

## Remaining work

Writing acceptance is 235 of 1,843 files. Three of 43 law modules now have matching acceptance; forty remain. The 1,478 provision explanations, remaining shared copy, corpus fidelity and whole-project legal acceptance are still open. [Batch 101 preparation](101-work-definitions-preparation.md) identifies the next module's employer, agency, user and foreign-entity distinctions, including the generic route's scoped-date display issue. Preparation is not acceptance. The full goal remains active.
