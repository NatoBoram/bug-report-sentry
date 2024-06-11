import { config } from "dotenv"
import path from "node:path"
import type { NodeEnv, ProcessEnv } from "./node_env.js"
import { toNodeEnv } from "./node_env.js"

export interface LoadedEnv extends ProcessEnv {
	readonly NODE_ENV: NodeEnv
}

export function envInt(key: string): number {
	const num = envNumber(key)
	if (!Number.isInteger(num))
		throw new Error(`$${key} is not an integer: ${num}`)
	return num
}

export function envNumber(key: string): number {
	const str = process.env[key]?.trim()
	if (!str) throw new Error(`$${key} is missing`)

	const num = Number(str)
	if (isNaN(num)) throw new Error(`$${key} is not a number: ${str}`)
	return num
}

/** Loads environment variables from the `.env` files. `NODE_ENV` has to be set
 * in the environment and will not be picked up from there.
 *
 * If `NODE_ENV` is not set, it will default to `development`.
 *
 * Environment variables are loaded in the following order:
 *
 * 1. `.env.development.local`
 * 2. `.env.development`
 * 3. `.env.local`
 * 4. `.env`
 */
export function loadEnv(): LoadedEnv {
	const cwd = process.cwd()
	const NODE_ENV = toNodeEnv(process.env["NODE_ENV"]?.trim())

	const { parsed, error } = config({
		path: [
			path.resolve(cwd, `.env.${NODE_ENV}.local`),
			path.resolve(cwd, `.env.${NODE_ENV}`),
			path.resolve(cwd, ".env.local"),
			path.resolve(cwd, ".env"),
		],
	})

	if (!parsed)
		throw new Error("Environment variables could not be loaded.", {
			cause: error,
		})

	const merged = Object.assign(parsed, process.env, { NODE_ENV })
	process.env = merged
	return merged
}
