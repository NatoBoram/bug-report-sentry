/**
 * @see https://nodejs.org/en/learn/getting-started/nodejs-the-difference-between-development-and-production
 * @see https://vitest.dev/guide/migration.html#envs
 */
export type NodeEnv = (typeof nodeEnvs)[keyof typeof nodeEnvs]
export type ProcessEnv = typeof process.env

export function isNodeEnv(value: unknown): value is NodeEnv {
	return Object.values<unknown>(nodeEnvs).includes(value)
}

export function toNodeEnv(value: unknown): NodeEnv {
	if (isNodeEnv(value)) return value
	return nodeEnvs.development
}

const nodeEnvs = {
	development: "development",
	production: "production",
	/**
	 * Vitest sets `NODE_ENV` to `test` if it wasn't set before.
	 * @see https://vitest.dev/guide/migration.html#envs
	 */
	test: "test",
} as const
