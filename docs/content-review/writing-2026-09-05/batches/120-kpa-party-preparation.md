# Batch 120: KPA party and representation preparation

Prepared on 23 September 2026. Status: pending implementation and independent final review. This record does not accept the current module or update any source edition, adjacent commentary or global legal-state date.

## Target and inspected material

Own future product target: `app/data/legal-library/learning/modules/kpa/party.ts`, stable ID `party`, order 5. The full legacy module was read; SHA256 `2F9339F49FCBD9C2AAB3662CF0388723AE0731927509831C9A20F89F0250C8FE`.

The full `power-of-attorney.ts` document guide and relevant party, representation and signature/service sections in accepted map topic `organ-party.ts` were inspected. The opening and operative payment-role sections of `stamp-duty-proof.ts` were inspected for destination suitability. Existing `delivery-proof`, `dispatch-proof`, `response-letter` and `case-file-index` roles are reused as described below, without accepting or changing those guides.

Reader question: whose own right or obligation is at stake, who may act on that person's behalf, what establishes that authority, and which recipient matters for service?

## What the rewrite needs to explain

1. **Strona and interes prawny.** Explain both limbs of article 28: the proceeding concerns the person's legal interest or obligation, or the person requests an authority's act because of their own legal interest or obligation. An application, payment or practical interest does not establish standing merely by existing. Tie the interest to a provision governing the particular matter. Do not present the existing adjectives “personal, concrete and current” as a verbatim statutory definition or add a disputed-standing conclusion without the relevant substantive provision and, if needed, case law.
2. **Party status and capacity are separate.** Article 29 identifies who can be a party; article 30 addresses legal capacity, capacity to act and representation. A person lacking capacity to act does not cease to be the person whose rights are involved. For a non-natural person, its statutory/legal representative and an appointed pełnomocnik are distinct roles. Do not assert that Polish civil law necessarily decides every foreign person's capacity without checking the applicable conflict rule.
3. **Representation has different sources.** Define przedstawiciel ustawowy, statutory representative and pełnomocnik in useful Ukrainian. A paid service provider or company is not automatically the named natural-person pełnomocnik under article 33. A relative of a capable adult is not automatically their legal representative.
4. **Scope and proof of authority.** Explain the actual authorized acts, written authority or authority recorded in a protocol, and the original/officially certified copy rule. Professional self-certification is limited to the categories named in article 33 § 3. An ordinary scan is not automatically an officially certified copy. The word `na piśmie` should not be paraphrased as a universal paper-only rule.
5. **Two different family-related questions.** Article 33 § 4 lets the authority dispense with demanding the power of attorney only for a minor matter, a nearest relative or household member, and no doubts about the existence and scope of authority. It does not create authority from kinship or provide a blanket fee exemption. Stamp duty is a separate statute and should not dominate this KPA module.
6. **Participation on the rights of a party.** Article 31 is in the current module's declared range but has no real explanation. A social organisation acting on the rights of a party is different from a natural-person representative acting for a party. State the cumulative statutory-purpose/public-interest conditions and the authority's admission decision. Do not infer automatic admission from providing assistance or being an NGO.
7. **Recipient versus actor.** Article 40 distinguishes legal representation, an appointed pełnomocnik, several representatives, and several parties. The designated recipient among multiple representatives does not replace the party or automatically extinguish the others' authority. Receipt and a later private forwarded copy are different events. Personal performance of an act under article 32 is another question.
8. **Avoid an unproved defective-service outcome.** The current example supplies no dates or documents and stops at instructions. Do not transform it into an automatic claim that service was ineffective, a deadline restored or reopening granted. Those conclusions require actual scope, service facts, procedural stage and the relevant remedy conditions.

Replace layers of orientation and exercises with authored subject sections and a completed example. Keep stable identity and neighbouring modules. No shared rendering redesign is required.

## Fresh primary-source scope

[KPA base-act metadata](https://eli.gov.pl/api/acts/DU/1960/168) was fetched again on 23 September 2026. It reports `IN_FORCE`, status `akt posiada tekst jednolity`, changeDate `2025-12-12T14:35:06`. The inspected `Akty zmieniające` list begins with DU/2025/769, effective 13 July 2025, then older amendments. No later KPA amendment was listed.

The relevant passages were freshly read from [Dz.U. 2025 poz. 1691, official compiled KPA](https://eli.gov.pl/api/acts/DU/2025/1691/text/T/D20251691L.pdf), 46 physical pages, printed compilation date 4 December 2025. Page numbers below are physical PDF pages.

| Locator | Exact useful scope and qualification |
| --- | --- |
| 28–30, page 7 | Both limbs of standing; natural/legal persons and the specified organisational categories; capacity assessed under civil law unless special provisions differ; natural persons lacking capacity act through legal representatives, non-natural persons through legal or statutory representatives. Succession in 30 §§ 4–5 concerns its stated transferable/inheritable rights and estate situations, not every residence matter. A short boundary is enough. |
| 31 §§ 1–5, page 8 | Statutory objectives and public interest under § 1; authority's postanowienie under § 2; participation on the rights of a party under § 3; a view submitted with consent under § 5 is not the same as admission. § 1a separately concerns the stated posted-worker/employer participation with the represented party's consent. Do not generalize that branch to all organisations in all cases. |
| 32 and 33 §§ 1–4, page 8 | Exception for an act requiring personal action; natural-person representative with capacity to act; written authority or protocol; original or officially certified copy; named professionals' self-certification; possible demand for official certification of the party's signature if doubts arise; narrow minor-matter exception. |
| 34 §§ 1–2, page 8 | Authority applies to court for a representative for an absent person or person unable to act where none is already appointed. The urgent temporary appointment by the authority in § 2 concerns the absent person until court appointment. Do not extend § 2 indiscriminately to every incapacity case. |
| 40 §§ 1–3, page 10 | Service on the party or legal representative; service on the appointed pełnomocnik; only one of several representatives receives letters, and the party may designate that person. Several parties who jointly applied are a separate § 3 situation. |
| 40 §§ 4–5, page 11 | Special service-agent rule for the precisely defined party outside Poland/EU/Switzerland/EFTA-EEA, subject to the resident case-representative, consular and registered electronic delivery qualifications. The file-service consequence carries the initial instruction requirement. A bare “every person abroad needs a Polish representative” statement would be wrong. This is an optional boundary, not a required second example. |
| 57 §§ 1 and 4, page 14 | If a chosen example calculates days, omit the event day and adjust an endpoint falling on Saturday or statutory holiday. The proposed example below uses a Friday endpoint and needs no weekend or holiday extension. |
| 145 § 1 pkt 4, page 31; 146–149, page 32 | Reopening ground concerns a case ended by a final decision and nonparticipation without the party's fault. This ground requires the party's request; the one-month filing period runs from learning of the decision under 148 § 2. The separate limitations and reopening procedure prevent an automatic annulment claim. Prefer a brief boundary over reproducing the full remedy chapter. |

The full KPA-amending article 1 of [DU/2025/769](https://eli.gov.pl/api/acts/DU/2025/769/text/O/D20250769.pdf), pages 1–5, and its articles 31(1), page 19, and 48, page 21, were freshly read in the same 23 September source session for batch 119. That amendment does not change the party/representation provisions above. Article 31(1) preserves prior KPA wording for already initiated, unfinished cases at commencement. General entry into force was 13 July 2025; the article 48 exceptions do not concern its KPA-amending article 1. Use an example begun in 2026 rather than silently selecting a pre-commencement case.

### Sources outside the KPA check

The existing power-of-attorney guide links [stamp-duty act DU/2025/1154](https://eli.gov.pl/eli/DU/2025/1154/ogl) for the fee, exemption and recipient. This preparation checked the guide's role, not the current full stamp-duty amendment chain. If the rewrite includes a numeric fee, specific exemption or payment recipient, verify those provisions freshly before publication. Otherwise explain that payment proof and authority are separate, link the actual guide, and omit numerical claims.

The accepted map provides residence-specific illustrations using foreigners-law 113a, 139k and 106d(3). Those are not interchangeable: ordinary temporary-residence standing, intracorporate-transfer standing and signing the application are different questions. This preparation does not revalidate those special provisions or MOS behavior. A newly dated specific claim requires the author's current amendment/activation/transition check. General KPA article 32 alone does not establish who may sign a particular MOS application.

## Proposed completed example

Use a new, expressly simplified ordinary KPA matter initiated in August 2026. The substantive rule in this hypothetical proceeding concerns an obligation of adult X; X's party status and capacity to act are stipulated and undisputed. No residence application, child, organisation, foreign service, substitute service or personal-action summons is involved. This example demonstrates representation and receipt after standing has been established; it does not pretend to resolve a disputed substantive legal interest.

X appoints two natural persons, A and B, both with capacity to act, to conduct this case. The signed originals identify the same case and cover receiving letters and submitting explanations. They are placed in the file on 1 September. X separately and unambiguously designates B as the recipient under article 40 § 2. Neither authority has been revoked or limited later. Fee issues are outside this comparison; no exemption follows from any relationship in the example.

On 4 September 2026, the authority properly serves B with a written request to explain a specified factual discrepancy, allowing 14 days from service. This is a selected period in the hypothetical request, not a universal response period. B forwards a copy to X on 7 September. B signs and actually files the response for X with the competent authority on 10 September, using a permitted paper channel; an office confirmation records receipt. The selected act does not require X to perform it personally. By 10 September the completed result is a response filed by an authorised representative within the period ending 18 September. There is no merits decision or finding that the response proves every disputed fact.

Suggested Polish specimen, labelled a shortened, fictional private comparison of actual records, not an authority form:

| Dokument lub zdarzenie | Ustalona treść | Znaczenie |
| --- | --- | --- |
| Pełnomocnictwa A i B, złożone 1 września | Obie osoby umocowane do prowadzenia tej sprawy; X wskazał B do odbioru pism. | X pozostaje stroną. Wskazanie B nie odwołuje pełnomocnictwa A. |
| Dowód doręczenia wezwania | Prawidłowe doręczenie B: 4 września 2026 r. | Termin 14 dni liczy się od następnego dnia; upływa 18 września. |
| Przesłanie kopii klientowi | B przekazał kopię X 7 września. | Nie jest to nowa data doręczenia przez organ. |
| Odpowiedź i potwierdzenie jej wniesienia | B podpisał odpowiedź w imieniu X; organ przyjął ją 10 września. | Czynność mieściła się w umocowaniu i została wykonana w terminie. Brak rozstrzygnięcia co do istoty. |

Do not call the private table proof of filing or service. It points to the originals and receipt records. Keep the two signed authorities, recipient designation, actual wezwanie, delivery proof, signed response and filing confirmation distinct. Do not invent a mandatory universal register of representatives or require repeating all these documents with the response when they are already in the file.

The standing section can independently explain that someone who only pays for assistance or prepares a document does not acquire standing from that act. Avoid inserting a third person's categorical exclusion into the example without specifying whether any independent right or obligation is involved.

## Exact document destinations and gaps

| Selected or conditional record | Existing ID | Role and limitation |
| --- | --- | --- |
| Actual authorities for A and B | `power-of-attorney` | Establish the selected scope and named representative. Service contract with a company is not automatically a substitute. Original/copy distinction belongs beside the record. |
| Authority's selected written demand | `authority-summons` | Actual wezwanie in this example. State its chosen content and period; do not call every procedural letter a summons. |
| Proper service on B | `delivery-proof` | Establishes the selected service event. The private forwarded copy to X has a different role. |
| B's signed response for X | `response-letter` | Fits because the response actually answers a wezwanie. This guide is not a generic destination for the power of attorney or recipient designation. |
| Office confirmation of the response filed on 10 September | `dispatch-proof` | The guide also distinguishes office acceptance from postal dispatch and electronic receipt. Name the chosen office confirmation accurately; do not fabricate UPO. |
| Working comparison table | `case-file-index` | Optional explanatory link to the private record role. It does not replace the underlying records. |
| Proof of a fee for lodging a power of attorney | `stamp-duty-proof` | Conditional only. A transfer proves payment, not authority or standing. No amount or exemption is selected in the proposed example. |
| Employer annex in a separately verified residence illustration | `employment-annex-1` | Conditional contrast only: employer information is not the applicant's power of attorney. Absent from the selected ordinary KPA example. |

There is no need to invent a dedicated catalogue document for an article 40 § 2 recipient designation; it can be named and shown as a clause in the selected authority or separate party statement. No suitable dedicated guide for an article 34 court appointment was established in this preparation. Do not label that appointment as an ordinary power of attorney. A future court-appointment guide would be a separate task.

## Proposed structure and integration limits

Use five connected sections: legal interest and party status; capacity and sources of representation; scope and proof of authority; social-organisation participation and its different status; service on representatives with the completed record comparison. Article 34 and the narrow reopening boundary can sit beside the relevant distinction without separate large digressions.

The existing KPA panel maps party to 28–34 and 40. Preserve those core entries. If article 57 becomes substantive in the final specimen explanation, add it narrowly to the actual panel mapping and its loader coverage; do not assume typed inline citations automatically populate the KPA panel. Do not expand the panel to every remedy article merely because the author includes a short boundary.

A comparison table is sufficient. No decorative party hierarchy, real signatures, client data, invented court order or simulated portal screen is needed. Preserve the excerpt's fictional and shortened status.

Only this preparation file was authored. No product edits, tests, build, browser or commit were performed. Future implementation requires fresh checks for any added special-law claims, independent full-text review, exact final hash, appropriate project verification and actual page inspection.
