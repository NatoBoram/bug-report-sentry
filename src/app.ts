import * as Sentry from "@sentry/google-cloud-serverless"
import type { NodeOptions } from "@sentry/node"
import { nodeProfilingIntegration } from "@sentry/profiling-node"
import type { Express } from "express"
import express from "express"
import { NODE_ENV, SENTRY_DSN } from "./env.js"

const options: NodeOptions = {
	dsn: SENTRY_DSN.toString(),
	environment: NODE_ENV,
	integrations: [nodeProfilingIntegration()],

	tracesSampleRate: 1.0,
	profilesSampleRate: 1.0,
}
Sentry.init(options)

export const app: Express = express()

app.all("/ping", (_req, res) => void res.status(200).send("pong"))

Sentry.setupExpressErrorHandler(app)
app.all("*", (_req, res) => void res.sendStatus(404))
