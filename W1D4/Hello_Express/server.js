var express = require("express")
var bodyParser = require("body-parser")
var app = express()

app.use(bodyParser.urlencoded({extended: true}))



app.use(express.static(__dirname + "/static"))
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

app.get('/', function(request, reponse) {
  reponse.send("<h1>Hello Express</h1>")
})

app.get("/users", function(request, response) {
  var users_array = [
    {mame: "Michael", email: "michael@codigndojo.com"},
    {name: "Jay", email: "jay@codingdojo.com"},
    {name: "David", email: "ifonlytheyweresolucky@codingdojo.com"}
  ]
  response.render('users', {users: users_array})
})

app.listen(8000, function() {
  console.log("listening on port 8000")
})

// root route
app.get('/', function(req, res) {
  res.render('index', {title: "my Express project"})
})

// Data from FORM (POST data)
// route to process new user form data
app.post('/users', function (req, res){
  console.log("POST DATA \n\n", req.body)
  res.redirect('/')
})

// Data from URL (GET data)
app.get("users/:id", function(req, res){
  console.log("The user id requested is:")
  res.send("You requested the user with id: " + req.params.id)
})


// just shown for example

var session = require('express-session')
app.use(session({secret: 'mysecretpass'}))

app.post('/users', function (req, res)){
  req.session.name = req.body.name
  console.log(req.session.name)
  res.redirect('/')
}
