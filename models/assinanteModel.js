const mongoose = require('mongoose');

const assinanteSchema = new mongoose.Schema({
  id: Number,
  Nome: String,
  Sobrenome: String,
  DataNascimento: String,
  Telefone: String,
  Endereço: String,
  Cidade: String,
  Estado: String,
  Status: String,
  ImagemPerfil: Buffer 
});

module.exports = mongoose.model('assinantes', assinanteSchema);