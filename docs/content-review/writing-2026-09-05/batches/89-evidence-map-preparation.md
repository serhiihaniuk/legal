# Evidence chapter: pending article review

Preparation on 12.09.2026 while batch 88 is in progress. No article rewrite or acceptance is recorded here.

Root read the complete document-matrix and evidence-matrix map topics and the existing evidence-matrix document guide. These are different destinations: the map's document-matrix explains linking conditions, facts and evidence; its evidence-matrix explains formal completeness versus substantive proof. The document guide shows an internal working record. Preserve stable IDs and distinguish these roles rather than duplicating one table across all three pages.

The document-matrix topic still uses the legacy field template, imperative task language and unexplained Polish connecting prose. Its claim that bank statements, payroll and ZUS show actual payment needs correction. Contribution records and accrual information do not by themselves establish the employee's actual receipt of money. The new article should explain admissibility, the meaning and limits of an official document, assessment of all evidence and a completed comparison that leaves unresolved facts visible. Link the actual working matrix and specific evidence guides; do not require an internal matrix as a statutory attachment.

The formal-completeness topic also remains in the legacy template. It needs a self-contained explanation of the concrete defect, requested action, legal basis and procedural consequence. A missing proof of a condition must not automatically become a formal defect. A completed mixed-request example should distinguish those functions without inventing a universal residence filing requirement.

Before implementation, verify current KPA text and amendments, especially articles 7, 63–64, 75–77 and 79a–81, and any special residence provisions used in an example. The ELI page currently offers the text through T/D20251691L.pdf; an attempted guessed U URL failed and supplies no evidence. The relevant source configuration is legal-corpus/documents/kpa-2025-1691.json. Full source checks, authored rewrite, independent review and rendered verification are still required.

This preparation does not replace the remaining employment-document gaps, other map/law writing, full source fidelity or whole-project legal acceptance in the active goal.

## Source verification and article boundaries

On 12.09.2026 root and legacy_case_audit read the relevant KPA provisions in [the actual T edition](https://eli.gov.pl/api/acts/DU/2025/1691/text/T/D20251691L.pdf). The reviewer checked the base act's live amendment relationships: 2025/769 is the latest listed amendment; 1691 is the latest consolidation. The amendment's actual T text changes other provisions, not the articles used in this batch. The consolidation preserves its transitional provisions. No guessed U edition was treated as a source and no global legal-state date changes.

The chapter placement remains deliberate. document-matrix is the evidence chapter's introduction to conditions, facts and evidence; evidence-matrix remains in filing and explains formal cure versus proving conditions. The separate evidence-matrix document guide remains an example of an internal working record. Stable IDs and existing navigation are preserved.

Root rewrote document-matrix with four authored sections and a completed May/June payroll comparison. [The current RCA form](https://www.zus.pl/documents/10182/18428/0558_25%2BRCA%2Bdo%2Brozporz%C4%85dzenia%2B%28rok%2B2026%29_WCAG.pdf/bde064e4-c703-608f-5f64-da3e41156b62?t=1777550628024), [ZUS E-akta's shifted-payroll answer](https://www.zus.pl/firmy/przedsiebiorco-przeczytaj-wazne/e-akta/e-akta-pytania-i-odpowiedzi) and [the no-arrears service](https://www.zus.pl/baza-wiedzy/katalog-uslug/katalog-uslug-firmy/rozliczenia-skladek/rozliczenia-na-koncie-platnika/zaswiadczenie-o-niezaleganiu-w-oplacaniu-skladek) were checked by root, ukr_work_sources and the independent reviewer. The instruction PDF used by the older RCA guide failed retrieval; this batch uses the actual current form and live explanations instead. No complete revalidation of the older guide is claimed.

The May credit matches the May amount payable; June payment remains unknown. Missing July evidence does not prove nonpayment. The example creates no universal bank-statement requirement, income threshold or conclusion about all permit conditions. Reusing one source for several questions does not mean submitting it repeatedly. ZUS contribution reporting, payroll accrual, actual receipt and the payer's account are distinct.

## Completed articles and acceptance

Both complete articles were rewritten and independently accepted on 12.09.2026. Root authored document-matrix and read all of evidence-matrix; ukr_filing_review authored evidence-matrix; legacy_case_audit independently reviewed both. The formal-completeness page has five subject-specific sections and a completed mixed-request example. It distinguishes signature cure, evidence about June payment, an unresolved May and the separate roles of 64, 79a and 107. It deliberately uses a permitted-paper procedure without inventing a residence filing checklist.

Independent review tightened the qualification for formal attachment status and corrected the Polish specimen wording. Final accepted SHA-256 hashes:

- app/data/legal-map/editorial/topics/document-matrix.ts: 20800fe84970b42bc88605d92edde55c1f95fc91809569a6c9e49cb67b28c312.
- app/data/legal-map/editorial/topics/evidence-matrix.ts: 2bb87c3ff9dff132b1c6b27c257b692021f6b15ce9993ccf15bbdcbc2ff3dcb9.

Browser verification found missing usage backlinks for the formal example's payroll and bank records. Root added conditional document metadata, independently reviewed at the final hash above. This adds catalog navigation, not a repeated submission requirement.

## Verification and remaining work

Full verification passed with 259 application tests in 41 files, 70 passing corpus tests with one existing skip, 15 review tests and production build. The final metadata delta received renewed typecheck, 102 document previews and production build. Existing generic map tests cover authored section contents and preserved legacy content; no test is treated as proof of legal accuracy.

Root inspected both examples at 1440 and 360 px. Viewport and document widths matched. The 512 px table stays inside a 310 px keyboard-focusable region on mobile; ArrowRight moved it 40 px. The formal example's section anchor landed at 86.125 px desktop and 80.828125 px mobile. Keyboard navigation from its bank link to the document passed, as did the final visible usage backlink to the map article. An earlier automation attempt confused an accessible label with link text and did not navigate; the observed locator succeeded on retry. No application browser errors or warning/error console entries were recorded. The QA browser was closed.

The wider goal remains open. Batch 90 records the next complete-file review of document-types and evidence. Other map topics, law learning modules, provision explanations, remaining document gaps, original-source fidelity and whole-project legal review are unfinished.

The content ledger validates at 1,749 entries. Current writing acceptance is 218 of 1,839 active files. This is scoped article progress, not completion of the overall editorial or legal audit.
