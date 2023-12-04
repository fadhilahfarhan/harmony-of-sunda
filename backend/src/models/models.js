import pool from '../config/dbPostGreSQL.js';

class Models {
  static all(table) {
    return new Promise(async (resolve, reject) => {
      const queryText = `SELECT * FROM ${table}`
      const client = await pool.connect();
      const result = await client.query(queryText);
      client.release();
      resolve(result.rows);
    }); 
  }

  static filter(data, table) {
    return new Promise(async (resolve, reject) => {
      const keys = Object.keys(data)
      const placeholders = keys.map((key, index) => `${key} = $${index + 1}`).join(' AND ');
      const queryText = `SELECT * FROM ${table} WHERE ${placeholders}`;
      const client = await pool.connect();
      const result = await client.query(queryText, Object.values(data));
      client.release();
      resolve(result.rows);
    });
  }

  // static find (id, table) {
  //   return new Promise((resolve, reject) => {
  //     const sql = 'SELECT * FROM ?? WHERE id = ?';
  //     db.query(sql, [table, id], (error, results) => {
  //       if (error) throw error;
  //       const [data] = results;
  //       resolve(data);
  //     })
  //   })
  // }

  // static async create(data, table) {
  //   const returnId = await new Promise((resolve, reject) => {
  //     const sql = 'INSERT INTO ?? SET ?';
  //     db.query(sql, [table, data], (error, results) => {
  //       if (error) throw error;
  //       resolve(results.insertId);
  //     });
  //   });

  //   return this.find(returnId, table);
  // }

  // static async update (data, id, table) {
  //   await new Promise((resolve, reject) => {
  //     const sql = 'UPDATE ?? SET ? WHERE id = ?';
  //     db.query(sql, [table, data, id], (error, results) => {
  //       if (error) throw error;
  //       resolve(results)
  //     })
  //   })

  //   return this.find(id, table);
  // }

  // static delete(id, table){
  //   return new Promise((resolve, reject) => {
  //     const sql = 'DELETE FROM ?? WHERE id = ?';
  //     db.query(sql, [table, id], (error, results) => {
  //       if(error) throw error;
  //       resolve(results);
  //     }) 
  //   })
  // }
}

export default Models;
