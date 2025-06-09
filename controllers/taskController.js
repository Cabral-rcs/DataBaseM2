//const db = require('../config/db');
const taskModel = require('../models/taskModel');
const kanbanModel = require('../models/kanbanModel')

exports.list = async (req, res) => {
  const tasks = await taskModel.getAll(); // ⬅️ chama o model
  res.render('index', { title: 'Tarefas', tasks });
};

exports.create = async (req, res) => {
  const { title, description, status } = req.body;
  await taskModel.create({title, description, status}); // ⬅️ chama o model
  res.redirect('/');
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  await taskModel.delete(id)
  res.redirect('/')
};

exports.kanban = async (req, res) => {

  const tasks = await kanbanModel.listar()

  const grouped = {
    todo: tasks.filter(t => t.status === 'To Do'),
    doing: tasks.filter(t => t.status === 'Doing'),
    done: tasks.filter(t => t.status === 'Done')
  };
  res.render('kanban', { title: 'Kanban', tasks: grouped });
};

exports.updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  await taskModel.update(id, status)
  res.redirect('/kanban')
};