import { test } from "vitest"

test("index", async ({ expect }) => {
	const index = await import("../src/index.js")
	expect(index).toBeDefined()
}, 1000)
