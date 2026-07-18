# Legal corpus add/update editorial work order

> **Template status:** target template for a future deterministic preparation script. The script fills the placeholders and emits a work order; this file is not itself a source artifact and must not be used to bypass corpus validation.
>
> **Modes:** set `MODE=add` for a new stable document or `MODE=update` for a new immutable edition of an existing document. Any other value is invalid and must stop the review.

## Work-order envelope

```yaml
MODE: update
workOrderPath: legal-corpus/work-orders/2026-07-18-ustawa-o-cudzoziemcach.json
documentId: ustawa-o-cudzoziemcach
oldEditionId: ustawa-o-cudzoziemcach-2025-1079
newEditionId: ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18
legalStateDate: 2026-07-18
checkedAt: 2026-07-18
legalStatusEvidencePath: legal-corpus/work-orders/2026-07-18-ustawa-o-cudzoziemcach.json
sourceProvider: eli
officialPageUrl: https://eli.gov.pl/eli/DU/2025/1079/ogl
metadataUrl: https://api.sejm.gov.pl/eli/acts/DU/2025/1079
pdfUrl: https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf
configPath: legal-corpus/documents/ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18.json
newEditionManifestPath: app/data/legal-corpus/ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18/manifest.json
provisionsPath: app/data/legal-corpus/ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18/provisions.json
structurePath: app/data/legal-corpus/ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18/structure.json
diagnosticsPath: app/data/legal-corpus/ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18/diagnostics.json
changedProvisionsPath: app/data/legal-corpus/ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18/edition-diff.json
approvedWriteScope: app/data/case-guides/editorial/routes/blue-card.ts
app/data/case-guides/editorial/routes/business.ts
app/data/case-guides/editorial/routes/cukr.ts
app/data/case-guides/editorial/routes/family.ts
app/data/case-guides/editorial/routes/long-term-eu.ts
app/data/case-guides/editorial/routes/other.ts
app/data/case-guides/editorial/routes/permanent.ts
app/data/case-guides/editorial/routes/student.ts
app/data/case-guides/editorial/routes/work.ts
app/data/document-library/editorial/guides/administrative-decision.ts
app/data/document-library/editorial/guides/authority-summons.ts
app/data/document-library/editorial/guides/business-register-information.ts
app/data/document-library/editorial/guides/crbr-information.ts
app/data/document-library/editorial/guides/delivery-proof.ts
app/data/document-library/editorial/guides/employment-annex-1.ts
app/data/document-library/editorial/guides/employment-contract.ts
app/data/document-library/editorial/guides/mos-application.ts
app/data/document-library/editorial/guides/passport.ts
app/data/document-library/editorial/guides/pesel-ukr-confirmation.ts
app/data/document-library/editorial/guides/power-of-attorney.ts
app/data/document-library/editorial/guides/residence-card-fee-proof.ts
app/data/document-library/editorial/guides/residence-card.ts
app/data/document-library/editorial/guides/stamp-duty-proof.ts
app/data/document-library/editorial/guides/sworn-translation.ts
app/data/document-library/editorial/guides/ukraine-work-notification.ts
app/data/document-library/editorial/guides/upo.ts
app/data/document-library/editorial/guides/zus-confirmation.ts
app/data/legal-knowledge/contracts.test.ts
app/data/legal-knowledge/dependencies.test.ts
app/data/legal-library/editorial/kpa/articles/article-art-1.ts
app/data/legal-library/editorial/kpa/articles/article-art-10.ts
app/data/legal-library/editorial/kpa/articles/article-art-100.ts
app/data/legal-library/editorial/kpa/articles/article-art-101.ts
app/data/legal-library/editorial/kpa/articles/article-art-102.ts
app/data/legal-library/editorial/kpa/articles/article-art-103.ts
app/data/legal-library/editorial/kpa/articles/article-art-104.ts
app/data/legal-library/editorial/kpa/articles/article-art-105.ts
app/data/legal-library/editorial/kpa/articles/article-art-106.ts
app/data/legal-library/editorial/kpa/articles/article-art-106a.ts
app/data/legal-library/editorial/kpa/articles/article-art-107.ts
app/data/legal-library/editorial/kpa/articles/article-art-108.ts
app/data/legal-library/editorial/kpa/articles/article-art-109.ts
app/data/legal-library/editorial/kpa/articles/article-art-11.ts
app/data/legal-library/editorial/kpa/articles/article-art-110.ts
app/data/legal-library/editorial/kpa/articles/article-art-111.ts
app/data/legal-library/editorial/kpa/articles/article-art-112.ts
app/data/legal-library/editorial/kpa/articles/article-art-113.ts
app/data/legal-library/editorial/kpa/articles/article-art-114.ts
app/data/legal-library/editorial/kpa/articles/article-art-115.ts
app/data/legal-library/editorial/kpa/articles/article-art-116.ts
app/data/legal-library/editorial/kpa/articles/article-art-117.ts
app/data/legal-library/editorial/kpa/articles/article-art-118.ts
app/data/legal-library/editorial/kpa/articles/article-art-119.ts
app/data/legal-library/editorial/kpa/articles/article-art-12.ts
app/data/legal-library/editorial/kpa/articles/article-art-120.ts
app/data/legal-library/editorial/kpa/articles/article-art-121.ts
app/data/legal-library/editorial/kpa/articles/article-art-121a.ts
app/data/legal-library/editorial/kpa/articles/article-art-122.ts
app/data/legal-library/editorial/kpa/articles/article-art-122a.ts
app/data/legal-library/editorial/kpa/articles/article-art-122b.ts
app/data/legal-library/editorial/kpa/articles/article-art-122c.ts
app/data/legal-library/editorial/kpa/articles/article-art-122d.ts
app/data/legal-library/editorial/kpa/articles/article-art-122e.ts
app/data/legal-library/editorial/kpa/articles/article-art-122f.ts
app/data/legal-library/editorial/kpa/articles/article-art-122g.ts
app/data/legal-library/editorial/kpa/articles/article-art-122h.ts
app/data/legal-library/editorial/kpa/articles/article-art-123.ts
app/data/legal-library/editorial/kpa/articles/article-art-124.ts
app/data/legal-library/editorial/kpa/articles/article-art-125.ts
app/data/legal-library/editorial/kpa/articles/article-art-126.ts
app/data/legal-library/editorial/kpa/articles/article-art-127.ts
app/data/legal-library/editorial/kpa/articles/article-art-127a.ts
app/data/legal-library/editorial/kpa/articles/article-art-128.ts
app/data/legal-library/editorial/kpa/articles/article-art-129.ts
app/data/legal-library/editorial/kpa/articles/article-art-13.ts
app/data/legal-library/editorial/kpa/articles/article-art-130.ts
app/data/legal-library/editorial/kpa/articles/article-art-131.ts
app/data/legal-library/editorial/kpa/articles/article-art-132.ts
app/data/legal-library/editorial/kpa/articles/article-art-133.ts
app/data/legal-library/editorial/kpa/articles/article-art-134.ts
app/data/legal-library/editorial/kpa/articles/article-art-135.ts
app/data/legal-library/editorial/kpa/articles/article-art-136.ts
app/data/legal-library/editorial/kpa/articles/article-art-137.ts
app/data/legal-library/editorial/kpa/articles/article-art-138.ts
app/data/legal-library/editorial/kpa/articles/article-art-139.ts
app/data/legal-library/editorial/kpa/articles/article-art-139a.ts
app/data/legal-library/editorial/kpa/articles/article-art-14.ts
app/data/legal-library/editorial/kpa/articles/article-art-140.ts
app/data/legal-library/editorial/kpa/articles/article-art-141.ts
app/data/legal-library/editorial/kpa/articles/article-art-142.ts
app/data/legal-library/editorial/kpa/articles/article-art-143.ts
app/data/legal-library/editorial/kpa/articles/article-art-144.ts
app/data/legal-library/editorial/kpa/articles/article-art-145.ts
app/data/legal-library/editorial/kpa/articles/article-art-145a.ts
app/data/legal-library/editorial/kpa/articles/article-art-145aa.ts
app/data/legal-library/editorial/kpa/articles/article-art-145b.ts
app/data/legal-library/editorial/kpa/articles/article-art-146.ts
app/data/legal-library/editorial/kpa/articles/article-art-147.ts
app/data/legal-library/editorial/kpa/articles/article-art-148.ts
app/data/legal-library/editorial/kpa/articles/article-art-149.ts
app/data/legal-library/editorial/kpa/articles/article-art-14a.ts
app/data/legal-library/editorial/kpa/articles/article-art-15.ts
app/data/legal-library/editorial/kpa/articles/article-art-150.ts
app/data/legal-library/editorial/kpa/articles/article-art-151.ts
app/data/legal-library/editorial/kpa/articles/article-art-152.ts
app/data/legal-library/editorial/kpa/articles/article-art-153.ts
app/data/legal-library/editorial/kpa/articles/article-art-154.ts
app/data/legal-library/editorial/kpa/articles/article-art-155.ts
app/data/legal-library/editorial/kpa/articles/article-art-155a.ts
app/data/legal-library/editorial/kpa/articles/article-art-156.ts
app/data/legal-library/editorial/kpa/articles/article-art-157.ts
app/data/legal-library/editorial/kpa/articles/article-art-158.ts
app/data/legal-library/editorial/kpa/articles/article-art-159.ts
app/data/legal-library/editorial/kpa/articles/article-art-16.ts
app/data/legal-library/editorial/kpa/articles/article-art-160.ts
app/data/legal-library/editorial/kpa/articles/article-art-161.ts
app/data/legal-library/editorial/kpa/articles/article-art-162.ts
app/data/legal-library/editorial/kpa/articles/article-art-163.ts
app/data/legal-library/editorial/kpa/articles/article-art-163a.ts
app/data/legal-library/editorial/kpa/articles/article-art-163b.ts
app/data/legal-library/editorial/kpa/articles/article-art-163c.ts
app/data/legal-library/editorial/kpa/articles/article-art-163d.ts
app/data/legal-library/editorial/kpa/articles/article-art-163e.ts
app/data/legal-library/editorial/kpa/articles/article-art-163f.ts
app/data/legal-library/editorial/kpa/articles/article-art-163g.ts
app/data/legal-library/editorial/kpa/articles/article-art-17.ts
app/data/legal-library/editorial/kpa/articles/article-art-18.ts
app/data/legal-library/editorial/kpa/articles/article-art-180.ts
app/data/legal-library/editorial/kpa/articles/article-art-181.ts
app/data/legal-library/editorial/kpa/articles/article-art-182.ts
app/data/legal-library/editorial/kpa/articles/article-art-183.ts
app/data/legal-library/editorial/kpa/articles/article-art-184.ts
app/data/legal-library/editorial/kpa/articles/article-art-185.ts
app/data/legal-library/editorial/kpa/articles/article-art-186.ts
app/data/legal-library/editorial/kpa/articles/article-art-187.ts
app/data/legal-library/editorial/kpa/articles/article-art-188.ts
app/data/legal-library/editorial/kpa/articles/article-art-189.ts
app/data/legal-library/editorial/kpa/articles/article-art-189a.ts
app/data/legal-library/editorial/kpa/articles/article-art-189b.ts
app/data/legal-library/editorial/kpa/articles/article-art-189c.ts
app/data/legal-library/editorial/kpa/articles/article-art-189d.ts
app/data/legal-library/editorial/kpa/articles/article-art-189e.ts
app/data/legal-library/editorial/kpa/articles/article-art-189f.ts
app/data/legal-library/editorial/kpa/articles/article-art-189g.ts
app/data/legal-library/editorial/kpa/articles/article-art-189h.ts
app/data/legal-library/editorial/kpa/articles/article-art-189i.ts
app/data/legal-library/editorial/kpa/articles/article-art-189j.ts
app/data/legal-library/editorial/kpa/articles/article-art-189k.ts
app/data/legal-library/editorial/kpa/articles/article-art-189l.ts
app/data/legal-library/editorial/kpa/articles/article-art-19.ts
app/data/legal-library/editorial/kpa/articles/article-art-2.ts
app/data/legal-library/editorial/kpa/articles/article-art-20.ts
app/data/legal-library/editorial/kpa/articles/article-art-21.ts
app/data/legal-library/editorial/kpa/articles/article-art-217.ts
app/data/legal-library/editorial/kpa/articles/article-art-217a.ts
app/data/legal-library/editorial/kpa/articles/article-art-218.ts
app/data/legal-library/editorial/kpa/articles/article-art-219.ts
app/data/legal-library/editorial/kpa/articles/article-art-22.ts
app/data/legal-library/editorial/kpa/articles/article-art-220.ts
app/data/legal-library/editorial/kpa/articles/article-art-221.ts
app/data/legal-library/editorial/kpa/articles/article-art-222.ts
app/data/legal-library/editorial/kpa/articles/article-art-223.ts
app/data/legal-library/editorial/kpa/articles/article-art-224.ts
app/data/legal-library/editorial/kpa/articles/article-art-225.ts
app/data/legal-library/editorial/kpa/articles/article-art-226.ts
app/data/legal-library/editorial/kpa/articles/article-art-226a.ts
app/data/legal-library/editorial/kpa/articles/article-art-227.ts
app/data/legal-library/editorial/kpa/articles/article-art-228.ts
app/data/legal-library/editorial/kpa/articles/article-art-229.ts
app/data/legal-library/editorial/kpa/articles/article-art-23.ts
app/data/legal-library/editorial/kpa/articles/article-art-230.ts
app/data/legal-library/editorial/kpa/articles/article-art-231.ts
app/data/legal-library/editorial/kpa/articles/article-art-232.ts
app/data/legal-library/editorial/kpa/articles/article-art-233.ts
app/data/legal-library/editorial/kpa/articles/article-art-234.ts
app/data/legal-library/editorial/kpa/articles/article-art-235.ts
app/data/legal-library/editorial/kpa/articles/article-art-236.ts
app/data/legal-library/editorial/kpa/articles/article-art-237.ts
app/data/legal-library/editorial/kpa/articles/article-art-238.ts
app/data/legal-library/editorial/kpa/articles/article-art-239.ts
app/data/legal-library/editorial/kpa/articles/article-art-24.ts
app/data/legal-library/editorial/kpa/articles/article-art-240.ts
app/data/legal-library/editorial/kpa/articles/article-art-241.ts
app/data/legal-library/editorial/kpa/articles/article-art-242.ts
app/data/legal-library/editorial/kpa/articles/article-art-243.ts
app/data/legal-library/editorial/kpa/articles/article-art-244.ts
app/data/legal-library/editorial/kpa/articles/article-art-245.ts
app/data/legal-library/editorial/kpa/articles/article-art-246.ts
app/data/legal-library/editorial/kpa/articles/article-art-247.ts
app/data/legal-library/editorial/kpa/articles/article-art-248.ts
app/data/legal-library/editorial/kpa/articles/article-art-249.ts
app/data/legal-library/editorial/kpa/articles/article-art-25.ts
app/data/legal-library/editorial/kpa/articles/article-art-250.ts
app/data/legal-library/editorial/kpa/articles/article-art-251.ts
app/data/legal-library/editorial/kpa/articles/article-art-252.ts
app/data/legal-library/editorial/kpa/articles/article-art-253.ts
app/data/legal-library/editorial/kpa/articles/article-art-254.ts
app/data/legal-library/editorial/kpa/articles/article-art-255.ts
app/data/legal-library/editorial/kpa/articles/article-art-256.ts
app/data/legal-library/editorial/kpa/articles/article-art-257.ts
app/data/legal-library/editorial/kpa/articles/article-art-258.ts
app/data/legal-library/editorial/kpa/articles/article-art-259.ts
app/data/legal-library/editorial/kpa/articles/article-art-26.ts
app/data/legal-library/editorial/kpa/articles/article-art-260.ts
app/data/legal-library/editorial/kpa/articles/article-art-260a.ts
app/data/legal-library/editorial/kpa/articles/article-art-260b.ts
app/data/legal-library/editorial/kpa/articles/article-art-260c.ts
app/data/legal-library/editorial/kpa/articles/article-art-260d.ts
app/data/legal-library/editorial/kpa/articles/article-art-260e.ts
app/data/legal-library/editorial/kpa/articles/article-art-260f.ts
app/data/legal-library/editorial/kpa/articles/article-art-260g.ts
app/data/legal-library/editorial/kpa/articles/article-art-261.ts
app/data/legal-library/editorial/kpa/articles/article-art-262.ts
app/data/legal-library/editorial/kpa/articles/article-art-263.ts
app/data/legal-library/editorial/kpa/articles/article-art-263a.ts
app/data/legal-library/editorial/kpa/articles/article-art-264.ts
app/data/legal-library/editorial/kpa/articles/article-art-265.ts
app/data/legal-library/editorial/kpa/articles/article-art-266.ts
app/data/legal-library/editorial/kpa/articles/article-art-267.ts
app/data/legal-library/editorial/kpa/articles/article-art-268.ts
app/data/legal-library/editorial/kpa/articles/article-art-268a.ts
app/data/legal-library/editorial/kpa/articles/article-art-269.ts
app/data/legal-library/editorial/kpa/articles/article-art-27.ts
app/data/legal-library/editorial/kpa/articles/article-art-27a.ts
app/data/legal-library/editorial/kpa/articles/article-art-28.ts
app/data/legal-library/editorial/kpa/articles/article-art-29.ts
app/data/legal-library/editorial/kpa/articles/article-art-2a.ts
app/data/legal-library/editorial/kpa/articles/article-art-3.ts
app/data/legal-library/editorial/kpa/articles/article-art-30.ts
app/data/legal-library/editorial/kpa/articles/article-art-31.ts
app/data/legal-library/editorial/kpa/articles/article-art-32.ts
app/data/legal-library/editorial/kpa/articles/article-art-33.ts
app/data/legal-library/editorial/kpa/articles/article-art-34.ts
app/data/legal-library/editorial/kpa/articles/article-art-35.ts
app/data/legal-library/editorial/kpa/articles/article-art-36.ts
app/data/legal-library/editorial/kpa/articles/article-art-37.ts
app/data/legal-library/editorial/kpa/articles/article-art-38.ts
app/data/legal-library/editorial/kpa/articles/article-art-39-1.ts
app/data/legal-library/editorial/kpa/articles/article-art-39-2.ts
app/data/legal-library/editorial/kpa/articles/article-art-39-3.ts
app/data/legal-library/editorial/kpa/articles/article-art-39-4.ts
app/data/legal-library/editorial/kpa/articles/article-art-39.ts
app/data/legal-library/editorial/kpa/articles/article-art-4.ts
app/data/legal-library/editorial/kpa/articles/article-art-40.ts
app/data/legal-library/editorial/kpa/articles/article-art-41.ts
app/data/legal-library/editorial/kpa/articles/article-art-42.ts
app/data/legal-library/editorial/kpa/articles/article-art-43.ts
app/data/legal-library/editorial/kpa/articles/article-art-44.ts
app/data/legal-library/editorial/kpa/articles/article-art-45.ts
app/data/legal-library/editorial/kpa/articles/article-art-45a.ts
app/data/legal-library/editorial/kpa/articles/article-art-46.ts
app/data/legal-library/editorial/kpa/articles/article-art-47.ts
app/data/legal-library/editorial/kpa/articles/article-art-48.ts
app/data/legal-library/editorial/kpa/articles/article-art-49.ts
app/data/legal-library/editorial/kpa/articles/article-art-49a.ts
app/data/legal-library/editorial/kpa/articles/article-art-49b.ts
app/data/legal-library/editorial/kpa/articles/article-art-5.ts
app/data/legal-library/editorial/kpa/articles/article-art-50.ts
app/data/legal-library/editorial/kpa/articles/article-art-51.ts
app/data/legal-library/editorial/kpa/articles/article-art-52.ts
app/data/legal-library/editorial/kpa/articles/article-art-53.ts
app/data/legal-library/editorial/kpa/articles/article-art-54.ts
app/data/legal-library/editorial/kpa/articles/article-art-55.ts
app/data/legal-library/editorial/kpa/articles/article-art-56.ts
app/data/legal-library/editorial/kpa/articles/article-art-57.ts
app/data/legal-library/editorial/kpa/articles/article-art-58.ts
app/data/legal-library/editorial/kpa/articles/article-art-59.ts
app/data/legal-library/editorial/kpa/articles/article-art-6.ts
app/data/legal-library/editorial/kpa/articles/article-art-60.ts
app/data/legal-library/editorial/kpa/articles/article-art-61.ts
app/data/legal-library/editorial/kpa/articles/article-art-61a.ts
app/data/legal-library/editorial/kpa/articles/article-art-62.ts
app/data/legal-library/editorial/kpa/articles/article-art-63.ts
app/data/legal-library/editorial/kpa/articles/article-art-64.ts
app/data/legal-library/editorial/kpa/articles/article-art-65.ts
app/data/legal-library/editorial/kpa/articles/article-art-66.ts
app/data/legal-library/editorial/kpa/articles/article-art-66a.ts
app/data/legal-library/editorial/kpa/articles/article-art-67.ts
app/data/legal-library/editorial/kpa/articles/article-art-68.ts
app/data/legal-library/editorial/kpa/articles/article-art-69.ts
app/data/legal-library/editorial/kpa/articles/article-art-7.ts
app/data/legal-library/editorial/kpa/articles/article-art-70.ts
app/data/legal-library/editorial/kpa/articles/article-art-71.ts
app/data/legal-library/editorial/kpa/articles/article-art-72.ts
app/data/legal-library/editorial/kpa/articles/article-art-73.ts
app/data/legal-library/editorial/kpa/articles/article-art-74.ts
app/data/legal-library/editorial/kpa/articles/article-art-74a.ts
app/data/legal-library/editorial/kpa/articles/article-art-75.ts
app/data/legal-library/editorial/kpa/articles/article-art-76.ts
app/data/legal-library/editorial/kpa/articles/article-art-76a.ts
app/data/legal-library/editorial/kpa/articles/article-art-77.ts
app/data/legal-library/editorial/kpa/articles/article-art-78.ts
app/data/legal-library/editorial/kpa/articles/article-art-79.ts
app/data/legal-library/editorial/kpa/articles/article-art-79a.ts
app/data/legal-library/editorial/kpa/articles/article-art-7a.ts
app/data/legal-library/editorial/kpa/articles/article-art-7b.ts
app/data/legal-library/editorial/kpa/articles/article-art-8.ts
app/data/legal-library/editorial/kpa/articles/article-art-80.ts
app/data/legal-library/editorial/kpa/articles/article-art-81.ts
app/data/legal-library/editorial/kpa/articles/article-art-81a.ts
app/data/legal-library/editorial/kpa/articles/article-art-82.ts
app/data/legal-library/editorial/kpa/articles/article-art-83.ts
app/data/legal-library/editorial/kpa/articles/article-art-84.ts
app/data/legal-library/editorial/kpa/articles/article-art-85.ts
app/data/legal-library/editorial/kpa/articles/article-art-86.ts
app/data/legal-library/editorial/kpa/articles/article-art-87.ts
app/data/legal-library/editorial/kpa/articles/article-art-88.ts
app/data/legal-library/editorial/kpa/articles/article-art-88a.ts
app/data/legal-library/editorial/kpa/articles/article-art-89.ts
app/data/legal-library/editorial/kpa/articles/article-art-9.ts
app/data/legal-library/editorial/kpa/articles/article-art-90.ts
app/data/legal-library/editorial/kpa/articles/article-art-91.ts
app/data/legal-library/editorial/kpa/articles/article-art-92.ts
app/data/legal-library/editorial/kpa/articles/article-art-93.ts
app/data/legal-library/editorial/kpa/articles/article-art-93a.ts
app/data/legal-library/editorial/kpa/articles/article-art-94.ts
app/data/legal-library/editorial/kpa/articles/article-art-95.ts
app/data/legal-library/editorial/kpa/articles/article-art-96.ts
app/data/legal-library/editorial/kpa/articles/article-art-96a.ts
app/data/legal-library/editorial/kpa/articles/article-art-96b.ts
app/data/legal-library/editorial/kpa/articles/article-art-96c.ts
app/data/legal-library/editorial/kpa/articles/article-art-96d.ts
app/data/legal-library/editorial/kpa/articles/article-art-96e.ts
app/data/legal-library/editorial/kpa/articles/article-art-96f.ts
app/data/legal-library/editorial/kpa/articles/article-art-96g.ts
app/data/legal-library/editorial/kpa/articles/article-art-96h.ts
app/data/legal-library/editorial/kpa/articles/article-art-96i.ts
app/data/legal-library/editorial/kpa/articles/article-art-96j.ts
app/data/legal-library/editorial/kpa/articles/article-art-96k.ts
app/data/legal-library/editorial/kpa/articles/article-art-96l.ts
app/data/legal-library/editorial/kpa/articles/article-art-96m.ts
app/data/legal-library/editorial/kpa/articles/article-art-96n.ts
app/data/legal-library/editorial/kpa/articles/article-art-97.ts
app/data/legal-library/editorial/kpa/articles/article-art-98.ts
app/data/legal-library/editorial/kpa/articles/article-art-99.ts
app/data/legal-library/editorial/kpa/index.test.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-218a.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-219a.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-219g.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-222a.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-222b.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-223a.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-225a.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-225i.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-229.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-281a.ts
app/data/legal-library/learning/kpa.ts
app/data/legal-library/learning/modules/kpa/anatomy.ts
app/data/legal-library/learning/modules/kpa/appeal.ts
app/data/legal-library/learning/modules/kpa/authority.ts
app/data/legal-library/learning/modules/kpa/court.ts
app/data/legal-library/learning/modules/kpa/decisions.ts
app/data/legal-library/learning/modules/kpa/delay.ts
app/data/legal-library/learning/modules/kpa/extraordinary.ts
app/data/legal-library/learning/modules/kpa/files-evidence.ts
app/data/legal-library/learning/modules/kpa/initiation.ts
app/data/legal-library/learning/modules/kpa/party.ts
app/data/legal-library/learning/modules/kpa/principles.ts
app/data/legal-library/learning/modules/kpa/silence.ts
app/data/legal-library/learning/modules/kpa/summons.ts
app/data/legal-library/learning/modules/kpa/system.ts
app/data/legal-library/learning/modules/kpa/time-service.ts
app/data/legal-library/learning/modules/ustawa-o-cudzoziemcach/cards-and-documents.ts
app/data/legal-map/data.ts
app/data/legal-map/editorial/topics/appeal.ts
app/data/legal-map/editorial/topics/blue-card.ts
app/data/legal-map/editorial/topics/business-stay.ts
app/data/legal-map/editorial/topics/case-file.ts
app/data/legal-map/editorial/topics/complaint.ts
app/data/legal-map/editorial/topics/cukr-route-2026.ts
app/data/legal-map/editorial/topics/deadlines-delivery.ts
app/data/legal-map/editorial/topics/decision-appeal.ts
app/data/legal-map/editorial/topics/decision-reading.ts
app/data/legal-map/editorial/topics/decision-workflow.ts
app/data/legal-map/editorial/topics/declaration.ts
app/data/legal-map/editorial/topics/delegation.ts
app/data/legal-map/editorial/topics/document-matrix.ts
app/data/legal-map/editorial/topics/document-types.ts
app/data/legal-map/editorial/topics/employer-duties.ts
app/data/legal-map/editorial/topics/entry-current-basis.ts
app/data/legal-map/editorial/topics/evidence-matrix.ts
app/data/legal-map/editorial/topics/evidence.ts
app/data/legal-map/editorial/topics/extraordinary-wsa.ts
app/data/legal-map/editorial/topics/family-stay.ts
app/data/legal-map/editorial/topics/foreign-documents.ts
app/data/legal-map/editorial/topics/goal-of-stay.ts
app/data/legal-map/editorial/topics/inactivity.ts
app/data/legal-map/editorial/topics/initiation.ts
app/data/legal-map/editorial/topics/invalidity.ts
app/data/legal-map/editorial/topics/kpa-principles.ts
app/data/legal-map/editorial/topics/legal-anatomy.ts
app/data/legal-map/editorial/topics/long-term-eu.ts
app/data/legal-map/editorial/topics/mos-procedure.ts
app/data/legal-map/editorial/topics/organ-party.ts
app/data/legal-map/editorial/topics/other-stay.ts
app/data/legal-map/editorial/topics/outsourcing-case.ts
app/data/legal-map/editorial/topics/pending-stay.ts
app/data/legal-map/editorial/topics/permanent-resident.ts
app/data/legal-map/editorial/topics/permanent.ts
app/data/legal-map/editorial/topics/person-status.ts
app/data/legal-map/editorial/topics/principle-legality.ts
app/data/legal-map/editorial/topics/principle-participation.ts
app/data/legal-map/editorial/topics/principle-trust.ts
app/data/legal-map/editorial/topics/principle-two-instance.ts
app/data/legal-map/editorial/topics/reopening.ts
app/data/legal-map/editorial/topics/seasonal.ts
app/data/legal-map/editorial/topics/source-check.ts
app/data/legal-map/editorial/topics/special-vs-kpa.ts
app/data/legal-map/editorial/topics/start-case.ts
app/data/legal-map/editorial/topics/stay-work.ts
app/data/legal-map/editorial/topics/study-loop.ts
app/data/legal-map/editorial/topics/study-research.ts
app/data/legal-map/editorial/topics/temporary-common.ts
app/data/legal-map/editorial/topics/temporary-goals.ts
app/data/legal-map/editorial/topics/temporary-work.ts
app/data/legal-map/editorial/topics/two-keys.ts
app/data/legal-map/editorial/topics/ukr-baseline-2026.ts
app/data/legal-map/editorial/topics/ukraine-ordinary-2026.ts
app/data/legal-map/editorial/topics/ukraine-routes-2026.ts
app/data/legal-map/editorial/topics/visa-free.ts
app/data/legal-map/editorial/topics/visa.ts
app/data/legal-map/editorial/topics/wezwanie-workflow.ts
app/data/legal-map/editorial/topics/wezwanie.ts
app/data/legal-map/editorial/topics/work-entry.ts
app/data/legal-map/editorial/topics/work-instruments.ts
app/data/legal-map/editorial/topics/work-permit.ts
app/data/legal-map/editorial/topics/wsa.ts
app/data/shared/legal-meta.ts
app/features/law-library/ui/kpa/kpa-articles-content.tsx
app/features/law-library/ui/learning/legal-learning-module-content.test.tsx
legal-corpus/promotions/powierzanie-pracy-powierzanie-pracy-2025-621-u-2026-07-18.json
```

Unfilled, contradictory, or `unknown` identity/source placeholders are blockers. Do not infer a document ID from a title or an edition ID from a directory name. `oldEditionId` is `none` only in `MODE=add`; it is required in `MODE=update`.

### Deterministic packet summary

The preparation script supplies the following facts. Treat them as generated input, not as prose to correct by hand:

- **Document:** `ustawa-o-cudzoziemcach`
- **Mode:** `update`
- **Old edition:** `ustawa-o-cudzoziemcach-2025-1079`
- **New edition:** `ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18`
- **Legal-state date:** `2026-07-18`
- **Official page:** `https://eli.gov.pl/eli/DU/2025/1079/ogl`
- **Official metadata:** `https://api.sejm.gov.pl/eli/acts/DU/2025/1079`
- **Official PDF:** `https://eli.gov.pl/api/acts/DU/2025/1079/text/U/D20251079Lj.pdf`
- **Changed provisions:** `app/data/legal-corpus/ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18/edition-diff.json`
- **Diagnostics:** `app/data/legal-corpus/ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18/diagnostics.json`
- **Structured legal-status evidence:** `legal-corpus/work-orders/2026-07-18-ustawa-o-cudzoziemcach.json`
- **Approved write scope:** `app/data/case-guides/editorial/routes/blue-card.ts
app/data/case-guides/editorial/routes/business.ts
app/data/case-guides/editorial/routes/cukr.ts
app/data/case-guides/editorial/routes/family.ts
app/data/case-guides/editorial/routes/long-term-eu.ts
app/data/case-guides/editorial/routes/other.ts
app/data/case-guides/editorial/routes/permanent.ts
app/data/case-guides/editorial/routes/student.ts
app/data/case-guides/editorial/routes/work.ts
app/data/document-library/editorial/guides/administrative-decision.ts
app/data/document-library/editorial/guides/authority-summons.ts
app/data/document-library/editorial/guides/business-register-information.ts
app/data/document-library/editorial/guides/crbr-information.ts
app/data/document-library/editorial/guides/delivery-proof.ts
app/data/document-library/editorial/guides/employment-annex-1.ts
app/data/document-library/editorial/guides/employment-contract.ts
app/data/document-library/editorial/guides/mos-application.ts
app/data/document-library/editorial/guides/passport.ts
app/data/document-library/editorial/guides/pesel-ukr-confirmation.ts
app/data/document-library/editorial/guides/power-of-attorney.ts
app/data/document-library/editorial/guides/residence-card-fee-proof.ts
app/data/document-library/editorial/guides/residence-card.ts
app/data/document-library/editorial/guides/stamp-duty-proof.ts
app/data/document-library/editorial/guides/sworn-translation.ts
app/data/document-library/editorial/guides/ukraine-work-notification.ts
app/data/document-library/editorial/guides/upo.ts
app/data/document-library/editorial/guides/zus-confirmation.ts
app/data/legal-knowledge/contracts.test.ts
app/data/legal-knowledge/dependencies.test.ts
app/data/legal-library/editorial/kpa/articles/article-art-1.ts
app/data/legal-library/editorial/kpa/articles/article-art-10.ts
app/data/legal-library/editorial/kpa/articles/article-art-100.ts
app/data/legal-library/editorial/kpa/articles/article-art-101.ts
app/data/legal-library/editorial/kpa/articles/article-art-102.ts
app/data/legal-library/editorial/kpa/articles/article-art-103.ts
app/data/legal-library/editorial/kpa/articles/article-art-104.ts
app/data/legal-library/editorial/kpa/articles/article-art-105.ts
app/data/legal-library/editorial/kpa/articles/article-art-106.ts
app/data/legal-library/editorial/kpa/articles/article-art-106a.ts
app/data/legal-library/editorial/kpa/articles/article-art-107.ts
app/data/legal-library/editorial/kpa/articles/article-art-108.ts
app/data/legal-library/editorial/kpa/articles/article-art-109.ts
app/data/legal-library/editorial/kpa/articles/article-art-11.ts
app/data/legal-library/editorial/kpa/articles/article-art-110.ts
app/data/legal-library/editorial/kpa/articles/article-art-111.ts
app/data/legal-library/editorial/kpa/articles/article-art-112.ts
app/data/legal-library/editorial/kpa/articles/article-art-113.ts
app/data/legal-library/editorial/kpa/articles/article-art-114.ts
app/data/legal-library/editorial/kpa/articles/article-art-115.ts
app/data/legal-library/editorial/kpa/articles/article-art-116.ts
app/data/legal-library/editorial/kpa/articles/article-art-117.ts
app/data/legal-library/editorial/kpa/articles/article-art-118.ts
app/data/legal-library/editorial/kpa/articles/article-art-119.ts
app/data/legal-library/editorial/kpa/articles/article-art-12.ts
app/data/legal-library/editorial/kpa/articles/article-art-120.ts
app/data/legal-library/editorial/kpa/articles/article-art-121.ts
app/data/legal-library/editorial/kpa/articles/article-art-121a.ts
app/data/legal-library/editorial/kpa/articles/article-art-122.ts
app/data/legal-library/editorial/kpa/articles/article-art-122a.ts
app/data/legal-library/editorial/kpa/articles/article-art-122b.ts
app/data/legal-library/editorial/kpa/articles/article-art-122c.ts
app/data/legal-library/editorial/kpa/articles/article-art-122d.ts
app/data/legal-library/editorial/kpa/articles/article-art-122e.ts
app/data/legal-library/editorial/kpa/articles/article-art-122f.ts
app/data/legal-library/editorial/kpa/articles/article-art-122g.ts
app/data/legal-library/editorial/kpa/articles/article-art-122h.ts
app/data/legal-library/editorial/kpa/articles/article-art-123.ts
app/data/legal-library/editorial/kpa/articles/article-art-124.ts
app/data/legal-library/editorial/kpa/articles/article-art-125.ts
app/data/legal-library/editorial/kpa/articles/article-art-126.ts
app/data/legal-library/editorial/kpa/articles/article-art-127.ts
app/data/legal-library/editorial/kpa/articles/article-art-127a.ts
app/data/legal-library/editorial/kpa/articles/article-art-128.ts
app/data/legal-library/editorial/kpa/articles/article-art-129.ts
app/data/legal-library/editorial/kpa/articles/article-art-13.ts
app/data/legal-library/editorial/kpa/articles/article-art-130.ts
app/data/legal-library/editorial/kpa/articles/article-art-131.ts
app/data/legal-library/editorial/kpa/articles/article-art-132.ts
app/data/legal-library/editorial/kpa/articles/article-art-133.ts
app/data/legal-library/editorial/kpa/articles/article-art-134.ts
app/data/legal-library/editorial/kpa/articles/article-art-135.ts
app/data/legal-library/editorial/kpa/articles/article-art-136.ts
app/data/legal-library/editorial/kpa/articles/article-art-137.ts
app/data/legal-library/editorial/kpa/articles/article-art-138.ts
app/data/legal-library/editorial/kpa/articles/article-art-139.ts
app/data/legal-library/editorial/kpa/articles/article-art-139a.ts
app/data/legal-library/editorial/kpa/articles/article-art-14.ts
app/data/legal-library/editorial/kpa/articles/article-art-140.ts
app/data/legal-library/editorial/kpa/articles/article-art-141.ts
app/data/legal-library/editorial/kpa/articles/article-art-142.ts
app/data/legal-library/editorial/kpa/articles/article-art-143.ts
app/data/legal-library/editorial/kpa/articles/article-art-144.ts
app/data/legal-library/editorial/kpa/articles/article-art-145.ts
app/data/legal-library/editorial/kpa/articles/article-art-145a.ts
app/data/legal-library/editorial/kpa/articles/article-art-145aa.ts
app/data/legal-library/editorial/kpa/articles/article-art-145b.ts
app/data/legal-library/editorial/kpa/articles/article-art-146.ts
app/data/legal-library/editorial/kpa/articles/article-art-147.ts
app/data/legal-library/editorial/kpa/articles/article-art-148.ts
app/data/legal-library/editorial/kpa/articles/article-art-149.ts
app/data/legal-library/editorial/kpa/articles/article-art-14a.ts
app/data/legal-library/editorial/kpa/articles/article-art-15.ts
app/data/legal-library/editorial/kpa/articles/article-art-150.ts
app/data/legal-library/editorial/kpa/articles/article-art-151.ts
app/data/legal-library/editorial/kpa/articles/article-art-152.ts
app/data/legal-library/editorial/kpa/articles/article-art-153.ts
app/data/legal-library/editorial/kpa/articles/article-art-154.ts
app/data/legal-library/editorial/kpa/articles/article-art-155.ts
app/data/legal-library/editorial/kpa/articles/article-art-155a.ts
app/data/legal-library/editorial/kpa/articles/article-art-156.ts
app/data/legal-library/editorial/kpa/articles/article-art-157.ts
app/data/legal-library/editorial/kpa/articles/article-art-158.ts
app/data/legal-library/editorial/kpa/articles/article-art-159.ts
app/data/legal-library/editorial/kpa/articles/article-art-16.ts
app/data/legal-library/editorial/kpa/articles/article-art-160.ts
app/data/legal-library/editorial/kpa/articles/article-art-161.ts
app/data/legal-library/editorial/kpa/articles/article-art-162.ts
app/data/legal-library/editorial/kpa/articles/article-art-163.ts
app/data/legal-library/editorial/kpa/articles/article-art-163a.ts
app/data/legal-library/editorial/kpa/articles/article-art-163b.ts
app/data/legal-library/editorial/kpa/articles/article-art-163c.ts
app/data/legal-library/editorial/kpa/articles/article-art-163d.ts
app/data/legal-library/editorial/kpa/articles/article-art-163e.ts
app/data/legal-library/editorial/kpa/articles/article-art-163f.ts
app/data/legal-library/editorial/kpa/articles/article-art-163g.ts
app/data/legal-library/editorial/kpa/articles/article-art-17.ts
app/data/legal-library/editorial/kpa/articles/article-art-18.ts
app/data/legal-library/editorial/kpa/articles/article-art-180.ts
app/data/legal-library/editorial/kpa/articles/article-art-181.ts
app/data/legal-library/editorial/kpa/articles/article-art-182.ts
app/data/legal-library/editorial/kpa/articles/article-art-183.ts
app/data/legal-library/editorial/kpa/articles/article-art-184.ts
app/data/legal-library/editorial/kpa/articles/article-art-185.ts
app/data/legal-library/editorial/kpa/articles/article-art-186.ts
app/data/legal-library/editorial/kpa/articles/article-art-187.ts
app/data/legal-library/editorial/kpa/articles/article-art-188.ts
app/data/legal-library/editorial/kpa/articles/article-art-189.ts
app/data/legal-library/editorial/kpa/articles/article-art-189a.ts
app/data/legal-library/editorial/kpa/articles/article-art-189b.ts
app/data/legal-library/editorial/kpa/articles/article-art-189c.ts
app/data/legal-library/editorial/kpa/articles/article-art-189d.ts
app/data/legal-library/editorial/kpa/articles/article-art-189e.ts
app/data/legal-library/editorial/kpa/articles/article-art-189f.ts
app/data/legal-library/editorial/kpa/articles/article-art-189g.ts
app/data/legal-library/editorial/kpa/articles/article-art-189h.ts
app/data/legal-library/editorial/kpa/articles/article-art-189i.ts
app/data/legal-library/editorial/kpa/articles/article-art-189j.ts
app/data/legal-library/editorial/kpa/articles/article-art-189k.ts
app/data/legal-library/editorial/kpa/articles/article-art-189l.ts
app/data/legal-library/editorial/kpa/articles/article-art-19.ts
app/data/legal-library/editorial/kpa/articles/article-art-2.ts
app/data/legal-library/editorial/kpa/articles/article-art-20.ts
app/data/legal-library/editorial/kpa/articles/article-art-21.ts
app/data/legal-library/editorial/kpa/articles/article-art-217.ts
app/data/legal-library/editorial/kpa/articles/article-art-217a.ts
app/data/legal-library/editorial/kpa/articles/article-art-218.ts
app/data/legal-library/editorial/kpa/articles/article-art-219.ts
app/data/legal-library/editorial/kpa/articles/article-art-22.ts
app/data/legal-library/editorial/kpa/articles/article-art-220.ts
app/data/legal-library/editorial/kpa/articles/article-art-221.ts
app/data/legal-library/editorial/kpa/articles/article-art-222.ts
app/data/legal-library/editorial/kpa/articles/article-art-223.ts
app/data/legal-library/editorial/kpa/articles/article-art-224.ts
app/data/legal-library/editorial/kpa/articles/article-art-225.ts
app/data/legal-library/editorial/kpa/articles/article-art-226.ts
app/data/legal-library/editorial/kpa/articles/article-art-226a.ts
app/data/legal-library/editorial/kpa/articles/article-art-227.ts
app/data/legal-library/editorial/kpa/articles/article-art-228.ts
app/data/legal-library/editorial/kpa/articles/article-art-229.ts
app/data/legal-library/editorial/kpa/articles/article-art-23.ts
app/data/legal-library/editorial/kpa/articles/article-art-230.ts
app/data/legal-library/editorial/kpa/articles/article-art-231.ts
app/data/legal-library/editorial/kpa/articles/article-art-232.ts
app/data/legal-library/editorial/kpa/articles/article-art-233.ts
app/data/legal-library/editorial/kpa/articles/article-art-234.ts
app/data/legal-library/editorial/kpa/articles/article-art-235.ts
app/data/legal-library/editorial/kpa/articles/article-art-236.ts
app/data/legal-library/editorial/kpa/articles/article-art-237.ts
app/data/legal-library/editorial/kpa/articles/article-art-238.ts
app/data/legal-library/editorial/kpa/articles/article-art-239.ts
app/data/legal-library/editorial/kpa/articles/article-art-24.ts
app/data/legal-library/editorial/kpa/articles/article-art-240.ts
app/data/legal-library/editorial/kpa/articles/article-art-241.ts
app/data/legal-library/editorial/kpa/articles/article-art-242.ts
app/data/legal-library/editorial/kpa/articles/article-art-243.ts
app/data/legal-library/editorial/kpa/articles/article-art-244.ts
app/data/legal-library/editorial/kpa/articles/article-art-245.ts
app/data/legal-library/editorial/kpa/articles/article-art-246.ts
app/data/legal-library/editorial/kpa/articles/article-art-247.ts
app/data/legal-library/editorial/kpa/articles/article-art-248.ts
app/data/legal-library/editorial/kpa/articles/article-art-249.ts
app/data/legal-library/editorial/kpa/articles/article-art-25.ts
app/data/legal-library/editorial/kpa/articles/article-art-250.ts
app/data/legal-library/editorial/kpa/articles/article-art-251.ts
app/data/legal-library/editorial/kpa/articles/article-art-252.ts
app/data/legal-library/editorial/kpa/articles/article-art-253.ts
app/data/legal-library/editorial/kpa/articles/article-art-254.ts
app/data/legal-library/editorial/kpa/articles/article-art-255.ts
app/data/legal-library/editorial/kpa/articles/article-art-256.ts
app/data/legal-library/editorial/kpa/articles/article-art-257.ts
app/data/legal-library/editorial/kpa/articles/article-art-258.ts
app/data/legal-library/editorial/kpa/articles/article-art-259.ts
app/data/legal-library/editorial/kpa/articles/article-art-26.ts
app/data/legal-library/editorial/kpa/articles/article-art-260.ts
app/data/legal-library/editorial/kpa/articles/article-art-260a.ts
app/data/legal-library/editorial/kpa/articles/article-art-260b.ts
app/data/legal-library/editorial/kpa/articles/article-art-260c.ts
app/data/legal-library/editorial/kpa/articles/article-art-260d.ts
app/data/legal-library/editorial/kpa/articles/article-art-260e.ts
app/data/legal-library/editorial/kpa/articles/article-art-260f.ts
app/data/legal-library/editorial/kpa/articles/article-art-260g.ts
app/data/legal-library/editorial/kpa/articles/article-art-261.ts
app/data/legal-library/editorial/kpa/articles/article-art-262.ts
app/data/legal-library/editorial/kpa/articles/article-art-263.ts
app/data/legal-library/editorial/kpa/articles/article-art-263a.ts
app/data/legal-library/editorial/kpa/articles/article-art-264.ts
app/data/legal-library/editorial/kpa/articles/article-art-265.ts
app/data/legal-library/editorial/kpa/articles/article-art-266.ts
app/data/legal-library/editorial/kpa/articles/article-art-267.ts
app/data/legal-library/editorial/kpa/articles/article-art-268.ts
app/data/legal-library/editorial/kpa/articles/article-art-268a.ts
app/data/legal-library/editorial/kpa/articles/article-art-269.ts
app/data/legal-library/editorial/kpa/articles/article-art-27.ts
app/data/legal-library/editorial/kpa/articles/article-art-27a.ts
app/data/legal-library/editorial/kpa/articles/article-art-28.ts
app/data/legal-library/editorial/kpa/articles/article-art-29.ts
app/data/legal-library/editorial/kpa/articles/article-art-2a.ts
app/data/legal-library/editorial/kpa/articles/article-art-3.ts
app/data/legal-library/editorial/kpa/articles/article-art-30.ts
app/data/legal-library/editorial/kpa/articles/article-art-31.ts
app/data/legal-library/editorial/kpa/articles/article-art-32.ts
app/data/legal-library/editorial/kpa/articles/article-art-33.ts
app/data/legal-library/editorial/kpa/articles/article-art-34.ts
app/data/legal-library/editorial/kpa/articles/article-art-35.ts
app/data/legal-library/editorial/kpa/articles/article-art-36.ts
app/data/legal-library/editorial/kpa/articles/article-art-37.ts
app/data/legal-library/editorial/kpa/articles/article-art-38.ts
app/data/legal-library/editorial/kpa/articles/article-art-39-1.ts
app/data/legal-library/editorial/kpa/articles/article-art-39-2.ts
app/data/legal-library/editorial/kpa/articles/article-art-39-3.ts
app/data/legal-library/editorial/kpa/articles/article-art-39-4.ts
app/data/legal-library/editorial/kpa/articles/article-art-39.ts
app/data/legal-library/editorial/kpa/articles/article-art-4.ts
app/data/legal-library/editorial/kpa/articles/article-art-40.ts
app/data/legal-library/editorial/kpa/articles/article-art-41.ts
app/data/legal-library/editorial/kpa/articles/article-art-42.ts
app/data/legal-library/editorial/kpa/articles/article-art-43.ts
app/data/legal-library/editorial/kpa/articles/article-art-44.ts
app/data/legal-library/editorial/kpa/articles/article-art-45.ts
app/data/legal-library/editorial/kpa/articles/article-art-45a.ts
app/data/legal-library/editorial/kpa/articles/article-art-46.ts
app/data/legal-library/editorial/kpa/articles/article-art-47.ts
app/data/legal-library/editorial/kpa/articles/article-art-48.ts
app/data/legal-library/editorial/kpa/articles/article-art-49.ts
app/data/legal-library/editorial/kpa/articles/article-art-49a.ts
app/data/legal-library/editorial/kpa/articles/article-art-49b.ts
app/data/legal-library/editorial/kpa/articles/article-art-5.ts
app/data/legal-library/editorial/kpa/articles/article-art-50.ts
app/data/legal-library/editorial/kpa/articles/article-art-51.ts
app/data/legal-library/editorial/kpa/articles/article-art-52.ts
app/data/legal-library/editorial/kpa/articles/article-art-53.ts
app/data/legal-library/editorial/kpa/articles/article-art-54.ts
app/data/legal-library/editorial/kpa/articles/article-art-55.ts
app/data/legal-library/editorial/kpa/articles/article-art-56.ts
app/data/legal-library/editorial/kpa/articles/article-art-57.ts
app/data/legal-library/editorial/kpa/articles/article-art-58.ts
app/data/legal-library/editorial/kpa/articles/article-art-59.ts
app/data/legal-library/editorial/kpa/articles/article-art-6.ts
app/data/legal-library/editorial/kpa/articles/article-art-60.ts
app/data/legal-library/editorial/kpa/articles/article-art-61.ts
app/data/legal-library/editorial/kpa/articles/article-art-61a.ts
app/data/legal-library/editorial/kpa/articles/article-art-62.ts
app/data/legal-library/editorial/kpa/articles/article-art-63.ts
app/data/legal-library/editorial/kpa/articles/article-art-64.ts
app/data/legal-library/editorial/kpa/articles/article-art-65.ts
app/data/legal-library/editorial/kpa/articles/article-art-66.ts
app/data/legal-library/editorial/kpa/articles/article-art-66a.ts
app/data/legal-library/editorial/kpa/articles/article-art-67.ts
app/data/legal-library/editorial/kpa/articles/article-art-68.ts
app/data/legal-library/editorial/kpa/articles/article-art-69.ts
app/data/legal-library/editorial/kpa/articles/article-art-7.ts
app/data/legal-library/editorial/kpa/articles/article-art-70.ts
app/data/legal-library/editorial/kpa/articles/article-art-71.ts
app/data/legal-library/editorial/kpa/articles/article-art-72.ts
app/data/legal-library/editorial/kpa/articles/article-art-73.ts
app/data/legal-library/editorial/kpa/articles/article-art-74.ts
app/data/legal-library/editorial/kpa/articles/article-art-74a.ts
app/data/legal-library/editorial/kpa/articles/article-art-75.ts
app/data/legal-library/editorial/kpa/articles/article-art-76.ts
app/data/legal-library/editorial/kpa/articles/article-art-76a.ts
app/data/legal-library/editorial/kpa/articles/article-art-77.ts
app/data/legal-library/editorial/kpa/articles/article-art-78.ts
app/data/legal-library/editorial/kpa/articles/article-art-79.ts
app/data/legal-library/editorial/kpa/articles/article-art-79a.ts
app/data/legal-library/editorial/kpa/articles/article-art-7a.ts
app/data/legal-library/editorial/kpa/articles/article-art-7b.ts
app/data/legal-library/editorial/kpa/articles/article-art-8.ts
app/data/legal-library/editorial/kpa/articles/article-art-80.ts
app/data/legal-library/editorial/kpa/articles/article-art-81.ts
app/data/legal-library/editorial/kpa/articles/article-art-81a.ts
app/data/legal-library/editorial/kpa/articles/article-art-82.ts
app/data/legal-library/editorial/kpa/articles/article-art-83.ts
app/data/legal-library/editorial/kpa/articles/article-art-84.ts
app/data/legal-library/editorial/kpa/articles/article-art-85.ts
app/data/legal-library/editorial/kpa/articles/article-art-86.ts
app/data/legal-library/editorial/kpa/articles/article-art-87.ts
app/data/legal-library/editorial/kpa/articles/article-art-88.ts
app/data/legal-library/editorial/kpa/articles/article-art-88a.ts
app/data/legal-library/editorial/kpa/articles/article-art-89.ts
app/data/legal-library/editorial/kpa/articles/article-art-9.ts
app/data/legal-library/editorial/kpa/articles/article-art-90.ts
app/data/legal-library/editorial/kpa/articles/article-art-91.ts
app/data/legal-library/editorial/kpa/articles/article-art-92.ts
app/data/legal-library/editorial/kpa/articles/article-art-93.ts
app/data/legal-library/editorial/kpa/articles/article-art-93a.ts
app/data/legal-library/editorial/kpa/articles/article-art-94.ts
app/data/legal-library/editorial/kpa/articles/article-art-95.ts
app/data/legal-library/editorial/kpa/articles/article-art-96.ts
app/data/legal-library/editorial/kpa/articles/article-art-96a.ts
app/data/legal-library/editorial/kpa/articles/article-art-96b.ts
app/data/legal-library/editorial/kpa/articles/article-art-96c.ts
app/data/legal-library/editorial/kpa/articles/article-art-96d.ts
app/data/legal-library/editorial/kpa/articles/article-art-96e.ts
app/data/legal-library/editorial/kpa/articles/article-art-96f.ts
app/data/legal-library/editorial/kpa/articles/article-art-96g.ts
app/data/legal-library/editorial/kpa/articles/article-art-96h.ts
app/data/legal-library/editorial/kpa/articles/article-art-96i.ts
app/data/legal-library/editorial/kpa/articles/article-art-96j.ts
app/data/legal-library/editorial/kpa/articles/article-art-96k.ts
app/data/legal-library/editorial/kpa/articles/article-art-96l.ts
app/data/legal-library/editorial/kpa/articles/article-art-96m.ts
app/data/legal-library/editorial/kpa/articles/article-art-96n.ts
app/data/legal-library/editorial/kpa/articles/article-art-97.ts
app/data/legal-library/editorial/kpa/articles/article-art-98.ts
app/data/legal-library/editorial/kpa/articles/article-art-99.ts
app/data/legal-library/editorial/kpa/index.test.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-218a.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-219a.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-219g.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-222a.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-222b.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-223a.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-225a.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-225i.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-229.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-281a.ts
app/data/legal-library/learning/kpa.ts
app/data/legal-library/learning/modules/kpa/anatomy.ts
app/data/legal-library/learning/modules/kpa/appeal.ts
app/data/legal-library/learning/modules/kpa/authority.ts
app/data/legal-library/learning/modules/kpa/court.ts
app/data/legal-library/learning/modules/kpa/decisions.ts
app/data/legal-library/learning/modules/kpa/delay.ts
app/data/legal-library/learning/modules/kpa/extraordinary.ts
app/data/legal-library/learning/modules/kpa/files-evidence.ts
app/data/legal-library/learning/modules/kpa/initiation.ts
app/data/legal-library/learning/modules/kpa/party.ts
app/data/legal-library/learning/modules/kpa/principles.ts
app/data/legal-library/learning/modules/kpa/silence.ts
app/data/legal-library/learning/modules/kpa/summons.ts
app/data/legal-library/learning/modules/kpa/system.ts
app/data/legal-library/learning/modules/kpa/time-service.ts
app/data/legal-library/learning/modules/ustawa-o-cudzoziemcach/cards-and-documents.ts
app/data/legal-map/data.ts
app/data/legal-map/editorial/topics/appeal.ts
app/data/legal-map/editorial/topics/blue-card.ts
app/data/legal-map/editorial/topics/business-stay.ts
app/data/legal-map/editorial/topics/case-file.ts
app/data/legal-map/editorial/topics/complaint.ts
app/data/legal-map/editorial/topics/cukr-route-2026.ts
app/data/legal-map/editorial/topics/deadlines-delivery.ts
app/data/legal-map/editorial/topics/decision-appeal.ts
app/data/legal-map/editorial/topics/decision-reading.ts
app/data/legal-map/editorial/topics/decision-workflow.ts
app/data/legal-map/editorial/topics/declaration.ts
app/data/legal-map/editorial/topics/delegation.ts
app/data/legal-map/editorial/topics/document-matrix.ts
app/data/legal-map/editorial/topics/document-types.ts
app/data/legal-map/editorial/topics/employer-duties.ts
app/data/legal-map/editorial/topics/entry-current-basis.ts
app/data/legal-map/editorial/topics/evidence-matrix.ts
app/data/legal-map/editorial/topics/evidence.ts
app/data/legal-map/editorial/topics/extraordinary-wsa.ts
app/data/legal-map/editorial/topics/family-stay.ts
app/data/legal-map/editorial/topics/foreign-documents.ts
app/data/legal-map/editorial/topics/goal-of-stay.ts
app/data/legal-map/editorial/topics/inactivity.ts
app/data/legal-map/editorial/topics/initiation.ts
app/data/legal-map/editorial/topics/invalidity.ts
app/data/legal-map/editorial/topics/kpa-principles.ts
app/data/legal-map/editorial/topics/legal-anatomy.ts
app/data/legal-map/editorial/topics/long-term-eu.ts
app/data/legal-map/editorial/topics/mos-procedure.ts
app/data/legal-map/editorial/topics/organ-party.ts
app/data/legal-map/editorial/topics/other-stay.ts
app/data/legal-map/editorial/topics/outsourcing-case.ts
app/data/legal-map/editorial/topics/pending-stay.ts
app/data/legal-map/editorial/topics/permanent-resident.ts
app/data/legal-map/editorial/topics/permanent.ts
app/data/legal-map/editorial/topics/person-status.ts
app/data/legal-map/editorial/topics/principle-legality.ts
app/data/legal-map/editorial/topics/principle-participation.ts
app/data/legal-map/editorial/topics/principle-trust.ts
app/data/legal-map/editorial/topics/principle-two-instance.ts
app/data/legal-map/editorial/topics/reopening.ts
app/data/legal-map/editorial/topics/seasonal.ts
app/data/legal-map/editorial/topics/source-check.ts
app/data/legal-map/editorial/topics/special-vs-kpa.ts
app/data/legal-map/editorial/topics/start-case.ts
app/data/legal-map/editorial/topics/stay-work.ts
app/data/legal-map/editorial/topics/study-loop.ts
app/data/legal-map/editorial/topics/study-research.ts
app/data/legal-map/editorial/topics/temporary-common.ts
app/data/legal-map/editorial/topics/temporary-goals.ts
app/data/legal-map/editorial/topics/temporary-work.ts
app/data/legal-map/editorial/topics/two-keys.ts
app/data/legal-map/editorial/topics/ukr-baseline-2026.ts
app/data/legal-map/editorial/topics/ukraine-ordinary-2026.ts
app/data/legal-map/editorial/topics/ukraine-routes-2026.ts
app/data/legal-map/editorial/topics/visa-free.ts
app/data/legal-map/editorial/topics/visa.ts
app/data/legal-map/editorial/topics/wezwanie-workflow.ts
app/data/legal-map/editorial/topics/wezwanie.ts
app/data/legal-map/editorial/topics/work-entry.ts
app/data/legal-map/editorial/topics/work-instruments.ts
app/data/legal-map/editorial/topics/work-permit.ts
app/data/legal-map/editorial/topics/wsa.ts
app/data/shared/legal-meta.ts
app/features/law-library/ui/kpa/kpa-articles-content.tsx
app/features/law-library/ui/learning/legal-learning-module-content.test.tsx
legal-corpus/promotions/powierzanie-pracy-powierzanie-pracy-2025-621-u-2026-07-18.json`

Read the generated manifest, provisions, structure, diagnostics, structured legal-status evidence, and (for updates) edition diff from the paths above. The evidence packet must record the official act status, `inForce` result, consolidated-text identity, amendments checked through the legal-state date, exact entry-into-force locators/results, exact transitional-rule locators/applicability results, checked timestamps, and an `unresolved` list. A missing field or non-empty `unresolved` list blocks promotion. The official PDF and ELI page remain the visual/legal source of truth.

## Role and objective

You are an editorial legal-content reviewer working inside the Legalizacja educational application. Your task is to prepare or update reviewed explanations for the exact document/provision IDs in this work order. You are not the corpus builder, a source-artifact editor, or the person who silently promotes an edition.

Produce clear Ukrainian explanations while preserving Polish legal terms. Explain what a rule changes in a real case and connect:

```text
Fakt → Pojęcie prawne → Przepis i warunki → Dowód → Czynność i termin → Skutek → Środek zaskarżenia
```

Do not present the application as an automated decision system or a substitute for individual legal advice. Do not promise that one document, contract, or clause guarantees an outcome.

## Required source and legal-state review

Before changing any explanation, check the official sources and record the result in the required output:

1. Open the official ELI/Sejm page, metadata, and PDF named in the envelope. Confirm that they identify `ustawa-o-cudzoziemcach` and `ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18` and that the citation, title, status, and PDF correspond.
2. Check the act's current status, consolidated text or publication status, `inForce` information, amendment notices, and the legal-state date `2026-07-18`.
3. Check the applicable `wejście w życie` dates and **przepisy przejściowe**. If the result depends on the filing date, event date, decision date, or a transitional provision, say so explicitly.
4. Check authoritative official guidance from the competent institution when the explanation describes administrative practice. Label it as official guidance; do not describe it as the statute text.
5. Check relevant official court databases or published judgments when case law is needed. Identify the court, date, case identifier, and proposition. Case law is interpretation, not a replacement for the statute.
6. If an official source is unavailable, contradictory, future-dated, or cannot be checked, mark the issue `[UNRESOLVED]` and recommend `BLOCK`. Never fill the gap from memory while presenting it as certain.

Use exact locators from the generated provision facts or the official PDF. A display locator is not proof of a rule's content; verify it visually when the extractor reports an ambiguity or changed page span.

## Evidence labels for every material claim

Every material legal statement in a changed explanation must be classifiable as one of these four kinds:

- **`statute-text`** — what the published act expressly says. Include the exact provision locator and official source.
- **`official-guidance`** — an explanation or practice statement published by a competent official institution. Include the issuing institution, date if available, and URL.
- **`case-law`** — an interpretation in a court judgment or official case-law publication. Include court, date, identifier, and URL where available.
- **`practical-inference`** — a cautious educational inference or checklist derived from the sources. State that it is an inference and do not turn it into a guaranteed outcome.

Do not merge these categories into an unlabeled paragraph. A practical inference must not be written as if the act expressly says it. A court interpretation must not be labeled official guidance. If a statement cannot be categorized and sourced, leave it out or mark it unresolved.

## Mode-specific instructions

### `MODE=add`

- Treat `ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18` as the first known edition of the stable document `ustawa-o-cudzoziemcach`.
- Verify the document identity and source configuration before writing any explanation.
- Review only the provisions listed in the approved packet. Create explanations only for approved stable provision IDs; do not invent a provision to fill a count gap.
- For each explanation, record `sourceEditionId: ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18`, `legalStateDate: 2026-07-18`, `verifiedAt` as the actual date/time when this review was completed, and an explicit review status. Never copy the legal-state date into `verifiedAt` unless the review truly occurred then.
- If a provision is not yet understood or its source/transition rule is uncertain, leave it without a reviewed explanation and report the blocker.

### `MODE=update`

- Compare `ustawa-o-cudzoziemcach-2025-1079` and `ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18` by stable provision ID and normalized source hash from `app/data/legal-corpus/ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18/edition-diff.json`.
- Review every `changed` and `removed` provision and every known dependant named in the packet. Review `added` provisions before creating new explanations.
- `unchanged` means only that the normalized source text hash matched. It does **not** prove that legal effect, case law, official guidance, administrative practice, or transitional applicability is unchanged. Record any separate legal-state check that remains necessary.
- Do not reuse a removed provision ID for a different provision. Do not rewrite a split/merged provision without an explicit mapping and reviewer decision.
- Update `sourceEditionId`, `verifiedAt`, review status, and affected claims when the explanation is verified for the new edition. If an old explanation remains useful only historically, mark that status and do not present it as current.
- If a changed hash appears to be extraction noise, compare the old and new PDF visually and report the result. Do not suppress the diff by editing generated text.

## Editorial procedure for each provision

For every provision in scope, work through these steps:

1. **Identify:** confirm `documentId`, stable `provisionId`, `editionId`, kind, display locator, parent/children, status, and PDF start/end pages from generated facts.
2. **Verify source:** read the official PDF at the recorded page and open the official ELI source. Confirm the locator and text. Never invent a missing page or locator.
3. **Understand the rule:** explain what the provision regulates, its conditions, exceptions, legal effect, and place in the procedure. Keep the Polish legal term and explain it in simple Ukrainian.
4. **Apply carefully:** describe what facts and evidence a learner should check, what action/term follows, and what consequence or remedy may arise. Separate statute text from practical inference.
5. **Check scope:** distinguish legal stay from the right to work, formal deficiencies from failure to prove a substantive condition, and `decyzja` from `postanowienie` when relevant. State when the answer depends on complete facts, local practice, or transitional rules.
6. **Cross-link safely:** use only stable document/provision IDs present in the generated registry. Record related provisions rather than duplicating their explanation. Every external link must be HTTPS and authoritative.
7. **Record review:** set the required `sourceEditionId`, `verifiedAt`, review status, claim labels, and unresolved issues.

The existing KPA reader's strengths are the minimum quality bar: a meaningful explanation, exact PDF locator, Polish source text, official ELI link, edition notice, previous/next context, and practical significance. The exact section structure may vary by document; do not force KPA's article template onto another act.

## Strict prohibitions

Do **not**:

- edit `manifest.json`, `metadata.json`, `pages.json`, `provisions.json`, `structure.json`, `diagnostics.json`, `edition-diff.json`, `registry.ts`, `articles.json`, or `source.pdf` by hand;
- invent, normalize away, or silently change a locator, provision ID, page number, status, source hash, citation, or edition ID;
- derive a legal claim solely from extracted text without checking the official source;
- auto-promote `ustawa-o-cudzoziemcach-2025-1079-u-2026-07-18` or change a current-edition pointer;
- write outside `app/data/case-guides/editorial/routes/blue-card.ts
app/data/case-guides/editorial/routes/business.ts
app/data/case-guides/editorial/routes/cukr.ts
app/data/case-guides/editorial/routes/family.ts
app/data/case-guides/editorial/routes/long-term-eu.ts
app/data/case-guides/editorial/routes/other.ts
app/data/case-guides/editorial/routes/permanent.ts
app/data/case-guides/editorial/routes/student.ts
app/data/case-guides/editorial/routes/work.ts
app/data/document-library/editorial/guides/administrative-decision.ts
app/data/document-library/editorial/guides/authority-summons.ts
app/data/document-library/editorial/guides/business-register-information.ts
app/data/document-library/editorial/guides/crbr-information.ts
app/data/document-library/editorial/guides/delivery-proof.ts
app/data/document-library/editorial/guides/employment-annex-1.ts
app/data/document-library/editorial/guides/employment-contract.ts
app/data/document-library/editorial/guides/mos-application.ts
app/data/document-library/editorial/guides/passport.ts
app/data/document-library/editorial/guides/pesel-ukr-confirmation.ts
app/data/document-library/editorial/guides/power-of-attorney.ts
app/data/document-library/editorial/guides/residence-card-fee-proof.ts
app/data/document-library/editorial/guides/residence-card.ts
app/data/document-library/editorial/guides/stamp-duty-proof.ts
app/data/document-library/editorial/guides/sworn-translation.ts
app/data/document-library/editorial/guides/ukraine-work-notification.ts
app/data/document-library/editorial/guides/upo.ts
app/data/document-library/editorial/guides/zus-confirmation.ts
app/data/legal-knowledge/contracts.test.ts
app/data/legal-knowledge/dependencies.test.ts
app/data/legal-library/editorial/kpa/articles/article-art-1.ts
app/data/legal-library/editorial/kpa/articles/article-art-10.ts
app/data/legal-library/editorial/kpa/articles/article-art-100.ts
app/data/legal-library/editorial/kpa/articles/article-art-101.ts
app/data/legal-library/editorial/kpa/articles/article-art-102.ts
app/data/legal-library/editorial/kpa/articles/article-art-103.ts
app/data/legal-library/editorial/kpa/articles/article-art-104.ts
app/data/legal-library/editorial/kpa/articles/article-art-105.ts
app/data/legal-library/editorial/kpa/articles/article-art-106.ts
app/data/legal-library/editorial/kpa/articles/article-art-106a.ts
app/data/legal-library/editorial/kpa/articles/article-art-107.ts
app/data/legal-library/editorial/kpa/articles/article-art-108.ts
app/data/legal-library/editorial/kpa/articles/article-art-109.ts
app/data/legal-library/editorial/kpa/articles/article-art-11.ts
app/data/legal-library/editorial/kpa/articles/article-art-110.ts
app/data/legal-library/editorial/kpa/articles/article-art-111.ts
app/data/legal-library/editorial/kpa/articles/article-art-112.ts
app/data/legal-library/editorial/kpa/articles/article-art-113.ts
app/data/legal-library/editorial/kpa/articles/article-art-114.ts
app/data/legal-library/editorial/kpa/articles/article-art-115.ts
app/data/legal-library/editorial/kpa/articles/article-art-116.ts
app/data/legal-library/editorial/kpa/articles/article-art-117.ts
app/data/legal-library/editorial/kpa/articles/article-art-118.ts
app/data/legal-library/editorial/kpa/articles/article-art-119.ts
app/data/legal-library/editorial/kpa/articles/article-art-12.ts
app/data/legal-library/editorial/kpa/articles/article-art-120.ts
app/data/legal-library/editorial/kpa/articles/article-art-121.ts
app/data/legal-library/editorial/kpa/articles/article-art-121a.ts
app/data/legal-library/editorial/kpa/articles/article-art-122.ts
app/data/legal-library/editorial/kpa/articles/article-art-122a.ts
app/data/legal-library/editorial/kpa/articles/article-art-122b.ts
app/data/legal-library/editorial/kpa/articles/article-art-122c.ts
app/data/legal-library/editorial/kpa/articles/article-art-122d.ts
app/data/legal-library/editorial/kpa/articles/article-art-122e.ts
app/data/legal-library/editorial/kpa/articles/article-art-122f.ts
app/data/legal-library/editorial/kpa/articles/article-art-122g.ts
app/data/legal-library/editorial/kpa/articles/article-art-122h.ts
app/data/legal-library/editorial/kpa/articles/article-art-123.ts
app/data/legal-library/editorial/kpa/articles/article-art-124.ts
app/data/legal-library/editorial/kpa/articles/article-art-125.ts
app/data/legal-library/editorial/kpa/articles/article-art-126.ts
app/data/legal-library/editorial/kpa/articles/article-art-127.ts
app/data/legal-library/editorial/kpa/articles/article-art-127a.ts
app/data/legal-library/editorial/kpa/articles/article-art-128.ts
app/data/legal-library/editorial/kpa/articles/article-art-129.ts
app/data/legal-library/editorial/kpa/articles/article-art-13.ts
app/data/legal-library/editorial/kpa/articles/article-art-130.ts
app/data/legal-library/editorial/kpa/articles/article-art-131.ts
app/data/legal-library/editorial/kpa/articles/article-art-132.ts
app/data/legal-library/editorial/kpa/articles/article-art-133.ts
app/data/legal-library/editorial/kpa/articles/article-art-134.ts
app/data/legal-library/editorial/kpa/articles/article-art-135.ts
app/data/legal-library/editorial/kpa/articles/article-art-136.ts
app/data/legal-library/editorial/kpa/articles/article-art-137.ts
app/data/legal-library/editorial/kpa/articles/article-art-138.ts
app/data/legal-library/editorial/kpa/articles/article-art-139.ts
app/data/legal-library/editorial/kpa/articles/article-art-139a.ts
app/data/legal-library/editorial/kpa/articles/article-art-14.ts
app/data/legal-library/editorial/kpa/articles/article-art-140.ts
app/data/legal-library/editorial/kpa/articles/article-art-141.ts
app/data/legal-library/editorial/kpa/articles/article-art-142.ts
app/data/legal-library/editorial/kpa/articles/article-art-143.ts
app/data/legal-library/editorial/kpa/articles/article-art-144.ts
app/data/legal-library/editorial/kpa/articles/article-art-145.ts
app/data/legal-library/editorial/kpa/articles/article-art-145a.ts
app/data/legal-library/editorial/kpa/articles/article-art-145aa.ts
app/data/legal-library/editorial/kpa/articles/article-art-145b.ts
app/data/legal-library/editorial/kpa/articles/article-art-146.ts
app/data/legal-library/editorial/kpa/articles/article-art-147.ts
app/data/legal-library/editorial/kpa/articles/article-art-148.ts
app/data/legal-library/editorial/kpa/articles/article-art-149.ts
app/data/legal-library/editorial/kpa/articles/article-art-14a.ts
app/data/legal-library/editorial/kpa/articles/article-art-15.ts
app/data/legal-library/editorial/kpa/articles/article-art-150.ts
app/data/legal-library/editorial/kpa/articles/article-art-151.ts
app/data/legal-library/editorial/kpa/articles/article-art-152.ts
app/data/legal-library/editorial/kpa/articles/article-art-153.ts
app/data/legal-library/editorial/kpa/articles/article-art-154.ts
app/data/legal-library/editorial/kpa/articles/article-art-155.ts
app/data/legal-library/editorial/kpa/articles/article-art-155a.ts
app/data/legal-library/editorial/kpa/articles/article-art-156.ts
app/data/legal-library/editorial/kpa/articles/article-art-157.ts
app/data/legal-library/editorial/kpa/articles/article-art-158.ts
app/data/legal-library/editorial/kpa/articles/article-art-159.ts
app/data/legal-library/editorial/kpa/articles/article-art-16.ts
app/data/legal-library/editorial/kpa/articles/article-art-160.ts
app/data/legal-library/editorial/kpa/articles/article-art-161.ts
app/data/legal-library/editorial/kpa/articles/article-art-162.ts
app/data/legal-library/editorial/kpa/articles/article-art-163.ts
app/data/legal-library/editorial/kpa/articles/article-art-163a.ts
app/data/legal-library/editorial/kpa/articles/article-art-163b.ts
app/data/legal-library/editorial/kpa/articles/article-art-163c.ts
app/data/legal-library/editorial/kpa/articles/article-art-163d.ts
app/data/legal-library/editorial/kpa/articles/article-art-163e.ts
app/data/legal-library/editorial/kpa/articles/article-art-163f.ts
app/data/legal-library/editorial/kpa/articles/article-art-163g.ts
app/data/legal-library/editorial/kpa/articles/article-art-17.ts
app/data/legal-library/editorial/kpa/articles/article-art-18.ts
app/data/legal-library/editorial/kpa/articles/article-art-180.ts
app/data/legal-library/editorial/kpa/articles/article-art-181.ts
app/data/legal-library/editorial/kpa/articles/article-art-182.ts
app/data/legal-library/editorial/kpa/articles/article-art-183.ts
app/data/legal-library/editorial/kpa/articles/article-art-184.ts
app/data/legal-library/editorial/kpa/articles/article-art-185.ts
app/data/legal-library/editorial/kpa/articles/article-art-186.ts
app/data/legal-library/editorial/kpa/articles/article-art-187.ts
app/data/legal-library/editorial/kpa/articles/article-art-188.ts
app/data/legal-library/editorial/kpa/articles/article-art-189.ts
app/data/legal-library/editorial/kpa/articles/article-art-189a.ts
app/data/legal-library/editorial/kpa/articles/article-art-189b.ts
app/data/legal-library/editorial/kpa/articles/article-art-189c.ts
app/data/legal-library/editorial/kpa/articles/article-art-189d.ts
app/data/legal-library/editorial/kpa/articles/article-art-189e.ts
app/data/legal-library/editorial/kpa/articles/article-art-189f.ts
app/data/legal-library/editorial/kpa/articles/article-art-189g.ts
app/data/legal-library/editorial/kpa/articles/article-art-189h.ts
app/data/legal-library/editorial/kpa/articles/article-art-189i.ts
app/data/legal-library/editorial/kpa/articles/article-art-189j.ts
app/data/legal-library/editorial/kpa/articles/article-art-189k.ts
app/data/legal-library/editorial/kpa/articles/article-art-189l.ts
app/data/legal-library/editorial/kpa/articles/article-art-19.ts
app/data/legal-library/editorial/kpa/articles/article-art-2.ts
app/data/legal-library/editorial/kpa/articles/article-art-20.ts
app/data/legal-library/editorial/kpa/articles/article-art-21.ts
app/data/legal-library/editorial/kpa/articles/article-art-217.ts
app/data/legal-library/editorial/kpa/articles/article-art-217a.ts
app/data/legal-library/editorial/kpa/articles/article-art-218.ts
app/data/legal-library/editorial/kpa/articles/article-art-219.ts
app/data/legal-library/editorial/kpa/articles/article-art-22.ts
app/data/legal-library/editorial/kpa/articles/article-art-220.ts
app/data/legal-library/editorial/kpa/articles/article-art-221.ts
app/data/legal-library/editorial/kpa/articles/article-art-222.ts
app/data/legal-library/editorial/kpa/articles/article-art-223.ts
app/data/legal-library/editorial/kpa/articles/article-art-224.ts
app/data/legal-library/editorial/kpa/articles/article-art-225.ts
app/data/legal-library/editorial/kpa/articles/article-art-226.ts
app/data/legal-library/editorial/kpa/articles/article-art-226a.ts
app/data/legal-library/editorial/kpa/articles/article-art-227.ts
app/data/legal-library/editorial/kpa/articles/article-art-228.ts
app/data/legal-library/editorial/kpa/articles/article-art-229.ts
app/data/legal-library/editorial/kpa/articles/article-art-23.ts
app/data/legal-library/editorial/kpa/articles/article-art-230.ts
app/data/legal-library/editorial/kpa/articles/article-art-231.ts
app/data/legal-library/editorial/kpa/articles/article-art-232.ts
app/data/legal-library/editorial/kpa/articles/article-art-233.ts
app/data/legal-library/editorial/kpa/articles/article-art-234.ts
app/data/legal-library/editorial/kpa/articles/article-art-235.ts
app/data/legal-library/editorial/kpa/articles/article-art-236.ts
app/data/legal-library/editorial/kpa/articles/article-art-237.ts
app/data/legal-library/editorial/kpa/articles/article-art-238.ts
app/data/legal-library/editorial/kpa/articles/article-art-239.ts
app/data/legal-library/editorial/kpa/articles/article-art-24.ts
app/data/legal-library/editorial/kpa/articles/article-art-240.ts
app/data/legal-library/editorial/kpa/articles/article-art-241.ts
app/data/legal-library/editorial/kpa/articles/article-art-242.ts
app/data/legal-library/editorial/kpa/articles/article-art-243.ts
app/data/legal-library/editorial/kpa/articles/article-art-244.ts
app/data/legal-library/editorial/kpa/articles/article-art-245.ts
app/data/legal-library/editorial/kpa/articles/article-art-246.ts
app/data/legal-library/editorial/kpa/articles/article-art-247.ts
app/data/legal-library/editorial/kpa/articles/article-art-248.ts
app/data/legal-library/editorial/kpa/articles/article-art-249.ts
app/data/legal-library/editorial/kpa/articles/article-art-25.ts
app/data/legal-library/editorial/kpa/articles/article-art-250.ts
app/data/legal-library/editorial/kpa/articles/article-art-251.ts
app/data/legal-library/editorial/kpa/articles/article-art-252.ts
app/data/legal-library/editorial/kpa/articles/article-art-253.ts
app/data/legal-library/editorial/kpa/articles/article-art-254.ts
app/data/legal-library/editorial/kpa/articles/article-art-255.ts
app/data/legal-library/editorial/kpa/articles/article-art-256.ts
app/data/legal-library/editorial/kpa/articles/article-art-257.ts
app/data/legal-library/editorial/kpa/articles/article-art-258.ts
app/data/legal-library/editorial/kpa/articles/article-art-259.ts
app/data/legal-library/editorial/kpa/articles/article-art-26.ts
app/data/legal-library/editorial/kpa/articles/article-art-260.ts
app/data/legal-library/editorial/kpa/articles/article-art-260a.ts
app/data/legal-library/editorial/kpa/articles/article-art-260b.ts
app/data/legal-library/editorial/kpa/articles/article-art-260c.ts
app/data/legal-library/editorial/kpa/articles/article-art-260d.ts
app/data/legal-library/editorial/kpa/articles/article-art-260e.ts
app/data/legal-library/editorial/kpa/articles/article-art-260f.ts
app/data/legal-library/editorial/kpa/articles/article-art-260g.ts
app/data/legal-library/editorial/kpa/articles/article-art-261.ts
app/data/legal-library/editorial/kpa/articles/article-art-262.ts
app/data/legal-library/editorial/kpa/articles/article-art-263.ts
app/data/legal-library/editorial/kpa/articles/article-art-263a.ts
app/data/legal-library/editorial/kpa/articles/article-art-264.ts
app/data/legal-library/editorial/kpa/articles/article-art-265.ts
app/data/legal-library/editorial/kpa/articles/article-art-266.ts
app/data/legal-library/editorial/kpa/articles/article-art-267.ts
app/data/legal-library/editorial/kpa/articles/article-art-268.ts
app/data/legal-library/editorial/kpa/articles/article-art-268a.ts
app/data/legal-library/editorial/kpa/articles/article-art-269.ts
app/data/legal-library/editorial/kpa/articles/article-art-27.ts
app/data/legal-library/editorial/kpa/articles/article-art-27a.ts
app/data/legal-library/editorial/kpa/articles/article-art-28.ts
app/data/legal-library/editorial/kpa/articles/article-art-29.ts
app/data/legal-library/editorial/kpa/articles/article-art-2a.ts
app/data/legal-library/editorial/kpa/articles/article-art-3.ts
app/data/legal-library/editorial/kpa/articles/article-art-30.ts
app/data/legal-library/editorial/kpa/articles/article-art-31.ts
app/data/legal-library/editorial/kpa/articles/article-art-32.ts
app/data/legal-library/editorial/kpa/articles/article-art-33.ts
app/data/legal-library/editorial/kpa/articles/article-art-34.ts
app/data/legal-library/editorial/kpa/articles/article-art-35.ts
app/data/legal-library/editorial/kpa/articles/article-art-36.ts
app/data/legal-library/editorial/kpa/articles/article-art-37.ts
app/data/legal-library/editorial/kpa/articles/article-art-38.ts
app/data/legal-library/editorial/kpa/articles/article-art-39-1.ts
app/data/legal-library/editorial/kpa/articles/article-art-39-2.ts
app/data/legal-library/editorial/kpa/articles/article-art-39-3.ts
app/data/legal-library/editorial/kpa/articles/article-art-39-4.ts
app/data/legal-library/editorial/kpa/articles/article-art-39.ts
app/data/legal-library/editorial/kpa/articles/article-art-4.ts
app/data/legal-library/editorial/kpa/articles/article-art-40.ts
app/data/legal-library/editorial/kpa/articles/article-art-41.ts
app/data/legal-library/editorial/kpa/articles/article-art-42.ts
app/data/legal-library/editorial/kpa/articles/article-art-43.ts
app/data/legal-library/editorial/kpa/articles/article-art-44.ts
app/data/legal-library/editorial/kpa/articles/article-art-45.ts
app/data/legal-library/editorial/kpa/articles/article-art-45a.ts
app/data/legal-library/editorial/kpa/articles/article-art-46.ts
app/data/legal-library/editorial/kpa/articles/article-art-47.ts
app/data/legal-library/editorial/kpa/articles/article-art-48.ts
app/data/legal-library/editorial/kpa/articles/article-art-49.ts
app/data/legal-library/editorial/kpa/articles/article-art-49a.ts
app/data/legal-library/editorial/kpa/articles/article-art-49b.ts
app/data/legal-library/editorial/kpa/articles/article-art-5.ts
app/data/legal-library/editorial/kpa/articles/article-art-50.ts
app/data/legal-library/editorial/kpa/articles/article-art-51.ts
app/data/legal-library/editorial/kpa/articles/article-art-52.ts
app/data/legal-library/editorial/kpa/articles/article-art-53.ts
app/data/legal-library/editorial/kpa/articles/article-art-54.ts
app/data/legal-library/editorial/kpa/articles/article-art-55.ts
app/data/legal-library/editorial/kpa/articles/article-art-56.ts
app/data/legal-library/editorial/kpa/articles/article-art-57.ts
app/data/legal-library/editorial/kpa/articles/article-art-58.ts
app/data/legal-library/editorial/kpa/articles/article-art-59.ts
app/data/legal-library/editorial/kpa/articles/article-art-6.ts
app/data/legal-library/editorial/kpa/articles/article-art-60.ts
app/data/legal-library/editorial/kpa/articles/article-art-61.ts
app/data/legal-library/editorial/kpa/articles/article-art-61a.ts
app/data/legal-library/editorial/kpa/articles/article-art-62.ts
app/data/legal-library/editorial/kpa/articles/article-art-63.ts
app/data/legal-library/editorial/kpa/articles/article-art-64.ts
app/data/legal-library/editorial/kpa/articles/article-art-65.ts
app/data/legal-library/editorial/kpa/articles/article-art-66.ts
app/data/legal-library/editorial/kpa/articles/article-art-66a.ts
app/data/legal-library/editorial/kpa/articles/article-art-67.ts
app/data/legal-library/editorial/kpa/articles/article-art-68.ts
app/data/legal-library/editorial/kpa/articles/article-art-69.ts
app/data/legal-library/editorial/kpa/articles/article-art-7.ts
app/data/legal-library/editorial/kpa/articles/article-art-70.ts
app/data/legal-library/editorial/kpa/articles/article-art-71.ts
app/data/legal-library/editorial/kpa/articles/article-art-72.ts
app/data/legal-library/editorial/kpa/articles/article-art-73.ts
app/data/legal-library/editorial/kpa/articles/article-art-74.ts
app/data/legal-library/editorial/kpa/articles/article-art-74a.ts
app/data/legal-library/editorial/kpa/articles/article-art-75.ts
app/data/legal-library/editorial/kpa/articles/article-art-76.ts
app/data/legal-library/editorial/kpa/articles/article-art-76a.ts
app/data/legal-library/editorial/kpa/articles/article-art-77.ts
app/data/legal-library/editorial/kpa/articles/article-art-78.ts
app/data/legal-library/editorial/kpa/articles/article-art-79.ts
app/data/legal-library/editorial/kpa/articles/article-art-79a.ts
app/data/legal-library/editorial/kpa/articles/article-art-7a.ts
app/data/legal-library/editorial/kpa/articles/article-art-7b.ts
app/data/legal-library/editorial/kpa/articles/article-art-8.ts
app/data/legal-library/editorial/kpa/articles/article-art-80.ts
app/data/legal-library/editorial/kpa/articles/article-art-81.ts
app/data/legal-library/editorial/kpa/articles/article-art-81a.ts
app/data/legal-library/editorial/kpa/articles/article-art-82.ts
app/data/legal-library/editorial/kpa/articles/article-art-83.ts
app/data/legal-library/editorial/kpa/articles/article-art-84.ts
app/data/legal-library/editorial/kpa/articles/article-art-85.ts
app/data/legal-library/editorial/kpa/articles/article-art-86.ts
app/data/legal-library/editorial/kpa/articles/article-art-87.ts
app/data/legal-library/editorial/kpa/articles/article-art-88.ts
app/data/legal-library/editorial/kpa/articles/article-art-88a.ts
app/data/legal-library/editorial/kpa/articles/article-art-89.ts
app/data/legal-library/editorial/kpa/articles/article-art-9.ts
app/data/legal-library/editorial/kpa/articles/article-art-90.ts
app/data/legal-library/editorial/kpa/articles/article-art-91.ts
app/data/legal-library/editorial/kpa/articles/article-art-92.ts
app/data/legal-library/editorial/kpa/articles/article-art-93.ts
app/data/legal-library/editorial/kpa/articles/article-art-93a.ts
app/data/legal-library/editorial/kpa/articles/article-art-94.ts
app/data/legal-library/editorial/kpa/articles/article-art-95.ts
app/data/legal-library/editorial/kpa/articles/article-art-96.ts
app/data/legal-library/editorial/kpa/articles/article-art-96a.ts
app/data/legal-library/editorial/kpa/articles/article-art-96b.ts
app/data/legal-library/editorial/kpa/articles/article-art-96c.ts
app/data/legal-library/editorial/kpa/articles/article-art-96d.ts
app/data/legal-library/editorial/kpa/articles/article-art-96e.ts
app/data/legal-library/editorial/kpa/articles/article-art-96f.ts
app/data/legal-library/editorial/kpa/articles/article-art-96g.ts
app/data/legal-library/editorial/kpa/articles/article-art-96h.ts
app/data/legal-library/editorial/kpa/articles/article-art-96i.ts
app/data/legal-library/editorial/kpa/articles/article-art-96j.ts
app/data/legal-library/editorial/kpa/articles/article-art-96k.ts
app/data/legal-library/editorial/kpa/articles/article-art-96l.ts
app/data/legal-library/editorial/kpa/articles/article-art-96m.ts
app/data/legal-library/editorial/kpa/articles/article-art-96n.ts
app/data/legal-library/editorial/kpa/articles/article-art-97.ts
app/data/legal-library/editorial/kpa/articles/article-art-98.ts
app/data/legal-library/editorial/kpa/articles/article-art-99.ts
app/data/legal-library/editorial/kpa/index.test.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-218a.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-219a.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-219g.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-222a.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-222b.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-223a.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-225a.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-225i.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-229.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-281a.ts
app/data/legal-library/learning/kpa.ts
app/data/legal-library/learning/modules/kpa/anatomy.ts
app/data/legal-library/learning/modules/kpa/appeal.ts
app/data/legal-library/learning/modules/kpa/authority.ts
app/data/legal-library/learning/modules/kpa/court.ts
app/data/legal-library/learning/modules/kpa/decisions.ts
app/data/legal-library/learning/modules/kpa/delay.ts
app/data/legal-library/learning/modules/kpa/extraordinary.ts
app/data/legal-library/learning/modules/kpa/files-evidence.ts
app/data/legal-library/learning/modules/kpa/initiation.ts
app/data/legal-library/learning/modules/kpa/party.ts
app/data/legal-library/learning/modules/kpa/principles.ts
app/data/legal-library/learning/modules/kpa/silence.ts
app/data/legal-library/learning/modules/kpa/summons.ts
app/data/legal-library/learning/modules/kpa/system.ts
app/data/legal-library/learning/modules/kpa/time-service.ts
app/data/legal-library/learning/modules/ustawa-o-cudzoziemcach/cards-and-documents.ts
app/data/legal-map/data.ts
app/data/legal-map/editorial/topics/appeal.ts
app/data/legal-map/editorial/topics/blue-card.ts
app/data/legal-map/editorial/topics/business-stay.ts
app/data/legal-map/editorial/topics/case-file.ts
app/data/legal-map/editorial/topics/complaint.ts
app/data/legal-map/editorial/topics/cukr-route-2026.ts
app/data/legal-map/editorial/topics/deadlines-delivery.ts
app/data/legal-map/editorial/topics/decision-appeal.ts
app/data/legal-map/editorial/topics/decision-reading.ts
app/data/legal-map/editorial/topics/decision-workflow.ts
app/data/legal-map/editorial/topics/declaration.ts
app/data/legal-map/editorial/topics/delegation.ts
app/data/legal-map/editorial/topics/document-matrix.ts
app/data/legal-map/editorial/topics/document-types.ts
app/data/legal-map/editorial/topics/employer-duties.ts
app/data/legal-map/editorial/topics/entry-current-basis.ts
app/data/legal-map/editorial/topics/evidence-matrix.ts
app/data/legal-map/editorial/topics/evidence.ts
app/data/legal-map/editorial/topics/extraordinary-wsa.ts
app/data/legal-map/editorial/topics/family-stay.ts
app/data/legal-map/editorial/topics/foreign-documents.ts
app/data/legal-map/editorial/topics/goal-of-stay.ts
app/data/legal-map/editorial/topics/inactivity.ts
app/data/legal-map/editorial/topics/initiation.ts
app/data/legal-map/editorial/topics/invalidity.ts
app/data/legal-map/editorial/topics/kpa-principles.ts
app/data/legal-map/editorial/topics/legal-anatomy.ts
app/data/legal-map/editorial/topics/long-term-eu.ts
app/data/legal-map/editorial/topics/mos-procedure.ts
app/data/legal-map/editorial/topics/organ-party.ts
app/data/legal-map/editorial/topics/other-stay.ts
app/data/legal-map/editorial/topics/outsourcing-case.ts
app/data/legal-map/editorial/topics/pending-stay.ts
app/data/legal-map/editorial/topics/permanent-resident.ts
app/data/legal-map/editorial/topics/permanent.ts
app/data/legal-map/editorial/topics/person-status.ts
app/data/legal-map/editorial/topics/principle-legality.ts
app/data/legal-map/editorial/topics/principle-participation.ts
app/data/legal-map/editorial/topics/principle-trust.ts
app/data/legal-map/editorial/topics/principle-two-instance.ts
app/data/legal-map/editorial/topics/reopening.ts
app/data/legal-map/editorial/topics/seasonal.ts
app/data/legal-map/editorial/topics/source-check.ts
app/data/legal-map/editorial/topics/special-vs-kpa.ts
app/data/legal-map/editorial/topics/start-case.ts
app/data/legal-map/editorial/topics/stay-work.ts
app/data/legal-map/editorial/topics/study-loop.ts
app/data/legal-map/editorial/topics/study-research.ts
app/data/legal-map/editorial/topics/temporary-common.ts
app/data/legal-map/editorial/topics/temporary-goals.ts
app/data/legal-map/editorial/topics/temporary-work.ts
app/data/legal-map/editorial/topics/two-keys.ts
app/data/legal-map/editorial/topics/ukr-baseline-2026.ts
app/data/legal-map/editorial/topics/ukraine-ordinary-2026.ts
app/data/legal-map/editorial/topics/ukraine-routes-2026.ts
app/data/legal-map/editorial/topics/visa-free.ts
app/data/legal-map/editorial/topics/visa.ts
app/data/legal-map/editorial/topics/wezwanie-workflow.ts
app/data/legal-map/editorial/topics/wezwanie.ts
app/data/legal-map/editorial/topics/work-entry.ts
app/data/legal-map/editorial/topics/work-instruments.ts
app/data/legal-map/editorial/topics/work-permit.ts
app/data/legal-map/editorial/topics/wsa.ts
app/data/shared/legal-meta.ts
app/features/law-library/ui/kpa/kpa-articles-content.tsx
app/features/law-library/ui/learning/legal-learning-module-content.test.tsx
legal-corpus/promotions/powierzanie-pracy-powierzanie-pracy-2025-621-u-2026-07-18.json`, including unrelated runtime code, route files, or explanations not named by the packet;
- silently update unrelated content because it looks inconsistent;
- describe a future amendment as current law;
- omit `wejście w życie` or `przepisy przejściowe` when they affect applicability;
- use an original client document or identifying personal/business data;
- claim that an unchanged hash proves unchanged legal effect;
- turn a practical checklist into a guaranteed legal result.

If generated source facts are wrong, report the exact diagnostic and stop. The deterministic corpus pipeline must fix the source artifact before editorial content can rely on it.

## Allowed write scope

The only files that may be edited are the exact repository-relative paths explicitly listed by the preparation script in:

```text
app/data/case-guides/editorial/routes/blue-card.ts
app/data/case-guides/editorial/routes/business.ts
app/data/case-guides/editorial/routes/cukr.ts
app/data/case-guides/editorial/routes/family.ts
app/data/case-guides/editorial/routes/long-term-eu.ts
app/data/case-guides/editorial/routes/other.ts
app/data/case-guides/editorial/routes/permanent.ts
app/data/case-guides/editorial/routes/student.ts
app/data/case-guides/editorial/routes/work.ts
app/data/document-library/editorial/guides/administrative-decision.ts
app/data/document-library/editorial/guides/authority-summons.ts
app/data/document-library/editorial/guides/business-register-information.ts
app/data/document-library/editorial/guides/crbr-information.ts
app/data/document-library/editorial/guides/delivery-proof.ts
app/data/document-library/editorial/guides/employment-annex-1.ts
app/data/document-library/editorial/guides/employment-contract.ts
app/data/document-library/editorial/guides/mos-application.ts
app/data/document-library/editorial/guides/passport.ts
app/data/document-library/editorial/guides/pesel-ukr-confirmation.ts
app/data/document-library/editorial/guides/power-of-attorney.ts
app/data/document-library/editorial/guides/residence-card-fee-proof.ts
app/data/document-library/editorial/guides/residence-card.ts
app/data/document-library/editorial/guides/stamp-duty-proof.ts
app/data/document-library/editorial/guides/sworn-translation.ts
app/data/document-library/editorial/guides/ukraine-work-notification.ts
app/data/document-library/editorial/guides/upo.ts
app/data/document-library/editorial/guides/zus-confirmation.ts
app/data/legal-knowledge/contracts.test.ts
app/data/legal-knowledge/dependencies.test.ts
app/data/legal-library/editorial/kpa/articles/article-art-1.ts
app/data/legal-library/editorial/kpa/articles/article-art-10.ts
app/data/legal-library/editorial/kpa/articles/article-art-100.ts
app/data/legal-library/editorial/kpa/articles/article-art-101.ts
app/data/legal-library/editorial/kpa/articles/article-art-102.ts
app/data/legal-library/editorial/kpa/articles/article-art-103.ts
app/data/legal-library/editorial/kpa/articles/article-art-104.ts
app/data/legal-library/editorial/kpa/articles/article-art-105.ts
app/data/legal-library/editorial/kpa/articles/article-art-106.ts
app/data/legal-library/editorial/kpa/articles/article-art-106a.ts
app/data/legal-library/editorial/kpa/articles/article-art-107.ts
app/data/legal-library/editorial/kpa/articles/article-art-108.ts
app/data/legal-library/editorial/kpa/articles/article-art-109.ts
app/data/legal-library/editorial/kpa/articles/article-art-11.ts
app/data/legal-library/editorial/kpa/articles/article-art-110.ts
app/data/legal-library/editorial/kpa/articles/article-art-111.ts
app/data/legal-library/editorial/kpa/articles/article-art-112.ts
app/data/legal-library/editorial/kpa/articles/article-art-113.ts
app/data/legal-library/editorial/kpa/articles/article-art-114.ts
app/data/legal-library/editorial/kpa/articles/article-art-115.ts
app/data/legal-library/editorial/kpa/articles/article-art-116.ts
app/data/legal-library/editorial/kpa/articles/article-art-117.ts
app/data/legal-library/editorial/kpa/articles/article-art-118.ts
app/data/legal-library/editorial/kpa/articles/article-art-119.ts
app/data/legal-library/editorial/kpa/articles/article-art-12.ts
app/data/legal-library/editorial/kpa/articles/article-art-120.ts
app/data/legal-library/editorial/kpa/articles/article-art-121.ts
app/data/legal-library/editorial/kpa/articles/article-art-121a.ts
app/data/legal-library/editorial/kpa/articles/article-art-122.ts
app/data/legal-library/editorial/kpa/articles/article-art-122a.ts
app/data/legal-library/editorial/kpa/articles/article-art-122b.ts
app/data/legal-library/editorial/kpa/articles/article-art-122c.ts
app/data/legal-library/editorial/kpa/articles/article-art-122d.ts
app/data/legal-library/editorial/kpa/articles/article-art-122e.ts
app/data/legal-library/editorial/kpa/articles/article-art-122f.ts
app/data/legal-library/editorial/kpa/articles/article-art-122g.ts
app/data/legal-library/editorial/kpa/articles/article-art-122h.ts
app/data/legal-library/editorial/kpa/articles/article-art-123.ts
app/data/legal-library/editorial/kpa/articles/article-art-124.ts
app/data/legal-library/editorial/kpa/articles/article-art-125.ts
app/data/legal-library/editorial/kpa/articles/article-art-126.ts
app/data/legal-library/editorial/kpa/articles/article-art-127.ts
app/data/legal-library/editorial/kpa/articles/article-art-127a.ts
app/data/legal-library/editorial/kpa/articles/article-art-128.ts
app/data/legal-library/editorial/kpa/articles/article-art-129.ts
app/data/legal-library/editorial/kpa/articles/article-art-13.ts
app/data/legal-library/editorial/kpa/articles/article-art-130.ts
app/data/legal-library/editorial/kpa/articles/article-art-131.ts
app/data/legal-library/editorial/kpa/articles/article-art-132.ts
app/data/legal-library/editorial/kpa/articles/article-art-133.ts
app/data/legal-library/editorial/kpa/articles/article-art-134.ts
app/data/legal-library/editorial/kpa/articles/article-art-135.ts
app/data/legal-library/editorial/kpa/articles/article-art-136.ts
app/data/legal-library/editorial/kpa/articles/article-art-137.ts
app/data/legal-library/editorial/kpa/articles/article-art-138.ts
app/data/legal-library/editorial/kpa/articles/article-art-139.ts
app/data/legal-library/editorial/kpa/articles/article-art-139a.ts
app/data/legal-library/editorial/kpa/articles/article-art-14.ts
app/data/legal-library/editorial/kpa/articles/article-art-140.ts
app/data/legal-library/editorial/kpa/articles/article-art-141.ts
app/data/legal-library/editorial/kpa/articles/article-art-142.ts
app/data/legal-library/editorial/kpa/articles/article-art-143.ts
app/data/legal-library/editorial/kpa/articles/article-art-144.ts
app/data/legal-library/editorial/kpa/articles/article-art-145.ts
app/data/legal-library/editorial/kpa/articles/article-art-145a.ts
app/data/legal-library/editorial/kpa/articles/article-art-145aa.ts
app/data/legal-library/editorial/kpa/articles/article-art-145b.ts
app/data/legal-library/editorial/kpa/articles/article-art-146.ts
app/data/legal-library/editorial/kpa/articles/article-art-147.ts
app/data/legal-library/editorial/kpa/articles/article-art-148.ts
app/data/legal-library/editorial/kpa/articles/article-art-149.ts
app/data/legal-library/editorial/kpa/articles/article-art-14a.ts
app/data/legal-library/editorial/kpa/articles/article-art-15.ts
app/data/legal-library/editorial/kpa/articles/article-art-150.ts
app/data/legal-library/editorial/kpa/articles/article-art-151.ts
app/data/legal-library/editorial/kpa/articles/article-art-152.ts
app/data/legal-library/editorial/kpa/articles/article-art-153.ts
app/data/legal-library/editorial/kpa/articles/article-art-154.ts
app/data/legal-library/editorial/kpa/articles/article-art-155.ts
app/data/legal-library/editorial/kpa/articles/article-art-155a.ts
app/data/legal-library/editorial/kpa/articles/article-art-156.ts
app/data/legal-library/editorial/kpa/articles/article-art-157.ts
app/data/legal-library/editorial/kpa/articles/article-art-158.ts
app/data/legal-library/editorial/kpa/articles/article-art-159.ts
app/data/legal-library/editorial/kpa/articles/article-art-16.ts
app/data/legal-library/editorial/kpa/articles/article-art-160.ts
app/data/legal-library/editorial/kpa/articles/article-art-161.ts
app/data/legal-library/editorial/kpa/articles/article-art-162.ts
app/data/legal-library/editorial/kpa/articles/article-art-163.ts
app/data/legal-library/editorial/kpa/articles/article-art-163a.ts
app/data/legal-library/editorial/kpa/articles/article-art-163b.ts
app/data/legal-library/editorial/kpa/articles/article-art-163c.ts
app/data/legal-library/editorial/kpa/articles/article-art-163d.ts
app/data/legal-library/editorial/kpa/articles/article-art-163e.ts
app/data/legal-library/editorial/kpa/articles/article-art-163f.ts
app/data/legal-library/editorial/kpa/articles/article-art-163g.ts
app/data/legal-library/editorial/kpa/articles/article-art-17.ts
app/data/legal-library/editorial/kpa/articles/article-art-18.ts
app/data/legal-library/editorial/kpa/articles/article-art-180.ts
app/data/legal-library/editorial/kpa/articles/article-art-181.ts
app/data/legal-library/editorial/kpa/articles/article-art-182.ts
app/data/legal-library/editorial/kpa/articles/article-art-183.ts
app/data/legal-library/editorial/kpa/articles/article-art-184.ts
app/data/legal-library/editorial/kpa/articles/article-art-185.ts
app/data/legal-library/editorial/kpa/articles/article-art-186.ts
app/data/legal-library/editorial/kpa/articles/article-art-187.ts
app/data/legal-library/editorial/kpa/articles/article-art-188.ts
app/data/legal-library/editorial/kpa/articles/article-art-189.ts
app/data/legal-library/editorial/kpa/articles/article-art-189a.ts
app/data/legal-library/editorial/kpa/articles/article-art-189b.ts
app/data/legal-library/editorial/kpa/articles/article-art-189c.ts
app/data/legal-library/editorial/kpa/articles/article-art-189d.ts
app/data/legal-library/editorial/kpa/articles/article-art-189e.ts
app/data/legal-library/editorial/kpa/articles/article-art-189f.ts
app/data/legal-library/editorial/kpa/articles/article-art-189g.ts
app/data/legal-library/editorial/kpa/articles/article-art-189h.ts
app/data/legal-library/editorial/kpa/articles/article-art-189i.ts
app/data/legal-library/editorial/kpa/articles/article-art-189j.ts
app/data/legal-library/editorial/kpa/articles/article-art-189k.ts
app/data/legal-library/editorial/kpa/articles/article-art-189l.ts
app/data/legal-library/editorial/kpa/articles/article-art-19.ts
app/data/legal-library/editorial/kpa/articles/article-art-2.ts
app/data/legal-library/editorial/kpa/articles/article-art-20.ts
app/data/legal-library/editorial/kpa/articles/article-art-21.ts
app/data/legal-library/editorial/kpa/articles/article-art-217.ts
app/data/legal-library/editorial/kpa/articles/article-art-217a.ts
app/data/legal-library/editorial/kpa/articles/article-art-218.ts
app/data/legal-library/editorial/kpa/articles/article-art-219.ts
app/data/legal-library/editorial/kpa/articles/article-art-22.ts
app/data/legal-library/editorial/kpa/articles/article-art-220.ts
app/data/legal-library/editorial/kpa/articles/article-art-221.ts
app/data/legal-library/editorial/kpa/articles/article-art-222.ts
app/data/legal-library/editorial/kpa/articles/article-art-223.ts
app/data/legal-library/editorial/kpa/articles/article-art-224.ts
app/data/legal-library/editorial/kpa/articles/article-art-225.ts
app/data/legal-library/editorial/kpa/articles/article-art-226.ts
app/data/legal-library/editorial/kpa/articles/article-art-226a.ts
app/data/legal-library/editorial/kpa/articles/article-art-227.ts
app/data/legal-library/editorial/kpa/articles/article-art-228.ts
app/data/legal-library/editorial/kpa/articles/article-art-229.ts
app/data/legal-library/editorial/kpa/articles/article-art-23.ts
app/data/legal-library/editorial/kpa/articles/article-art-230.ts
app/data/legal-library/editorial/kpa/articles/article-art-231.ts
app/data/legal-library/editorial/kpa/articles/article-art-232.ts
app/data/legal-library/editorial/kpa/articles/article-art-233.ts
app/data/legal-library/editorial/kpa/articles/article-art-234.ts
app/data/legal-library/editorial/kpa/articles/article-art-235.ts
app/data/legal-library/editorial/kpa/articles/article-art-236.ts
app/data/legal-library/editorial/kpa/articles/article-art-237.ts
app/data/legal-library/editorial/kpa/articles/article-art-238.ts
app/data/legal-library/editorial/kpa/articles/article-art-239.ts
app/data/legal-library/editorial/kpa/articles/article-art-24.ts
app/data/legal-library/editorial/kpa/articles/article-art-240.ts
app/data/legal-library/editorial/kpa/articles/article-art-241.ts
app/data/legal-library/editorial/kpa/articles/article-art-242.ts
app/data/legal-library/editorial/kpa/articles/article-art-243.ts
app/data/legal-library/editorial/kpa/articles/article-art-244.ts
app/data/legal-library/editorial/kpa/articles/article-art-245.ts
app/data/legal-library/editorial/kpa/articles/article-art-246.ts
app/data/legal-library/editorial/kpa/articles/article-art-247.ts
app/data/legal-library/editorial/kpa/articles/article-art-248.ts
app/data/legal-library/editorial/kpa/articles/article-art-249.ts
app/data/legal-library/editorial/kpa/articles/article-art-25.ts
app/data/legal-library/editorial/kpa/articles/article-art-250.ts
app/data/legal-library/editorial/kpa/articles/article-art-251.ts
app/data/legal-library/editorial/kpa/articles/article-art-252.ts
app/data/legal-library/editorial/kpa/articles/article-art-253.ts
app/data/legal-library/editorial/kpa/articles/article-art-254.ts
app/data/legal-library/editorial/kpa/articles/article-art-255.ts
app/data/legal-library/editorial/kpa/articles/article-art-256.ts
app/data/legal-library/editorial/kpa/articles/article-art-257.ts
app/data/legal-library/editorial/kpa/articles/article-art-258.ts
app/data/legal-library/editorial/kpa/articles/article-art-259.ts
app/data/legal-library/editorial/kpa/articles/article-art-26.ts
app/data/legal-library/editorial/kpa/articles/article-art-260.ts
app/data/legal-library/editorial/kpa/articles/article-art-260a.ts
app/data/legal-library/editorial/kpa/articles/article-art-260b.ts
app/data/legal-library/editorial/kpa/articles/article-art-260c.ts
app/data/legal-library/editorial/kpa/articles/article-art-260d.ts
app/data/legal-library/editorial/kpa/articles/article-art-260e.ts
app/data/legal-library/editorial/kpa/articles/article-art-260f.ts
app/data/legal-library/editorial/kpa/articles/article-art-260g.ts
app/data/legal-library/editorial/kpa/articles/article-art-261.ts
app/data/legal-library/editorial/kpa/articles/article-art-262.ts
app/data/legal-library/editorial/kpa/articles/article-art-263.ts
app/data/legal-library/editorial/kpa/articles/article-art-263a.ts
app/data/legal-library/editorial/kpa/articles/article-art-264.ts
app/data/legal-library/editorial/kpa/articles/article-art-265.ts
app/data/legal-library/editorial/kpa/articles/article-art-266.ts
app/data/legal-library/editorial/kpa/articles/article-art-267.ts
app/data/legal-library/editorial/kpa/articles/article-art-268.ts
app/data/legal-library/editorial/kpa/articles/article-art-268a.ts
app/data/legal-library/editorial/kpa/articles/article-art-269.ts
app/data/legal-library/editorial/kpa/articles/article-art-27.ts
app/data/legal-library/editorial/kpa/articles/article-art-27a.ts
app/data/legal-library/editorial/kpa/articles/article-art-28.ts
app/data/legal-library/editorial/kpa/articles/article-art-29.ts
app/data/legal-library/editorial/kpa/articles/article-art-2a.ts
app/data/legal-library/editorial/kpa/articles/article-art-3.ts
app/data/legal-library/editorial/kpa/articles/article-art-30.ts
app/data/legal-library/editorial/kpa/articles/article-art-31.ts
app/data/legal-library/editorial/kpa/articles/article-art-32.ts
app/data/legal-library/editorial/kpa/articles/article-art-33.ts
app/data/legal-library/editorial/kpa/articles/article-art-34.ts
app/data/legal-library/editorial/kpa/articles/article-art-35.ts
app/data/legal-library/editorial/kpa/articles/article-art-36.ts
app/data/legal-library/editorial/kpa/articles/article-art-37.ts
app/data/legal-library/editorial/kpa/articles/article-art-38.ts
app/data/legal-library/editorial/kpa/articles/article-art-39-1.ts
app/data/legal-library/editorial/kpa/articles/article-art-39-2.ts
app/data/legal-library/editorial/kpa/articles/article-art-39-3.ts
app/data/legal-library/editorial/kpa/articles/article-art-39-4.ts
app/data/legal-library/editorial/kpa/articles/article-art-39.ts
app/data/legal-library/editorial/kpa/articles/article-art-4.ts
app/data/legal-library/editorial/kpa/articles/article-art-40.ts
app/data/legal-library/editorial/kpa/articles/article-art-41.ts
app/data/legal-library/editorial/kpa/articles/article-art-42.ts
app/data/legal-library/editorial/kpa/articles/article-art-43.ts
app/data/legal-library/editorial/kpa/articles/article-art-44.ts
app/data/legal-library/editorial/kpa/articles/article-art-45.ts
app/data/legal-library/editorial/kpa/articles/article-art-45a.ts
app/data/legal-library/editorial/kpa/articles/article-art-46.ts
app/data/legal-library/editorial/kpa/articles/article-art-47.ts
app/data/legal-library/editorial/kpa/articles/article-art-48.ts
app/data/legal-library/editorial/kpa/articles/article-art-49.ts
app/data/legal-library/editorial/kpa/articles/article-art-49a.ts
app/data/legal-library/editorial/kpa/articles/article-art-49b.ts
app/data/legal-library/editorial/kpa/articles/article-art-5.ts
app/data/legal-library/editorial/kpa/articles/article-art-50.ts
app/data/legal-library/editorial/kpa/articles/article-art-51.ts
app/data/legal-library/editorial/kpa/articles/article-art-52.ts
app/data/legal-library/editorial/kpa/articles/article-art-53.ts
app/data/legal-library/editorial/kpa/articles/article-art-54.ts
app/data/legal-library/editorial/kpa/articles/article-art-55.ts
app/data/legal-library/editorial/kpa/articles/article-art-56.ts
app/data/legal-library/editorial/kpa/articles/article-art-57.ts
app/data/legal-library/editorial/kpa/articles/article-art-58.ts
app/data/legal-library/editorial/kpa/articles/article-art-59.ts
app/data/legal-library/editorial/kpa/articles/article-art-6.ts
app/data/legal-library/editorial/kpa/articles/article-art-60.ts
app/data/legal-library/editorial/kpa/articles/article-art-61.ts
app/data/legal-library/editorial/kpa/articles/article-art-61a.ts
app/data/legal-library/editorial/kpa/articles/article-art-62.ts
app/data/legal-library/editorial/kpa/articles/article-art-63.ts
app/data/legal-library/editorial/kpa/articles/article-art-64.ts
app/data/legal-library/editorial/kpa/articles/article-art-65.ts
app/data/legal-library/editorial/kpa/articles/article-art-66.ts
app/data/legal-library/editorial/kpa/articles/article-art-66a.ts
app/data/legal-library/editorial/kpa/articles/article-art-67.ts
app/data/legal-library/editorial/kpa/articles/article-art-68.ts
app/data/legal-library/editorial/kpa/articles/article-art-69.ts
app/data/legal-library/editorial/kpa/articles/article-art-7.ts
app/data/legal-library/editorial/kpa/articles/article-art-70.ts
app/data/legal-library/editorial/kpa/articles/article-art-71.ts
app/data/legal-library/editorial/kpa/articles/article-art-72.ts
app/data/legal-library/editorial/kpa/articles/article-art-73.ts
app/data/legal-library/editorial/kpa/articles/article-art-74.ts
app/data/legal-library/editorial/kpa/articles/article-art-74a.ts
app/data/legal-library/editorial/kpa/articles/article-art-75.ts
app/data/legal-library/editorial/kpa/articles/article-art-76.ts
app/data/legal-library/editorial/kpa/articles/article-art-76a.ts
app/data/legal-library/editorial/kpa/articles/article-art-77.ts
app/data/legal-library/editorial/kpa/articles/article-art-78.ts
app/data/legal-library/editorial/kpa/articles/article-art-79.ts
app/data/legal-library/editorial/kpa/articles/article-art-79a.ts
app/data/legal-library/editorial/kpa/articles/article-art-7a.ts
app/data/legal-library/editorial/kpa/articles/article-art-7b.ts
app/data/legal-library/editorial/kpa/articles/article-art-8.ts
app/data/legal-library/editorial/kpa/articles/article-art-80.ts
app/data/legal-library/editorial/kpa/articles/article-art-81.ts
app/data/legal-library/editorial/kpa/articles/article-art-81a.ts
app/data/legal-library/editorial/kpa/articles/article-art-82.ts
app/data/legal-library/editorial/kpa/articles/article-art-83.ts
app/data/legal-library/editorial/kpa/articles/article-art-84.ts
app/data/legal-library/editorial/kpa/articles/article-art-85.ts
app/data/legal-library/editorial/kpa/articles/article-art-86.ts
app/data/legal-library/editorial/kpa/articles/article-art-87.ts
app/data/legal-library/editorial/kpa/articles/article-art-88.ts
app/data/legal-library/editorial/kpa/articles/article-art-88a.ts
app/data/legal-library/editorial/kpa/articles/article-art-89.ts
app/data/legal-library/editorial/kpa/articles/article-art-9.ts
app/data/legal-library/editorial/kpa/articles/article-art-90.ts
app/data/legal-library/editorial/kpa/articles/article-art-91.ts
app/data/legal-library/editorial/kpa/articles/article-art-92.ts
app/data/legal-library/editorial/kpa/articles/article-art-93.ts
app/data/legal-library/editorial/kpa/articles/article-art-93a.ts
app/data/legal-library/editorial/kpa/articles/article-art-94.ts
app/data/legal-library/editorial/kpa/articles/article-art-95.ts
app/data/legal-library/editorial/kpa/articles/article-art-96.ts
app/data/legal-library/editorial/kpa/articles/article-art-96a.ts
app/data/legal-library/editorial/kpa/articles/article-art-96b.ts
app/data/legal-library/editorial/kpa/articles/article-art-96c.ts
app/data/legal-library/editorial/kpa/articles/article-art-96d.ts
app/data/legal-library/editorial/kpa/articles/article-art-96e.ts
app/data/legal-library/editorial/kpa/articles/article-art-96f.ts
app/data/legal-library/editorial/kpa/articles/article-art-96g.ts
app/data/legal-library/editorial/kpa/articles/article-art-96h.ts
app/data/legal-library/editorial/kpa/articles/article-art-96i.ts
app/data/legal-library/editorial/kpa/articles/article-art-96j.ts
app/data/legal-library/editorial/kpa/articles/article-art-96k.ts
app/data/legal-library/editorial/kpa/articles/article-art-96l.ts
app/data/legal-library/editorial/kpa/articles/article-art-96m.ts
app/data/legal-library/editorial/kpa/articles/article-art-96n.ts
app/data/legal-library/editorial/kpa/articles/article-art-97.ts
app/data/legal-library/editorial/kpa/articles/article-art-98.ts
app/data/legal-library/editorial/kpa/articles/article-art-99.ts
app/data/legal-library/editorial/kpa/index.test.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-218a.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-219a.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-219g.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-222a.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-222b.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-223a.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-225a.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-225i.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-229.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-281a.ts
app/data/legal-library/learning/kpa.ts
app/data/legal-library/learning/modules/kpa/anatomy.ts
app/data/legal-library/learning/modules/kpa/appeal.ts
app/data/legal-library/learning/modules/kpa/authority.ts
app/data/legal-library/learning/modules/kpa/court.ts
app/data/legal-library/learning/modules/kpa/decisions.ts
app/data/legal-library/learning/modules/kpa/delay.ts
app/data/legal-library/learning/modules/kpa/extraordinary.ts
app/data/legal-library/learning/modules/kpa/files-evidence.ts
app/data/legal-library/learning/modules/kpa/initiation.ts
app/data/legal-library/learning/modules/kpa/party.ts
app/data/legal-library/learning/modules/kpa/principles.ts
app/data/legal-library/learning/modules/kpa/silence.ts
app/data/legal-library/learning/modules/kpa/summons.ts
app/data/legal-library/learning/modules/kpa/system.ts
app/data/legal-library/learning/modules/kpa/time-service.ts
app/data/legal-library/learning/modules/ustawa-o-cudzoziemcach/cards-and-documents.ts
app/data/legal-map/data.ts
app/data/legal-map/editorial/topics/appeal.ts
app/data/legal-map/editorial/topics/blue-card.ts
app/data/legal-map/editorial/topics/business-stay.ts
app/data/legal-map/editorial/topics/case-file.ts
app/data/legal-map/editorial/topics/complaint.ts
app/data/legal-map/editorial/topics/cukr-route-2026.ts
app/data/legal-map/editorial/topics/deadlines-delivery.ts
app/data/legal-map/editorial/topics/decision-appeal.ts
app/data/legal-map/editorial/topics/decision-reading.ts
app/data/legal-map/editorial/topics/decision-workflow.ts
app/data/legal-map/editorial/topics/declaration.ts
app/data/legal-map/editorial/topics/delegation.ts
app/data/legal-map/editorial/topics/document-matrix.ts
app/data/legal-map/editorial/topics/document-types.ts
app/data/legal-map/editorial/topics/employer-duties.ts
app/data/legal-map/editorial/topics/entry-current-basis.ts
app/data/legal-map/editorial/topics/evidence-matrix.ts
app/data/legal-map/editorial/topics/evidence.ts
app/data/legal-map/editorial/topics/extraordinary-wsa.ts
app/data/legal-map/editorial/topics/family-stay.ts
app/data/legal-map/editorial/topics/foreign-documents.ts
app/data/legal-map/editorial/topics/goal-of-stay.ts
app/data/legal-map/editorial/topics/inactivity.ts
app/data/legal-map/editorial/topics/initiation.ts
app/data/legal-map/editorial/topics/invalidity.ts
app/data/legal-map/editorial/topics/kpa-principles.ts
app/data/legal-map/editorial/topics/legal-anatomy.ts
app/data/legal-map/editorial/topics/long-term-eu.ts
app/data/legal-map/editorial/topics/mos-procedure.ts
app/data/legal-map/editorial/topics/organ-party.ts
app/data/legal-map/editorial/topics/other-stay.ts
app/data/legal-map/editorial/topics/outsourcing-case.ts
app/data/legal-map/editorial/topics/pending-stay.ts
app/data/legal-map/editorial/topics/permanent-resident.ts
app/data/legal-map/editorial/topics/permanent.ts
app/data/legal-map/editorial/topics/person-status.ts
app/data/legal-map/editorial/topics/principle-legality.ts
app/data/legal-map/editorial/topics/principle-participation.ts
app/data/legal-map/editorial/topics/principle-trust.ts
app/data/legal-map/editorial/topics/principle-two-instance.ts
app/data/legal-map/editorial/topics/reopening.ts
app/data/legal-map/editorial/topics/seasonal.ts
app/data/legal-map/editorial/topics/source-check.ts
app/data/legal-map/editorial/topics/special-vs-kpa.ts
app/data/legal-map/editorial/topics/start-case.ts
app/data/legal-map/editorial/topics/stay-work.ts
app/data/legal-map/editorial/topics/study-loop.ts
app/data/legal-map/editorial/topics/study-research.ts
app/data/legal-map/editorial/topics/temporary-common.ts
app/data/legal-map/editorial/topics/temporary-goals.ts
app/data/legal-map/editorial/topics/temporary-work.ts
app/data/legal-map/editorial/topics/two-keys.ts
app/data/legal-map/editorial/topics/ukr-baseline-2026.ts
app/data/legal-map/editorial/topics/ukraine-ordinary-2026.ts
app/data/legal-map/editorial/topics/ukraine-routes-2026.ts
app/data/legal-map/editorial/topics/visa-free.ts
app/data/legal-map/editorial/topics/visa.ts
app/data/legal-map/editorial/topics/wezwanie-workflow.ts
app/data/legal-map/editorial/topics/wezwanie.ts
app/data/legal-map/editorial/topics/work-entry.ts
app/data/legal-map/editorial/topics/work-instruments.ts
app/data/legal-map/editorial/topics/work-permit.ts
app/data/legal-map/editorial/topics/wsa.ts
app/data/shared/legal-meta.ts
app/features/law-library/ui/kpa/kpa-articles-content.tsx
app/features/law-library/ui/learning/legal-learning-module-content.test.tsx
legal-corpus/promotions/powierzanie-pracy-powierzanie-pracy-2025-621-u-2026-07-18.json
```

The preparation/validation scripts—not prompt wording—must canonicalize these paths against the repository root and reject absolute paths, `..`, globs, symlinks, directories used as broad scope, generated artifact paths, and current-edition pointer paths. Before validation or promotion, automation compares the actual changed-file list with the approved set and fails closed on any extra path.

Normally this is a set of reviewed editorial explanation files and, if the repository's process permits it, a work-order response file. Generated corpus outputs remain read-only inputs. If the scope is empty, contradictory, invalid, or missing, do not edit files; return `BLOCK` with the reason.

## Required response format

Return a review report with exactly these sections. Use concise evidence, but do not omit a provision merely because it was unchanged.

### Summary

- `MODE`: `add` or `update`
- `documentId`:
- `oldEditionId`:
- `newEditionId`:
- legal-state date:
- review completed at (actual date/time):
- provisions reviewed:
- overall status: `READY_FOR_VALIDATION`, `HOLD`, or `BLOCK`
- short description of what changed and why

### Sources checked

Use a table with one row per source or source category:

| Category | Official source/locator | Checked date | Finding and limitation |
| --- | --- | --- | --- |
| Statute text | URL + exact locator |  |  |
| Official metadata/status | URL + relevant fields |  |  |
| Entry into force/transitional rules | URL + exact locator |  |  |
| Official guidance | URL + institution/date |  |  |
| Case law, if used | court/date/identifier + URL |  |  |

Include the official PDF and ELI links even when no editorial text changed. Say explicitly when a category was not needed or could not be checked.

### Provision-by-provision editorial changes

Create one subsection per stable provision ID. Use the generated locator exactly.

```text
#### <generated provision ID>
- classification: added | changed | removed | unchanged | dependant-review
- sourceEditionId:
- reviewStatus: reviewed | draft | stale | blocked | superseded
- source locator and PDF pages:
- source hash finding:
- claims changed: [statute-text, official-guidance, case-law, practical-inference]
- editorial action: created | revised | retained after verification | marked stale | no change
- Ukrainian explanation change:
- related provisions checked:
- transition/applicability note:
- unresolved issue, or `none`:
```

For an unchanged provision, state what was checked and why retaining the explanation is safe for this review; never write “unchanged law” solely from a matching hash.

### Unresolved issues

List every missing source, ambiguous locator, extraction warning, uncertain legal-state date, transition question, stale explanation, unverified case-law proposition, or out-of-scope request. Use `[UNRESOLVED]` and identify the exact provision or file. An empty section must say `none`.

### Files changed

List exact repository-relative paths actually edited. Confirm that no generated source artifact was edited by hand and that every path is inside `app/data/case-guides/editorial/routes/blue-card.ts
app/data/case-guides/editorial/routes/business.ts
app/data/case-guides/editorial/routes/cukr.ts
app/data/case-guides/editorial/routes/family.ts
app/data/case-guides/editorial/routes/long-term-eu.ts
app/data/case-guides/editorial/routes/other.ts
app/data/case-guides/editorial/routes/permanent.ts
app/data/case-guides/editorial/routes/student.ts
app/data/case-guides/editorial/routes/work.ts
app/data/document-library/editorial/guides/administrative-decision.ts
app/data/document-library/editorial/guides/authority-summons.ts
app/data/document-library/editorial/guides/business-register-information.ts
app/data/document-library/editorial/guides/crbr-information.ts
app/data/document-library/editorial/guides/delivery-proof.ts
app/data/document-library/editorial/guides/employment-annex-1.ts
app/data/document-library/editorial/guides/employment-contract.ts
app/data/document-library/editorial/guides/mos-application.ts
app/data/document-library/editorial/guides/passport.ts
app/data/document-library/editorial/guides/pesel-ukr-confirmation.ts
app/data/document-library/editorial/guides/power-of-attorney.ts
app/data/document-library/editorial/guides/residence-card-fee-proof.ts
app/data/document-library/editorial/guides/residence-card.ts
app/data/document-library/editorial/guides/stamp-duty-proof.ts
app/data/document-library/editorial/guides/sworn-translation.ts
app/data/document-library/editorial/guides/ukraine-work-notification.ts
app/data/document-library/editorial/guides/upo.ts
app/data/document-library/editorial/guides/zus-confirmation.ts
app/data/legal-knowledge/contracts.test.ts
app/data/legal-knowledge/dependencies.test.ts
app/data/legal-library/editorial/kpa/articles/article-art-1.ts
app/data/legal-library/editorial/kpa/articles/article-art-10.ts
app/data/legal-library/editorial/kpa/articles/article-art-100.ts
app/data/legal-library/editorial/kpa/articles/article-art-101.ts
app/data/legal-library/editorial/kpa/articles/article-art-102.ts
app/data/legal-library/editorial/kpa/articles/article-art-103.ts
app/data/legal-library/editorial/kpa/articles/article-art-104.ts
app/data/legal-library/editorial/kpa/articles/article-art-105.ts
app/data/legal-library/editorial/kpa/articles/article-art-106.ts
app/data/legal-library/editorial/kpa/articles/article-art-106a.ts
app/data/legal-library/editorial/kpa/articles/article-art-107.ts
app/data/legal-library/editorial/kpa/articles/article-art-108.ts
app/data/legal-library/editorial/kpa/articles/article-art-109.ts
app/data/legal-library/editorial/kpa/articles/article-art-11.ts
app/data/legal-library/editorial/kpa/articles/article-art-110.ts
app/data/legal-library/editorial/kpa/articles/article-art-111.ts
app/data/legal-library/editorial/kpa/articles/article-art-112.ts
app/data/legal-library/editorial/kpa/articles/article-art-113.ts
app/data/legal-library/editorial/kpa/articles/article-art-114.ts
app/data/legal-library/editorial/kpa/articles/article-art-115.ts
app/data/legal-library/editorial/kpa/articles/article-art-116.ts
app/data/legal-library/editorial/kpa/articles/article-art-117.ts
app/data/legal-library/editorial/kpa/articles/article-art-118.ts
app/data/legal-library/editorial/kpa/articles/article-art-119.ts
app/data/legal-library/editorial/kpa/articles/article-art-12.ts
app/data/legal-library/editorial/kpa/articles/article-art-120.ts
app/data/legal-library/editorial/kpa/articles/article-art-121.ts
app/data/legal-library/editorial/kpa/articles/article-art-121a.ts
app/data/legal-library/editorial/kpa/articles/article-art-122.ts
app/data/legal-library/editorial/kpa/articles/article-art-122a.ts
app/data/legal-library/editorial/kpa/articles/article-art-122b.ts
app/data/legal-library/editorial/kpa/articles/article-art-122c.ts
app/data/legal-library/editorial/kpa/articles/article-art-122d.ts
app/data/legal-library/editorial/kpa/articles/article-art-122e.ts
app/data/legal-library/editorial/kpa/articles/article-art-122f.ts
app/data/legal-library/editorial/kpa/articles/article-art-122g.ts
app/data/legal-library/editorial/kpa/articles/article-art-122h.ts
app/data/legal-library/editorial/kpa/articles/article-art-123.ts
app/data/legal-library/editorial/kpa/articles/article-art-124.ts
app/data/legal-library/editorial/kpa/articles/article-art-125.ts
app/data/legal-library/editorial/kpa/articles/article-art-126.ts
app/data/legal-library/editorial/kpa/articles/article-art-127.ts
app/data/legal-library/editorial/kpa/articles/article-art-127a.ts
app/data/legal-library/editorial/kpa/articles/article-art-128.ts
app/data/legal-library/editorial/kpa/articles/article-art-129.ts
app/data/legal-library/editorial/kpa/articles/article-art-13.ts
app/data/legal-library/editorial/kpa/articles/article-art-130.ts
app/data/legal-library/editorial/kpa/articles/article-art-131.ts
app/data/legal-library/editorial/kpa/articles/article-art-132.ts
app/data/legal-library/editorial/kpa/articles/article-art-133.ts
app/data/legal-library/editorial/kpa/articles/article-art-134.ts
app/data/legal-library/editorial/kpa/articles/article-art-135.ts
app/data/legal-library/editorial/kpa/articles/article-art-136.ts
app/data/legal-library/editorial/kpa/articles/article-art-137.ts
app/data/legal-library/editorial/kpa/articles/article-art-138.ts
app/data/legal-library/editorial/kpa/articles/article-art-139.ts
app/data/legal-library/editorial/kpa/articles/article-art-139a.ts
app/data/legal-library/editorial/kpa/articles/article-art-14.ts
app/data/legal-library/editorial/kpa/articles/article-art-140.ts
app/data/legal-library/editorial/kpa/articles/article-art-141.ts
app/data/legal-library/editorial/kpa/articles/article-art-142.ts
app/data/legal-library/editorial/kpa/articles/article-art-143.ts
app/data/legal-library/editorial/kpa/articles/article-art-144.ts
app/data/legal-library/editorial/kpa/articles/article-art-145.ts
app/data/legal-library/editorial/kpa/articles/article-art-145a.ts
app/data/legal-library/editorial/kpa/articles/article-art-145aa.ts
app/data/legal-library/editorial/kpa/articles/article-art-145b.ts
app/data/legal-library/editorial/kpa/articles/article-art-146.ts
app/data/legal-library/editorial/kpa/articles/article-art-147.ts
app/data/legal-library/editorial/kpa/articles/article-art-148.ts
app/data/legal-library/editorial/kpa/articles/article-art-149.ts
app/data/legal-library/editorial/kpa/articles/article-art-14a.ts
app/data/legal-library/editorial/kpa/articles/article-art-15.ts
app/data/legal-library/editorial/kpa/articles/article-art-150.ts
app/data/legal-library/editorial/kpa/articles/article-art-151.ts
app/data/legal-library/editorial/kpa/articles/article-art-152.ts
app/data/legal-library/editorial/kpa/articles/article-art-153.ts
app/data/legal-library/editorial/kpa/articles/article-art-154.ts
app/data/legal-library/editorial/kpa/articles/article-art-155.ts
app/data/legal-library/editorial/kpa/articles/article-art-155a.ts
app/data/legal-library/editorial/kpa/articles/article-art-156.ts
app/data/legal-library/editorial/kpa/articles/article-art-157.ts
app/data/legal-library/editorial/kpa/articles/article-art-158.ts
app/data/legal-library/editorial/kpa/articles/article-art-159.ts
app/data/legal-library/editorial/kpa/articles/article-art-16.ts
app/data/legal-library/editorial/kpa/articles/article-art-160.ts
app/data/legal-library/editorial/kpa/articles/article-art-161.ts
app/data/legal-library/editorial/kpa/articles/article-art-162.ts
app/data/legal-library/editorial/kpa/articles/article-art-163.ts
app/data/legal-library/editorial/kpa/articles/article-art-163a.ts
app/data/legal-library/editorial/kpa/articles/article-art-163b.ts
app/data/legal-library/editorial/kpa/articles/article-art-163c.ts
app/data/legal-library/editorial/kpa/articles/article-art-163d.ts
app/data/legal-library/editorial/kpa/articles/article-art-163e.ts
app/data/legal-library/editorial/kpa/articles/article-art-163f.ts
app/data/legal-library/editorial/kpa/articles/article-art-163g.ts
app/data/legal-library/editorial/kpa/articles/article-art-17.ts
app/data/legal-library/editorial/kpa/articles/article-art-18.ts
app/data/legal-library/editorial/kpa/articles/article-art-180.ts
app/data/legal-library/editorial/kpa/articles/article-art-181.ts
app/data/legal-library/editorial/kpa/articles/article-art-182.ts
app/data/legal-library/editorial/kpa/articles/article-art-183.ts
app/data/legal-library/editorial/kpa/articles/article-art-184.ts
app/data/legal-library/editorial/kpa/articles/article-art-185.ts
app/data/legal-library/editorial/kpa/articles/article-art-186.ts
app/data/legal-library/editorial/kpa/articles/article-art-187.ts
app/data/legal-library/editorial/kpa/articles/article-art-188.ts
app/data/legal-library/editorial/kpa/articles/article-art-189.ts
app/data/legal-library/editorial/kpa/articles/article-art-189a.ts
app/data/legal-library/editorial/kpa/articles/article-art-189b.ts
app/data/legal-library/editorial/kpa/articles/article-art-189c.ts
app/data/legal-library/editorial/kpa/articles/article-art-189d.ts
app/data/legal-library/editorial/kpa/articles/article-art-189e.ts
app/data/legal-library/editorial/kpa/articles/article-art-189f.ts
app/data/legal-library/editorial/kpa/articles/article-art-189g.ts
app/data/legal-library/editorial/kpa/articles/article-art-189h.ts
app/data/legal-library/editorial/kpa/articles/article-art-189i.ts
app/data/legal-library/editorial/kpa/articles/article-art-189j.ts
app/data/legal-library/editorial/kpa/articles/article-art-189k.ts
app/data/legal-library/editorial/kpa/articles/article-art-189l.ts
app/data/legal-library/editorial/kpa/articles/article-art-19.ts
app/data/legal-library/editorial/kpa/articles/article-art-2.ts
app/data/legal-library/editorial/kpa/articles/article-art-20.ts
app/data/legal-library/editorial/kpa/articles/article-art-21.ts
app/data/legal-library/editorial/kpa/articles/article-art-217.ts
app/data/legal-library/editorial/kpa/articles/article-art-217a.ts
app/data/legal-library/editorial/kpa/articles/article-art-218.ts
app/data/legal-library/editorial/kpa/articles/article-art-219.ts
app/data/legal-library/editorial/kpa/articles/article-art-22.ts
app/data/legal-library/editorial/kpa/articles/article-art-220.ts
app/data/legal-library/editorial/kpa/articles/article-art-221.ts
app/data/legal-library/editorial/kpa/articles/article-art-222.ts
app/data/legal-library/editorial/kpa/articles/article-art-223.ts
app/data/legal-library/editorial/kpa/articles/article-art-224.ts
app/data/legal-library/editorial/kpa/articles/article-art-225.ts
app/data/legal-library/editorial/kpa/articles/article-art-226.ts
app/data/legal-library/editorial/kpa/articles/article-art-226a.ts
app/data/legal-library/editorial/kpa/articles/article-art-227.ts
app/data/legal-library/editorial/kpa/articles/article-art-228.ts
app/data/legal-library/editorial/kpa/articles/article-art-229.ts
app/data/legal-library/editorial/kpa/articles/article-art-23.ts
app/data/legal-library/editorial/kpa/articles/article-art-230.ts
app/data/legal-library/editorial/kpa/articles/article-art-231.ts
app/data/legal-library/editorial/kpa/articles/article-art-232.ts
app/data/legal-library/editorial/kpa/articles/article-art-233.ts
app/data/legal-library/editorial/kpa/articles/article-art-234.ts
app/data/legal-library/editorial/kpa/articles/article-art-235.ts
app/data/legal-library/editorial/kpa/articles/article-art-236.ts
app/data/legal-library/editorial/kpa/articles/article-art-237.ts
app/data/legal-library/editorial/kpa/articles/article-art-238.ts
app/data/legal-library/editorial/kpa/articles/article-art-239.ts
app/data/legal-library/editorial/kpa/articles/article-art-24.ts
app/data/legal-library/editorial/kpa/articles/article-art-240.ts
app/data/legal-library/editorial/kpa/articles/article-art-241.ts
app/data/legal-library/editorial/kpa/articles/article-art-242.ts
app/data/legal-library/editorial/kpa/articles/article-art-243.ts
app/data/legal-library/editorial/kpa/articles/article-art-244.ts
app/data/legal-library/editorial/kpa/articles/article-art-245.ts
app/data/legal-library/editorial/kpa/articles/article-art-246.ts
app/data/legal-library/editorial/kpa/articles/article-art-247.ts
app/data/legal-library/editorial/kpa/articles/article-art-248.ts
app/data/legal-library/editorial/kpa/articles/article-art-249.ts
app/data/legal-library/editorial/kpa/articles/article-art-25.ts
app/data/legal-library/editorial/kpa/articles/article-art-250.ts
app/data/legal-library/editorial/kpa/articles/article-art-251.ts
app/data/legal-library/editorial/kpa/articles/article-art-252.ts
app/data/legal-library/editorial/kpa/articles/article-art-253.ts
app/data/legal-library/editorial/kpa/articles/article-art-254.ts
app/data/legal-library/editorial/kpa/articles/article-art-255.ts
app/data/legal-library/editorial/kpa/articles/article-art-256.ts
app/data/legal-library/editorial/kpa/articles/article-art-257.ts
app/data/legal-library/editorial/kpa/articles/article-art-258.ts
app/data/legal-library/editorial/kpa/articles/article-art-259.ts
app/data/legal-library/editorial/kpa/articles/article-art-26.ts
app/data/legal-library/editorial/kpa/articles/article-art-260.ts
app/data/legal-library/editorial/kpa/articles/article-art-260a.ts
app/data/legal-library/editorial/kpa/articles/article-art-260b.ts
app/data/legal-library/editorial/kpa/articles/article-art-260c.ts
app/data/legal-library/editorial/kpa/articles/article-art-260d.ts
app/data/legal-library/editorial/kpa/articles/article-art-260e.ts
app/data/legal-library/editorial/kpa/articles/article-art-260f.ts
app/data/legal-library/editorial/kpa/articles/article-art-260g.ts
app/data/legal-library/editorial/kpa/articles/article-art-261.ts
app/data/legal-library/editorial/kpa/articles/article-art-262.ts
app/data/legal-library/editorial/kpa/articles/article-art-263.ts
app/data/legal-library/editorial/kpa/articles/article-art-263a.ts
app/data/legal-library/editorial/kpa/articles/article-art-264.ts
app/data/legal-library/editorial/kpa/articles/article-art-265.ts
app/data/legal-library/editorial/kpa/articles/article-art-266.ts
app/data/legal-library/editorial/kpa/articles/article-art-267.ts
app/data/legal-library/editorial/kpa/articles/article-art-268.ts
app/data/legal-library/editorial/kpa/articles/article-art-268a.ts
app/data/legal-library/editorial/kpa/articles/article-art-269.ts
app/data/legal-library/editorial/kpa/articles/article-art-27.ts
app/data/legal-library/editorial/kpa/articles/article-art-27a.ts
app/data/legal-library/editorial/kpa/articles/article-art-28.ts
app/data/legal-library/editorial/kpa/articles/article-art-29.ts
app/data/legal-library/editorial/kpa/articles/article-art-2a.ts
app/data/legal-library/editorial/kpa/articles/article-art-3.ts
app/data/legal-library/editorial/kpa/articles/article-art-30.ts
app/data/legal-library/editorial/kpa/articles/article-art-31.ts
app/data/legal-library/editorial/kpa/articles/article-art-32.ts
app/data/legal-library/editorial/kpa/articles/article-art-33.ts
app/data/legal-library/editorial/kpa/articles/article-art-34.ts
app/data/legal-library/editorial/kpa/articles/article-art-35.ts
app/data/legal-library/editorial/kpa/articles/article-art-36.ts
app/data/legal-library/editorial/kpa/articles/article-art-37.ts
app/data/legal-library/editorial/kpa/articles/article-art-38.ts
app/data/legal-library/editorial/kpa/articles/article-art-39-1.ts
app/data/legal-library/editorial/kpa/articles/article-art-39-2.ts
app/data/legal-library/editorial/kpa/articles/article-art-39-3.ts
app/data/legal-library/editorial/kpa/articles/article-art-39-4.ts
app/data/legal-library/editorial/kpa/articles/article-art-39.ts
app/data/legal-library/editorial/kpa/articles/article-art-4.ts
app/data/legal-library/editorial/kpa/articles/article-art-40.ts
app/data/legal-library/editorial/kpa/articles/article-art-41.ts
app/data/legal-library/editorial/kpa/articles/article-art-42.ts
app/data/legal-library/editorial/kpa/articles/article-art-43.ts
app/data/legal-library/editorial/kpa/articles/article-art-44.ts
app/data/legal-library/editorial/kpa/articles/article-art-45.ts
app/data/legal-library/editorial/kpa/articles/article-art-45a.ts
app/data/legal-library/editorial/kpa/articles/article-art-46.ts
app/data/legal-library/editorial/kpa/articles/article-art-47.ts
app/data/legal-library/editorial/kpa/articles/article-art-48.ts
app/data/legal-library/editorial/kpa/articles/article-art-49.ts
app/data/legal-library/editorial/kpa/articles/article-art-49a.ts
app/data/legal-library/editorial/kpa/articles/article-art-49b.ts
app/data/legal-library/editorial/kpa/articles/article-art-5.ts
app/data/legal-library/editorial/kpa/articles/article-art-50.ts
app/data/legal-library/editorial/kpa/articles/article-art-51.ts
app/data/legal-library/editorial/kpa/articles/article-art-52.ts
app/data/legal-library/editorial/kpa/articles/article-art-53.ts
app/data/legal-library/editorial/kpa/articles/article-art-54.ts
app/data/legal-library/editorial/kpa/articles/article-art-55.ts
app/data/legal-library/editorial/kpa/articles/article-art-56.ts
app/data/legal-library/editorial/kpa/articles/article-art-57.ts
app/data/legal-library/editorial/kpa/articles/article-art-58.ts
app/data/legal-library/editorial/kpa/articles/article-art-59.ts
app/data/legal-library/editorial/kpa/articles/article-art-6.ts
app/data/legal-library/editorial/kpa/articles/article-art-60.ts
app/data/legal-library/editorial/kpa/articles/article-art-61.ts
app/data/legal-library/editorial/kpa/articles/article-art-61a.ts
app/data/legal-library/editorial/kpa/articles/article-art-62.ts
app/data/legal-library/editorial/kpa/articles/article-art-63.ts
app/data/legal-library/editorial/kpa/articles/article-art-64.ts
app/data/legal-library/editorial/kpa/articles/article-art-65.ts
app/data/legal-library/editorial/kpa/articles/article-art-66.ts
app/data/legal-library/editorial/kpa/articles/article-art-66a.ts
app/data/legal-library/editorial/kpa/articles/article-art-67.ts
app/data/legal-library/editorial/kpa/articles/article-art-68.ts
app/data/legal-library/editorial/kpa/articles/article-art-69.ts
app/data/legal-library/editorial/kpa/articles/article-art-7.ts
app/data/legal-library/editorial/kpa/articles/article-art-70.ts
app/data/legal-library/editorial/kpa/articles/article-art-71.ts
app/data/legal-library/editorial/kpa/articles/article-art-72.ts
app/data/legal-library/editorial/kpa/articles/article-art-73.ts
app/data/legal-library/editorial/kpa/articles/article-art-74.ts
app/data/legal-library/editorial/kpa/articles/article-art-74a.ts
app/data/legal-library/editorial/kpa/articles/article-art-75.ts
app/data/legal-library/editorial/kpa/articles/article-art-76.ts
app/data/legal-library/editorial/kpa/articles/article-art-76a.ts
app/data/legal-library/editorial/kpa/articles/article-art-77.ts
app/data/legal-library/editorial/kpa/articles/article-art-78.ts
app/data/legal-library/editorial/kpa/articles/article-art-79.ts
app/data/legal-library/editorial/kpa/articles/article-art-79a.ts
app/data/legal-library/editorial/kpa/articles/article-art-7a.ts
app/data/legal-library/editorial/kpa/articles/article-art-7b.ts
app/data/legal-library/editorial/kpa/articles/article-art-8.ts
app/data/legal-library/editorial/kpa/articles/article-art-80.ts
app/data/legal-library/editorial/kpa/articles/article-art-81.ts
app/data/legal-library/editorial/kpa/articles/article-art-81a.ts
app/data/legal-library/editorial/kpa/articles/article-art-82.ts
app/data/legal-library/editorial/kpa/articles/article-art-83.ts
app/data/legal-library/editorial/kpa/articles/article-art-84.ts
app/data/legal-library/editorial/kpa/articles/article-art-85.ts
app/data/legal-library/editorial/kpa/articles/article-art-86.ts
app/data/legal-library/editorial/kpa/articles/article-art-87.ts
app/data/legal-library/editorial/kpa/articles/article-art-88.ts
app/data/legal-library/editorial/kpa/articles/article-art-88a.ts
app/data/legal-library/editorial/kpa/articles/article-art-89.ts
app/data/legal-library/editorial/kpa/articles/article-art-9.ts
app/data/legal-library/editorial/kpa/articles/article-art-90.ts
app/data/legal-library/editorial/kpa/articles/article-art-91.ts
app/data/legal-library/editorial/kpa/articles/article-art-92.ts
app/data/legal-library/editorial/kpa/articles/article-art-93.ts
app/data/legal-library/editorial/kpa/articles/article-art-93a.ts
app/data/legal-library/editorial/kpa/articles/article-art-94.ts
app/data/legal-library/editorial/kpa/articles/article-art-95.ts
app/data/legal-library/editorial/kpa/articles/article-art-96.ts
app/data/legal-library/editorial/kpa/articles/article-art-96a.ts
app/data/legal-library/editorial/kpa/articles/article-art-96b.ts
app/data/legal-library/editorial/kpa/articles/article-art-96c.ts
app/data/legal-library/editorial/kpa/articles/article-art-96d.ts
app/data/legal-library/editorial/kpa/articles/article-art-96e.ts
app/data/legal-library/editorial/kpa/articles/article-art-96f.ts
app/data/legal-library/editorial/kpa/articles/article-art-96g.ts
app/data/legal-library/editorial/kpa/articles/article-art-96h.ts
app/data/legal-library/editorial/kpa/articles/article-art-96i.ts
app/data/legal-library/editorial/kpa/articles/article-art-96j.ts
app/data/legal-library/editorial/kpa/articles/article-art-96k.ts
app/data/legal-library/editorial/kpa/articles/article-art-96l.ts
app/data/legal-library/editorial/kpa/articles/article-art-96m.ts
app/data/legal-library/editorial/kpa/articles/article-art-96n.ts
app/data/legal-library/editorial/kpa/articles/article-art-97.ts
app/data/legal-library/editorial/kpa/articles/article-art-98.ts
app/data/legal-library/editorial/kpa/articles/article-art-99.ts
app/data/legal-library/editorial/kpa/index.test.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-218a.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-219a.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-219g.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-222a.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-222b.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-223a.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-225a.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-225i.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-229.ts
app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-281a.ts
app/data/legal-library/learning/kpa.ts
app/data/legal-library/learning/modules/kpa/anatomy.ts
app/data/legal-library/learning/modules/kpa/appeal.ts
app/data/legal-library/learning/modules/kpa/authority.ts
app/data/legal-library/learning/modules/kpa/court.ts
app/data/legal-library/learning/modules/kpa/decisions.ts
app/data/legal-library/learning/modules/kpa/delay.ts
app/data/legal-library/learning/modules/kpa/extraordinary.ts
app/data/legal-library/learning/modules/kpa/files-evidence.ts
app/data/legal-library/learning/modules/kpa/initiation.ts
app/data/legal-library/learning/modules/kpa/party.ts
app/data/legal-library/learning/modules/kpa/principles.ts
app/data/legal-library/learning/modules/kpa/silence.ts
app/data/legal-library/learning/modules/kpa/summons.ts
app/data/legal-library/learning/modules/kpa/system.ts
app/data/legal-library/learning/modules/kpa/time-service.ts
app/data/legal-library/learning/modules/ustawa-o-cudzoziemcach/cards-and-documents.ts
app/data/legal-map/data.ts
app/data/legal-map/editorial/topics/appeal.ts
app/data/legal-map/editorial/topics/blue-card.ts
app/data/legal-map/editorial/topics/business-stay.ts
app/data/legal-map/editorial/topics/case-file.ts
app/data/legal-map/editorial/topics/complaint.ts
app/data/legal-map/editorial/topics/cukr-route-2026.ts
app/data/legal-map/editorial/topics/deadlines-delivery.ts
app/data/legal-map/editorial/topics/decision-appeal.ts
app/data/legal-map/editorial/topics/decision-reading.ts
app/data/legal-map/editorial/topics/decision-workflow.ts
app/data/legal-map/editorial/topics/declaration.ts
app/data/legal-map/editorial/topics/delegation.ts
app/data/legal-map/editorial/topics/document-matrix.ts
app/data/legal-map/editorial/topics/document-types.ts
app/data/legal-map/editorial/topics/employer-duties.ts
app/data/legal-map/editorial/topics/entry-current-basis.ts
app/data/legal-map/editorial/topics/evidence-matrix.ts
app/data/legal-map/editorial/topics/evidence.ts
app/data/legal-map/editorial/topics/extraordinary-wsa.ts
app/data/legal-map/editorial/topics/family-stay.ts
app/data/legal-map/editorial/topics/foreign-documents.ts
app/data/legal-map/editorial/topics/goal-of-stay.ts
app/data/legal-map/editorial/topics/inactivity.ts
app/data/legal-map/editorial/topics/initiation.ts
app/data/legal-map/editorial/topics/invalidity.ts
app/data/legal-map/editorial/topics/kpa-principles.ts
app/data/legal-map/editorial/topics/legal-anatomy.ts
app/data/legal-map/editorial/topics/long-term-eu.ts
app/data/legal-map/editorial/topics/mos-procedure.ts
app/data/legal-map/editorial/topics/organ-party.ts
app/data/legal-map/editorial/topics/other-stay.ts
app/data/legal-map/editorial/topics/outsourcing-case.ts
app/data/legal-map/editorial/topics/pending-stay.ts
app/data/legal-map/editorial/topics/permanent-resident.ts
app/data/legal-map/editorial/topics/permanent.ts
app/data/legal-map/editorial/topics/person-status.ts
app/data/legal-map/editorial/topics/principle-legality.ts
app/data/legal-map/editorial/topics/principle-participation.ts
app/data/legal-map/editorial/topics/principle-trust.ts
app/data/legal-map/editorial/topics/principle-two-instance.ts
app/data/legal-map/editorial/topics/reopening.ts
app/data/legal-map/editorial/topics/seasonal.ts
app/data/legal-map/editorial/topics/source-check.ts
app/data/legal-map/editorial/topics/special-vs-kpa.ts
app/data/legal-map/editorial/topics/start-case.ts
app/data/legal-map/editorial/topics/stay-work.ts
app/data/legal-map/editorial/topics/study-loop.ts
app/data/legal-map/editorial/topics/study-research.ts
app/data/legal-map/editorial/topics/temporary-common.ts
app/data/legal-map/editorial/topics/temporary-goals.ts
app/data/legal-map/editorial/topics/temporary-work.ts
app/data/legal-map/editorial/topics/two-keys.ts
app/data/legal-map/editorial/topics/ukr-baseline-2026.ts
app/data/legal-map/editorial/topics/ukraine-ordinary-2026.ts
app/data/legal-map/editorial/topics/ukraine-routes-2026.ts
app/data/legal-map/editorial/topics/visa-free.ts
app/data/legal-map/editorial/topics/visa.ts
app/data/legal-map/editorial/topics/wezwanie-workflow.ts
app/data/legal-map/editorial/topics/wezwanie.ts
app/data/legal-map/editorial/topics/work-entry.ts
app/data/legal-map/editorial/topics/work-instruments.ts
app/data/legal-map/editorial/topics/work-permit.ts
app/data/legal-map/editorial/topics/wsa.ts
app/data/shared/legal-meta.ts
app/features/law-library/ui/kpa/kpa-articles-content.tsx
app/features/law-library/ui/learning/legal-learning-module-content.test.tsx
legal-corpus/promotions/powierzanie-pracy-powierzanie-pracy-2025-621-u-2026-07-18.json`. If no file was changed, say `none`.

### Validation results

Report the deterministic checks requested by the packet, for example:

- source/manifest identity and official URL check;
- structured status/timing evidence check (`status`, `inForce`, consolidated-text identity, amendments, exact entry-into-force and transitional-rule locators/results, timestamps, empty unresolved list);
- provision ID, locator, integer page bounds, PDF-checksum binding, hierarchy, and source-hash check;
- edition diff and dependant review check;
- explanation schema, source-edition, claim-label, related-reference, and HTTPS-link check;
- `npm.cmd run typecheck`;
- `npm.cmd run build`;
- approved-scope/diff check, including canonical path, traversal/absolute/glob/symlink/forbidden-path rejection and exact changed-file-set comparison.

Do not claim a command passed if it was not run. If a command is unavailable, say so and mark the result unresolved.

### Promotion recommendation

Return exactly one of:

- **`BLOCK`** — any uncertainty, fatal diagnostic, missing official source, invalid locator/ID, unresolved transition rule, failed validation, stale required explanation, or scope violation remains;
- **`HOLD`** — deterministic validation can proceed, but editorial review or explicit human approval is incomplete;
- **`READY_FOR_EXPLICIT_PROMOTION`** — all required official checks, editorial review, deterministic validations, and scope checks pass. This is only a recommendation; the reviewer must still run the explicit promotion procedure.

Never perform promotion from this prompt. A new edition stays non-current until the separate, explicit promotion step accepts this recommendation and records human approval.

## Uncertainty fallback

When facts or law remain uncertain:

1. state the uncertainty and the exact source/provision involved;
2. avoid a confident legal conclusion;
3. preserve the last reviewed explanation rather than silently replacing it with a guess;
4. mark the affected explanation `blocked` or `stale` as appropriate;
5. recommend `BLOCK` or `HOLD`, never `READY_FOR_EXPLICIT_PROMOTION`;
6. request a deterministic source-artifact fix or an explicit human legal review.

Silence is not a fallback. An unresolved issue must remain visible in this report and in the work-order validation result.


## Generated typed-reference dependants

Review these authored file/line references for every changed or removed provision before completing the work order. The scanner is static and only reports supported literal call patterns.

- `ustawa-o-cudzoziemcach-art-1`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-1.ts:59`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-1.ts:64`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-1.ts:68`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-1.ts:82`
  - `app/data/legal-library/learning/document-reading-guides.ts:165`
- `ustawa-o-cudzoziemcach-art-10`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-10.ts:66`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-10.ts:70`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-10.ts:83`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-10.ts:84`
- `ustawa-o-cudzoziemcach-art-100`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-132.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-132.ts:28`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-133.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-133.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-137c.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-137c.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-137c.ts:30`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-137c.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139g.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139g.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139s.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-141.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-141.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-143.ts:26`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-147.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-148.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-148.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-154.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-154a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-154a.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157d.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157e.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157e.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157e.ts:41`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157k.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157k.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157k.ts:40`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-164.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-164.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-164.ts:30`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-164.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-165.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-165.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-165.ts:35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-165.ts:43`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-166.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-166.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-166.ts:35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-166.ts:40`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-178.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-178.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-178.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-180.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-180.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-180.ts:36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-184.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-184.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-184.ts:30`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-184.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-185.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-185.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-185.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-185b.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-185b.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-185b.ts:30`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-185b.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-185c.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-185c.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-185c.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-191.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-191.ts:26`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-191.ts:30`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-191.ts:30`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-191.ts:34`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-191.ts:42`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-191.ts:43`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-192.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-192.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-192.ts:35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-192.ts:39`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-192.ts:44`
- `ustawa-o-cudzoziemcach-art-101`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-122.ts:22`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-123.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-123.ts:26`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-133.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-133.ts:35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139g.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139g.ts:22`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-148.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-154a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157e.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157k.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-166.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-166.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-166.ts:35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-166.ts:40`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-180.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-180.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-192.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-192.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-192.ts:35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-192.ts:39`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-192.ts:44`
- `ustawa-o-cudzoziemcach-art-102`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-249.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-249.ts:32`
- `ustawa-o-cudzoziemcach-art-103`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-104`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-104.ts:19`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-104.ts:41`
- `ustawa-o-cudzoziemcach-art-105`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-105.ts:19`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-106j.ts:19`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-106j.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-225c.ts:18`
- `ustawa-o-cudzoziemcach-art-106`
  - `app/data/legal-library/editorial/rozporzadzenie-wniosek-pobyt-czasowy/articles/article-par-2.ts:22`
  - `app/data/legal-library/editorial/rozporzadzenie-wniosek-pobyt-czasowy/articles/article-par-2.ts:22`
  - `app/data/legal-library/editorial/rozporzadzenie-wniosek-pobyt-czasowy/articles/article-par-2.ts:43`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-106.ts:19`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-106.ts:42`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-106c.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-106j.ts:19`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-106j.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-107.ts:28`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-114.ts:29`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-120a.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-225d.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-225f.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-225f.ts:37`
- `ustawa-o-cudzoziemcach-art-106a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-106a.ts:19`
- `ustawa-o-cudzoziemcach-art-107`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-107.ts:19`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-107.ts:41`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-168.ts:19`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-168a.ts:19`
- `ustawa-o-cudzoziemcach-art-108`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-108.ts:19`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139l.ts:19`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139l.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139t.ts:28`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139t.ts:28`
- `ustawa-o-cudzoziemcach-art-109`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-109a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-109a.ts:21`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-109a.ts:26`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-109a.ts:35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-15b.ts:21`
- `ustawa-o-cudzoziemcach-art-109b`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-109b.ts:21`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-109b.ts:26`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-109b.ts:35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-15b.ts:21`
- `ustawa-o-cudzoziemcach-art-11`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-11.ts:68`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-11.ts:86`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-11.ts:87`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-12.ts:82`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-169.ts:40`
- `ustawa-o-cudzoziemcach-art-111`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-112a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-112a.ts:19`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-120a.ts:36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-137d.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-137d.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-137d.ts:34`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-137d.ts:35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-166b.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-166b.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-166b.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-166b.ts:34`
- `ustawa-o-cudzoziemcach-art-113`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-113a`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-113b`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-144.ts:42`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-151.ts:41`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-151b.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-151b.ts:42`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157a.ts:42`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157g.ts:42`
- `ustawa-o-cudzoziemcach-art-114`
  - `app/data/legal-library/editorial/powierzanie-pracy/articles/article-art-24.ts:20`
  - `app/data/legal-library/editorial/powierzanie-pracy/articles/article-art-24.ts:34`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-114.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-123.ts:22`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-123.ts:35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-126.ts:27`
- `ustawa-o-cudzoziemcach-art-114a`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-115`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-126.ts:31`
- `ustawa-o-cudzoziemcach-art-116`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-117`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-126.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-143.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-143.ts:30`
- `ustawa-o-cudzoziemcach-art-117a`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-117b`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-118`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-126.ts:31`
- `ustawa-o-cudzoziemcach-art-119`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-12`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-12.ts:68`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-12.ts:81`
- `ustawa-o-cudzoziemcach-art-120`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-121.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-121.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-121.ts:42`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-303.ts:39`
- `ustawa-o-cudzoziemcach-art-120a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-120a.ts:19`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-120b.ts:18`
- `ustawa-o-cudzoziemcach-art-120b`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-120b.ts:18`
- `ustawa-o-cudzoziemcach-art-121`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-121.ts:18`
- `ustawa-o-cudzoziemcach-art-122`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-122.ts:18`
- `ustawa-o-cudzoziemcach-art-123`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-123.ts:18`
- `ustawa-o-cudzoziemcach-art-124`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-124.ts:18`
- `ustawa-o-cudzoziemcach-art-125`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-125.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-125.ts:22`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-125.ts:31`
- `ustawa-o-cudzoziemcach-art-126`
  - `app/data/legal-library/editorial/powierzanie-pracy/articles/article-art-24.ts:20`
  - `app/data/legal-library/editorial/powierzanie-pracy/articles/article-art-24.ts:34`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-126.ts:18`
- `ustawa-o-cudzoziemcach-art-127`
  - `app/data/legal-library/editorial/powierzanie-pracy/articles/article-art-24.ts:20`
  - `app/data/legal-library/editorial/powierzanie-pracy/articles/article-art-24.ts:34`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-127.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-127.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-127a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-127a.ts:38`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-128.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-129.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-129.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-129.ts:22`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-129.ts:26`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-129.ts:30`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-129.ts:33`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-129.ts:33`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-130.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-131.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-131.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-131.ts:41`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-132.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-132.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-133.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-133.ts:35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-133.ts:40`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-133a.ts:29`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-133a.ts:42`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-134.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-134a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-137.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-137.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-137.ts:30`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-137.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-138.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-138.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-145a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-145a.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-155.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-155.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157c.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157c.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157i.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157i.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-166a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-166a.ts:35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-190a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-190a.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-229.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-241.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-241.ts:32`
- `ustawa-o-cudzoziemcach-art-127a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-127a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-132.ts:32`
- `ustawa-o-cudzoziemcach-art-128`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-128.ts:18`
- `ustawa-o-cudzoziemcach-art-129`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-129.ts:18`
- `ustawa-o-cudzoziemcach-art-13`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-120a.ts:28`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-13.ts:19`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-13.ts:42`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-13.ts:43`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-225d.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-231.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-365.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-365.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-365.ts:37`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-439.ts:37`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-77c.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-77c.ts:31`
- `ustawa-o-cudzoziemcach-art-130`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-130.ts:18`
- `ustawa-o-cudzoziemcach-art-131`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-131.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-137e.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-137e.ts:30`
- `ustawa-o-cudzoziemcach-art-132`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-132.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-133.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-133.ts:27`
- `ustawa-o-cudzoziemcach-art-133`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-133.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-133a.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-133a.ts:29`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-133a.ts:33`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-137e.ts:18`
- `ustawa-o-cudzoziemcach-art-133a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-133a.ts:20`
- `ustawa-o-cudzoziemcach-art-134`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-133.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-133.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-133.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-133.ts:40`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-134.ts:18`
- `ustawa-o-cudzoziemcach-art-134a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-134a.ts:18`
- `ustawa-o-cudzoziemcach-art-135`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-135.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-135.ts:22`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-135.ts:32`
- `ustawa-o-cudzoziemcach-art-136`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-136.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-136.ts:22`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-136.ts:31`
- `ustawa-o-cudzoziemcach-art-137`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-137.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-137e.ts:18`
- `ustawa-o-cudzoziemcach-art-137a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-137a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-137b.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-137b.ts:33`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-137c.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-137c.ts:30`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-137d.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-137e.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-137e.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-138.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-229.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-241.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-241.ts:32`
- `ustawa-o-cudzoziemcach-art-137b`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-137b.ts:18`
- `ustawa-o-cudzoziemcach-art-137c`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-137c.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-137c.ts:31`
- `ustawa-o-cudzoziemcach-art-137d`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-137d.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-137d.ts:34`
- `ustawa-o-cudzoziemcach-art-137e`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-137e.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-137e.ts:31`
- `ustawa-o-cudzoziemcach-art-138`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-138.ts:18`
- `ustawa-o-cudzoziemcach-art-138a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-138a.ts:23`
- `ustawa-o-cudzoziemcach-art-138b`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-138b.ts:18`
- `ustawa-o-cudzoziemcach-art-139`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139.ts:22`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139.ts:30`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139.ts:31`
- `ustawa-o-cudzoziemcach-art-139a`
  - `app/data/legal-library/editorial/rozporzadzenie-wniosek-pobyt-czasowy/articles/article-par-5.ts:22`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-104.ts:19`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-106j.ts:19`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-106k.ts:19`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139b.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139d.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139d.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139e.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139e.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139e.ts:35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139f.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139g.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139h.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139h.ts:26`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139j.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139k.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139l.ts:19`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-145a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-145a.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-155.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157c.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157c.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157i.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157i.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-166a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-166a.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-190a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-190a.ts:31`
- `ustawa-o-cudzoziemcach-art-139b`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139b.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139b.ts:26`
- `ustawa-o-cudzoziemcach-art-139c`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139c.ts:18`
- `ustawa-o-cudzoziemcach-art-139d`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139d.ts:18`
- `ustawa-o-cudzoziemcach-art-139e`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139e.ts:18`
- `ustawa-o-cudzoziemcach-art-139f`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139f.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139g.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139g.ts:31`
- `ustawa-o-cudzoziemcach-art-139g`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139g.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139g.ts:36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139u.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139u.ts:26`
- `ustawa-o-cudzoziemcach-art-139h`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139h.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139u.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139u.ts:26`
- `ustawa-o-cudzoziemcach-art-139i`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-139j`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139j.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139u.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139u.ts:26`
- `ustawa-o-cudzoziemcach-art-139k`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139k.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139u.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139u.ts:26`
- `ustawa-o-cudzoziemcach-art-139l`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139l.ts:19`
- `ustawa-o-cudzoziemcach-art-139m`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139m.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139u.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139u.ts:26`
- `ustawa-o-cudzoziemcach-art-139ma`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139ma.ts:18`
- `ustawa-o-cudzoziemcach-art-139n`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139n.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139r.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139r.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139r.ts:35`
- `ustawa-o-cudzoziemcach-art-139o`
  - `app/data/legal-library/editorial/rozporzadzenie-wniosek-pobyt-czasowy/articles/article-par-5.ts:22`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-104.ts:19`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-106j.ts:19`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-106k.ts:19`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139o.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139p.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139q.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139q.ts:33`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139r.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139r.ts:34`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139s.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139t.ts:19`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139u.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139u.ts:22`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139w.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139w.ts:22`
- `ustawa-o-cudzoziemcach-art-139p`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139p.ts:18`
- `ustawa-o-cudzoziemcach-art-139q`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139q.ts:18`
- `ustawa-o-cudzoziemcach-art-139r`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139r.ts:18`
- `ustawa-o-cudzoziemcach-art-139s`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139s.ts:18`
- `ustawa-o-cudzoziemcach-art-139t`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139t.ts:19`
- `ustawa-o-cudzoziemcach-art-139u`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139u.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139u.ts:22`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139u.ts:31`
- `ustawa-o-cudzoziemcach-art-139w`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139w.ts:18`
- `ustawa-o-cudzoziemcach-art-14`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-14.ts:59`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-14.ts:63`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-14.ts:71`
- `ustawa-o-cudzoziemcach-art-140`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-140.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-140.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-142.ts:47`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-163.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-163.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-163.ts:37`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-185a.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-185a.ts:51`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-188.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-188.ts:39`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-188.ts:47`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-195.ts:42`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-211.ts:23`
- `ustawa-o-cudzoziemcach-art-141`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-141.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-141.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-508.ts:27`
- `ustawa-o-cudzoziemcach-art-142`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-126.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-142.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-142.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-142a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-142a.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-142a.ts:46`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-143.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-143.ts:22`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-143.ts:33`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-143.ts:34`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-143a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-143a.ts:27`
- `ustawa-o-cudzoziemcach-art-142a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-142a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-142a.ts:45`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-143.ts:26`
- `ustawa-o-cudzoziemcach-art-143`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-143.ts:18`
- `ustawa-o-cudzoziemcach-art-143a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-143a.ts:18`
- `ustawa-o-cudzoziemcach-art-144`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139e.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139r.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-144.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-144.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-144a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-144b.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-144b.ts:37`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-145.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-147.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-148.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-148b.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-149.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-149b.ts:37`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-150.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-150.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-150.ts:36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-64a.ts:28`
- `ustawa-o-cudzoziemcach-art-144a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-144a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-144b.ts:18`
- `ustawa-o-cudzoziemcach-art-144b`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-144a.ts:46`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-144a.ts:47`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-144b.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-149b.ts:46`
- `ustawa-o-cudzoziemcach-art-145`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-145.ts:18`
- `ustawa-o-cudzoziemcach-art-145a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-145a.ts:18`
- `ustawa-o-cudzoziemcach-art-147`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-147.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-147.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-147.ts:45`
- `ustawa-o-cudzoziemcach-art-148`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-148.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-148.ts:23`
- `ustawa-o-cudzoziemcach-art-148a`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-148b`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-148b.ts:18`
- `ustawa-o-cudzoziemcach-art-149`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-149.ts:18`
- `ustawa-o-cudzoziemcach-art-149a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-149a.ts:18`
- `ustawa-o-cudzoziemcach-art-149b`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-149b.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-150.ts:36`
- `ustawa-o-cudzoziemcach-art-149c`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-149c.ts:18`
- `ustawa-o-cudzoziemcach-art-15`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-15.ts:73`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-15.ts:91`
- `ustawa-o-cudzoziemcach-art-150`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-149b.ts:37`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-150.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-150.ts:35`
- `ustawa-o-cudzoziemcach-art-151`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-131.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139e.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139r.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-151.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-151.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-151.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-151a.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-151a.ts:37`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-151b.ts:45`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-153.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-153.ts:38`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-154.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-154.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-154a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-155.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-155.ts:41`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-156b.ts:37`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-156c.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157.ts:37`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157.ts:41`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-159.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-169a.ts:42`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-64a.ts:32`
- `ustawa-o-cudzoziemcach-art-151a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-151a.ts:18`
- `ustawa-o-cudzoziemcach-art-151b`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-131.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139e.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139r.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-151a.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-151a.ts:37`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-151b.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-153.ts:38`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-154a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-155.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-155.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-155.ts:36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-155.ts:41`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-156d.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-156d.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-156d.ts:34`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157.ts:37`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157.ts:41`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-159.ts:32`
- `ustawa-o-cudzoziemcach-art-152`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-151.ts:50`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-152.ts:18`
- `ustawa-o-cudzoziemcach-art-153`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-153.ts:18`
- `ustawa-o-cudzoziemcach-art-154`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-154.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-154.ts:39`
- `ustawa-o-cudzoziemcach-art-154a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-154a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-154a.ts:42`
- `ustawa-o-cudzoziemcach-art-155`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-155.ts:18`
- `ustawa-o-cudzoziemcach-art-156`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-151.ts:50`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-156.ts:18`
- `ustawa-o-cudzoziemcach-art-156a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-156a.ts:18`
- `ustawa-o-cudzoziemcach-art-156b`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-155.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-155.ts:36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-156b.ts:18`
- `ustawa-o-cudzoziemcach-art-156c`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-156c.ts:18`
- `ustawa-o-cudzoziemcach-art-156d`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-156d.ts:18`
- `ustawa-o-cudzoziemcach-art-157`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-156b.ts:37`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157.ts:40`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-161b.ts:47`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-169a.ts:42`
- `ustawa-o-cudzoziemcach-art-157a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157a.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157b.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157e.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157f.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157f.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-465.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-465.ts:37`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-64a.ts:32`
- `ustawa-o-cudzoziemcach-art-157b`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157b.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157b.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157b.ts:45`
- `ustawa-o-cudzoziemcach-art-157c`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157c.ts:18`
- `ustawa-o-cudzoziemcach-art-157d`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157d.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157e.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157e.ts:36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157e.ts:41`
- `ustawa-o-cudzoziemcach-art-157e`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157e.ts:18`
- `ustawa-o-cudzoziemcach-art-157f`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157f.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157f.ts:35`
- `ustawa-o-cudzoziemcach-art-157g`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157g.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157g.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157h.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157k.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157l.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157l.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-64a.ts:32`
- `ustawa-o-cudzoziemcach-art-157h`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157h.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157h.ts:36`
- `ustawa-o-cudzoziemcach-art-157i`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157i.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157i.ts:36`
- `ustawa-o-cudzoziemcach-art-157j`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157j.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157k.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157k.ts:22`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157k.ts:35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157k.ts:40`
- `ustawa-o-cudzoziemcach-art-157k`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157k.ts:18`
- `ustawa-o-cudzoziemcach-art-157l`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157l.ts:18`
- `ustawa-o-cudzoziemcach-art-158`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-158.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-165.ts:39`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-169.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-169.ts:27`
- `ustawa-o-cudzoziemcach-art-158a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-158a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-162.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-162.ts:27`
- `ustawa-o-cudzoziemcach-art-159`
  - `app/data/legal-library/editorial/rozporzadzenie-wniosek-pobyt-czasowy/articles/article-par-5.ts:22`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-104.ts:33`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-106l.ts:19`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-106l.ts:44`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-159.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-159.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-160.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-160.ts:41`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-161.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-161.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-162.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-162.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-164.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-164.ts:30`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-167.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-167.ts:36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-169.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-169.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-169b.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-169b.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-186.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-186.ts:52`
- `ustawa-o-cudzoziemcach-art-15a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-15a.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-15a.ts:28`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-15a.ts:37`
- `ustawa-o-cudzoziemcach-art-15b`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-15b.ts:21`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-15b.ts:26`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-15b.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-15b.ts:40`
- `ustawa-o-cudzoziemcach-art-15c`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-15c.ts:21`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-15c.ts:26`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-15c.ts:35`
- `ustawa-o-cudzoziemcach-art-16`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-16.ts:59`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-16.ts:68`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-16.ts:81`
  - `app/data/legal-library/learning/document-reading-guides.ts:165`
- `ustawa-o-cudzoziemcach-art-160`
  - `app/data/legal-library/editorial/rozporzadzenie-wniosek-pobyt-czasowy/articles/article-annex-8.ts:22`
  - `app/data/legal-library/editorial/rozporzadzenie-wniosek-pobyt-czasowy/articles/article-annex-8.ts:31`
  - `app/data/legal-library/editorial/rozporzadzenie-wniosek-pobyt-czasowy/articles/article-annex-8.ts:50`
  - `app/data/legal-library/editorial/rozporzadzenie-wniosek-pobyt-czasowy/articles/article-annex-9.ts:22`
  - `app/data/legal-library/editorial/rozporzadzenie-wniosek-pobyt-czasowy/articles/article-annex-9.ts:31`
  - `app/data/legal-library/editorial/rozporzadzenie-wniosek-pobyt-czasowy/articles/article-par-5.ts:22`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-104.ts:33`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-106l.ts:19`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-106l.ts:44`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-160.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-160.ts:46`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-162.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-165.ts:39`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-168a.ts:19`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-168a.ts:28`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-168a.ts:36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-168a.ts:37`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-169.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-169.ts:36`
- `ustawa-o-cudzoziemcach-art-161`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-161.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-162.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-162.ts:35`
- `ustawa-o-cudzoziemcach-art-161a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-161a.ts:18`
- `ustawa-o-cudzoziemcach-art-161b`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-161b.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-162.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-162.ts:35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-165.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-166.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-166.ts:35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-166a.ts:18`
- `ustawa-o-cudzoziemcach-art-162`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-162.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-162.ts:40`
- `ustawa-o-cudzoziemcach-art-163`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-163.ts:18`
- `ustawa-o-cudzoziemcach-art-164`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-164.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-164.ts:31`
- `ustawa-o-cudzoziemcach-art-165`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-165.ts:18`
- `ustawa-o-cudzoziemcach-art-166`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-166.ts:18`
- `ustawa-o-cudzoziemcach-art-166a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-166a.ts:18`
- `ustawa-o-cudzoziemcach-art-166b`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-166b.ts:18`
- `ustawa-o-cudzoziemcach-art-167`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-167.ts:18`
- `ustawa-o-cudzoziemcach-art-168`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-108.ts:38`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-168.ts:19`
- `ustawa-o-cudzoziemcach-art-168a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-108.ts:38`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-168a.ts:19`
- `ustawa-o-cudzoziemcach-art-169`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-169.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-189.ts:21`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-189.ts:34`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-189.ts:38`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-205.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-205.ts:32`
- `ustawa-o-cudzoziemcach-art-169a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-169a.ts:18`
- `ustawa-o-cudzoziemcach-art-169b`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-169b.ts:18`
- `ustawa-o-cudzoziemcach-art-169c`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-169c.ts:18`
- `ustawa-o-cudzoziemcach-art-17`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-17.ts:68`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-17.ts:81`
- `ustawa-o-cudzoziemcach-art-170`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-170.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-171.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-171.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-172.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-172.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-174.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-174.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-175.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-175.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-231.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-231.ts:41`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-231.ts:45`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-260.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-303.ts:35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-334.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-406.ts:21`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-406.ts:35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-428.ts:37`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-430.ts:42`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-437.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-437.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-449.ts:41`
- `ustawa-o-cudzoziemcach-art-171`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-171.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-173.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-173.ts:27`
- `ustawa-o-cudzoziemcach-art-172`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-172.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-173.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-173.ts:27`
- `ustawa-o-cudzoziemcach-art-173`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-173.ts:18`
- `ustawa-o-cudzoziemcach-art-174`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-174.ts:18`
- `ustawa-o-cudzoziemcach-art-175`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-175.ts:18`
- `ustawa-o-cudzoziemcach-art-176`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-176.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-178.ts:30`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-303.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-334.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-406.ts:21`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-406.ts:35`
- `ustawa-o-cudzoziemcach-art-177`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-177.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-177.ts:33`
- `ustawa-o-cudzoziemcach-art-178`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-178.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-178.ts:31`
- `ustawa-o-cudzoziemcach-art-179`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-179.ts:18`
- `ustawa-o-cudzoziemcach-art-18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-18.ts:63`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-18.ts:76`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-18.ts:77`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-20.ts:64`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-20.ts:68`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-20.ts:82`
- `ustawa-o-cudzoziemcach-art-180`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-180.ts:18`
- `ustawa-o-cudzoziemcach-art-181`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-181.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-182.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-182.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-182.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-183.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-183.ts:37`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-184.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-184.ts:30`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-184.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-185.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-303.ts:31`
- `ustawa-o-cudzoziemcach-art-182`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-182.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-182.ts:32`
- `ustawa-o-cudzoziemcach-art-183`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-183.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-183.ts:47`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-185a.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-185a.ts:51`
- `ustawa-o-cudzoziemcach-art-184`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-184.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-184.ts:30`
- `ustawa-o-cudzoziemcach-art-185`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-185.ts:18`
- `ustawa-o-cudzoziemcach-art-185a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-185a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-185a.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-185b.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-185b.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-185b.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-185c.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-185c.ts:27`
- `ustawa-o-cudzoziemcach-art-185b`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-185b.ts:18`
- `ustawa-o-cudzoziemcach-art-185c`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-185c.ts:18`
- `ustawa-o-cudzoziemcach-art-186`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-131.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-159.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-186.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-186.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-186.ts:60`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-187.ts:42`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-188.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-188.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-188.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-188.ts:43`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-188.ts:46`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-189.ts:21`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-189.ts:21`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-189.ts:30`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-189.ts:34`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-190.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-190.ts:22`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-190.ts:26`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-190.ts:34`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-190.ts:38`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-190a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-190a.ts:34`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-191.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-191.ts:26`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-191.ts:30`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-191.ts:30`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-191.ts:34`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-191.ts:42`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-192.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-192.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-192.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-192.ts:35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-192.ts:39`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-192.ts:44`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-193.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-193.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-193.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-193.ts:36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-194.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-194.ts:37`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-236.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-252.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-252.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-252.ts:30`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-252.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-258.ts:18`
- `ustawa-o-cudzoziemcach-art-187`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-187.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-187.ts:47`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-188.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-188.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-188.ts:35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-188.ts:43`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-188.ts:46`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-190.ts:22`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-190.ts:30`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-191.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-191.ts:26`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-191.ts:34`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-191.ts:42`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-192.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-192.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-192.ts:44`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-194.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-194.ts:37`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-303.ts:31`
- `ustawa-o-cudzoziemcach-art-188`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-188.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-188.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-188.ts:46`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-188.ts:47`
- `ustawa-o-cudzoziemcach-art-189`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-189.ts:21`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-189.ts:37`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-189.ts:38`
- `ustawa-o-cudzoziemcach-art-19`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-19.ts:74`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-19.ts:92`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-20.ts:64`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-20.ts:68`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-20.ts:82`
- `ustawa-o-cudzoziemcach-art-190`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-190.ts:18`
- `ustawa-o-cudzoziemcach-art-190a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-190a.ts:18`
- `ustawa-o-cudzoziemcach-art-191`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-191.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-191.ts:22`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-191.ts:43`
- `ustawa-o-cudzoziemcach-art-192`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-192.ts:18`
- `ustawa-o-cudzoziemcach-art-193`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-193.ts:18`
- `ustawa-o-cudzoziemcach-art-194`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-194.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-194.ts:36`
- `ustawa-o-cudzoziemcach-art-195`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-195.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-195.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-197.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-197.ts:34`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-197.ts:46`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-199.ts:25`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-201.ts:42`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-207a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-229.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-229.ts:40`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-229.ts:44`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-236.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-49.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-49.ts:41`
- `ustawa-o-cudzoziemcach-art-196`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-196.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-196.ts:46`
- `ustawa-o-cudzoziemcach-art-197`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-196.ts:46`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-197.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-197.ts:46`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-197.ts:47`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-198.ts:20`
- `ustawa-o-cudzoziemcach-art-198`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-198.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-198.ts:43`
- `ustawa-o-cudzoziemcach-art-199`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-199.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-199.ts:49`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-201.ts:42`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-207a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-208.ts:44`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-208b.ts:44`
- `ustawa-o-cudzoziemcach-art-2`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-2.ts:59`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-2.ts:64`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-2.ts:68`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-2.ts:81`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-2.ts:82`
- `ustawa-o-cudzoziemcach-art-20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-20.ts:68`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-20.ts:81`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-4.ts:71`
- `ustawa-o-cudzoziemcach-art-200`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-249.ts:18`
- `ustawa-o-cudzoziemcach-art-201`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-201.ts:41`
- `ustawa-o-cudzoziemcach-art-202`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-202.ts:19`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-203d.ts:33`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-225c.ts:18`
- `ustawa-o-cudzoziemcach-art-203`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-196.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-203.ts:19`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-203c.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-225d.ts:28`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-225f.ts:23`
- `ustawa-o-cudzoziemcach-art-204`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-204.ts:19`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-204.ts:42`
- `ustawa-o-cudzoziemcach-art-205`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-206`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-206.ts:19`
- `ustawa-o-cudzoziemcach-art-207`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-207a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-207a.ts:31`
- `ustawa-o-cudzoziemcach-art-208`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-208.ts:43`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-208b.ts:25`
- `ustawa-o-cudzoziemcach-art-208a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-208a.ts:37`
- `ustawa-o-cudzoziemcach-art-208b`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-21`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-21.ts:73`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-21.ts:86`
- `ustawa-o-cudzoziemcach-art-210`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-210.ts:19`
- `ustawa-o-cudzoziemcach-art-211`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-214.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-214.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-214.ts:37`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-214a.ts:43`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-222c.ts:18`
- `ustawa-o-cudzoziemcach-art-212`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-161.ts:36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-211.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-212.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-212.ts:48`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-219.ts:32`
- `ustawa-o-cudzoziemcach-art-213`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-213.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-213.ts:41`
- `ustawa-o-cudzoziemcach-art-214`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-213.ts:41`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-214a.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-214a.ts:43`
- `ustawa-o-cudzoziemcach-art-214a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-214a.ts:43`
- `ustawa-o-cudzoziemcach-art-215`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-215.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-215.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-215.ts:46`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-215.ts:47`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-216.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-216.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-216.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-216.ts:35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-222c.ts:18`
- `ustawa-o-cudzoziemcach-art-216`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-216.ts:34`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-216.ts:35`
- `ustawa-o-cudzoziemcach-art-217`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-218`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-218.ts:41`
- `ustawa-o-cudzoziemcach-art-219`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-216.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-216.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-216.ts:35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-219.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-219.ts:40`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-219c.ts:19`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-225d.ts:28`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-225f.ts:28`
- `ustawa-o-cudzoziemcach-art-22`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139j.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139j.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139w.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139w.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-149c.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-156c.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-156d.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-156d.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-22.ts:64`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-22.ts:83`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-22.ts:106`
- `ustawa-o-cudzoziemcach-art-221`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-222`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-219b.ts:28`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-222.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-222.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-222.ts:40`
- `ustawa-o-cudzoziemcach-art-223`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-224`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-225`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-226`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-226.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-226.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-227.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-227.ts:22`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-227.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-228.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-228.ts:22`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-228.ts:35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-229.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-229.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-229.ts:44`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-230.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-230.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-231.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-231.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-231.ts:44`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-232.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-232.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-233.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-233.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-234.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-234.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-234.ts:37`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-235.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-235.ts:22`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-235.ts:26`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-235.ts:34`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-235.ts:35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-236.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-237.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-237.ts:22`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-238.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-238.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-284.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-449b.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-449b.ts:36`
- `ustawa-o-cudzoziemcach-art-227`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-227.ts:32`
- `ustawa-o-cudzoziemcach-art-228`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-228.ts:35`
- `ustawa-o-cudzoziemcach-art-229`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-229.ts:43`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-246.ts:18`
- `ustawa-o-cudzoziemcach-art-23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-2.ts:64`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-23.ts:63`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-23.ts:81`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-25a.ts:19`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-30.ts:58`
- `ustawa-o-cudzoziemcach-art-230`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-231`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-231.ts:44`
- `ustawa-o-cudzoziemcach-art-232`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-233`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-283.ts:18`
- `ustawa-o-cudzoziemcach-art-234`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-235`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-236.ts:18`
- `ustawa-o-cudzoziemcach-art-236`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-236.ts:40`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-236.ts:43`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-236.ts:44`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-236a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-236a.ts:22`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-236a.ts:26`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-236a.ts:31`
- `ustawa-o-cudzoziemcach-art-236a`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-237`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-239.ts:18`
- `ustawa-o-cudzoziemcach-art-238`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-238.ts:30`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-238.ts:31`
- `ustawa-o-cudzoziemcach-art-239`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-235.ts:34`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-235.ts:35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-237.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-237.ts:36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-237.ts:41`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-238.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-238.ts:30`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-238.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-239.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-239.ts:41`
- `ustawa-o-cudzoziemcach-art-24`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-24.ts:64`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-24.ts:68`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-24.ts:81`
- `ustawa-o-cudzoziemcach-art-241`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-236.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-236.ts:36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-241.ts:35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-251.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-251.ts:32`
- `ustawa-o-cudzoziemcach-art-242`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-243`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-244`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-232.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-232.ts:36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-241.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-241.ts:32`
- `ustawa-o-cudzoziemcach-art-245`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-241.ts:35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-245.ts:43`
- `ustawa-o-cudzoziemcach-art-246`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-247.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-247.ts:27`
- `ustawa-o-cudzoziemcach-art-247`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-248`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-279.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-279.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-279.ts:30`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-279.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-282.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-282.ts:22`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-282.ts:26`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-282.ts:29`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-282.ts:30`
- `ustawa-o-cudzoziemcach-art-248a`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-249`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-249.ts:45`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-251.ts:35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-258.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-258.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-258.ts:35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-258.ts:39`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-265.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-265.ts:36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-280.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-280.ts:42`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-283.ts:18`
- `ustawa-o-cudzoziemcach-art-25`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-25.ts:64`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-25.ts:79`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-25.ts:93`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-25.ts:121`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-25a.ts:19`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-28.ts:71`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-30.ts:58`
- `ustawa-o-cudzoziemcach-art-250`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-249.ts:45`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-251.ts:35`
- `ustawa-o-cudzoziemcach-art-251`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-249.ts:45`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-251.ts:35`
- `ustawa-o-cudzoziemcach-art-252`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-252.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-252.ts:30`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-252a.ts:42`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-254.ts:26`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-258.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-258.ts:31`
- `ustawa-o-cudzoziemcach-art-252a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-252a.ts:41`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-252a.ts:42`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-254.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-254.ts:22`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-254.ts:30`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-254.ts:33`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-254.ts:34`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-258.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-258.ts:31`
- `ustawa-o-cudzoziemcach-art-253`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-253.ts:36`
- `ustawa-o-cudzoziemcach-art-254`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-255`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-256`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-256.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-265.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-265.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-265.ts:41`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-280.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-280.ts:32`
- `ustawa-o-cudzoziemcach-art-257`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-257.ts:36`
- `ustawa-o-cudzoziemcach-art-258`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-258.ts:38`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-283.ts:18`
- `ustawa-o-cudzoziemcach-art-259`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-258.ts:38`
- `ustawa-o-cudzoziemcach-art-26`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-26.ts:58`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-26.ts:63`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-26.ts:85`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-26.ts:86`
- `ustawa-o-cudzoziemcach-art-260`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-260.ts:36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-264.ts:36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-264.ts:37`
- `ustawa-o-cudzoziemcach-art-261`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-262`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-263`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-264`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-265`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-283.ts:18`
- `ustawa-o-cudzoziemcach-art-266`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-267`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-267.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-269.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-269.ts:27`
- `ustawa-o-cudzoziemcach-art-268`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-229.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-229.ts:36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-269.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-269.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-269.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-269.ts:31`
- `ustawa-o-cudzoziemcach-art-269`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-270.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-271.ts:37`
- `ustawa-o-cudzoziemcach-art-27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-27.ts:58`
- `ustawa-o-cudzoziemcach-art-270`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-271`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-272`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-273`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-273.ts:31`
- `ustawa-o-cudzoziemcach-art-274`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-276.ts:46`
- `ustawa-o-cudzoziemcach-art-275`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-276`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-277`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-278`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-279`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-28`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-28.ts:58`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-28.ts:63`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-28.ts:84`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-33.ts:80`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-33.ts:81`
- `ustawa-o-cudzoziemcach-art-280`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-281.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-281.ts:43`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-283.ts:18`
- `ustawa-o-cudzoziemcach-art-281`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-282`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-283`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-284`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-285`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-285.ts:46`
- `ustawa-o-cudzoziemcach-art-286`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-287`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-288`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-289`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-290`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-291`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-292`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-293`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-294`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-295`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-296`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-297`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-298`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-299`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-196.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-213.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-299.ts:21`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-299.ts:21`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-334.ts:31`
- `ustawa-o-cudzoziemcach-art-3`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-3.ts:19`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-3.ts:44`
- `ustawa-o-cudzoziemcach-art-30`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-30.ts:58`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-30.ts:66`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-30.ts:69`
- `ustawa-o-cudzoziemcach-art-300`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-301`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-302`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-303.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-303.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-303.ts:39`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-303.ts:47`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-314a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-314a.ts:37`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-314a.ts:47`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-337.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-337.ts:42`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-48.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-48.ts:41`
- `ustawa-o-cudzoziemcach-art-303`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-303.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-303.ts:46`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-303.ts:47`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-314a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-314a.ts:37`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-40.ts:58`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-40.ts:71`
- `ustawa-o-cudzoziemcach-art-303a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-303.ts:43`
- `ustawa-o-cudzoziemcach-art-303b`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-435.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-443.ts:32`
- `ustawa-o-cudzoziemcach-art-304`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-305`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-306`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-307`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-308`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-308a`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-308b`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-309`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-309a`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-299.ts:21`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-299.ts:40`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-31.ts:58`
- `ustawa-o-cudzoziemcach-art-310`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-311`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-312`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-314`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-315`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-398a.ts:21`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-398a.ts:35`
- `ustawa-o-cudzoziemcach-art-316`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-317`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-318`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-319`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-2.ts:64`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-32.ts:61`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-32.ts:66`
- `ustawa-o-cudzoziemcach-art-320`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-321`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-322`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-334a.ts:32`
- `ustawa-o-cudzoziemcach-art-323`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-324`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-325`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-338.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-338.ts:31`
- `ustawa-o-cudzoziemcach-art-326`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-327`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-328`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-329`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-329a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-347g.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-347g.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-347g.ts:35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-347g.ts:36`
- `ustawa-o-cudzoziemcach-art-32a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-32a.ts:60`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-32a.ts:71`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-32a.ts:72`
- `ustawa-o-cudzoziemcach-art-33`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-30.ts:58`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-33.ts:58`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-33.ts:63`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-33.ts:80`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-41.ts:63`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-41.ts:76`
- `ustawa-o-cudzoziemcach-art-330`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-347c.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-347c.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-347c.ts:36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-347c.ts:36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-437.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-437.ts:35`
- `ustawa-o-cudzoziemcach-art-332`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-332.ts:18`
- `ustawa-o-cudzoziemcach-art-333`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-333.ts:18`
- `ustawa-o-cudzoziemcach-art-334`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-334.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-336.ts:27`
- `ustawa-o-cudzoziemcach-art-334a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-334a.ts:18`
- `ustawa-o-cudzoziemcach-art-335`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-335.ts:18`
- `ustawa-o-cudzoziemcach-art-335a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-335a.ts:18`
- `ustawa-o-cudzoziemcach-art-336`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-336.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-337.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-338.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-340.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-340.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-341.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-341.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-342.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-345.ts:31`
- `ustawa-o-cudzoziemcach-art-337`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-152.ts:42`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-336.ts:40`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-337.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-337.ts:42`
- `ustawa-o-cudzoziemcach-art-338`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-338.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-338.ts:41`
- `ustawa-o-cudzoziemcach-art-339`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-336.ts:40`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-339.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-339.ts:36`
- `ustawa-o-cudzoziemcach-art-34`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-30.ts:58`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-34.ts:58`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-41.ts:63`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-41.ts:76`
- `ustawa-o-cudzoziemcach-art-340`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-340.ts:18`
- `ustawa-o-cudzoziemcach-art-341`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-340.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-341.ts:18`
- `ustawa-o-cudzoziemcach-art-342`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-342.ts:18`
- `ustawa-o-cudzoziemcach-art-343`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-343.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-425.ts:32`
- `ustawa-o-cudzoziemcach-art-344`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-343.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-344.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-345.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-345.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-345.ts:36`
- `ustawa-o-cudzoziemcach-art-345`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-345.ts:18`
- `ustawa-o-cudzoziemcach-art-347`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-347.ts:18`
- `ustawa-o-cudzoziemcach-art-347a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-347a.ts:20`
- `ustawa-o-cudzoziemcach-art-347b`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-347a.ts:33`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-347b.ts:20`
- `ustawa-o-cudzoziemcach-art-347c`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-347a.ts:34`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-347c.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-347g.ts:18`
- `ustawa-o-cudzoziemcach-art-347d`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-347a.ts:34`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-347d.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-347g.ts:18`
- `ustawa-o-cudzoziemcach-art-347e`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-347e.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-347e.ts:38`
- `ustawa-o-cudzoziemcach-art-347f`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-347f.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-347g.ts:18`
- `ustawa-o-cudzoziemcach-art-347g`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-347a.ts:33`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-347g.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-347g.ts:35`
- `ustawa-o-cudzoziemcach-art-348`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-348.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-348.ts:43`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-349.ts:22`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-350.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-355.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-355.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-356.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-356.ts:27`
- `ustawa-o-cudzoziemcach-art-349`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-349.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-349.ts:42`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-350.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-350.ts:36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-351.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-351.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-356.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-359.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-359c.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-359c.ts:29`
- `ustawa-o-cudzoziemcach-art-35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-30.ts:58`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-35.ts:58`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-35.ts:63`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-35.ts:80`
- `ustawa-o-cudzoziemcach-art-350`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-350.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-350.ts:41`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-359b.ts:45`
- `ustawa-o-cudzoziemcach-art-351`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-348.ts:43`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-351.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-351.ts:40`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-351.ts:41`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-352.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-352.ts:22`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-352.ts:26`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-352.ts:29`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-352.ts:29`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-352.ts:30`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-353.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-355.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-355.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-356.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-356.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-356.ts:36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-437.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-508.ts:18`
- `ustawa-o-cudzoziemcach-art-352`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-352.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-352.ts:26`
- `ustawa-o-cudzoziemcach-art-353`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-353.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-353.ts:39`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-358.ts:31`
- `ustawa-o-cudzoziemcach-art-354`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-249.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-280.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-281.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-354.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-354.ts:36`
- `ustawa-o-cudzoziemcach-art-355`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-355.ts:18`
- `ustawa-o-cudzoziemcach-art-356`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-356.ts:18`
- `ustawa-o-cudzoziemcach-art-357`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-357.ts:18`
- `ustawa-o-cudzoziemcach-art-358`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-353.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-353.ts:36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-358.ts:18`
- `ustawa-o-cudzoziemcach-art-359`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-359.ts:18`
- `ustawa-o-cudzoziemcach-art-359a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-359a.ts:20`
- `ustawa-o-cudzoziemcach-art-359b`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-359b.ts:20`
- `ustawa-o-cudzoziemcach-art-359c`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-359c.ts:20`
- `ustawa-o-cudzoziemcach-art-36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-36.ts:58`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-36.ts:63`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-36.ts:80`
- `ustawa-o-cudzoziemcach-art-360`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-360.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-361.ts:36`
- `ustawa-o-cudzoziemcach-art-361`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-361.ts:18`
- `ustawa-o-cudzoziemcach-art-362`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-362.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-362.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-365.ts:18`
- `ustawa-o-cudzoziemcach-art-363`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-363.ts:18`
- `ustawa-o-cudzoziemcach-art-364`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-364.ts:18`
- `ustawa-o-cudzoziemcach-art-365`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-365.ts:18`
- `ustawa-o-cudzoziemcach-art-366`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-366.ts:18`
- `ustawa-o-cudzoziemcach-art-367`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-367.ts:18`
- `ustawa-o-cudzoziemcach-art-368`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-368.ts:18`
- `ustawa-o-cudzoziemcach-art-369`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-37`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-37.ts:61`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-37.ts:69`
- `ustawa-o-cudzoziemcach-art-370`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-371`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-372`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-373`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-374`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-375`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-376`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-377`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-378`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-379`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-38`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-38.ts:61`
- `ustawa-o-cudzoziemcach-art-380`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-381`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-382`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-383`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-384`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-385`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-386`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-387`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-388`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-389`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-39`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-39.ts:61`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-42.ts:78`
- `ustawa-o-cudzoziemcach-art-390`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-391`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-392`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-393`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-393a`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-393b`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-393c`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-393d`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-393e`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-394`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-395`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-396`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-397`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-398`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-345.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-398a.ts:21`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-398a.ts:26`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-398a.ts:26`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-398a.ts:39`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-398a.ts:44`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-406.ts:39`
- `ustawa-o-cudzoziemcach-art-398a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-398a.ts:44`
- `ustawa-o-cudzoziemcach-art-399`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-4`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-4.ts:63`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-4.ts:71`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-4.ts:72`
- `ustawa-o-cudzoziemcach-art-40`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-40.ts:58`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-40.ts:63`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-40.ts:79`
- `ustawa-o-cudzoziemcach-art-400`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-406.ts:21`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-406.ts:35`
- `ustawa-o-cudzoziemcach-art-400a`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-400b`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-400c`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-400d`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-401`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-402`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-403`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-404`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-405`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-406`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-407`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-408`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-409`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-409.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-409.ts:43`
- `ustawa-o-cudzoziemcach-art-41`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-142.ts:47`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-38.ts:73`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-41.ts:58`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-41.ts:63`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-41.ts:79`
- `ustawa-o-cudzoziemcach-art-410`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-410.ts:18`
- `ustawa-o-cudzoziemcach-art-411`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-411.ts:18`
- `ustawa-o-cudzoziemcach-art-412`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-412.ts:18`
- `ustawa-o-cudzoziemcach-art-413`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-413.ts:18`
- `ustawa-o-cudzoziemcach-art-414`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-414.ts:18`
- `ustawa-o-cudzoziemcach-art-415`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-415.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-416.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-416.ts:46`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-417.ts:23`
- `ustawa-o-cudzoziemcach-art-416`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-416.ts:18`
- `ustawa-o-cudzoziemcach-art-417`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-417.ts:18`
- `ustawa-o-cudzoziemcach-art-418`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-418.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-418.ts:43`
- `ustawa-o-cudzoziemcach-art-419`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-419.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-419.ts:46`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-421.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-421.ts:32`
- `ustawa-o-cudzoziemcach-art-42`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-42.ts:61`
- `ustawa-o-cudzoziemcach-art-420`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-420.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-420.ts:43`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-421.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-421.ts:32`
- `ustawa-o-cudzoziemcach-art-421`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-419.ts:46`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-421.ts:18`
- `ustawa-o-cudzoziemcach-art-422`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-422.ts:18`
- `ustawa-o-cudzoziemcach-art-423`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-423.ts:18`
- `ustawa-o-cudzoziemcach-art-424`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-424.ts:18`
- `ustawa-o-cudzoziemcach-art-425`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-425.ts:18`
- `ustawa-o-cudzoziemcach-art-426`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-426.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-426.ts:48`
- `ustawa-o-cudzoziemcach-art-427`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-421.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-421.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-427.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-427.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-427.ts:41`
- `ustawa-o-cudzoziemcach-art-428`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-225g.ts:28`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-281b.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-314a.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-35.ts:63`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-428.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-429.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-429.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-429.ts:37`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-430.ts:47`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-433.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-449.ts:37`
- `ustawa-o-cudzoziemcach-art-429`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-429.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-429.ts:37`
- `ustawa-o-cudzoziemcach-art-43`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-43.ts:58`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-43.ts:75`
- `ustawa-o-cudzoziemcach-art-430`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-430.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-430.ts:47`
- `ustawa-o-cudzoziemcach-art-430a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-430a.ts:18`
- `ustawa-o-cudzoziemcach-art-431`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-431.ts:18`
- `ustawa-o-cudzoziemcach-art-432`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-432.ts:18`
- `ustawa-o-cudzoziemcach-art-433`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-433.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-433.ts:37`
- `ustawa-o-cudzoziemcach-art-434`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-434.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-434.ts:36`
- `ustawa-o-cudzoziemcach-art-435`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-434.ts:37`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-435.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-440.ts:46`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-444.ts:41`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-447.ts:25`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-447.ts:29`
- `ustawa-o-cudzoziemcach-art-436`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-436.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-436.ts:48`
- `ustawa-o-cudzoziemcach-art-437`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-437.ts:18`
- `ustawa-o-cudzoziemcach-art-438`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-434.ts:37`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-438.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-441.ts:37`
- `ustawa-o-cudzoziemcach-art-439`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-439.ts:18`
- `ustawa-o-cudzoziemcach-art-44`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-44.ts:61`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-44.ts:66`
- `ustawa-o-cudzoziemcach-art-440`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-440.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-440a.ts:37`
- `ustawa-o-cudzoziemcach-art-440a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-435.ts:36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-438.ts:37`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-440.ts:46`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-440a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-440a.ts:47`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-441.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-443.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-444.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-444.ts:37`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-444.ts:41`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-444.ts:44`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-444.ts:45`
- `ustawa-o-cudzoziemcach-art-441`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-441.ts:18`
- `ustawa-o-cudzoziemcach-art-442`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-442.ts:18`
- `ustawa-o-cudzoziemcach-art-443`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-443.ts:18`
- `ustawa-o-cudzoziemcach-art-443a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-443a.ts:20`
- `ustawa-o-cudzoziemcach-art-444`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-434.ts:37`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-435.ts:45`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-439.ts:42`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-440a.ts:47`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-444.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-446.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-446.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-446.ts:47`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-448.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-448.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-448.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-449b.ts:41`
- `ustawa-o-cudzoziemcach-art-445`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-445.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-445.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-445.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-445.ts:35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-445.ts:36`
- `ustawa-o-cudzoziemcach-art-446`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-446.ts:18`
- `ustawa-o-cudzoziemcach-art-447`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-435.ts:45`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-447.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-448.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-448.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-448.ts:27`
- `ustawa-o-cudzoziemcach-art-448`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-448.ts:18`
- `ustawa-o-cudzoziemcach-art-448a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-448a.ts:20`
- `ustawa-o-cudzoziemcach-art-448b`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-448b.ts:20`
- `ustawa-o-cudzoziemcach-art-449`
  - `app/data/legal-library/editorial/rozporzadzenie-wniosek-pobyt-czasowy/articles/article-par-8.ts:22`
  - `app/data/legal-library/editorial/rozporzadzenie-wniosek-pobyt-czasowy/articles/article-par-8.ts:30`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-15c.ts:21`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-225e.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-449.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-451.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-451.ts:42`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-452.ts:30`
- `ustawa-o-cudzoziemcach-art-449a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-449a.ts:18`
- `ustawa-o-cudzoziemcach-art-449b`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-449b.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-449b.ts:41`
- `ustawa-o-cudzoziemcach-art-45`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-45.ts:61`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-45.ts:77`
- `ustawa-o-cudzoziemcach-art-450`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-432.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-432.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-450.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-452.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-452.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-452.ts:22`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-452.ts:26`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-452.ts:38`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-452.ts:39`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-454.ts:27`
- `ustawa-o-cudzoziemcach-art-451`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-451.ts:18`
- `ustawa-o-cudzoziemcach-art-452`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-452.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-452.ts:38`
- `ustawa-o-cudzoziemcach-art-453`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-453.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-454.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-454.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-454.ts:39`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-455.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-455.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-455.ts:40`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-458.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-458.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-458.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-458.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-458.ts:40`
- `ustawa-o-cudzoziemcach-art-454`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-454.ts:18`
- `ustawa-o-cudzoziemcach-art-455`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-455.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-455.ts:40`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-457.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-457.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-457.ts:37`
- `ustawa-o-cudzoziemcach-art-456`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-456.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-456.ts:36`
- `ustawa-o-cudzoziemcach-art-457`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-457.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-457.ts:36`
- `ustawa-o-cudzoziemcach-art-458`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-458.ts:18`
- `ustawa-o-cudzoziemcach-art-459`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-459.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-459.ts:36`
- `ustawa-o-cudzoziemcach-art-46`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-46.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-46.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-46.ts:36`
- `ustawa-o-cudzoziemcach-art-460`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-460.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-461.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-461.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-461.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-461.ts:35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-461.ts:43`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-461.ts:44`
- `ustawa-o-cudzoziemcach-art-461`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-461.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-461.ts:43`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-461a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-461a.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-461a.ts:47`
- `ustawa-o-cudzoziemcach-art-461a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-461a.ts:18`
- `ustawa-o-cudzoziemcach-art-461b`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-461b.ts:18`
- `ustawa-o-cudzoziemcach-art-461c`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-461c.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-461c.ts:46`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-461c.ts:47`
- `ustawa-o-cudzoziemcach-art-461d`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-461d.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-461d.ts:46`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-461d.ts:47`
- `ustawa-o-cudzoziemcach-art-461e`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-461e.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-461e.ts:36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-461e.ts:37`
- `ustawa-o-cudzoziemcach-art-462`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-462.ts:18`
- `ustawa-o-cudzoziemcach-art-463`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-463.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-463.ts:46`
- `ustawa-o-cudzoziemcach-art-464`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-464.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-464.ts:36`
- `ustawa-o-cudzoziemcach-art-465`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-465.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-465.ts:42`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-465a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-465a.ts:37`
- `ustawa-o-cudzoziemcach-art-465a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-465a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-465a.ts:36`
- `ustawa-o-cudzoziemcach-art-47`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-47.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-47.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-47.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-47.ts:40`
- `ustawa-o-cudzoziemcach-art-48`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-48.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-48.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-48.ts:46`
- `ustawa-o-cudzoziemcach-art-49`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-49.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-49.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-49.ts:46`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-50.ts:27`
- `ustawa-o-cudzoziemcach-art-5`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-5.ts:63`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-5.ts:76`
- `ustawa-o-cudzoziemcach-art-50`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-50.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-50.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-50.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-53.ts:45`
- `ustawa-o-cudzoziemcach-art-507`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-507.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-507.ts:38`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-521.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-521.ts:36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-522.ts:35`
- `ustawa-o-cudzoziemcach-art-508`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-508.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-508.ts:35`
- `ustawa-o-cudzoziemcach-art-509`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-509.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-509.ts:38`
- `ustawa-o-cudzoziemcach-art-51`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-51.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-51.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-51.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-53.ts:46`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-54.ts:31`
- `ustawa-o-cudzoziemcach-art-510`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-510.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-510.ts:38`
- `ustawa-o-cudzoziemcach-art-511`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-511.ts:18`
- `ustawa-o-cudzoziemcach-art-512`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-512.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-512.ts:36`
- `ustawa-o-cudzoziemcach-art-513`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-513.ts:18`
- `ustawa-o-cudzoziemcach-art-514`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-514.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-514.ts:41`
- `ustawa-o-cudzoziemcach-art-515`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-515.ts:18`
- `ustawa-o-cudzoziemcach-art-516`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-516.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-516.ts:38`
- `ustawa-o-cudzoziemcach-art-517`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-517.ts:18`
- `ustawa-o-cudzoziemcach-art-518`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-518.ts:18`
- `ustawa-o-cudzoziemcach-art-519`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-519.ts:18`
- `ustawa-o-cudzoziemcach-art-52`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-50.ts:44`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-52.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-52.ts:27`
- `ustawa-o-cudzoziemcach-art-520`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-520.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-520.ts:41`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-521.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-521.ts:36`
- `ustawa-o-cudzoziemcach-art-521`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-510.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-521.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-521.ts:35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-522.ts:35`
- `ustawa-o-cudzoziemcach-art-522`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-522.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-522.ts:34`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-522.ts:35`
- `ustawa-o-cudzoziemcach-art-53`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-50.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-53.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-53.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-57.ts:40`
- `ustawa-o-cudzoziemcach-art-54`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-51.ts:36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-54.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-54.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-54.ts:44`
- `ustawa-o-cudzoziemcach-art-55`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-55.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-55.ts:27`
- `ustawa-o-cudzoziemcach-art-55a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-55a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-55a.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-55a.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-55b.ts:42`
- `ustawa-o-cudzoziemcach-art-55b`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-55b.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-55b.ts:27`
- `ustawa-o-cudzoziemcach-art-56`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-56.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-56.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-56.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-56.ts:42`
- `ustawa-o-cudzoziemcach-art-57`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-57.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-57.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-57.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-57.ts:40`
- `ustawa-o-cudzoziemcach-art-58`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-2.ts:64`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-58.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-58.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-58.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-80.ts:27`
- `ustawa-o-cudzoziemcach-art-59`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-59.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-59.ts:27`
- `ustawa-o-cudzoziemcach-art-6`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-6.ts:68`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-6.ts:81`
- `ustawa-o-cudzoziemcach-art-60`
  - `app/data/legal-library/editorial/powierzanie-pracy/articles/article-art-50.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-131.ts:36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-2.ts:64`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-25.ts:84`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-60.ts:21`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-64.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-64.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-64.ts:40`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-64.ts:44`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-64a.ts:42`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-66.ts:36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-74a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-74a.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-74a.ts:40`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-80.ts:27`
- `ustawa-o-cudzoziemcach-art-61`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-61.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-61.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-61.ts:35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-62.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-62.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-62.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-62.ts:34`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-62.ts:35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-63.ts:18`
- `ustawa-o-cudzoziemcach-art-62`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-62.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-62.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-62.ts:27`
- `ustawa-o-cudzoziemcach-art-63`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-2.ts:64`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-63.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-63.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-63.ts:27`
- `ustawa-o-cudzoziemcach-art-64`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-64.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-64.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-64.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-64.ts:43`
- `ustawa-o-cudzoziemcach-art-64a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-64a.ts:19`
- `ustawa-o-cudzoziemcach-art-65`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-65.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-65.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-65.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-65.ts:52`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-69.ts:29`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-69.ts:37`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-69.ts:37`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-72.ts:37`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-74a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-74a.ts:36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-75.ts:45`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-75.ts:46`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-77.ts:56`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-79a.ts:46`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-82.ts:47`
- `ustawa-o-cudzoziemcach-art-66`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-2.ts:64`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-66.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-66.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-66.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-66a.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-66a.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-66a.ts:33`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-66a.ts:33`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-66a.ts:38`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-70a.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-70a.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-70a.ts:36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-74b.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-74b.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-76.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-76.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-76.ts:45`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-77a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-77a.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-77b.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-77b.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-77b.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-77b.ts:40`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-77b.ts:40`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-77b.ts:45`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-78.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-78.ts:38`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-78.ts:38`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-79.ts:43`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-79.ts:43`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-79a.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-79a.ts:29`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-9.ts:66`
- `ustawa-o-cudzoziemcach-art-66a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-66a.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-66a.ts:29`
- `ustawa-o-cudzoziemcach-art-67`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-66.ts:36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-67.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-67.ts:29`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-70a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-70a.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-70a.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-70a.ts:36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-71.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-71.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-71.ts:31`
- `ustawa-o-cudzoziemcach-art-68`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-68.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-68.ts:29`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-69.ts:33`
- `ustawa-o-cudzoziemcach-art-69`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-69.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-69.ts:25`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-69.ts:29`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-69.ts:45`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-70.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-70.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-70.ts:35`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-70a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-70a.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-70a.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-70a.ts:36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-71.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-71.ts:35`
- `ustawa-o-cudzoziemcach-art-7`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-7.ts:19`
- `ustawa-o-cudzoziemcach-art-70`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-335.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-70.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-70.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-70.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-70a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-70a.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-70a.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-70a.ts:36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-71.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-71.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-71.ts:31`
- `ustawa-o-cudzoziemcach-art-70a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-70a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-70a.ts:27`
- `ustawa-o-cudzoziemcach-art-71`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-71.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-71.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-71.ts:38`
- `ustawa-o-cudzoziemcach-art-72`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-72.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-72.ts:29`
- `ustawa-o-cudzoziemcach-art-72a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-72a.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-72a.ts:29`
- `ustawa-o-cudzoziemcach-art-73`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-73.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-73.ts:25`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-73.ts:29`
- `ustawa-o-cudzoziemcach-art-74`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-74.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-74.ts:29`
- `ustawa-o-cudzoziemcach-art-74a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-70.ts:45`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-74a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-74a.ts:27`
- `ustawa-o-cudzoziemcach-art-74b`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-74b.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-74b.ts:30`
- `ustawa-o-cudzoziemcach-art-75`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-75.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-75.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-75.ts:45`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-76.ts:50`
- `ustawa-o-cudzoziemcach-art-76`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-75.ts:46`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-76.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-76.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-76.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-80.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-80.ts:36`
- `ustawa-o-cudzoziemcach-art-77`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-77.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-77.ts:25`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-77.ts:29`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-77.ts:57`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-77c.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-77c.ts:44`
- `ustawa-o-cudzoziemcach-art-77a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-77a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-77a.ts:27`
- `ustawa-o-cudzoziemcach-art-77b`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-77b.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-77b.ts:27`
- `ustawa-o-cudzoziemcach-art-77c`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-77c.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-77c.ts:27`
- `ustawa-o-cudzoziemcach-art-78`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-78.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-78.ts:29`
- `ustawa-o-cudzoziemcach-art-79`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-169.ts:40`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-79.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-79.ts:29`
- `ustawa-o-cudzoziemcach-art-79a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-79a.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-79a.ts:25`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-79a.ts:29`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-79a.ts:46`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-79a.ts:47`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-9.ts:66`
- `ustawa-o-cudzoziemcach-art-79b`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-79b.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-79b.ts:30`
- `ustawa-o-cudzoziemcach-art-8`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-139a.ts:43`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-8.ts:68`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-8.ts:81`
- `ustawa-o-cudzoziemcach-art-80`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-80.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-80.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-80.ts:27`
- `ustawa-o-cudzoziemcach-art-81`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-81.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-81.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-81.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-81.ts:36`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-81.ts:39`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-81.ts:40`
- `ustawa-o-cudzoziemcach-art-82`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-81.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-81.ts:40`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-82.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-82.ts:29`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-82.ts:46`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-83.ts:29`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-83.ts:41`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-83.ts:42`
- `ustawa-o-cudzoziemcach-art-83`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-83.ts:20`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-83.ts:25`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-83.ts:29`
- `ustawa-o-cudzoziemcach-art-83a`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-84`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-85`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-86`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-87`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-88`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-89`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-89a`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-9`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-5.ts:59`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-5.ts:72`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-9.ts:70`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-9.ts:83`
- `ustawa-o-cudzoziemcach-art-90`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-91`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-92`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-93`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-94`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-95`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-96`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-96a`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-97`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-508.ts:27`
- `ustawa-o-cudzoziemcach-art-98`
  - no typed references found
- `ustawa-o-cudzoziemcach-art-99`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-131.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-131.ts:23`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-131.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-145a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-155.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157c.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-157i.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-166a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-166a.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-166a.ts:40`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-178.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-178.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-178.ts:31`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-182.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-182.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-182.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-182.ts:32`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-190a.ts:18`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-190a.ts:27`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-190a.ts:35`
- `ustawa-o-cudzoziemcach-art-9a`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-9a.ts:21`
  - `app/data/legal-library/editorial/ustawa-o-cudzoziemcach/articles/article-art-9a.ts:30`
