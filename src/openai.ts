import OpenAI from "openai"
import { OPENAI_API_KEY } from "./env.js"

export const openai: OpenAI = new OpenAI({ apiKey: OPENAI_API_KEY })
