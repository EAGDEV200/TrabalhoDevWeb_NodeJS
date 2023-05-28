const assinanteModel = require('../models/assinanteModel');
const fs = require('fs');

class MovieController {
  async salvar(req, res) {
    let assinante = req.body;
    const max = await assinanteModel.findOne({}).sort({ codigo: -1 });
    assinante.id = max == null ? 1 : max.id + 1;
    
    const imagePath = 'caminho/para/imagem.jpg'; 
    const base64Image = convertImageToBase64(imagePath);
    assinante.ImagemPerfil = base64Image;

    const resultado = await assinanteModel.create(assinante);
    res.status(201).json(resultado);
  }

  async atualizar(req, res) {
    const id = req.params.id;
    const _id = String((await assinanteModel.findOne({ 'id': id }))._id);

    
    const imagePath = 'caminho/para/imagem.jpg'; 
    const base64Image = convertImageToBase64(imagePath);
  
    const dadosAtualizados = {
      Telefone: req.body.Telefone,
      Endereço: req.body.Endereço,
      Cidade: req.body.Cidade,
      Estado: req.body.Estado,
      Status: req.body.Status,
      ImagemPerfil: base64Image
    };

    await assinanteModel.findByIdAndUpdate(_id, dadosAtualizados);
    res.status(200).send();
  }
}

// Função para converter a imagem em base64
function convertImageToBase64(imagePath) {
  const image = fs.readFileSync(imagePath);
  const base64Image = image.toString('base64');
  return base64Image;
}

module.exports = new MovieController();
