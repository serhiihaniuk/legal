import { Navigate, useParams } from "react-router"

export function meta() {
  return [{ title: "Гайд по справі — Legalizacja" }]
}

export default function LegacyCasePage() {
  const { routeId = "cukr" } = useParams()

  return <Navigate replace to={`/cases/${routeId}`} />
}
