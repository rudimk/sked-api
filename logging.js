const winston = require('winston')
//require('winston-syslog').Syslog
//require('winston-logstash')
const pJson = require('./package.json')

const tsFormat = function () {
  var d = (new Date())
  return (d.getFullYear() + ("0" + (d.getMonth() + 1)).slice(-2) + ("0" + d.getDate()).slice(-2) +
    ("0" + d.getHours()).slice(-2) + ("0" + d.getMinutes()).slice(-2) + ("0" + d.getSeconds()).slice(-2) +
    "." + ("0" + d.getMilliseconds()).slice(-3))
}

winston.setLevels(winston.config.syslog.levels)

winston.configure({
  transports: [
    new(winston.transports.Console)({
      level: process.env.LOG_LEVEL || 'info',
      timestamp: tsFormat,
      colorize: true
    })
  ]
})

/*
const syslogOptions = {
  "host": process.env.SYSLOG_HOST || "localhost",
  "protocol": "udp4",
  "port": "514",
  "facility": "local0",
  "eol": "\n",
  "app_name": "planb-api"
}

winston.add(
  winston.transports.Syslog,
  Object.assign(syslogOptions, {
    showLevel: 'info'
  })
)

winston.add(winston.transports.Logstash, {
    port: process.env.LOGSTASH_PORT,
    node_name: pJson.name,
    host: process.env.LOGSTASH_HOST
  })
*/

exports.winston = winston