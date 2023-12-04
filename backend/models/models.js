import pool from '../config/dbPostGreSQL.js';

class Models {
  static all(table) {
    return new Promise(async (resolve, reject) => {
      const queryText = `SELECT * FROM ${table}`;
      const client = await pool.connect();
      const result = await client.query(queryText);
      client.release();
      resolve(result.rows);
    });
  }

  static filter(data, table) {
    return new Promise(async (resolve, reject) => {
      const keys = Object.keys(data);
      const placeholders = keys
        .map((key, index) => `${key} = $${index + 1}`)
        .join(' AND ');
      const queryText = `SELECT * FROM ${table} WHERE ${placeholders}`;
      const client = await pool.connect();
      const result = await client.query(queryText, Object.values(data));
      client.release();
      resolve(result.rows);
    });
  }

  static find(id, table) {
    return new Promise(async (resolve, reject) => {
      const queryText = `SELECT * FROM ${table} WHERE id = ${id}`;
      const client = await pool.connect();
      const result = await client.query(queryText);
      client.release();
      resolve(result.rows);
    });
  }

  static async create(data, table) {
    return new Promise(async (resolve, reject) => {
      const placeholdersCol = Object.keys(data)
        .map((key) => key)
        .join(`, `);
      const placeholdersVal = Object.values(data)
        .map((value) => `'${value}'`)
        .join(`, `);
      const queryText = `INSERT INTO ${table} (${placeholdersCol}) VALUES (${placeholdersVal})`;
      const client = await pool.connect();
      client.query(queryText, (err, result)=>{
        resolve(result)
      });
      client.release();
    });
  }

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
