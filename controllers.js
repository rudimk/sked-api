const logger = require('./logging.js')
const db = require('knex')(require('./knexfile.js'))


async function newScheduleController($){
	try{
		let rawPayload = JSON.parse($.body)
		let schedulePayload = rawPayload['schedule']
		let workflowPayload = rawPayload['workflow']
		schedulePayload['status'] = 0
		schedulePayload['active'] = 1
		schedulePayload['minutes'] = JSON.stringify(schedulePayload['minutes'])
		schedulePayload['hours'] = JSON.stringify(schedulePayload['hours'])
		schedulePayload['days'] = JSON.stringify(schedulePayload['days'])
		schedulePayload['weekdays'] = JSON.stringify(schedulePayload['weekdays'])
		schedulePayload['months'] = JSON.stringify(schedulePayload['months'])
		let newScheduleRow = await db('schedules').returning('id').insert(schedulePayload)
		let newActionRow = await db('actions').returning('id').insert({schedule_id: newScheduleRow[0], action_type: 2})
		workflowPayload['action_id'] = newActionRow[0]
		workflowPayload['payload'] = JSON.stringify(workflowPayload['payload'])
		let newWorkflowRow = await db('amqp_workflows').returning('id').insert(workflowPayload)
		$.status(200)
		$.json({success: true, message: 'Schedule created successfully.', schedule_id: newScheduleRow[0], workflow_id: newWorkflowRow[0]})
	}
	catch(err){
		logger.winston.error("Error detected in newScheduleController: ", err)
		$.status(500)
		$.json({message: err})
	}
}


async function updateScheduleController($){
	try{
		let deactivateSchedule = await db('schedules').where('id', '=', $.query['id']).update({active: 0})
		let rawPayload = JSON.parse($.body)
		let schedulePayload = rawPayload['schedule']
		let workflowPayload = rawPayload['workflow']
		schedulePayload['status'] = 0
		schedulePayload['active'] = 1
		schedulePayload['minutes'] = JSON.stringify(schedulePayload['minutes'])
		schedulePayload['hours'] = JSON.stringify(schedulePayload['hours'])
		schedulePayload['days'] = JSON.stringify(schedulePayload['days'])
		schedulePayload['weekdays'] = JSON.stringify(schedulePayload['weekdays'])
		schedulePayload['months'] = JSON.stringify(schedulePayload['months'])
		let newScheduleRow = await db('schedules').returning('id').insert(schedulePayload)
		let newActionRow = await db('actions').returning('id').insert({schedule_id: newScheduleRow[0], action_type: 2})
		workflowPayload['action_id'] = newActionRow[0]
		workflowPayload['payload'] = JSON.stringify(workflowPayload['payload'])
		let newWorkflowRow = await db('amqp_workflows').returning('id').insert(workflowPayload)
		$.status(200)
		$.json({success: true, message: 'Schedule updated successfully.', schedule_id: newScheduleRow[0], workflow_id: newWorkflowRow[0]})
	}
	catch(err){
		logger.winston.error("Error detected in updateScheduleController: ", err)
		$.status(500)
		$.json({message: err})
	}
}


async function cycleScheduleController($){
	try{
		let cycleSchedule = await db('schedules').where('id', '=', $.query['id']).update({active: $.query['active']})
		$.status(200)
		$.json({success: true, message: `Schedule status successfully set to ${$.query['active']}.`})
	}
	catch(err){
		logger.winston.error("Error detected in cycleScheduleController: ", err)
		$.status(500)
		$.json({message: err})
	}
}


exports.newScheduleController = newScheduleController
exports.updateScheduleController = updateScheduleController
exports.cycleScheduleController = cycleScheduleController