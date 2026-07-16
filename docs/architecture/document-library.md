# Document library architecture

**Status:** accepted implementation architecture  
**Legal-state baseline:** 2026-07-14  
**Editorial verification baseline:** 2026-07-15

## 1. Purpose

The Documents area teaches how to obtain, read, verify, connect, and use evidence in a foreigner’s case. It is a sibling of the Law library, not a title-derived appendix to the legal map.

The two libraries share the same learner model and navigation grammar:

```text
Fact
→ legal condition
→ evidence document
→ issuing/preparing actor
→ form and validity
→ legal role
→ what it does not prove
→ related provision and remedy
```

A **Legal Document** is an official normative instrument (`KPA`, `ustawa o cudzoziemcach`). An **Evidence Document** is a document used in a case (`Wniosek MOS`, `Załącznik nr 1`, `UPO`, `Karta pobytu`). These concepts must never share an ID type or reference kind.

## 2. Non-negotiable invariants

- Public Evidence Document identity is explicit and stable. It never depends on a title hash, display title, alias order, or current map/case mentions.
- Aliases support ingestion and compatibility only. Rendering and internal navigation use the stable ID.
- Every public page is backed by an editorial guide with official sources and a verification date.
- Mentions gathered from map and case data provide contextual backlinks; they do not define the canonical record.
- Internal Evidence Document links are authored typed content. Rendering never infers a target from surrounding prose.
- A missing or invalid Evidence Document target fails closed during authoring or resolution.
- Official external sources remain ordinary HTTPS source references. An internal Evidence Document link never pretends to be an official source.
- The shared documentation sidebar, mobile selectors, previous/next controls, and overview-first reading layout are the same navigation standard used by the Law library.
- No search control is introduced.

## 3. Canonical domain model

### `EvidenceDocumentId`

A literal stable identifier such as:

```ts
type EvidenceDocumentId =
  | "temporary-residence-application"
  | "employment-annex-1"
  | "passport"
  | "upo"
  | "power-of-attorney"
  | "administrative-decision"
```

IDs describe the canonical document concept, not a Polish title spelling and not a source-system identifier.

### `EvidenceDocument`

The canonical registry record owns:

- `id`;
- learner-facing title;
- Polish document term where relevant;
- category;
- aliases used by ingestion;
- editorial guide;
- related Evidence Document IDs;
- official sources;
- verification date.

### `EvidenceDocumentReference`

```ts
type EvidenceDocumentReference = {
  kind: "evidence-document"
  documentId: EvidenceDocumentId
}
```

It composes into the application-wide `LegalReference` and into structured `LegalTextValue` parts. It resolves only through the Document library registry.

## 4. Deep Module and ownership

```text
app/data/document-library/
  contracts.ts          # stable IDs and public contracts
  guides.ts             # editorial content; explicit id/title/category/aliases
  registry.ts           # canonical records assembled from editorial guides
  query.ts              # list/get/category/related/context queries
  navigation.ts         # canonical paths and previous/next
  legal-text.ts         # typed Evidence Document authoring helper
  index.ts              # public Interface

app/data/document-index.ts
  # compatibility Adapter for map/case mention ingestion only
```

The `document-library` Module is deep: callers learn `getEvidenceDocument`, `listEvidenceDocuments`, `getEvidenceDocumentPath`, and typed references. They do not learn title normalization, alias matching, hash functions, map traversal, or case-register traversal.

The existing title matcher remains an Adapter only while legacy map/case data still stores document names. It may attach contexts to a canonical ID, but it cannot create a public record or public ID.

## 5. Routes and learner experience

| Route | Contract |
| --- | --- |
| `/documents` | Canonical catalog overview grouped by document category. |
| `/documents/:documentId` | Canonical Evidence Document guide. Unknown IDs return 404. |

The detail page keeps one naturally scrolling document with:

1. identity and practical purpose;
2. who prepares or issues it;
3. how to obtain or prepare it;
4. form, validity, and update triggers;
5. what it proves;
6. what it does not prove;
7. field/check checklist;
8. legal basis using typed Legal References;
9. related Evidence Documents using typed Evidence Document References;
10. official sources and verification date.

The left sidebar uses the shared documentation navigation primitives:

- back to main;
- category chapters;
- documents nested under the active category;
- active document state.

Mobile uses compact category/document selectors. Previous/next follows canonical category order, not incidental map traversal order.

## 6. Typed authoring and resolution

`createEvidenceDocumentTextAuthor()` is the document equivalent of `createLegalTextAuthor()`:

```ts
const documents = createEvidenceDocumentTextAuthor()

documents.text`Додайте ${documents.document("passport", "паспорт")} і ${documents.document("upo", "UPO")}.`
```

The argument is an `EvidenceDocumentId` literal. The resulting `LegalTextValue` carries an explicit `EvidenceDocumentReference`. `LegalText` delegates to the shared application reference resolver, which returns `/documents/:documentId` only for a registered document.

Plain prose is never scanned for document names. Existing aliases may be used by a migration codemod or compatibility Adapter, never by the renderer.

## 7. Migration sequence

1. Add explicit IDs/titles/categories/aliases to every current editorial guide.
2. Build the canonical registry and query/navigation Interface.
3. Replace hash-derived public IDs with stable IDs while retaining explicit redirects only for known legacy URLs.
4. Move the Documents sidebar to the shared documentation navigation primitives.
5. Add the typed Evidence Document reference and authoring helper.
6. Convert related-document fields and authored cross-document prose to typed IDs/references.
7. Migrate map, case, home, and document-guide internal links.
8. Delete public identity derivation from title hashes; retain alias matching only for contextual ingestion.
9. Validate every related ID and authored target; browser-check canonical and legacy deep links.

## 8. Verification contract

At minimum:

- every registry ID is unique and stable;
- every alias resolves to at most one canonical record;
- every related Evidence Document ID exists;
- every internal Evidence Document reference resolves canonically;
- unknown IDs fail closed;
- legacy hash URLs redirect only when explicitly registered;
- category and previous/next order are deterministic;
- `/documents` and every `/documents/:documentId` render without console errors;
- typed citations remain links and plain prose remains plain;
- desktop and 360 px layouts have no horizontal overflow;
- `npm run typecheck` and `npm run build` pass.
