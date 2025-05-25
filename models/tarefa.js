const Tarefa = require('../models/tarefa');

exports.listarTarefas = async (req, res) => {
  try {
    const tarefas = await Tarefa.listarTarefas();
    res.status(200).json(tarefas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};