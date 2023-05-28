const express = require('express');
const router = express.Router();
const assinanteController = require('../controllers/assinanteController');
const multer = require('multer'); // Pacote para lidar com o upload de arquivos

const upload = multer();

router.get('/listar', assinanteController.listar);
router.get('/buscarUsuarios', assinanteController.buscarUsuarios);
router.post('/criar', upload.single('imagem'), assinanteController.salvar);
router.get('/buscarPorId/:id', assinanteController.buscarPorId);
router.put('/atualizar/:id', assinanteController.atualizar);
router.delete('/excluir/:id', assinanteController.excluir);

module.exports = router;

