const rancher = require('rancher.js')
const logger = require('./logging.js')

async function createRunner(payload){
	const cattleRustler = new rancher.Rancher(process.env.RANCHER_URL, process.env.RANCHER_API_KEY, process.env.RANCHER_API_SECRET)
	let newRunnerService = await cattleRustler.createStackService(process.env.RANCHER_ENV_ID, process.env.RANCHER_STACK_ID, payload.scale, payload.serviceName, payload.labels, payload.environmentVars, process.env.RUNNER_IMAGE_ID)
	logger.winston.info(`Scheduled new runner: ${newRunnerService['id']}`)
	return newRunnerService['id']
}

async function startRunner(runnerId){
	const cattleRustler = new rancher.Rancher(process.env.RANCHER_URL, process.env.RANCHER_API_KEY, process.env.RANCHER_API_SECRET)
	let startRunnerService = await cattleRustler.startService(process.env.RANCHER_ENV_ID, runnerId)
	return true
}

async function stopRunner(runnerId){
	const cattleRustler = new rancher.Rancher(process.env.RANCHER_URL, process.env.RANCHER_API_KEY, process.env.RANCHER_API_SECRET)
	let stopRunnerService = await cattleRustler.stopService(process.env.RANCHER_ENV_ID, runnerId)
	return true
}

exports.createRunner = createRunner
exports.startRunner = startRunner
exports.stopRunner = stopRunner
