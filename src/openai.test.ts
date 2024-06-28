import { test } from "vitest"
import { openai } from "./openai.js"

test("openai", ({ expect }) => {
	expect(openai).toBeDefined()
})
