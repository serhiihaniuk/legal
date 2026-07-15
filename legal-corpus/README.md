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

## Future multi-document workflow

The implementation source of truth for evolving `/guide/kpa` into the multi-document
library is [the legal-library architecture blueprint](../docs/architecture/legal-library.md).
The reusable review packet is [the add/update document work-order prompt](prompts/add-or-update-document.md).

The intended workflow is: deterministic preparation of an immutable edition and
its diagnostics; human/AI editorial review in the explicitly approved explanation
scope; deterministic validation of source facts, references, and explanations; and
an explicit, human-approved promotion step. For an update, stable provision IDs and
normalized source hashes classify added, changed, removed, and unchanged provisions;
changed provisions and known dependants require review. A fetched or generated
edition does not silently become current.

Target commands such as `corpus:prepare`, `corpus:validate`, `corpus:diff`, and
`corpus:promote` are described in the blueprint but are **not currently implemented**.
The KPA example above remains the currently available build command.
