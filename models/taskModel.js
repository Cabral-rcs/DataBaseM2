const db = require('../config/db');

module.exports = {
  async getAll() {
    const res = await db.query('SELECT * FROM tasks ORDER BY id');
    return res.rows;
  },
  async getByStatus(status) {
    const res = await db.query('SELECT * FROM tasks WHERE status = $1 ORDER BY id', [status]);
    return res.rows;
  },
  async create(task) {
    const res = await db.query(
      'INSERT INTO tasks (title, description, status) VALUES ($1, $2, $3) RETURNING *',
      [task.title, task.description, task.status]
    );
    return res.rows[0];
  },
  async update(id, status) {
    const res = await db.query(
      'UPDATE tasks SET status=$1 WHERE id=$2 RETURNING *',
      [status, id]
    );
    return res.rows[0];
  },
  async delete(id) {
    const res = await db.query('DELETE FROM tasks WHERE id=$1', [id]);
    return res;
  },
};