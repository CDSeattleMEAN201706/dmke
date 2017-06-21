var heroes = require('../controllers/heroes.js')

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index')
    })
    app.get('/main', function(req, res) {
        heroes.show(req, res)
    })
}
