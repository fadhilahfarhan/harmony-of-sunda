import db from '../config/dbmysql.js';

class Models {
  static all(table) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM ??';
      db.query(sql, table, (error, results) => {
        if (error) throw error;
        resolve(results);
      });
    });
  }

  static filter(data, table) {
    return new Promise((resolve, reject) => {
      const keys = Object.keys(data);
      const placeholders = keys.map((key) => `${key} = ?`).join(' AND ');
      const sql = `SELECT * FROM ?? WHERE ${placeholders}`;
      db.query(sql, [table, ...Object.values(data)], (error, results) => {
        if (error) throw error;
        resolve(results);
      });
    });
  }

  static find (id, table) {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT * FROM ?? WHERE id = ?';
      db.query(sql, [table, id], (error, results) => {
        if (error) throw error;
        const [data] = results;
        resolve(data);
      })
    })
  }

  static async create(data, table) {
    const returnId = await new Promise((resolve, reject) => {
      const sql = 'INSERT INTO ?? SET ?';
      db.query(sql, [table, data], (error, results) => {
        if (error) throw error;
        resolve(results.insertId);
      });
    });

    return this.find(returnId, table);
  }

  static delete(id, table){
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM ?? WHERE id = ?';
      db.query(sql, [table, id], (error, results) => {
        if(error) throw error;
        resolve(results);
      }) 
    })
  }
}

export default Models;
