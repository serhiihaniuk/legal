# Batch 43: homepage redesign with particles

Integrated the supplied local particle package as a vendored dependency with its source attribution and noise license. The six JavaScript modules are unchanged. A typed React adapter defers loading, releases the renderer on unmount and preserves usable page content when WebGL is unavailable.

The homepage now has a full-height centered hero, a large sans-serif Ukrainian headline, two pill-shaped navigation actions and the original particle palette and density (230). The homepage header omits the documentation grid marks. The directory below contains six numbered destinations, a short introduction and live content counts. Documentation pages retain their shared shell.

Reviewed the homepage introduction, navigation labels and pause/resume labels. No legal claims or legal-state baseline changed. The writing records cover these two homepage components only; the broader rewrite and independent legal review remain open.

## Verification

Full npm run verify passed with 202 application tests, corpus and ledger-tool checks, editorial checks and production build. After the mobile visibility adjustment, typecheck, the four lifecycle tests, the Chromium checks and production build passed again. The adapter compensates for width-based particle scaling below 1200 px and responds to container resizing.

Real Chromium checks covered animated pixels, pause/resume, route cleanup and remount, 360 px overflow, reduced motion changes and usable content without WebGL. Desktop and mobile screenshots were inspected. No page errors were reported. Writing acceptance is 149 of 1,805 files. The legal ledger validates 1,715 entries; changed-page attestations remain pending.

Added docs/design/logo-brief.md with a project description, image-generation prompt and refinement prompts. No logo was generated or selected.
