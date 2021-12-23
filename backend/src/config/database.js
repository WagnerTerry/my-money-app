// const mongoose = require('mongoose')
// mongoose.Promise = global.Promise
// module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true })

// mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório"
// mongoose.Error.messages.Number.min =
//     "O '{VALUE} informado é menor que o limite mínimo de '{MIN}'."
// mongoose.Error.messages.Number.max =
//     "O '{VALUE} informado é menor que o limite mínimo de '{MAX}'."
// mongoose.Error.messages.String.enum =
//     "'{VALUE} não é valido para o atributo '{PATH}'."

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
module.exports = mongoose.connect(
  //conexão mongo atlas
  "mongodb+srv://wagner:1590456@mymoney-backend.0u8ty.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  {
    //conexao local
    //module.exports = mongoose.connect("mongodb://localhost/mymoney", {
    useMongoClient: true,
  }
);
