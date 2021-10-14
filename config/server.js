var express = require('express')
var app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.static('./'))

var porta = process.env.PORT || 1134

module.exports = {app, porta}