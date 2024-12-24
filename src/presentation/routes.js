const express = require('express');
const empreendedoresController = require('./controllers/empreendedoresController');

const router = express.Router();

// Rotas para empreendedores
router.get('/empreendedores', empreendedoresController.listarEmpreendedores);
router.post('/empreendedores', empreendedoresController.criarEmpreendedor);
router.put('/empreendedores/:id', empreendedoresController.atualizarEmpreendedor);
router.delete('/empreendedores/:id', empreendedoresController.deletarEmpreendedor);

module.exports = router;
