const rancher = require('rancher.js')
const logger = require('./logging.js')

async function startRunner(payload){
	const cattleRustler = new rancher.Rancher(process.env.RANCHER_URL, process.env.RANCHER_API_KEY, process.env.RANCHER_API_SECRET)
	let newRunnerService = await cattleRustler.createStackService(payload.environmentId, payload.stackId, payload.serviceName, payload.labels, payload.environmentVars, payload.imageUuid)
	logger.winston.info(`Scheduled new runner: ${newRunnerService}`)
	return true
}

exports.startRunner = startRunner