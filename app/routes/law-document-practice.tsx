import { redirect, type LoaderFunctionArgs } from "react-router"
import {
  genericPracticeModules,
  getDocument,
  getDocumentHomePath,
} from "~/data/legal-library"

// Keep existing bookmarks pointed at the act's authored example.
export function loader({ params }: LoaderFunctionArgs) {
  const document = getDocument(params.documentId)
  if (!document || document.id === "kpa") {
    throw new Response("Legal document not found", { status: 404 })
  }
  if (!genericPracticeModules.some((item) => item.id === params.practiceId)) {
    throw new Response("Practice module not found", { status: 404 })
  }
  return redirect(getDocumentHomePath(document.id) + "#legal-learning-example")
}

export default function LawDocumentPracticeRoute() {
  return null
}
