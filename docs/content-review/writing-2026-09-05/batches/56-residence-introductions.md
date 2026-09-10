# Batch 56: purpose, common rules and permit comparison

## Reader question and organization

The residence chapter opened with three pages repeating generic advice. Keep their stable IDs and separate their jobs. `goal-of-stay` explains how actual circumstances relate to the requested permit; `temporary-common` explains filing, pending stay and termination; `temporary-goals` compares the kinds of permit and leads into the six existing child branches. No route migration is required.

## Source findings

Official sources checked on 10.09.2026:

- https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf: the compiled foreigners act, including the marked changes introduced by Dz.U. 2025 poz. 1794 and Dz.U. 2026 poz. 203. Scope includes 98–113c, 114, 127, 142, 144, 147–148b, 151, 158–159, 169, 181, 186 and 190.
- https://eli.gov.pl/api/acts/MP/2026/370/text.pdf: the MOS commencement notice, effective 27.04.2026.
- https://eli.gov.pl/api/acts/DU/2026/203/text/O/D20260203.pdf: article 45, the listed ordinary-permit categories and biometric exceptions for covered UKR applicants.

Article 98 does not impose a universal ranking of work, study and family. Genuine circumstances can coexist, while each available ground retains its own conditions. The general period over three months has explicit exceptions. Three years is the general maximum, not a universal duration for every special ground. The Polish-spouse route does not inherit the full foreign-family income, insurance and housing package. Current study provisions must reflect MOS and register checks, rather than treating the repealed admission-certificate requirement as universal. UKR access does not open every ordinary category.

The common page distinguishes receiving a MOS application, lawful pending stay, formal defects, refusal to initiate, refusal on merits and discontinuance. It preserves paper and UKR exceptions. It does not promise a universal 60-day resolution. The article 113c fee rule remains limited to its specified payment and decisions.

## Review scope

A separate agent reviewed the information architecture. Another verified the comparison sources and authored that page. A third authored the common rules and independently reviewed the purpose article. The root agent reviewed the resulting prose, source qualifications, examples and rendering. These are bounded batch reviews, not whole-project independent legal acceptance. Each article has a scoped 10.09.2026 date; the atlas baseline remains 18.07.2026.

## Examples

The purpose article contains a filled case note about a Polish spouse with concurrent part-time employment. The common article separates timely filing, pending lawful stay and unresolved merits in a dated table. The comparison article supplies its own completed comparison. Specimens are expressly fictional working records, not official forms or promises of a permit.

## Verification

Full `npm run verify` passed, including type checking, publication/corpus checks, lint, formatting, tests and production build. `npm run test:previews` passed for 5 acts, 2,573 provisions, 67 documents, 63 map nodes, 9 case routes and 7 official sources. Inspected all three articles at desktop and mobile widths. Section anchors, keyboard table scrolling, the family-evidence document link, article 144 navigation and the study/research child route work. At 360 px, page width stays 360 px. Browser error check was empty. The independent prose review caught a link to requirements-table where evidence-matrix was intended; it was corrected before final checks.

## Homepage cold-load follow-up

The existing font implementation remained stable, but the old development server served different stylesheet URLs to SSR and the client, causing hydration failure. Two stale instances belonging to this repository were stopped and one fresh hidden server started at 127.0.0.1:5173. No font source change was required. A separate agent verified cold-cache loads at 1440 × 1000 and 390 × 844 with 400 ms latency and 1 Mbps download. Both transferred the complete font, kept heading and text geometry unchanged through hydration and particle mounting, and had zero layout shifts and runtime errors. This covers Chromium emulation on the development server, not physical Safari/iOS or production deployment.

## Remaining work

Continue with the detailed work, Blue Card and business map articles and the permanent/resident parent. The remaining map topics, 43 law-learning modules, 1,478 provision commentary files, complete original PDF-layout verification and distinct independent legal acceptance remain open.
