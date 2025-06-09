const db = require('../config/db');

exports.list = async (req, res) => {
  const result = await db.query('SELECT * FROM tasks ORDER BY id DESC');
  res.render('index', { title: 'Tarefas', tasks: result.rows });
};

exports.create = async (req, res) => {
  const { title, description, status } = req.body;
  await db.query(
    'INSERT INTO tasks (title, description, status) VALUES ($1, $2, $3)',
    [title, description, status]
  );
  res.redirect('/');
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  await db.query('DELETE FROM tasks WHERE id = $1', [id]);
  res.redirect('/');
};

exports.kanban = async (req, res) => {
  const result = await db.query('SELECT * FROM tasks');
  const tasks = result.rows;

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

  await db.query('UPDATE tasks SET status = $1 WHERE id = $2', [status, id]);
  res.redirect('/kanban');
};