# Citation attribution review — part-08.ts

Source: `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/part-08.ts`
Default act: `ustawa-o-cudzoziemcach` (this file's own act).

## Non-default attribution

- **"Art. 35 ust. 6 rozporządzenia nr 2017/2226"** (entry
  `ustawa-o-cudzoziemcach-art-248a`, claim `Art. 248a`) — chosen target:
  external citation to Regulation (EU) 2017/2226 establishing an Entry/Exit
  System (EES), `foreignersLaw.external("Art. 35", EES_2017_2226_URL)`, URL
  `https://eur-lex.europa.eu/eli/reg/2017/2226/oj`. Why: the prose explicitly
  names the regulation by number ("rozporządzenia nr 2017/2226"), which is
  not in the reference registry. Not ambiguous: this exact URL is the one
  already used for the same regulation in `part-02.ts` and `part-10.ts`
  (`EES_2017_2226_URL`), so this citation reuses an established sibling
  constant rather than introducing a new one.

## PROMINENT: entry art-244 — two new external URLs, OWNER MUST VERIFY

- **Entry `ustawa-o-cudzoziemcach-art-244`** (`claims[0].text` and
  `rules[1].explanation`, "Art. 50 TUE / Art. 18 ust. 4 Umowy Wystąpienia")
  was completed in a follow-up commit by the orchestrator with two new
  external constants:
  - `TUE_ART_50_URL` →
    `https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX:12016M050`
    (Article 50 TEU, consolidated Polish version; CELEX 12016M050 is the
    canonical per-article identifier).
  - `WITHDRAWAL_AGREEMENT_URL` →
    `https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX:12020W/TXT`
    (EU–UK Withdrawal Agreement, OJ L 29 of 31.1.2020, Polish version;
    CELEX 12020W/TXT).
  **Neither URL could be machine-verified** — EUR-Lex serves its pages via
  JavaScript behind bot protection, so automated fetches return empty. The
  CELEX identifiers are canonical and widely cited, but the owner should
  open both links once in a browser and confirm they land on Article 50 TEU
  and the Withdrawal Agreement respectively before treating this entry as
  verified. Same review bar as the Decision 1/80 and labor-market URLs.
