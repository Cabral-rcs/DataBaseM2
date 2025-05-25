// routes/index.js
const express = require('express');
const router = express.Router();
const TarefaController = require('../controllers/tarefaController');

// Rotas para o CRUD de tarefas
router.post('/tarefas/criar', TarefaController.criarTarefa);
router.get('/tarefas', TarefaController.listarTarefas);
router.put('/tarefas/:nome', TarefaController.editarTarefa);
router.delete('/tarefas/:id', TarefaController.excluirTarefa);

module.exports = router;

