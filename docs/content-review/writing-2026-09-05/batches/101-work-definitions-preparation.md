# Batch 101 preparation: who entrusts the work?

Status: preparation only. No product content has been rewritten or accepted. Source check: 12 September 2026, limited to the provisions and distinctions below.

## Selected module and reader question

Read the entire `app/data/legal-library/learning/modules/powierzanie-pracy/uczestnicy-i-definicje.ts`, including its knowledge envelope. Preserve module ID `uczestnicy-i-definicje`, envelope ID `learning-module:powierzanie-pracy:uczestnicy-i-definicje`, order 2 and title "Учасники та законодавчі визначення".

The reader needs to identify the contractual employer, the statutory `podmiot powierzający pracę`, an agency's `pracodawca użytkownik`, and a foreign entity that actually employs and posts a worker. A foreign shareholder, a client and a supervisor are not interchangeable roles. The answer should show which facts establish each relationship and which document actually records it.

The current two sections give a general organization checklist. They do not unpack the Polish/foreign entity definitions, the express referral to another statute, or the difference between the employer's and worker's statutory definitions of illegality. They have no completed example. Their closing exercise asks the reader to draw a role map. The outsourcing warning risks treating work on another entity's premises or within its organization as sufficient to establish worker referral.

Read the work-law curriculum and relevant passages of the neighboring legal-stay and outsourcing modules. These adjacent modules were not fully reviewed or accepted. Read the roles and example overlap in the accepted `temporary-work` and `outsourcing-case` map articles. The former already explains agency operation and the 18/36-month limit with an agency-change example. The latter already compares a contractor's cleaning organization with the client's instructions. This module should explain how statutory definitions are read across acts, rather than repeat either full topic.

## Actual rendering and available contract

Opened `/law/powierzanie-pracy/learn/uczestnicy-i-definicje` in the running development app using the `definitions-prep` browser session and read its rendered main text. It currently displays the two authored sections, their local steps, evidence lists and warnings. It does not display the obsolete exercise, a synthetic example or an example heading. The sidebar labels it module 3 because the introductory reading module precedes the authored curriculum order. The displayed legal-state date remains 2026-07-18.

Inspected `legal-learning-view.ts`, `legal-learning-module-content.tsx`, `learning/types.ts` and the route's date projection. Batch 99 already provides optional authored `caseExample` and `sample`, optional `exercise`, and section-preserving `mechanismSections`. No second renderer or new example schema is needed. An absent example is omitted from the TOC. Typed references in example text and sample cells are collected. The current generic view does not invent facts or a conclusion from questions or exercise text.

The generic route obtains its displayed legal-state date from the edition manifest. Updating this module's review envelope alone will not change that date. The author/root should state the bounded September source check accurately without silently renewing the whole act's edition or atlas baseline. This is a date-display consideration, not a request to change the global date in this preparation.

## Current official source check

Read the official PDFs directly, including their text, rather than relying on snippets. Page numbers below are physical PDF pages counted from 1.

- [Work act, current compiled text, Dz.U. 2025 poz. 621](https://eli.gov.pl/api/acts/DU/2025/621/text/U/D20250621Lj.pdf), pages 3–15, articles 2–6 including 5a. The compiled header is 17 June 2026 and lists 2025/1794 and 2026/203, 473 and 734 among incorporated amendments.
- [Official work-act status metadata](https://eli.gov.pl/api/acts/DU/2025/621) reports the act in force. Its listed amendments are 1794 effective 27 April 2026, 203 effective 5 March 2026, 473 effective 8 July 2026 and 734 effective 20 June 2026. The source response lists no later amendment. Effective alternatives inside a compiled PDF still require attention; the header date is not itself the legal-state date for every provision.
- [Temporary-workers act, consolidated text, Dz.U. 2025 poz. 236](https://eli.gov.pl/api/acts/DU/2025/236/text/O/D20250236.pdf), page 2 for articles 1–7 and page 8 for article 25a. The page 8 annotation identifies the 2024/1871 change to article 21 ust. 4, effective 19 March 2025.
- [Official temporary-workers base-act metadata](https://eli.gov.pl/api/acts/DU/2003/1608) reports the act in force and lists 2024/1871 as the latest amendment. The definitions relied on below are in the current consolidated text.

### Definitions that need actual explanation

1. Work-act article 2 pkt 1 defines a foreigner by absence of Polish citizenship. Do not use foreign birthplace or a foreign passport alone as the definition. If discussing EU citizens, retain the separate act-scope exclusion in article 1 ust. 4 pkt 6; a definition and the act's application are different questions.
2. Article 2 pkt 4 includes an organizational unit without legal personality and a natural person. It requires the contractual or other legal relationship through which work is entrusted or intended. Receiving the commercial benefit is not a complete substitute for that relationship.
3. Article 2 pkt 5's foreign-entity definition has combined territorial and business conditions. Article 2 pkt 6 expressly includes a Polish branch or representative office of a foreign entity and separately describes the EEA-citizen fixed-business-place alternative. Ownership nationality is not their test. Avoid simplifying these provisions to "foreign company" versus "Polish shareholders".
4. Article 2 pkt 7 and 8 incorporate the meanings from the 2003 act's article 2 pkt 1 and 2. The user sets tasks and controls performance by the agency-referred worker. The temporary employee is employed by the agency to work for and under the user's direction. The agency remains the contractual employer in the selected employment example.
5. Article 2 pkt 9 includes employment and specified civil relationships, corporate functions and posting. The corporate clauses include actual presence in Poland and specified functions/entities. Do not convert share ownership alone into performance of a board or representation function. Article 6 then distinguishes permit situations; it does not negate an applicable article 3 exemption.
6. Article 2 pkt 2 and pkt 3 are not identical illegality definitions for two interchangeable actors. The entity's definition additionally addresses conditions, position and written-contract issues with qualifications. Avoid turning this definitions module into a penalty schedule or declaring both actors liable for the same list without checking the relevant offence.

The 2003 act's article 2 pkt 3 defines the tasks that constitute temporary work. Article 7 distinguishes a temporary employee's fixed-term employment contract from a civil-law referral of a person who is not an agency employee. Article 25a ust. 1 applies a specified selection of provisions to the civil variant. Do not call every agency-referred civil contractor a `pracownik tymczasowy` in the definition's strict employment sense, or extend every employment rule automatically to that person.

### What articles 3–6 add, within this module's scope

Article 3 ust. 1 pkt 6 is a suitable bounded example: a holder of a Polish permanent residence permit has the named work entitlement. This avoids inventing an issued work permit or country-dependent declaration in a roles example. The entitlement does not erase the general contract and document duties in articles 4 and 5. Article 4 ust. 5 exempts the expressly listed article 3 ust. 1 pkt 1–5 persons from its ust. 2–4, not the permanent-residence holder in pkt 6.

Article 5 ust. 1 generally requires a written contract before admission to work, with the corporate-function exception in article 6 ust. 1 pkt 2. Article 5 ust. 2's understandable written version of a Polish contract is different from ust. 3's sworn Polish translation of a foreign-language contract. Neither the definitions nor a permit should replace the actual contractual record. A short cross-reference is enough; the employer-duties module and guide already own detailed retention and notification explanations.

Article 5a was read, but its full temporary-protection and Ukrainian transitional application should not be newly taught here. In particular, it cannot be treated as a complete account of every Ukrainian worker after 5 March 2026 without the separate 2026/203 transition. Likewise, the many imported residence grounds and delegated regulations in article 3 were not all independently reverified in this preparation. Keep the selected permanent-residence point and refer other eligibility questions to their existing explanations.

## Proposed completed example

This is a proposed new fiction, not an existing case or accepted authoring. Use an adult Indian citizen with a Polish permanent residence permit valid for the example's work period. Agency A is a Polish-seated sp. z o.o. Its shareholder H is a German company. H has no employment or posting relationship with the worker. A hires the worker under a fixed-term `umowa o pracę` to work for user B from 17 to 28 August 2026 on a backlog that B's own employees could not complete on time. B sets the worker's daily tasks and controls performance. The example does not assess KRAZ eligibility, every employment condition or overall compliance.

Selected records and completed comparison:

| Actual selected material                               | Selected fictional content                                     | What it establishes for the comparison                                                        |
| ------------------------------------------------------ | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| A's Polish register information                        | Polish seat and identity of A                                  | Entity identity; foreign ownership does not turn A into the worker's foreign employer         |
| Agency/user written arrangements of 13 August          | A as agency, B as user, selected tasks and 17–28 August period | The agreed agency/user relationship, not the employee's contract itself                       |
| Worker's employment contract of 14 August              | A as employer, B as user, same period                          | Who employs the worker and for whom temporary work is performed                               |
| B's task records from 17–28 August                     | B assigns and checks the worker's tasks                        | Actual user direction, distinct from H's shareholder position                                 |
| Existing permanent-residence decision and current card | The worker's selected Polish status, checked for the period    | The separate article 3 ust. 1 pkt 6 basis, not evidence that B signed the employment contract |

On 31 August, the staff member completes an internal comparison and corrects the earlier working description "Pracodawca: B; podmiot zagraniczny: H" to "Pracodawca i polski podmiot powierzający pracę: A; pracodawca użytkownik: B; H: wspólnik A, bez stosunku zatrudnienia lub delegowania pracownika". This working record is the completed outcome. It is not an official form, an application submission, a permit grant or an inspection finding. No work-permit application or fictional approval follows from correcting the description.

The Polish specimen should contain the selected document lines and this resolved classification, not a blank role diagram. Explain why each conclusion follows and what the limited comparison leaves unanswered. The exact company labels and dates can be finalized by the author without introducing real identifiers or a new salary threshold.

## Rewrite scope and document destinations

Prefer five connected sections: the statutory relationship; Polish versus foreign entity; employer versus user and imported definitions; the activities covered and separate access basis; reading the selected records. Then provide the completed authored example. Remove the exercise and replace vague questions with the actual explanation. Do not force the module into a course or repeat the full agency-change calculation, outsourcing case or permit procedure.

Existing precise destinations include `business-register-information` for A's Polish register, `agency-user-arrangements`, `employment-contract`, `administrative-decision` and `residence-card`. The `work-organisation-evidence` guide is an evidence-set overview. It is not a dedicated daily-task record or mandatory single attachment. Name the selected task records plainly, or use the overview once with its honest scope. Do not link H to a foreign-registry guide merely because H is foreign if that record is not used in the example.

Before writing, confirm the exact typed legal/document author helpers and existing IDs. External citations to the 2003 act must point to that act, not article 2 of the work act by accident. Use the current sample contract; a table sample has no `language` property. Preserve authored facts, analysis and lesson through the existing generic view. Check the resulting desktop/mobile example and typed previews after implementation, with the root's central tests. No test, build, authored module acceptance or whole-corpus renewal was performed as part of this preparation.
