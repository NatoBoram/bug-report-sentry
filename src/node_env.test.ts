import { describe, expectTypeOf, test } from "vitest"
import { isNodeEnv, toNodeEnv } from "./node_env.js"

describe("node_env.ts", () => {
	test("isNodeEnv", ({ expect }) => {
		expectTypeOf(isNodeEnv).guards.toBeString()

		expect(isNodeEnv("development")).toBe(true)
		expect(isNodeEnv("production")).toBe(true)
		expect(isNodeEnv("test")).toBe(true)

		expect(isNodeEnv("invalid")).toBe(false)
	})

	test("toNodeEnv", ({ expect }) => {
		expect(toNodeEnv("development")).toBe("development")
		expect(toNodeEnv("production")).toBe("production")
		expect(toNodeEnv("test")).toBe("test")

		expect(toNodeEnv("invalid")).toBe("development")
	})
})
