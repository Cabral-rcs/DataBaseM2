const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Listar todas as tarefas
router.get('/tarefas', async (req, res) => {
  const result = await db.query('SELECT * FROM tasks ORDER BY id');
  res.json(result.rows);
});

// Criar uma nova tarefa
router.post('/tarefas', async (req, res) => {
  const { title, description, status } = req.body;
  const result = await db.query(
    'INSERT INTO tasks (title, description, status) VALUES ($1, $2, $3) RETURNING *',
    [title, description, status]
  );
  res.json(result.rows[0]);
});

// Atualizar status
router.put('/tarefas/:id', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  await db.query('UPDATE tasks SET status = $1 WHERE id = $2', [status, id]);
  res.json({ message: 'Atualizado com sucesso' });
});

// Deletar tarefa
router.delete('/tarefas/:id', async (req, res) => {
  const { id } = req.params;
  await db.query('DELETE FROM tasks WHERE id = $1', [id]);
  res.json({ message: 'Deletado com sucesso' });
});

module.exports = router;