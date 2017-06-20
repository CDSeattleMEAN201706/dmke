
// Routing/incoming request management
var express = require("express")


var path = require("path")

// pull POST data out of HTTP requests, raw JSON, and GET url data
var bodyParser = require('body-parser')

// socket.io for web sockets
// var sockets = require('socketio')

var mongoose = require('mongoose')

var app = express()

app.use(bodyParser.urlencoded({ extended: true }))

// setup and link to static content folder
app.use(express.static(path.join(__dirname, "./static")))

// setup views folder
//app.set('views', path.join(__dirname, './views'));



app.get('/', function(request, response) {
    response.send("<h1>Hello Express</h1>")
    // res.render("index")
})

app.listen(8000, function() {
    console.log("listening on port 8000")
})
