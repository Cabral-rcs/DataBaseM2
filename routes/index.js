// routes/index.js
const express = require('express');
const router = express.Router();
const TarefaController = require('../controllers/tarefaController');

// Rotas para o CRUD de tarefas
router.get('/tarefas', TarefaController.listarTarefas);
router.post('/tarefas/criar', TarefaController.criarTarefa);
router.put('/tarefas/:nome', TarefaController.editarTarefa);
router.delete('/tarefas/:id', TarefaController.excluirTarefa);

module.exports = router;

