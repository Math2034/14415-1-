// servidor
var express = require('express')
var app = express()

var porta = process.env.PORT || 3636

// config.
app.set("view engine", "ejs")
app.use(express.static('./'))

// rota para abrir o arquivo index.ejs
app.get('/',(req,res)=>{
    res.render('index')
})

// ligar servidor
app.listen(porta)