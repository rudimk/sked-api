const server = require("diet")
const requestLog = require('./middleware/requestLog.js')
const healthCheck = require('./middleware/healthCheck.js')

const app = server()
app.listen('http://0.0.0.0:8080')

// Adding a header for logging all incoming requests.
app.header(requestLog)

// Endpoint for health checks
app.get('/api/v2/status', healthCheck.healthCheck)