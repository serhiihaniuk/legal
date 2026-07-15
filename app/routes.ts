import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes"

export default [
  layout("routes/shell.tsx", [
    index("routes/home.tsx"),
    route("law", "routes/law.tsx"),
    route("law/:documentId", "routes/law-document.tsx"),
    route(
      "law/:documentId/provisions/:provisionId",
      "routes/law-provision.tsx"
    ),
    route(
      "law/:documentId/learn/:moduleId",
      "routes/law-kpa-compat.tsx"
    ),
    route(
      "law/:documentId/practice/:practiceId",
      "routes/law-kpa-practice-compat.tsx"
    ),
    route("guide/kpa", "routes/kpa.tsx"),
    route("map/:nodeId?", "routes/map.tsx"),
    route("documents/:documentId?", "routes/documents.tsx"),
    route("cases/:routeId", "routes/case.tsx"),
    route("cases/ukraine-work/:routeId", "routes/legacy-case.tsx"),
    route("study", "routes/study.tsx"),
  ]),
] satisfies RouteConfig
