# Summary

The UI is organized around a shared React Router shell (`app/routes/shell.tsx:5-12`) and a documentation-style three-column layout (`app/components/docs-layout.tsx:55-96`). Routes are explicitly declared in `app/routes.ts:8-29`; most route modules are thin composition layers, but `kpa.tsx` and `law-provision.tsx` are substantial page monoliths. The feature-component directory is flat and contains several very large files—up to 890 lines—combining navigation, formatting, content rendering, and direct data-library access. The 20 files under `app/components/ui/**` are recognizable shadcn/Base UI primitives and consistently centralize primitive variants with `cva` where variants exist. Feature code, however, mostly uses long inline Tailwind strings, with repeated documentation headers, mobile selectors, bordered definition rows, and article/provision renderers. Client state is local React state or URL state; there is no global client store, context provider, or client-side data cache in the mapped layer. Server loaders are limited to validation, redirects, legal-library resolution, and asynchronous explanation assembly; only the root exports metadata. The redesign should preserve the strong overview-first documentation shell, URL-addressable selections, semantic theme tokens, Ukrainian explanations, Polish legal terms, and official-source affordances while splitting feature boundaries and consolidating recurring presentation patterns.

# Inventory

- **Application entry and document root**
  - `app/root.tsx` — 73 lines; HTML document layout, global CSS import, root `<Outlet>`, root `meta`, scroll restoration/scripts, and global error boundary (`app/root.tsx:11-73`).
  - No separate browser/server entry files exist under `app/`; React Router supplies the runtime entries.
  - `app/app.css` and `app/typeset.css` are global styling entries; `app/root.tsx:10` imports `app.css`.
  - `app/lib/utils.ts` — 6 lines; only the shared `cn()` Tailwind/class-merging helper.

- **Route configuration and shell**
  - `app/routes.ts` — 31 lines; explicit React Router route configuration using `layout`, `index`, and `route`.
  - `app/routes/shell.tsx` — 14 lines; shared feature shell with `SiteHeader` and nested `<Outlet>`.
  - All pages sit beneath that shell (`app/routes.ts:8-29`).
  - Compatibility routes are module re-exports rather than duplicated implementations:
    - `app/routes/law-kpa-compat.tsx` — 1 line.
    - `app/routes/law-kpa-practice-compat.tsx` — 1 line.

- **Route modules**
  - `app/routes/home.tsx` — 200 lines; page-content monolith/landing page with embedded static section and example-flow definitions (`app/routes/home.tsx:11-79`).
  - `app/routes/case.tsx` — 117 lines; route composition plus case navigation markup; delegates the main document to `CaseStudyContent`.
  - `app/routes/documents.tsx` — 119 lines; feature route coordinating URL selection, local category state, redirects, navigation, and catalog/detail components.
  - `app/routes/kpa.tsx` — 578 lines; page-content monolith with loader, navigation renderers, mobile controls, view selection, and page composition.
  - `app/routes/law.tsx` — 88 lines; legal-library index page rendered directly inside `DocsLayout`.
  - `app/routes/law-document-index.tsx` — 13 lines; loader-backed compatibility redirect.
  - `app/routes/law-document.tsx` — 190 lines; loader-backed learning-page composition.
  - `app/routes/law-document-practice.tsx` — 168 lines; loader-backed practice-page composition.
  - `app/routes/law-provision.tsx` — 435 lines; page-content monolith for provision resolution, source viewer, explanations, references, and navigation.
  - `app/routes/legacy-case.tsx` — 7 lines; legacy route redirect/composition shim.
  - `app/routes/map.tsx` — 97 lines; feature route coordinating URL-selected node, local stage state, scrolling, and map components.
  - `app/routes/study.tsx` — 100 lines; route-local desktop/mobile navigation plus study content.

- **Route conventions, loaders, and metadata**
  - Route modules export a default page component; loaders are ordinary named `loader` exports consumed with `useLoaderData`, for example `app/routes/law-document.tsx:43-109,112-114`.
  - Loader-bearing routes are `documents`, `kpa`, `law-document-index`, `law-document-practice`, `law-document`, and `law-provision`.
  - Loaders validate route parameters and throw `Response` objects for 404s; for example, document/curriculum/module/edition checks appear at `app/routes/law-document.tsx:44-67`.
  - Loaders also perform canonical redirects (`app/routes/documents.tsx:26-38`) and asynchronously assemble reviewed legal explanations (`app/routes/law-document.tsx:70-105`).
  - Only `app/root.tsx:33-40` exports `meta`; individual route modules do not provide page-specific titles or descriptions.
  - URL parameters carry primary page identity (`documentId`, `moduleId`, `provisionId`, `nodeId`, `routeId`), while some secondary view state remains local.

- **Shared feature/layout components**
  - `app/components/docs-layout.tsx` — 97 lines; feature layout. Owns desktop navigation, central document column, TOC, and intersection-observer state.
  - `app/components/docs-sidebar-navigation.tsx` — 142 lines; feature component family for sidebar, back link, sections, lists, and items.
  - `app/components/site-header.tsx` — 107 lines; feature component for desktop and mobile global navigation.
  - `app/components/legal-link.tsx` — 58 lines; feature adapter resolving internal/external legal references.
  - `app/components/legal-reference-text.tsx` — 78 lines; feature formatter for rich legal text and reference arrows.
  - `app/components/legal-reference-preview.tsx` — 178 lines; feature component combining lazy preview loading, hover-card state, formatting, and metadata display.
  - `app/components/official-source.tsx` — 65 lines; feature adapter for official-source links and explanatory entries.
  - `app/components/legal-provision-selector.tsx` — 89 lines; feature combobox selector with local anchor ref and legal-library access.

- **Feature-specific components**
  - `app/components/document-catalog-content.tsx` — 540 lines; page-content monolith containing TOC construction, desktop/mobile navigation, overview, detail rendering, filtering, and Ukrainian pluralization.
  - `app/components/law-document-navigation.tsx` — 333 lines; feature component with provision navigation plus desktop/mobile document navigation.
  - `app/components/law-library-navigation.tsx` — 38 lines; feature navigation component reading the legal-library registry directly.
  - `app/components/kpa-articles-content.tsx` — 385 lines; page-content monolith for KPA selection and article rendering.
  - `app/components/kpa-learning-content.tsx` — 191 lines; feature learning-content renderer.
  - `app/components/kpa-module-article-guide.tsx` — 208 lines; feature article-guide renderer.
  - `app/components/kpa-practice-content.tsx` — 104 lines; feature practice renderer.
  - `app/components/legal-learning-module-content.tsx` — 493 lines; page-content monolith containing provision text, provision guides, module sections, process phases, legal layers, and previous/next controls.
  - `app/components/legal-map-content.tsx` — 711 lines; page-content monolith containing TOC derivation, navigation, mobile navigation, overview, node details, model explanation, and data-resolution helpers.
  - `app/components/case-study-content.tsx` — 890 lines; page-content monolith containing TOC/stage-navigation derivation and numerous case-document, deadline, matrix, definition, and stage renderers.
  - `app/components/study-plan-content.tsx` — 213 lines; feature content renderer that imports study and legal data directly.

- **shadcn/Base UI kit primitives (`app/components/ui`)**
  - `accordion.tsx` — 72 lines.
  - `badge.tsx` — 52 lines.
  - `button.tsx` — 58 lines.
  - `checkbox.tsx` — 26 lines.
  - `combobox.tsx` — 300 lines.
  - `dialog.tsx` — 154 lines.
  - `field.tsx` — 236 lines.
  - `hover-card.tsx` — 49 lines.
  - `input-group.tsx` — 156 lines.
  - `input.tsx` — 20 lines.
  - `label.tsx` — 20 lines.
  - `navigation-menu.tsx` — 168 lines.
  - `scroll-area.tsx` — 54 lines.
  - `separator.tsx` — 25 lines.
  - `sheet.tsx` — 133 lines.
  - `table.tsx` — 114 lines.
  - `tabs.tsx` — 80 lines.
  - `textarea.tsx` — 18 lines.
  - These primitives use `cn()` throughout and `cva` for components with explicit variants, including button (`app/components/ui/button.tsx:6-52`), badge (`app/components/ui/badge.tsx:7`), tabs (`app/components/ui/tabs.tsx:24-48`), field (`app/components/ui/field.tsx:52-80`), input group (`app/components/ui/input-group.tsx:23-99`), and navigation menu (`app/components/ui/navigation-menu.tsx:58-70`).

- **Page composition**
  - Documentation pages generally compose `DocsLayout`, desktop navigation, a mobile navigation equivalent, and one central content renderer; `app/routes/map.tsx:67-95` and `app/routes/documents.tsx:81-116` are representative.
  - `DocsLayout` establishes a sticky desktop sidebar, one naturally scrolling center, and a sticky right TOC (`app/components/docs-layout.tsx:68-93`).
  - Law learning pages pass already assembled loader data into a content component and construct previous/next controls in the route (`app/routes/law-document.tsx:112-188`).
  - Home bypasses `DocsLayout` and renders its own centered landing-page shell (`app/routes/home.tsx:81-93`).

- **Client state**
  - `DocsTableOfContents` uses `useState`, `useMemo`, `useEffect`, and `IntersectionObserver` for the active heading (`app/components/docs-layout.tsx:12-31`).
  - Documents keeps category selection in local state, synchronizes it from the URL-selected document, and navigates imperatively (`app/routes/documents.tsx:44-79`).
  - Map keeps the currently selected overview stage locally while node selection is URL-addressable (`app/routes/map.tsx:29-64`).
  - `LegalReferencePreview` maintains asynchronous preview load state and a callback-triggered lazy import/load path (`app/components/legal-reference-preview.tsx:122-171`).
  - `LegalProvisionSelector` uses only an element ref for popup sizing/positioning (`app/components/legal-provision-selector.tsx:29-66`).
  - No Redux, Zustand, React context domain store, query cache, or shared state service appears in the mapped UI layer.

# Problems

- **HIGH — Major page-content files have no clear feature or responsibility boundary.** `case-study-content.tsx` is 890 lines and contains document status, document register, deadline register, related materials, stages, definition rows, and condition matrices (`app/components/case-study-content.tsx:109-644`). `legal-map-content.tsx` is 711 lines and combines navigation, overview, node rendering, model explanation, and lookup helpers (`app/components/legal-map-content.tsx:46-709`). `legal-learning-module-content.tsx` similarly combines `"ProvisionText"`, `"ProvisionGuide"`, and the complete module page in 493 lines (`app/components/legal-learning-module-content.tsx:41-242`). These files make independent testing, ownership, and reuse difficult.

- **HIGH — The KPA route is itself a 578-line feature implementation rather than a route adapter.** It owns an asynchronous loader (`app/routes/kpa.tsx:71`), low-level navigation rows (`app/routes/kpa.tsx:184`), full desktop navigation (`app/routes/kpa.tsx:205`), mobile selectors (`app/routes/kpa.tsx:360`), TOC construction (`app/routes/kpa.tsx:454`), and final page composition (`app/routes/kpa.tsx:523`). The embedded strings and markup such as `"Модулі KPA"` and repeated navigation lists at `app/routes/kpa.tsx:229-344` prevent the route layer from remaining focused on URL/data orchestration.

- **HIGH — Feature components directly couple data registries, formatting, resolution, and layout.** `legal-map-content.tsx` imports legal text utilities, `legalData`, journey data, node guides, the recursive index, and legal types (`app/components/legal-map-content.tsx:9-36`), then exposes lookup functions such as `"resolveLegalMapNode"` (`app/components/legal-map-content.tsx:705`). `document-catalog-content.tsx` performs language formatting—`return \`${count} ${forms[0]}\``—in the same module as navigation and full article rendering (`app/components/document-catalog-content.tsx:65-74`). `law-library-navigation.tsx` calls `listDocuments()` directly inside navigation rendering (`app/components/law-library-navigation.tsx:4-14`). A restructuring needs explicit view-model/query boundaries rather than letting render modules know every data source.

- **HIGH — Desktop and mobile navigation are repeatedly implemented as parallel markup trees.** Documents exports separate `DocumentCatalogNavigation` and `MobileDocumentNavigation` (`app/components/document-catalog-content.tsx:74-201`); the mobile version repeats category/document derivation and labeling with native selects, including `"Категорія"` and `"Документ"` (`app/components/document-catalog-content.tsx:151-194`). Map repeats the same pattern through `LegalMapNavigation` and `MobileLegalMapNavigation` (`app/components/legal-map-content.tsx:91-219`), while KPA repeats it inside the route (`app/routes/kpa.tsx:205-422`). The responsive controls differ visually, but selection models, option derivation, labels, and callbacks should not be duplicated.

- **MEDIUM — Repeated content-shell markup has not been promoted into stable document patterns.** Multiple pages begin with the exact shell `"typeset typeset-docs w-full pb-16 sm:pb-0"`: law index (`app/routes/law.tsx:24`), map overview/node (`app/components/legal-map-content.tsx:259,517`), learning module (`app/components/legal-learning-module-content.tsx:250`), and study plan (`app/components/study-plan-content.tsx:49`). Badge headers similarly repeat `"not-typeset mb-3 flex flex-wrap ... gap-2"` at `app/routes/law.tsx:26`, `app/components/legal-map-content.tsx:263,521`, and `app/components/legal-learning-module-content.tsx:254`. This is a latent document-page primitive expressed through copy-pasted classes.

- **MEDIUM — Definition/reference row layouts are duplicated with slightly divergent grids.** Learning phases use `"grid gap-2 py-5 sm:grid-cols-[3rem_13rem_minmax(0,1fr)_auto]"` (`app/components/legal-learning-module-content.tsx:318`); provision explanations use `"grid gap-2 py-4 sm:grid-cols-[3rem_7rem_minmax(0,1fr)]"` (`app/routes/law-provision.tsx:266`); provision references use `"grid gap-2 py-4 sm:grid-cols-[12rem_minmax(0,1fr)]"` (`app/routes/law-provision.tsx:321`). The common numbered/label/value-row semantics are hidden behind route-specific arbitrary grids.

- **MEDIUM — Feature styling relies on long inline Tailwind strings instead of named variants or feature-level style contracts.** For example, the study navigation manually encodes border, hover, focus, and active behavior in one class string (`app/routes/study.tsx:30`), while KPA navigation repeats text sizes such as `text-[0.68rem]`, `text-[0.7rem]`, `text-[0.78rem]`, and `text-[0.65rem]` (`app/routes/kpa.tsx:270-322`). In contrast, the kit correctly centralizes button behavior with `buttonVariants` (`app/components/ui/button.tsx:6-52`). The ad-hoc feature strings make visual changes and accessibility-state consistency harder.

- **MEDIUM — Arbitrary typography and geometry values undermine a coherent scale.** Examples include `text-[0.65rem]`, `text-[0.68rem]`, `text-[0.7rem]`, and `tracking-[0.12em]` in reference previews (`app/components/legal-reference-preview.tsx:44-100`), `max-w-160` in the central document column (`app/components/docs-layout.tsx:81`), and full-screen calculations such as `"h-[calc(100dvh-1rem)] w-[calc(100vw-1rem)]"` in the source dialog (`app/routes/law-provision.tsx:217`). Theme colors are mostly tokenized, but type and layout scales are not equally disciplined.

- **MEDIUM — Route metadata is global-only.** The root always emits `"Legalizacja — навчальний атлас права"` (`app/root.tsx:33-40`), while no route module exports `meta`. Deep links to a provision, module, document, or case therefore cannot expose a meaningful page-specific browser title or description despite already having the necessary loader/content data.

- **MEDIUM — Some routes duplicate scrolling and selection orchestration instead of using a shared URL-selection abstraction.** Both documents and map define `scrollToTop()` with `requestAnimationFrame` (`app/routes/documents.tsx:40-42`; `app/routes/map.tsx:15-17`), and each manually combines `navigate`, local state updates, and scrolling (`app/routes/documents.tsx:62-79`; `app/routes/map.tsx:42-64`). This creates subtle behavior divergence as more atlas sections are added.

- **LOW — Localization is inconsistent inside common chrome.** Most application UI is Ukrainian, but the global error boundary uses `"Oops!"`, `"An unexpected error occurred."`, and `"The requested page could not be found."` (`app/root.tsx:46-55`), while the sheet primitive’s screen-reader close text is `"Close"` (`app/components/ui/sheet.tsx:73`). The dialog primitive uses Ukrainian `"Закрити"` (`app/components/ui/dialog.tsx:72`), demonstrating the inconsistency.

- **LOW — Shared legal-reference rendering is split across overlapping adapters.** `LegalLink` resolves reference targets (`app/components/legal-link.tsx:21-51`), `LegalText` recursively renders reference-bearing values (`app/components/legal-reference-text.tsx:56-76`), `LegalReferencePreview` independently loads and formats reference previews (`app/components/legal-reference-preview.tsx:122-176`), and `OfficialSourceLink` performs another reference-to-link adaptation (`app/components/official-source.tsx:27-52`). Their responsibilities are related but distributed without an obvious public feature API.

# Notables

- The repository already has a strong shared application skeleton: root document, nested shell, site header, and documentation layout are clearly separated (`app/root.tsx:11-31`; `app/routes/shell.tsx:5-12`; `app/components/docs-layout.tsx:55-96`).
- The central `DocsLayout` matches the project’s reading constraint well: only the document naturally scrolls, while desktop navigation and TOC are sticky and independently bounded (`app/components/docs-layout.tsx:68-93`).
- URL-addressable primary entities are a major strength. Documents, map nodes, cases, legal modules, practices, and provisions all have explicit route paths (`app/routes.ts:10-28`), so a redesign must not replace them with opaque global state.
- Compatibility behavior is intentionally explicit: old KPA learning/practice routes re-export the authored KPA route (`app/routes/law-kpa-compat.tsx:1`; `app/routes/law-kpa-practice-compat.tsx:1`), and document/category legacy identifiers are redirected canonically (`app/routes/documents.tsx:26-38`).
- The generic legal-document learning loader is already a useful application boundary: it validates document, curriculum, module, and edition, resolves provisions, filters reviewed explanations, and builds a view model before rendering (`app/routes/law-document.tsx:43-109`). That view-model direction is worth extending.
- The shadcn/Base UI directory should remain infrastructure rather than be reorganized by legal feature. Its components use `data-slot`, `cn`, and `cva` consistently and provide accessible primitive composition.
- Semantic color usage is generally disciplined—`bg-background`, `text-foreground`, `text-muted-foreground`, `border-border`, and `text-primary` dominate feature markup—so a redesign should retain tokens rather than introduce raw color utilities.
- The feature UI already preserves Polish legal vocabulary inside Ukrainian explanations, including `"wejście w życie"` and `"przepisy przejściowe"` in the learning footer (`app/routes/law-document.tsx:179-184`).
- Local state is modest and understandable; there is no evidence that a global state library is currently needed. The more important redesign task is deciding which state belongs in the URL and extracting reusable selection models.
- `DocsTableOfContents` provides progressive active-heading behavior through `IntersectionObserver` without controlling document scroll (`app/components/docs-layout.tsx:12-31`), which is compatible with the project’s accessibility and natural-reading requirements.
- The route-level legal source dialog deliberately supports a nearly full-viewport official-source reader (`app/routes/law-provision.tsx:210-233`). Even if extracted, that verification path and official ELI affordance must remain prominent.

