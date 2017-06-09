var express = require("express")
var path = require("path");
var bodyParser = require("body-parser")

var app = express();
// bodyParser for json
app.use(bodyParser.urlencoded());

// sets static folder
app.use(express.static(path.join(__dirname, "./static")));

// sets views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// get & root route
app.get('/', function(req, res) {
	 res.render("index");
	})

// result route on form submission
app.post('/result', function(req, res) {
		submitted_info = {
			name: req.body.name,
			dojo_location: req.body.dojo_location,
			favorite_language: req.body.favorite_language,
			comment: req.body.comment
		};
	 	res.render("result",{user_data: submitted_info});
	})

app.listen(8000, function() {
 console.log("listening on port 8000!");
})
