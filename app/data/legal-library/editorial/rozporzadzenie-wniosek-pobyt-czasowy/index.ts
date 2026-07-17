import {
  mergeEditorialParts,
  type EditorialPart,
} from "../define-editorial-part"

import articleAnnex1 from "./articles/article-annex-1"
import articleAnnex10 from "./articles/article-annex-10"
import articleAnnex11 from "./articles/article-annex-11"
import articleAnnex2 from "./articles/article-annex-2"
import articleAnnex3 from "./articles/article-annex-3"
import articleAnnex4 from "./articles/article-annex-4"
import articleAnnex5 from "./articles/article-annex-5"
import articleAnnex6 from "./articles/article-annex-6"
import articleAnnex7 from "./articles/article-annex-7"
import articleAnnex8 from "./articles/article-annex-8"
import articleAnnex9 from "./articles/article-annex-9"
import articlePar1 from "./articles/article-par-1"
import articlePar2 from "./articles/article-par-2"
import articlePar3 from "./articles/article-par-3"
import articlePar4 from "./articles/article-par-4"
import articlePar5 from "./articles/article-par-5"
import articlePar6 from "./articles/article-par-6"
import articlePar7 from "./articles/article-par-7"
import articlePar8 from "./articles/article-par-8"
import articlePar9 from "./articles/article-par-9"

export const temporaryResidenceApplicationExplanations = mergeEditorialParts([
  articleAnnex1,
  articleAnnex10,
  articleAnnex11,
  articleAnnex2,
  articleAnnex3,
  articleAnnex4,
  articleAnnex5,
  articleAnnex6,
  articleAnnex7,
  articleAnnex8,
  articleAnnex9,
  articlePar1,
  articlePar2,
  articlePar3,
  articlePar4,
  articlePar5,
  articlePar6,
  articlePar7,
  articlePar8,
  articlePar9,
] satisfies readonly EditorialPart<"rozporzadzenie-wniosek-pobyt-czasowy">[])
