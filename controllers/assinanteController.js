const assinanteModel = require('../models/assinanteModel');

class MovieController {
  async salvar(req, res) {
    let assinante = req.body;
    const max = await assinanteModel.findOne({}).sort({ codigo: -1 });
    assinante.id = max == null ? 1 : max.id + 1;
    const resultado = await assinanteModel.create(assinante);
    res.status(201).json(resultado);
  }

  async listar(req, res) {
    const resultado = await assinanteModel.find({})
      .select('-_id id Nome Sobrenome Cidade Estado Status');
    res.status(200).json(resultado);
  }

  async buscarPorId(req, res) {
    const id = req.params.id;
    const resultado = await assinanteModel.findOne({ id: id });
    res.status(200).json(resultado);
  }

  async buscarUsuarios(req, res) {
    const { nome, sobrenome, cidade, estado, status } = req.query;
    const filtro = {};

    if (nome) {
      filtro.Nome = nome;
    }
    if (sobrenome) {
      filtro.Sobrenome = sobrenome;
    }
    if (cidade) {
      filtro.Cidade = cidade;
    }
    if (estado) {
      filtro.Estado = estado;
    }
    if (status) {
      filtro.Status = status;
    }

    const resultado = await assinanteModel.findOne(filtro).select('Nome');
  res.status(200).json(resultado);
  }

  async atualizar(req, res) {
    const id = req.params.id;
    const _id = String((await assinanteModel.findOne({ id: id }))._id);
    const dadosAtualizados = {
      
      Telefone: req.body.Telefone,
      Endereço: req.body.Endereço,
      Cidade: req.body.Cidade,
      Estado: req.body.Estado,
      Status: req.body.Status,
      ImagemPerfil: req.body.ImagemPerfil
    };
    await assinanteModel.findByIdAndUpdate(_id, dadosAtualizados);
    res.status(200).send();
  }

  async excluir(req, res) {
    const id = req.params.id;
    const _id = String((await assinanteModel.findOne({ id: id }))._id);
    await assinanteModel.findByIdAndRemove(_id);
    res.status(200).send();
  }
}

module.exports = new MovieController();
