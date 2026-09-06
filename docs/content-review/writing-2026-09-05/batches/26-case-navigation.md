# Case navigation visibility

The selected family-case link was outside the visible navigation container on a direct mobile load: at 360 px viewport width, Rodzina began at 465.5 px. This left the current case invisible until the reader scrolled horizontally.

Moved the case-family and subtype navigation into `CaseRouteNavigation`. Its local scrolling component reveals the active link on route changes and observes container and selected-link resizing. It changes only the container's horizontal offset, without moving the document vertically or adding animation. Both navigation levels identify the active item with `aria-current`.

At the user's request, both case navigation strips use the existing `no-scrollbar` utility. Horizontal overflow remains scrollable. No global scrollbar styling was changed.

Verification on 06.09.2026:

- Full `npm run verify` passed with 176 application tests, corpus and review-tool checks, editorial coverage and the production build.
- Rebuilt after adding the scrollbar utility. Browser computed style confirms `scrollbar-width: none` and `overflow-x: auto`; content width 629 px remains scrollable inside a 342 px container.
- Family and other-purpose direct loads at 360 px reveal their selected links. Other-purpose selection and browser Back restore the appropriate active item.
- Resizing from 1440 to 360 px with the document at vertical offset 700 preserves that offset and reveals the active link horizontally. Document width matches viewport width at both sizes. Desktop and mobile screenshots were inspected; browser errors were empty.
- Component tests cover subtype navigation, Back and changing the document family with its available subtypes. Geometry was checked in the browser rather than inferred from a DOM test environment without layout.

No legal content or source-review dates changed. The user has prioritised the whole map module next: its landing page must be a useful article, and detailed topics must explain concrete rules and completed examples instead of generic sentences. Apply the same landing-page standard to other modules during the continuing review.
