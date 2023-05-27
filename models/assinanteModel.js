const mongoose = require('mongoose');

const assinanteSchema = new mongoose.Schema({
  id: Number,
  Nome: String,
  Sobrenome: String,
  "Data de Nascimento": String,
  Telefone: String,
  Endereço: String,
  Cidade: String,
  Estado: String,
  Status: String
});

module.exports = mongoose.model('assinantes', assinanteSchema);
