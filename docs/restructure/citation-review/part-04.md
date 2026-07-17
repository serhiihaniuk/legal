# Citation attribution review — part-04.ts

Source: `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/part-04.ts`
Default act: `ustawa-o-cudzoziemcach` (this file's own act).

Every citation below was attributed to a **non-default** act because the
surrounding prose explicitly names that act. None were ambiguous, but all
three are flagged per the migration prompt's rule that any non-default
attribution goes on this list for owner review.

- **"art. 31 ust. 3 ustawy про умови допуску доручення роботи cudzoziemcom"**
  (entry `ustawa-o-cudzoziemcach-art-127`, rule `pkt 2`) — chosen act:
  `powierzanie-pracy` (`workLaw.article("31", "art. 31")`). Why: the prose
  names the act by its subject ("umowy dopuszczalności powierzania pracy
  cudzoziemcom"), which matches `powierzanie-pracy`'s registered title
  ("Ustawa o warunkach dopuszczalności powierzania pracy cudzoziemcom...").
  `powierzanie-pracy-art-31` exists in the reference registry, so this is a
  normal `.article()` link, not `.external()`.

- **"art. 35 § 3 KPA"** (entry `ustawa-o-cudzoziemcach-art-133a`, rule
  `ust. 3`) — chosen act: `kpa` (`kpaLaw.article("35", "art. 35 § 3")`). Why:
  the text explicitly names "KPA" (Kodeks postępowania administracyjnego).
  `kpa-art-35` exists in the registry; the `§ 3` paragraph marker is folded
  into the citation label, matching the existing sibling convention for KPA
  citations (see `part-01a.ts`'s `art. 40 § 4–5` KPA citation).

- **"art. 29 ust. 3 pkt 1 ustawy o rynku pracy i służbach zatrudnienia"**
  (entry `ustawa-o-cudzoziemcach-art-138a`, rule `Art. 138a`) — chosen act:
  external citation to the Act of 20 March 2025 on the labor market and
  employment services (`foreignersLaw.external("art. 29",
  RYNEK_PRACY_SLUZBY_ZATRUDNIENIA_URL)`, URL
  `https://eli.gov.pl/eli/DU/2025/620/ogl`). Why: this act is **not** the
  same as the registered `powierzanie-pracy` act — it is a distinct, real
  2025 Polish statute (Dz.U. 2025 poz. 620) that is not in the reference
  registry at all, so `.article()` is unavailable and no sibling file has
  cited it before (no existing URL constant to copy). The Dz.U. position was
  independently verified via web search (ISAP/Dziennik Ustaw), since the
  migration prompt's "copy the sibling files' choice" instruction had no
  precedent to copy here. The ELI page was opened in the browser on 2026-07-17
  and confirmed the exact act title, Dz.U. 2025 poz. 620, status `obowiązujący`,
  and entry into force on 2025-06-01. The external URL is verified for this
  migration.
