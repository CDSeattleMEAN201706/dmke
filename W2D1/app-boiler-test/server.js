// require express and path
var express = require("express");
var path = require("path");
// create the express app
var app = express();
// require bodyParser since we need to handle post data for adding a user
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quotes');
var QuoteSchema = new mongoose.Schema({
  name: String,
  quote: String
})
var Quote = mongoose.model('Quote', QuoteSchema);
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// store the function in a variable
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);
// tell the express app to listen on port 8000
app.listen(8000, function() {
  console.log("listening on port 8000");
