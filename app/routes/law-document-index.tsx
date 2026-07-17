import { redirect, type LoaderFunctionArgs } from "react-router"

import { getDocument, getDocumentHomePath } from "~/data/legal-library"

export function meta() {
  return [{ title: "Правовий акт — Legalizacja" }]
}

export function loader({ params }: LoaderFunctionArgs) {
  const document = getDocument(params.documentId)
  if (!document) throw new Response("Legal document not found", { status: 404 })
  return redirect(getDocumentHomePath(document.id))
}

export default function LawDocumentCompatibilityRoute() {
  return null
}
