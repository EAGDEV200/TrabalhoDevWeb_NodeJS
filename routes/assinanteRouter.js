const express = require('express');
const router = express.Router();
const assinanteController = require('../controllers/assinanteController');

router.get('/', assinanteController.listar);
router.post('/', assinanteController.salvar);
router.get('/:id', assinanteController.buscarPorId);
router.put('/:id', assinanteController.atualizar);
router.delete('/:id', assinanteController.excluir);

module.exports = router;
