# Local legal corpus

The corpus stores immutable, versioned copies of official legal sources. One
document version has one identifier and one output directory.

For every document the builder creates:

- `manifest.json` - source URLs, legal-status metadata, checksum and extraction statistics;
- `metadata.json` - the original response from the official ELI API;
- `pages.json` - extracted text for every one-based PDF page;
- `articles.json` - detected articles with their starting and ending PDF pages;
- `public/legal-sources/<id>/source.pdf` - the local visual source used by the reader.

Build the KPA example from the repository root:

```bash
node scripts/legal-corpus/build-document.mjs \
  legal-corpus/documents/kpa-2025-1691.json
```

The official PDF remains the visual source of truth. Extracted text is an index
for navigation and learning, not a replacement for checking the page itself.

## Multi-document workflow

The implementation source of truth is
[the legal-library architecture blueprint](../docs/architecture/legal-library.md).
The preparation command fills
[the add/update editorial prompt](prompts/add-or-update-document.md) and writes a
JSON work order under `legal-corpus/work-orders/`.

Available commands:

```bash
# Build one immutable edition from its schema-v2 config
npm run corpus:build -- legal-corpus/documents/<edition>.json

# Build, diff when needed, and emit JSON + Markdown review packets
npm run corpus:prepare -- \
  --mode add \
  --config legal-corpus/documents/<edition>.json \
  --scope app/data/legal-library/editorial/<document>/<provision>.ts

npm run corpus:diff -- --old <old-edition> --new <new-edition>
npm run corpus:validate -- --work-order legal-corpus/work-orders/<packet>.json
npm run corpus:generate

# Requires completed structured legal-status evidence, a reviewed packet,
# a clean scope check, and an exact explicit approval token.
npm run corpus:promote -- \
  --work-order legal-corpus/work-orders/<packet>.json \
  --approve <documentId>@<editionId> \
  --approved-by <reviewer>
```

Preparation is deterministic; legal explanation remains a human-reviewed step.
For updates, stable provision IDs and normalized source hashes classify
`added`, `changed`, `removed`, and `unchanged`. A matching hash does not prove an
unchanged legal effect. Promotion fails closed when official status, entry into
force, transitional rules, review state, validation, or write scope is unresolved.
A fetched or generated edition never silently becomes current.

The current extraction profiles cover Polish `Art.`-led acts and the accepted
`§`-led regulation format with numbered annexes. The official PDF remains the
visual source of truth for both.
