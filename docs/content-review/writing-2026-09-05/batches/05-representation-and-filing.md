# Representation, filing and payment records

Reviewed on 2026-09-05 against `legal-explanatory-writing`.

## Questions and completed examples

All four guide files were read in full. Their rendered explanations, specimens and links were inspected in the browser.

| Document | Question answered | Visible example |
| --- | --- | --- |
| Pełnomocnictwo | Does this authority cover the intended action, and who must still act personally? | A fictional Polish clause authorizes inspection and copying only. The applicant signs the response; wider authority is filed for subsequent representation. |
| MOS application | When does a prepared form become a submitted application? | A working comparison distinguishes an unsigned employer annex and a draft on 4 August from signed submission and its UPO on 5 August. |
| Filing certificate | Which date and legal effect does this certificate establish? | A fictional fragment separates filing on 4 August from certificate issuance on 18 August. The example states the timely-filing and formal-completeness assumptions. |
| Stamp-duty proof | Which payment does this receipt establish, and is it the correct amount? | A fictional executed transfer for 340 zł is compared with the applicable 440 zł work-permit fee. A linked 100 zł supplement resolves the stated shortfall. |

The examples contain no client identifiers, account numbers, signatures or imitation official seals. The MOS comparison is a working record, not an image of the official interface. The certificate fragment illustrates selected fields; it is not a full reproduction of the official form.

## Corrections and case integration

The representation guide separates a service contract, the applicant's representative and the employer's authorized signatory. It explains originals and certified copies, service on a representative, the scope of authority, personal MOS signing and fee exemptions.

The MOS guide distinguishes the regulation's annex 1, which contains the main application, from the employer form in annex 2, called Załącznik nr 1 within the application. It separates drafts, signatures, UPO and subsequent verification. Articles 106k and 106l concern specified ICT and family applications on paper. An incorrect draft description of them as outage procedures was removed during direct source review before publication.

The certificate guide separates the special certificate under art. 108 from ordinary certificates under KPA. Article 108 ust. 9 excludes the general KPA certificate chapter, so the general seven-day issue period is not attributed to the MOS certificate. The official two-page regulation was inspected as a rendered PDF, including the second-page form's filing date, issue date, person and passport fields, signature, QR code and seal positions.

The fee guide distinguishes the permit, representation and card payments. It explains executed versus planned transfers, the specific work-permit rate, exemptions and recipient jurisdiction. The shared stamp-fee source now points to the 2025 consolidated publication instead of the superseded 2023 publication.

The work-case guide received a focused integration change. The certificate appears in the evidence stage, procedure stage and overall register as a document issued after the application's check. It is absent from the initial filing attachments. Four representation rows no longer imply that an ordinary representative can sign the applicant's MOS application. Three fee rows describe the fee for granting the permit. The whole work-guide file is still pending full review; these edits do not accept its other conditions or document rows.

## Official sources checked

Checked on 2026-09-05:

- [KPA publication](https://eli.gov.pl/eli/DU/2025/1691/ogl) and [official PDF](https://eli.gov.pl/api/acts/DU/2025/1691/text/O/D20251691.pdf): art. 32–33 on representation and form, art. 40 § 2 on service, and art. 217–219 on ordinary certificates and refusal.
- [Foreigners-act reading text](https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf): art. 106c–106d on the channel, attachments, signatures and UPO; art. 106e–106i on later requests and exceptions; art. 106j–106l on the specified paper procedures; art. 108 on the filing certificate, stay effect, suspension exception and separate issue rules. MOS commencement is corroborated by UdSC guidance and the effective form regulations rather than inferred from future-wording typography in the reading text.
- [Application regulation, Dz.U. 2026 poz. 553](https://eli.gov.pl/api/acts/DU/2026/553/text/O/D20260553.pdf): main application and employer-annex numbering, consistent with batch 03's official form inspection.
- [Certificate regulation, Dz.U. 2026 poz. 386](https://eli.gov.pl/eli/DU/2026/386/ogl) and [official PDF](https://eli.gov.pl/api/acts/DU/2026/386/text/O/D20260386.pdf): the form in the annex and entry into force on 27 April 2026. Page 2 was rendered and visually inspected using the PDF skill.
- [Stamp-fee publication, Dz.U. 2025 poz. 1154](https://eli.gov.pl/eli/DU/2025/1154/ogl) and [reading text](https://eli.gov.pl/api/acts/DU/2025/1154/text/U/D20251154Lj.pdf): art. 1, 4, 6, 8 and 12; annex III position 2b and annex IV. The reading text dated 3 August 2026 incorporates later amendments. Future provisions marked for 1 October 2026 and 1 January 2027 were not described as already applicable. The 440 zł rate is limited to the specified permit category; the 17 zł representation rate retains its exemptions.
- [UdSC MOS questions and answers](https://www.gov.pl/web/udsc/mos-qa) and [MOS information](https://www.gov.pl/web/udsc/info-mos): applicant and other-party signatures, drafts, submitted PDF/XML and UPO, later certificates, the 27 April start, earlier received applications and reporting later changes outside MOS.
- [UdSC payment information](https://www.gov.pl/web/udsc/informacje-o-oplatach): separate permit and card payment confirmations for MOS applications. The 440 zł rate was checked in the statute, not inferred from the page's image table.

The obsolete MOS personal-representation URL did not resolve and was removed from the guide. The current UdSC guidance and statutes support the replacement explanation.

These are scoped page checks. The atlas baseline remains 18.07.2026. No corpus edition was promoted and no independent legal-review attestation was added.

## Verification

- `npm run verify` passed after the final prose changes, including typechecks, generated-data checks, lint, formatting, 91 application tests, 69 corpus tests, 15 review-tool tests, editorial validation and the production build.
- All four document URLs rendered their examples at 360 px without horizontal page overflow. Checked section anchors resolved. The MOS table scrolled 80 px with keyboard arrows after focus, within its own region.
- Desktop navigation opened the work case through the certificate's usage link. Expanded case disclosures showed no certificate in filing, and one correctly labelled certificate in each of the evidence and procedure stages.
- The case's certificate reference returned to the document, and its typed art. 108 reference opened the correct provision. Browser console error logs were empty.
- Existing build warnings remain. This batch adds writing-review evidence for the four complete document files only; the source helper and work-case file are not marked wholly reviewed.
