var express = require("express")
var bodyParser = require("body-parser")
var controllers = require("./controllers.js")

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

controllers(app)

var server = app.listen(8080, '0.0.0.0', function () {
    console.log("The Sked API is listening on port.", server.address().port);
})