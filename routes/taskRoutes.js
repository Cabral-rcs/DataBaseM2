const express = require('express');
const router = express.Router();

// IMPORTAÇÃO CORRETA DO CONTROLLER
const taskController = require('../controllers/taskController');

// ROTAS COM FUNÇÕES
router.get('/', taskController.list);
router.post('/tasks', taskController.create);
router.post('/tasks/:id/delete', taskController.delete);
router.get('/kanban', taskController.kanban);
router.post('/tasks/:id/update', taskController.updateStatus);

module.exports = router;