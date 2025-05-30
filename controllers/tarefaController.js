// controllers/TarefaController.js
const pool = require('../config/db');

// Criar uma nova tarefa
exports.criarTarefa = async (req, res) => {
  const { nome, descricao, prazo, estatus } = req.body;

const query = `
  INSERT INTO tarefas (nome, descricao, prazo, estatus)
  VALUES ($1, $2, $3, $4)
  RETURNING *;
`;
const values = [nome, descricao, prazo, estatus];
  try {
    const result = await pool.query(query, values);
    const tarefa = result.rows[0];
    res.status(201).json(tarefa);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Listar todas as tarefas
exports.listarTarefas = async (req, res) => {
  const query = 'SELECT * FROM tarefas';

  try {
    const result = await pool.query(query);
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Editar uma tarefa
exports.editarTarefa = async (req, res) => {
  const { nomeAntigo } = req.params; // nome da tarefa original (a que será atualizada)
  const { nomeNovo, descricao, prazo, estatus } = req.body;

  const query = `
    UPDATE tarefas
    SET nome = $1, descricao = $2, prazo = $3, estatus = $4
    WHERE nome = $5 RETURNING *;
  `;
  const values = [nomeNovo, descricao, prazo, estatus, nomeAntigo];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Excluir uma tarefa
exports.excluirTarefa = async (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM tarefas WHERE idtarefa = $1 RETURNING *';
  const values = [id];

  try {
    const result = await pool.query(query, values);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Tarefa não encontrada' });
    }
    res.status(200).json({ message: 'Tarefa excluída com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};