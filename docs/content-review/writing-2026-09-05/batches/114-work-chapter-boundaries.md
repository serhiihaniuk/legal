# Verified chapter endings in the work act

Completed 12.09.2026. The [independent source review](114-work-chapter-boundary-source-review.md) records the pinned official PDF, fourteen visually inspected pages and ten exact endings. This closes the defect recorded in preparation 114.

Articles 25, 34, 39, 44, 60, 71, 77, 83, 86 and 101 no longer contain the following chapter heading. End pages for 39, 60, 71 and 101 now stop before that following page. Article 25 retains its real continuation; article 101 retains all quoted replacement provisions. The original PDF and all 100 page texts remain unchanged.

The importer accepts explicit reviewed article endings. Each configuration identifies a locator, page, unique ending marker, exact expected discarded suffix and reason. It rejects stale, ambiguous or incomplete evidence. It does not remove arbitrary occurrences of "Rozdział". Copernicus found a counterexample in the first page check: a neighbouring article could contain the same phrase. He corrected accumulation to retain each target article's own page fragments and added the failing example as a regression. Root read the final implementation and regression. Focused boundary tests pass 5/5; extraction from the actual pinned pages exactly matches all 115 generated articles.

Root and Copernicus independently compared generated data with HEAD. All 115 IDs and ordering remain; 105 provisions are entirely unchanged. The ten edits retain exactly the original prefix and remove exactly the reviewed suffix. Only text, text hash and the four ending pages change in provision records. Source layout was regenerated for these hashes and page ranges, and the edition comparison was rebuilt. The comparison is recorded locally in `.reference/batch114-corpus-comparison.json`.

The rebuild also refreshed official API metadata: `changeDate` moved from June 17 to August 7 and the API lists implementing act DU2026/1072. This observation is retained as fetched metadata. It is not a review of that implementing act, a change to compiled PDF bytes, or renewal of the edition's legal-status evidence. The July 18 source and global legal baseline remain unchanged.

## Verification

Combined with batch 111, `npm run verify` passed both typechecks, registry/source-layout checks, lint, formatting, 312 application tests, 75 corpus tests with one skipped, 15 review tests, editorial validation and production build. Reference previews passed for 106 evidence documents, 62 map nodes, nine cases and 2,573 provisions. Baseline ledger validation passed for 1,753 entries. Logs are `.reference/batch111-114-verify.log`, `batch111-114-previews.log` and `batch111-114-ledger-validate.log`. Existing build-size and PDF diagnostics remain; these checks do not confer full legal acceptance.

The live development server retained old imported data after the atomic corpus rebuild. Direct served JSON and disk data were correct while the route still showed the old suffix. Rewriting the same files did not invalidate that server state. Restarting the identified development process resolved it. Root then checked article 71 at 360×800 and 1440×1000: four paragraphs, no next chapter, no page overflow. The PDF tab targets page 57. Keyboard activation of next article reaches article 72 on page 58. Article 101 renders its quoted ending and retains its two source-note pages without chapter 11. No browser errors were recorded.

Root inspected screenshots `screenshot-1789248526986.png` and `screenshot-1789248615434.png` under `C:/Users/Serge/.agent-browser/tmp/screenshots/`. These are browser-emulation checks. Original-source fidelity across the other provisions and acts remains pending.
