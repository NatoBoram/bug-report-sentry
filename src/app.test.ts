import { test } from "vitest"
import { app } from "./app.js"

test("app", ({ expect }) => {
	expect(app).toBeDefined()
})
