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
