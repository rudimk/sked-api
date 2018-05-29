const rancher = require('rancher.js')
const logger = require('./logging.js')

async function startRunner(payload){
	const cattleRustler = new rancher.Rancher(process.env.RANCHER_URL, process.env.RANCHER_API_KEY, process.env.RANCHER_API_SECRET)
	let newRunnerService = await cattleRustler.createStackService(process.env.RANCHER_ENV_ID, process.env.RANCHER_STACK_ID, payload.scale, payload.serviceName, payload.labels, payload.environmentVars, process.env.RUNNER_IMAGE_ID)
	logger.winston.info(`Scheduled new runner: ${newRunnerService['id']}`)
	return newRunnerService['id']
}

exports.startRunner = startRunner