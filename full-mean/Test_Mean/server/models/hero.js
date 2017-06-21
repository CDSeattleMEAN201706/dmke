var mongoose = require('mongoose')

var HeroSchema = new mongoose.Schema({
    name: String,
    id: Number
})

var Hero = mongoose.model('Hero', HeroSchema)