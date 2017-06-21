var mongoose = require('mongoose')
var Hero = mongoose.model('Hero')

module.exports = {
    show: function(req, res) {
        Hero.find({}, function(err, heroes) {
            res.render('main', {heroes: heroes})
        })
    },
    // create: function(req, res) {
    //     var hero = new Hero({name: req.body.name, id: })
    // }

}
