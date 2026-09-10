# Local particle renderer

Copied from `../particles/src` on 10 September 2026. The six JavaScript modules are unchanged; `index.d.ts` describes their public API. `NOTICE.md` retains the source attribution, and the noise module retains its license.

The application installs this directory through a local `file:` dependency. Builds do not depend on a sibling checkout, CDN or the original downloaded site bundles. To update the renderer, review and replace these modules from the source package and verify the homepage integration.

The homepage loads the renderer after mounting. It owns the full-height hero background, uses the original density of 230, respects reduced motion and releases resources when the route unmounts. The React adapter and integration tests live in `app/features/home/ui/home-particles.tsx` and its adjacent test file.
