import { loadEnv } from "./load_env.js"
import type { NodeEnv } from "./node_env.js"

const env = loadEnv()

export const SENTRY_DSN: string | undefined = env["SENTRY_DSN"]
export const NODE_ENV: NodeEnv = env.NODE_ENV
export const PORT: number = Number(env["PORT"]) || 3000
