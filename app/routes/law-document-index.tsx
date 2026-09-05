import { redirect, type LoaderFunctionArgs } from "react-router"

import {
  getDocument,
  getDocumentProvisionPath,
  listProvisions,
} from "~/data/legal-library"

export function meta() {
  return [{ title: "Правовий акт — Legalizacja" }]
}

export function loader({ params }: LoaderFunctionArgs) {
  const document = getDocument(params.documentId)
  if (!document) throw new Response("Legal document not found", { status: 404 })
  return redirect(
    getDocumentProvisionPath(document.id, listProvisions(document.id)[0].id)
  )
}

export default function LawDocumentCompatibilityRoute() {
  return null
}
