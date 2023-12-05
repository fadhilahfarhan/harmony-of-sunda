import pool from '../config/dbPostGreSQL.js';

class Models {
  static all(table) {
    return new Promise(async (resolve, reject) => {
      const queryText = `SELECT * FROM ${table}`;
      const client = await pool.connect();
      client.query(queryText, (err, result)=>{
        resolve(result.rows); 
      });
      client.release();
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
      client.query(queryText, Object.values(data), (err, result)=>{
        resolve(result.rows);
      });
      client.release();
    });
  }

  static find(id, table) {
    return new Promise(async (resolve, reject) => {
      const queryText = `SELECT * FROM ${table} WHERE id = ${id}`;
      const client = await pool.connect();
      client.query(queryText, (err, result)=>{
        resolve(result.rows);
      });
      client.release();
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
      client.query(queryText, (err, result) => {
        resolve(result);
      });
      client.release();
    });
  }

  static update (data, id, table) {
    return new Promise(async(resolve, reject) => {
      const placeholders = Object.entries(data).map(([key, value])=>`${key} = '${value}'`).join(', ');
      const queryText = `UPDATE ${table} SET ${placeholders} WHERE id = ${id}`
      const client = await pool.connect();
      client.query(queryText, (err, result)=>{
        resolve(result)
      })
    })
  }

  static delete(id, table){
    return new Promise(async(resolve, reject) => {
      const queryText = `DELETE FROM ${table} WHERE id = ${id}`;
      const client = await pool.connect();
      client.query(queryText, (err, result)=>{
        resolve(result)
      })
    })
  }
}

export default Models;
