var mongoose = require('mongoose')
var Quote = mongoose.model('Quote')

// export logic for 'Quotes'
// two functions, show quotes and create quotes
module.exports = {

  show: function(req, res) {
    Quote.find({}, function(err, quotes) {
      res.render('main', {quotes: quotes})
    })
  },

  create: function(req, res) {
    var quote = new Quote({name: req.body.name, quote: req.body.quote})
    // save quote in database
    quote.save(function(err) {
      // log if error
      if(err){
        console.log("something went wrong")
      } else {
        // redirect to main page after saving
        res.redirect('/main')
      }
    })
  }
}
