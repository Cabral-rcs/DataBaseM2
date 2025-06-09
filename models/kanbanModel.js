const db = require('../config/db');

module.exports = {

    async listar(){
        const res = await db.query('SELECT * FROM tasks');
        return res.rows;
    }

}