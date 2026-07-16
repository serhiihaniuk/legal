# Summary

The project has a functional React Router 7 SSR toolchain with React 19, Tailwind 4, shadcn’s `base-vega` preset, Base UI primitives, and a reproducible npm lockfile. TypeScript is strict for application TypeScript, targets ES2022, and uses the `~/* → app/*` alias, but two apparently stale Vite-era tsconfigs still describe a nonexistent `src/` architecture. The corpus/editorial tooling has several Node-based validation scripts and three corpus tests, but there is no app-level unit, component, integration, or browser test runner. No linter or CI configuration exists, so typecheck, build, formatting, and validation are not enforced automatically. The main `tsconfig.json` includes the repository broadly but does not enable JavaScript checking, leaving all 14 `scripts/**/*.mjs` files outside meaningful TypeScript validation. Formatting is configured well for Tailwind class ordering, but the script only formats TypeScript/TSX and provides no non-mutating format check. Docker uses a reasonable multi-stage SSR build, although the floating `node:20-alpine` tag does not explicitly encode Vite 8’s Node `>=20.19.0` requirement. Git status is clean, generated React Router/build outputs are ignored and untracked, while generated legal corpus data and source PDFs are intentionally tracked.

# Inventory

- **Package identity and runtime** → private ESM package named `legalizacja-atlas` (`package.json:2-4`).
- **Development/build scripts** (`package.json:5-20`):
  - `dev` → starts the React Router development server (`package.json:17`).
  - `build` → creates the React Router production server/client build (`package.json:6`).
  - `start` → serves `build/server/index.js` through `react-router-serve` (`package.json:18`).
  - `typecheck` → generates React Router route types and then runs `tsc` (`package.json:19`).
  - `format` → mutates only `*.ts` and `*.tsx` files with Prettier (`package.json:20`).
- **Legal corpus scripts** (`package.json:7-14`):
  - `corpus:kpa` → builds the pinned KPA document configuration.
  - `corpus:build` → invokes the generic document ingestion builder.
  - `corpus:prepare` / `corpus:validate` / `corpus:diff` / `corpus:promote` → workflow phases implemented by `scripts/legal-corpus/workflow.mjs`.
  - `corpus:generate` → regenerates the typed corpus registry.
  - `test:corpus` → runs Node’s built-in test runner against `scripts/legal-corpus/test/*.test.mjs`.
- **Other content validation** → `test:editorial` runs `scripts/legal-editorial/validate.mjs`; `test:previews` runs `scripts/reference-previews/validate.mjs` (`package.json:15-16`).
- **Script implementation surface** → 14 `.mjs` files under `scripts/`, including corpus ingestion/workflow libraries, three corpus test files, one editorial test file, and editorial/reference validators.
- **Core dependencies** (`package.json:22-37`):
  - React `^19.2.6`, React DOM `^19.2.6`.
  - React Router packages pinned consistently to `7.15.1`.
  - `@base-ui/react ^1.6.0`, directly imported by shadcn UI primitives such as `app/components/ui/dialog.tsx:2` and `app/components/ui/accordion.tsx:1`.
  - `shadcn ^4.13.0` is unusually installed as a production dependency despite no application imports being found (`package.json:35`).
  - Tailwind helpers: `tailwind-merge ^3.6.0`, `tw-animate-css ^1.4.0`, `class-variance-authority ^0.7.1`, and `clsx ^2.1.1`.
  - Other notable runtime packages: `pdfjs-dist ^6.1.200`, `lucide-react ^1.24.0`, Geist variable font, and `isbot`.
- **Development dependencies** → TypeScript `^6`, Vite `^8`, Tailwind CSS `^4`, `@tailwindcss/vite ^4`, React/Node type packages, Prettier `^3.8.3`, and the Tailwind Prettier plugin (`package.json:39-49`).
- **Primary TypeScript configuration** → broad repository include plus generated route types (`tsconfig.json:2-7`); strict mode, no emit, bundler resolution, React JSX, ES2022 target/module, Node and Vite globals (`tsconfig.json:9-25`).
- **Primary path alias** → `~/*` resolves to `./app/*` (`tsconfig.json:17-19`), matching shadcn aliases (`components.json:15-20`) and Vite’s `tsconfigPaths` resolution (`vite.config.ts:5-7`).
- **Secondary TypeScript configurations** → `tsconfig.app.json` targets `src/` and defines `@/* → ./src/*` (`tsconfig.app.json:19-24`); `tsconfig.node.json` checks only `vite.config.ts` with ES2023 (`tsconfig.node.json:4-15`).
- **Vite integration** → minimal configuration combining Tailwind’s Vite plugin and React Router’s plugin (`vite.config.ts:1-8`).
- **React Router deployment mode** → server-side rendering explicitly enabled (`react-router.config.ts:3-7`).
- **shadcn configuration** → `base-vega`, non-RSC TSX, Base UI-oriented generated components, Tailwind CSS entry at `app/app.css`, CSS variables, Lucide icons, and `~/…` aliases (`components.json:2-24`).
- **Docker** → four-stage Node 20 Alpine build: full development dependencies, production-only dependencies, build stage, and minimal runtime stage (`Dockerfile:1-22`).
- **Docker context exclusions** → `.react-router`, `build`, `node_modules`, and `README.md` (`.dockerignore:1-4`).
- **Formatting** → LF, no semicolons, double quotes, width 80, Tailwind class sorting using `app/app.css`, with `cn` and `cva` recognized (`.prettierrc:2-10`).
- **Prettier exclusions** → package-manager artifacts, coverage, and package lockfiles (`.prettierignore:1-8`).
- **Git exclusions** → environment files, dependencies, local agent/browser artifacts, visual captures, React Router outputs, build output, and TS build information (`.gitignore:1-21`).
- **Git state** → `git status --short` returned no entries; the working tree is clean.
- **Generated artifact hygiene** → zero tracked files under `.react-router/` and `build/`; 38 generated corpus files under `app/data/legal-corpus/` and 10 files under `public/legal-sources/` are tracked.
- **Recent history** → the last 15 commits are a coherent editorial/typing sequence from `22f0977 refactor: promote typed legal text across app` through `1bb575c review: finalize foreigners act editorial parts 04 06 08`.

# Problems

- **HIGH — No linting exists.** There is no `lint` script or ESLint/Biome dependency in `package.json:5-20,39-49`, and repository discovery found no ESLint or Biome configuration. Strict typechecking cannot enforce React hooks rules, accessibility conventions, dead imports, or architectural import boundaries.

- **HIGH — No app-level test runner or browser test infrastructure exists.** The only test commands are corpus/content tooling checks: `"test:corpus"`, `"test:editorial"`, and `"test:previews"` (`package.json:14-16`). No Vitest, Jest, React Testing Library, or Playwright configuration/dependency was found, leaving routes, SSR rendering, components, navigation, and responsive behavior without automated regression coverage.

- **HIGH — No CI configuration enforces repository checks.** No `.github/workflows` or other CI configuration was found. Consequently, `"typecheck"` and `"build"` (`package.json:6,19`) plus the three content validators can be omitted from pull requests without an automated failure.

- **HIGH — Node `.mjs` tooling is not typechecked.** Although the root include is `"**/*"` (`tsconfig.json:2-7`), `allowJs` and `checkJs` are absent, so the 14 `scripts/**/*.mjs` files receive no TypeScript checking. This is especially significant because these scripts implement ingestion, artifact promotion, validation, and registry generation (`package.json:7-16`).

- **MEDIUM — Two stale tsconfigs contradict the active project structure.** `tsconfig.app.json` includes only `"src"` and maps `"@/*"` to `"./src/*"` (`tsconfig.app.json:19-24`), while the active application uses `app/` and `~/*` (`tsconfig.json:17-19`). `tsconfig.node.json` checks only `vite.config.ts` (`tsconfig.node.json:15`) and neither file is referenced by the root `tsconfig.json`, creating misleading configuration during redesign and IDE discovery.

- **MEDIUM — Formatting coverage is narrow and cannot be checked without mutation.** The only command is `"prettier --write \"**/*.{ts,tsx}\""` (`package.json:20`), excluding `.mjs`, JSON, CSS, Markdown, and config files. There is also no `format:check`, so CI could not verify formatting without rewriting files.

- **MEDIUM — `shadcn` CLI is shipped as a production dependency.** `"shadcn": "^4.13.0"` appears under runtime dependencies (`package.json:22,35`), while no runtime import was found. As a code-generation CLI, it would normally belong in `devDependencies`, reducing production installation size and attack surface.

- **MEDIUM — Docker’s Node version is insufficiently pinned for Vite 8.** Every stage uses the floating `"node:20-alpine"` image (`Dockerfile:1,6,11,17`), while installed Vite 8 declares Node `^20.19.0 || >=22.12.0`. The current tag may resolve compatibly, but the Dockerfile does not make that minimum explicit or provide digest-level reproducibility.

- **LOW — TypeScript library checking is intentionally weakened.** `"skipLibCheck": true` appears in all three configurations (`tsconfig.json:24`, `tsconfig.app.json:8`, `tsconfig.node.json:7`). This improves speed but can hide dependency declaration incompatibilities during adoption of unusually new TypeScript 6 and Vite 8 versions.

- **LOW — Compiler targets are inconsistent.** The main app targets ES2022 (`tsconfig.json:10-13`), while the secondary Node configuration targets ES2023 (`tsconfig.node.json:4-6`). This is not inherently wrong, but without explicit project references or documented runtime targets it adds ambiguity.

- **LOW — `.prettierignore` does not explicitly exclude generated application artifacts.** It excludes dependencies and package-manager files (`.prettierignore:1-8`) but not `.react-router/`, `build/`, generated corpus data, or source PDFs. The current narrow TypeScript glob limits the immediate effect, but broader future formatting commands could traverse generated output.

# Notables

- The active root TypeScript configuration is genuinely strict: `"strict": true`, `"noEmit": true`, `"verbatimModuleSyntax": true`, and bundler resolution are all appropriate for React Router/Vite (`tsconfig.json:14-25`).
- React Router package versions are pinned together at `7.15.1`, reducing framework-package skew (`package.json:25-26,34,40`).
- The shadcn contract is internally consistent: `base-vega`, `rsc: false`, `app/app.css`, and `~/…` aliases align with the current React Router application (`components.json:3-20`).
- Base UI is a real runtime requirement rather than merely preset metadata; generated primitives import it directly, for example `app/components/ui/checkbox.tsx:1` and `app/components/ui/navigation-menu.tsx:1`.
- The Docker build correctly separates full build dependencies from production dependencies and copies only the production modules plus `build/` into the final SSR image (`Dockerfile:6-22`).
- `npm ci` and the tracked `package-lock.json` provide deterministic dependency resolution in Docker.
- Git hygiene is currently strong: the working tree is clean, and transient `.react-router/` and `build/` directories are both ignored (`.gitignore:14-16`) and untracked.
- Tracked corpus output is intentional product data rather than accidental build leakage: `app/data/legal-corpus/` and `public/legal-sources/` are part of the documented legal-source architecture and must remain available to builds.
- The recent commit history is focused and incremental, dominated by typed citations, typed document/reference models, and editorial review rather than unrelated churn.
- A redesign must preserve SSR (`react-router.config.ts:6`), the `~/* → app/*` alias, Tailwind 4’s stylesheet-aware Prettier plugin, Base UI-backed shadcn primitives, and the deterministic legal corpus prepare/validate/diff/promote workflow.
