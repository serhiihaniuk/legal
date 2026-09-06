# Map chapter navigation and overview

Implemented the first part of the contents audit on 06.09.2026. The map now uses subject chapters. Its numbers describe the contents order, rather than a required sequence of procedural steps.

## Changes

- One registry supplies chapter titles, descriptions, topic assignments and counts. Evidence precedes filing. Pending stay belongs with current status; CUKR and ordinary Ukrainian routes belong with residence choices; formal/substantive completeness belongs with filing; two-instance review belongs with remedies.
- Existing `#stage-*` anchors retain their destinations. Selecting a chapter updates the URL and opens its list. Direct anchors and browser Back restore chapter selection. Chapter movement has no animation, including with reduced-motion preferences.
- Article headers show one primary chapter. Removed the old subject-group badge, competing parent path and repeated stage question/outcome. Existing child and related links remain available as one flat related-reading list. Navigation rows contain plain labels rather than interactive legal links nested in buttons.
- The old `/map/study-loop` route redirects to the optional reading guide. Its authored record remains available for historical inventory and later source cleanup; it is not a public map chapter.
- The homepage explains the differences between current stay, requested residence, work, evidence and procedure. A completed fictional example resolves conflicting work-start dates through an amending document, without claiming a permit or right-to-work outcome. Chapter descriptions say what is currently available. The decisions chapter does not advertise the still-unwritten card and post-decision coverage.

## Source scope

Checked the official ELI entry and attached KPA text for the homepage's evidence rule:

- https://eli.gov.pl/eli/DU/2025/1691/ogl
- https://eli.gov.pl/api/acts/DU/2025/1691/text/T/D20251691L.pdf, printed page 18, art. 77 § 1 and art. 80.

The initial `/text/U/D20251691Lj.pdf` request failed; the official ELI attachment supplied the text. The cited paragraphs concern collecting and considering the complete evidence and assessing whether a circumstance is proved. The example is an authored illustration, not an administrative decision. This bounded source check does not revalidate other map topics or advance the global legal-state baseline.

## Verification

- Final full `npm run verify` passed with 182 application tests in 36 files, corpus and editorial checks, and the production build. A subsequent mobile overview-label fix passed type checking, eight focused tests and another production build. Keyboard chapter selection reached `#stage-status` and opened its contents with no browser errors.
- The first full `npm run verify` passed with 181 application tests in 36 files. A later fresh direct-fragment browser check exposed a hydration mismatch that those client-side tests did not cover. The server cannot see the URL fragment, so chapter selection now waits until hydration before reading it. A regression test renders the fragment-free server response and hydrates it with a browser chapter URL. Fresh desktop and mobile sessions confirm that the correct chapter opens without recoverable hydration errors.
- New coverage checks require every canonical node to appear exactly once in chapter navigation or have an explicit compatibility destination. The current result is 62 published topics and one retired route. Unknown nodes fail rather than silently disappearing from chapter lists.
- Route tests cover server/client hydration, direct legacy chapter anchors, topic selection, Back, returning a moved topic to its current-status chapter, and the retired-route redirect. The DOM test environment omits `Element.getAnimations`, which Base UI's scroll area uses; a scoped test-only implementation resolves that environment error. Actual scroll behavior was checked in the browser.
- Browser checks at 1440 px and 360 px showed no horizontal page overflow. Sidebar chapter selection opened the correct list. Mobile return from `pending-stay` reached `#stage-status`, opened the list and preserved the destination on Back. Direct `#stage-protection` opened the remedies chapter. `/map/study-loop` reached `/study`. Browser errors were empty.
- Desktop overview and mobile chapter screenshots were inspected. The final related-row cleanup removed legacy indentation and nested interactive links; its type check, production build and browser inspection were repeated after the full verification run.

Writing acceptance covers the chapter registry, overview article, navigation labels and map route copy. It does not cover every article rendered inside the map or the shared legacy article template. The next work is an authored article contract with topic-specific chapters and examples, followed by the residence branch rewrite and the audit's remaining splits, merges and coverage gaps. Full source-layout and independent legal review remain pending.
