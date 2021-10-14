var server = require('./config/server');
var app = server.app;
var porta = server.porta;

var mongoose=require('mongoose');

var conexao = ()=> {
    var caminho = mongoose.connect("mongodb+srv://awesome:54321@cluster0.tfqrg.mongodb.net/coisasawesome?retryWrites=true&w=majority")
}

var schema = mongoose.Schema;

var depoimentos = new schema({
nome:String,
cargo:String,
mensagem:String
});

var documentos = mongoose.model('depoimentos', depoimentos);

//setar ejs como engine
app.set('view engine', 'ejs');
app.set('views', './views');

//setar rota index.ejs
app.get('/',(req, res)=>{
conexao();
documentos.find().limit(3).sort({'_id': -1})

 .then((documentos)=>{
res.render('index', {documentos});
 })

 .catch((err)=>{
console.log(err);
 });

});
app.listen(porta); 