const logging = require('./logging.js')

// We're defining a middleware function here for logging the request timestamp, method, and url
// TODO figure out a better way to log this

async function logRequest($){
	logging.winston.info(new Date().toISOString() + ": " + $.method + ": " + $.url.path)
	$.return()
}

module.exports = logRequest