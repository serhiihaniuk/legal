# Batch 102 source notes: opening KPA commentaries

Status: six authored commentaries saved; final independent acceptance and root integration checks pending. Source check: 12 September 2026. This note does not renew the KPA edition or adjacent commentary.

## Read and rewritten scope

Read the committed `102-kpa-opening-commentary-preparation.md`, the legal-explanatory-writing skill, all six original entries, `define-kpa-part.ts`, `define-editorial-part.ts`, the `LegalExplanation` contract, and the relevant generic provision and embedded learning renderers. The six owned product paths are `app/data/legal-library/editorial/kpa/articles/article-art-{1,2,2a,3,4,5}.ts`.

Each entry keeps its ID and existing summary/rules/legalEffect/foreignersCase contract. Rule rows explain the applicable clauses. Completed examples remain ordinary paragraph text with selected fictional Polish fragments; no table or document-sample object is inserted into a paragraph-only field. No generic certificate, MOS or complaint document guide is mislabelled as the source for these opening provisions.

## Primary sources and locators

Physical PDF pages are counted from 1.

- [Current KPA consolidated text, Dz.U. 2025 poz. 1691](https://eli.gov.pl/api/acts/DU/2025/1691/text/T/D20251691L.pdf), pages 2–3: full articles 1, 2, 2a, 3, 4 and 5, read fresh. Supporting provisions checked in that text include article 9 (page 4), article 16 (page 5), article 61 § 5 (page 15), article 104 (page 24), article 122a (page 27), articles 217–218 (pages 39–40), articles 222 and 226a–227 (page 41), articles 233–235 (page 42), and articles 240–241 (page 43).
- [Official base-act metadata](https://eli.gov.pl/api/acts/DU/1960/168), refreshed through the ELI API: the latest listed amending act remains [Dz.U. 2025 poz. 769](https://eli.gov.pl/api/acts/DU/2025/769/text/T/D20250769L.pdf), effective 13 July 2025. The current consolidation includes it and reproduces the pending-case transition in its opening notice. The amendment's KPA article 1 scope was checked against the preparation and refreshed official PDF; it does not change the six opening articles. This review does not classify any actual historical proceeding under its transition.
- [Official Polish RODO consolidated text](https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX:02016R0679-20160504), full article 13 paragraphs 1–4 and article 18 paragraphs 1–3, read fresh on EUR-Lex. Article 13 concerns information when data are collected from the person; paragraph 4 concerns information already held. Article 18 paragraph 1 lists specific restriction grounds, including accuracy contested for the period needed to verify it. The commentary does not claim that every privacy request interrupts a case or has identical consequences.
- [Act on the wojewoda and government administration in the voivodeship, Dz.U. 2025 poz. 428](https://eli.gov.pl/api/acts/DU/2025/428/text/T/D20250428L.pdf), page 4, article 13 ust. 1, read fresh. It directly supports the distinction between the wojewoda and the urząd wojewódzki assisting that organ. The [base-act metadata](https://eli.gov.pl/api/acts/DU/2009/206) lists 2024/1907, effective 1 January 2025, as its latest amendment; the consolidation incorporates it. The supplementary source is linked beside this claim in article 5, rather than attributed solely to KPA's dictionary.

## Entry-specific findings and completed examples

### Article 1

Preserved all six statutory subjects. The individual-matter explanation retains competence and legally entrusted roles, with `z mocy prawa` rendered as authority derived from legal provisions rather than only a statute. The commentary includes relief in execution of administrative monetary penalties. Silent settlement is expressly conditional on a special provision under article 122a § 1.

The fictional selected operative grant sentence is classified as individual determination. A separate draft seeking official confirmation of an already granted permission is classified by its requested certificate function. The completed result identifies the two subjects; it does not issue the certificate or judge the permit's validity.

### Article 2

Defined the Dział VIII complaint/request distinction using articles 222, 227 and 241 and retained the statutory bodies. Articles 233–235 distinguish a not-yet-pending individual case, a pending case and a final decision, including the different position of a party and another complainant. Extraordinary review is subject to statutory grounds, not an unlimited substitute for an appeal.

The two fictional fragments concern information-desk conduct and posted service hours. They expressly do not challenge a pending or final individual determination. Their completed classification makes no finding about the complaint's merits or competent recipient.

### Article 2a

Removed the doubled RODO text. The three paragraphs have separate explanations. The information duty under RODO article 13 paragraphs 1–2 is distinguished from procedural explanations and from the particular restriction request under article 18 paragraph 1. KPA article 61 § 5 retains its existing-unchanged-information exception. Article 226a is quoted for its own placement without importing the wording of that exception; the separate RODO article 13 paragraph 4 qualification is identified explicitly.

In the fictional 3 September address-accuracy request, the 4 September completed action is correction of a working conclusion that the administrative case must stop. No actual address correction, accepted restriction, suspended deadline or permit result is invented. Data handling remains a separate obligation.

### Article 3

Replaced the imprecise tax summary with the exact Ordynacja boundary and retention of Dział IV and VIII. `Karne skarbowe` is described as the named penal-fiscal category, not only tax crimes or all criminal matters. The diplomatic/consular exclusion retains its special-provision condition. Organisational and employee service subordination are distinct; the exact paragraph 4 list excludes paragraph 3 point 1. Paragraph 5 is an authorization for a regulation within its specified scope, not an automatic universal extension.

The completed fictional correction replaces an absolute assertion that KPA never applies in an Ordynacja matter with the retained Dział IV and VIII scope. No tax decision or consular remedy is invented. Intra-article paragraph references in prose use typed KPA references.

### Article 4

Explained `nie narusza` as preservation of applicable special rights. The text does not establish a free-standing hierarchy, infer a privilege from nationality or reduce every international agreement/custom to diplomatic immunity.

The fictional passport comparison removes an unsupported working immunity label. Its conclusion is that the selected passport did not establish the particular special right, not a decision denying every possible immunity. No treaty-specific claim or fabricated diplomatic status is added.

### Article 5

Separated the legal-referral rule from the active dictionary points, retained the repealed point, and removed the unsupported context escape clause. The minister definition includes the named function and institutional qualifications; the self-government examples do not decide competence for a permit. A social-organisation definition alone does not confer authority to decide individual cases.

The completed illustrative organ/office correction identifies wojewoda separately from the supporting office. The supplementary act's article 13 ust. 1 supports the explanation. Territorial competence, signature authority and appeal routing remain unassessed.

## Author verification and remaining integration

All six owned product files and this note are formatted with Prettier. At the root's explicit follow-up request, ran `npx vitest run app/features/law-library/model/learning/legal-learning-view.test.ts`: 1 test file passed, 10 tests passed. This import also exercised legal-text construction with the corrected intra-article typed references. No full verification, build, browser check, registry generation, shared rendering edit or commit was performed by this author.

The root owns the independently observed duplicate-claim presentation, commentary-date display, final review recording and full verification. Each entry's scoped dates are 12 September 2026. The edition ID and global legal-state date remain unchanged.
