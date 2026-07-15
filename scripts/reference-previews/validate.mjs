import path from "node:path"
import { fileURLToPath } from "node:url"
import { createServer } from "vite"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..")
const server = await createServer({
  root,
  configFile: false,
  appType: "custom",
  resolve: {
    alias: [{ find: "~", replacement: path.join(root, "app") }],
  },
  server: { middlewareMode: true },
})

try {
  const fixture = await server.ssrLoadModule(
    path.join(root, "app/data/reference-preview.fixture.ts")
  )
  const result = await fixture.validateReferencePreviewFixture()
  console.log("reference previews: passed")
  console.log(JSON.stringify(result.counts))
} finally {
  await server.close()
}
