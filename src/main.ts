#!/usr/bin/env node

import { PORT } from "./env.js"
import { app } from "./index.js"

app.listen(PORT, () => {
	console.log(`Server is running at <http://localhost:${PORT}>.`)
})
