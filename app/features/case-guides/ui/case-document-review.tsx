import { LegalText } from "~/components/references"
import {
  caseDocumentReviews,
  type CaseDocumentReviewId,
} from "~/data/case-guides/document-reviews"

export function CaseDocumentReview({
  reviewId,
}: {
  reviewId: CaseDocumentReviewId
}) {
  const review = caseDocumentReviews[reviewId]
  return (
    <dl className="mt-3 flex flex-col gap-2 text-sm leading-6">
      <div>
        <dt className="font-medium">Що звірити</dt>
        <dd>
          <LegalText text={review.check} />
        </dd>
      </div>
      <div>
        <dt className="font-medium">Якщо бракує або є розбіжність</dt>
        <dd className="text-muted-foreground">
          <LegalText text={review.ifMissing} />
        </dd>
      </div>
    </dl>
  )
}
