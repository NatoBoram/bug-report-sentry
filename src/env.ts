import { envInt, envString, envUrl, loadEnv } from "./load_env.js"
import type { NodeEnv } from "./node_env.js"

const env = loadEnv()

export const NODE_ENV: NodeEnv = env.NODE_ENV
export const OPENAI_API_KEY: string = envString("OPENAI_API_KEY")
export const PORT: number = envInt("PORT")
export const SENTRY_DSN: URL = envUrl("SENTRY_DSN")
