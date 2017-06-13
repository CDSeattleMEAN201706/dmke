var mongoose = require('mongoose');
var Dog = mongoose.model('Dog');
module.exports = {
  show: function(req, res) {
    Dog.find({}, function(err, quotes) {
      res.render('main', {dogs: dogs});
    })
  },
  create: function(req, res) {
    var dog = new Dog({name: req.body.name, weight: req.body.weight, color: req.body.color});
    dog.save(function(err) {
      if(err){
        console.log(err);
      } else {
        res.redirect('/');
      }
    })
  }
}

app.get('/', function(req, res){
  Dog.find({}, function(err, results){
    if (err) { console.log(err); }
    res.render('index', { dogs: results });
  });
});

// Create
app.post('/', function(req, res){
  // Create a new dog!
  Dog.create(req.body, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/')
  });
});

// New
app.get('/new', function(req, res){
  res.render('new');
});

// Show
app.get('/:id', function(req, res){
  Dog.find({ _id: req.params.id }, function(err, response) {
    if (err) { console.log(err); }
    res.render('show', { dog: response[0] });
  });
});

app.get('/:id/edit/', function(req, res){
  Dog.find({ _id: req.params.id }, function(err, response) {
    if (err) { console.log(err); }
    res.render('edit', { dog: response[0] });
  })
});

// Update
app.post('/:id', function(req, res){
  Dog.update({ _id: req.params.id }, req.body, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/');
  });
});

// Delete
app.post('/:id/delete', function(req, res){
  Dog.remove({ _id: req.params.id }, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/');
  });
});
