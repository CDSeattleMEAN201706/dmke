
// Routing/incoming request management
var express = require("express")


var path = require("path")

// pull POST data out of HTTP requests, raw JSON, and GET url data
var bodyParser = require('body-parser')

// socket.io for web sockets
// var sockets = require('socketio')

var mongoose = require('mongoose')

// use native Node promises
mongoose.Promise = global.Promise

var app = express()

app.use(bodyParser.urlencoded({ extended: true }))

// setup and link to static content folder, angular dist folder in the case of full MEAN, the angular folder is commonly renamed as 'public', 'www', or 'static' - ex, '/public/dist'
app.use(express.static(path.join(__dirname, "/tour-of-heroes/dist")))

// setup views folder
//app.set('views', path.join(__dirname, './views'));

require('./server/config/mongoose.js')


var routes_setter = require('./server/config/routes.js')

routes_setter(app)

app.listen(8000, function() {
    console.log("listening on port 8000")
})
