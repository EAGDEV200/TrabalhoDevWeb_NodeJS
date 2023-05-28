const express = require('express');
const router = express.Router();
const assinanteController = require('../controllers/assinanteController');

router.get('/listar', assinanteController.listar);
router.get('/buscarUsuarios', assinanteController.buscarUsuarios);
router.post('/Criar', assinanteController.salvar);
router.get('/buscarPorId/:id', assinanteController.buscarPorId);
router.put('/atualizar/:id', assinanteController.atualizar);
router.delete('/excluir/:id', assinanteController.excluir);

module.exports = router;

