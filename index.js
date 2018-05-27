const server = require("diet")
const requestLog = require('./requestLog.js')
const healthCheck = require('./healthCheck.js')
const controllers = require('./controllers.js')

const app = server()
app.listen('http://0.0.0.0:8989')

// Adding a header for logging all incoming requests.
app.header(requestLog)

// Endpoint for health checks
app.get('/api/v2/status', healthCheck.healthCheck)

// Endpoint for adding a new schedule and associated workflow.
app.post('/api/v2/schedule', controllers.newScheduleController)

// Endpoint for updating an existing schedule and/or its workflow.
app.put('/api/v2/schedule', controllers.updateScheduleController)

// Endpoint for cycling a schedule's active status.
app.patch('/api/v2/schedule', controllers.cycleScheduleController)