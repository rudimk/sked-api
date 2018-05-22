async function healthCheck($){
	$.status(200)
	$.json({status: true})
}

exports.healthCheck = healthCheck